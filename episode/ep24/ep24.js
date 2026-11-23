// ================================================================== ADEGAN EPISODE 24 · Surah An-Nisa, 5 Ayat Emas & Dosa Besar
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
const big = (s, c = Y, fs = 120) => `<div style="font:900 ${fs}px Inter;color:${c};letter-spacing:-.02em;line-height:1;margin:22px 0 10px">${s}</div>`;
const crit = (ar, s, c) => `<div style="width:500px;height:200px;border:4px solid ${c};border-radius:18px;text-align:center;padding-top:18px;background:#000"><div class="ar" style="font-size:58px;color:${c}">${ar}</div><div style="font:900 30px Inter;margin-top:2px">${s}</div></div>`;

// --- 01 /kinetic-type : pembuka
scene(0, 9.0, { cut: 'none' });
arw(node(BSM, 'left:140px;top:120px;width:1000px;font-size:58px;color:#fff;text-align:left'), .1, 1.0);
label("FILE 24 · SURAH KE-4 · AN-NISA", .3, 'left:140px;top:260px');
seg("5 Ayat Emas &<br>[Dosa Besar]", .6, 'left:140px;top:310px;width:1100px', { size: 100, iv: .04, marks: [2.6] });
mePol('left:1300px;top:150px', .2, 9.0, 4, 400);
meTag(.8, 9.0, 'كَبَائِرَ مَا تُنْهَوْنَ عَنْهُ');
arw(node('السُّورَةُ الرَّابِعَةُ مِنْ سُوَرِ الْقُرْآنِ، [سُورَةُ النِّسَاءِ]', 'left:140px;top:640px;width:1080px;font-size:54px;color:#fff;text-align:left'), 6.0, 2.6, { marks: [7.9] });

// --- 02 /badge : kartu identitas surah
scene(9.0, 31.0, { cut: 'glitch' });
label('KARTU IDENTITAS SURAH', 9.1, 'left:160px;top:130px', 31.0);
crd(`<div style="width:560px;height:620px;border:6px solid ${Y};border-radius:24px;text-align:center;padding-top:40px;background:rgba(233,242,58,.05)"><div class="mono" style="font-size:24px;color:${Y}">SURAH KE</div>${big('4', Y, 240)}<div class="ar" style="font-size:96px;margin-top:20px">النِّسَاءُ</div><div style="font:900 40px Inter">An-Nisa</div></div>`, 'left:160px;top:190px', 9.2, 31.0, 'scale', 'stamp');
crd(vcard(980, '#fff', `<div class="mono" style="font-size:22px;color:${Y}">ARTINYA</div><div style="font:900 52px Inter;margin-top:6px">👩 perempuan-perempuan</div>`), 'left:780px;top:190px', 14.0, 31.0, 'left', 'tick');
crd(vcard(980, CG, `<div class="mono" style="font-size:22px;color:${CG}">MADANIYAH</div><div style="font:900 40px Inter;margin-top:6px">turun setelah hijrah 🕌 Mekah → Madinah</div>`), 'left:780px;top:400px', 16.2, 31.0, 'left', 'tick');
counter(24.5, 31.0, 176, 'left:780px;top:600px', 'JUMLAH AYAT · سِتٌّ وَسَبْعُونَ وَمِائَةٌ', Y, 1.6);

// --- 03 /mindmap : isi surah tentang perempuan
scene(31.0, 67.0, { cut: 'glitch' });
sv(31.1, 67.0, DEFS + `<circle cx="960" cy="540" r="150" fill="rgba(233,242,58,.10)" stroke="${Y}" stroke-width="6" data-d="950"/>` + T(960, 510, 'النِّسَاءُ', { f: .3, ff: 'Amiri', fs: 70, c: Y }) + T(960, 615, 'banyak kisah perempuan', { f: .6, fs: 24, fw: 900 }) +
  [['🌱', 'dari mana perempuan diciptakan', 400, 260, 11.0], ['⚖️', 'kenapa laki-laki lebih utama', 1520, 260, 15.0], ['📜', 'warisan · laki-laki 2 : perempuan 1', 1520, 820, 21.0], ['📚', 'hal-hal lain tentang perempuan', 400, 820, 26.0]].map(([e, s, x, y, d]) => '<g data-f="' + d + '">' + LN([[960, 540], [x, y]], { s: '#fff', sw: 3 }) + '</g>' + `<rect x="${x - 250}" y="${y - 70}" width="500" height="140" rx="16" fill="#000" stroke="#fff" stroke-width="4" data-f="${d}"/>` + T(x, y - 8, e, { f: d, fs: 44 }) + T(x, y + 44, s, { f: d + .2, fs: 26, fw: 900 })).join(''), 'left:0;top:0', 1920, 1080, .8);
crd(`<div style="display:flex;align-items:flex-end;gap:26px;height:180px"><div style="width:90px;height:170px;background:${Y};border-radius:8px 8px 0 0"></div><div style="width:90px;height:85px;background:${CB};border-radius:8px 8px 0 0"></div><div style="font:900 36px Inter;padding-bottom:6px">2 : 1</div></div>`, 'left:1310px;top:900px', 53.0, 67.0, 'up', 'beep');
crd(pill('⏭ insyaallah dibahas di lain kesempatan', '#fff'), 'left:560px;top:940px', 61.5, 67.0, 'scale', 'tick');

