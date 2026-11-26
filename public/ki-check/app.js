/* KI-Potenzialcheck – Programmlogik für alle Sprachen. Texte: lang-*.js, Gestaltung: app.css. */
/* ===================== EINSTELLUNGEN ===================== */
// Web-App-URL des Google-Apps-Skripts (scripts/ki-check/ANLEITUNG.md). Leer = Formular zeigt Hinweis statt zu senden.
const ENDPOINT = 'https://script.google.com/macros/s/AKfycbzThfBMwL7OQ35-6SfCoOC_4Fl3TPBBn_vdrzMzv-LMKCNTx1eAl9klN10U4IqOhJ8I/exec';
const DISCOUNT_CODE = 'KI Ready 2027';
const DISCOUNT = '10 %';
const MAX_UPLOAD = 100 * 1024 * 1024;   // eigene Dateien zusammen
const MAX_FILES = 20;
const AUDIO_MAX_SEC = 5 * 60;
const VIDEO_MAX_SEC = 3 * 60;
const BLOCKED = ('exe msi msp msix appx bat cmd com scr pif cpl dll sys drv ocx vbs vbe js jse mjs wsf wsh wsc ps1 ps1xml ps2 psc1 psm1 psd1 msh msh1 msh2 mshxml jar class hta lnk url scf inf reg msc gadget application appref-ms vb sct shb shs sh bash zsh csh ksh command run bin elf apk xapk ipa app dmg pkg deb rpm iso img vhd vhdx docm dotm xlsm xltm xlam pptm potm ppam ppsm sldm chm hlp library-ms settingcontent-ms').split(' ');

/* ===================== SPRACHE + FRAGEN =====================
   Texte und Fragen stehen in lang-de.js / lang-en.js / lang-tr.js. Die Sprache bestimmt <html lang>.
   Fragen- und Antwortreihenfolge ist in allen Sprachen gleich (Lead-Bewertung nach Index).
   An das Skript gehen immer die deutschen Fragen/Antworten, damit die Auswertung einheitlich bleibt. */
const LANG = (document.documentElement.lang || 'de').slice(0,2);
const PACK = (window.NXL && window.NXL[LANG]) || window.NXL.de;
const L = PACK.ui;
const DE = window.NXL.de;
const PART1 = PACK.PART1, PART2 = PACK.PART2;
const TOTAL_ALL = PART1.length + PART2.length; // 45 (+ Entscheidungsfrage = 46)

