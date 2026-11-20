// ================================================================== ADEGAN EPISODE 21 · Yakin Akhirat & Husnul Khatimah
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

// --- 01 /kinetic-type : pembuka
scene(0, 4.7, { cut: 'none' });
arw(node(BSM, 'left:140px;top:120px;width:1000px;font-size:58px;color:#fff;text-align:left'), .1, 1.0);
label('FILE 21 · KUNCI KE-5 DARI 5', .3, 'left:140px;top:260px');
seg('Yakin Akhirat &<br>[Husnul Khatimah]', .6, 'left:140px;top:310px;width:1100px', { size: 92, iv: .04, marks: [2.6] });
mePol('left:1300px;top:150px', .2, 4.7, 4, 400);
meTag(.8, 4.7, 'الْيَقِينُ بِالْآخِرَةِ');

// --- 02 /badge : kunci ke-5
scene(4.7, 12.6, { cut: 'glitch' });
[['01', 'ghaib'], ['02', 'salat'], ['03', 'infak'], ['04', 'kitab'], ['05', 'yakin akhirat']].forEach(([n, s], i) => crd(`<div style="width:300px;height:220px;border:4px solid ${i === 4 ? Y : '#fff'};border-radius:18px;text-align:center;padding-top:28px;background:${i === 4 ? 'rgba(233,242,58,.10)' : 'transparent'};opacity:${i === 4 ? 1 : .5}"><div style="font:900 64px 'DejaVu Sans Mono';color:${i === 4 ? Y : '#fff'}">${n}</div><div style="font:900 30px Inter;margin-top:8px">${s}</div><div style="font:900 30px Inter;color:${CG}">${i < 4 ? '✓' : '🔑'}</div></div>`, `left:${140 + i * 330}px;top:200px`, 4.8 + i * .3, 12.6, 'up', 'tick'));
crd(`<div style="text-align:center"><div class="ar" style="font-size:90px;color:${Y}">الْيَقِينُ بِالْآخِرَةِ</div><div style="font:900 40px Inter">yakin kepada hari akhirat</div></div>`, 'left:460px;top:560px;width:1000px', 6.6, 12.6, 'scale', 'stamp');

// --- 03 /venn : yakin = iman plus
scene(12.6, 31.7, { cut: 'glitch' });
line(12.7, 31.7, 'left:140px;top:130px;width:1640px', 'apa makna yakin? · ada [sedikit perbedaan] dengan iman', { fs: 44, m: [15.0] });
sv(16.9, 31.7, `<circle cx="700" cy="580" r="330" fill="rgba(127,214,255,.08)" stroke="${CB}" stroke-width="6" data-f="0"/>` + T(700, 330, 'IMAN', { f: .2, fs: 50, fw: 900, c: CB }) +
  `<circle cx="760" cy="640" r="170" fill="rgba(233,242,58,.16)" stroke="${Y}" stroke-width="6" data-f="7.6"/>` + T(760, 625, 'YAKIN', { f: 7.8, fs: 50, fw: 900, c: Y }) + T(760, 680, 'iman PLUS', { f: 8.2, fs: 32, fw: 900 }), 'left:0;top:0', 1920, 1080, .6);
crd(`<div><div class="mono" style="font-size:22px;color:${Y}">AL-IMAM SAHL BIN 'ABDULLAH AT-TUSTARI</div><div class="ar" style="font-size:64px;color:${Y};margin-top:6px">الْإِيمَانُ مَعَ زِيَادَةٍ</div></div>`, 'left:1160px;top:260px', 17.5, 31.7, 'left', 'stamp');
crd(`<div style="font:900 32px Inter;line-height:1.45">beriman → <span style="color:${CR}">belum tentu</span> yakin<br>yakin → <span style="color:${CG}">pasti</span> beriman</div>`, 'left:1160px;top:560px', 25.1, 31.7, 'up', 'tick');

