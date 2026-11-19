// ================================================================== ADEGAN EPISODE 20 · Waktu Salat, Hadirnya Hati & Khusyuk
const BSM = 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ';
function meTag(t0, t1, topik) { const n = node(`<div style="width:430px;background:#141414;border:2px solid ${Y};padding:18px 22px">
  <div class="mono" style="font-size:16px;color:${Y}">● PENYAMPAI KAJIAN</div><div style="font:800 34px Inter;margin-top:6px">@alurziyadahku</div>
  <div class="mono" style="font-size:15px;color:#eee;margin-top:8px">TOPIK: <span class="ar" style="font-size:24px;color:#fff">${topik}</span></div></div>`, 'left:1270px;top:720px'); show(n, t0, 'left', t1); sfx(t0, 'beep', .5); }
function doa(t0, t1, lab, ar, tr, o = {}) {
  label(lab, t0 + .05, 'left:160px;top:140px', t1);
  paper(t0, `left:160px;top:190px;width:1600px;height:${o.h || 620}px`, '', t1);
  arw(node(ar, `left:220px;width:1480px;top:${o.at || 240}px;text-align:center;font-size:${o.fs || 70}px;line-height:1.75;color:#151515`), o.a0 || t0 + .1, o.ad || 2.6, { marks: o.am || [], t1 });
  if (tr) kin(node('', `left:260px;top:${o.tt || 560}px;width:1400px;font:700 ${o.tfs || 38}px Inter;color:#222;text-align:center;line-height:1.3`), tr, o.tr0 || t0 + 2.6, { iv: .024, marks: o.tm || [], t1 });
  if (o.chip) chip(o.chip, o.c0 || t0 + 1.2, `left:160px;top:${(o.h || 620) + 215}px`, t1, Y);
}
function bgFill(t0, t1, css) { const n = node('', 'left:-160px;top:-120px;width:2240px;height:1320px;' + css); show(n, t0, 'fade', t1, .3); return n; }
const NIGHT = 'background:radial-gradient(1.5px 1.5px at 12% 18%,#fff,transparent),radial-gradient(1.5px 1.5px at 32% 8%,#fff,transparent),radial-gradient(2px 2px at 58% 22%,#fff,transparent),radial-gradient(1.5px 1.5px at 76% 12%,#fff,transparent),radial-gradient(1.5px 1.5px at 88% 30%,#fff,transparent),radial-gradient(1.5px 1.5px at 22% 40%,#fff,transparent),radial-gradient(1.5px 1.5px at 66% 46%,#fff,transparent),linear-gradient(#050b2a,#0c1c4f 60%,#1b2f6b)';
const line = (t0, t1, css, s, o = {}) => kin(node('', css + `;font:${o.w || 800} ${o.fs || 42}px Inter;color:${o.c || '#fff'};line-height:1.3`), s, t0, { iv: o.iv || .026, marks: o.m || [], t1 });
const crd = (html, css, t0, t1, kind = 'up', snd = 'click') => { const n = node(html, css, 'dimmable'); show(n, t0, kind, t1); sfx(t0, snd, .7); return n; };
const CR = '#ff8a5c', CG = '#7fe0a0', CB = '#7fd6ff';
const box = (w, col, inner, extra = '') => `<div style="width:${w}px;border:4px solid ${col};border-radius:16px;padding:18px 24px;background:rgba(255,255,255,.03);${extra}">${inner}</div>`;


// ================================================================== EP 16 · Jual Beli, Timbangan, Pendakwah & Penguasa
const vcard = (w, c, inner, bg = 'transparent') => `<div style="width:${w}px;border:4px solid ${c};border-radius:18px;padding:22px 26px;background:${bg}">${inner}</div>`;
const xcard = (e, s, t, t1, css, c = CR, mark = '✕') => crd(`<div style="width:500px;height:250px;border:4px solid ${c};border-radius:18px;padding:22px;background:rgba(255,138,92,.06)"><div style="display:flex;justify-content:space-between"><span style="font-size:70px">${e}</span><span style="font:900 60px Inter;color:${c}">${mark}</span></div><div style="font:900 32px Inter;margin-top:10px;line-height:1.2">${s}</div></div>`, css, t, t1, 'drop', 'stamp');
const tick = (s, t, t1, css, c = Y, m = '✓', fs = 50) => crd(`<div style="display:flex;align-items:center;gap:24px"><div style="width:78px;height:78px;flex:none;border-radius:12px;background:${c};display:flex;align-items:center;justify-content:center;font:900 50px Inter;color:#111">${m}</div><div style="font:900 ${fs}px Inter">${s}</div></div>`, css, t, t1, 'scale', 'tick');
const pill = (s, c, fg = '#111') => `<div style="font:900 40px Inter;color:${fg};background:${c};border-radius:12px;padding:10px 26px;display:inline-block">${s}</div>`;

