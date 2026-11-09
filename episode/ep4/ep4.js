// ================================================================== ADEGAN EPISODE 04 · Memulai Sesuatu dengan Bismillah
const BSM = 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ';
// kartu krem: label + Arab + terjemah
function card(t0, t1, lab, ar, tr, o = {}) {
  label(lab, t0 + .05, 'left:160px;top:140px', t1);
  paper(t0, `left:160px;top:190px;width:1600px;height:${o.h || 660}px`, '', t1);
  arw(node(ar, `left:220px;width:1480px;top:${o.at || 250}px;text-align:center;font-size:${o.fs || 80}px;line-height:1.7;color:#151515`), t0 + .1, o.ad || 2.0, { marks: o.am || [], t1 });
  if (tr) kin(node('', `left:260px;top:${o.tt || 560}px;width:1400px;font:700 ${o.tfs || 42}px Inter;color:#222;text-align:center`), tr, o.tr0 || t0 + 2.2, { iv: o.iv || .028, marks: o.tm || [], t1 });
  if (o.chip) chip(o.chip, t0 + 1.0, `left:200px;top:${(o.h || 660) + 110}px`, t1, '#7a5a12');
}
// peta Al-Fatihah ↔ isi Al-Qur'an
function fatMap(FAT, codeNo) {
  codeTag(FAT[0][0], FAT[FAT.length - 1][1], codeNo, '/blueprint');
  FAT.forEach(([t0, t1, ar, ta, tops], k) => {
    scene(t0, t1, { cut: 'glitch' });
    const b = node('', 'left:0;top:0;width:1920px;height:1080px', 'bp'); show(b, t0, 'fade', t1, .3);
    const strip = node(`<div style="display:flex;gap:10px">${FAT.map((_, j) => `<div style="width:120px;height:14px;border-radius:7px;background:${j < k ? '#7d8a3a' : j === k ? Y : 'rgba(255,255,255,.55)'}"></div>`).join('')}</div>`, 'left:140px;top:150px'); show(strip, t0, 'fade', t1);
    label(`PETA AL-FATIHAH · ${String(k + 1).padStart(2, '0')} / 08`, t0 + .1, 'left:140px;top:190px;color:#cfe0ff', t1);
    kin(node('', 'left:140px;top:250px;width:760px;font:700 34px Inter;color:#cfe0ff'), "Al-Qur'an membicarakan tentang…", t0 + .15, { iv: .025, t1 });
    tops.forEach(([tt, s], i) => { const n = node(`<div style="display:flex;align-items:center;gap:16px;width:800px"><div style="width:16px;height:16px;border-radius:50%;background:${Y};flex:none"></div><div style="font:800 42px Inter;color:#fff">${s}</div></div>`, `left:160px;top:${340 + i * 100}px`, 'dimmable'); show(n, Math.max(t0 + .5, tt), 'left', t1); sfx(Math.max(t0 + .5, tt), 'click', .6); });
    sv(t0, t1, DEFS + LN([[920, 540], [1010, 540]], { arrow: 1, s: Y, sw: 5, del: Math.max(.6, ta - t0 - 1.2) }) + BOX(1030, 330, 760, 420, { s: '#fff', r: 18, del: .2 }), 'left:0;top:0', 1920, 1080, .7);
    label('TERKANDUNG DALAM', t0 + .4, 'left:1070px;top:360px;color:#cfe0ff', t1);
    const qm = node(`<div style="font:900 170px Inter;color:${Y}">?</div>`, 'left:1370px;top:430px'); item(t0 + 1.0, ta, qm, (lt, t) => { qm.style.opacity = .5 + .4 * Math.sin(t * 4); });
    arw(node(`[${ar}]`, `left:1060px;width:700px;top:470px;text-align:center;font-size:${ar.length > 26 ? 54 : 70}px;color:#fff`), ta, Math.min(1.6, ar.split(' ').length * .45), { marks: [ta + .6], t1 });
    punch(ta + .6, ta + 2.0, 1410, 540, 1.45);
  });
}

// --- 0 pembuka: hamdalah + penyampai
scene(0, 7.2, { cut: 'none' });
arw(node('الْحَمْدُ لِلَّهِ', 'left:140px;top:130px;font-size:84px;color:#fff;text-align:left;width:700px'), .15, .9);
label('FILE 04 · LANJUTAN KAJIAN', 1.0, 'left:140px;top:290px');
seg('Memulai dengan<br>[Bismillah]', 1.2, 'left:140px;top:340px;width:1000px', { size: 104, iv: .045, marks: [2.6] });
kin(node('', 'left:140px;top:620px;width:900px;font:700 40px Inter;color:#fff'), "surah pertama: [Al-Fatihah]", 3.8, { iv: .04, marks: [5.4] });
mePol('left:1300px;top:150px', .5, 7.2, 4, 400);
const meTag = node(`<div style="width:430px;background:#141414;border:2px solid ${Y};padding:18px 22px">
  <div class="mono" style="font-size:16px;color:${Y}">● PENYAMPAI KAJIAN</div><div style="font:800 34px Inter;margin-top:6px">@alurziyadahku</div>
  <div class="mono" style="font-size:15px;color:#eee;margin-top:8px">TOPIK: <span class="ar" style="font-size:24px;color:#fff">بِسْمِ اللَّهِ</span></div></div>`, 'left:1270px;top:720px');