// --- 04 /roadmap : perjalanan akhirat
scene(31.7, 59.2, { cut: 'glitch' });
line(31.8, 45.0, 'left:140px;top:130px;width:1640px', 'yakin akhirat → bersungguh-sungguh [menyiapkan bekal] alam kubur', { fs: 42, m: [40.0] });
crd(`<div style="text-align:center;border:4px solid ${Y};border-radius:18px;padding:12px 30px;background:#000"><div class="ar" style="font-size:54px;color:${Y}">الْقَبْرُ أَوَّلُ مَنْزِلٍ مِنْ مَنَازِلِ الْآخِرَةِ</div><div style="font:800 28px Inter">kubur: tempat pertama dari tempat-tempat akhirat</div></div>`, 'left:360px;top:210px', 45.1, 59.2, 'scale', 'stamp');
sv(46.0, 59.2, DEFS + `<path d="M180 720 C 480 600, 760 820, 1060 700 S 1560 600, 1760 680" fill="none" stroke="#fff" stroke-width="6" stroke-dasharray="20 14" data-d="1800" data-dur="1.6"/>` +
  [['🪦', 'kubur', 240, 690, 0], ['🌫️', 'padang mahsyar', 600, 720, 6.8], ['⚖️', 'mizan', 960, 740, 7.6], ['〰️', 'sirat', 1320, 660, 8.6], ['🌴🔥', 'surga · neraka', 1700, 670, 10.0]].map(([e, s, x, y, d], i) => `<circle cx="${x}" cy="${y}" r="52" fill="#000" stroke="${i ? '#fff' : Y}" stroke-width="5" data-f="${d}"/>` + T(x, y + 16, e, { f: d, fs: i === 4 ? 34 : 46 }) + T(x, y + (i % 2 ? -80 : 110), s, { f: d + .2, fs: 30, fw: 900, c: i ? '#fff' : Y })).join(''), 'left:0;top:0', 1920, 1080, 1.0);

// --- 05 /spectrum : yakin kuat · lemah
scene(59.2, 73.4, { cut: 'glitch' });
arw(node('يَقْتَضِي [الْقُوَّةَ] وَالطَّاعَةَ', 'left:140px;width:1640px;top:150px;text-align:center;font-size:76px;color:#fff'), 59.3, 3.0, { marks: [61.0] });
(() => { let g = `<defs><linearGradient id="yq21" x1="0" x2="1"><stop offset="0" stop-color="${CR}"/><stop offset=".55" stop-color="${Y}"/><stop offset="1" stop-color="${CG}"/></linearGradient></defs><rect x="200" y="440" width="1520" height="36" rx="18" fill="url(#yq21)" data-f=".1"/>`;
  g += T(360, 560, 'lemah', { f: .3, fs: 36, fw: 900, c: CR }) + T(1560, 560, 'kuat', { f: .5, fs: 36, fw: 900, c: CG }) + T(960, 560, 'seperti iman juga', { f: .8, fs: 30, fw: 800 });
  sv(62.6, 73.4, g, 'left:0;top:0', 1920, 1080, .5); })();
crd(pill('intinya: TIDAK RAGU · pasti masuk alam kubur 🪦', Y), 'left:420px;top:720px', 65.4, 73.4, 'scale', 'impact');

// --- 06 /citation : Al-Mu'minun 15-16
scene(73.4, 90.8, { cut: 'glitch' });
paper(73.5, 'left:160px;top:180px;width:1600px;height:400px', '', 90.8);
arw(node('ثُمَّ إِنَّكُمْ بَعْدَ ذَٰلِكَ [لَمَيِّتُونَ] ۝ ثُمَّ إِنَّكُمْ يَوْمَ الْقِيَامَةِ [تُبْعَثُونَ]', 'left:220px;width:1480px;top:240px;text-align:center;font-size:70px;line-height:1.8;color:#151515'), 73.6, 12.0, { marks: [78.0, 85.5] });
chip("QS. AL-MU'MINUN : 15–16", 73.8, 'left:160px;top:610px', 90.8, Y);
line(80.1, 90.8, 'left:160px;top:710px;width:1600px', 'kamu pasti [mati] · lalu [dibangkitkan] dari kubur pada hari kiamat', { fs: 40, m: [81.5, 88.0] });

// --- 07 /citation : Al-Hajj 7
scene(90.8, 105.1, { cut: 'glitch' });
paper(90.9, 'left:160px;top:180px;width:1600px;height:400px', '', 105.1);
arw(node('وَأَنَّ السَّاعَةَ آتِيَةٌ [لَا رَيْبَ فِيهَا] وَأَنَّ اللَّهَ يَبْعَثُ مَنْ فِي الْقُبُورِ', 'left:220px;width:1480px;top:240px;text-align:center;font-size:68px;line-height:1.8;color:#151515'), 91.0, 5.6, { marks: [93.0] });
chip('QS. AL-HAJJ : 7', 91.2, 'left:160px;top:610px', 105.1, Y);
line(96.7, 105.1, 'left:160px;top:710px;width:1600px', 'kiamat pasti datang · [tidak ada keraguan] padanya', { fs: 40, m: [99.5] });