// --- 01 /citation : An-Nisa 103 (pembuka langsung ayat)
scene(0, 15.6, { cut: 'none' });
label('FILE 20 · SURAH AN-NISA\' AYAT 103', .2, 'left:160px;top:130px', 15.6);
paper(.3, 'left:160px;top:190px;width:1600px;height:330px', '', 15.6);
arw(node('إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ [كِتَابًا مَوْقُوتًا]', 'left:220px;width:1480px;top:250px;text-align:center;font-size:84px;line-height:1.6;color:#151515'), 4.0, 5.0, { marks: [7.6] });
chip("QS. AN-NISA' : 103", 4.2, 'left:160px;top:550px', 15.6, Y);
line(9.4, 15.6, 'left:160px;top:650px;width:1200px', 'salat fardu sudah [ditentukan waktunya] bagi orang beriman', { fs: 40, m: [12.0] });
mePol('left:1440px;top:560px', .3, 15.6, 4, 300);

// --- 02 /spectrum : tidak sebelum · tidak sesudah
scene(15.6, 34.2, { cut: 'glitch' });
line(15.7, 34.2, 'left:140px;top:130px;width:1640px', 'tidak boleh dilaksanakan [sebelum] ataupun [sesudah] waktunya', { fs: 44, m: [20.5, 22.5] });
sv(15.8, 34.2, `<rect x="200" y="470" width="1520" height="40" rx="20" fill="rgba(255,138,92,.25)" data-f=".1"/><rect x="620" y="460" width="680" height="60" rx="30" fill="rgba(127,224,160,.75)" stroke="${CG}" stroke-width="4" data-f="1.0"/>` +
  T(400, 590, '✕ sebelum waktu', { f: 4.8, fs: 34, fw: 900, c: CR }) + T(960, 590, '✓ WAKTUNYA', { f: 1.2, fs: 40, fw: 900, c: CG }) + T(1520, 590, '✕ sesudah waktu', { f: 6.8, fs: 34, fw: 900, c: CR }) +
  T(960, 760, 'di dalamnya terkandung rahasia-rahasia', { f: 12.0, fs: 34, fw: 900, c: Y }), 'left:0;top:0', 1920, 1080, .5);

// --- 03 /citation : Al-Isra 78
scene(34.2, 49.3, { cut: 'glitch' });
paper(34.3, 'left:160px;top:180px;width:1600px;height:380px', '', 49.3);
arw(node('أَقِمِ الصَّلَاةَ [لِدُلُوكِ الشَّمْسِ إِلَىٰ غَسَقِ اللَّيْلِ] وَقُرْآنَ الْفَجْرِ', 'left:220px;width:1480px;top:240px;text-align:center;font-size:74px;line-height:1.7;color:#151515'), 36.0, 8.8, { marks: [40.0] });
chip("QS. AL-ISRA' : 78", 34.6, 'left:160px;top:590px', 49.3, Y);
line(45.0, 49.3, 'left:160px;top:690px;width:1600px', 'dirikanlah salat mulai [tergelincir matahari] sampai malam', { fs: 40, m: [46.5] });

// --- 04 /diagram : busur matahari 5 waktu
scene(49.3, 62.2, { cut: 'glitch' });
(() => { let g = `<defs><radialGradient id="sun20"><stop offset="0" stop-color="#fff6a8"/><stop offset="1" stop-color="${Y}"/></radialGradient></defs><path d="M200 800 H1720" stroke="#fff" stroke-width="4" data-d="1520"/><path d="M260 800 A700 560 0 0 1 1660 800" fill="none" stroke="rgba(233,242,58,.45)" stroke-width="4" stroke-dasharray="10 10" data-f=".1"/>`;
  [['ZUHUR', 960, 240, 2.3, CR], ['ASAR', 1390, 400, 2.8, CR], ['MAGHRIB', 1600, 700, 3.4, CR], ['ISYA\'', 1660, 800, 4.0, CB], ['SUBUH', 260, 800, 6.3, CB]].forEach(([s, x, y, d], i) => g += `<circle cx="${x}" cy="${y}" r="${i ? 22 : 38}" fill="url(#sun20)" data-f="${d}"/>` + T(x + (i === 3 ? 110 : i === 2 ? 130 : 0), y - (i === 4 ? 50 : i >= 2 ? 0 : 50), s, { f: d + .1, fs: 34, fw: 900, c: i >= 3 ? CB : Y }));
  g += T(960, 900, 'لِدُلُوكِ الشَّمْسِ إِلَىٰ غَسَقِ اللَّيْلِ', { f: 4.4, ff: 'Amiri', fs: 40, fw: 700, c: Y }) + T(960, 950, '= 4 waktu: Zuhur · Asar · Maghrib · Isya\'', { f: 4.6, fs: 30, fw: 900 }) + T(960, 1010, 'وَقُرْآنَ الْفَجْرِ = Subuh', { f: 6.5, ff: 'Amiri', fs: 36, fw: 700, c: CB });
  sv(49.4, 62.2, g, 'left:0;top:0', 1920, 1080, .6); })();
crd(`<div style="font:900 32px Inter;color:${CR}">⚠ tidak boleh dilewati dari ketentuannya</div>`, 'left:160px;top:130px', 56.0, 62.2, 'left', 'beep');