// --- 04 /citation : atsar Ibnu Mas'ud
scene(67.0, 83.0, { cut: 'glitch' });
label("ABDULLAH BIN MAS'UD RADHIYALLAHU 'ANHU BERKATA", 67.1, 'left:160px;top:130px', 83.0);
paper(67.2, 'left:160px;top:190px;width:1600px;height:330px', '', 83.0);
arw(node('إِنَّ فِي سُورَةِ النِّسَاءِ [لَخَمْسَ آيَاتٍ] مَا يَسُرُّنِي أَنَّ لِي بِهَا الدُّنْيَا وَمَا فِيهَا', 'left:220px;width:1480px;top:230px;text-align:center;font-size:64px;line-height:1.75;color:#151515'), 69.0, 7.5, { marks: [72.0] });
line(77.0, 83.0, 'left:160px;top:570px;width:1600px', '"di Surah An-Nisa ada [lima ayat] yang lebih menyenangkan bagiku daripada dunia & isinya"', { fs: 40, m: [79.0] });
crd(`<div style="display:flex;align-items:center;gap:40px"><div style="width:520px;height:150px;border:5px solid ${Y};border-radius:18px;text-align:center;padding-top:30px;background:rgba(233,242,58,.08);font:900 52px Inter;color:${Y}">5 AYAT ⬇</div><div style="font:900 70px Inter;color:${Y}">&gt;</div><div style="width:520px;height:110px;border:4px solid #fff;border-radius:18px;text-align:center;padding-top:26px;font:900 40px Inter">🌍 dunia & isinya ⬆</div></div>`, 'left:200px;top:760px', 80.0, 83.0, 'up', 'stamp');

// --- 05 /search : sumber atsar
scene(83.0, 97.0, { cut: 'glitch', light: 1 });
searchFind(83.0, 97.0, {
  q: 'إن في سورة النساء لخمس آيات ما يسرني أن لي بها الدنيا وما فيها', count: 4, pick: 0, shelfPick: 0, times: { type: .4, scan: 2.0, res: 3.0, click: 4.0, det: 4.6 },
  shelf: [["Fadha'il al-Qur'an · Abu 'Ubaid", 'فضائل القرآن'], ['al-Mustadrak · al-Hakim', 'المستدرك على الصحيحين'], ["Syu'ab al-Iman · al-Baihaqi", 'شعب الإيمان'], ['al-Muwafaqat · asy-Syathibi', 'الموافقات'], ['Shahih al-Bukhari', 'صحيح البخاري']],
  results: [
    { title: "Fadha'il al-Qur'an · Abu 'Ubaid · hlm. 277", tag: 'ATSAR', ar: 'لَخَمْسَ آيَاتٍ', sub: "dari 'Abdullah bin Mas'ud" },
    { title: 'al-Mustadrak · al-Hakim · j. 2 hlm. 334', tag: 'ATSAR', ar: 'مَا يَسُرُّنِي أَنَّ لِي بِهَا الدُّنْيَا', sub: 'riwayat yang sama' },
    { title: "Syu'ab al-Iman · al-Baihaqi · j. 4 hlm. 76", tag: 'ATSAR', ar: 'وَمَا فِيهَا', sub: 'riwayat yang sama' },
    { title: 'al-Muwafaqat · asy-Syathibi · j. 4 hlm. 174', tag: 'NUKILAN', ar: 'خَمْسَ آيَاتٍ', sub: 'dinukil para ulama' }],
  det: { title: "'Abdullah bin Mas'ud", ar: 'عَبْدُ اللَّهِ بْنُ مَسْعُودٍ', rows: [['SIAPA', 'sahabat Rasulullah ﷺ'], ['BADAR', 'yang menuntaskan Abu Jahal'], ['DALIL', 'HR. al-Bukhari (kisah Badar)'], ['5 AYAT', 'An-Nisa 31 · 40 · 48 · 64 · 110'], ['DINUKIL', "Abu 'Ubaid · al-Hakim · al-Baihaqi"]], quote: 'مَا يَسُرُّنِي أَنَّ لِي بِهَا الدُّنْيَا وَمَا فِيهَا' }
});
camTour(83.0, 97.0, { type: .4, scan: 2.0, res: 3.0, click: 4.0, det: 4.6 });

// --- 06 /mosaic : 5 ayat emas
scene(97.0, 101.0, { cut: 'glitch' });
label('5 AYAT EMAS SURAH AN-NISA', 97.1, 'left:160px;top:130px', 101.0);
[31, 40, 48, 64, 110].forEach((n, i) => crd(`<div style="width:300px;height:330px;border:5px solid ${i ? '#fff' : Y};border-radius:20px;text-align:center;padding-top:50px;background:${i ? '#000' : 'rgba(233,242,58,.10)'}"><div class="mono" style="font-size:22px;color:${i ? '#fff' : Y}">AYAT</div>${big(n, i ? '#fff' : Y, 120)}<div style="font:900 26px Inter;margin-top:20px;color:${i ? '#fff' : Y}">${i ? '·' : 'PERTAMA ✦'}</div></div>`, `left:${140 + i * 340}px;top:300px`, 97.3 + i * .25, 101.0, 'drop', 'tick'));

