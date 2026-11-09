// ================================================================== ADEGAN EPISODE 05 · Hukum & Lafaz Bismillah
const BSM = 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ';
function meTag(t0, t1, topik) { const n = node(`<div style="width:430px;background:#141414;border:2px solid ${Y};padding:18px 22px">
  <div class="mono" style="font-size:16px;color:${Y}">● PENYAMPAI KAJIAN</div><div style="font:800 34px Inter;margin-top:6px">@alurziyadahku</div>
  <div class="mono" style="font-size:15px;color:#eee;margin-top:8px">TOPIK: <span class="ar" style="font-size:24px;color:#fff">${topik}</span></div></div>`, 'left:1270px;top:720px'); show(n, t0, 'left', t1); sfx(t0, 'beep', .5); }
function doaCard(t0, t1, lab, ar, tr, o = {}) { // kartu doa + terjemah + chip sumber
  label(lab, t0 + .05, 'left:160px;top:140px', t1);
  paper(t0, 'left:160px;top:190px;width:1600px;height:' + (o.h || 620) + 'px', '', t1);
  arw(node(ar, `left:220px;width:1480px;top:240px;text-align:center;font-size:${o.fs || 70}px;line-height:1.75;color:#151515`), o.a0 || t0 + .1, o.ad || 2.4, { marks: o.am || [], t1 });
  if (tr) kin(node('', `left:260px;top:${o.tt || 560}px;width:1400px;font:700 ${o.tfs || 40}px Inter;color:#222;text-align:center`), tr, o.tr0, { iv: .028, marks: o.tm || [], t1 });
  if (o.chip) chip(o.chip, o.c0 || t0 + 1.2, `left:160px;top:${(o.h || 620) + 215}px`, t1, Y);
}

// --- 0 pembuka + rangkaian
scene(0, 13.5, { cut: 'none' });
arw(node('الْحَمْدُ لِلَّهِ', 'left:140px;top:150px;font-size:76px;color:#fff;text-align:left;width:700px'), .2, .9);
label('FILE 05 · LANJUTAN KAJIAN', 1.2, 'left:140px;top:300px');
seg('Hukum & Lafaz<br>[Bismillah]', 1.4, 'left:140px;top:340px;width:1000px', { size: 104, iv: .045, marks: [3.0] });
mePol('left:1300px;top:150px', .5, 13.5, 4, 400);
meTag(2.2, 13.5, 'أَحْكَامُ الْبَسْمَلَةِ');
steps(["Al-Qur'an", 'Al-Fatihah', 'بِسْمِ اللَّهِ'], 6.4, 2.8, 'left:140px;top:640px', 13.5);

// --- 1 tidak semua hal baik dimulai dengan basmalah lengkap
scene(13.5, 26.5, { cut: 'glitch' });
seg('menurut para ulama,<br>[tidak semua] hal baik dimulai dengan', 13.6, 'left:140px;top:180px;width:1640px', { size: 72, iv: .028, marks: [15.6] });
sv(16.4, 26.5, `<circle cx="760" cy="640" r="250" fill="rgba(255,255,255,.06)" stroke="#fff" stroke-width="5" data-d="1571"/><circle cx="1160" cy="640" r="250" fill="rgba(233,242,58,.10)" stroke="${Y}" stroke-width="5" data-d="1571" data-del=".6"/>` +
  T(620, 650, 'hal-hal baik', { f: .4, fs: 40, fw: 800 }) + T(1300, 640, 'بِسْمِ اللَّهِ', { f: 1.0, ff: 'Amiri', fs: 46, fw: 400, c: Y }) + T(1300, 690, 'الرَّحْمَٰنِ الرَّحِيمِ', { f: 1.2, ff: 'Amiri', fs: 40, fw: 400, c: Y }) + T(960, 650, 'tidak semua', { f: 2.0, fs: 30, fw: 800, c: '#ff8a5c' }), 'left:0;top:0', 1920, 1080, .8);
kin(node('', 'left:140px;top:950px;width:1640px;font:700 40px Inter;color:#fff;text-align:center'), 'ada hal baik yang tidak perlu dimulai dengan ucapan [lengkap] itu', 20.0, { iv: .028, marks: [23.6] });