// --- 05 /split-screen : sebelum waktu vs sesudah waktu
scene(62.2, 100.3, { cut: 'glitch' });
crd(`<div style="width:780px;height:640px;border:5px solid ${CR};border-radius:20px;padding:28px;background:rgba(255,138,92,.05)"><div class="mono" style="font-size:24px;color:${CR}">⏪ SEBELUM WAKTU</div><div class="ar" style="font-size:58px;margin-top:10px;color:${CR}">الصَّلَاةُ قَبْلَ الْوَقْتِ لَا تَصِحُّ</div><div style="font:900 36px Inter;margin-top:14px">tidak sah · wajib diulang</div><div style="font:800 28px Inter;margin-top:18px;line-height:1.4">walau lewat perhitungan "sudah masuk waktu" · ternyata belum → tetap tidak sah</div></div>`, 'left:140px;top:200px', 62.3, 100.3, 'up', 'stamp');
crd(`<div style="width:780px;height:640px;border:5px solid ${CR};border-radius:20px;padding:28px;background:rgba(255,138,92,.05)"><div class="mono" style="font-size:24px;color:${CR}">⏩ SESUDAH WAKTU</div><div class="ar" style="font-size:58px;margin-top:10px;color:${CR}">الصَّلَاةُ بَعْدَ الْوَقْتِ</div><div style="font:900 36px Inter;margin-top:14px">tidak diterima · wajib bertaubat</div><div style="font:800 28px Inter;margin-top:18px;line-height:1.4">contoh: menunda-nunda · melambat-lambatkan waktu salat</div></div>`, 'left:1000px;top:200px', 85.1, 100.3, 'up', 'stamp');

// --- 06 /citation : Al-Ma'un 4-5
scene(100.3, 118.6, { cut: 'glitch' });
line(100.4, 106.1, 'left:160px;top:130px;width:1600px', 'seorang sahabat bertanya kepada Rasulullah ﷺ tentang Surah [Al-Ma\'un]', { fs: 40, m: [104.0] });
paper(105.9, 'left:160px;top:210px;width:1600px;height:330px', '', 118.6);
arw(node('فَوَيْلٌ لِلْمُصَلِّينَ الَّذِينَ هُمْ [عَنْ صَلَاتِهِمْ سَاهُونَ]', 'left:220px;width:1480px;top:270px;text-align:center;font-size:80px;line-height:1.6;color:#151515'), 106.1, 4.4, { marks: [108.5] });
chip("QS. AL-MA'UN : 4–5", 106.3, 'left:160px;top:570px', 118.6, Y);
line(111.6, 118.6, 'left:160px;top:670px;width:1600px', 'azab yang sangat bagi orang yang [lalai] dengan salatnya', { fs: 40, m: [114.0] });

// --- 07 /search : Sa'd bin Abi Waqqash
scene(118.6, 136.3, { cut: 'glitch', light: 1 });
searchFind(118.6, 136.3, {
  q: 'الذين هم عن صلاتهم ساهون قال هم الذين يؤخرون الصلاة عن وقتها', count: 4, pick: 0, shelfPick: 0, times: { type: .4, scan: 1.6, res: 2.4, click: 3.4, det: 3.8 },
  shelf: [["Mausu'ah at-Tafsir al-Ma'tsur", 'موسوعة التفسير المأثور'], ["Tafsir ats-Tsa'labi", 'تفسير الثعلبي'], ['Ahkam al-Qur\'an · Bakr bin al-\'Ala', 'أحكام القرآن'], ['Tafsir Ibnu Katsir', 'تفسير ابن كثير'], ['Musnad al-Bazzar', 'مسند البزار']],
  results: [
    { title: "Mausu'ah at-Tafsir al-Ma'tsur · j. 23 hlm. 604", tag: 'ATSAR', ar: 'هُمُ الَّذِينَ يُؤَخِّرُونَ الصَّلَاةَ عَنْ وَقْتِهَا', sub: "dari Sa'd bin Abi Waqqash" },
    { title: "Tafsir ats-Tsa'labi · j. 30 hlm. 333", tag: 'TAFSIR', ar: 'عَنْ صَلَاتِهِمْ سَاهُونَ', sub: 'menunda salat dari waktunya' },
    { title: "Ahkam al-Qur'an · Bakr bin al-'Ala · j. 2 hlm. 716", tag: 'TAFSIR', ar: 'الَّذِينَ يُؤَخِّرُونَ الصَّلَاةَ', sub: "riwayat Mush'ab bin Sa'd" },
    { title: 'Tafsir Ibnu Katsir', tag: 'TAFSIR', ar: 'تَأْخِيرُ الصَّلَاةِ عَنْ وَقْتِهَا', sub: 'menunda hingga waktunya habis' }],
  det: { title: "Atsar Sa'd bin Abi Waqqash", ar: 'سَعْدُ بْنُ أَبِي وَقَّاصٍ', rows: [['SUMBER', "Mausu'ah at-Tafsir al-Ma'tsur"], ['PENANYA', "Sa'd bin Abi Waqqash radhiyallahu 'anhu"], ['AYAT', "Al-Ma'un 5 · سَاهُونَ"], ['JAWABAN', 'menunda salat dari waktunya'], ['HUKUM', 'dosa besar bila disengaja'], ['RIWAYAT', 'al-Bazzar · Ibnu Jarir'], ['CATATAN', 'sebagian ulama menilainya mauquf']], quote: 'هُمُ الَّذِينَ يُؤَخِّرُونَ الصَّلَاةَ عَنْ وَقْتِهَا' }
});
camTour(118.6, 136.3, { type: .4, scan: 1.6, res: 2.4, click: 3.4, det: 3.8 });

