const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const root = __dirname;
const out = path.join(root, 'out', 'Ep28_Dokumen', 'covers');
fs.mkdirSync(out, { recursive: true });
const photo = `file://${path.join(root, 'user_photo.jpg')}`;
const templateCover = '/home/ubuntu/oligarki/kit/covers/cover_ep.html';
const templateSeries = '/home/ubuntu/oligarki/kit/covers/seri_latin_peny.html';
const entry = ` '28': { no: '28', topik: 'سُورَةُ النِّسَاءِ', ar: 'نَفْسٍ وَاحِدَةٍ', t1: 'DARI SATU JIWA', t2: 'IKATAN KELUARGA', fs: .58,
   hook: 'apa pesan <span style="color:#e9f23a">An-Nisa:1</span>?<br>takwa · asal penciptaan · silaturahim', stamp: 'QS AN-NISA · 1',
   tag1: ['02', '/scripture'], cards: [
     ['QS AN-NISA:1', 'takwa · penciptaan · hubungan rahim', 'وَالْأَرْحَامُ', '#e9f23a'],
     ['HADIS IBN MAS‘UD', 'tiga masa · 40 hari tiap tahap', 'الصَّحِيحَانِ', '#7fd6ff'],
     ['EMPAT CATATAN', 'rezeki · ajal · amal · sa‘id/syaqi', 'رِزْقُهُ · أَجَلُهُ', '#2fae5b'],
     ['SILATURAHIM', 'berbuat baik kepada orang tua', 'صِلَةُ الرَّحِمِ', '#ffffff']
   ], tag2: ['22', '/balance'], bpTitle: 'POKOK BAHASAN · AN-NISA 1', bpCenter: 'نَفْسٍ وَاحِدَةٍ', bpItems: [
     ['takwa', 'التَّقْوَى'], ['asal penciptaan', 'النَّفْسُ'], ['hubungan kerabat', 'الْأَرْحَامُ'], ['silaturahim', 'الصِّلَةُ']
   ] },\n`;

let coverHTML = fs.readFileSync(templateCover, 'utf8');
const marker = 'const C = {\n';
if (!coverHTML.includes(marker)) throw new Error('Tidak menemukan awal konfigurasi cover_ep.html');
coverHTML = coverHTML.replace(marker, marker + entry);
coverHTML = coverHTML.replaceAll('file:///home/claude/covers/user_photo.jpg', photo);
const coverPath = path.join(out, 'cover_ep28_v1.html');
fs.writeFileSync(coverPath, coverHTML);

let seriesHTML = fs.readFileSync(templateSeries, 'utf8');
seriesHTML = seriesHTML.replaceAll('file:///home/claude/covers/user_photo.jpg', photo);
const seriesPath = path.join(out, 'seri_latin_ep28_v1.html');
fs.writeFileSync(seriesPath, seriesHTML);

(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--disable-gpu'] });
  try {
    for (const spec of [
      { url: `file://${coverPath}?ep=28&v=yt`, w: 1920, h: 1080, dpr: 1, file: 'Cover_YouTube_Ep28_v1.png' },
      { url: `file://${coverPath}?ep=28&v=reel`, w: 1080, h: 1920, dpr: 1, file: 'Cover_Reel_Ep28_v1.png' },
      { url: `file://${seriesPath}?ep=28&l1=${encodeURIComponent('DARI SATU JIWA')}&l2=${encodeURIComponent('IKATAN KELUARGA')}&fs=136&at=790`, w: 1080, h: 1350, dpr: 2, file: 'Post_Seri_Ep28_v1.png' }
    ]) {
      const page = await browser.newPage({ viewport: { width: spec.w, height: spec.h }, deviceScaleFactor: spec.dpr });
      const errors = [];
      page.on('pageerror', e => errors.push(e.message));
      await page.goto(spec.url, { waitUntil: 'load' });
      await page.evaluate(() => document.fonts.ready);
      await page.waitForFunction(() => [...document.images].every(im => im.complete && im.naturalWidth > 0));
      if (errors.length) throw new Error(errors.join('; '));
      await page.waitForTimeout(120);
      const file = path.join(out, spec.file);
      await page.screenshot({ path: file, fullPage: false });
      console.log(`${file} ${spec.w * spec.dpr}x${spec.h * spec.dpr}`);
      await page.close();
    }
  } finally {
    await browser.close();
  }
})();