// --- 08 /citation : Adh-Dhuha 4
scene(105.1, 111.0, { cut: 'glitch' });
paper(105.2, 'left:160px;top:200px;width:1600px;height:300px', '', 111.0);
arw(node('وَلَلْآخِرَةُ [خَيْرٌ لَكَ] مِنَ الْأُولَىٰ', 'left:220px;width:1480px;top:260px;text-align:center;font-size:90px;line-height:1.6;color:#151515'), 105.3, 2.4, { marks: [106.6] });
chip('QS. ADH-DHUHA : 4', 105.4, 'left:160px;top:530px', 111.0, Y);
line(107.9, 111.0, 'left:160px;top:630px;width:1600px', 'akhirat [lebih baik] daripada dunia', { fs: 42, m: [109.0] });

// --- 09 /flowchart : cek diri
scene(111.0, 150.0, { cut: 'glitch' });
line(111.1, 121.0, 'left:140px;top:130px;width:1640px', 'kalau yakin kuat → mesti [bersungguh-sungguh] menyiapkan bekal kubur', { fs: 40, m: [115.0] });
sv(121.0, 150.0, DEFS + BOX(760, 240, 400, 120, { s: Y, sw: 5 }) + T(960, 315, '🤔 YAKIN?', { f: 1.4, fs: 44, fw: 900, c: Y }) +
  '<g data-f="3.0">' + LN([[860, 360], [520, 460]], { s: CR, sw: 5, arrow: 1 }) + '</g>' + BOX(240, 470, 560, 140, { s: CR, sw: 5, del: 3.1 }) + T(520, 530, '✕ TIDAK', { f: 3.2, fs: 38, fw: 900, c: CR }) + T(520, 580, 'ini masalah', { f: 3.4, fs: 28, fw: 800 }) +
  '<g data-f="5.0">' + LN([[1060, 360], [1400, 460]], { s: CG, sw: 5, arrow: 1 }) + '</g>' + BOX(1120, 470, 560, 140, { s: CG, sw: 5, del: 5.1 }) + T(1400, 530, '✓ YAKIN', { f: 5.2, fs: 38, fw: 900, c: CG }) + T(1400, 580, 'seberapa yakin? kuat atau lemah?', { f: 5.6, fs: 26, fw: 800 }) +
  '<g data-f="7.6">' + LN([[1400, 610], [1400, 700]], { s: CG, sw: 5, arrow: 1 }) + '</g>' + BOX(1080, 710, 640, 150, { s: CG, sw: 5, del: 7.7 }) + T(1400, 770, 'KUAT · alhamdulillah', { f: 7.8, fs: 34, fw: 900, c: CG }) + T(1400, 820, 'bekal kubur sudah disiapkan', { f: 8.4, fs: 26, fw: 800 }), 'left:0;top:0', 1920, 1080, .6);
crd(vcard(760, Y, `<div style="font:900 34px Inter;line-height:1.35">mesti disiapkan <span class="mk">dari sekarang</span> · jangan lengah · jangan lalai</div>`), 'left:160px;top:700px', 141.0, 150.0, 'up', 'impact');

// --- 10 /callout : tu'allamul yaqin
scene(150.0, 161.5, { cut: 'glitch' });
crd(`<div style="width:1560px;border:5px solid ${Y};border-radius:20px;padding:26px 40px;background:rgba(233,242,58,.06);text-align:center"><div class="mono" style="font-size:24px;color:${Y}">SABDA RASULULLAH ﷺ</div><div class="ar" style="font-size:110px;margin-top:6px;color:${Y}">تَعَلَّمُوا الْيَقِينَ</div><div style="font:900 40px Inter">pelajarilah yakin itu</div></div>`, 'left:180px;top:180px', 150.1, 161.5, 'scale', 'stamp');
crd(`<div style="display:flex;gap:30px;align-items:center"><div style="width:620px;border:4px solid ${CG};border-radius:18px;padding:16px 24px"><div style="font:900 34px Inter;color:${CG}">🔆 sedikit amal + yakin</div></div><div style="font:900 60px Inter;color:${Y}">&gt;</div><div style="width:620px;border:4px solid ${CR};border-radius:18px;padding:16px 24px"><div style="font:900 34px Inter;color:${CR}">📚 banyak amal + ragu</div></div></div>`, 'left:180px;top:620px', 155.3, 161.5, 'up', 'impact');