// --- 08 /decision-matrix : berdosa vs dimaafkan
scene(136.3, 193.4, { cut: 'glitch' });
crd(`<div style="font:900 44px Inter">sengaja mengeluarkan salat dari waktunya = <span style="color:${CR}">DOSA BESAR</span> ⚠</div>`, 'left:140px;top:130px', 136.4, 193.4, 'left', 'impact');
crd(vcard(520, CG, `<div style="font:900 34px Inter;color:${CG}">✓ DIMAAFKAN</div><div style="font:900 30px Inter;margin-top:10px">😵 lupa · sibuk tanpa sadar</div><div style="font:800 26px Inter;margin-top:8px;color:${CR}">tapi jangan setiap hari</div>`), 'left:140px;top:260px', 142.2, 193.4, 'up', 'stamp');
crd(vcard(520, CG, `<div style="font:900 34px Inter;color:${CG}">✓ DIMAAFKAN</div><div style="font:900 30px Inter;margin-top:10px">😴 tertidur SEBELUM waktu</div><div style="font:800 26px Inter;margin-top:8px">tidur jam 11 · bangun jam 4 · Zuhur lewat</div>`), 'left:700px;top:260px', 156.1, 193.4, 'up', 'stamp');
crd(vcard(520, CR, `<div style="font:900 34px Inter;color:${CR}">✕ BERDOSA</div><div style="font:900 30px Inter;margin-top:10px">😴 tidur SESUDAH masuk waktu</div><div style="font:800 26px Inter;margin-top:8px">sudah sadar waktu tiba · lalu tidur</div>`), 'left:1260px;top:260px', 177.4, 193.4, 'up', 'stamp');
crd(pill('apa pun keadaannya → segera bertaubat 🤲 · jangan anggap enteng', Y), 'left:300px;top:760px', 187.1, 193.4, 'scale', 'impact');

// --- 09 /handwritten : salat adalah amanah
scene(193.4, 199.3, { cut: 'glitch' });
crd(`<div style="font:700 72px Kalam;color:#fff8d0;line-height:1.3">salat adalah <span style="color:${Y}">amanah</span> dari Allah untuk orang-orang yang beriman…</div>`, 'left:200px;top:300px;width:1520px', 193.5, 199.3, 'up', 'paper');

// --- 10 /citation : hadis lima salat
scene(199.3, 222.1, { cut: 'glitch' });
paper(199.4, 'left:160px;top:150px;width:1600px;height:560px', '', 222.1);
arw(node('خَمْسُ صَلَوَاتٍ كَتَبَهُنَّ اللَّهُ عَلَى الْعِبَادِ فَمَنْ جَاءَ بِهِنَّ وَلَمْ يُضَيِّعْ مِنْهُنَّ شَيْئًا اسْتِخْفَافًا بِحَقِّهِنَّ [كَانَ لَهُ عِنْدَ اللَّهِ عَهْدٌ أَنْ يُدْخِلَهُ الْجَنَّةَ] وَمَنْ لَمْ يَأْتِ بِهِنَّ فَلَيْسَ لَهُ عِنْدَ اللَّهِ عَهْدٌ إِنْ شَاءَ عَذَّبَهُ وَإِنْ شَاءَ أَدْخَلَهُ الْجَنَّةَ', 'left:220px;width:1480px;top:180px;text-align:center;font-size:48px;line-height:1.8;color:#151515'), 199.5, 22.0, { marks: [210.0] });
chip('HR. MALIK · ABU DAWUD · AN-NASA\'I · DARI \'UBADAH BIN ASH-SHAMIT', 199.7, 'left:160px;top:740px', 222.1, Y);