// --- 07 /scripture : An-Nisa 31
scene(101.0, 118.0, { cut: 'glitch' });
label("AYAT PERTAMA · QS. AN-NISA : 31", 101.1, 'left:160px;top:130px', 118.0);
arw(node('أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ', 'left:160px;top:170px;width:1600px;text-align:center;font-size:40px;color:#fff'), 103.0, 1.8);
paper(104.8, 'left:160px;top:260px;width:1600px;height:330px', '', 118.0);
arw(node('إِنْ تَجْتَنِبُوا [كَبَائِرَ] مَا تُنْهَوْنَ عَنْهُ نُكَفِّرْ عَنْكُمْ سَيِّئَاتِكُمْ وَنُدْخِلْكُمْ مُدْخَلًا كَرِيمًا', 'left:220px;width:1480px;top:300px;text-align:center;font-size:66px;line-height:1.75;color:#151515'), 105.0, 9.0, { marks: [107.5] });
chip("QS. AN-NISA : 31", 105.3, 'left:160px;top:620px', 118.0, Y);
crd(`<div class="ar" style="font-size:64px;color:${Y};text-align:center;width:1600px">إِنْ تَجْتَنِبُوا كَبَائِرَ مَا تُنْهَوْنَ عَنْهُ</div>`, 'left:160px;top:740px', 115.0, 118.0, 'up', 'beep');

// --- 08 /flowchart : jauhi dosa besar → dosa kecil dihapus
scene(118.0, 152.0, { cut: 'glitch' });
sv(118.1, 152.0, DEFS + [['🛑', 'JAUHI', 'dosa-dosa besar', Y, 0], ['🧽', 'DIHAPUS', 'dosa-dosa kecil', CG, 3.5], ['🏡', 'DIMASUKKAN', 'ke tempat yang mulia', CB, 6.0]].map(([e, a, b, c, d], i) => BOX(160 + i * 560, 200, 480, 300, { s: c, sw: 5, del: d }) + T(400 + i * 560, 300, e, { f: d + .1, fs: 80 }) + T(400 + i * 560, 400, a, { f: d + .2, fs: 40, fw: 900, c }) + T(400 + i * 560, 450, b, { f: d + .3, fs: 30, fw: 900 }) + (i ? '<g data-f="' + d + '">' + LN([[160 + i * 560 - 80, 350], [160 + i * 560 - 10, 350]], { s: Y, sw: 5, arrow: 1 }) + '</g>' : '')).join(''), 'left:0;top:0', 1920, 1080, .6);
crd(vcard(1600, '#fff', `<div style="font:900 40px Inter;line-height:1.3">dosa kecil dihapus Allah ✓ <span style="color:${Y}">walaupun kita tidak meminta ampun</span></div>`), 'left:160px;top:580px', 138.0, 152.0, 'up', 'impact');
crd(pill('⚠ syaratnya: BERSUNGGUH-SUNGGUH menjauhi dosa besar', Y), 'left:160px;top:800px', 141.5, 152.0, 'scale', 'beep');

// --- 09 /citation : HR. Muslim 233
scene(152.0, 164.0, { cut: 'glitch' });
label('BAGINDA RASULULLAH ﷺ BERSABDA', 152.1, 'left:160px;top:130px', 164.0);
paper(152.2, 'left:160px;top:190px;width:1600px;height:380px', '', 164.0);
arw(node('الصَّلَوَاتُ الْخَمْسُ وَالْجُمُعَةُ إِلَى الْجُمُعَةِ وَرَمَضَانُ إِلَى رَمَضَانَ [مُكَفِّرَاتٌ] لِمَا بَيْنَهُنَّ إِذَا اجْتَنَبَ الْكَبَائِرَ', 'left:220px;width:1480px;top:230px;text-align:center;font-size:62px;line-height:1.75;color:#151515'), 152.4, 10.5, { marks: [160.0] });
chip('HR. MUSLIM NO. 233 · SHAHIH', 152.8, 'left:160px;top:600px', 164.0, CG);

// --- 10 /cycle : penghapus dosa
scene(164.0, 204.0, { cut: 'glitch' });
label('PENGHAPUS DOSA KECIL · كَفَّارَاتٌ', 164.1, 'left:160px;top:130px', 204.0);
sv(164.2, 204.0, DEFS + `<circle cx="560" cy="560" r="270" fill="none" stroke="#fff" stroke-width="4" stroke-dasharray="14 12" data-d="1700" data-dur="1.4"/>` +
  [['MAGHRIB', -90, 2.0], ['ISYA', -18, 3.0], ['SUBUH', 54, 4.0], ['ZUHUR', 126, 5.0], ['ASAR', 198, 6.0]].map(([s, a, d]) => { const x = 560 + 270 * Math.cos(a * Math.PI / 180), y = 560 + 270 * Math.sin(a * Math.PI / 180); return `<circle cx="${x}" cy="${y}" r="62" fill="#000" stroke="${Y}" stroke-width="5" data-f="${d}"/>` + T(x, y + 10, s, { f: d, fs: 22, fw: 900, c: Y }); }).join('') +
  T(560, 545, '🕌', { f: 1.0, fs: 70 }) + T(560, 610, '5 waktu', { f: 1.2, fs: 34, fw: 900 }), 'left:0;top:0', 1920, 1080, .6);
