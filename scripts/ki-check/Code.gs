/**
 * NEXXCON-24 · KI-Potenzialcheck – Empfangsdienst (Google Apps Script im Google-Konto des Inhabers)
 *
 * Ablauf:
 *  1. Fragebogen (public/ki-check/index.html) sendet „init“ mit Kontakt, Antworten und Liste der Anhänge.
 *     → Skript prüft alles, legt in Google Drive einen Ordner je Lead an, speichert die Antworten
 *       (Antworten.html + Antworten.json) und erzeugt je Anhang eine Upload-Adresse (Drive „resumable upload“).
 *  2. Browser lädt Aufnahmen und Dateien direkt in diesen Ordner.
 *  3. „finish“ → Zeile in der Tabelle „KI-Check Leads“ + Mail mit Zusammenfassung ins eigene Gmail-Postfach.
 *
 * Einrichtung: siehe ANLEITUNG.md im selben Ordner.
 */

const CONFIG = {
  origins: ['https://tnc-han.github.io', 'http://localhost:4321', 'http://localhost:4398'],
  maxUploadBytes: 100 * 1024 * 1024, // eigene Dateien zusammen
  maxRecordingBytes: 300 * 1024 * 1024, // alle Aufnahmen zusammen (Video max. 3 Min. ≈ 20–25 MB je Stück)
  maxFiles: 20,
  maxRecordings: 60,
  maxPerHour: 30,
  folderName: 'NEXXCON-24 KI-Check Leads',
  sheetName: 'KI-Check Leads',
  labelName: 'KI-Check Lead',
  subjectPrefix: '🤖 KI-Check',
};

const BLOCKED = (
  'exe msi msp msix appx bat cmd com scr pif cpl dll sys drv ocx vbs vbe js jse mjs wsf wsh wsc ' +
  'ps1 ps1xml ps2 psc1 psm1 psd1 msh msh1 msh2 mshxml jar class hta lnk url scf inf reg msc gadget ' +
  'application appref-ms vb sct shb shs sh bash zsh csh ksh command run bin elf apk xapk ipa app dmg pkg ' +
  'deb rpm iso img vhd vhdx docm dotm xlsm xltm xlam pptm potm ppam ppsm sldm chm hlp library-ms settingcontent-ms'
).split(' ');

/**
 * Lead-Bewertung: Punkte je gewählter Antwort (Index 0–4, Antworten sind aufsteigend sortiert).
 * Max. 100 Punkte. A ≥ 65 · B ≥ 40 · sonst C.
 */
const SCORE = {
  q02: [4, 10, 16, 20, 20], // Mitarbeitende
  q08: [2, 8, 14, 18, 20], // Routinestunden
  q23: [0, 6, 12, 18, 20], // Budget
  q24: [2, 6, 12, 18, 20], // Startzeitpunkt
  q14: [2, 5, 8, 10, 10], // Anfragevolumen
  q18: [0, 3, 6, 9, 10], // Haltung Team
};

function doGet() {
  return json_({ ok: true, service: 'NEXXCON-24 KI-Check' });
}

function doPost(e) {
  try {
    const data = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    if (data.action === 'init') return json_(init_(data));
    if (data.action === 'finish') return json_(finish_(data));
    return json_({ ok: false, error: 'unknown action' });
  } catch (err) {
    console.error(err);
    return json_({ ok: false, error: 'server' });
  }
}