// --- 11 /balance : janji Allah
scene(222.1, 256.1, { cut: 'glitch' });
line(222.2, 256.1, 'left:140px;top:130px;width:1640px', 'lima salat yang diwajibkan Allah atas hamba-Nya…', { fs: 42 });
(() => { const n = node(`<svg width="1400" height="440" viewBox="0 0 1400 440"><path d="M700 50 V380 M540 420 H860" stroke="#fff" stroke-width="6"/><g class="bm"><path d="M240 70 H1160" stroke="#fff" stroke-width="6"/><path d="M240 70 L150 220 H330 Z" fill="rgba(127,224,160,.15)" stroke="${CG}" stroke-width="4"/><text x="240" y="280" text-anchor="middle" font-family="Inter" font-weight="900" font-size="32" fill="${CG}">✓ DIJAGA</text><text x="240" y="330" text-anchor="middle" font-family="Inter" font-weight="800" font-size="24" fill="#fff">syarat · rukun · adab bagus</text><text x="240" y="385" text-anchor="middle" font-family="Inter" font-weight="900" font-size="26" fill="${CG}">janji: masuk surga</text><path d="M1160 70 L1070 220 H1250 Z" fill="rgba(255,138,92,.15)" stroke="${CR}" stroke-width="4"/><text x="1160" y="280" text-anchor="middle" font-family="Inter" font-weight="900" font-size="32" fill="${CR}">✕ DIREMEHKAN</text><text x="1160" y="330" text-anchor="middle" font-family="Inter" font-weight="800" font-size="24" fill="#fff">tak ada janji di sisi Allah</text><text x="1160" y="385" text-anchor="middle" font-family="Inter" font-weight="900" font-size="26" fill="${CR}">terserah kehendak-Nya</text></g></svg>`, 'left:260px;top:230px');
  item(224.0, 256.1, n, (lt, t, it) => { n.style.opacity = clamp(lt / .3) * clamp((it.t1 - t) / .3); n.querySelector('.bm').setAttribute('transform', `rotate(${-6 * eio(clamp((t - 235) / 1.2))} 700 70)`); }); sfx(235.0, 'impact', .6); })();
crd(`<div style="text-align:center;border:4px solid ${Y};border-radius:18px;padding:12px 30px;background:#000"><div class="ar" style="font-size:56px;color:${Y}">إِنَّ اللَّهَ لَا يُخْلِفُ الْمِيعَادَ</div><div style="font:800 28px Inter">janji Allah pasti terjadi</div></div>`, 'left:560px;top:760px', 250.3, 256.1, 'scale', 'stamp');

// --- 12 /exploded-view : hadirnya hati
scene(256.1, 276.3, { cut: 'glitch' });
crd(`<div style="text-align:center"><div class="ar" style="font-size:96px;color:${Y}">مَعَ حُضُورِ الْقَلْبِ</div><div style="font:900 40px Inter">bersama hadirnya hati ❤️</div></div>`, 'left:460px;top:150px;width:1000px', 256.2, 276.3, 'scale', 'stamp');
crd(`<div style="text-align:center;border:4px solid #fff;border-radius:18px;padding:16px 30px"><div class="ar" style="font-size:50px">أَلَّا يَتَفَكَّرَ إِلَّا فِي مَعْنًى يَقُولُهُ</div><div style="font:900 32px Inter;margin-top:4px">tidak berpikir kecuali pada makna yang ia ucapkan</div></div>`, 'left:260px;top:440px;width:1400px', 260.0, 276.3, 'up', 'tick');
[['📖', 'bacaan Al-Qur\'an', 271.4], ['📿', 'zikir', 273.3], ['🤲', 'doa', 274.2]].forEach(([e, s, t], i) => crd(`<div style="width:440px;height:170px;border:4px solid ${CG};border-radius:18px;text-align:center;padding-top:16px"><div style="font-size:60px">${e}</div><div style="font:900 32px Inter;color:${CG}">${s}</div></div>`, `left:${260 + i * 480}px;top:720px`, t, 276.3, 'up', 'tick'));

// --- 13 /layers : contoh iftitah & al-Fatihah
scene(276.3, 323.3, { cut: 'glitch' });
label('CONTOH: MULUT MEMBACA · HATI MEMIKIRKAN', 276.4, 'left:160px;top:130px', 323.3);
[['👄 MULUT', 'وَجَّهْتُ وَجْهِيَ لِلَّذِي فَطَرَ السَّمَاوَاتِ وَالْأَرْضَ', '#fff', 284.3], ['❤️ HATI', '"aku hadapkan wajahku kepada Tuhan pencipta langit & bumi"', Y, 295.7]].forEach(([h, s, c, t], i) => crd(`<div style="width:1600px;border:4px solid ${c};border-radius:18px;padding:18px 28px;display:flex;gap:30px;align-items:center"><div style="font:900 34px Inter;color:${c};width:260px;flex:none">${h}</div><div class="${i ? '' : 'ar'}" style="${i ? 'font:900 34px Inter' : 'font-size:52px'};flex:1;text-align:${i ? 'left' : 'right'}">${s}</div></div>`, `left:160px;top:${210 + i * 170}px`, t, 323.3, 'left', 'tick'));
crd(`<div style="width:1600px;border:4px dashed ${CG};border-radius:18px;padding:18px 28px;display:flex;gap:30px;align-items:center"><div style="font:900 34px Inter;color:${CG};width:260px;flex:none;white-space:nowrap">AL-FATIHAH</div><div class="ar" style="font-size:52px;flex:1;text-align:right">الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ</div></div>`, 'left:160px;top:560px', 312.0, 323.3, 'up', 'beep');
crd(pill('mulut membaca · hati pun sama', CG), 'left:160px;top:740px', 318.2, 323.3, 'scale', 'impact');