show(meTag, 2.0, 'left', 7.2); sfx(2.0, 'beep', .5);

// --- 1 kenapa Al-Fatihah? pembuka · ummul Qur'an
scene(7.2, 19.3, { cut: 'glitch' });
seg('Kenapa dinamakan<br>[Al-Fatihah]?', 7.3, 'left:140px;top:170px;width:1640px', { size: 92, iv: .035, marks: [8.6] });
block('ARTINYA', 'pembuka', Y, '#111', 10.2, 'left:140px;top:520px', 19.3);
const um = node(`<div style="width:900px"><div class="ar" style="font-size:110px;color:#fff;text-align:left">أُمُّ الْقُرْآنِ</div><div style="font:700 40px Inter;color:${Y}">induk dari Al-Qur'an</div></div>`, 'left:600px;top:520px'); show(um, 13.0, 'up', 19.3); sfx(13.0, 'beep', .6);
seg('kenapa disebut [induknya]?', 16.5, 'left:140px;top:870px;width:1640px', { size: 56, iv: .035, marks: [18.0] });

// --- 2 seluruh isi tergambar
scene(19.3, 28.7, { cut: 'hard' });
seg('menurut para ulama, seluruh isi Al-Qur\'an<br>dari awal sampai akhir', 19.4, 'left:140px;top:240px;width:1640px', { size: 68, iv: .025 });
seg('[tergambar] di dalam<br>Surah Al-Fatihah', 23.2, 'left:140px;top:500px;width:1640px', { size: 92, iv: .035, marks: [24.6] });
stamp('أُمُّ الْقُرْآنِ', 'left:1300px;top:740px', 26.2, 28.7, Y);

