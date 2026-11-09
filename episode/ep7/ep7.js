// ================================================================== ADEGAN EPISODE 07 · Alhamdulillah (ayat kedua)
const BSM = 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ';
const HMD = 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ';
const H0 = 'الْحَمْدُ لِلَّهِ';
function meTag(t0, t1, topik) { const n = node(`<div style="width:430px;background:#141414;border:2px solid ${Y};padding:18px 22px">
  <div class="mono" style="font-size:16px;color:${Y}">● PENYAMPAI KAJIAN</div><div style="font:800 34px Inter;margin-top:6px">@alurziyadahku</div>
  <div class="mono" style="font-size:15px;color:#eee;margin-top:8px">TOPIK: <span class="ar" style="font-size:24px;color:#fff">${topik}</span></div></div>`, 'left:1270px;top:720px'); show(n, t0, 'left', t1); sfx(t0, 'beep', .5); }
// kartu besar: lingkaran label + judul
function bigCard(t0, t1, top, no, title, sub, col = Y, top0 = 180) {
  const n = node(`<div style="display:flex;align-items:center;gap:46px"><div style="flex:none;width:230px;height:230px;border-radius:50%;border:8px solid ${col};display:flex;flex-direction:column;align-items:center;justify-content:center"><div class="mono" style="font-size:22px;color:${col}">${top}</div><div style="font:900 ${no.length > 3 ? 46 : 96}px Inter;line-height:1;color:${col}">${no}</div></div>
   <div><div style="font:900 96px Inter;line-height:1;color:${col}">${title}</div><div style="font:700 40px Inter;margin-top:12px">${sub}</div></div></div>`, `left:140px;top:${top0}px`, 'dimmable');
  show(n, t0, 'left', t1); sfx(t0, 'stamp', .8); return n;
}
function doa(t0, t1, lab, ar, tr, o = {}) {
  label(lab, t0 + .05, 'left:160px;top:140px', t1);
  paper(t0, `left:160px;top:190px;width:1600px;height:${o.h || 620}px`, '', t1);
  arw(node(ar, `left:220px;width:1480px;top:240px;text-align:center;font-size:${o.fs || 70}px;line-height:1.75;color:#151515`), o.a0 || t0 + .1, o.ad || 2.6, { marks: o.am || [], t1 });
  if (tr) kin(node('', `left:260px;top:${o.tt || 560}px;width:1400px;font:700 ${o.tfs || 38}px Inter;color:#222;text-align:center`), tr, o.tr0 || t0 + 2.6, { iv: .026, marks: o.tm || [], t1 });
  if (o.chip) chip(o.chip, o.c0 || t0 + 1.2, `left:160px;top:${(o.h || 620) + 215}px`, t1, Y);
}
const lines = (t1, css, L, fs = 50) => L.forEach(([t, s, c], i) => { const n = node(`<div style="display:flex;align-items:center;gap:22px"><div style="width:22px;height:22px;border-radius:50%;background:${c || Y};flex:none"></div><div style="font:800 ${fs}px Inter">${s}</div></div>`, css.replace('TOP', 0) + `;top:${parseInt(css.match(/top:(\d+)/)[1]) + i * (fs * 1.9)}px`, 'dimmable'); show(n, t, 'left', t1); sfx(t, 'click', .6); });

// --- 0 pembuka
scene(0, 5.4, { cut: 'none' });
arw(node(BSM, 'left:140px;top:110px;width:1000px;font-size:64px;color:#fff;text-align:left'), .15, 1.0);
label('FILE 07 · AYAT KEDUA AL-FATIHAH', 1.3, 'left:140px;top:250px');
arw(node(`[${HMD}]`, 'left:140px;top:300px;width:1100px;font-size:96px;color:#fff;text-align:left'), 2.2, 2.0, { marks: [4.2] });
mePol('left:1300px;top:150px', .4, 5.4, 4, 400);
meTag(1.6, 5.4, 'الْحَمْدُ لِلَّهِ');

// --- 1 hukum wajib: salat
scene(5.4, 22.44, { cut: 'glitch' });
kin(node('', 'left:140px;top:110px;width:1640px;font:700 38px Inter;color:#fff'), 'para ulama: mengucapkan alhamdulillah kadang-kadang hukumnya…', 5.5, { iv: .025 });
bigCard(9.4, 22.44, 'HUKUM', '01', 'WAJIB', 'contohnya seperti apa?', '#2fae5b', 200);
lines(22.44, 'left:420px;top:520px', [[12.6, 'sedang salat · membaca Al-Fatihah', '#2fae5b'], [19.3, 'tertinggal → salat tidak sah', '#ff8a5c']]);

// --- 2 wajib: khutbah Jumat
scene(22.44, 31.9, { cut: 'glitch' });
bigCard(22.5, 31.9, 'WAJIB', '+1', 'KHUTBAH JUMAT', 'khatib mengucapkan alhamdulillah', '#2fae5b', 200);
const cbJ = node(`<div style="width:1500px;height:160px;border:4px solid #2fae5b;border-radius:18px;background:rgba(47,174,91,.12);padding:20px 30px"><div class="mono" style="font-size:22px;color:#7fe0a0">💡 RUKUN KHUTBAH</div></div>`, 'left:210px;top:620px'); show(cbJ, 26.7, 'scale', 31.9); sfx(26.7, 'beep', .6);
kin(node('', 'left:250px;top:690px;width:1420px;font:800 44px Inter;color:#fff'), 'khatib Jumat mengucap alhamdulillah → itu [wajib]', 27.0, { iv: .028, marks: [30.0] });

// --- 3 sunnah: khutbah nikah, memulai doa (/checklist)
scene(31.9, 46.52, { cut: 'glitch' });
bigCard(32.0, 46.52, 'HUKUM', '02', 'SUNNAH', 'mengucapkan alhamdulillah', Y, 160);
[['khutbah nikah', 33.6], ['menghadiri acara pernikahan', 37.2], ['memulai doa', 42.6]].forEach(([s, t], i) => { const n = node(`<div style="display:flex;align-items:center;gap:22px"><div style="width:64px;height:64px;border-radius:10px;background:${Y};display:flex;align-items:center;justify-content:center;font:900 46px Inter;color:#111">✓</div><div style="font:800 48px Inter">${s}</div></div>`, `left:420px;top:${480 + i * 100}px`); show(n, t, 'scale', 46.52); sfx(t, 'click', .8); });

// --- 4 /roadmap : urutan doa
scene(46.52, 59.4, { cut: 'glitch' });
label('URUTAN MEMULAI DOA', 46.6, 'left:140px;top:150px');
steps(['أَعُوذُ بِاللَّهِ', 'بِسْمِ اللَّهِ', 'الْحَمْدُ لِلَّهِ'], 47.2, 3.4, 'left:200px;top:420px', 59.4);
kin(node('', 'left:140px;top:700px;width:1640px;font:700 40px Inter;color:#fff;text-align:center'), "doa dimulai bismillah · boleh juga ta'awwudz dulu · lalu alhamdulillah", 50.9, { iv: .025 });