crd(vcard(820, CB, `<div style="font:900 40px Inter">📅 Jumat → Jumat berikutnya</div>`), 'left:1000px;top:260px', 176.5, 204.0, 'left', 'tick');
crd(vcard(820, CG, `<div style="font:900 40px Inter">🌙 Ramadan → Ramadan berikutnya</div>`), 'left:1000px;top:420px', 174.0, 204.0, 'left', 'tick');
crd(vcard(820, Y, `<div style="font:900 34px Inter;line-height:1.3">semua itu <span style="color:${Y}">penghapus dosa kecil</span> · selama menjauhi dosa besar</div>`), 'left:1000px;top:590px', 178.5, 204.0, 'up', 'impact');
crd(pill('contoh: salat Zuhur ✓ → dosa kecil terhapus sampai salat berikutnya', '#fff'), 'left:160px;top:900px', 195.5, 204.0, 'scale', 'beep');

// --- 11 /quote : adh-Dhahabi
scene(204.0, 221.0, { cut: 'glitch' });
crd(`<div style="width:520px;height:640px;border:6px solid ${Y};border-radius:12px 24px 24px 12px;background:linear-gradient(90deg,rgba(233,242,58,.18) 0 40px,rgba(233,242,58,.05) 40px);text-align:center;padding:90px 40px 0 70px"><div class="ar" style="font-size:88px;color:${Y}">الْكَبَائِرُ</div><div style="font:900 36px Inter;margin-top:30px">al-Kaba'ir</div><div class="mono" style="font-size:22px;margin-top:16px">AL-IMAM ADH-DHAHABI</div></div>`, 'left:160px;top:190px', 204.1, 221.0, 'scale', 'paper');
crd(`<div style="font:700 56px/1.3 Kalam;color:#fff8d0;width:1000px">"seseorang <span style="color:${Y}">mesti mengetahui</span> apa yang dimaksud dengan dosa besar"</div>`, 'left:780px;top:240px', 205.5, 221.0, 'up', 'paper');
crd(`<div style="display:flex;gap:24px;align-items:center;font:900 40px Inter"><span style="border:4px solid #fff;border-radius:14px;padding:12px 22px">📖 belajar</span><span style="color:${Y}">→</span><span style="border:4px solid ${Y};border-radius:14px;padding:12px 22px;color:${Y}">🛑 menjauhi</span></div>`, 'left:780px;top:620px', 213.5, 221.0, 'up', 'beep');

// --- 12 /warning : dosa kecil terus-menerus
scene(221.0, 231.0, { cut: 'glitch' });
line(221.1, 231.0, 'left:160px;top:140px;width:1600px', 'dosa kecil yang dianggap [enteng & remeh] · dikerjakan terus-menerus…', { fs: 46, m: [223.5] });
[0, 1, 2, 3, 4, 5].forEach(i => crd(`<div style="width:${70 + i * 34}px;height:${70 + i * 34}px;border-radius:50%;background:${i < 5 ? 'rgba(255,138,92,.2)' : 'rgba(255,90,60,.4)'};border:4px solid ${CR}"></div>`, `left:${180 + i * 210}px;top:${560 - i * 17}px`, 224.5 + i * .6, 231.0, 'scale', 'tick'));
crd(pill('⚠ BERUBAH MENJADI DOSA BESAR', CR), 'left:900px;top:860px', 228.5, 231.0, 'scale', 'impact');

// --- 13 /scale-compare : berapa jumlahnya?
scene(231.0, 252.0, { cut: 'glitch' });
label('BERAPA JUMLAH DOSA BESAR?', 231.1, 'left:160px;top:130px', 252.0);
xcard('🗣️', 'Rasulullah ﷺ tidak merinci jumlahnya', 231.5, 252.0, 'left:160px;top:200px');
crd(`<div style="width:500px;height:250px;border:4px solid ${CR};border-radius:18px;padding:22px;text-align:center"><div style="font-size:70px">📖</div><div style="font:900 34px Inter">Al-Qur'an</div><div style="font:800 26px Inter;color:${CR}">tidak menyebut angkanya</div></div>`, 'left:710px;top:200px', 239.5, 252.0, 'up', 'tick');
['puluhan?', 'ratusan?', 'ribuan?'].forEach((s, i) => crd(`<div style="font:900 50px Inter;text-decoration:line-through;text-decoration-color:${CR}">${s}</div>`, `left:${160 + i * 360}px;top:540px`, 243.3 + i * .8, 252.0, 'drop', 'tick'));
crd(`<div style="display:flex;gap:30px;align-items:flex-end"><div style="width:240px;height:220px;border:5px solid ${CR};border-radius:14px;text-align:center;padding-top:80px;font:900 40px Inter;color:${CR}">BESAR</div><div style="width:240px;height:110px;border:5px solid ${Y};border-radius:14px;text-align:center;padding-top:26px;font:900 40px Inter;color:${Y}">KECIL</div><div style="font:900 34px Inter;width:520px;padding-bottom:20px">hanya ditunjukkan: ada dosa besar & ada yang kecil</div></div>`, 'left:160px;top:700px', 247.5, 252.0, 'up', 'stamp');

// --- 14 /roadmap : ijtihad ulama
scene(252.0, 269.0, { cut: 'glitch' });
sv(252.1, 269.0, DEFS + `<path d="M200 520 H1720" stroke="#fff" stroke-width="5" stroke-dasharray="20 14" data-d="1520" data-dur="1.4"/>` +
  [['👥', 'para sahabat', 400, .4], ['📜', "para tabi'in", 960, 1.2], ['🎓', 'para ulama', 1520, 2.0]].map(([e, s, x, d]) => `<circle cx="${x}" cy="520" r="90" fill="#000" stroke="${Y}" stroke-width="6" data-f="${d}"/>` + T(x, 545, e, { f: d, fs: 80 }) + T(x, 670, s, { f: d + .2, fs: 40, fw: 900, c: Y })).join(''), 'left:0;top:0', 1920, 1080, .8);