// --- 3 /blueprint : peta Al-Fatihah
fatMap([
  [28.7, 37.4, 'الْحَمْدُ لِلَّهِ', 35.4, [[28.9, 'tentang Allah'], [31.6, 'pujian-pujian kepada Allah']]],
  [37.4, 50.1, 'رَبِّ الْعَالَمِينَ', 48.0, [[37.6, 'makhluk'], [39.4, 'langit · bumi · laut'], [41.4, 'surga · neraka'], [42.6, 'jin · malaikat · manusia']]],
  [50.1, 73.4, 'الرَّحْمَٰنِ الرَّحِيمِ', 71.2, [[50.3, 'pemberian Allah'], [58.4, 'ampunan · rahmat'], [61.4, 'nikmat · rezeki'], [63.6, 'keselamatan · segala keperluan']]],
  [73.4, 87.0, 'مَالِكِ يَوْمِ الدِّينِ', 83.4, [[73.5, 'kubur · kiamat'], [76.4, 'surga · neraka'], [79.4, 'mizan · hisab · hari akhir'], [85.5, 'Raja pada hari pembalasan']]],
  [87.0, 107.1, 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', 94.4, [[87.2, "syari'at"], [89.0, 'tarikat'], [90.9, 'hakikat'], [97.4, 'kepada Engkau kami beribadah & meminta pertolongan']]],
  [107.1, 118.3, 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ', 113.0, [[107.3, 'doa-doa'], [109.6, 'bermacam-macam doa'], [116.0, 'tunjukilah kami jalan yang lurus']]],
  [118.3, 137.1, 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ', 130.8, [[118.5, 'para nabi & rasul'], [121.7, 'para wali'], [124.8, 'orang yang dikasihi Allah'], [134.3, 'jalan yang Engkau beri nikmat']]],
  [137.1, 148.0, 'غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ', 144.0, [[137.3, 'orang kafir'], [139.8, 'orang-orang yang sesat']]]], '01');

// --- 4 kesimpulan: ummul Qur'an
scene(148.0, 154.8, { cut: 'hard' });
seg('seluruh isi Al-Qur\'an<br>terkandung di dalam Al-Fatihah', 148.1, 'left:140px;top:220px;width:1640px', { size: 76, iv: .025 });
arw(node('[أُمُّ الْقُرْآنِ]', 'left:0;right:0;top:560px;text-align:center;font-size:150px;color:#fff'), 152.0, .9, { marks: [152.8] });

// --- 5 /canvas : nama-nama Al-Fatihah
scene(154.8, 205.3, { cut: 'glitch' });
codeTag(154.8, 205.3, '02', '/canvas');
label('NAMA-NAMA AL-FATIHAH', 154.9, 'left:140px;top:150px');
(() => {
  const N = [['السَّبْعُ الْمَثَانِي', 'tujuh ayat yang diulang-ulang', '#f7e078', 155.0], ['الْوَافِيَة', 'surah yang sempurna', '#bfe8c8', 160.6], ['الْكَافِيَة', 'surah yang cukup', '#f5c6c0', 174.8], ['الشِّفَاء', 'surah penyembuh', '#cfe0ff', 186.0]];
  N.forEach((x, i) => { const n = node(`<div class="nc" style="width:400px;height:240px;background:${x[2]};padding:20px;box-shadow:0 14px 30px rgba(0,0,0,.5);transform:rotate(${[-3, 2, -2, 3][i]}deg);color:#222"><div class="ar" style="font-size:60px;text-align:center">${x[0]}</div><div style="${KAL};font-size:34px;text-align:center;margin-top:12px">${x[1]}</div></div>`, `left:${140 + i * 425}px;top:240px`);
    show(n, x[3], 'drop', 205.3); sfx(x[3], 'paper', .7); });
  const ex = [[166.0, 'tidak bisa dipotong-potong · dibaca sekaligus'], [170.5, 'dalam salat mesti sempurna dari awal sampai akhir'], [180.8, 'salat hanya membaca Al-Fatihah saja → sudah [cukup]'], [191.2, 'penawar orang sakit · menyembuhkan dengan izin Allah'], [196.5, 'sekurang-kurangnya bisa [meringankan]']];
  ex.forEach(([t, s], i) => { const e1 = ex[i + 1] ? ex[i + 1][0] : 205.3; kin(node('', 'left:140px;top:640px;width:1640px;font:800 50px Inter;color:#fff'), s, t, { iv: .025, t1: e1, marks: s.includes('[') ? [t + 1.4] : [] }); });
  kin(node('', 'left:140px;top:820px;width:1640px;font:700 38px Inter;color:' + Y), 'banyaknya nama = kemuliaan & keagungan Al-Fatihah', 201.0, { iv: .03, t1: 205.3 });
})();

// --- 6 /decision-matrix : wajib dipelajari
scene(205.3, 227.2, { cut: 'glitch' });
codeTag(205.3, 227.2, '03', '/decision-matrix');
counter(205.4, 227.2, 7, 'left:140px;top:200px', 'AYAT AL-FATIHAH');
seg('satu-satunya surah yang [wajib dipelajari]<br>seluruh muslim & muslimah', 207.6, 'left:480px;top:230px;width:1300px', { size: 54, iv: .025, marks: [209.6] });
kin(node('', 'left:140px;top:430px;width:1640px;font:800 46px Inter;color:#fff'), 'Kenapa? salat [tidak sah] tanpa Al-Fatihah', 212.9, { iv: .03, marks: [214.4] });
sv(216.9, 227.2, BOX(140, 560, 800, 300, { s: '#fff', r: 14 }) + T(540, 630, 'SURAH LAIN', { f: .2, fs: 34, fw: 800 }) + T(540, 710, 'tidak hafal → tidak mengapa', { f: .6, fs: 32, c: '#7fe0a0' }) + T(540, 780, 'tidak bisa → tidak jadi soal', { f: 3.6, fs: 32, c: '#7fe0a0' }) +
  BOX(980, 560, 800, 300, { s: Y, r: 14, sw: 6, del: 6.0 }) + T(1380, 630, 'AL-FATIHAH', { f: 6.2, fs: 34, fw: 800, c: Y }) + T(1380, 720, 'mesti bisa · mesti hafal', { f: 6.6, fs: 40, fw: 800 }), 'left:0;top:0', 1920, 1080, .5);
stamp('WAJIB', 'left:1500px;top:820px', 224.0, 227.2);

// --- 7 /exploded-view : 156 huruf · ma pendek / ma panjang
scene(227.2, 250.7, { cut: 'glitch' });
codeTag(227.2, 250.7, '04', '/exploded-view');
counter(227.3, 250.7, 156, 'left:140px;top:180px', 'HURUF AL-FATIHAH', Y, 1.6);
kin(node('', 'left:140px;top:400px;width:900px;font:700 38px Inter;color:#fff'), 'dihitung dengan [tasydid] & baris [harakatnya]', 231.0, { iv: .03, marks: [232.6, 234.2] });
(() => {
  const C = [['مَلِكِ', 'ma dibaca pendek', '155 huruf', 235.6, '#fff'], ['مَالِكِ', 'ma dibaca panjang', '156 huruf', 239.2, Y]];
  C.forEach((x, i) => { const n = node(`<div style="width:520px;height:300px;border:4px solid ${x[4]};border-radius:14px;background:#111;text-align:center;padding-top:14px"><div class="ar" style="font-size:96px;color:${x[4]}">${x[0]}</div><div style="font:800 36px Inter">${x[1]}</div><div class="mono" style="font-size:30px;color:${x[4]};margin-top:10px">${x[2]}</div></div>`, `left:${1100 + i * 0}px;top:${150 + i * 330}px`); show(n, x[3], 'left', 250.7); sfx(x[3], 'click', .7); });
  const mim = node(`<div style="width:300px;text-align:center"><div class="ar" style="font-size:140px;color:${Y}">م</div><div class="mono" style="font-size:22px;color:#fff">huruf mim</div></div>`, 'left:1640px;top:330px'); show(mim, 236.2, 'scale', 250.7);
})();
kin(node('', 'left:140px;top:560px;width:900px;font:800 44px Inter;color:#ff8a5c'), 'sehuruf saja kurang → [tidak sah]', 241.6, { iv: .03, marks: [243.6] });
kin(node('', 'left:140px;top:680px;width:900px;font:700 38px Inter;color:#fff'), 'Al-Fatihah tidak sah → salat pun jadi kurang', 245.5, { iv: .025 });
kin(node('', 'left:140px;top:800px;width:900px;font:800 44px Inter;color:' + Y), 'mesti dibaca dengan [lengkap]', 248.8, { iv: .03, marks: [250.0] });

// --- 8 /timeline : turun dua kali
scene(250.7, 268.0, { cut: 'hard' });
codeTag(250.7, 268.0, '05', '/timeline');
seg('para ulama tafsir: Al-Fatihah<br>[diturunkan dua kali]', 250.8, 'left:140px;top:150px;width:1640px', { size: 70, iv: .03, marks: [253.4] });
polaroid('kaaba', 'MEKAH', 'left:260px;top:420px', 255.0, 268.0, -5);
polaroid('madinah', 'MADINAH', 'left:1300px;top:420px', 257.8, 268.0, 5);
sv(255.0, 268.0, DEFS + LN([[640, 600], [1260, 600]], { arrow: 1, s: Y, sw: 5, del: 2.6, dash: 1 }) + T(950, 570, 'turun pertama → turun kedua', { f: 3.0, fs: 30, c: Y }) + T(950, 650, 'satu-satunya surah yang demikian', { f: 5.0, fs: 28 }), 'left:0;top:0', 1920, 1080, .8);
stamp('MAKKIYAH', 'left:240px;top:860px', 263.6, 268.0, Y);
stamp('MADANIYAH', 'left:1280px;top:860px', 265.4, 268.0, '#2fae5b');

// --- 9 /layers : 7 ayat menurut Imam asy-Syafi'i
scene(268.0, 297.7, { cut: 'glitch' });
codeTag(268.0, 297.7, '06', '/layers');
label("AYAT AL-FATIHAH MENURUT IMAM MUHAMMAD BIN IDRIS ASY-SYAFI'I", 268.1, 'left:140px;top:140px');
(() => {
  const A = [[BSM, 270.6], ['الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', 275.4], ['الرَّحْمَٰنِ الرَّحِيمِ', 278.5], ['مَالِكِ يَوْمِ الدِّينِ', 280.7], ['إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', 283.5], ['اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ', 287.2], ['صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ', 290.4]];
  A.forEach(([ar, t], i) => { const hi = i === 0; const n = node(`<div style="width:1640px;height:104px;border:${hi ? 5 : 2}px solid ${hi ? Y : '#fff'};border-radius:10px;display:flex;align-items:center;justify-content:space-between;padding:0 30px;background:${hi ? 'rgba(233,242,58,.12)' : 'rgba(255,255,255,.04)'}"><span class="mono" style="font-size:30px;color:${Y}">${String(i + 1).padStart(2, '0')}</span><span class="ar" style="font-size:${ar.length > 50 ? 40 : 52}px;color:#fff">${ar}</span></div>`, `left:140px;top:${200 + i * 116}px`, 'dimmable'); show(n, t, 'left', 297.7); sfx(t, 'click', .6); });
})();
punch(271.6, 273.6, 960, 252, 1.5);

// --- 10 Imam asy-Syafi'i: termasuk Al-Fatihah · nyaring/pelan (/handwritten)
scene(297.7, 317.1, { cut: 'glitch' });
entity(297.8, 317.1, { css: 'left:1020px;top:170px', w: 800, h: 520, tag: 'DOSIER · MAZHAB SYAFI\'I', name: "Imam Muhammad bin Idris asy-Syafi'i", ar: 'مُحَمَّدُ بْنُ إِدْرِيسَ الشَّافِعِيُّ', rows: [['BASMALAH', 'termasuk ayat Al-Fatihah'], ['MAKA', 'permulaan membaca mesti dengan basmalah']], blocks: [['AYAT KE', '01', Y], ['NYARING', 'subuh · maghrib · isyak', '#ebe6d6'], ['PERLAHAN', 'zuhur · asar', '#7d8a3a', '#fff']], src: 'mazhab Syafi\'i' });
codeTag(303.0, 317.1, '07', '/handwritten');
(() => {
  const L = ['basmalah = ayat Al-Fatihah ✓', 'subuh · maghrib · isyak → nyaring', 'zuhur · asar → perlahan'], T0 = [303.4, 307.8, 313.9];
  const n = node(`<div style="width:820px;height:${L.length * 66 + 40}px;background:#fbf6e6;background-image:repeating-linear-gradient(transparent 0 64px,#c9d6ee 64px 66px);border-left:4px solid #e6a0a0;padding:14px 30px;transform:rotate(-1.5deg);box-shadow:0 20px 50px rgba(0,0,0,.6)">
   ${L.map((s, i) => `<div class="hw" style="${KAL};font-size:44px;color:#1f3a8a;height:66px;white-space:nowrap;overflow:hidden;width:0">${s}</div>`).join('')}</div>`, 'left:140px;top:360px', 'dimmable');
  T0.forEach(t => sfx(t, 'draw', .6));
  item(303.0, 317.1, n, (lt, t, it) => { n.style.opacity = clamp(lt / .25) * clamp((it.t1 - t) / .25); n.querySelectorAll('.hw').forEach((e, i) => e.style.width = clamp((t - T0[i]) / 1.4) * 780 + 'px'); });
  seg("Imam asy-Syafi'i", 297.9, 'left:140px;top:200px;width:860px', { size: 70, iv: .04 });
})();

// --- 11 Imam Malik bin Anas: hanya sekali (QS. An-Naml 30–31)
scene(317.1, 334.6, { cut: 'glitch' });
entity(317.2, 334.6, { css: 'left:1020px;top:170px', w: 800, h: 500, tag: 'DOSIER · MAZHAB MALIKI', name: 'Imam Malik bin Anas', ar: 'مَالِكُ بْنُ أَنَسٍ', rows: [['BASMALAH', 'hanya satu kali di dalam Al-Qur\'an'], ['AL-FATIHAH', 'tidak termasuk'], ['LETAKNYA', 'Surah An-Naml ayat 30 – 31']], blocks: [['DALAM AL-QUR\'AN', '1×', Y]], src: 'mazhab Maliki' });
seg('Imam Malik bin Anas', 317.3, 'left:140px;top:220px;width:860px', { size: 70, iv: .04 });
kin(node('', 'left:140px;top:380px;width:860px;font:800 50px Inter;color:#fff'), 'basmalah [hanya satu kali] di dalam Al-Qur\'an', 320.2, { iv: .03, marks: [322.0] });
kin(node('', 'left:140px;top:560px;width:860px;font:700 40px Inter;color:#ff8a5c'), 'dan tidak termasuk Surah Al-Fatihah', 325.0, { iv: .03 });
chip('QS. AN-NAML : 30 – 31', 330.0, 'left:140px;top:720px', 334.6, Y);

// --- 12 ayat An-Naml
scene(334.6, 344.7, { cut: 'glitch' });
card(334.6, 344.7, 'QS. AN-NAML : 30 – 31', 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ', null, { fs: 54, at: 230, ad: 1.6, h: 700 });
arw(node('إِنَّهُ مِنْ سُلَيْمَانَ وَإِنَّهُ [بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ]', 'left:220px;width:1480px;top:380px;text-align:center;font-size:76px;line-height:1.7;color:#151515'), 337.1, 3.0, { marks: [339.0] });
arw(node('أَلَّا تَعْلُوا عَلَيَّ وَأْتُونِي مُسْلِمِينَ', 'left:220px;width:1480px;top:560px;text-align:center;font-size:66px;line-height:1.7;color:#7a5a12'), 340.9, 2.4);
punch(339.0, 340.6, 960, 450, 1.35);

// --- 13 /roadmap : pemisah surah · takbiratul ihram → langsung alhamdulillah
scene(344.7, 369.9, { cut: 'glitch' });
seg('selain itu, basmalah hanya<br>[pemisah] surah dengan surah', 344.8, 'left:140px;top:170px;width:1640px', { size: 66, iv: .03, marks: [346.6] });
kin(node('', 'left:140px;top:380px;width:1640px;font:700 42px Inter;color:#ff8a5c'), 'bukan dari Al-Qur\'an → tidak dibaca pada saat salat', 349.9, { iv: .03 });
codeTag(356.3, 369.9, '08', '/roadmap');
label('MAZHAB MALIKI · DALAM SALAT', 356.4, 'left:140px;top:500px');
steps(['اللَّهُ أَكْبَرُ', 'langsung', 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ'], 358.2, 3.0, 'left:140px;top:580px', 369.9);
kin(node('', 'left:140px;top:820px;width:1640px;font:700 38px Inter;color:#fff'), 'takbiratul ihram → langsung membaca alhamdulillah', 360.0, { iv: .03 });

// --- 14 /flowchart : Imam Abu Hanifah
scene(369.9, 391.8, { cut: 'glitch' });
entity(370.0, 391.8, { css: 'left:1060px;top:160px', w: 760, h: 420, tag: 'DOSIER · MAZHAB HANAFI', name: 'Imam Abu Hanifah', ar: 'أَبُو حَنِيفَةَ', rows: [['BASMALAH', "bagian dari Al-Qur'an"], ['AL-FATIHAH', 'bukan bagian darinya'], ['DALAM SALAT', 'dibaca pelan-pelan']], src: 'mazhab Hanafi' });
seg('Imam Abu Hanifah', 370.1, 'left:140px;top:200px;width:880px', { size: 72, iv: .04 });
codeTag(380.0, 391.8, '09', '/flowchart');
sv(380.0, 391.8, DEFS + BOX(140, 640, 520, 140, { s: '#fff' }) + T(400, 700, 'بِسْمِ اللَّهِ', { f: .2, ff: 'Amiri', fs: 52, fw: 400 }) + T(400, 755, 'pelan-pelan', { f: .4, fs: 28, c: '#7fe0a0' }) +
  LN([[660, 710], [800, 710]], { arrow: 1, s: Y, sw: 5, del: 1.4 }) + BOX(820, 640, 560, 140, { s: Y, sw: 6, del: 1.6 }) + T(1100, 700, 'الْحَمْدُ لِلَّهِ', { f: 1.8, ff: 'Amiri', fs: 52, fw: 400, c: Y }) + T(1100, 755, 'nyaring', { f: 2.0, fs: 28, c: Y }) +
  T(960, 880, "bukan ayat Al-Fatihah, tapi termasuk Al-Qur'an → dibaca pelan", { f: 10.0, fs: 32 }), 'left:0;top:0', 1920, 1080, .5);

// --- 15 Imam Ahmad bin Hanbal + /tree ringkasan 4 mazhab
scene(391.8, 411.9, { cut: 'glitch' });
seg('Imam Ahmad bin Hanbal', 391.9, 'left:140px;top:150px;width:1640px', { size: 70, iv: .035 });
kin(node('', 'left:140px;top:270px;width:1640px;font:700 40px Inter;color:#fff'), 'ayat dari Al-Fatihah juga, tetapi [dibaca pelan] · alhamdulillah baru nyaring', 394.6, { iv: .025, marks: [397.4] });
codeTag(398.0, 411.9, '10', '/tree');
(() => {
  const M = [["Syafi'i", 'ayat Al-Fatihah', 'nyaring (subuh·maghrib·isyak)', Y], ['Maliki', "hanya di An-Naml", 'tidak dibaca', '#ff8a5c'], ['Hanafi', "Al-Qur'an, bukan Al-Fatihah", 'pelan', '#fff'], ['Hanbali', 'ayat Al-Fatihah', 'pelan', '#7fe0a0']];
  let g = BOX(760, 380, 400, 80, { s: Y }) + T(960, 432, 'BASMALAH', { f: .1, fs: 34, fw: 800, c: Y }) + LN([[960, 460], [960, 500]], { del: .3 }) + LN([[340, 500], [1580, 500]], { del: .4 });
  M.forEach((m, i) => { const x = 340 + i * 413, d = .6 + i * .5; g += LN([[x, 500], [x, 540]], { del: d }) + BOX(x - 195, 540, 390, 260, { s: m[3], del: d + .1 }) + T(x, 600, m[0], { f: d + .3, fs: 40, fw: 800, c: m[3] }) + T(x, 670, m[1], { f: d + .4, fs: 24 }) + T(x, 740, m[2], { f: d + .5, fs: 24, c: m[3] }); });
  sv(398.2, 411.9, g, 'left:0;top:0', 1920, 1080, .5);
})();
stamp('TIDAK JADI MASALAH', 'left:1080px;top:860px', 406.0, 411.9, '#2fae5b');

// --- 16 ayat pertama: basmalah & artinya
scene(411.9, 419.7, { cut: 'hard' });
arw(node(`[${BSM}]`, 'left:0;right:0;top:300px;text-align:center;font-size:120px;color:#fff'), 412.0, 1.6, { marks: [414.6] });
kin(node('', 'left:140px;top:600px;width:1640px;font:800 52px Inter;color:#fff;text-align:center'), 'dengan nama Allah yang [Maha Pengasih] lagi [Maha Penyayang]', 416.5, { iv: .025, marks: [418.0, 419.0] });

// --- 17 /diagram : ba jar & ta'alluq
scene(419.7, 439.3, { cut: 'glitch' });
codeTag(419.7, 439.3, '11', '/diagram');
label('KITAB NAHU · بَاءُ الْجَرِّ', 419.8, 'left:140px;top:150px');
sv(419.8, 439.3, DEFS + `<circle cx="400" cy="500" r="130" fill="rgba(233,242,58,.12)" stroke="${Y}" stroke-width="6" data-d="820"/>` + T(400, 540, 'بِـ', { f: .3, ff: 'Amiri', fs: 150, fw: 400, c: Y }) +
  LN([[530, 500], [760, 500]], { arrow: 1, s: Y, sw: 5, del: 2.4 }) + T(645, 470, 'تَعَلُّق', { f: 2.6, ff: 'Amiri', fs: 44, fw: 400 }) + T(645, 550, 'hubungannya', { f: 2.8, fs: 24, c: Y }) +
  [['أَقْرَأُ', 'aku membaca', 10.0], ['أَبْتَدِئُ', 'aku memulai', 15.4]].map(([a, b, d], i) => BOX(790, 360 + i * 170, 520, 130, { s: '#fff', del: d }) + T(960, 425 + i * 170, a, { f: d + .2, ff: 'Amiri', fs: 60, fw: 400 }) + T(1200, 437 + i * 170, b, { f: d + .4, fs: 26, c: Y })).join(''), 'left:0;top:0', 1920, 1080, .6);
kin(node('', 'left:140px;top:800px;width:1640px;font:700 40px Inter;color:#fff'), 'setiap huruf jar ba mesti ada [ta\'alluq]-nya', 420.5, { iv: .03, marks: [423.4] });

// --- 18 /sketchnotes : makan & minum
scene(439.3, 453.3, { cut: 'glitch' });
codeTag(439.3, 453.3, '12', '/sketchnotes');
arw(node(BSM, 'left:0;right:0;top:170px;text-align:center;font-size:80px;color:#fff'), 439.4, 1.2);
(() => {
  const C = [['آكُلُ', 'aku makan', 'hendak makan', 441.0, `<path d="M-60 20 Q0 70 60 20 Z" fill="none" stroke="${Y}" stroke-width="5"/><path d="M-30 -10 Q-20 -40 -30 -60 M0 -10 Q10 -40 0 -60 M30 -10 Q40 -40 30 -60" fill="none" stroke="#fff" stroke-width="4"/>`],
    ['أَشْرَبُ', 'aku minum', 'hendak minum', 447.9, `<path d="M-35 -55 H35 L25 60 H-25 Z" fill="none" stroke="${Y}" stroke-width="5"/><path d="M-30 -5 H30" stroke="#4aa3ff" stroke-width="5"/>`]];
  C.forEach((c, i) => { const n = node(`<div style="width:760px;height:500px;border:3px dashed ${Y};border-radius:24px;text-align:center;padding-top:24px"><div style="${KAL};font-size:40px;color:#fff">${c[2]}…</div><svg width="200" height="150" viewBox="-100 -75 200 150">${c[4]}</svg><div class="ar" style="font-size:96px;color:${Y}">${c[0]}</div><div style="${KAL};font-size:40px;color:#fff">"${c[1]}"</div></div>`, `left:${140 + i * 880}px;top:380px`); show(n, c[3], 'drop', 453.3); sfx(c[3], 'paper', .7); });
})();

// --- 19 /cycle : setiap perbuatan
scene(453.3, 471.0, { cut: 'glitch' });
codeTag(453.3, 471.0, '13', '/cycle');
(() => {
  const cx = 960, cy = 560, R = 330, A = [['membaca Al-Qur\'an', 455.2], ['berdiri', 457.4], ['salat', 458.6], ['makan', 460.0], ['minum', 461.2], ['bernafas', 462.4]];
  let g = `<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="#fff" stroke-width="4" stroke-dasharray="14 12" data-d="2074" data-dur="2"/>` + T(cx, cy - 10, 'بِسْمِ اللَّهِ', { f: .3, ff: 'Amiri', fs: 90, fw: 400, c: Y }) + T(cx, cy + 60, 'dengan nama Allah', { f: .5, fs: 28 });
  A.forEach(([s, t], i) => { const a = -Math.PI / 2 + i * Math.PI / 3, x = cx + Math.cos(a) * R, y = cy + Math.sin(a) * R, d = t - 453.4; g += `<circle cx="${x}" cy="${y}" r="16" fill="${Y}" data-f="${d}"/>` + T(x + (Math.cos(a) > .3 ? 30 : Math.cos(a) < -.3 ? -30 : 0), y + (Math.sin(a) < -.9 ? -34 : Math.sin(a) > .9 ? 54 : 10), s, { f: d + .1, fs: 38, fw: 800, a: Math.cos(a) > .3 ? 'start' : Math.cos(a) < -.3 ? 'end' : 'middle' }); });
  sv(453.4, 471.0, g, 'left:0;top:0', 1920, 1080, .8);
  label('SETIAP PERBUATAN KITA', 453.5, 'left:140px;top:150px');
  kin(node('', 'left:140px;top:960px;width:1640px;font:800 40px Inter;color:#fff;text-align:center'), 'semua itu [tidak terlepas] dari bismillah', 464.0, { iv: .03, marks: [466.0] });
})();

// --- 20 banyak sabda: sahih sampai daif
scene(471.0, 484.9, { cut: 'hard' });
seg('banyak sekali [sabda]<br>Baginda Rasulullah', 471.1, 'left:140px;top:220px;width:1640px', { size: 84, iv: .03, marks: [473.6] });
kin(node('', 'left:140px;top:500px;width:1640px;font:700 44px Inter;color:#fff'), 'yang menerangkan tentang bismillah', 476.0, { iv: .03 });
sv(480.4, 484.9, DEFS + LN([[160, 720], [1760, 720]], { s: '#fff', sw: 5 }) + `<circle cx="160" cy="720" r="18" fill="#2fae5b" data-f=".2"/><circle cx="1760" cy="720" r="18" fill="#ff8a5c" data-f="2.0"/>` + T(160, 790, 'kualitas sahih', { f: .3, fs: 34, fw: 800, c: '#7fe0a0', a: 'start' }) + T(1760, 790, 'kualitas daif', { f: 2.1, fs: 34, fw: 800, c: '#ff8a5c', a: 'end' }), 'left:0;top:0', 1920, 1080, .8);

// --- 21 hadis 1: kullu amrin dzi bal
scene(484.9, 498.3, { cut: 'glitch', light: 1 });
searchFind(484.9, 490.6, {
  q: 'كل أمر ذي بال', count: 3, pick: 0, shelfPick: 0, times: { type: .4, scan: 1.4, res: 2.2, click: 3.2, det: 3.5 },
  shelf: [["Al-Arba'in · ar-Ruhawi", 'الأربعين'], ['Al-Jami\' · al-Khatib', 'الجامع'], ['Sunan Abi Dawud', 'سنن أبي داود'], ['Al-Adzkar · an-Nawawi', 'الأذكار']],
  results: [
    { title: "Al-Arba'in · 'Abdul Qadir ar-Ruhawi", tag: 'LAFAZ BISMILLAH', ar: 'لَا يُبْدَأُ فِيهِ بِبِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ فَهُوَ أَبْتَرُ' },
    { title: 'Sunan Abi Dawud · 4840', tag: 'LAFAZ HAMDALAH', ar: 'كُلُّ كَلَامٍ لَا يُبْدَأُ فِيهِ بِالْحَمْدُ لِلَّهِ فَهُوَ أَجْذَمُ' },
    { title: 'Al-Adzkar · Imam an-Nawawi', tag: 'DIBAHAS', ar: 'كُلُّ أَمْرٍ ذِي بَالٍ' }],
  det: { title: 'Abu Hurairah', ar: 'أَبُو هُرَيْرَةَ', rows: [['PERAWI', "Abu Hurairah radhiyallahu 'anhu"], ['DINUKIL', "ar-Ruhawi · al-Khatib al-Baghdadi"], ['TEMA', 'memulai perkara dengan bismillah']], quote: 'فَهُوَ أَبْتَرُ' }
});
card(490.6, 498.3, 'SABDA RASULULLAH', 'كُلُّ أَمْرٍ ذِي بَالٍ لَا يُبْدَأُ فِيهِ بِبِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ فَهُوَ [أَبْتَرُ]', 'setiap sesuatu yang tidak dimulai dengan bismillah, [kurang berkah]', { fs: 66, ad: 1.4, am: [491.8], tt: 540, tr0: 491.9, tm: [495.2] });

// --- 22 /iceberg : berkah yang hilang
scene(498.3, 516.7, { cut: 'glitch' });
codeTag(498.3, 516.7, '14', '/iceberg');
sv(498.4, 516.7, `<path d="M120 520 H1800" stroke="#4aa3ff" stroke-width="4" data-d="1680"/>` +
  `<path d="M760 520 L880 380 L960 420 L1060 350 L1160 520Z" fill="rgba(255,255,255,.08)" stroke="#fff" stroke-width="4" data-d="900" data-del=".2"/>` + T(960, 320, 'yang tampak: makan · minum · perkara', { f: .5, fs: 30 }) +
  `<path d="M760 520 L560 720 L760 900 L1180 920 L1380 720 L1160 520" fill="rgba(74,163,255,.1)" stroke="#7fd6ff" stroke-width="4" data-d="1500" data-del="2.0"/>` + T(960, 690, 'keberkahan', { f: 2.3, fs: 64, fw: 800, c: '#7fd6ff' }) +
  T(960, 780, 'tanpa bismillah → kurang berkah', { f: 3.0, fs: 32, c: '#ff8a80' }), 'left:0;top:0', 1920, 1080, .8);
kin(node('', 'left:140px;top:960px;width:1640px;font:800 38px Inter;color:#fff;text-align:center'), 'makanan [kurang berkah] · minuman [kurang berkah]', 499.4, { iv: .03, marks: [501.4, 506.2] });

// --- 23 hadis 2: hidup bahagia, mati syahid
scene(516.7, 546.3, { cut: 'glitch' });
card(516.7, 546.3, 'SABDA RASULULLAH · HADIS BERIKUTNYA', 'مَنْ أَرَادَ أَنْ يَحْيَا [سَعِيدًا] وَيَمُوتَ [شَهِيدًا] فَلْيَقُلْ عِنْدَ ابْتِدَاءِ كُلِّ شَيْءٍ: بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', null, { fs: 60, ad: 13.0, am: [522.0, 524.6], h: 720 });
kin(node('', 'left:260px;top:560px;width:1400px;font:700 40px Inter;color:#222;text-align:center'), 'siapa yang hendak hidupnya [beruntung]', 530.6, { iv: .03, marks: [532.4] });
kin(node('', 'left:260px;top:640px;width:1400px;font:700 40px Inter;color:#222;text-align:center'), 'ingin mati digolongkan bersama para [syuhada]', 535.0, { iv: .03, marks: [538.0] });
kin(node('', 'left:260px;top:740px;width:1400px;font:800 40px Inter;color:#0f4d3a;text-align:center'), 'mulailah sesuatu yang baik dengan bismillah', 541.0, { iv: .03 });

// --- 24 hadis 3: surga berkata (/infographic)
scene(546.3, 561.2, { cut: 'glitch' });
card(546.3, 561.2, 'SABDA RASULULLAH', 'إِذَا قَالَ الْعَبْدُ: بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ، قَالَتِ [الْجَنَّةُ]: اللَّهُمَّ إِنَّ عَبْدَكَ فُلَانَ بْنَ فُلَانٍ قَالَ: بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ، اللَّهُمَّ زَحْزِحْهُ عَنِ النَّارِ وَأَدْخِلْهُ الْجَنَّةَ', null, { fs: 50, ad: 14.0, am: [551.0], h: 720 });
scene(561.2, 583.0, { cut: 'glitch' });
codeTag(561.2, 583.0, '15', '/infographic');
(() => {
  const it = [['01', 'hamba mengucap', 'بِسْمِ اللَّهِ', 561.4], ['02', 'surga berkata', '"Wahai Tuhan…"', 563.6], ['03', 'jauhkan dari', 'api neraka', 571.6], ['04', 'masukkan ke', 'surga', 573.4]];
  let g = LN([[220, 560], [1700, 560]], { s: '#fff', sw: 6 });
  it.forEach((x, i) => { const cx = 330 + i * 420, d = x[3] - 561.3; g += `<circle cx="${cx}" cy="560" r="70" fill="${i === 3 ? Y : '#151515'}" stroke="${i === 3 ? Y : '#fff'}" stroke-width="4" data-d="440" data-del="${d}"/>` + T(cx, 575, x[0], { f: d + .2, fs: 44, fw: 800, c: i === 3 ? '#111' : Y, ff: 'DejaVu Sans Mono' }) + T(cx, 680, x[1], { f: d + .3, fs: 34, fw: 800 }) + T(cx, 730, x[2], { f: d + .4, fs: 32, c: i === 3 ? Y : '#fff', ff: i === 0 ? 'Amiri' : 'Inter' }); });
  sv(561.3, 583.0, g, 'left:0;top:0', 1920, 1080, .5);
  label('KETIKA KITA MENGUCAP BISMILLAH', 561.4, 'left:140px;top:180px');
  kin(node('', 'left:140px;top:880px;width:1640px;font:800 44px Inter;color:#fff;text-align:center'), 'setiap kali mengucap bismillah, [surga akan berkata demikian]', 575.6, { iv: .025, marks: [578.6] });
})();

// --- 25 penutup
scene(583.0, TOTAL, { cut: 'hard' });
mePol('left:200px;top:200px', 583.1, TOTAL, -4, 420);
arw(node('بِسْمِ اللَّهِ', 'left:760px;top:170px;width:1100px;font-size:120px;color:#fff;text-align:left'), 583.2, .8);
seg('permulaan segala sesuatu<br>yang baik · [keberkahan]', 584.2, 'left:760px;top:420px;width:1100px', { size: 52, iv: .025, marks: [587.0] });
sub2('left:760px;top:660px', 586.0, TOTAL);