// --- 2 4 hukum (bahkan 5)
scene(26.5, 35.2, { cut: 'hard' });
label('OLEH ULAMA FIKIH DIBAGI MENJADI', 26.6, 'left:140px;top:200px');
counter(26.8, 35.2, 4, 'left:140px;top:260px', 'HUKUM MEMBACA BISMILLAH', Y, 1.0);
kin(node('', 'left:520px;top:340px;width:1200px;font:800 60px Inter;color:#fff'), 'bahkan ada yang mengatakan sampai [lima]', 29.8, { iv: .035, marks: [32.4] });
[['WAJIB', '#bfe8c8', -3, 27.6], ['SUNAH', '#f7e078', 2, 28.1], ['MAKRUH', '#f5c6c0', -2, 28.6], ['HARAM', '#f2a39c', 3, 29.1], ['+1 ?', 'transparent', -2, 32.6]].forEach((x, i) => { const n = node(`<div style="width:300px;height:180px;background:${x[1]};${i === 4 ? `border:4px dashed ${Y};color:${Y}` : 'color:#222'};box-shadow:0 14px 30px rgba(0,0,0,.5);transform:rotate(${x[2]}deg);display:flex;align-items:center;justify-content:center;${KAL};font-size:56px;font-weight:700">${x[0]}</div>`, `left:${140 + i * 340}px;top:600px`); show(n, x[3], 'drop', 35.2); sfx(x[3], 'paper', .6); });

// --- 3 /decision-matrix : wajib · sunah · makruh · haram
scene(35.2, 106.4, { cut: 'glitch' });
(() => {
  const H = [['WAJIB', '#2fae5b', 35.3, [[36.6, 'salat'], [38.8, 'membaca Al-Fatihah']]],
    ['SUNAH', Y, 42.7, [[46.0, 'berwudu · mandi'], [49.4, 'makan · minum']]],
    ['MAKRUH', '#ff8a5c', 53.4, [[59.2, 'contoh ulama fikih:'], [61.4, 'melihat aurat sendiri'], [70.0, 'bukan perkara mulia']]],
    ['HARAM', '#d7322b', 76.3, [[83.0, 'minum arak · berzina'], [89.2, 'mencuri · berjudi']]]];
  H.forEach(([h, c, t, ex], i) => {
    const x = 140 + i * 420;
    const n = node(`<div style="width:390px;height:620px;border:4px solid ${c};border-radius:16px;background:rgba(255,255,255,.03);padding:24px"><div class="mono" style="font-size:22px;color:${c}">HUKUM ${String(i + 1).padStart(2, '0')}</div><div style="font:900 60px Inter;color:${c};margin-top:6px">${h}</div><div style="height:3px;background:${c};margin:16px 0 20px"></div></div>`, `left:${x}px;top:200px`, 'dimmable');
    show(n, t, 'up', 97.8); sfx(t, 'stamp', .7);
    ex.forEach(([te, s], k) => { const e = node(`<div style="width:350px;font:800 34px Inter;color:#fff;line-height:1.2">${s}</div>`, `left:${x + 24}px;top:${360 + k * 110}px`, 'dimmable'); show(e, te, 'left', 97.8); sfx(te, 'click', .5); });
  });
  const spec = node(`<div style="width:1640px"><div style="height:22px;border-radius:11px;background:linear-gradient(90deg,#2fae5b,${Y},#ff8a5c,#d7322b)"></div><div style="display:flex;justify-content:space-between;font:800 26px Inter;margin-top:10px"><span style="color:#7fe0a0">← dianjurkan</span><span style="color:#ff8a80">dilarang →</span></div></div>`, 'left:140px;top:860px'); show(spec, 90.0, 'left', 97.8); sfx(90.0, 'draw', .6);
  sv(97.8, 106.4, `<path d="M960 260 V700 M760 760 H1160" stroke="#fff" stroke-width="6" data-d="840"/><g data-f=".3"><path d="M620 300 L1300 400" stroke="#fff" stroke-width="6"/><path d="M620 300 L540 440 H700 Z" fill="none" stroke="${Y}" stroke-width="4"/><path d="M1300 400 L1220 540 H1380 Z" fill="rgba(215,50,43,.25)" stroke="#d7322b" stroke-width="5"/></g>` +
    T(620, 490, 'bismillah', { f: .6, fs: 34, fw: 800, c: Y }) + T(1300, 590, 'perbuatan dosa', { f: .8, fs: 34, fw: 800, c: '#ff8a80' }) + T(960, 220, 'DOSA BERTAMBAH', { f: 2.0, fs: 44, fw: 900, c: '#d7322b', ff: 'Inter' }), 'left:0;top:0', 1920, 1080, .6);
  kin(node('', 'left:140px;top:880px;width:1640px;font:800 42px Inter;color:#ff8a5c;text-align:center'), 'tidak pantas diawali bismillah · [bukan mengurangi dosa, malah menambah dosa]', 97.9, { iv: .025, marks: [101.6] });
})();
punch(76.4, 78.2, 1520, 420, 1.6);