line(256.0, 269.0, 'left:160px;top:160px;width:1600px', 'mencurahkan [pikiran & seluruh kemampuan] meneliti golongan dosa besar', { fs: 44, m: [259.0] });
crd(pill('🔍 agar kita tahu → tinggalkan & jauhi', Y), 'left:560px;top:800px', 264.0, 269.0, 'scale', 'beep');

// --- 15 /checklist : meninggalkan rukun Islam
scene(269.0, 298.0, { cut: 'glitch' });
label('YANG JELAS DOSA BESAR · MENINGGALKAN RUKUN ISLAM', 269.1, 'left:160px;top:130px', 298.0);
[['☝️', 'tak mau bersyahadat', 'jelas kafir', 275.0, CR], ['🕌', 'meninggalkan salat', 'dosa besar', 280.0, Y], ['🌙', 'tak puasa Ramadan tanpa uzur', 'dosa besar', 282.2, Y], ['💰', 'tak bayar zakat padahal wajib', 'dosa besar', 287.0, Y], ['🕋', 'tak berhaji padahal mampu', 'dosa besar', 295.0, Y]].forEach(([e, s, k, t, c], i) => crd(`<div style="width:1600px;display:flex;align-items:center;gap:24px;border-left:10px solid ${c};background:rgba(255,255,255,.04);padding:12px 24px"><span style="font:900 30px 'DejaVu Sans Mono';color:${c}">0${i + 1}</span><span style="font-size:50px">${e}</span><span style="font:900 38px Inter;flex:1">${s}</span><span style="font:900 30px Inter;color:#111;background:${c};border-radius:10px;padding:6px 16px">${k}</span></div>`, `left:160px;top:${200 + i * 140}px`, t, 298.0, 'left', 'tick'));

// --- 16 /bar-chart : 70 atau 700
scene(298.0, 315.0, { cut: 'glitch' });
label("IBNU 'ABBAS RADHIYALLAHU 'ANHUMA · JUMLAH DOSA BESAR", 298.1, 'left:160px;top:130px', 315.0);
sv(298.2, 315.0, `<path d="M200 820 H1720" stroke="#fff" stroke-width="4" data-d="1520"/>` +
  `<rect x="320" y="700" width="220" height="120" fill="rgba(233,242,58,.25)" stroke="${Y}" stroke-width="5" data-f=".4"/>` + T(430, 680, '70', { f: .5, fs: 70, fw: 900, c: Y }) + T(430, 870, 'tujuh puluh', { f: .6, fs: 30, fw: 900 }) +
  `<rect x="760" y="260" width="220" height="560" fill="rgba(255,138,92,.2)" stroke="${CR}" stroke-width="5" data-f="5.0"/>` + T(870, 240, '700', { f: 5.1, fs: 70, fw: 900, c: CR }) + T(870, 870, 'bahkan 700', { f: 5.2, fs: 30, fw: 900 }) +
  `<rect x="1200" y="520" width="220" height="300" fill="none" stroke="#fff" stroke-width="5" stroke-dasharray="14 10" data-f="7.0"/>` + T(1310, 690, '?', { f: 7.1, fs: 90, fw: 900 }) + T(1310, 870, 'tak dihitung', { f: 7.2, fs: 30, fw: 900 }), 'left:0;top:0', 1920, 1080, .8);
crd(pill('✓ tapi diberi KRITERIA & ciri-cirinya', Y), 'left:1180px;top:930px', 311.0, 315.0, 'scale', 'beep');

// --- 17 /formula : kriteria dosa besar
scene(315.0, 324.0, { cut: 'glitch' });
label('KRITERIA DOSA BESAR · MENURUT PARA ULAMA', 315.1, 'left:160px;top:130px', 324.0);
paper(315.2, 'left:160px;top:200px;width:1600px;height:260px', '', 324.0);
arw(node('الْكَبِيرَةُ مَا فِيهَا [حَدٌّ] أَوْ [وَعِيدٌ] أَوْ [لَعْنٌ] أَوْ تَبَرُّؤٌ أَوْ لَيْسَ مِنَّا أَوْ نَفْيُ إِيمَانٍ', 'left:220px;width:1480px;top:240px;text-align:center;font-size:58px;line-height:1.75;color:#151515'), 315.4, 7.5, { marks: [318.0] });
line(320.5, 324.0, 'left:160px;top:520px;width:1600px', 'dosa besar = ada [salah satu] dari 6 tanda ini ⬇', { fs: 46, m: [321.6] });

// --- 18 /decision-matrix : 6 tanda
scene(324.0, 368.0, { cut: 'glitch' });
[['حَدٌّ', '⚖️ ada hukuman dunia', Y, 324.2], ['وَعِيدٌ', '🔥 diancam neraka', CR, 332.0], ['لَعْنٌ', '⛔ dilaknat Allah', CR, 342.0], ['تَبَرُّؤٌ', '🙅 Nabi ﷺ berlepas diri', CB, 347.0], ['لَيْسَ مِنَّا', '🚫 "bukan golongan kami"', CB, 356.0], ['نَفْيُ إِيمَانٍ', '💔 "tidak beriman"', '#fff', 359.5]].forEach(([ar, s, c, t], i) => crd(crit(ar, s, c), `left:${160 + (i % 3) * 540}px;top:${190 + Math.floor(i / 3) * 250}px`, t, 368.0, 'scale', 'stamp'));
crd(pill('✓ ada satu saja → itu DOSA BESAR', Y), 'left:600px;top:760px', 363.5, 368.0, 'scale', 'impact');

