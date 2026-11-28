const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const root = __dirname;
const preview = path.join(root, 'out', 'preview');
const out = path.join(root, 'previews');
fs.mkdirSync(out, { recursive: true });
const sheets = [
  {
    title: 'LEMBAR 1 · AYAT, ASAL, KETURUNAN',
    frames: [
      [1,2.8,'Pembuka · Ep28'],[2,18.0,'QS An-Nisa:1'],[3,34.0,'Makna · takwa'],[4,50.0,'Perintah dan peringatan'],
      [5,60.5,'Pasangan · ayat'],[6,72.0,'Kisah dinukil · tanpa figur'],[7,84.0,'Klaim pembicara'],[8,95.0,'Alasan dalam ceramah'],
      [9,109.0,'Keturunan · 20 kehamilan dinukil'],[10,119.5,'Qabil · Habil'],[11,128.0,'Nasab yang disebut'],[12,147.0,'Hadis Ibn Mas‘ud']
    ]
  },
  {
    title: 'LEMBAR 2 · HADIS, FIKIH, PEMERIKSAAN SUMBER',
    frames: [
      [13,158.0,'Pengantar hadis'],[14,166.0,'Nutfah · 40 hari'],[15,178.0,'Uraian tentang nutfah'],[16,187.5,'Tanah · label narasumber'],
      [17,194.5,'‘Alaqah'],[18,202.0,'Mudghah'],[19,210.5,'Tiga kali 40'],[20,226.0,'Ruh · tanpa visual malaikat'],
      [21,239.0,'Fikih · tasawuf'],[22,259.0,'Empat kategori'],[23,274.0,'Tata perlakuan · audio'],[24,346.0,'Tab pencarian sumber · tujuh poin']
    ]
  },
  {
    title: 'LEMBAR 3 · RIWAYAT, TAKDIR, SILATURAHIM',
    frames: [
      [25,366.0,'Riwayat · belum terverifikasi'],[26,380.0,'Cerita · tanpa dialog tak pasti'],[27,396.0,'Jubb al-Ahzan · label sumber'],[28,415.0,'Empat ketetapan'],
      [29,429.0,'Rezeki · frasa Arab tidak ditebak'],[30,443.0,'Ikhtiar dan ketetapan'],[31,470.0,'Rezeki · tetap berusaha'],[32,508.0,'Dunia dan akhirat'],
      [33,528.0,'Ayat · hubungan keluarga'],[34,563.0,'Pesan kepada orang tua'],[35,574.8,'Riwayat silaturahim · sangat lemah'],[36,591.5,'Penutup · identitas seri']
    ]
  }
];
function fileFor(t) { return `f_${Number(t).toFixed(2).padStart(7,'0')}.jpg`; }
function htmlFor(sheet) {
  const cards = sheet.frames.map(([id,t,caption]) => {
    const framePath = path.join(preview,fileFor(t));
    const src = `data:image/jpeg;base64,${fs.readFileSync(framePath).toString('base64')}`;
    return `<article class="card"><img src="${src}" alt="Frame ${id}"><div class="meta"><b>${String(id).padStart(2,'0')}</b><span>${Number(t).toFixed(1)} dtk</span><strong>${caption}</strong></div></article>`;
  }).join('');
  return `<!doctype html><html><head><meta charset="utf-8"><style>
  *{box-sizing:border-box}body{margin:0;background:#03050b;color:#f2f0e7;font-family:Inter,Arial,sans-serif}
  main{width:1920px;padding:26px;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;align-items:start}
  header{grid-column:1/-1;padding:0 4px 10px;border-bottom:3px solid #e9f23a;display:flex;justify-content:space-between;align-items:end}
  h1{margin:0;font-size:30px;letter-spacing:.04em}header span{font:600 17px 'DejaVu Sans Mono';color:#e9f23a}
  .card{overflow:hidden;border:2px solid #e9f23a;border-radius:12px;background:#0b1022;box-shadow:0 10px 26px rgba(0,0,0,.32)}
  img{display:block;width:100%;aspect-ratio:16/9;object-fit:cover;background:#03050b}
  .meta{display:grid;grid-template-columns:54px 110px 1fr;gap:10px;align-items:center;padding:11px 14px;min-height:50px}
  .meta b{font-size:19px;color:#e9f23a}.meta span{font:600 15px 'DejaVu Sans Mono';color:#fff}.meta strong{font-size:17px;font-weight:700}
  </style></head><body><main><header><h1>${sheet.title}</h1><span>EP28 · FRAME HOLD · 16:9</span></header>${cards}</main></body></html>`;
}
(async()=>{
  const browser=await chromium.launch({executablePath:'/opt/pw-browsers/chromium',args:['--disable-gpu']});
  for(let i=0;i<sheets.length;i++){
    const page=await browser.newPage({viewport:{width:1920,height:2100},deviceScaleFactor:1});
    await page.setContent(htmlFor(sheets[i]),{waitUntil:'load'});
    await page.waitForFunction(()=>[...document.images].every(im=>im.complete&&im.naturalWidth>0));
    const target=path.join(out,`storyboard_ep28_sheet_0${i+1}.png`);
    await page.locator('main').screenshot({path:target});
    console.log(target);
    await page.close();
  }
  await browser.close();
})();