// --- 14 /callout : godaan syaitan
scene(323.3, 342.6, { cut: 'glitch' });
crd(`<div style="width:1560px;border:5px solid ${CR};border-radius:20px;padding:26px 40px;background:rgba(255,138,92,.08)"><div class="mono" style="font-size:24px;color:${CR}">⚠ SYAITAN MASUK SAAT SALAT</div><div style="font:900 50px Inter;margin-top:10px">membawa pikiran ke urusan dunia… <span style="color:${CR}">bahkan urusan akhirat</span></div></div>`, 'left:180px;top:200px', 323.4, 342.6, 'scale', 'impact');
crd(vcard(1560, Y, `<div style="font:900 38px Inter;line-height:1.35">walau baik · kalau <span class="mk">tak ada sangkut pautnya</span> dengan yang dibaca → tetap berhati-hati</div>`), 'left:180px;top:520px', 333.4, 342.6, 'up', 'beep');

// --- 15 /spectrum : ihsan
scene(342.6, 371.5, { cut: 'glitch' });
arw(node('اعْبُدِ اللَّهَ [كَأَنَّكَ تَرَاهُ] فَإِنْ لَمْ تَكُنْ تَرَاهُ [فَإِنَّهُ يَرَاكَ]', 'left:140px;width:1640px;top:150px;text-align:center;font-size:70px;color:#fff'), 342.7, 17.0, { marks: [344.0] });
crd(vcard(760, Y, `<div class="mono" style="font-size:24px;color:${Y}">TINGKAT 1 · MA'RIFAT TINGGI</div><div style="font:900 40px Inter;margin-top:10px">👁️ seolah-olah melihat Allah</div>`), 'left:140px;top:420px', 349.8, 371.5, 'up', 'stamp');
crd(vcard(760, CG, `<div class="mono" style="font-size:24px;color:${CG}">TINGKAT 2 · ORANG AWAM SEPERTI KITA</div><div style="font:900 40px Inter;margin-top:10px">🫣 yakin Allah melihat kita</div>`), 'left:1020px;top:420px', 359.5, 371.5, 'up', 'stamp');
[['💪 bersungguh-sungguh', 366.6], ['🧐 berhati-hati', 368.0], ['😟 takut berbuat salah · disaksikan Allah', 369.5]].forEach(([s, t], i) => crd(`<div style="font:900 32px Inter;color:${Y}">${s}</div>`, `left:${140 + i * 480}px;top:720px`, t, 371.5, 'up', 'tick'));

// --- 16 /citation : Thaha 14
scene(371.5, 386.0, { cut: 'glitch' });
paper(371.6, 'left:160px;top:180px;width:1600px;height:320px', '', 386.0);
arw(node('[وَأَقِمِ الصَّلَاةَ لِذِكْرِي]', 'left:220px;width:1480px;top:240px;text-align:center;font-size:100px;line-height:1.6;color:#151515'), 378.5, 3.0, { marks: [380.0] });
chip('QS. THAHA : 14', 371.8, 'left:160px;top:530px', 386.0, Y);
line(381.5, 386.0, 'left:160px;top:630px;width:1600px', 'dirikanlah salat untuk [mengingat-Ku] · bagian dari khusyuk', { fs: 40, m: [383.0] });

// --- 17 /blueprint : definisi khusyuk
scene(386.0, 414.6, { cut: 'glitch' });
show(node('', 'left:140px;top:120px;width:1640px;height:820px', 'bp'), 386.1, 'fade', 414.6);
label('KHUSYUK MENURUT PARA ULAMA', 386.2, 'left:180px;top:150px', 414.6);
crd(`<div class="ar" style="font-size:90px;text-align:center;width:1400px">سُكُونُ الْجَوَارِحِ مَعَ حُضُورِ الْقَلْبِ</div>`, 'left:260px;top:220px', 388.0, 414.6, 'scale', 'stamp');
sv(392.0, 414.6, `<circle cx="640" cy="640" r="160" fill="rgba(127,214,255,.10)" stroke="${CB}" stroke-width="5" data-f="0"/>` + T(640, 620, '🧍', { f: .1, fs: 80 }) + T(640, 700, 'ANGGOTA TUBUH TENANG', { f: .3, fs: 26, fw: 900, c: CB }) +
  T(960, 660, '+', { f: .8, fs: 90, fw: 900, c: Y }) +
  `<circle cx="1280" cy="640" r="160" fill="rgba(233,242,58,.10)" stroke="${Y}" stroke-width="5" data-f="1.0"/>` + T(1280, 620, '❤️', { f: 1.1, fs: 80 }) + T(1280, 700, 'HATI HADIR', { f: 1.3, fs: 26, fw: 900, c: Y }) +
  T(960, 880, '= KHUSYUK', { f: 2.0, fs: 50, fw: 900, c: '#fff' }), 'left:0;top:0', 1920, 1080, .6);