function init_(d) {
  if (d.hp) return { ok: true, id: 'x', uploads: [] };
  const origin = String(d.origin || '');
  if (CONFIG.origins.indexOf(origin) < 0) return { ok: false, error: 'origin' };
  const c = d.contact || {};
  const contact = {
    name: clean_(c.name, 120),
    company: clean_(c.company, 160),
    email: clean_(c.email, 160),
    phone: clean_(c.phone, 60),
    website: clean_(c.website, 200),
    callback: !!c.callback,
  };
  if (!contact.name || !contact.company || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email) || !c.consent) {
    return { ok: false, error: 'fields' };
  }

  const answers = (Array.isArray(d.answers) ? d.answers : []).slice(0, 50).map((a) => ({
    id: clean_(a.id, 6),
    part: Number(a.part) === 2 ? 2 : 1,
    area: clean_(a.area, 80),
    q: clean_(a.q, 300),
    sel: (Array.isArray(a.sel) ? a.sel : []).map(Number).filter((n) => n >= 0 && n <= 4),
    labels: (Array.isArray(a.labels) ? a.labels : []).slice(0, 5).map((l) => clean_(l, 200)),
    other: clean_(a.other, 3000),
  }));

  const files = Array.isArray(d.files) ? d.files.slice(0, CONFIG.maxFiles + CONFIG.maxRecordings + 1) : [];
  let up = 0, rec = 0, nUp = 0, nRec = 0;
  for (const f of files) {
    if (isBlocked_(f.name)) return { ok: false, error: 'type', file: String(f.name) };
    if (f.kind === 'recording') { rec += Number(f.size) || 0; nRec++; } else { up += Number(f.size) || 0; nUp++; }
  }
  if (nUp > CONFIG.maxFiles || nRec > CONFIG.maxRecordings) return { ok: false, error: 'count' };
  if (up > CONFIG.maxUploadBytes || rec > CONFIG.maxRecordingBytes) return { ok: false, error: 'size' };
  if (!rateOk_()) return { ok: false, error: 'busy' };

  const id = Utilities.formatDate(new Date(), 'Europe/Berlin', 'yyyy-MM-dd_HH-mm') + '_' + Utilities.getUuid().slice(0, 6);
  const score = score_(answers);
  const folder = rootFolder_().createFolder(id + ' – ' + contact.company + ' (' + contact.name + ')');
  const record = { id, deep: !!d.deep, contact, answers, score, page: clean_(d.page, 300), created: new Date().toISOString() };
  folder.createFile('Antworten.json', JSON.stringify(record, null, 2), MimeType.PLAIN_TEXT);
  folder.createFile('Antworten.html', summaryHtml_(record, [], ''), MimeType.HTML);

  PropertiesService.getScriptProperties().setProperty('ki_' + id, JSON.stringify({ folderId: folder.getId() }));
  const uploads = files.map((f) => uploadSession_(folder.getId(), safeName_(f.name), f.type, Number(f.size) || 0, origin));
  return { ok: true, id, uploads };
}

function finish_(d) {
  const props = PropertiesService.getScriptProperties();
  const key = 'ki_' + String(d.id || '');
  const raw = props.getProperty(key);
  if (!raw) return { ok: d.id === 'x' };
  props.deleteProperty(key);
  const folder = DriveApp.getFolderById(JSON.parse(raw).folderId);
  const record = JSON.parse(folder.getFilesByName('Antworten.json').next().getBlob().getDataAsString('UTF-8'));

  const links = [];
  const it = folder.getFiles();
  while (it.hasNext()) {
    const f = it.next();
    const n = f.getName();
    if (n === 'Antworten.json' || n === 'Antworten.html') continue;
    links.push({ name: n, size: f.getSize(), url: f.getUrl() });
  }
  const html = summaryHtml_(record, links, folder.getUrl());
  const it2 = folder.getFilesByName('Antworten.html');
  if (it2.hasNext()) it2.next().setTrashed(true);
  folder.createFile('Antworten.html', html, MimeType.HTML);

  logSheet_(record, links.length, folder.getUrl());
  mail_(record, html);
  return { ok: true };
}

/* ---------- Auswertung ---------- */

function score_(answers) {
  let pts = 0;
  answers.forEach((a) => {
    const w = SCORE[a.id];
    if (w && a.sel.length) pts += w[a.sel[0]] || 0;
  });
  const grade = pts >= 65 ? 'A' : pts >= 40 ? 'B' : 'C';
  return { points: pts, grade };
}

function pick_(r, id) {
  const a = r.answers.filter((x) => x.id === id)[0];
  if (!a) return '';
  return a.labels.join(', ') + (a.other ? (a.labels.length ? ' + ' : '') + 'Sonstiges: ' + a.other : '');
}