// --- 5 /syamilah : doa diawali bismillah tidak tertolak
scene(59.4, 68.52, { cut: 'glitch' });
searchFind(59.4, 68.52, {
  q: 'لا يرد دعاء أوله بسم الله', count: 4, pick: 0, shelfPick: 0, times: { type: .4, scan: 1.3, res: 2.0, click: 2.8, det: 3.1 },
  shelf: [["Rabi' al-Abrar · az-Zamakhsyari", 'ربيع الأبرار'], ['Al-Jami\' · al-Khatib', 'الجامع'], ["Kanz al-'Ummal", 'كنز العمال'], ['Al-Adzkar · an-Nawawi', 'الأذكار'], ['Fath al-Bari', 'فتح الباري']],
  results: [
    { title: "Rabi' al-Abrar wa Nushush al-Akhyar · j. 2 hlm. 449", tag: 'COCOK', ar: 'لَا يُرَدُّ دُعَاءٌ أَوَّلُهُ بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ' },
    { title: 'Al-Jami\' li Akhlaq ar-Rawi · al-Khatib al-Baghdadi', tag: 'DIRIWAYATKAN', ar: 'بَابُ الْبَسْمَلَةِ فِي أَوَّلِ الْكِتَابِ' },
    { title: "Kanz al-'Ummal · al-Muttaqi al-Hindi", tag: 'DINUKIL', ar: 'دُعَاءٌ أَوَّلُهُ بِسْمِ اللَّهِ' },
    { title: 'Al-Adzkar · bab adab berdoa', tag: 'TERKAIT', ar: 'افْتِتَاحُ الدُّعَاءِ بِالْحَمْدِ' }],
  det: { title: "Rabi' al-Abrar", ar: 'رَبِيعُ الْأَبْرَارِ', rows: [['PENULIS', 'Jarullah az-Zamakhsyari (w. 538 H)'], ['LETAK', 'jilid 2 · halaman 449'], ['ISI', 'doa yang diawali bismillah tidak ditolak'], ['CATATAN', 'bukan kitab hadis induk · sanad lemah'], ['DIPERIKSA', 'Maktabah Syamilah']], quote: 'لَا يُرَدُّ دُعَاءٌ أَوَّلُهُ بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ' }
});

// --- 6 /bookend : diawali bismillah, diakhiri alhamdulillah
scene(68.52, 74.34, { cut: 'glitch' });
[['بِسْمِ اللَّهِ', 'AWAL DOA', 68.6], ['الْحَمْدُ لِلَّهِ', 'AKHIR DOA · SUNNAH', 70.0]].forEach((p, i) => { const n = node(`<div style="width:700px;height:300px;border:6px solid ${Y};border-radius:20px;text-align:center;padding-top:40px;background:rgba(233,242,58,.08)"><div class="ar" style="font-size:110px">${p[0]}</div><div class="mono" style="font-size:26px;color:${Y}">${p[1]}</div></div>`, `left:${180 + i * 860}px;top:380px`); show(n, p[2], 'up', 74.34); sfx(p[2], 'stamp', .6); });
const dDoa = node('<div style="font:900 60px Inter;color:#fff">doa</div>', 'left:895px;top:490px'); show(dDoa, 69.0, 'scale', 74.34);

// --- 7 /split-screen : nikmat kita vs orang lain sengsara
scene(74.34, 100.74, { cut: 'glitch' });
kin(node('', 'left:140px;top:120px;width:1640px;font:800 44px Inter;color:#fff'), 'sesudah makan · minum · mendapat nikmat → [sunnah] alhamdulillah', 74.5, { iv: .022, marks: [80.6] });
[['KITA DAPAT NIKMAT', 'الْحَمْدُ لِلَّهِ', 'nikmat dari Allah', Y, 86.5], ['ORANG LAIN SENGSARA', 'تَوَقَّفْ', 'sedang mendapat musibah', '#ff8a5c', 91.1]].forEach((p, i) => { const n = node(`<div style="width:780px;height:460px;border:5px solid ${p[3]};border-radius:18px;text-align:center;padding-top:40px;background:rgba(255,255,255,.03)"><div class="mono" style="font-size:26px;color:${p[3]}">${p[0]}</div><div class="ar" style="font-size:110px;color:${p[3]};margin-top:10px">${p[1]}</div><div style="font:800 38px Inter;margin-top:10px">${p[2]}</div></div>`, `left:${140 + i * 860}px;top:260px`, 'dimmable'); show(n, p[4], 'up', 100.74); sfx(p[4], 'stamp', .6); });
kin(node('', 'left:140px;top:790px;width:1640px;font:800 42px Inter;color:#ff8a5c;text-align:center'), 'sebaiknya [jangan] diucapkan di mulut saat itu', 92.4, { iv: .03, marks: [94.0] });

// --- 8 /syamilah + /dossier : kisah istighfar 30 tahun
scene(100.74, 109.2, { cut: 'glitch' });
searchFind(100.74, 109.2, {
  q: 'أستغفر الله ثلاثين سنة من قولي الحمد لله', count: 4, pick: 0, shelfPick: 1, times: { type: .4, scan: 1.3, res: 2.0, click: 2.8, det: 3.1 },
  shelf: [["Tarikh Dimasyq · Ibnu 'Asakir", 'تاريخ دمشق'], ['Al-Luma\' fi al-Hawadits', 'اللمع'], ["Hilyat al-Auliya'", 'حلية الأولياء'], ['Siyar A\'lam an-Nubala\'', 'سير أعلام النبلاء'], ['Ar-Risalah al-Qusyairiyyah', 'الرسالة القشيرية']],
  results: [
    { title: 'Al-Luma\' fi al-Hawadits wa al-Bida\' · hlm. 788', tag: 'KISAH', ar: 'لِي ثَلَاثُونَ سَنَةً أَسْتَغْفِرُ اللَّهَ مِنْ قَوْلِي مَرَّةً: الْحَمْدُ لِلَّهِ' },
    { title: "Tarikh Dimasyq · Ibnu 'Asakir · j. 20 hlm. 175", tag: 'SANAD', ar: 'وَقَعَ الْحَرِيقُ فِي السُّوقِ' },
    { title: "Siyar A'lam an-Nubala' · adz-Dzahabi", tag: 'BIOGRAFI', ar: 'السَّرِيُّ السَّقَطِيُّ' },
    { title: 'Ar-Risalah al-Qusyairiyyah', tag: 'TERKAIT', ar: 'بَابُ الشُّكْرِ' }],
  det: { title: 'Kisah istighfar 30 tahun', ar: 'ثَلَاثُونَ سَنَةً', rows: [['DALAM KITAB', 'tokoh: as-Sari as-Saqathi (w. 253 H)'], ['HUBUNGAN', 'guru & paman al-Junaid al-Baghdadi'], ['PERISTIWA', 'pasar terbakar · tokonya selamat'], ['UCAPAN', '"alhamdulillah" → istighfar 30 tahun'], ['DIPERIKSA', 'Maktabah Syamilah']], quote: 'أَسْتَغْفِرُ اللَّهَ مِنْ قَوْلِي: الْحَمْدُ لِلَّهِ' }
});
scene(109.2, 117.68, { cut: 'glitch' });
entity(109.3, 117.68, { css: 'left:880px;top:170px', w: 900, h: 520, tag: 'DOSIER · ULAMA BESAR', name: "Al-Imam asy-Syafi'i", ar: 'الْإِمَامُ الشَّافِعِيُّ', rows: [['SEMASA', 'al-Imam al-Junaid al-Baghdadi'], ['UJAR BELIAU', '"aku beristighfar 30 tahun…"'], ['GARA-GARA', 'mengucapkan alhamdulillah']], blocks: [['ISTIGHFAR', '30 tahun', Y], ['SEBAB', 'الْحَمْدُ لِلَّهِ', '#ebe6d6']], src: 'kisah yang disampaikan penyampai' });
counter(110.0, 117.68, 30, 'left:140px;top:300px', 'TAHUN BERISTIGHFAR', Y, 1.6);
kin(node('', 'left:140px;top:520px;width:680px;font:800 44px Inter;color:#fff;line-height:1.25'), 'gara-gara apa? gara-gara [alhamdulillah]', 113.2, { iv: .03, marks: [115.6] });