// --- 4 /layers : bismillah tetap, ar-rahman ar-rahim menyesuaikan
scene(106.4, 119.9, { cut: 'glitch' });
seg('dalam keadaan tertentu,<br>lafaznya [menyesuaikan]', 106.5, 'left:140px;top:160px;width:1640px', { size: 72, iv: .03, marks: [109.0] });
(() => {
  const a = node(`<div style="width:760px;height:250px;border:6px solid ${Y};border-radius:14px;background:rgba(233,242,58,.12);text-align:center;padding-top:14px"><div class="ar" style="font-size:96px">بِسْمِ اللَّهِ</div><div class="mono" style="font-size:24px;color:${Y}">TETAP</div></div>`, 'left:1020px;top:440px'); show(a, 114.0, 'left', 119.9); sfx(114.0, 'stamp', .7);
  const b = node(`<div style="width:760px;height:250px;border:4px dashed #ff8a5c;border-radius:14px;text-align:center;padding-top:14px"><div class="ar" style="font-size:80px;text-decoration:line-through;text-decoration-color:#ff8a5c">الرَّحْمَٰنِ الرَّحِيمِ</div><div class="mono" style="font-size:24px;color:#ff8a5c">BISA DIUBAH → DOA SESUAI KEADAAN</div></div>`, 'left:140px;top:440px'); show(b, 110.2, 'left', 119.9); sfx(110.2, 'click', .7);
})();

// --- 5 /roadmap : masuk jamban
scene(119.9, 155.8, { cut: 'glitch' });
doaCard(126.3, 155.8, 'KETIKA HENDAK MASUK JAMBAN', 'بِسْمِ اللَّهِ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ [الْخُبُثِ] وَ[الْخَبَائِثِ]', 'dengan nama Allah, aku berlindung kepada Allah dari [setan laki-laki] dan [setan perempuan]', { a0: 126.5, ad: 4.0, am: [141.6, 143.6], tr0: 141.2, tm: [143.4, 145.2], chip: 'BUKAN BISMILLAHIRRAHMANIRRAHIM · YANG DISUNAHKAN', c0: 131.8, fs: 66 });
(() => { const bpb = node('', 'left:0;top:0;width:1920px;height:1080px', 'bp'); show(bpb, 119.9, 'fade', 126.3, .3);
  label('BLUEPRINT · LAFAZ MENYESUAIKAN KEADAAN', 120.0, 'left:140px;top:150px;color:#cfe0ff', 126.3);
  const B = ['masuk jamban', 'suami istri', 'naik kendaraan', 'hendak tidur', 'memakai pakaian'];
  sv(120.0, 126.3, DEFS + `<rect x="760" y="230" width="400" height="120" rx="14" fill="rgba(233,242,58,.14)" stroke="${Y}" stroke-width="5" data-d="1040"/>` + T(960, 310, 'بِسْمِ اللَّهِ', { f: .2, ff: 'Amiri', fs: 70, fw: 400, c: Y }) +
    B.map((b, i) => { const x = 230 + i * 365; return LN([[960, 350], [x, 520]], { s: i ? '#fff' : Y, sw: i ? 3 : 5, del: .4 + i * .15 }) + BOX(x - 165, 520, 330, 110, { s: i ? '#fff' : Y, sw: i ? 3 : 6, del: .6 + i * .15 }) + T(x, 588, b, { f: .8 + i * .15, fs: 30, fw: 800, c: i ? '#fff' : Y }); }).join('') +
    T(960, 760, '+ doa sesuai keadaan', { f: 1.8, fs: 34, fw: 800, c: '#cfe0ff' }), 'left:0;top:0', 1920, 1080, .5);
  kin(node('', 'left:140px;top:860px;width:1640px;font:800 56px Inter;color:#fff;text-align:center'), 'Apa bacanya?', 125.3, { iv: .05, t1: 126.3 }); })();
steps(['bismillah', 'doa', 'masuk jamban'], 147.0, 2.0, 'left:420px;top:880px', 155.8);