/* ===================== ZUSTAND ===================== */
const state = {
  view:'intro',       // intro | q | gate | final | done
  part:1, idx:0,
  deep:null,
  answers:{},         // id -> {sel:[i], other:'' , otherOn:bool}
  media:{},           // id -> [{kind:'audio'|'video', blob, name, dur}]
  files:[],           // eigene Uploads
  contact:{name:'',company:'',email:'',phone:'',website:'',consent:false,callback:false},
};
const app = document.getElementById('app');
const $ = (s, r=document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const fmtMB = b => (b/1048576).toFixed(b<1048576?2:1).replace('.',L.dec) + ' MB';
const fmtTime = s => Math.floor(s/60)+':'+String(Math.floor(s%60)).padStart(2,'0');
const list = () => state.part === 1 ? PART1 : PART2;

// Entwurf im Browser merken (nur Antworten, keine Medien)
const KEY = 'nx-ki-check-v1';
function save(){ try{ localStorage.setItem(KEY, JSON.stringify({answers:state.answers,deep:state.deep,contact:{...state.contact,consent:false}})); }catch(e){} }
function load(){ try{ const d = JSON.parse(localStorage.getItem(KEY)||'null'); if(d){ state.answers=d.answers||{}; state.deep=d.deep??null; Object.assign(state.contact,d.contact||{}); } }catch(e){} }
load();

/* ===================== FORTSCHRITT ===================== */
function progress(){
  let done = 0, label = '';
  const total = state.deep === false ? PART1.length : TOTAL_ALL;
  if (state.view==='intro'){ done=0; label=''; }
  else if (state.view==='q'){ done = (state.part===1?0:PART1.length)+state.idx; label = L.qOf(done+1, state.part===1 && state.deep===null ? PART1.length : total); }
  else if (state.view==='gate'){ done=PART1.length; label=L.stepGate; }
  else if (state.view==='final'){ done=total; label=L.stepFinal; }
  else { done=total; label=L.stepDone; }
  const denom = (state.view==='q'&&state.part===1&&state.deep===null)||state.view==='gate' ? PART1.length : total;
  $('#bar').style.width = (state.view==='intro'?0:Math.min(100, done/denom*100))+'%';
  if (state.view==='final'||state.view==='done') $('#bar').style.width='100%';
  $('#stepCount').textContent = label;
}

function render(){
  stopAllStreams();
  progress();
  app.classList.remove('fade'); void app.offsetWidth; app.classList.add('fade');
  ({intro:renderIntro,q:renderQuestion,gate:renderGate,final:renderFinal,done:renderDone})[state.view]();
  postHeight();
  app.focus({preventScroll:true});
  if (!inFrame) window.scrollTo({top:0,behavior:'smooth'});
}

/* ===================== START ===================== */
function renderIntro(){
  const started = Object.keys(state.answers).length;
  app.innerHTML = `
    <span class="eyebrow">${L.introEyebrow}</span>
    <h1>${L.introH}</h1>
    <p class="muted">${L.introP}</p>
    <div class="facts">
      <div><b>${L.fact1b}</b>${L.fact1}</div>
      <div><b>${L.fact2b}</b>${L.fact2}</div>
      <div><b>${L.fact3b(DISCOUNT)}</b>${L.fact3}</div>
    </div>
    <p class="small muted">${L.introHow}</p>
    <div class="xls">
      <p class="small muted">${L.xlsText}</p>
      <a class="btn btn-ghost btn-sm" href="${L.xlsFile}" download>${L.xlsBtn}</a>
    </div>
    <div class="nav">
      ${started?`<button class="btn btn-ghost" id="reset" type="button">${L.reset}</button>`:''}
      <div class="right"><button class="btn btn-primary" id="go" type="button">${started?L.resume:L.start} →</button></div>
    </div>`;
  $('#go').onclick = () => { state.view='q'; if(state.deep===true && Object.keys(state.answers).some(k=>k[0]==='v')){state.part=2;} render(); };
  const r = $('#reset'); if (r) r.onclick = () => { state.answers={}; state.deep=null; state.part=1; state.idx=0; save(); render(); };
}

/* ===================== FRAGE ===================== */
function renderQuestion(){
  const Q = list()[state.idx];
  const a = state.answers[Q.id] || (state.answers[Q.id] = {sel:[],other:'',otherOn:false});
  const type = Q.multi ? 'checkbox' : 'radio';
  const letters = 'ABCDE';
  app.innerHTML = `
    <span class="eyebrow">${state.part===2?L.deepPrefix:''}${esc(Q.area)}</span>
    <h2 id="qt">${esc(Q.q)}</h2>
    <p class="hint">${Q.multi ? L.hintMulti : L.hintOne}</p>
    <fieldset class="opts ${Q.multi?'multi':''}" aria-labelledby="qt">
      ${Q.opts.map((o,i)=>`<label class="opt"><input type="${type}" name="${Q.id}" value="${i}" ${a.sel.includes(i)?'checked':''}><span class="mark"></span><span>${esc(o)}</span><span class="letter">${letters[i]}</span></label>`).join('')}
      <label class="opt"><input type="checkbox" id="otherOn" ${a.otherOn?'checked':''}><span class="mark" style="border-radius:6px"></span><span>${L.other}</span><span class="letter">F</span></label>
    </fieldset>
    <div class="other-box" id="otherBox" ${a.otherOn?'':'hidden'}>
      <label class="sr" for="otherText">${L.otherSr}</label>
      <textarea id="otherText" rows="3" maxlength="3000" placeholder="${L.otherPh}">${esc(a.other)}</textarea>
      <div class="extras">
        <span class="label">${L.speak}</span>
        <div id="mediaSlot"></div>
      </div>
    </div>
    <div class="error" id="err" role="alert"></div>
    <div class="nav">
      <button class="btn btn-ghost" id="back" type="button">${L.back}</button>
      <div class="right"><span class="kbd" aria-hidden="true">Enter ↵</span><button class="btn btn-primary" id="next" type="button">${L.next}</button></div>
    </div>`;
  const otherOn = $('#otherOn'), box = $('#otherBox'), ta = $('#otherText');
  mountMedia($('#mediaSlot'), Q.id);
  const sync = () => {
    a.sel = [...app.querySelectorAll(`input[name="${Q.id}"]:checked`)].map(i=>+i.value);
    a.otherOn = otherOn.checked; a.other = ta.value;
    box.hidden = !a.otherOn; save(); postHeight();
  };
  app.querySelectorAll(`input[name="${Q.id}"]`).forEach(i => i.addEventListener('change', sync));
  otherOn.addEventListener('change', () => { sync(); if (otherOn.checked) ta.focus(); });
  ta.addEventListener('input', sync);
  $('#back').onclick = back;
  $('#next').onclick = () => {
    sync();
    const hasMedia = (state.media[Q.id]||[]).length>0;
    if (!a.sel.length && !(a.otherOn && (a.other.trim() || hasMedia))) { $('#err').textContent = L.errPick; return; }
    if (isRecording()) { $('#err').textContent = L.errRec; return; }
    next();
  };
}
function next(){
  if (state.idx < list().length-1){ state.idx++; }
  else if (state.part===1){ state.view = state.deep===true ? 'q' : 'gate'; if(state.deep===true){state.part=2;state.idx=0;} }
  else { state.view='final'; }
  render();
}
function back(){
  if (state.view==='final'){ if(state.deep){state.view='q';state.part=2;state.idx=PART2.length-1;} else {state.view='gate';} }
  else if (state.view==='gate'){ state.view='q'; state.part=1; state.idx=PART1.length-1; }
  else if (state.idx>0){ state.idx--; }
  else if (state.part===2){ state.view='gate'; }
  else { state.view='intro'; }
  render();
}

/* ===================== ENTSCHEIDUNGSFRAGE NACH 25 ===================== */
function renderGate(){
  app.innerHTML = `
    <span class="eyebrow">${L.gateEyebrow}</span>
    <h2>${L.gateH}</h2>
    <p class="muted">${L.gateP}</p>
    <div class="gate-offer">
      <strong>${L.gateOffer(DISCOUNT)}</strong>
      <span class="small muted">${L.gateOfferSmall}</span>
    </div>
    <fieldset class="opts" aria-label="${L.gateAria}">
      <label class="opt"><input type="radio" name="gate" value="yes" ${state.deep===true?'checked':''}><span class="mark"></span><span>${L.gateYes(DISCOUNT)}</span></label>
      <label class="opt"><input type="radio" name="gate" value="no" ${state.deep===false?'checked':''}><span class="mark"></span><span>${L.gateNo}</span></label>
    </fieldset>
    <div class="error" id="err" role="alert"></div>
    <div class="nav">
      <button class="btn btn-ghost" id="back" type="button">${L.back}</button>
      <div class="right"><button class="btn btn-primary" id="next" type="button">${L.next}</button></div>
    </div>`;
  $('#back').onclick = back;
  $('#next').onclick = () => {
    const v = app.querySelector('input[name=gate]:checked');
    if (!v) { $('#err').textContent = L.errGate; return; }
    state.deep = v.value==='yes'; save();
    if (state.deep){ state.view='q'; state.part=2; state.idx=0; } else { state.view='final'; }
    render();
  };
}

/* ===================== AUFNAHME (Audio/Video) ===================== */
let active = null; // {recorder, stream, timer}
function isRecording(){ return !!(active && active.recorder && active.recorder.state==='recording'); }
function stopAllStreams(){ if(active){ try{ if(active.recorder.state!=='inactive') active.recorder.stop(); }catch(e){} active.stream.getTracks().forEach(t=>t.stop()); clearInterval(active.timer); active=null; } }
function pickType(kind){
  const c = kind==='video'
    ? ['video/webm;codecs=vp9,opus','video/webm;codecs=vp8,opus','video/webm','video/mp4']
    : ['audio/webm;codecs=opus','audio/webm','audio/mp4','audio/ogg'];
  return c.find(t => window.MediaRecorder && MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(t)) || '';
}
function mountMedia(slot, key){
  const canRec = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
  const items = state.media[key] || (state.media[key]=[]);
  const draw = () => {
    slot.innerHTML = `
      <ul class="attach-list">${items.map((m,i)=>`<li><span>${m.kind==='video'?'🎬':'🎙️'}</span><span class="name">${m.kind==='video'?L.video:L.voice} · ${fmtTime(m.dur)}</span><span class="size">${fmtMB(m.blob.size)}</span><button type="button" data-play="${i}" aria-label="${L.play}">▶</button><button type="button" data-del="${i}" aria-label="${L.remove}">✕</button></li>`).join('')}</ul>
      <div id="player"></div>
      ${canRec ? `<div class="rec-buttons">
        <button type="button" class="btn btn-rec btn-sm" data-rec="audio"><span class="dot"></span>${L.recAudio}</button>
        <button type="button" class="btn btn-rec btn-sm" data-rec="video"><span class="dot"></span>${L.recVideo}</button>
      </div>` : `<p class="small muted">${L.noRec}</p>`}
      <div id="recUI"></div>`;
    slot.querySelectorAll('[data-del]').forEach(b => b.onclick = () => { items.splice(+b.dataset.del,1); draw(); postHeight(); });
    slot.querySelectorAll('[data-play]').forEach(b => b.onclick = () => {
      const m = items[+b.dataset.play]; const url = URL.createObjectURL(m.blob);
      $('#player',slot).innerHTML = m.kind==='video' ? `<div class="recorder"><video controls playsinline src="${url}"></video></div>` : `<div class="recorder"><audio controls src="${url}"></audio></div>`;
      postHeight();
    });
    slot.querySelectorAll('[data-rec]').forEach(b => b.onclick = () => startRec(b.dataset.rec));
  };
  async function startRec(kind){
    if (isRecording()) return;
    stopAllStreams();
    const ui = $('#recUI', slot);
    const max = kind==='video' ? VIDEO_MAX_SEC : AUDIO_MAX_SEC;
    let stream;
    try {
      stream = await navigator.mediaDevices.getUserMedia(kind==='video'
        ? {audio:true, video:{width:{ideal:640},height:{ideal:480},frameRate:{ideal:24}}}
        : {audio:true});
    } catch(e){
      ui.innerHTML = `<p class="error">${L.errCam(kind==='video')}</p>`; postHeight(); return;
    }
    const mimeType = pickType(kind);
    const rec = new MediaRecorder(stream, Object.assign(mimeType?{mimeType}:{}, kind==='video'?{videoBitsPerSecond:900000,audioBitsPerSecond:64000}:{audioBitsPerSecond:64000}));
    const chunks = []; const t0 = Date.now();
    active = {recorder:rec, stream, timer:null};
    ui.innerHTML = `<div class="recorder">
        ${kind==='video'?'<video id="live" muted playsinline autoplay></video>':''}
        <div class="rec-status"><span class="live"></span><span>${L.recLive}</span><span id="tm">0:00</span><span class="muted">/ ${fmtTime(max)}</span>
        <button type="button" class="btn btn-primary btn-sm" id="stop" style="margin-left:auto">${L.stop}</button></div>
      </div>`;
    if (kind==='video'){ const v=$('#live',ui); v.srcObject=stream; }
    postHeight();
    rec.ondataavailable = e => { if (e.data && e.data.size) chunks.push(e.data); };
    rec.onstop = () => {
      stream.getTracks().forEach(t=>t.stop()); clearInterval(active && active.timer);
      const dur = Math.min(max,(Date.now()-t0)/1000);
      const type = rec.mimeType || mimeType || (kind==='video'?'video/webm':'audio/webm');
      const ext = type.includes('mp4') ? (kind==='video'?'mp4':'m4a') : type.includes('ogg') ? 'ogg' : 'webm';
      if (chunks.length) items.push({kind, blob:new Blob(chunks,{type}), dur, ext});
      active = null; draw(); postHeight();
    };
    rec.start(1000);
    active.timer = setInterval(() => {
      const s = (Date.now()-t0)/1000; const tm = $('#tm',ui); if (tm) tm.textContent = fmtTime(s);
      if (s >= max && rec.state==='recording') rec.stop();
    }, 250);
    $('#stop',ui).onclick = () => { if (rec.state==='recording') rec.stop(); };
  }
  draw();
}

/* ===================== ABSCHLUSS: UPLOAD + KONTAKT ===================== */
function renderFinal(){
  const c = state.contact;
  app.innerHTML = `
    <span class="eyebrow">${L.finalEyebrow}</span>
    <h2>${L.finalH}</h2>
    <p class="muted">${L.finalP}</p>
    <div class="drop" id="drop" tabindex="0" role="button" aria-label="${L.dropAria}">
      <strong>${L.dropStrong}</strong> ${L.dropOr}<br>
      <span class="small">${L.dropSmall}</span>
      <input type="file" id="fileIn" multiple hidden>
    </div>
    <ul class="attach-list" id="fileList" style="margin-top:12px"></ul>
    <div class="meter" style="margin-top:10px"><span id="meter" style="width:0"></span></div>
    <p class="small muted" id="meterText" style="margin-top:6px"></p>

    <div class="extras" style="margin-top:8px">
      <span class="label">${L.generalMsg}</span>
      <div id="mediaSlot"></div>
    </div>

    <h2 style="margin-top:26px;font-size:1.25rem">${L.contactH}</h2>
    <form id="cf" class="grid2" novalidate>
      <label class="field">${L.fName}<input type="text" id="cName" autocomplete="name" required maxlength="120" value="${esc(c.name)}"></label>
      <label class="field">${L.fCompany}<input type="text" id="cCompany" autocomplete="organization" required maxlength="160" value="${esc(c.company)}"></label>
      <label class="field">${L.fEmail}<input type="email" id="cEmail" autocomplete="email" required maxlength="160" value="${esc(c.email)}"></label>
      <label class="field">${L.fPhone}<input type="tel" id="cPhone" autocomplete="tel" maxlength="60" value="${esc(c.phone)}"></label>
      <label class="field full">${L.fWeb}<input type="text" id="cWeb" autocomplete="url" maxlength="200" value="${esc(c.website)}" placeholder="${L.webPh}"></label>
      <input type="text" id="hp" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px" name="firma_2">
      <label class="check full"><input type="checkbox" id="cCall" ${c.callback?'checked':''}> ${L.callback}</label>
      <label class="check full"><input type="checkbox" id="cConsent" required> <span>${L.consent(L.privacyUrl)}</span></label>
    </form>
    <div class="error" id="err" role="alert"></div>
    <div class="upload-progress" id="up" hidden>
      <div class="meter"><span id="upBar" style="width:0;background:linear-gradient(90deg,var(--gold-deep),var(--champagne))"></span></div>
      <span class="small muted" id="upText">${L.sending}</span>
    </div>
    <div class="nav">
      <button class="btn btn-ghost" id="back" type="button">${L.back}</button>
      <div class="right"><button class="btn btn-primary" id="send" type="button">${L.send}</button></div>
    </div>`;
  mountMedia($('#mediaSlot'), 'final');
  const fileIn = $('#fileIn'), drop = $('#drop');
  const drawFiles = () => {
    const total = state.files.reduce((s,f)=>s+f.size,0);
    $('#fileList').innerHTML = state.files.map((f,i)=>`<li><span class="name">${esc(f.name)}</span><span class="size">${fmtMB(f.size)}</span><button type="button" data-rm="${i}" aria-label="${esc(L.fileRemove(f.name))}">✕</button></li>`).join('');
    $('#fileList').querySelectorAll('[data-rm]').forEach(b => b.onclick = () => { state.files.splice(+b.dataset.rm,1); drawFiles(); });
    $('#meter').style.width = Math.min(100,total/MAX_UPLOAD*100)+'%';
    $('#meterText').textContent = state.files.length ? L.meter(state.files.length, fmtMB(total)) : '';
    postHeight();
  };
  const addFiles = list => {
    const err = [];
    for (const f of list){
      const ext = (f.name.split('.').length>1 ? f.name.split('.').pop() : '').toLowerCase();
      if (BLOCKED.includes(ext)) { err.push(L.errBlocked(f.name, ext)); continue; }
      if (state.files.length >= MAX_FILES) { err.push(L.errMaxFiles(MAX_FILES)); break; }
      if (state.files.reduce((s,x)=>s+x.size,0) + f.size > MAX_UPLOAD) { err.push(L.errTooBig(f.name)); continue; }
      if (f.size === 0) { err.push(L.errEmpty(f.name)); continue; }
      state.files.push(f);
    }
    $('#err').textContent = err.join(' ');
    drawFiles();
  };
  drop.onclick = () => fileIn.click();
  drop.onkeydown = e => { if (e.key==='Enter'||e.key===' '){ e.preventDefault(); fileIn.click(); } };
  fileIn.onchange = () => { addFiles([...fileIn.files]); fileIn.value=''; };
  ['dragenter','dragover'].forEach(t => drop.addEventListener(t, e => { e.preventDefault(); drop.classList.add('over'); }));
  ['dragleave','drop'].forEach(t => drop.addEventListener(t, e => { e.preventDefault(); drop.classList.remove('over'); }));
  drop.addEventListener('drop', e => addFiles([...e.dataTransfer.files]));
  drawFiles();

  const syncC = () => { Object.assign(c,{name:$('#cName').value.trim(),company:$('#cCompany').value.trim(),email:$('#cEmail').value.trim(),phone:$('#cPhone').value.trim(),website:$('#cWeb').value.trim(),callback:$('#cCall').checked,consent:$('#cConsent').checked}); save(); };
  $('#cf').addEventListener('input', syncC);
  $('#back').onclick = () => { syncC(); back(); };
  $('#send').onclick = () => { syncC(); submit(); };
}

/* ===================== SENDEN ===================== */
async function post(body){
  const r = await fetch(ENDPOINT, {method:'POST', headers:{'Content-Type':'text/plain;charset=utf-8'}, body:JSON.stringify(body)});
  return r.json();
}
function put(url, blob, onProgress){
  return new Promise((resolve,reject) => {
    const x = new XMLHttpRequest();
    x.open('PUT', url);
    x.upload.onprogress = e => onProgress(e.loaded);
    x.onload = () => (x.status>=200 && x.status<300) ? resolve() : reject(new Error('upload'));
    x.onerror = () => reject(new Error('upload'));
    x.send(blob);
  });
}
function collectAnswers(){
  const out = [];
  const add = (Q,part) => {
    const a = state.answers[Q.id]; if (!a) return;
    out.push({id:Q.id, part, area:Q.area, q:Q.q, multi:!!Q.multi, sel:a.sel.slice(), labels:a.sel.map(i=>Q.opts[i]), other:a.otherOn ? a.other.trim() : ''});
  };
  // immer die deutschen Texte senden (einheitliche Auswertung); Freitext bleibt im Original
  DE.PART1.forEach(Q=>add(Q,1));
  if (state.deep) DE.PART2.forEach(Q=>add(Q,2));
  return out;
}
function collectAttachments(){
  const att = [];
  const qnum = id => id==='final' ? 'Abschluss' : id.toUpperCase();
  for (const [key,items] of Object.entries(state.media)){
    if (key[0]==='v' && !state.deep) continue;
    items.forEach((m,i) => att.push({blob:m.blob, name:`${qnum(key)}_${m.kind==='video'?'Video':'Sprachnachricht'}_${i+1}.${m.ext}`, kind:'recording', q:key}));
  }
  state.files.forEach(f => att.push({blob:f, name:f.name, kind:'upload'}));
  return att;
}
async function submit(){
  const err = $('#err'); err.textContent='';
  const c = state.contact;
  if (isRecording()) { err.textContent=L.errRec; return; }
  if (!c.name || !c.company) { err.textContent=L.errName; return; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email)) { err.textContent=L.errEmail; return; }
  if (!c.consent) { err.textContent=L.errConsent; return; }
  if (!ENDPOINT) { err.textContent=L.errOff; return; }
  const att = collectAttachments();
  const btn = $('#send'); btn.disabled = true; btn.textContent = L.sending;
  const up = $('#up'); up.hidden = false; postHeight();
  try {
    const init = await post({
      action:'init', origin:location.origin, page:(LANG!=='de' ? '['+LANG.toUpperCase()+'] ' : '') + (document.referrer||location.href).slice(0,290),
      hp: $('#hp').value, contact:c, deep:!!state.deep, answers:collectAnswers(),
      files: att.map(a => ({name:a.name, size:a.blob.size, type:a.blob.type||'application/octet-stream', kind:a.kind})),
    });
    if (!init.ok) throw new Error(init.error==='size' ? L.errSize : init.error==='type' ? L.errType(init.file) : init.error==='busy' ? L.errBusy : L.errFail);
    const total = att.reduce((s,a)=>s+a.blob.size,0) || 1; let done = 0;
    for (let i=0;i<att.length;i++){
      $('#upText').textContent = L.uploading(att[i].name, i+1, att.length);
      if (!init.uploads[i]) throw new Error('upload');
      await put(init.uploads[i], att[i].blob, l => { $('#upBar').style.width = ((done+l)/total*100)+'%'; });
      done += att[i].blob.size;
    }
    $('#upBar').style.width='100%'; $('#upText').textContent=L.finishing;
    const fin = await post({action:'finish', id:init.id});
    if (!fin.ok) throw new Error(L.errFail);
    state.view='done'; try{ localStorage.removeItem(KEY); }catch(e){}
    render();
  } catch(e){
    err.textContent = (e && e.message && e.message!=='upload' && e.message!=='Failed to fetch' ? e.message : L.errFail) + L.errRetry(L.contactUrl);
    btn.disabled = false; btn.textContent = L.retry; up.hidden = true;
  }
}