// --- 19 /stamp : zina
scene(368.0, 406.0, { cut: 'glitch' });
label('CONTOH 01 · مَا فِيهَا حَدٌّ · ADA HUKUMAN DUNIA', 368.1, 'left:160px;top:130px', 406.0);
crd(`<div style="width:540px;height:300px;border:6px solid ${CR};border-radius:20px;text-align:center;padding-top:44px;background:rgba(255,138,92,.08)"><div class="ar" style="font-size:90px;color:${CR}">الزِّنَا</div><div style="font:900 44px Inter">BERZINA</div></div>`, 'left:160px;top:200px', 371.0, 406.0, 'scale', 'stamp');
xcard('🙏', 'amal ibadah TIDAK menghapusnya', 377.0, 406.0, 'left:760px;top:200px');
crd(`<div style="width:500px;height:250px;border:4px solid ${CG};border-radius:18px;padding:22px;text-align:center;background:rgba(127,224,160,.06)"><div style="font-size:70px">🤲</div><div style="font:900 34px Inter;color:${CG}">TAUBAT sungguh-sungguh</div><div style="font:800 26px Inter">+ menjauhinya</div></div>`, 'left:1300px;top:200px', 384.0, 406.0, 'up', 'tick');
crd(vcard(1600, CR, `<div class="mono" style="font-size:22px;color:${CR}">⚠ NASIHAT PENYAMPAI</div><div style="font:900 40px Inter;margin-top:8px;line-height:1.3">"zina itu <span style="color:${CR}">hutang</span> · jangan main-main" · menganggap remeh & tak bertaubat → <span style="color:${Y}">keturunan bisa menanggungnya</span></div>`, 'rgba(255,138,92,.05)'), 'left:160px;top:560px', 393.0, 406.0, 'up', 'impact');

// --- 20 /process : mencuri & syarat taubat
scene(406.0, 426.0, { cut: 'glitch' });
label('CONTOH 02 · وَالسَّرِقَةُ · MENCURI', 406.1, 'left:160px;top:130px', 426.0);
crd(`<div style="width:540px;height:300px;border:6px solid ${CR};border-radius:20px;text-align:center;padding-top:44px;background:rgba(255,138,92,.08)"><div class="ar" style="font-size:90px;color:${CR}">السَّرِقَةُ</div><div style="font:900 44px Inter">MENCURI</div></div>`, 'left:160px;top:200px', 406.5, 426.0, 'scale', 'stamp');
crd(`<div style="font:900 40px Inter;line-height:1.3;width:1000px">tetap tercatat di <span style="color:${CR}">catatan amal buruk</span> · sebelum bertaubat dengan <span style="color:${Y}">taubat yang sebenar-benarnya</span></div>`, 'left:760px;top:230px', 409.0, 426.0, 'left', 'tick');
label('SYARAT-SYARAT TAUBAT', 417.0, 'left:160px;top:560px', 426.0);
[['🛑', 'berhenti'], ['😔', 'menyesal'], ['✊', 'bertekad tak mengulang'], ['↩️', 'kembalikan hak orang']].forEach(([e, s], i) => crd(`<div style="width:380px;height:190px;border:4px solid ${CG};border-radius:18px;text-align:center;padding-top:22px"><div style="font-size:64px">${e}</div><div style="font:900 30px Inter;color:${CG}">${s}</div></div>`, `left:${160 + i * 410}px;top:610px`, 417.5 + i * .7, 426.0, 'up', 'tick'));

// --- 21 /versus : qadzf
scene(426.0, 443.0, { cut: 'glitch' });
label('CONTOH 03 · قَذْفُ الْمُحْصَنَاتِ · MENUDUH ZINA', 426.1, 'left:160px;top:130px', 443.0);
crd(`<div style="width:760px;height:420px;border:5px solid ${CG};border-radius:20px;text-align:center;padding-top:50px"><div style="font-size:100px">😇</div><div style="font:900 40px Inter;color:${CG};margin-top:10px">orang baik-baik</div><div style="font:800 30px Inter;margin-top:10px">tidak pernah melakukannya</div></div>`, 'left:160px;top:200px', 428.0, 443.0, 'left', 'tick');
crd(`<div style="width:760px;height:420px;border:5px solid ${CR};border-radius:20px;text-align:center;padding-top:50px;background:rgba(255,138,92,.06)"><div style="font-size:100px">🗣️</div><div style="font:900 40px Inter;color:${CR};margin-top:10px">dituduh berzina</div><div class="ar" style="font-size:54px;margin-top:6px">كَذَّابٌ · pendusta</div></div>`, 'left:1000px;top:200px', 431.0, 443.0, 'up', 'impact');
crd(pill('⚠ menuduh tanpa bukti = DOSA BESAR', CR), 'left:560px;top:720px', 439.5, 443.0, 'scale', 'beep');