// --- 6 /iceberg : hujah Sayyidina 'Ali
scene(155.8, 197.7, { cut: 'glitch', light: 1 });
searchFind(155.8, 162.0, {
  q: 'ستر ما بين أعين الجن وعورات بني آدم', count: 3, pick: 0, shelfPick: 0, times: { type: .4, scan: 1.6, res: 2.4, click: 3.4, det: 3.7 },
  shelf: [['Sunan at-Tirmidzi', 'سنن الترمذي'], ['Sunan Ibni Majah', 'سنن ابن ماجه'], ['Shahih al-Bukhari', 'صحيح البخاري'], ['Al-Adzkar · an-Nawawi', 'الأذكار']],
  results: [
    { title: "Sunan at-Tirmidzi · 606 · dari 'Ali", tag: 'RIWAYAT', ar: 'سِتْرُ مَا بَيْنَ أَعْيُنِ الْجِنِّ وَعَوْرَاتِ بَنِي آدَمَ' },
    { title: 'Sunan Ibni Majah · 297', tag: 'RIWAYAT', ar: 'أَنْ يَقُولَ: بِسْمِ اللَّهِ' },
    { title: 'Shahih al-Bukhari · 142', tag: 'DOA', ar: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ' }],
  det: { title: "'Ali bin Abi Thalib", ar: 'عَلِيُّ بْنُ أَبِي طَالِبٍ', rows: [['GELAR', "radhiyallahu 'anhu · karramallahu wajhah"], ['TEMA', 'penghalang jin & aurat'], ['DINUKIL', 'at-Tirmidzi · Ibnu Majah']], quote: 'أَنْ يَقُولَ: بِسْمِ اللَّهِ' }
});
sv(162.1, 176.0, `<path d="M120 470 H1800" stroke="#4aa3ff" stroke-width="4" data-d="1680"/>` +
  `<rect x="760" y="300" width="400" height="170" rx="14" fill="rgba(233,242,58,.14)" stroke="${Y}" stroke-width="6" data-d="1140" data-del=".3"/>` + T(960, 405, 'بِسْمِ اللَّهِ', { f: .6, ff: 'Amiri', fs: 80, fw: 400, c: Y }) +
  T(960, 270, 'PENGHALANG', { f: .9, fs: 30, fw: 800, ff: 'DejaVu Sans Mono', c: Y }) +
  `<path d="M760 470 L560 680 L760 860 L1180 880 L1380 680 L1160 470" fill="rgba(74,163,255,.1)" stroke="#7fd6ff" stroke-width="4" data-d="1500" data-del="1.2"/>` +
  T(960, 640, 'jin · setan laki-laki & perempuan', { f: 1.6, fs: 34, fw: 800, c: '#7fd6ff' }) + T(960, 720, 'tidak dapat melihat aurat kita', { f: 2.2, fs: 32 }), 'left:0;top:0', 1920, 1080, .8);
kin(node('', 'left:140px;top:150px;width:1640px;font:800 40px Inter;color:#fff'), '"penghalang antara jin setan dan [aurat kita] adalah bismillah"', 162.4, { iv: .025, marks: [165.0], t1: 176.0 });
kin(node('', 'left:140px;top:150px;width:1640px;font:800 40px Inter;color:#ff8a5c'), 'tanpa bismillah & doa → setan [tertawa] melihat aurat', 176.0, { iv: .025, marks: [180.0], t1: 192.6 });
(() => { const P = [['DENGAN BISMILLAH & DOA', 'aurat tertutup dari pandangan jin', '#2fae5b', '✓'], ['TANPA BISMILLAH & DOA', 'setan laki-laki & perempuan tertawa', '#d7322b', '✕']];
  P.forEach((p, i) => { const n = node(`<div style="width:800px;height:520px;border:5px solid ${p[2]};border-radius:18px;background:rgba(255,255,255,.03);text-align:center;padding-top:40px"><div style="font:900 140px Inter;color:${p[2]}">${p[3]}</div><div class="mono" style="font-size:26px;color:${p[2]};margin-top:10px">${p[0]}</div><div style="font:800 44px Inter;margin-top:24px;padding:0 30px">${p[1]}</div></div>`, `left:${140 + i * 840}px;top:260px`, 'dimmable'); show(n, 176.2 + i * 1.2, 'up', 192.6); sfx(176.2 + i * 1.2, 'stamp', .7); }); })();
const cb = node(`<div style="width:1500px;height:150px;border:4px solid ${Y};border-radius:18px;background:rgba(233,242,58,.1)"><div class="mono" style="font-size:22px;color:${Y};padding:14px 24px">💡 CATATAN</div></div>`, 'left:210px;top:900px'); show(cb, 192.6, 'scale', 197.7); sfx(192.6, 'beep', .6);
kin(node('', 'left:140px;top:970px;width:1640px;font:800 42px Inter;color:' + Y + ';text-align:center'), 'tidak hafal doanya? baca [bismillah saja] sudah cukup', 192.7, { iv: .028, marks: [195.4] });

// --- 7 /flowchart : suami istri · sunah kifayah
scene(197.7, 234.7, { cut: 'glitch' });
doaCard(197.7, 213.1, 'KETIKA SUAMI ISTRI HENDAK BERHUBUNGAN', 'بِسْمِ اللَّهِ، اللَّهُمَّ جَنِّبْنَا [الشَّيْطَانَ] وَجَنِّبِ الشَّيْطَانَ مَا رَزَقْتَنَا', 'sebagaimana diajarkan Nabi Muhammad shallallahu ‘alaihi wasallam', { a0: 205.5, ad: 4.4, am: [207.4], tr0: 198.4, tt: 600, chip: 'SHAHIH AL-BUKHARI · SHAHIH MUSLIM', c0: 206.0, fs: 70 });
seg('ini dinamakan [sunah kifayah]', 213.2, 'left:140px;top:160px;width:1640px', { size: 76, iv: .035, marks: [214.8] });
sv(215.2, 234.7, DEFS + BOX(140, 360, 520, 130, { s: Y }) + T(400, 440, 'suami membaca', { f: .2, fs: 40, fw: 800 }) +
  LN([[660, 425], [820, 425]], { arrow: 1, s: Y, sw: 5, del: .6 }) + BOX(840, 360, 520, 130, { s: '#fff', del: .8 }) + T(1100, 420, 'istri tidak membaca', { f: 1.0, fs: 36, fw: 800 }) + T(1100, 465, 'tidak apa-apa', { f: 1.2, fs: 28, c: '#7fe0a0' }) +
  BOX(840, 530, 520, 130, { s: '#fff', del: 4.0 }) + T(1100, 590, 'keduanya membaca', { f: 4.2, fs: 36, fw: 800 }) + T(1100, 635, 'tidak apa-apa', { f: 4.4, fs: 28, c: '#7fe0a0' }) + LN([[660, 455], [820, 595]], { arrow: 1, s: Y, sw: 5, del: 3.8 }), 'left:0;top:0', 1920, 1080, .5);
kin(node('', 'left:140px;top:760px;width:1640px;font:800 42px Inter;color:#fff'), 'bukan bismillahirrahmanirrahim · cukup [bismillah] + doa sesuai keadaan', 223.3, { iv: .025, marks: [228.0] });

// --- 8 /infographic : 3 faedah
scene(234.7, 320.9, { cut: 'glitch' });
label('APA GUNANYA MEMBACA BISMILLAH & DOA TADI?', 234.8, 'left:140px;top:150px');
(() => {
  const F = [['01', 'terhindar dari setan', 240.8], ['02', 'anak selamat dari murtad & kafir', 274.4], ['03', 'pahala sebanyak napas anak', 297.7]];
  F.forEach(([no, s, t], i) => { const n = node(`<div style="width:520px;height:250px;border:4px solid ${i === 2 ? Y : '#fff'};border-radius:16px;padding:24px;background:rgba(255,255,255,.03)"><div class="mono" style="font-size:44px;color:${Y}">${no}</div><div style="font:800 40px Inter;margin-top:10px;line-height:1.2">${s}</div></div>`, `left:${140 + i * 560}px;top:220px`, 'dimmable'); show(n, t, 'up', 320.9); sfx(t, 'stamp', .7); });
  const L = [[243.0, 'hadis Nabi, sebagaimana ditafsirkan para ulama'], [253.6, 'tanpa bismillah, setan [ikut serta] saat itu'], [265.7, 'anak yang lahir punya [saham dari setan]'], [270.4, 'jangan lupa kepada Allah · ucapkan bismillah & berdoa'], [281.0, 'إِنْ شَاءَ اللَّهُ anak [selamat seumur hidupnya]'], [300.2, 'setiap kali anak bernapas, sejak kecil sampai meninggal'], [312.6, 'orang tuanya pun [mendapat pahala] · karena bismillah']];
  L.forEach(([t, s], i) => { const e = L[i + 1] ? L[i + 1][0] : 320.9; kin(node('', 'left:140px;top:950px;width:1640px;font:800 44px Inter;color:#fff;text-align:center'), s, t, { iv: .025, t1: e, marks: s.includes('[') ? [t + 1.4] : [] }); });
})();

sv(253.6, 274.3, DEFS + BOX(140, 560, 440, 140, { s: Y }) + T(360, 645, 'bismillah + doa', { f: .2, fs: 38, fw: 800, c: Y }) + LN([[580, 630], [740, 630]], { arrow: 1, s: Y, sw: 5, del: .8 }) +
  BOX(760, 560, 440, 140, { s: '#fff', del: 1.0 }) + T(980, 645, 'setan terhalang', { f: 1.2, fs: 38, fw: 800 }) + LN([[1200, 630], [1360, 630]], { arrow: 1, s: Y, sw: 5, del: 12.0 }) +
  BOX(1380, 560, 400, 140, { s: '#2fae5b', sw: 6, del: 12.2 }) + T(1580, 645, 'anak terjaga', { f: 12.4, fs: 38, fw: 800, c: '#7fe0a0' }), 'left:0;top:0', 1920, 1080, .5);
sv(274.4, 297.6, `<path d="M960 520 L1120 580 V700 Q1120 820 960 880 Q800 820 800 700 V580 Z" fill="rgba(47,174,91,.15)" stroke="#2fae5b" stroke-width="6" data-d="1000"/>` + T(960, 735, '✓', { f: .8, fs: 120, fw: 900, c: '#7fe0a0' }) +
  T(560, 700, 'murtad', { f: 1.2, fs: 44, fw: 800, c: '#ff8a80', a: 'end' }) + T(1360, 700, 'kafir', { f: 1.4, fs: 44, fw: 800, c: '#ff8a80', a: 'start' }) + LN([[580, 690], [790, 690]], { s: '#ff8a80', sw: 4, dash: 1, del: 1.2 }) + LN([[1130, 690], [1340, 690]], { s: '#ff8a80', sw: 4, dash: 1, del: 1.4 }), 'left:0;top:0', 1920, 1080, .8);
sv(297.7, 320.9, LN([[180, 700], [1740, 700]], { s: '#fff', sw: 5 }) + [['lahir', 0], ['kecil', 2.6], ['dewasa', 5.0], ['wafat', 9.0]].map(([s2, d], i) => { const x = 220 + i * 500; return `<circle cx="${x}" cy="700" r="18" fill="${i === 3 ? '#fff' : Y}" data-f="${d}"/>` + T(x, 650, s2, { f: d + .1, fs: 36, fw: 800 }) + (i < 3 ? T(x + 250, 760, '+ pahala · setiap napas', { f: d + .8, fs: 24, c: Y }) : ''); }).join(''), 'left:0;top:0', 1920, 1080, 1.2);

// --- 9 /sketchnotes : naik kendaraan
scene(320.9, 343.3, { cut: 'glitch' });
label('KETIKA HENDAK NAIK KENDARAAN', 321.0, 'left:140px;top:150px');
arw(node('بِسْمِ اللَّهِ · الْحَمْدُ لِلَّهِ', 'left:0;right:0;top:210px;text-align:center;font-size:96px;color:' + Y), 325.1, 2.0);
sv(328.8, 343.3, `<g transform="translate(260 560)"><rect x="0" y="40" width="300" height="90" rx="20" fill="none" stroke="#fff" stroke-width="5" data-d="800"/><path d="M50 40 L90 0 H220 L260 40" fill="none" stroke="#fff" stroke-width="5" data-d="320" data-del=".3"/><circle cx="70" cy="140" r="30" fill="none" stroke="${Y}" stroke-width="5" data-d="190" data-del=".6"/><circle cx="230" cy="140" r="30" fill="none" stroke="${Y}" stroke-width="5" data-d="190" data-del=".7"/></g>` +
  `<path d="M620 720 q60 -40 120 0 t120 0 t120 0" fill="none" stroke="${Y}" stroke-width="4" stroke-dasharray="10 10" data-d="420" data-del="1.0"/>` + T(980, 690, 'setiap langkah → amal kebaikan', { f: 1.4, ff: 'Kalam', fs: 46, a: 'start' }), 'left:0;top:0', 1920, 1080, .7);
kin(node('', 'left:140px;top:900px;width:1640px;font:800 40px Inter;color:#fff;text-align:center'), 'lalu kaitkan dengan keadaan: بِسْمِ اللَّهِ تَوَكَّلْتُ · بِسْمِ اللَّهِ مَجْرَاهَا', 334.9, { iv: .02 });

// --- 10 /cycle : sebelum tidur
scene(343.3, 377.5, { cut: 'glitch' });
doaCard(343.3, 356.2, 'KETIKA HENDAK TIDUR', 'بِسْمِ اللَّهِ، بِاسْمِكَ اللَّهُمَّ [أَحْيَا] وَ[أَمُوتُ]', 'sebagaimana diajarkan Nabi Muhammad shallallahu ‘alaihi wasallam', { a0: 348.2, ad: 3.2, am: [350.4, 351.6], tr0: 344.0, tt: 560, chip: 'SHAHIH AL-BUKHARI · SHAHIH MUSLIM', c0: 349.0, fs: 80 });
(() => {
  const cx = 960, cy = 560, R = 270, S = [['tidur', 'bismillah & doa', 0], ['jika wafat', 'حُسْنُ الْخَاتِمَةِ', 1.0], ['akhir hayat', 'لَا إِلَهَ إِلَّا اللَّهُ', 7.8], ['karena', 'sudah terbiasa', 18.6]];
  let g = `<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="#fff" stroke-width="4" stroke-dasharray="14 12" data-d="1700" data-dur="2"/>`;
  S.forEach(([a, b, d], i) => { const an = -Math.PI / 2 + i * Math.PI / 2, x = cx + Math.cos(an) * R, y = cy + Math.sin(an) * R; g += `<circle cx="${x}" cy="${y}" r="22" fill="${Y}" data-f="${d}"/>` + T(x + (i === 1 ? 50 : i === 3 ? -50 : 0), y + (i === 0 ? -70 : i === 2 ? 80 : -10), a, { f: d + .1, fs: 38, fw: 800, a: i === 1 ? 'start' : i === 3 ? 'end' : 'middle' }) + T(x + (i === 1 ? 50 : i === 3 ? -50 : 0), y + (i === 0 ? -28 : i === 2 ? 128 : 40), b, { f: d + .3, fs: 38, ff: b.match(/[a-z]/) ? 'Inter' : 'Amiri', fw: 400, c: Y, a: i === 1 ? 'start' : i === 3 ? 'end' : 'middle' }); });
  sv(356.3, 377.5, g, 'left:0;top:0', 1920, 1080, .8);
  arw(node('إِنْ شَاءَ اللَّهُ · آمِينَ', 'left:760px;width:400px;top:520px;text-align:center;font-size:44px;color:#fff'), 362.6, .8);
})();

// --- 11 /handwritten : memakai pakaian
scene(377.5, 400.6, { cut: 'glitch' });
doaCard(377.5, 400.6, 'KETIKA HENDAK MEMAKAI PAKAIAN', 'بِسْمِ اللَّهِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ خَيْرِهِ وَخَيْرِ مَا هُوَ لَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّهِ وَشَرِّ مَا هُوَ لَهُ', null, { a0: 382.7, ad: 6.0, fs: 58, h: 560, chip: 'SUNAN ABI DAWUD · SUNAN AT-TIRMIDZI', c0: 384.0 });
(() => { const n = node(`<div style="width:900px;height:110px;background:#fbf6e6;background-image:repeating-linear-gradient(transparent 0 70px,#c9d6ee 70px 72px);border-left:4px solid #e6a0a0;padding:18px 30px;transform:rotate(-1.5deg);box-shadow:0 20px 50px rgba(0,0,0,.6)"><div class="hw" style="${KAL};font-size:46px;color:#1f3a8a;white-space:nowrap;overflow:hidden;width:0">pakaian kita mendapat berkah dari Allah ✓</div></div>`, 'left:510px;top:880px');
  sfx(395.6, 'draw', .6); item(395.4, 400.6, n, (lt, t, it) => { n.style.opacity = clamp(lt / .25) * clamp((it.t1 - t) / .25); n.querySelector('.hw').style.width = clamp((t - 395.6) / 1.8) * 840 + 'px'; }); })();

// --- 12 belajar & mengamalkan
scene(400.6, 413.8, { cut: 'hard' });
seg('berbagai hadis menyebutkan<br>keutamaan [bismillah]', 400.7, 'left:140px;top:240px;width:1640px', { size: 80, iv: .03, marks: [403.6] });
kin(node('', 'left:140px;top:560px;width:1640px;font:800 54px Inter;color:#fff'), 'إِنْ شَاءَ اللَّهُ kita sama-sama [belajar] & [mengamalkan]', 406.4, { iv: .03, marks: [410.4, 412.0] });
[['belajar', 410.4], ['mengamalkan', 412.0]].forEach(([s2, t], i) => { const n = node(`<div style="display:flex;align-items:center;gap:22px"><div style="width:64px;height:64px;border:5px solid ${Y};border-radius:10px;display:flex;align-items:center;justify-content:center;font:900 46px Inter;color:#111;background:${Y}">✓</div><div style="font:800 52px Inter">${s2}</div></div>`, `left:${140 + i * 520}px;top:740px`); show(n, t, 'scale', 413.8); sfx(t, 'click', .8); });

// --- 13 /tree : satu ayat dari tujuh
scene(413.8, 431.7, { cut: 'glitch' });
seg('bismillah = [satu ayat] dari tujuh ayat Al-Fatihah', 413.9, 'left:140px;top:160px;width:1640px', { size: 60, iv: .025, marks: [416.6] });
(() => { let g = BOX(760, 330, 400, 90, { s: Y }) + T(960, 388, 'AL-FATIHAH', { f: .1, fs: 38, fw: 800, c: Y }) + LN([[960, 420], [960, 460]], { del: .3 }) + LN([[240, 460], [1680, 460]], { del: .4 });
  for (let i = 0; i < 7; i++) { const x = 240 + i * 240, on = i === 0, d = .6 + i * .2; g += LN([[x, 460], [x, 500]], { del: d }) + `<circle cx="${x}" cy="570" r="62" fill="${on ? Y : 'rgba(255,255,255,.05)'}" stroke="${on ? Y : '#fff'}" stroke-width="4" data-d="390" data-del="${d}"/>` + T(x, 584, String(i + 1).padStart(2, '0'), { f: d + .2, fs: 40, fw: 800, c: on ? '#111' : '#fff', ff: 'DejaVu Sans Mono' }); }
  g += T(240, 680, 'بِسْمِ اللَّهِ', { f: 2.4, ff: 'Amiri', fs: 40, fw: 400, c: Y });
  sv(414.0, 422.4, g, 'left:0;top:0', 1920, 1080, .5); })();
(() => { const L = ['ب', 'س', 'م', 'ا', 'ل', 'ل', 'ه', 'ا', 'ل', 'ر', 'ح', 'م', 'ن'], miss = 4;
  L.forEach((h, i) => { const x = 1640 - i * 118; const n = node(`<div style="width:100px;height:120px;border:4px solid ${i === miss ? '#d7322b' : '#fff'};border-radius:10px;display:flex;align-items:center;justify-content:center"><span class="ar" style="font-size:70px;color:${i === miss ? '#ff8a80' : '#fff'}">${h}</span></div>`, `left:${x}px;top:400px`);
    item(422.5 + i * .08, 431.7, n, (lt, t, it) => { n.style.opacity = clamp(lt / .2) * clamp((it.t1 - t) / .25) * (i === miss ? 1 - .7 * clamp((t - 425.5) / .6) : 1); n.style.transform = i === miss ? `translateY(${-160 * eo((t - 425.5) / .6)}px) rotate(${-20 * eo((t - 425.5) / .6)}deg)` : ''; }); sfx(422.5 + i * .08, 'tick', .5); });
  label('AL-FATIHAH DIURAI · AYAT → HURUF', 422.6, 'left:140px;top:300px', 431.7); stamp('TIDAK SAH', 'left:780px;top:600px', 426.4, 431.7); })();
kin(node('', 'left:140px;top:820px;width:1640px;font:800 46px Inter;color:#ff8a5c;text-align:center'), 'satu huruf saja tertinggal → salat [berkurang atau tidak sah]', 422.5, { iv: .025, marks: [426.4] });

// --- 14 penutup · lanjut ayat kedua
scene(431.7, TOTAL, { cut: 'hard' });
mePol('left:200px;top:200px', 431.8, TOTAL, -4, 420);
label('DI LAIN KESEMPATAN · AYAT KEDUA', 431.9, 'left:760px;top:200px');
arw(node('الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', 'left:760px;top:250px;width:1100px;font-size:84px;color:' + Y + ';text-align:left'), 432.6, 1.4);
sub2('left:760px;top:600px', 433.6, TOTAL);

// ================================================================== JADWAL 25 KODE VISUAL (satu per waktu)
[[0, 13.5, '/kinetic-type'], [13.5, 26.5, '/venn'], [26.5, 35.2, '/canvas'], [35.2, 90.0, '/decision-matrix'], [90.0, 97.8, '/spectrum'], [97.8, 106.4, '/balance'], [106.4, 119.9, '/layers'], [119.9, 126.3, '/blueprint'], [126.3, 147.0, '/citation'],
 [147.0, 155.8, '/roadmap'], [162.0, 176.0, '/iceberg'], [176.0, 192.6, '/split-screen'], [192.6, 197.7, '/callout'], [197.7, 213.1, '/citation'], [213.1, 234.7, '/flowchart'], [234.7, 253.6, '/infographic'], [253.6, 274.3, '/diagram'], [274.3, 297.6, '/badge'],
 [297.6, 320.9, '/timeline'], [320.9, 343.3, '/sketchnotes'], [343.3, 356.2, '/citation'], [356.2, 377.5, '/cycle'], [377.5, 395.0, '/citation'], [395.0, 400.6, '/handwritten'], [400.6, 413.8, '/checklist'], [413.8, 422.4, '/tree'], [422.4, 431.7, '/exploded-view'], [431.7, TOTAL, '/teaser']]
 .reduce((acc, [a, b, c]) => { if (!acc.m[c]) acc.m[c] = String(++acc.n).padStart(2, '0'); codeTag(a, b, acc.m[c], c); return acc; }, { n: 0, m: {} });