/* ===================== DANKE ===================== */
function renderDone(){
  const BOOK = 'https://calendly.com/uemit-t-aka-nexxcon24';
  app.innerHTML = `
    <div class="done">
      <span class="eyebrow neon-eyebrow">${L.doneEyebrow}</span>
      <h1 class="neon-h">${L.doneH}</h1>
      <p class="muted">${L.doneP(state.contact.callback)}</p>
      <ol class="steps">
        <li style="--nc:var(--n-cyan)"><b>01</b><span>${L.s1}</span><small>${L.s1s}</small></li>
        <li style="--nc:var(--n-violet)"><b>02</b><span>${L.s2}</span><small>${L.s2s}</small></li>
        <li style="--nc:var(--n-lime)"><b>03</b><span>${L.s3}</span><small>${L.s3s}</small></li>
      </ol>
      ${state.deep ? `<div class="coupon">
        <div class="coupon-in">
          <div class="coupon-pct" aria-hidden="true">${L.pct(DISCOUNT)}</div>
          <div class="coupon-txt">
            <span class="coupon-tag">${L.couponTag}</span>
            <strong>${L.couponH(DISCOUNT)}</strong>
            <span class="small muted">${L.couponSmall}</span>
            <div class="coupon-row"><span class="code neon-code" id="code">${esc(DISCOUNT_CODE)}</span><button class="btn btn-ghost btn-sm btn-3d" id="copy" type="button">${L.copy}</button></div>
          </div>
        </div>
      </div>` : ''}
      <div class="nav done-nav">
        <a class="btn btn-ghost btn-3d" href="${L.siteUrl}" target="_top" rel="noopener">${L.toSite}</a>
        <div class="right"><a class="btn btn-neon btn-3d" href="${BOOK}" target="_blank" rel="noopener">${L.book} <span aria-hidden="true">→</span></a></div>
      </div>
    </div>`;
  const cp = $('#copy');
  if (cp) cp.onclick = async () => {
    try { await navigator.clipboard.writeText(DISCOUNT_CODE); cp.textContent=L.copied; }
    catch(e){ const r=document.createRange(); r.selectNodeContents($('#code')); const s=getSelection(); s.removeAllRanges(); s.addRange(r); cp.textContent=L.marked; }
  };
}