crd(`<div class="mono" style="font-size:22px;color:${Y}">⚠ LAFAZ HADIS SIFAT SALAT (7:00) KURANG TERDENGAR · TIDAK DITULIS</div>`, 'left:180px;top:960px', 401.0, 414.6, 'fade');

// --- 18 /checklist : sifat salat
scene(414.6, 470.2, { cut: 'glitch' });
label('SALAT ITU…', 414.7, 'left:160px;top:130px', 470.2);
tick('ketenangan · tidak terburu-buru', 415.0, 470.2, 'left:200px;top:210px', CB, '1', 44);
tick('merendahkan diri (tawadhu\')', 422.5, 470.2, 'left:200px;top:330px', Y, '2', 44);
crd(`<div style="display:flex;gap:30px;margin-left:102px"><span class="ar" style="font-size:52px;color:${Y}">اللَّهُ أَكْبَرُ</span><span class="ar" style="font-size:52px;color:${Y}">سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ</span><span style="font:900 30px Inter;align-self:center">→ aku hanya hamba Allah</span></div>`, 'left:200px;top:430px', 424.3, 470.2, 'left', 'beep');
crd(`<div style="font:900 30px Inter;margin-left:102px;color:${CR}">kecil · rendah · penuh dosa · taat pun karena pertolongan Allah</div>`, 'left:200px;top:530px', 433.9, 470.2, 'left', 'tick');
tick('mendekatkan diri kepada Allah', 457.7, 470.2, 'left:200px;top:620px', CG, '3', 44);
tick('meratapi dosa · memohon ampunan', 461.8, 470.2, 'left:200px;top:740px', CG, '4', 44);

// --- 19 /bar-chart : khidaj
scene(470.2, 510.5, { cut: 'glitch' });
line(470.3, 483.4, 'left:140px;top:130px;width:1640px', 'yang tidak melakukannya · salatnya [kurang]', { fs: 46, m: [473.0] });
(() => { const L = [['tenang', 474.8], ["tawadhu'", 476.0], ['dekat kepada Allah', 478.0], ['meratapi dosa', 482.0]]; const n = node(`<svg width="1640" height="560" viewBox="0 0 1640 560">${L.map(([s], i) => `<text x="0" y="${80 + i * 120}" font-family="Inter" font-weight="900" font-size="34" fill="#fff">${s}</text><rect x="420" y="${50 + i * 120}" width="1100" height="44" rx="22" fill="rgba(233,242,58,.12)"/><rect class="b${i}" x="420" y="${50 + i * 120}" width="1100" height="44" rx="22" fill="${Y}"/>`).join('')}</svg>`, 'left:160px;top:250px');
  item(470.3, 510.5, n, (lt, t, it) => { n.style.opacity = clamp(lt / .3) * clamp((it.t1 - t) / .3); L.forEach(([s, d], i) => { const w = 1100 * (1 - .85 * eio(clamp((t - d) / 1.2))); const b = n.querySelector('.b' + i); b.setAttribute('width', w); b.setAttribute('fill', t > d + .6 ? CR : Y); }); }); })();
crd(`<div style="text-align:center;border:4px solid ${CR};border-radius:18px;padding:12px 30px;background:#000"><div class="ar" style="font-size:72px;color:${CR}">خِدَاجٌ</div><div style="font:900 30px Inter">kurang sempurna · tidak mendekatkan kepada Allah</div></div>`, 'left:610px;top:820px', 489.7, 510.5, 'scale', 'stamp');

// --- 20 /search : hadis qudsi tawadhu'
scene(510.5, 536.1, { cut: 'glitch', light: 1 });
searchFind(510.5, 536.1, {
  q: 'إنما أتقبل الصلاة ممن تواضع بها لعظمتي', count: 4, pick: 0, shelfPick: 0, times: { type: .4, scan: 1.8, res: 2.8, click: 3.8, det: 4.2 },
  shelf: [['Musnad al-Bazzar', 'مسند البزار'], ['Al-Ithafat as-Saniyyah', 'الإتحافات السنية'], ['Al-Firdaus · ad-Dailami', 'الفردوس'], ['Fath al-Qarib al-Mujib', 'فتح القريب المجيب'], ["Is'af al-Labits · al-Huwaini", 'إسعاف اللبيث']],
  results: [
    { title: 'Musnad al-Bazzar · j. 11 hlm. 129', tag: 'QUDSI', ar: 'إِنَّمَا أَتَقَبَّلُ الصَّلَاةَ مِمَّنْ تَوَاضَعَ بِهَا لِعَظَمَتِي', sub: 'dari Ibnu \'Abbas' },
    { title: "Al-Ithafat as-Saniyyah · al-Munawi · hlm. 46", tag: 'QUDSI', ar: 'وَلَمْ يَسْتَطِلْ عَلَى خَلْقِي', sub: 'tidak sombong kepada makhluk-Ku' },
    { title: 'Al-Firdaus · ad-Dailami · j. 3 hlm. 179', tag: 'QUDSI', ar: 'وَأَطْعَمَ الْجَائِعَ', sub: 'memberi makan yang lapar' },
    { title: "Is'af al-Labits · al-Huwaini · j. 3 hlm. 141", tag: 'CATATAN', ar: 'ابْتِغَاءَ مَرْضَاتِي', sub: 'ditanyakan derajatnya · ada kelemahan' }],
  det: { title: 'Hadis qudsi tentang salat', ar: 'حَدِيثٌ قُدْسِيٌّ', rows: [['RIWAYAT', 'al-Bazzar · ad-Dailami'], ['SAHABAT', "Ibnu 'Abbas radhiyallahu 'anhuma"], ['DITERIMA', 'yang tawadhu\' karena keagungan Allah'], ['TIDAK', 'sombong kepada makhluk Allah'], ['DAN', 'memberi makan fakir & yang lapar'], ['NIAT', 'mencari rida Allah'], ['DERAJAT', 'diperselisihkan · ada kelemahan']], quote: 'إِنَّمَا أَتَقَبَّلُ الصَّلَاةَ مِمَّنْ تَوَاضَعَ بِهَا لِعَظَمَتِي' }
});
camTour(510.5, 536.1, { type: .4, scan: 1.8, res: 2.8, click: 3.8, det: 4.2 });