// --- 9 /timeline : kisah pasar terbakar
scene(117.68, 153.34, { cut: 'glitch' });
label('KISAHNYA', 117.8, 'left:140px;top:150px');
sv(117.8, 153.34, LN([[160, 560], [1760, 560]], { s: '#fff', sw: 5 }) + [['salat di masjid', 'suatu hari', 0], ['kabar datang', '"pasar kebakaran"', 3.0], ['toko Anda selamat', 'tidak ikut terbakar', 10.0], [H0, 'aku pun mengucap', 16.4], ['kepikiran…', 'di atas derita orang', 20.4], ['istighfar 30 tahun', 'bertaubat kepada Allah', 24.4]].map(([a, b, d], i) => { const x = 220 + i * 296;
  return `<circle cx="${x}" cy="560" r="20" fill="${i === 3 ? Y : i === 5 ? '#ff8a5c' : '#fff'}" data-f="${d}"/>` + T(x, i % 2 ? 470 : 640, a, { f: d + .1, fs: a === H0 ? 44 : 30, fw: 800, ff: a === H0 ? 'Amiri' : 'Inter', c: i === 3 ? Y : i === 5 ? '#ff8a5c' : '#fff' }) + T(x, i % 2 ? 420 : 690, b, { f: d + .3, fs: 24, c: '#eee', fw: 500 }); }).join(''), 'left:0;top:0', 1920, 1080, 1.2);
punch(152.0, 153.3, 1700, 640, 1.3);

// --- 10 /iceberg : tokoku selamat vs ribuan toko terbakar
scene(153.34, 169.08, { cut: 'glitch' });
kin(node('', 'left:140px;top:110px;width:1640px;font:800 40px Inter;color:#fff'), '"khawatir aku hanya mementingkan [kenikmatanku]…"', 153.5, { iv: .025, marks: [157.4] });
sv(156.0, 169.08, `<path d="M120 470 H1800" stroke="#4aa3ff" stroke-width="4" data-d="1680"/><path d="M880 470 L930 410 L990 430 L1040 470Z" fill="rgba(233,242,58,.2)" stroke="${Y}" stroke-width="4" data-d="400" data-del=".2"/>` + T(960, 380, 'tokoku selamat', { f: .5, fs: 34, fw: 800, c: Y }) +
  `<path d="M880 470 L560 720 L760 920 L1180 940 L1380 720 L1040 470" fill="rgba(255,138,92,.12)" stroke="#ff8a5c" stroke-width="4" data-d="1500" data-del="4.6"/>` + T(960, 700, 'ribuan toko terbakar', { f: 5.0, fs: 52, fw: 900, c: '#ff8a5c' }) + T(960, 770, '"aku lupa memikirkannya"', { f: 5.6, fs: 32, fw: 700 }), 'left:0;top:0', 1920, 1080, .8);
stamp('ADA ATURANNYA', 'left:1340px;top:820px', 164.6, 169.08, Y);

// --- 11 /decision-matrix : 4 hukum alhamdulillah
scene(169.08, 195.58, { cut: 'glitch' });
(() => { const Hk = [['WAJIB', '#2fae5b', 'salat · khutbah Jumat', 169.2], ['SUNNAH', Y, 'nikah · doa · sesudah makan', 169.6], ['MAKRUH', '#ff8a5c', 'mulut bernajis · tempat kotor', 170.6], ['HARAM', '#d7322b', 'gembira dengan maksiat', 177.7]];
  Hk.forEach(([h, c, ex, t], i) => { const n = node(`<div style="width:390px;height:560px;border:4px solid ${c};border-radius:16px;background:${i >= 2 ? 'rgba(255,255,255,.05)' : 'rgba(255,255,255,.02)'};padding:24px;opacity:${i < 2 ? .75 : 1}"><div class="mono" style="font-size:22px;color:${c}">HUKUM ${String(i + 1).padStart(2, '0')}</div><div style="font:900 58px Inter;color:${c};margin-top:6px">${h}</div><div style="height:3px;background:${c};margin:16px 0 20px"></div><div style="font:800 34px Inter;line-height:1.25">${ex}</div></div>`, `left:${140 + i * 420}px;top:200px`, 'dimmable'); show(n, t, 'up', 195.58); sfx(t, 'stamp', .7); }); })();
kin(node('', 'left:140px;top:820px;width:1640px;font:800 40px Inter;color:#fff;text-align:center'), 'menang berjudi · selesai minum arak → alhamdulillah = [menambah dosa]', 183.2, { iv: .025, marks: [191.4] });
punch(177.7, 179.6, 1540, 480, 1.5);