// --- 22 /alert : membunuh
scene(443.0, 456.0, { cut: 'glitch' });
label('CONTOH 04 · وَالْقَتْلُ · MEMBUNUH', 443.1, 'left:160px;top:130px', 456.0);
crd(`<div style="width:1600px;border:6px solid ${CR};border-radius:20px;padding:30px 40px;background:rgba(255,138,92,.08);text-align:center"><div style="font:900 64px Inter;color:${CR}">⛔ MEMBUNUH DENGAN SENGAJA</div><div style="font:900 38px Inter;margin-top:10px">secara berencana · jelas dosa besar</div></div>`, 'left:160px;top:200px', 443.5, 456.0, 'scale', 'impact');
[['🌍', 'hukuman di DUNIA', 448.5], ['🔥', 'hukuman berat di AKHIRAT', 450.0]].forEach(([e, s, t], i) => crd(`<div style="width:760px;height:200px;border:4px solid #fff;border-radius:18px;text-align:center;padding-top:22px"><div style="font-size:70px">${e}</div><div style="font:900 34px Inter">${s}</div></div>`, `left:${160 + i * 840}px;top:520px`, t, 456.0, 'up', 'tick'));
crd(`<div style="font:900 34px Inter;color:${Y}">…itu baru contoh kecil dosa besar</div>`, 'left:160px;top:800px', 453.2, 456.0, 'up', 'beep');

// --- 23 /callout : wa'id
scene(456.0, 469.0, { cut: 'glitch' });
crd(`<div class="ar" style="font-size:110px;color:${CR};text-align:center;width:1600px">أَوْ وَعِيدٌ</div>`, 'left:160px;top:160px', 456.1, 469.0, 'scale', 'stamp');
crd(vcard(760, CR, `<div style="font-size:70px">🚪✕</div><div style="font:900 38px Inter">diancam <span style="color:${CR}">tidak masuk surga</span></div>`), 'left:160px;top:420px', 459.0, 469.0, 'left', 'tick');
crd(vcard(760, CR, `<div style="font-size:70px">🔥</div><div style="font:900 38px Inter">diancam <span style="color:${CR}">masuk neraka</span></div>`), 'left:1000px;top:420px', 463.5, 469.0, 'up', 'tick');

// --- 24 /search : hadis surga berbicara
scene(469.0, 489.0, { cut: 'glitch', light: 1 });
searchFind(469.0, 489.0, {
  q: 'إن الله لما خلق الجنة قال لها تكلمي قالت سعد من دخلني', count: 4, pick: 0, shelfPick: 0, times: { type: .4, scan: 2.2, res: 3.4, click: 4.6, det: 5.2 },
  shelf: [["Takhrij Ahadits al-Ihya' · al-'Iraqi", 'المغني عن حمل الأسفار'], ["Ihya' 'Ulum ad-Din · al-Ghazali", 'إحياء علوم الدين'], ['Tanbih al-Ghafilin · as-Samarqandi', 'تنبيه الغافلين'], ['Shahih Muslim', 'صحيح مسلم']],
  results: [
    { title: "al-Mughni 'an Haml al-Asfar · al-'Iraqi · hlm. 1048", tag: 'TAKHRIJ', ar: 'لَمَّا خَلَقَ الْجَنَّةَ قَالَ لَهَا تَكَلَّمِي', sub: "hadis Ibnu 'Umar · dinilai" },
    { title: "Ihya' 'Ulum ad-Din · j. 3 hlm. 155", tag: 'NUKILAN', ar: 'سَعِدَ مَنْ دَخَلَنِي', sub: 'dibawakan al-Ghazali' },
    { title: 'Tanbih al-Ghafilin · as-Samarqandi · hlm. 172', tag: 'NUKILAN', ar: 'لَا يَسْكُنُ فِيكِ ثَمَانِيَةُ نَفَرٍ', sub: 'riwayat yang sama' },
    { title: 'Shahih Muslim & Bukhari (makna sebagian)', tag: 'PENGUAT', ar: 'لَا يَدْخُلُ الْجَنَّةَ قَتَّاتٌ', sub: 'sebagian golongan punya hadis shahih' }],
  det: { title: 'Hadis: surga berbicara', ar: 'قَالَ لَهَا تَكَلَّمِي', rows: [['ALLAH', '"bicaralah engkau, wahai surga"'], ['SURGA', '"bahagialah yang masuk kepadaku"'], ['ALLAH', '"tak akan tinggal di dalammu 8 golongan"'], ['DINUKIL', "Ihya' · Tanbih al-Ghafilin"], ['AL-\'IRAQI', 'tak menemukannya selengkap ini'], ['DERAJAT', 'lemah · sebagian makna shahih']], quote: 'سَعِدَ مَنْ دَخَلَنِي' }
});
camTour(469.0, 489.0, { type: .4, scan: 2.2, res: 3.4, click: 4.6, det: 5.2 });