// --- 21 /iceberg : salat & akhlak di luar salat
scene(536.1, 563.0, { cut: 'glitch' });
line(536.2, 546.1, 'left:140px;top:120px;width:1640px', 'khusyuk saja [tidak cukup] · belum sepenuhnya diterima', { fs: 44, m: [538.5] });
sv(546.1, 563.0, `<defs><linearGradient id="sea20" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0c1c4f"/><stop offset="1" stop-color="#050b2a"/></linearGradient></defs><rect x="0" y="560" width="1920" height="520" fill="url(#sea20)" data-f=".1"/><path d="M0 560 H1920" stroke="${CB}" stroke-width="4" data-f=".1"/>` +
  `<path d="M760 560 L860 420 L960 360 L1060 430 L1160 560 Z" fill="rgba(233,242,58,.12)" stroke="${Y}" stroke-width="4" data-f=".3"/>` + T(960, 320, '🕌 khusyuk di dalam salat', { f: .5, fs: 34, fw: 900, c: Y }) +
  `<path d="M760 560 L600 760 L700 960 L1220 960 L1340 760 L1160 560 Z" fill="rgba(127,224,160,.12)" stroke="${CG}" stroke-width="4" data-f="2.5"/>` + T(970, 690, 'AKHLAK DI LUAR SALAT', { f: 2.7, fs: 36, fw: 900, c: CG }) + T(970, 770, '🙇 tidak sombong kepada hamba Allah', { f: 8.6, fs: 30, fw: 800 }) + T(970, 830, '🍚 peduli fakir miskin yang lapar', { f: 10.6, fs: 30, fw: 800 }), 'left:0;top:0', 1920, 1080, .8);
crd(vcard(480, CR, `<div style="font:900 28px Inter;line-height:1.35">tanpa akhlak ini · walau khusyuk · <span style="color:${CR}">Allah tidak menerimanya</span></div>`, '#000'), 'left:1380px;top:220px', 558.0, 563.0, 'down', 'impact');

// --- 22 /teaser : penutup
scene(563.0, TOTAL, { cut: 'hard' });
mePol('left:200px;top:200px', 563.1, TOTAL, -4, 400);
crd(`<div style="font:900 40px Inter;line-height:1.35"><span class="mk">tepat waktu</span> · hati hadir · khusyuk · berakhlak</div>`, 'left:760px;top:220px;width:1000px', 563.1, TOTAL, 'left', 'tick');
sub2('left:760px;top:520px', 564.0, TOTAL);

// ================================================================== JADWAL KODE VISUAL
[[0, 15.6, '/citation'], [15.6, 34.2, '/spectrum'], [34.2, 49.3, '/citation'], [49.3, 62.2, '/diagram'], [62.2, 100.3, '/split-screen'], [100.3, 118.6, '/citation'], [118.6, 136.3, '/search'], [136.3, 193.4, '/decision-matrix'],
 [193.4, 199.3, '/handwritten'], [199.3, 222.1, '/citation'], [222.1, 256.1, '/balance'], [256.1, 276.3, '/exploded-view'], [276.3, 323.3, '/layers'], [323.3, 342.6, '/callout'], [342.6, 371.5, '/spectrum'], [371.5, 386.0, '/citation'],
 [386.0, 414.6, '/blueprint'], [414.6, 470.2, '/checklist'], [470.2, 510.5, '/bar-chart'], [510.5, 536.1, '/search'], [536.1, 563.0, '/iceberg'], [563.0, TOTAL, '/teaser']]
 .reduce((acc, [a, b, c]) => { if (!acc.m[c]) acc.m[c] = String(++acc.n).padStart(2, '0'); codeTag(a, b, acc.m[c], c); return acc; }, { n: 0, m: {} });