/* ===================== TASTATUR + EINBETTUNG ===================== */
document.addEventListener('keydown', e => {
  if (state.view!=='q' && state.view!=='gate') return;
  const tag = (e.target.tagName||'').toLowerCase();
  if (tag==='textarea') return;
  if (e.key==='Enter'){ e.preventDefault(); const n=$('#next'); if(n) n.click(); return; }
  const typing = tag==='input' && /^(text|email|tel)$/.test(e.target.type);
  if (state.view==='q' && !typing){
    const k = e.key.toUpperCase(); const i = 'ABCDEF'.indexOf(k);
    if (i>=0 && k.length===1 && !e.ctrlKey && !e.metaKey && !e.altKey){
      const inputs = app.querySelectorAll('fieldset.opts input'); if (inputs[i]) { inputs[i].click(); inputs[i].focus(); }
    }
  }
});
const inFrame = (() => { try { return window.self !== window.top; } catch(e){ return true; } })();
if (inFrame) document.body.classList.add('embedded');
function postHeight(){ if (!inFrame) return; requestAnimationFrame(() => parent.postMessage({type:'nx-ki-check-height', height:document.documentElement.scrollHeight}, '*')); }
window.addEventListener('resize', postHeight);
window.addEventListener('beforeunload', e => { if (state.view!=='intro' && state.view!=='done' && (Object.values(state.media).some(m=>m.length) || state.files.length)) { e.preventDefault(); e.returnValue=''; } });

// Kopf und Fuß in der Sprache der Seite
document.title = L.htmlTitle;
$('.brand span').textContent = L.brand;
const foot = document.querySelectorAll('footer.foot a');
if (foot[0]) { foot[0].href = L.privacyUrl; foot[0].textContent = L.privacy; }
if (foot[1]) { foot[1].href = L.imprintUrl; foot[1].textContent = L.imprint; }
render();