// --- 25 /mosaic : 8 golongan
scene(489.0, 514.0, { cut: 'glitch' });
arw(node('لَا يَسْكُنُ فِيكِ [ثَمَانِيَةُ] نَفَرٍ مِنَ النَّاسِ', 'left:160px;top:130px;width:1600px;text-align:center;font-size:58px;color:#fff'), 489.1, 2.6, { marks: [490.5] });
label("8 GOLONGAN · SEBAGAIMANA DINUKIL DALAM IHYA'", 490.0, 'left:160px;top:240px', 514.0);
[['🍶', 'pecandu khamr'], ['🔁', 'terus-menerus berzina'], ['🗣️', 'tukang adu domba'], ['🙈', 'dayyuts'], ['👮', 'aparat zalim'], ['🎭', 'menyerupai lawan jenis'], ['✂️', 'pemutus silaturahmi'], ['🤝', 'ingkar janji kepada Allah']].forEach(([e, s], i) => crd(`<div style="width:380px;height:190px;border:4px solid ${CR};border-radius:18px;text-align:center;padding-top:20px;background:#000"><div style="font-size:62px">${e}</div><div style="font:900 28px Inter;margin-top:4px">${s}</div></div>`, `left:${160 + (i % 4) * 410}px;top:${300 + Math.floor(i / 4) * 220}px`, 494.5 + i * .5, 514.0, 'scale', 'tick'));
crd(pill('salah satu saja → diancam tak masuk surga → DOSA BESAR', CR), 'left:300px;top:790px', 506.0, 514.0, 'scale', 'impact');

// --- 26 /shield : taubat
scene(514.0, 527.0, { cut: 'glitch' });
sv(514.1, 527.0, `<path d="M960 170 L1220 260 V500 Q1220 700 960 820 Q700 700 700 500 V260 Z" fill="rgba(127,224,160,.08)" stroke="${CG}" stroke-width="7" data-d="1700" data-dur="1.2"/>` + T(960, 470, '🤲', { f: .6, fs: 130 }) + T(960, 640, 'TAUBAT', { f: .9, fs: 64, fw: 900, c: CG }), 'left:0;top:0', 1920, 1080, .8);
crd(`<div style="font:900 36px Inter;width:520px;line-height:1.3">dosa besar hanya terhapus dengan <span style="color:${CG}">taubat sungguh-sungguh</span> & meninggalkannya</div>`, 'left:160px;top:300px', 515.0, 527.0, 'left', 'tick');
crd(`<div style="font:900 36px Inter;width:520px;line-height:1.3">apa pun dosanya · <span style="color:${Y}">Allah Maha Pengampun</span> 🤍</div>`, 'left:1260px;top:340px', 522.5, 527.0, 'left', 'beep');

// --- 27 /handwritten : penutup penyampai
scene(527.0, 540.0, { cut: 'glitch' });
mePol('left:200px;top:200px', 527.1, 540.0, -4, 380);
crd(`<div style="font:700 56px/1.35 Kalam;color:#fff8d0;width:1000px">"kita kurang sehat hari ini · <span style="color:${Y}">mohon ampun, mohon maaf</span> dunia akhirat"</div>`, 'left:760px;top:230px', 527.3, 540.0, 'up', 'paper');
crd(pill('⏭ insyaallah dilanjutkan di lain kesempatan', '#fff'), 'left:760px;top:620px', 534.5, 540.0, 'scale', 'tick');

// --- 28 /teaser : tahlil & doa
scene(540.0, TOTAL, { cut: 'hard' });
arw(node('أَفْضَلُ الذِّكْرِ فَاعْلَمْ أَنَّهُ [لَا إِلَٰهَ إِلَّا اللَّهُ]', 'left:160px;top:150px;width:1600px;text-align:center;font-size:66px;color:#fff'), 540.2, 4.0, { marks: [543.0] });
arw(node('لَا إِلَٰهَ إِلَّا اللَّهُ مُحَمَّدٌ رَسُولُ اللَّهِ ﷺ', 'left:160px;top:290px;width:1600px;text-align:center;font-size:66px;color:' + Y), 550.0, 5.0);
arw(node('كَلِمَةُ حَقٍّ عَلَيْهَا نَحْيَا وَعَلَيْهَا نَمُوتُ وَعَلَيْهَا نُبْعَثُ إِنْ شَاءَ اللَّهُ مِنَ الْآمِنِينَ', 'left:160px;top:440px;width:1600px;text-align:center;font-size:50px;color:#fff'), 561.0, 8.0);
sub2('left:560px;top:700px', 566.0, TOTAL);

// ================================================================== JADWAL KODE VISUAL
[[0, 9.0, '/kinetic-type'], [9.0, 31.0, '/badge'], [31.0, 67.0, '/mindmap'], [67.0, 83.0, '/citation'], [83.0, 97.0, '/search'], [97.0, 101.0, '/mosaic'], [101.0, 118.0, '/scripture'], [118.0, 152.0, '/flowchart'], [152.0, 164.0, '/citation'], [164.0, 204.0, '/cycle'],
 [204.0, 221.0, '/quote'], [221.0, 231.0, '/warning'], [231.0, 252.0, '/scale-compare'], [252.0, 269.0, '/roadmap'], [269.0, 298.0, '/checklist'], [298.0, 315.0, '/bar-chart'], [315.0, 324.0, '/formula'], [324.0, 368.0, '/decision-matrix'],
 [368.0, 406.0, '/layers'], [406.0, 426.0, '/process'], [426.0, 443.0, '/versus'], [443.0, 456.0, '/alert'], [456.0, 469.0, '/callout'], [469.0, 489.0, '/search'], [489.0, 514.0, '/mosaic'], [514.0, 527.0, '/shield'], [527.0, 540.0, '/handwritten'], [540.0, TOTAL, '/teaser']]
 .reduce((acc, [a, b, c]) => { if (!acc.m[c]) acc.m[c] = String(++acc.n).padStart(2, '0'); codeTag(a, b, acc.m[c], c); return acc; }, { n: 0, m: {} });