// --- 12 /layers : alhamdulillah tetap, ujung menyesuaikan
scene(195.58, 211.88, { cut: 'glitch' });
seg('ujungnya diganti sesuai [keadaan]', 195.7, 'left:140px;top:150px;width:1640px', { size: 66, iv: .03, marks: [205.0] });
(() => { const a = node(`<div style="width:760px;height:250px;border:6px solid ${Y};border-radius:14px;background:rgba(233,242,58,.12);text-align:center;padding-top:20px"><div class="ar" style="font-size:96px">${H0}</div><div class="mono" style="font-size:24px;color:${Y}">TETAP</div></div>`, 'left:1020px;top:420px'); show(a, 199.0, 'left', 211.88); sfx(199.0, 'stamp', .7);
  const b = node(`<div style="width:760px;height:250px;border:4px dashed #ff8a5c;border-radius:14px;text-align:center;padding-top:20px"><div class="ar" style="font-size:80px">رَبِّ الْعَالَمِينَ ← …</div><div class="mono" style="font-size:24px;color:#ff8a5c">BISA DIGANTI → DOA SESUAI KEADAAN</div></div>`, 'left:140px;top:420px'); show(b, 204.6, 'left', 211.88); sfx(204.6, 'click', .7); })();
kin(node('', 'left:140px;top:760px;width:1640px;font:800 42px Inter;color:#fff;text-align:center'), 'contohnya: habis [bangun tidur]', 209.7, { iv: .03, marks: [211.0] });