function summaryHtml_(r, links, folderUrl) {
  const c = r.contact;
  const grade = { A: '#1e8e3e', B: '#c48a00', C: '#777' }[r.score.grade];
  const rows = [
    ['Name', c.name], ['Unternehmen', c.company], ['E-Mail', c.email], ['Telefon', c.phone], ['Website', c.website],
    ['Erstgespräch gewünscht', c.callback ? 'JA' : 'nein'], ['Vertiefung beantwortet', r.deep ? 'ja (Rabattcode erhalten)' : 'nein'],
  ].filter((x) => x[1]).map((x) => '<tr><td style="padding:4px 14px 4px 0;color:#666">' + esc_(x[0]) + '</td><td>' + esc_(x[1]) + '</td></tr>').join('');

  let lastArea = '', lastPart = 0, qa = '';
  r.answers.forEach((a) => {
    if (a.part !== lastPart) { qa += '<h3 style="margin:26px 0 6px;color:#9c7a3c">' + (a.part === 1 ? 'Teil 1 · Ist-Situation' : 'Teil 2 · Vertiefung je Geschäftsbereich') + '</h3>'; lastPart = a.part; lastArea = ''; }
    if (a.area !== lastArea) { qa += '<h4 style="margin:16px 0 4px;color:#555;text-transform:uppercase;font-size:12px;letter-spacing:.08em">' + esc_(a.area) + '</h4>'; lastArea = a.area; }
    qa += '<p style="margin:6px 0"><b>' + esc_(a.id.toUpperCase() + ' · ' + a.q) + '</b><br>' +
      (a.labels.length ? esc_(a.labels.join(' · ')) : '<i>–</i>') +
      (a.other ? '<br><span style="display:inline-block;margin-top:4px;border-left:3px solid #c9a45c;padding:2px 8px;background:#faf7f0;white-space:pre-wrap">Sonstiges: ' + esc_(a.other) + '</span>' : '') + '</p>';
  });
  const files = links.length
    ? '<h3 style="margin:26px 0 6px">Aufnahmen & Dateien (' + links.length + ')</h3><ul>' +
      links.map((l) => '<li><a href="' + l.url + '">' + esc_(l.name) + '</a> · ' + mb_(l.size) + '</li>').join('') + '</ul>'
    : '';
  return '<!doctype html><meta charset="utf-8"><div style="font-family:Arial,sans-serif;font-size:14px;color:#111;max-width:760px">' +
    '<div style="background:#0e141e;color:#e6d3a8;padding:14px 18px;border-radius:8px;font-size:17px"><b>KI-Potenzialcheck</b> · ' + esc_(c.company) +
    ' <span style="float:right;background:' + grade + ';color:#fff;border-radius:6px;padding:2px 10px">Lead ' + r.score.grade + ' · ' + r.score.points + '/100</span></div>' +
    '<table style="margin-top:14px;border-collapse:collapse">' + rows + '</table>' +
    '<p style="margin-top:14px;padding:10px;background:#f4f6f9;border-radius:6px"><b>Kurzprofil:</b> ' +
    esc_([pick_(r, 'q01'), pick_(r, 'q02') + ' MA', 'Budget ' + pick_(r, 'q23'), 'Start ' + pick_(r, 'q24')].join(' · ')) + '</p>' +
    qa + files + (folderUrl ? '<p><a href="' + folderUrl + '">Ordner in Google Drive öffnen</a></p>' : '') +
    '<p style="color:#888;font-size:12px;margin-top:24px">Eingang ' + esc_(r.created) + ' · ' + esc_(r.page) + '</p></div>';
}

/* ---------- Ablage ---------- */

function logSheet_(r, nFiles, folderUrl) {
  const ss = sheet_();
  const sh = ss.getSheets()[0];
  const c = r.contact;
  sh.appendRow([
    new Date(), r.score.grade, r.score.points, c.company, c.name, c.email, c.phone, c.website, c.callback ? 'ja' : 'nein', r.deep ? 'ja' : 'nein',
    pick_(r, 'q01'), pick_(r, 'q02'), pick_(r, 'q03'), pick_(r, 'q08'), pick_(r, 'q16'), pick_(r, 'q21'), pick_(r, 'q23'), pick_(r, 'q24'), pick_(r, 'q25'),
    nFiles, folderUrl, 'neu',
  ]);
}

function sheet_() {
  const props = PropertiesService.getScriptProperties();
  const id = props.getProperty('SHEET_ID');
  if (id) { try { return SpreadsheetApp.openById(id); } catch (e) {} }
  const ss = SpreadsheetApp.create(CONFIG.sheetName);
  const sh = ss.getSheets()[0];
  sh.appendRow(['Eingang', 'Lead', 'Punkte', 'Unternehmen', 'Name', 'E-Mail', 'Telefon', 'Website', 'Erstgespräch', 'Vertiefung',
    'Branche', 'Mitarbeitende', 'Umsatz', 'Routine-Std./Woche', 'KI-Nutzung', 'Potenzialbereiche', 'Budget', 'Start', 'Unterstützung',
    'Anhänge', 'Drive-Ordner', 'Status']);
  sh.setFrozenRows(1);
  sh.getRange('1:1').setFontWeight('bold').setBackground('#0e141e').setFontColor('#e6d3a8');
  DriveApp.getFileById(ss.getId()).moveTo(rootFolder_());
  props.setProperty('SHEET_ID', ss.getId());
  return ss;
}