// --- 11 /diagram : jalisul muqinin
scene(161.5, 196.1, { cut: 'glitch' });
line(161.6, 166.9, 'left:140px;top:130px;width:1640px', 'seperti apa [belajar yakin] itu?', { fs: 46, m: [163.0] });
crd(`<div style="text-align:center"><div class="mono" style="font-size:22px;color:${Y}">PENJELASAN PARA ULAMA</div><div class="ar" style="font-size:70px;color:${Y}">جَالِسِ الْمُوقِنِينَ</div><div style="font:800 30px Inter">dudukilah orang-orang yang yakin</div></div>`, 'left:610px;top:200px;width:700px', 166.9, 196.1, 'scale', 'stamp');
sv(171.6, 196.1, `<circle cx="960" cy="640" r="70" fill="rgba(233,242,58,.25)" stroke="${Y}" stroke-width="5" data-f="0"/>` + T(960, 655, '🔆', { f: .1, fs: 54 }) + T(960, 750, 'orang yang kuat yakinnya', { f: .3, fs: 26, fw: 900, c: Y }) +
  [[620, 560], [1300, 560], [700, 820], [1220, 820]].map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="50" fill="#000" stroke="#fff" stroke-width="4" data-f="${2 + i * .4}"/>` + T(x, y + 16, '🙂', { f: 2 + i * .4, fs: 44 }) + `<path d="M${960 + (x - 960) * .35} ${640 + (y - 640) * .35} L${960 + (x - 960) * .7} ${640 + (y - 640) * .7}" stroke="${Y}" stroke-width="4" stroke-dasharray="6 8" data-f="${4 + i * .4}"/>`).join('') + T(960, 960, '"menjalar kepada kita"', { f: 4.0, fs: 30, fw: 900, c: CG }), 'left:0;top:0', 1920, 1080, .6);
[['📖 rajin belajar', 179.3], ['🕌 rajin ibadah', 181.0], ['🪞 memperbaiki diri', 182.6], ['⛔ menjauhi dosa', 185.4], ['🤲 minta pertolongan Allah', 187.7]].forEach(([s, t], i) => crd(`<div style="font:900 30px Inter;color:${CG}">${s}</div>`, `left:${i % 2 ? 1430 : 140}px;top:${470 + Math.floor(i / 2) * 120}px`, t, 196.1, i % 2 ? 'left' : 'up', 'tick'));
crd(pill('Allah tanamkan yakin di hati · insya Allah', Y), 'left:620px;top:1000px', 192.3, 196.1, 'scale', 'impact');

// --- 12 /citation : Al-Baqarah 5
scene(196.1, 220.3, { cut: 'glitch' });
line(196.2, 206.9, 'left:160px;top:130px;width:1600px', 'lima perkara itu = [bekal] orang yang beruntung dunia & akhirat', { fs: 42, m: [200.0] });
paper(206.8, 'left:160px;top:220px;width:1600px;height:340px', '', 220.3);
arw(node('أُولَٰئِكَ عَلَىٰ هُدًى مِنْ رَبِّهِمْ [وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ]', 'left:220px;width:1480px;top:290px;text-align:center;font-size:70px;line-height:1.7;color:#151515'), 206.9, 6.0, { marks: [210.5] });
chip('QS. AL-BAQARAH : 5', 207.1, 'left:160px;top:590px', 220.3, Y);
line(213.3, 220.3, 'left:160px;top:690px;width:1600px', 'merekalah yang di atas petunjuk · [sukses dunia & akhirat]', { fs: 40, m: [217.0] });

// --- 13 /citation : Ali Imran 185
scene(220.3, 252.0, { cut: 'glitch' });
paper(220.4, 'left:160px;top:150px;width:1600px;height:540px', '', 252.0);
arw(node('[كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ] وَإِنَّمَا تُوَفَّوْنَ أُجُورَكُمْ يَوْمَ الْقِيَامَةِ فَمَنْ زُحْزِحَ عَنِ النَّارِ وَأُدْخِلَ الْجَنَّةَ فَقَدْ فَازَ وَمَا الْحَيَاةُ الدُّنْيَا إِلَّا مَتَاعُ الْغُرُورِ', 'left:220px;width:1480px;top:190px;text-align:center;font-size:52px;line-height:1.8;color:#151515'), 222.0, 15.0, { marks: [224.0] });
chip("QS. ALI 'IMRAN : 185", 220.6, 'left:160px;top:720px', 252.0, Y);
line(237.2, 252.0, 'left:160px;top:810px;width:1600px', 'dijauhkan dari neraka & dimasukkan surga → [dialah yang beruntung]', { fs: 38, m: [246.0] });

// --- 14 /exploded-view : jam pasir kematian
scene(252.0, 264.9, { cut: 'glitch' });
(() => { const n = node(`<svg width="420" height="620" viewBox="0 0 420 620"><path d="M40 20 H380 M40 600 H380" stroke="${Y}" stroke-width="10" stroke-linecap="round"/><path d="M70 30 C70 220 200 260 210 310 C220 260 350 220 350 30 Z M70 590 C70 400 200 360 210 310 C220 360 350 400 350 590 Z" fill="none" stroke="#fff" stroke-width="6"/><path class="top" fill="${Y}" opacity=".8"/><path class="bot" fill="${Y}" opacity=".8"/><rect class="str" x="206" y="300" width="8" height="280" fill="${Y}"/></svg>`, 'left:200px;top:220px');
  item(252.0, 264.9, n, (lt, t, it) => { n.style.opacity = clamp(lt / .3) * clamp((it.t1 - t) / .3); const k = clamp(lt / 12); const ty = 60 + 230 * k; n.querySelector('.top').setAttribute('d', `M${70 + (ty - 30) * .35} ${ty} C${110} ${ty + 120 - k * 100} 200 260 210 310 C220 260 ${310} ${ty + 120 - k * 100} ${350 - (ty - 30) * .35} ${ty} Z`); const by = 590 - 260 * k; n.querySelector('.bot').setAttribute('d', `M80 590 C80 ${by + 40} 180 ${by} 210 ${by} C240 ${by} 340 ${by + 40} 340 590 Z`); n.querySelector('.str').style.opacity = k < .98 ? 1 : 0; }); sfx(252.0, 'whoosh', .6); })();
crd(`<div style="font:900 60px Inter;line-height:1.15">kematian <span class="mk">pasti</span> akan<br>bertamu kepada kita</div>`, 'left:760px;top:300px', 252.4, 264.9, 'left', 'stamp');
crd(`<div style="font:900 34px Inter;color:${CR}">⛔ tak ada jalan menghindar bila ajal sampai</div>`, 'left:760px;top:620px', 258.0, 264.9, 'up', 'beep');

// --- 15 /checklist : dalam keadaan apa?
scene(264.9, 306.9, { cut: 'glitch' });
line(264.95, 280.8, 'left:140px;top:130px;width:1640px', 'yang jadi masalah: datang kematian · kita dalam [keadaan apa]?', { fs: 42, m: [268.0] });
[['🕌', 'sedang salat?', CG, 280.8], ['📖', 'membaca Al-Qur\'an?', CG, 284.8], ['📿', 'berzikir?', CG, 289.1], ['⚠️', 'bermaksiat?', CR, 295.4], ['😶', 'lupa kepada Allah?', CR, 299.9]].forEach(([e, s, c, t], i) => crd(`<div style="width:300px;height:240px;border:4px solid ${c};border-radius:18px;text-align:center;padding-top:26px"><div style="font-size:76px">${e}</div><div style="font:900 28px Inter;color:${c};margin-top:8px">${s}</div></div>`, `left:${160 + i * 330}px;top:290px`, t, 306.9, 'drop', 'tick'));
crd(pill('inilah yang seharusnya kita risaukan · dengan apa kita sudahi hidup?', Y), 'left:200px;top:680px', 303.5, 306.9, 'scale', 'impact');

// --- 16 /split-screen : dua gerbang
scene(306.9, 329.4, { cut: 'glitch' });
sv(307.0, 329.4, `<defs><linearGradient id="gH21" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="rgba(127,224,160,.35)"/><stop offset="1" stop-color="rgba(127,224,160,.02)"/></linearGradient><linearGradient id="gS21" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="rgba(255,138,92,.35)"/><stop offset="1" stop-color="rgba(255,138,92,.02)"/></linearGradient></defs>` +
  `<path d="M300 900 V420 A260 260 0 0 1 820 420 V900" fill="url(#gH21)" stroke="${CG}" stroke-width="8" data-d="1900" data-dur="1.4"/>` + T(560, 560, '🌴', { f: 1.2, fs: 110 }) + T(560, 700, 'HUSNUL KHATIMAH', { f: 1.4, fs: 40, fw: 900, c: CG }) + T(560, 760, 'gerbang kebahagiaan', { f: 1.8, fs: 30, fw: 800 }) +
  `<path d="M1100 900 V420 A260 260 0 0 1 1620 420 V900" fill="url(#gS21)" stroke="${CR}" stroke-width="8" data-d="1900" data-dur="1.4" data-del="3.5"/>` + T(1360, 560, '🔥', { f: 4.8, fs: 110 }) + T(1360, 700, "SU'UL KHATIMAH", { f: 5.0, fs: 40, fw: 900, c: CR }) + T(1360, 760, 'gerbang kesengsaraan', { f: 5.4, fs: 30, fw: 800 }) +
  T(960, 990, 'kita belum tahu dari gerbang mana akan masuk ke akhirat…', { f: 11.6, fs: 34, fw: 900, c: Y }), 'left:0;top:0', 1920, 1080, 1.0);

// --- 17 /handwritten : sumpah Abu Darda
scene(329.4, 349.5, { cut: 'glitch' });
label("ABU AD-DARDA' RADHIYALLAHU 'ANHU BERSUMPAH", 329.5, 'left:160px;top:150px', 349.5);
crd(`<div style="width:1500px;border:3px dashed ${Y};border-radius:30px 30px 30px 4px;padding:30px 40px;font:700 52px/1.35 Kalam;color:#fff8d0">"Demi Allah… siapa yang merasa <span style="color:${Y}">aman dari su'ul khatimah</span>, dia pasti akan mati <span style="color:${CR}">su'ul khatimah</span>."</div>`, 'left:200px;top:240px', 338.6, 349.5, 'up', 'paper');
crd(`<div style="font:900 40px Inter">🤝 wallahi · sumpah demi Allah</div>`, 'left:200px;top:720px', 340.2, 349.5, 'up', 'stamp');

// --- 18 /decision-matrix : tidak risau · khawatir · khawatir+siap
scene(349.5, 383.8, { cut: 'glitch' });
crd(vcard(520, CR, `<div style="font:900 34px Inter;color:${CR}">😌 TIDAK RISAU</div><div style="font:800 28px Inter;margin-top:12px;line-height:1.4">tak khawatir · tak menyiapkan bekal</div><div style="font:900 30px Inter;margin-top:14px;color:${CR}">→ masih jauh dari husnul khatimah</div>`), 'left:140px;top:200px', 349.6, 383.8, 'up', 'stamp');
crd(vcard(520, CG, `<div style="font:900 34px Inter;color:${CG}">😟 KHAWATIR + BERSIAP</div><div style="font:800 28px Inter;margin-top:12px;line-height:1.4">khawatir akhir hidup · lalu menyiapkan kematian dengan baik</div><div style="font:900 30px Inter;margin-top:14px;color:${CG}">→ ada harapan husnul khatimah</div>`), 'left:700px;top:200px', 360.1, 383.8, 'up', 'stamp');
crd(vcard(520, Y, `<div style="font:900 34px Inter;color:${Y}">😰 KHAWATIR SAJA</div><div style="font:800 28px Inter;margin-top:12px;line-height:1.4">tanpa persiapan apa-apa</div><div style="font:900 30px Inter;margin-top:14px;color:${Y}">→ sudah tertipu oleh syaitan</div>`), 'left:1260px;top:200px', 374.0, 383.8, 'up', 'stamp');
crd(pill('ini persoalan serius untuk masa depan kita', '#fff'), 'left:560px;top:720px', 379.8, 383.8, 'scale', 'impact');

// --- 19 /layers : jangan merasa aman (3 lapis)
scene(383.8, 481.1, { cut: 'glitch' });
label("JANGAN MERASA AMAN DARI SU'UL KHATIMAH", 383.9, 'left:160px;top:130px', 481.1);
[['🎓', 'yang merasa ILMU & MA\'RIFAT tinggi', "Bal'am bin Ba'ura · ilmunya luas, bisa melihat Lauh Mahfuzh · mati su'ul khatimah", 383.9, 406.4], ['🕌', 'yang merasa banyak IBADAH', "Barshisha · khalwat 70 tahun beribadah · mati su'ul khatimah", 419.0, 440.1], ['🤝', 'yang merasa DEKAT orang saleh', "Kirkirah · pembantu Rasulullah ﷺ, mengurus tunggangan beliau · su'ul khatimah", 443.5, 468.8]].forEach(([e, h, d, t, tx], i) => {
  crd(`<div style="width:1600px;border:4px solid ${i === 0 ? CB : i === 1 ? Y : CG};border-radius:18px;padding:18px 26px;display:flex;gap:26px;align-items:center;background:#000"><div style="font-size:70px">${e}</div><div style="flex:1"><div style="font:900 38px Inter;color:${i === 0 ? CB : i === 1 ? Y : CG}">${h}</div><div style="font:800 28px Inter;margin-top:6px;line-height:1.35">${d}</div></div></div>`, `left:160px;top:${210 + i * 220}px`, t, 481.1, 'left', 'stamp');
  crd(`<div style="font:900 26px Inter;color:#111;background:${CR};border-radius:8px;padding:4px 12px">⚠ SU'UL KHATIMAH</div>`, `left:1480px;top:${190 + i * 220}px`, tx, 481.1, 'scale', 'impact'); });
crd(pill('apalagi kita · ilmu sedikit · ibadah sedikit · hanya dekat ustadz', CR), 'left:160px;top:900px', 471.3, 481.1, 'scale', 'beep');

// --- 20 /citation : Ar-Rum 40
scene(481.1, 507.5, { cut: 'glitch' });
paper(481.2, 'left:160px;top:180px;width:1600px;height:340px', '', 507.5);
arw(node('اللَّهُ الَّذِي خَلَقَكُمْ ثُمَّ رَزَقَكُمْ [ثُمَّ يُمِيتُكُمْ] ثُمَّ يُحْيِيكُمْ', 'left:220px;width:1480px;top:250px;text-align:center;font-size:74px;line-height:1.7;color:#151515'), 481.3, 5.0, { marks: [484.5] });
chip('QS. AR-RUM : 40', 481.5, 'left:160px;top:550px', 507.5, Y);
crd(vcard(760, CG, `<div style="font:900 34px Inter;line-height:1.35">💰 rezeki → <span style="color:${CG}">sudah dijamin Allah</span> · jangan khawatir</div>`), 'left:160px;top:660px', 492.6, 507.5, 'up', 'tick');
crd(vcard(760, CR, `<div style="font:900 34px Inter;line-height:1.35">⏳ yang dikhawatirkan: <span style="color:${CR}">akhir hidup kita</span> · ingat Allah atau lupa?</div>`), 'left:1000px;top:660px', 496.8, 507.5, 'up', 'beep');

// --- 21 /blueprint : tiga doa husnul khatimah
scene(507.5, 545.3, { cut: 'glitch' });
show(node('', 'left:140px;top:120px;width:1640px;height:820px', 'bp'), 507.6, 'fade', 545.3);
label('DOA AGAR MATI HUSNUL KHATIMAH', 507.7, 'left:180px;top:150px', 545.3);
[['DOA YANG DIAJARKAN · ATSAR ABU BAKAR ASH-SHIDDIQ', 'اللَّهُمَّ اجْعَلْ خَيْرَ عُمُرِي آخِرَهُ وَخَيْرَ عَمَلِي خَوَاتِيمَهُ وَخَيْرَ أَيَّامِي يَوْمَ أَلْقَاكَ', 519.6, Y], ["DOA AL-QUR'AN · ALI 'IMRAN 8", 'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً إِنَّكَ أَنْتَ الْوَهَّابُ', 529.5, CG], ['DOA PARA AULIYA', 'اللَّهُمَّ إِنِّي أَسْأَلُكَ حُسْنَ الْخَاتِمَةِ', 539.4, CB]].forEach(([h, ar, t, c], i) => crd(`<div style="width:1560px;border:3px solid ${c};border-radius:14px;padding:12px 22px;background:rgba(0,0,0,.35)"><div class="mono" style="font-size:20px;color:${c}">${h}</div><div class="ar" style="font-size:40px;text-align:right;line-height:1.45">${ar}</div></div>`, `left:180px;top:${200 + [0, 260, 500][i]}px`, t, 545.3, 'left', 'stamp'));

// --- 22 /callout : jangan anggap remeh
scene(545.3, 563.8, { cut: 'glitch' });
crd(`<div style="text-align:center"><div style="font:900 50px Inter;line-height:1.3">Nabi ﷺ · Al-Qur'an · para auliya <span class="mk">semuanya mengajarkan doanya</span></div></div>`, 'left:200px;top:230px;width:1520px', 545.4, 563.8, 'up', 'stamp');
crd(`<div style="width:1520px;border:5px solid ${CR};border-radius:20px;padding:26px 40px;background:rgba(255,138,92,.08)"><div style="font:900 52px Inter">jangan anggap remeh <span style="color:${CR}">urusan akhir hidup</span> · ini yang menentukan nasib kita di akhirat</div></div>`, 'left:200px;top:520px', 557.0, 563.8, 'scale', 'impact');

// --- 23 /teaser : laa ilaaha illallah
scene(563.8, TOTAL, { cut: 'hard' });
crd(`<div style="text-align:center"><div class="mono" style="font-size:26px;color:${Y};margin-bottom:70px">PERBANYAKLAH</div><div class="ar" style="font-size:110px;color:${Y};line-height:1.3">لَا إِلَٰهَ إِلَّا اللَّهُ</div></div>`, 'left:360px;top:100px;width:1200px', 563.9, TOTAL, 'scale', 'stamp');
crd(vcard(760, CG, `<div class="mono" style="font-size:22px;color:${CG}">"AKU DIKABARI JIBRIL…"</div><div style="font:900 34px Inter;margin-top:8px;line-height:1.35"><span class="ar" style="font-size:40px;unicode-bidi:isolate;color:${CG}">لَا إِلَٰهَ إِلَّا اللَّهُ</span> = teman yang menghibur saat menghadapi kematian</div>`), 'left:160px;top:470px', 572.9, TOTAL, 'up', 'tick');
crd(vcard(760, CG, `<div style="font:900 34px Inter;line-height:1.35">ahli <span class="ar" style="font-size:40px;unicode-bidi:isolate;color:${CG}">لَا إِلَٰهَ إِلَّا اللَّهُ</span> <span style="color:${CG}">tidak merasa gelisah</span> menghadapi kematian</div>`), 'left:1000px;top:470px', 587.1, TOTAL, 'up', 'tick');
mePol('left:160px;top:720px', 592.3, TOTAL, -4, 260);
sub2('left:760px;top:800px', 592.3, TOTAL);

// ================================================================== JADWAL KODE VISUAL
[[0, 4.7, '/kinetic-type'], [4.7, 12.6, '/badge'], [12.6, 31.7, '/venn'], [31.7, 59.2, '/roadmap'], [59.2, 73.4, '/spectrum'], [73.4, 90.8, '/citation'], [90.8, 105.1, '/citation'], [105.1, 111.0, '/citation'],
 [111.0, 150.0, '/flowchart'], [150.0, 161.5, '/callout'], [161.5, 196.1, '/diagram'], [196.1, 220.3, '/citation'], [220.3, 252.0, '/citation'], [252.0, 264.9, '/exploded-view'], [264.9, 306.9, '/checklist'], [306.9, 329.4, '/split-screen'],
 [329.4, 349.5, '/handwritten'], [349.5, 383.8, '/decision-matrix'], [383.8, 481.1, '/layers'], [481.1, 507.5, '/citation'], [507.5, 545.3, '/blueprint'], [545.3, 563.8, '/callout'], [563.8, TOTAL, '/teaser']]
 .reduce((acc, [a, b, c]) => { if (!acc.m[c]) acc.m[c] = String(++acc.n).padStart(2, '0'); codeTag(a, b, acc.m[c], c); return acc; }, { n: 0, m: {} });