// --- 13 /syamilah + /citation : doa bangun tidur
scene(211.88, 219.5, { cut: 'glitch' });
searchFind(211.88, 219.5, {
  q: 'الحمد لله الذي أحيانا بعد ما أماتنا', count: 4, pick: 0, shelfPick: 0, times: { type: .4, scan: 1.3, res: 2.0, click: 2.8, det: 3.1 },
  shelf: [['Shahih al-Bukhari', 'صحيح البخاري'], ['Shahih Muslim', 'صحيح مسلم'], ['Sunan Abi Dawud', 'سنن أبي داود'], ['Sunan at-Tirmidzi', 'سنن الترمذي'], ['Al-Adzkar · an-Nawawi', 'الأذكار']],
  results: [
    { title: 'Shahih al-Bukhari · 6312 · kitab ad-Da\'awat', tag: 'SHAHIH', ar: 'وَإِذَا قَامَ قَالَ: الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا' },
    { title: 'Shahih Muslim · 2711 · dari al-Bara\'', tag: 'SHAHIH', ar: 'وَإِلَيْهِ النُّشُورُ' },
    { title: 'Sunan Abi Dawud · 5049', tag: 'RIWAYAT', ar: 'بَابُ مَا يَقُولُ إِذَا أَصْبَحَ' },
    { title: 'Al-Adzkar · dzikir bangun tidur', tag: 'TERKAIT', ar: 'أَذْكَارُ الِاسْتِيقَاظِ' }],
  det: { title: 'Shahih al-Bukhari', ar: 'صَحِيحُ الْبُخَارِيِّ', rows: [['NOMOR', '6312 · kitab ad-Da\'awat'], ['PERAWI', "Hudzaifah bin al-Yaman radhiyallahu 'anhu"], ['WAKTU', 'ketika bangun dari tidur'], ['DERAJAT', 'shahih'], ['DIPERIKSA', 'Maktabah Syamilah']], quote: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ' }
});
scene(219.5, 241.04, { cut: 'glitch' });
doa(219.5, 241.04, 'BANGUN TIDUR · DIAJARKAN RASULULLAH', 'الْحَمْدُ لِلَّهِ الَّذِي [أَحْيَانَا] بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ', 'segala puji bagi Allah yang menghidupkan kami setelah mematikan kami, dan kepada-Nya kami kembali', { a0: 219.7, ad: 4.2, am: [222.0], tr0: 224.4, chip: 'SHAHIH AL-BUKHARI · 6312', fs: 74 });
kin(node('', 'left:160px;top:950px;width:1600px;font:800 38px Inter;color:' + Y + ';text-align:center'), 'tanda hati terhubung dengan Allah: bangun tidur langsung mengingat-Nya', 231.0, { iv: .022 });

// --- 14 /versus : hati hidup vs hati sibuk dunia
scene(241.04, 277.82, { cut: 'glitch' });
[['HATI YANG HIDUP', 'bangun tidur → langsung memuji Allah', 'tidak ada pikiran lain selain memuji Allah', '#2fae5b', 245.4], ['HATI SIBUK DUNIAWI', 'bangun tidur → tak sempat alhamdulillah', 'ada saja yang dipikirkan · ada saja yang dicari', '#ff8a5c', 259.3]].forEach((p, i) => { const n = node(`<div style="width:780px;height:560px;border:5px solid ${p[3]};border-radius:18px;padding:34px;background:rgba(255,255,255,.03)"><div class="mono" style="font-size:26px;color:${p[3]}">${p[0]}</div><div style="font:900 50px Inter;color:${p[3]};margin-top:26px;line-height:1.15">${p[1]}</div><div style="font:700 34px Inter;margin-top:30px;line-height:1.3">${p[2]}</div></div>`, `left:${140 + i * 860}px;top:200px`, 'dimmable'); show(n, p[4], 'up', 277.82); sfx(p[4], 'stamp', .7); });
arw(node(H0, 'left:140px;width:780px;top:860px;text-align:center;font-size:70px;color:#7fe0a0'), 241.2, 1.6);
kin(node('', 'left:1000px;top:870px;width:780px;font:800 36px Inter;color:#fff;text-align:center'), 'nilailah diri kita sendiri…', 269.5, { iv: .03 });

// --- 15 /handwritten : menilai diri saat bangun
scene(277.82, 300.97, { cut: 'glitch' });
(() => { const L = ['bangun tidur: apa yang kuucapkan?', 'apa yang kupikirkan?', 'nikmat hidup masih diberi Allah ✓', 'maka langsung mengingat Allah ♡'], T0 = [278.0, 280.4, 285.7, 289.6];
  const n = node(`<div style="width:1300px;height:${L.length * 72 + 40}px;background:#fbf6e6;background-image:repeating-linear-gradient(transparent 0 70px,#c9d6ee 70px 72px);border-left:4px solid #e6a0a0;padding:16px 34px;transform:rotate(-1deg);box-shadow:0 20px 50px rgba(0,0,0,.6)">
   ${L.map((s, i) => `<div class="hw" style="${KAL};font-size:48px;color:${i >= 2 ? '#2f7d4a' : '#1f3a8a'};height:72px;white-space:nowrap;overflow:hidden;width:0">${s}</div>`).join('')}</div>`, 'left:310px;top:170px', 'dimmable');
  T0.forEach(t => sfx(t, 'draw', .6)); item(277.9, 300.97, n, (lt, t, it) => { n.style.opacity = clamp(lt / .25) * clamp((it.t1 - t) / .25); n.querySelectorAll('.hw').forEach((e, i) => e.style.width = clamp((t - T0[i]) / 1.6) * 1240 + 'px'); }); })();
arw(node('الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ', 'left:0;right:0;top:620px;text-align:center;font-size:62px;color:' + Y), 294.9, 4.6);

// --- 16 /sketchnotes : keluar kamar mandi
scene(300.97, 309.55, { cut: 'glitch' });
label('KELUAR DARI KAMAR MANDI', 301.0, 'left:140px;top:150px');
sv(301.0, 309.55, `<g transform="translate(260 330)"><rect x="0" y="0" width="200" height="360" rx="10" fill="none" stroke="#fff" stroke-width="5" data-d="1120"/><circle cx="165" cy="190" r="10" fill="${Y}" data-f=".5"/><path d="M230 180 H330" stroke="${Y}" stroke-width="5" data-d="100" data-del=".6"/><path d="M310 160 L335 180 L310 200" fill="none" stroke="${Y}" stroke-width="5" data-d="70" data-del=".8"/></g>`, 'left:0;top:0', 1920, 1080, .7);
arw(node('غُفْرَانَكَ', 'left:700px;width:1100px;top:280px;text-align:center;font-size:100px;color:' + Y), 304.0, .8);
arw(node('الْحَمْدُ لِلَّهِ الَّذِي أَذْهَبَ عَنِّي الْأَذَى وَعَافَانِي', 'left:700px;width:1100px;top:470px;text-align:center;font-size:58px;color:#fff'), 305.6, 3.8);

// --- 17 /syamilah + /citation + /badge : sesudah makan
scene(309.55, 317.2, { cut: 'glitch' });
searchFind(309.55, 317.2, {
  q: 'الحمد لله الذي أطعمني هذا ورزقنيه', count: 4, pick: 0, shelfPick: 0, times: { type: .4, scan: 1.3, res: 2.0, click: 2.8, det: 3.1 },
  shelf: [['Sunan Abi Dawud', 'سنن أبي داود'], ['Sunan at-Tirmidzi', 'سنن الترمذي'], ['Sunan Ibni Majah', 'سنن ابن ماجه'], ['Musnad Ahmad', 'مسند أحمد'], ['Al-Adzkar', 'الأذكار']],
  results: [
    { title: 'Sunan Abi Dawud · 4023 · kitab al-Libas', tag: 'MAKAN & PAKAIAN', ar: 'غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ' },
    { title: 'Sunan at-Tirmidzi · 3458 · hasan gharib', tag: 'MAKAN', ar: 'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ' },
    { title: 'Sunan Ibni Majah · 3285', tag: 'MAKAN', ar: 'مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ' },
    { title: 'Musnad Ahmad · Mu\'adz bin Anas', tag: 'RIWAYAT', ar: 'مَنْ أَكَلَ طَعَامًا' }],
  det: { title: 'Sunan Abi Dawud', ar: 'سُنَنُ أَبِي دَاوُدَ', rows: [['NOMOR', '4023 · kitab al-Libas'], ['PERAWI', "Mu'adz bin Anas al-Juhani"], ['ISI', 'doa sesudah makan & memakai pakaian'], ['KEUTAMAAN', 'diampuni dosa yang telah lalu'], ['DIPERIKSA', 'Maktabah Syamilah']], quote: 'غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ' }
});
scene(317.2, 341.85, { cut: 'glitch' });
doa(317.2, 341.85, 'SESUDAH MAKAN · SEKURANG-KURANGNYA ALHAMDULILLAH', 'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ', null, { a0: 317.3, ad: 6.0, fs: 62, h: 520, chip: 'SUNAN ABI DAWUD · SUNAN AT-TIRMIDZI', c0: 318.0 });
sv(324.8, 341.85, `<path d="M960 660 L1100 720 V830 Q1100 920 960 970 Q820 920 820 830 V720 Z" fill="rgba(47,174,91,.15)" stroke="#2fae5b" stroke-width="7" data-d="900"/>` + T(960, 850, '✓', { f: .8, fs: 90, fw: 900, c: '#7fe0a0' }) + T(640, 830, 'Allah ridha', { f: 3.0, fs: 46, fw: 900, c: '#7fe0a0', a: 'end' }) + T(1280, 830, 'dosa diampuni', { f: 8.0, fs: 46, fw: 900, c: '#7fe0a0', a: 'start' }), 'left:0;top:0', 1920, 1080, .8);

// --- 18 /citation : selesai memakai pakaian
scene(341.85, 358.03, { cut: 'glitch' });
doa(341.85, 358.03, 'SELESAI MEMAKAI PAKAIAN', 'الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هَذَا [الثَّوْبَ] وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ', 'kita pun akan mendapat [ampunan] dari Allah', { a0: 346.3, ad: 5.6, am: [348.6], tr0: 352.6, tm: [356.0], fs: 64, chip: 'SUNAN ABI DAWUD · 4023' });
kin(node('', 'left:260px;top:430px;width:1400px;font:800 46px Inter;color:#7a1f1a;text-align:center'), 'apa kita ucapkan?', 342.0, { iv: .05, t1: 346.2 });

// --- 19 /erase : hal kecil melebur dosa
scene(358.03, 377.07, { cut: 'glitch' });
seg('banyak sekali cara<br>[melebur dosa]', 358.1, 'left:140px;top:140px;width:1640px', { size: 84, iv: .03, marks: [360.0] });
(() => { const n = node(`<div style="position:relative;width:1100px;height:260px"><div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font:900 200px Inter;color:#ff8a5c;letter-spacing:.06em">DOSA</div><div class="wp" style="position:absolute;top:0;bottom:0;right:0;background:#000;width:0"></div></div>`, 'left:410px;top:470px');
  item(361.3, 377.07, n, (lt, t, it) => { n.style.opacity = clamp(lt / .3) * clamp((it.t1 - t) / .3); n.querySelector('.wp').style.width = clamp((t - 365.4) / 8) * 1100 + 'px'; }); sfx(365.4, 'draw', .8); })();
kin(node('', 'left:140px;top:820px;width:1640px;font:800 42px Inter;color:' + Y + ';text-align:center'), 'hal yang sepele · kecil · remeh → bisa [menghapus dosa]', 365.4, { iv: .03, marks: [373.0] });

// --- 20 /tree : biasakan sejak kecil
scene(377.07, 398.27, { cut: 'glitch' });
sv(377.2, 398.27, BOX(760, 230, 400, 100, { s: Y }) + T(960, 293, 'mulai dari kecil', { f: .1, fs: 38, fw: 800, c: Y }) + LN([[960, 330], [960, 380]], { del: .3 }) + LN([[440, 380], [1480, 380]], { del: .4 }) +
  [['diri kita sendiri', 1.0], ['anak-anak kita', 3.0], ['sudah tua → ingat', 8.8]].map(([s, d], i) => { const x = 440 + i * 520; return LN([[x, 380], [x, 430]], { del: d }) + BOX(x - 220, 430, 440, 110, { del: d + .1 }) + T(x, 498, s, { f: d + .3, fs: 34, fw: 800 }); }).join('') +
  LN([[440, 540], [960, 680]], { s: Y, sw: 3, del: 11.8 }) + LN([[960, 540], [960, 680]], { s: Y, sw: 3, del: 11.9 }) + LN([[1480, 540], [960, 680]], { s: Y, sw: 3, del: 12.0 }) +
  BOX(610, 680, 700, 150, { s: Y, sw: 6, del: 12.2, fill: 'rgba(233,242,58,.12)' }) + T(960, 750, 'insyaAllah berkah', { f: 12.4, fs: 46, fw: 900, c: Y }) + T(960, 800, 'mengamalkan sunnah Rasulullah', { f: 12.6, fs: 28, fw: 700 }), 'left:0;top:0', 1920, 1080, .5);

// --- 21 /infographic : semua ada bacaannya
scene(398.27, 409.39, { cut: 'glitch' });
label('SEMUA ADA DIAJARKAN BACAANNYA', 398.4, 'left:140px;top:150px');
[['🍽️', 'makan', 398.6], ['🥤', 'minum', 399.6], ['🛏️', 'tidur', 400.6], ['🚪', 'masuk jamban', 401.7], ['👕', 'berpakaian', 403.0]].forEach(([e, s, t], i) => { const n = node(`<div style="width:300px;height:340px;border:4px solid ${i % 2 ? '#fff' : Y};border-radius:18px;text-align:center;padding-top:40px;background:rgba(255,255,255,.03)"><div style="font-size:110px">${e}</div><div style="font:800 40px Inter;margin-top:20px">${s}</div></div>`, `left:${130 + i * 340}px;top:340px`, 'dimmable'); show(n, t, 'drop', 409.39); sfx(t, 'paper', .6); });

// --- 22 /ladder : tingkatan lafaz hamdalah
scene(409.39, 433.75, { cut: 'glitch' });
label('SEMAKIN BAIK LAGI…', 409.5, 'left:140px;top:120px');
[['الْحَمْدُ لِلَّهِ', 409.6], ['الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', 412.4], ['الْحَمْدُ لِلَّهِ عَلَى كُلِّ حَالٍ', 416.6], ['الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ عَلَى كُلِّ حَالٍ', 420.5], ['الْحَمْدُ لِلَّهِ حَمْدًا طَيِّبًا كَثِيرًا مُبَارَكًا فِيهِ مُبَارَكًا عَلَيْهِ كَمَا يُحِبُّ رَبُّنَا وَيَرْضَى', 425.3]].forEach(([a, t], i) => {
  const n = node(`<div style="width:${980 + i * 170}px;height:110px;border:${i === 4 ? 6 : 3}px solid ${i === 4 ? Y : '#fff'};border-radius:12px;display:flex;align-items:center;justify-content:space-between;padding:0 26px;background:${i === 4 ? 'rgba(233,242,58,.12)' : 'rgba(255,255,255,.04)'}"><span class="mono" style="font-size:28px;color:${Y}">${'▲'.repeat(i + 1)}</span><span class="ar" style="font-size:${i === 4 ? 38 : 50}px">${a}</span></div>`, `left:${140}px;top:${780 - i * 140}px`, 'dimmable'); show(n, t, 'up', 433.75); sfx(t, 'beep', .5 + i * .1); });

// --- 23 /syamilah : malaikat berebut
scene(433.75, 444.85, { cut: 'glitch' });
searchFind(433.75, 444.85, {
  q: 'حمدا كثيرا طيبا مباركا فيه بضعة وثلاثين ملكا', count: 4, pick: 0, shelfPick: 0, times: { type: .4, scan: 1.5, res: 2.4, click: 3.4, det: 3.8 },
  shelf: [['Shahih al-Bukhari', 'صحيح البخاري'], ['Sunan an-Nasa\'i', 'سنن النسائي'], ['Sunan Abi Dawud', 'سنن أبي داود'], ['Al-Muwaththa\'', 'الموطأ'], ['Fath al-Bari', 'فتح الباري']],
  results: [
    { title: 'Shahih al-Bukhari · 799 · kitab al-Adzan', tag: 'SHAHIH', ar: 'رَأَيْتُ بِضْعَةً وَثَلَاثِينَ مَلَكًا يَبْتَدِرُونَهَا' },
    { title: 'Sunan an-Nasa\'i · 1062', tag: 'RIWAYAT', ar: 'أَيُّهُمْ يَكْتُبُهَا أَوَّلُ' },
    { title: 'Sunan Abi Dawud · 770', tag: 'RIWAYAT', ar: 'حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ' },
    { title: 'Fath al-Bari · Ibnu Hajar', tag: 'SYARAH', ar: 'فَضْلُ هَذَا الذِّكْرِ' }],
  det: { title: 'Shahih al-Bukhari', ar: 'صَحِيحُ الْبُخَارِيِّ', rows: [['NOMOR', '799 · kitab al-Adzan'], ['PERAWI', "Rifa'ah bin Rafi' az-Zuraqi"], ['PERISTIWA', 'diucapkan saat bangkit dari ruku\''], ['MALAIKAT', 'lebih dari 30 berebut menulisnya'], ['DERAJAT', 'shahih']], quote: 'رَأَيْتُ بِضْعَةً وَثَلَاثِينَ مَلَكًا يَبْتَدِرُونَهَا أَيُّهُمْ يَكْتُبُهَا أَوَّلُ' }
});

// --- 24 /syamilah + /exploded-view : 8 huruf & 8 pintu surga
scene(444.85, 452.5, { cut: 'glitch' });
searchFind(444.85, 452.5, {
  q: 'الحمد لله ثمانية أحرف وأبواب الجنة ثمانية', count: 4, pick: 0, shelfPick: 0, times: { type: .4, scan: 1.3, res: 2.0, click: 2.8, det: 3.1 },
  shelf: [['Tafsir al-Fatihah · Ibnu Rajab', 'ابن رجب'], ['Mafatih al-Ghaib · ar-Razi', 'تفسير الرازي'], ['Al-Lubab fi \'Ulum al-Kitab', 'اللباب'], ['Tafsir al-Qurthubi', 'القرطبي'], ['Ruh al-Ma\'ani', 'روح المعاني']],
  results: [
    { title: 'Tafsir Surah al-Fatihah · Ibnu Rajab al-Hanbali · hlm. 66', tag: 'COCOK', ar: 'الْحَمْدُ لِلَّهِ ثَمَانِيَةُ أَحْرُفٍ وَأَبْوَابُ الْجَنَّةِ ثَمَانِيَةٌ' },
    { title: 'Mafatih al-Ghaib (Tafsir ar-Razi) · j. 1', tag: 'DINUKIL', ar: 'اسْتَحَقَّ ثَمَانِيَةَ أَبْوَابِ الْجَنَّةِ' },
    { title: "Al-Lubab fi 'Ulum al-Kitab · Ibnu 'Adil", tag: 'DINUKIL', ar: 'فَمَنْ قَالَهَا عَنْ صَفَاءِ قَلْبِهِ' },
    { title: 'Ruh al-Ma\'ani · al-Alusi', tag: 'TERKAIT', ar: 'فَضْلُ الْحَمْدِ' }],
  det: { title: 'Tafsir Surah al-Fatihah', ar: 'تَفْسِيرُ سُورَةِ الْفَاتِحَةِ', rows: [['PENULIS', 'Ibnu Rajab al-Hanbali (w. 795 H)'], ['LETAK', 'halaman 66'], ['STATUS', 'perkataan ulama (bukan hadis)'], ['ISI', '8 huruf alhamdulillah · 8 pintu surga'], ['DIPERIKSA', 'Maktabah Syamilah']], quote: 'فَمَنْ قَالَهَا عَنْ صَفَاءِ قَلْبِهِ اسْتَحَقَّ ثَمَانِيَةَ أَبْوَابِ الْجَنَّةِ' }
});
scene(452.5, 470.55, { cut: 'glitch' });
arw(node('الْحَمْدُ لِلَّهِ ثَمَانِيَةُ أَحْرُفٍ وَأَبْوَابُ الْجَنَّةِ ثَمَانِيَةٌ', 'left:0;right:0;top:110px;text-align:center;font-size:54px;color:' + Y), 452.6, 2.4);
(() => { const L = ['ا', 'ل', 'ح', 'م', 'د', 'ل', 'ل', 'ه'];
  L.forEach((h, i) => { const x = 1660 - i * 200; const a = node(`<div style="width:170px;height:170px;border:4px solid ${Y};border-radius:14px;text-align:center"><div class="ar" style="font-size:90px;line-height:1.6">${h}</div></div>`, `left:${x}px;top:300px`); show(a, 457.1 + i * .25, 'scale', 470.55); sfx(457.1 + i * .25, 'tick', .7);
    const d = node(`<div style="width:170px;height:240px;border:4px solid #2fae5b;border-radius:85px 85px 8px 8px;display:flex;align-items:flex-end;justify-content:center;padding-bottom:16px;background:rgba(47,174,91,.12)"><span class="mono" style="font-size:26px;color:#7fe0a0">${i + 1}</span></div>`, `left:${x}px;top:560px`); show(d, 459.6 + i * .25, 'up', 470.55); }); })();
kin(node('', 'left:140px;top:860px;width:1640px;font:800 40px Inter;color:#fff;text-align:center'), '8 huruf · 8 pintu surga · dengan hati bersih → [berhak masuk]', 461.4, { iv: .025, marks: [467.0] });

// --- 25 /cycle : merenungi nikmat setelah makan
scene(470.55, 513.2, { cut: 'glitch' });
label('CONTOH: SELESAI MAKAN, DUDUK & MERENUNG', 470.6, 'left:140px;top:120px');
(() => { const cx = 960, cy = 560, R = 300, S = [['bisa makan', 482.3], ['tangan menjamah', 484.6], ['mengunyah', 489.0], ['menelan', 492.5], ['masuk ke perut', 494.0]];
  let g = `<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="#fff" stroke-width="4" stroke-dasharray="14 12" data-d="1885" data-dur="2"/>` + T(cx, cy + 10, H0, { f: 25.0, ff: 'Amiri', fs: 90, fw: 400, c: Y }) + T(cx, cy + 70, 'bersyukur', { f: 25.4, fs: 32, fw: 800 });
  S.forEach(([s, t], i) => { const a = -Math.PI / 2 + i * 2 * Math.PI / 5, x = cx + Math.cos(a) * R, y = cy + Math.sin(a) * R, d = t - 470.7; g += `<circle cx="${x}" cy="${y}" r="20" fill="${Y}" data-f="${d}"/>` + T(x + (Math.cos(a) > .3 ? 34 : Math.cos(a) < -.3 ? -34 : 0), y + (Math.sin(a) < -.9 ? -36 : 10), s, { f: d + .1, fs: 36, fw: 800, a: Math.cos(a) > .3 ? 'start' : Math.cos(a) < -.3 ? 'end' : 'middle' }); });
  sv(470.7, 513.2, g, 'left:0;top:0', 1920, 1080, .8); })();
kin(node('', 'left:140px;top:960px;width:1640px;font:800 38px Inter;color:#7fe0a0;text-align:center'), 'dengan hati bersih → berhak masuk [pintu-pintu surga]', 500.8, { iv: .025, marks: [508.0] });

// --- 26 /diagram : dua makna alhamdulillah
scene(513.2, 539.03, { cut: 'glitch' });
arw(node(H0, 'left:0;right:0;top:120px;text-align:center;font-size:100px;color:#fff'), 513.3, 1.0);
kin(node('', 'left:140px;top:300px;width:1640px;font:800 40px Inter;color:#fff;text-align:center'), 'segala puji bagi Allah → memberikan [dua makna]', 513.6, { iv: .025, marks: [517.6] });
sv(519.0, 539.03, DEFS + LN([[960, 380], [560, 480]], { arrow: 1, s: Y, sw: 4 }) + LN([[960, 380], [1360, 480]], { arrow: 1, s: Y, sw: 4, del: 9.7 }) +
  BOX(200, 490, 720, 220, { s: Y, sw: 5, del: .3 }) + T(560, 560, '01', { f: .5, fs: 40, fw: 900, c: Y, ff: 'DejaVu Sans Mono' }) + T(560, 630, 'menetapkan adanya Allah', { f: .7, fs: 42, fw: 800 }) +
  BOX(1000, 490, 720, 220, { s: Y, sw: 5, del: 9.9 }) + T(1360, 560, '02', { f: 10.1, fs: 40, fw: 900, c: Y, ff: 'DejaVu Sans Mono' }) + T(1360, 630, 'pujian hanya milik Allah', { f: 10.3, fs: 42, fw: 800 }), 'left:0;top:0', 1920, 1080, .5);
kin(node('', 'left:140px;top:820px;width:1640px;font:800 40px Inter;color:#ff8a5c;text-align:center'), 'jangan memuji-muji diri kita · yang berhak dipuji hanya [Allah]', 534.2, { iv: .022, marks: [537.6] });

// --- 27 /blueprint : Rabbil 'alamin dalil adanya Allah
scene(539.03, 567.35, { cut: 'glitch' });
const bp7 = node('', 'left:0;top:0;width:1920px;height:1080px', 'bp'); show(bp7, 539.03, 'fade', 567.35, .3);
label('BLUEPRINT · DALIL ADANYA ALLAH', 539.2, 'left:120px;top:140px;color:#cfe0ff');
arw(node('[رَبِّ الْعَالَمِينَ]', 'left:0;right:0;top:200px;text-align:center;font-size:110px;color:#fff'), 543.4, 1.2, { marks: [545.0] });
sv(545.0, 567.35, DEFS + BOX(200, 470, 700, 220, { s: '#fff' }) + T(550, 550, 'رَبّ', { f: .3, ff: 'Amiri', fs: 80, fw: 400, c: Y }) + T(550, 630, 'pemelihara · pengelola', { f: 5.2, fs: 38, fw: 800 }) +
  BOX(1020, 470, 700, 220, { s: '#fff', del: 6.0 }) + T(1370, 550, 'الْعَالَمِينَ', { f: 7.2, ff: 'Amiri', fs: 80, fw: 400, c: Y }) + T(1370, 630, 'alam semesta', { f: 7.4, fs: 38, fw: 800 }) +
  T(960, 820, 'adanya alam → maka adanya Allah', { f: 1.5, fs: 46, fw: 900, c: Y }) + T(960, 880, 'tidak sekejap pun terlepas dari pemeliharaan-Nya', { f: 14.0, fs: 32, fw: 700, c: '#cfe0ff' }), 'left:0;top:0', 1920, 1080, .6);

// --- 28 /flowchart : batu & pohon
scene(567.35, 580.23, { cut: 'glitch' });
label('ANDAIKATA SEKEJAP TERLEPAS DARI PEMELIHARAAN ALLAH…', 567.4, 'left:140px;top:150px');
sv(567.5, 580.23, DEFS + `<path d="M260 470 Q300 380 400 400 Q500 380 520 470 Q540 560 400 570 Q260 570 260 470Z" fill="none" stroke="#fff" stroke-width="6" data-d="800"/>` + T(390, 640, 'batu', { f: .4, fs: 40, fw: 800 }) +
  LN([[560, 480], [820, 480]], { arrow: 1, s: '#ff8a5c', sw: 5, del: 2.0 }) + T(980, 495, 'pecah', { f: 2.6, fs: 54, fw: 900, c: '#ff8a5c' }) +
  `<path d="M400 900 V760 M400 800 Q340 760 330 700 Q400 690 400 760 M400 780 Q460 730 480 680 Q410 680 400 760" fill="none" stroke="#7fe0a0" stroke-width="6" data-d="700" data-del="6.3"/>` + T(400, 950, 'pohon', { f: 6.6, fs: 40, fw: 800 }) +
  LN([[560, 820], [820, 820]], { arrow: 1, s: '#ff8a5c', sw: 5, del: 9.0 }) + T(980, 835, 'mati', { f: 9.6, fs: 54, fw: 900, c: '#ff8a5c' }), 'left:0;top:0', 1920, 1080, .7);
sv(574.0, 580.23, `<path d="M1300 560 L1500 640 V800 Q1500 920 1300 980 Q1100 920 1100 800 V640 Z" fill="rgba(233,242,58,.12)" stroke="${Y}" stroke-width="6" data-d="1100"/>` + T(1300, 770, 'رَبُّ الْعَالَمِينَ', { f: .6, ff: 'Amiri', fs: 52, fw: 400, c: Y }) + T(1300, 830, 'memelihara semuanya', { f: .9, fs: 28, fw: 800 }), 'left:0;top:0', 1920, 1080, .8);

// --- 29 penutup
scene(580.23, TOTAL, { cut: 'hard' });
mePol('left:200px;top:200px', 580.3, TOTAL, -4, 420);
seg('adanya alam semesta =<br>[dalil adanya Allah]', 580.4, 'left:760px;top:220px;width:1100px', { size: 62, iv: .025, marks: [585.0] });
sub2('left:760px;top:600px', 583.0, TOTAL);



// tur kamera: kotak cari → rak kitab → daftar hasil → hasil terpilih → rincian → kutipan
function camTour(t0, t1, T) { const ty = t0 + T.type, sc = t0 + T.scan, rs = t0 + T.res, ck = t0 + T.click, dt = t0 + T.det, q = dt + (t1 - dt) * .62;
  CAMS.push({ k: [[t0, 960, 540, 1.0], [Math.max(t0 + .05, ty - .1), 960, 540, 1.0], [ty + .35, 1300, 205, 1.75], [sc + .25, 380, 470, 1.65], [rs + .3, 890, 430, 1.5], [ck + .1, 890, 340, 1.85], [dt + .45, 1475, 470, 1.65], [q, 1475, 500, 1.65], [q + .5, 1475, 720, 1.7], [t1 - .45, 1475, 720, 1.7], [t1, 960, 540, 1.0]] }); }
camTour(59.4, 68.52, { type: .4, scan: 1.3, res: 2.0, click: 2.8, det: 3.1 });
camTour(100.74, 109.2, { type: .4, scan: 1.3, res: 2.0, click: 2.8, det: 3.1 });
camTour(211.88, 219.5, { type: .4, scan: 1.3, res: 2.0, click: 2.8, det: 3.1 });
camTour(309.55, 317.2, { type: .4, scan: 1.3, res: 2.0, click: 2.8, det: 3.1 });
camTour(433.75, 444.85, { type: .4, scan: 1.5, res: 2.4, click: 3.4, det: 3.8 });
camTour(444.85, 452.5, { type: .4, scan: 1.3, res: 2.0, click: 2.8, det: 3.1 });
// ================================================================== JADWAL KODE VISUAL
[[0, 5.4, '/kinetic-type'], [5.4, 22.44, '/spotlight'], [22.44, 31.9, '/callout'], [31.9, 46.52, '/checklist'], [46.52, 59.4, '/roadmap'], [59.4, 68.52, '/search'], [68.52, 74.34, '/bookend'], [74.34, 100.74, '/split-screen'],
 [100.74, 109.2, '/search'], [109.2, 117.68, '/dossier'], [117.68, 153.34, '/timeline'], [153.34, 169.08, '/iceberg'], [169.08, 195.58, '/decision-matrix'], [195.58, 211.88, '/layers'], [211.88, 219.5, '/search'], [219.5, 241.04, '/citation'],
 [241.04, 277.82, '/versus'], [277.82, 300.97, '/handwritten'], [300.97, 309.55, '/sketchnotes'], [309.55, 317.2, '/search'], [317.2, 341.85, '/badge'], [341.85, 358.03, '/citation'], [358.03, 377.07, '/erase'], [377.07, 398.27, '/tree'],
 [398.27, 409.39, '/infographic'], [409.39, 433.75, '/ladder'], [433.75, 452.5, '/search'], [452.5, 470.55, '/exploded-view'], [470.55, 513.2, '/cycle'], [513.2, 539.03, '/diagram'], [539.03, 567.35, '/blueprint'], [567.35, 580.23, '/flowchart'], [580.23, TOTAL, '/teaser']]
 .reduce((acc, [a, b, c]) => { if (!acc.m[c]) acc.m[c] = String(++acc.n).padStart(2, '0'); codeTag(a, b, acc.m[c], c); return acc; }, { n: 0, m: {} });
