/**
 * NEXXCON-24 · Kontaktformular-Dienst (Google Apps Script, läuft im Google-Konto des Inhabers)
 *
 * Ablauf:
 *  1. Website sendet „init“ mit Formulardaten + Liste der Anhänge (Name, Größe).
 *     → Skript prüft alles, legt in Google Drive einen Ordner für die Anfrage an
 *       und erzeugt je Anhang eine Upload-Adresse (Drive „resumable upload“).
 *  2. Browser lädt die Anhänge direkt in diesen Drive-Ordner (bis 100 MB gesamt).
 *  3. Website sendet „finish“ → Skript legt die Anfrage als Mail ins Gmail-Postfach:
 *     Betreff mit ❗ PRIORITÄT A, Kopfzeilen „hohe Wichtigkeit“ (rotes ! in Outlook),
 *     Label „❗ PRIORITÄT A“ (rot), markiert als wichtig, mit Stern und ungelesen.
 *
 * Einrichtung: siehe ANLEITUNG.md im selben Ordner.
 */

const CONFIG = {
  /** Erlaubte Absender-Websites (ohne Schrägstrich am Ende) */
  origins: ['https://tnc-han.github.io', 'http://localhost:4321'],
  maxTotalBytes: 100 * 1024 * 1024,
  maxFiles: 20,
  /** Höchstzahl Anfragen pro Stunde (Schutz vor Missbrauch) */
  maxPerHour: 30,
  folderName: 'NEXXCON-24 Website-Anfragen',
  labelName: '❗ PRIORITÄT A',
  subjectPrefix: '❗ PRIORITÄT A – WICHTIG / DRINGEND',
};

/** Gefährliche Dateiendungen (Programme, Skripte, Makro-Dokumente, Verknüpfungen …) */
const BLOCKED = (
  'exe msi msp msix appx bat cmd com scr pif cpl dll sys drv ocx vbs vbe js jse mjs wsf wsh wsc ' +
  'ps1 ps1xml ps2 psc1 psm1 psd1 msh msh1 msh2 mshxml jar class hta lnk url scf inf reg msc gadget ' +
  'application appref-ms vb sct shb shs sh bash zsh csh ksh command run bin elf apk xapk ipa app dmg pkg ' +
  'deb rpm iso img vhd vhdx docm dotm xlsm xltm xlam pptm potm ppam ppsm sldm chm hlp library-ms settingcontent-ms'
).split(' ');

function doGet() {
  return json_({ ok: true, service: 'NEXXCON-24 Kontaktformular' });
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
  if (d.hp) return { ok: true, id: 'x', uploads: [] }; // Honeypot: Bot – still ignorieren
  const origin = String(d.origin || '');
  if (CONFIG.origins.indexOf(origin) < 0) return { ok: false, error: 'origin' };
  const name = clean_(d.name, 120);
  const email = clean_(d.email, 160);
  const message = clean_(d.message, 10000);
  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false, error: 'fields' };

  const files = Array.isArray(d.files) ? d.files.slice(0, CONFIG.maxFiles + 1) : [];
  if (files.length > CONFIG.maxFiles) return { ok: false, error: 'count' };
  let total = 0;
  for (const f of files) {
    total += Number(f.size) || 0;
    if (isBlocked_(f.name)) return { ok: false, error: 'type', file: String(f.name) };
  }
  if (total > CONFIG.maxTotalBytes) return { ok: false, error: 'size' };
  if (!rateOk_()) return { ok: false, error: 'busy' };

  const id = Utilities.formatDate(new Date(), 'Europe/Berlin', 'yyyy-MM-dd_HH-mm-ss') + '_' + Utilities.getUuid().slice(0, 8);
  const folder = rootFolder_().createFolder(id + ' – ' + name);
  const record = {
    id,
    folderId: folder.getId(),
    name,
    company: clean_(d.company, 160),
    email,
    phone: clean_(d.phone, 60),
    topic: clean_(d.topic, 120),
    message,
    lang: clean_(d.lang, 5),
    page: clean_(d.page, 300),
    files: files.map((f) => ({ name: safeName_(f.name), size: Number(f.size) || 0 })),
  };
  PropertiesService.getScriptProperties().setProperty('req_' + id, JSON.stringify(record));

  const uploads = record.files.map((f, i) => uploadSession_(folder.getId(), f.name, files[i].type, f.size, origin));
  return { ok: true, id, uploads };
}

function finish_(d) {
  const props = PropertiesService.getScriptProperties();
  const key = 'req_' + String(d.id || '');
  const raw = props.getProperty(key);
  if (!raw) return { ok: d.id === 'x' }; // Honeypot-Antwort oder unbekannt
  const r = JSON.parse(raw);
  props.deleteProperty(key);

  const folder = DriveApp.getFolderById(r.folderId);
  const links = [];
  const it = folder.getFiles();
  while (it.hasNext()) {
    const f = it.next();
    links.push({ name: f.getName(), size: f.getSize(), url: f.getUrl() });
  }
  if (!links.length) folder.setTrashed(true);
  deliver_(r, links, links.length ? folder.getUrl() : '');
  return { ok: true };
}

