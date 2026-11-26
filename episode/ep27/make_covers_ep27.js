const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const root = __dirname;
const out = path.join(root, 'out', 'Ep27_Dokumen', 'covers');
fs.mkdirSync(out, { recursive: true });
const photo = 'file:///home/claude/proj27/user_photo.jpg';
const templateCover = '/home/ubuntu/oligarki/kit/covers/cover_ep.html';
const templateSeries = '/home/ubuntu/oligarki/kit/covers/seri_latin_peny.html';
const entry = ` '27': { no: '27', topik: 'سُورَةُ النِّسَاءِ', ar: 'سُورَةُ النِّسَاءِ', t1: 'LIMA AYAT', t2: 'AN-NISA', fs: .82,
   hook: 'Dosa besar · amal sekecil zarrah<br>dan kisah al-‘Utbi yang ditelaah', stamp: '31 · 40 · 48 · 64 · 110',
   tag1: ['05', '/scripture'], cards: [
     ['AYAT 31', 'Jauhi dosa besar', 'الْكَبَائِرُ', '#e9f23a'],
     ['AYAT 40', 'Kebaikan sekecil zarrah', 'ذَرَّةٍ', '#7fd6ff'],
     ['AYAT 48', 'Ampunan atas kehendak Allah', 'يَشَاءُ', '#2fae5b'],
     ['AYAT 64', 'Kisah al-‘Utbi ditelaah', 'حِكَايَةٌ', '#ffffff']
   ], tag2: ['27', '/timeline'], bpTitle: 'LIMA AYAT · AN-NISA', bpCenter: 'النِّسَاءُ', bpItems: [
     ['An-Nisa 31', 'الْكَبَائِرُ'], ['An-Nisa 40', 'ذَرَّةٍ'], ['An-Nisa 48', 'يَشَاءُ'],
     ['An-Nisa 64', 'اسْتَغْفَرُوا'], ['An-Nisa 110', 'غَفُورًا']
   ] },\n`;

let coverHTML = fs.readFileSync(templateCover, 'utf8');
const marker = 'const C = {\n';
if (!coverHTML.includes(marker)) throw new Error('Tidak menemukan awal konfigurasi cover_ep.html');
coverHTML = coverHTML.replace(marker, marker + entry);
coverHTML = coverHTML.replaceAll('file:///home/claude/covers/user_photo.jpg', photo);
const coverPath = path.join(out, 'cover_ep27.html');
fs.writeFileSync(coverPath, coverHTML);

let seriesHTML = fs.readFileSync(templateSeries, 'utf8');
seriesHTML = seriesHTML.replaceAll('file:///home/claude/covers/user_photo.jpg', photo);
const seriesPath = path.join(out, 'seri_latin_ep27.html');
fs.writeFileSync(seriesPath, seriesHTML);

(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--disable-gpu'] });
  try {
    for (const spec of [
      { url: `file://${coverPath}?ep=27&v=yt`, w: 1920, h: 1080, dpr: 1, file: 'Cover_YouTube_Ep27_v1.png' },
      { url: `file://${coverPath}?ep=27&v=reel`, w: 1080, h: 1920, dpr: 1, file: 'Cover_Reel_Ep27_v1.png' },
      { url: `file://${seriesPath}?ep=27&l1=LIMA%20AYAT&l2=AN-NISA&fs=178`, w: 1080, h: 1350, dpr: 2, file: 'Post_Seri_Ep27_v1.png' }
    ]) {
      const page = await browser.newPage({ viewport: { width: spec.w, height: spec.h }, deviceScaleFactor: spec.dpr });
      await page.goto(spec.url, { waitUntil: 'load' });
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(180);
      const file = path.join(out, spec.file);
      await page.screenshot({ path: file, fullPage: false });
      console.log(`${file} ${spec.w * spec.dpr}x${spec.h * spec.dpr}`);
      await page.close();
    }
  } finally {
    await browser.close();
  }
})();
