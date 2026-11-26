const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const preview = path.join(root, 'out', 'preview');
const out = path.join(root, 'previews');
fs.mkdirSync(out, { recursive: true });
const scenes = [
  [1,10,'Pembuka · lima ayat'],[2,41.5,'An-Nisa 31'],[3,57.8,'An-Nisa 40'],[4,76.4,'Zarrah · amal'],
  [5,86.4,'An-Nisa 48 · bacaan'],[6,109.8,'Makna ayat 48'],[7,134,'Contoh dalam ceramah'],[8,148,'Renungan · jangan merasa lebih baik'],
  [9,168,'Syirik tampak/samar · taubat'],[10,198,'Hati-hati memberi label'],[11,212,'Ucapan dan tanggung jawab'],[12,232,'Jeda sebelum menilai'],
  [13,250,'Pembahasan tawassul'],[14,270,'Paparan pembicara'],[15,300,'Petikan An-Nisa 64'],[16,326,'Taubat · doa · ampunan'],
  [17,357,'Pertanyaan tentang masa berlaku'],[18,375,'Tab pencarian · sumber al-‘Utbi'],[19,384,'Hikayat yang dinukil'],[20,400,'Latar simbolik hikayat'],
  [21,422,'Ucapan dalam kisah · ayat 64'],[22,447,'Permohonan ampun dan doa'],[23,458,'Jika diampuni / tidak'],[24,468,'Syair · tanpa teks rekaan'],
  [25,487,'Bagian mimpi dalam hikayat'],[26,519,'Kesimpulan narasumber'],[27,526,'Pertanyaan bagi yang jauh'],[28,548,'Ajakan bertaubat'],
  [29,557,'Ampunan dan rahmat'],[30,575.3,'Rangkuman lima ayat dan doa'],[31,582,'Outro visual · jeda audio'],[32,594.8,'Salam penutup'],
];
const extra = [
  [33,385,'Hold tambahan · panel sumber'],
  [34,427,'Hold tambahan · petikan cerita'],
  [35,579,'Hold tambahan · outro berlanjut'],
  [36,592,'Hold tambahan · sebelum salam'],
];
function fileFor(t) { return `f_${Number(t).toFixed(2).padStart(7,'0')}.jpg`; }
function htmlFor(group, title) {
const cards = group.map(([id, t, caption]) => {
    const framePath = path.join(preview, fileFor(t));
    const src = `data:image/jpeg;base64,${fs.readFileSync(framePath).toString('base64')}`;
    return `<article class="card"><img src="${src}" alt="Frame ${id}"><div class="meta"><b>${String(id).padStart(2,'0')}</b><span>${Number(t).toFixed(1)} dtk</span><strong>${caption}</strong></div></article>`;
  }).join('');
  return `<!doctype html><html><head><meta charset="utf-8"><style>
  *{box-sizing:border-box}body{margin:0;background:#07101f;color:#f4f2e7;font-family:Inter,Arial,sans-serif}
  main{width:1920px;padding:26px;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;align-items:start}
  header{grid-column:1/-1;padding:0 4px 8px;border-bottom:3px solid #e9f23a;display:flex;justify-content:space-between;align-items:end}
  h1{margin:0;font-size:30px;letter-spacing:.04em}header span{font:600 17px 'DejaVu Sans Mono';color:#e9f23a}
  .card{overflow:hidden;border:2px solid #e9f23a;border-radius:12px;background:#0b1022;box-shadow:0 10px 26px rgba(0,0,0,.32)}
  img{display:block;width:100%;aspect-ratio:16/9;object-fit:cover;background:#05070d}
  .meta{display:grid;grid-template-columns:52px 100px 1fr;gap:10px;align-items:center;padding:11px 14px;min-height:48px}
  .meta b{font-size:19px;color:#e9f23a}.meta span{font:600 15px 'DejaVu Sans Mono';color:#fff}.meta strong{font-size:17px;font-weight:700}
  </style></head><body><main><header><h1>${title}</h1><span>EP27 · FRAME BACA STORYBOARD</span></header>${cards}</main></body></html>`;
}
(async()=>{
  const browser=await chromium.launch({executablePath:'/opt/pw-browsers/chromium',args:['--disable-gpu']});
  for(let i=0;i<3;i++){
    const group=i<2?scenes.slice(i*12,(i+1)*12):scenes.slice(24).concat(extra);
    const page=await browser.newPage({viewport:{width:1920,height:1400},deviceScaleFactor:1});
    await page.setContent(htmlFor(group,`LEMBAR ${i+1} · ${i===0?'PEMBUKA & AYAT':i===1?'PENJELASAN & SUMBER':'KISAH & PENUTUP'}`),{waitUntil:'load'});
    await page.waitForFunction(()=>[...document.images].every(im=>im.complete&&im.naturalWidth>0));
    const target=path.join(out,`storyboard_ep27_sheet_0${i+1}.png`);
    await page.locator('main').screenshot({path:target});
    console.log(target);
    await page.close();
  }
  await browser.close();
})();