function mail_(r, html) {
  const me = Session.getEffectiveUser().getEmail();
  const c = r.contact;
  const subject = CONFIG.subjectPrefix + ' Lead ' + r.score.grade + ' (' + r.score.points + ') | ' + c.company + ' – ' + c.name + (c.callback ? ' | Erstgespräch gewünscht' : '');
  const mime = [
    'From: ' + encodeHeader_('NEXXCON-24 KI-Check') + ' <' + me + '>',
    'To: ' + me,
    'Reply-To: ' + encodeHeader_(c.name) + ' <' + c.email + '>',
    'Subject: ' + encodeHeader_(subject),
    'Date: ' + new Date().toUTCString().replace('GMT', '+0000'),
    r.score.grade === 'A' ? 'Importance: High' : 'Importance: Normal',
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
    '',
    Utilities.base64Encode(html, Utilities.Charset.UTF_8),
  ].join('\r\n');
  const labels = ['INBOX', 'UNREAD', labelId_()];
  if (r.score.grade === 'A') labels.push('IMPORTANT', 'STARRED');
  Gmail.Users.Messages.insert(
    { raw: Utilities.base64EncodeWebSafe(mime, Utilities.Charset.UTF_8), labelIds: labels },
    'me', null, { internalDateSource: 'receivedTime' },
  );
}

/* ---------- Hilfsfunktionen ---------- */

function uploadSession_(folderId, name, type, size, origin) {
  const res = UrlFetchApp.fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=resumable', {
    method: 'post',
    contentType: 'application/json; charset=UTF-8',
    payload: JSON.stringify({ name, parents: [folderId] }),
    headers: {
      Authorization: 'Bearer ' + ScriptApp.getOAuthToken(),
      'X-Upload-Content-Type': String(type || 'application/octet-stream'),
      'X-Upload-Content-Length': String(size),
      Origin: origin,
    },
    muteHttpExceptions: true,
  });
  const h = res.getAllHeaders();
  return h.Location || h.location || '';
}

function rootFolder_() {
  const props = PropertiesService.getScriptProperties();
  const id = props.getProperty('FOLDER_ID');
  if (id) { try { return DriveApp.getFolderById(id); } catch (e) {} }
  const folder = DriveApp.createFolder(CONFIG.folderName);
  props.setProperty('FOLDER_ID', folder.getId());
  return folder;
}

function labelId_() {
  const props = PropertiesService.getScriptProperties();
  const cached = props.getProperty('LABEL_ID');
  if (cached) return cached;
  const existing = (Gmail.Users.Labels.list('me').labels || []).filter((l) => l.name === CONFIG.labelName)[0];
  const label = existing || Gmail.Users.Labels.create(
    { name: CONFIG.labelName, labelListVisibility: 'labelShow', messageListVisibility: 'show', color: { backgroundColor: '#ffad47', textColor: '#000000' } },
    'me',
  );
  props.setProperty('LABEL_ID', label.id);
  return label.id;
}

function rateOk_() {
  const cache = CacheService.getScriptCache();
  const k = 'kirate_' + Utilities.formatDate(new Date(), 'UTC', 'yyyyMMddHH');
  const n = Number(cache.get(k) || 0) + 1;
  cache.put(k, String(n), 3700);
  return n <= CONFIG.maxPerHour;
}

function isBlocked_(name) {
  const parts = String(name || '').toLowerCase().trim().replace(/[.\s]+$/, '').split('.');
  if (parts.length < 2) return false;
  return BLOCKED.indexOf(parts[parts.length - 1]) >= 0;
}
function safeName_(n) { return String(n || 'datei').replace(/[\\/:*?"<>|\u0000-\u001f]/g, '_').slice(0, 180); }
function clean_(v, max) { return String(v == null ? '' : v).replace(/\u0000/g, '').trim().slice(0, max); }
function esc_(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
function mb_(b) { return (b / 1024 / 1024).toFixed(b < 1048576 ? 2 : 1) + ' MB'; }
function encodeHeader_(s) { return '=?UTF-8?B?' + Utilities.base64Encode(String(s), Utilities.Charset.UTF_8) + '?='; }
function json_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }

/** Einmalig im Editor ausführen: legt Ordner, Tabelle und Label an, fragt die Berechtigungen ab und schickt eine Test-Mail. */
function setup() {
  rootFolder_();
  sheet_();
  labelId_();
  const me = Session.getEffectiveUser().getEmail();
  const r = {
    id: 'test', deep: false, page: 'Einrichtung', created: new Date().toISOString(),
    contact: { name: 'Testlauf', company: 'NEXXCON-24', email: me, phone: '', website: '', callback: false },
    answers: [{ id: 'q01', part: 1, area: 'Ihr Unternehmen', q: 'Testfrage', sel: [0], labels: ['Einrichtung erfolgreich'], other: '' }],
    score: { points: 0, grade: 'C' },
  };
  mail_(r, summaryHtml_(r, [], ''));
}