/** Legt die Anfrage als hoch priorisierte Mail ins eigene Gmail-Postfach. */
function deliver_(r, links, folderUrl) {
  const me = Session.getEffectiveUser().getEmail();
  const subject = CONFIG.subjectPrefix + ' | Website-Anfrage: ' + r.name + (r.topic ? ' (' + r.topic + ')' : '');
  const rows = [
    ['Name', r.name],
    ['Unternehmen', r.company],
    ['E-Mail', r.email],
    ['Telefon', r.phone],
    ['Bereich', r.topic],
    ['Sprache', r.lang],
    ['Gesendet von', r.page],
  ]
    .filter((x) => x[1])
    .map((x) => '<tr><td style="padding:6px 12px 6px 0;color:#666;vertical-align:top">' + esc_(x[0]) + '</td><td style="padding:6px 0">' + esc_(x[1]) + '</td></tr>')
    .join('');
  const files = links.length
    ? '<h3 style="margin:24px 0 8px">Anhänge (' + links.length + ')</h3><ul>' +
      links.map((l) => '<li><a href="' + l.url + '">' + esc_(l.name) + '</a> · ' + mb_(l.size) + '</li>').join('') +
      '</ul><p><a href="' + folderUrl + '">Ordner in Google Drive öffnen</a></p>'
    : '';
  const html =
    '<div style="font-family:Arial,sans-serif;font-size:15px;color:#111">' +
    '<div style="background:#d50000;color:#fff;font-weight:bold;padding:12px 16px;border-radius:6px;font-size:17px">❗ PRIORITÄT A – WICHTIG / DRINGEND · Neue Anfrage über die Website</div>' +
    '<table style="margin-top:16px;border-collapse:collapse">' + rows + '</table>' +
    '<h3 style="margin:24px 0 8px">Nachricht</h3><div style="white-space:pre-wrap;border-left:4px solid #c9a45c;padding:8px 12px;background:#faf7f0">' + esc_(r.message) + '</div>' +
    files +
    '<p style="margin-top:24px;color:#666;font-size:13px">Antworten Sie einfach auf diese Mail – die Antwort geht direkt an ' + esc_(r.email) + '.</p></div>';

  const mime = [
    'From: ' + encodeHeader_('NEXXCON-24 Website') + ' <' + me + '>',
    'To: ' + me,
    'Reply-To: ' + encodeHeader_(r.name) + ' <' + r.email + '>',
    'Subject: ' + encodeHeader_(subject),
    'Date: ' + new Date().toUTCString().replace('GMT', '+0000'),
    'X-Priority: 1 (Highest)',
    'X-MSMail-Priority: High',
    'Importance: High',
    'Priority: urgent',
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
    '',
    Utilities.base64Encode(html, Utilities.Charset.UTF_8),
  ].join('\r\n');

  Gmail.Users.Messages.insert(
    {
      raw: Utilities.base64EncodeWebSafe(mime, Utilities.Charset.UTF_8),
      labelIds: ['INBOX', 'UNREAD', 'IMPORTANT', 'STARRED', labelId_()],
    },
    'me',
    null,
    { internalDateSource: 'receivedTime' },
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
  if (id) {
    try {
      return DriveApp.getFolderById(id);
    } catch (e) {}
  }
  const folder = DriveApp.createFolder(CONFIG.folderName);
  props.setProperty('FOLDER_ID', folder.getId());
  return folder;
}

function labelId_() {
  const props = PropertiesService.getScriptProperties();
  const cached = props.getProperty('LABEL_ID');
  if (cached) return cached;
  const existing = (Gmail.Users.Labels.list('me').labels || []).filter((l) => l.name === CONFIG.labelName)[0];
  const label =
    existing ||
    Gmail.Users.Labels.create(
      {
        name: CONFIG.labelName,
        labelListVisibility: 'labelShow',
        messageListVisibility: 'show',
        color: { backgroundColor: '#cc3a21', textColor: '#ffffff' },
      },
      'me',
    );
  props.setProperty('LABEL_ID', label.id);
  return label.id;
}

function rateOk_() {
  const cache = CacheService.getScriptCache();
  const k = 'rate_' + Utilities.formatDate(new Date(), 'UTC', 'yyyyMMddHH');
  const n = Number(cache.get(k) || 0) + 1;
  cache.put(k, String(n), 3700);
  return n <= CONFIG.maxPerHour;
}

function isBlocked_(name) {
  const parts = String(name || '').toLowerCase().trim().replace(/[.\s]+$/, '').split('.');
  if (parts.length < 2) return false;
  return BLOCKED.indexOf(parts[parts.length - 1]) >= 0;
}

function safeName_(n) {
  return String(n || 'datei').replace(/[\\/:*?"<>|\u0000-\u001f]/g, '_').slice(0, 180);
}

function clean_(v, max) {
  return String(v == null ? '' : v).replace(/\u0000/g, '').trim().slice(0, max);
}

function esc_(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function mb_(b) {
  return (b / 1024 / 1024).toFixed(b < 1048576 ? 2 : 1) + ' MB';
}

function encodeHeader_(s) {
  return '=?UTF-8?B?' + Utilities.base64Encode(String(s), Utilities.Charset.UTF_8) + '?=';
}

function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}

/** Einmalig im Editor ausführen: legt Ordner und Label an und fragt die Berechtigungen ab. */
function setup() {
  rootFolder_();
  labelId_();
  deliver_(
    {
      name: 'Testanfrage',
      company: 'NEXXCON-24',
      email: Session.getEffectiveUser().getEmail(),
      phone: '',
      topic: 'Einrichtung',
      message: 'Das Kontaktformular ist eingerichtet. Diese Test-Mail kann gelöscht werden.',
      lang: 'de',
      page: 'Einrichtung',
    },
    [],
    '',
  );
}
