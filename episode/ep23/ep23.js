// ================================================================== ADEGAN EPISODE 23 · Keluarga Imran, Silsilah Nabi & Kelahiran Maryam
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
// rantai silsilah: kotak nama + panah, muncul satu per satu
const chain = (names, t0s, t1, top, hl = []) => names.forEach((s, i) => { crd(`<div style="min-width:190px;padding:14px 18px;border:4px solid ${hl.includes(i) ? Y : '#fff'};border-radius:14px;text-align:center;background:${hl.includes(i) ? 'rgba(233,242,58,.10)' : '#000'};font:900 30px Inter;color:${hl.includes(i) ? Y : '#fff'};white-space:nowrap">${s}</div>`, `left:${140 + i * 290}px;top:${top}px`, t0s[i], t1, 'scale', 'tick'); if (i) crd(`<div style="font:900 44px Inter;color:${Y}">→</div>`, `left:${140 + i * 290 - 70}px;top:${top + 14}px`, t0s[i] - .1, t1, 'fade'); });

// --- 01 /kinetic-type : pembuka
scene(0, 5.1, { cut: 'none' });
arw(node(BSM, 'left:140px;top:120px;width:1000px;font-size:58px;color:#fff;text-align:left'), .1, 1.0);
label("FILE 23 · SURAH ALI 'IMRAN (LANJUTAN)", .3, 'left:140px;top:260px');
seg("Keluarga 'Imran &<br>[Kelahiran Maryam]", .6, 'left:140px;top:310px;width:1100px', { size: 92, iv: .04, marks: [2.8] });
mePol('left:1300px;top:150px', .2, 5.1, 4, 400);
meTag(.8, 5.1, 'ذُرِّيَّةً بَعْضُهَا مِنْ بَعْضٍ');

// --- 02 /citation : Ali Imran 33
scene(5.1, 24.6, { cut: 'glitch' });
paper(5.2, 'left:160px;top:180px;width:1600px;height:360px', '', 24.6);
arw(node('إِنَّ اللَّهَ [اصْطَفَىٰ] آدَمَ وَنُوحًا وَآلَ إِبْرَاهِيمَ وَآلَ عِمْرَانَ عَلَى الْعَالَمِينَ', 'left:220px;width:1480px;top:250px;text-align:center;font-size:70px;line-height:1.7;color:#151515'), 5.3, 8.6, { marks: [7.5] });
chip("QS. ALI 'IMRAN : 33", 5.5, 'left:160px;top:570px', 24.6, Y);
crd(vcard(1600, '#fff', `<div style="font:900 36px Inter;line-height:1.35">✓ sebelumnya: Allah memilih <span style="color:${Y}">Nabi Adam</span> & memberinya keistimewaan-keistimewaan</div>`), 'left:160px;top:680px', 14.2, 24.6, 'up', 'tick');

// --- 03 /badge : Nabi Nuh
scene(24.6, 43.8, { cut: 'glitch' });
label('PILIHAN 02 · NABI NUH ‘ALAIHISSALAM', 24.7, 'left:160px;top:130px', 43.8);
crd(`<div style="text-align:center"><div class="ar" style="font-size:100px;color:${Y}">وَنُوحًا</div></div>`, 'left:660px;top:200px;width:600px', 24.7, 43.8, 'scale', 'stamp');
[['🥇', 'RASUL PERTAMA di muka bumi', 'أَوَّلُ رَسُولٍ فِي الْأَرْضِ', 35.0, Y], ['⏳', 'PALING PANJANG umurnya', 'أَطْوَلُهُمْ عُمُرًا', 39.5, CG]].forEach(([e, s, ar, t, c], i) => crd(`<div style="width:760px;height:300px;border:5px solid ${c};border-radius:20px;text-align:center;padding-top:26px"><div style="font-size:80px">${e}</div><div style="font:900 38px Inter;color:${c};margin-top:8px">${s}</div><div class="ar" style="font-size:44px;margin-top:6px">${ar}</div></div>`, `left:${140 + i * 880}px;top:480px`, t, 43.8, 'up', 'stamp'));

// --- 04 /tree : keluarga Ibrahim
scene(43.8, 66.8, { cut: 'glitch' });
label('PILIHAN 03 · KELUARGA NABI IBRAHIM', 43.9, 'left:160px;top:130px', 66.8);
sv(44.0, 66.8, DEFS + BOX(710, 200, 500, 120, { s: Y, sw: 5 }) + T(960, 275, 'NABI IBRAHIM', { f: .1, fs: 44, fw: 900, c: Y }) +
  T(960, 380, 'أَكْثَرُ الْأَنْبِيَاءِ مِنْ ذُرِّيَّتِهِ', { f: 6.4, ff: 'Amiri', fs: 48, fw: 700 }) + T(960, 430, 'kebanyakan para nabi dari keturunannya', { f: 6.6, fs: 30, fw: 900 }) +
  [['Ismail', 520], ['Ishaq', 820], ['Ya\'qub', 1100], ['Yusuf', 1380]].map(([s, x], i) => '<g data-f="' + (7.5 + i * .4) + '">' + LN([[960, 450], [x, 540]], { s: '#fff', sw: 3 }) + '</g>' + BOX(x - 120, 550, 240, 80, { s: '#fff', sw: 3, del: 7.6 + i * .4 }) + T(x, 602, s, { f: 7.7 + i * .4, fs: 30, fw: 900 })).join('') +
  '<g data-f="15.0">' + LN([[520, 630], [520, 740]], { s: Y, sw: 5, arrow: 1 }) + '</g>' + BOX(260, 750, 520, 140, { s: Y, sw: 6, del: 15.1 }) + T(520, 815, 'NABI MUHAMMAD ﷺ', { f: 15.3, fs: 38, fw: 900, c: Y }) + T(520, 862, 'سَيِّدُ الْأَنْبِيَاءِ', { f: 15.6, ff: 'Amiri', fs: 36, c: Y }), 'left:0;top:0', 1920, 1080, .6);
crd(`<div style="font:900 34px Inter;color:${Y}">terutama baginda Rasulullah ﷺ</div>`, 'left:900px;top:800px', 61.3, 66.8, 'left', 'impact');

// --- 05 /diagram : pohon keluarga Imran
scene(66.8, 111.7, { cut: 'glitch' });
label("PILIHAN 04 · KELUARGA 'IMRAN", 66.9, 'left:160px;top:130px', 111.7);
sv(67.0, 111.7, DEFS +
  BOX(420, 190, 460, 170, { s: Y, sw: 6, fill: 'rgba(233,242,58,.08)' }) + T(650, 255, "'IMRAN", { f: .2, fs: 46, fw: 900, c: Y }) + T(650, 300, 'ahli ibadah · saleh', { f: 3.6, fs: 26, fw: 800 }) + T(650, 335, 'tokoh di kaumnya', { f: 7.8, fs: 26, fw: 800 }) +
  T(960, 285, '+', { f: 11.3, fs: 70, fw: 900, c: Y }) + BOX(1040, 190, 460, 170, { s: Y, sw: 6, del: 11.3, fill: 'rgba(233,242,58,.08)' }) + T(1270, 270, 'HANNAH', { f: 11.5, fs: 46, fw: 900, c: Y }) + T(1270, 320, 'istri', { f: 11.7, fs: 26, fw: 800 }) +
  '<g data-f="14.0">' + LN([[960, 360], [960, 410], [560, 410], [560, 460]], { s: '#fff', sw: 4 }) + LN([[960, 410], [1360, 410], [1360, 460]], { s: '#fff', sw: 4 }) + '</g>' +
  BOX(360, 470, 400, 130, { s: '#fff', sw: 4, del: 14.5 }) + T(560, 525, 'ASIYAH', { f: 14.7, fs: 38, fw: 900 }) + T(560, 570, 'anak pertama (jumhur)', { f: 15.0, fs: 22, fw: 800 }) +
  BOX(1160, 470, 400, 130, { s: CB, sw: 5, del: 28.0 }) + T(1360, 525, 'MARYAM', { f: 28.2, fs: 38, fw: 900, c: CB }) + T(1360, 570, 'anak kedua', { f: 28.4, fs: 22, fw: 800 }) +
  T(820, 540, '+', { f: 18.2, fs: 50, fw: 900, c: Y }) + BOX(860, 470, 260, 130, { s: Y, sw: 4, del: 18.2 }) + T(990, 525, 'NABI', { f: 18.4, fs: 26, fw: 900, c: Y }) + T(990, 565, 'ZAKARIA', { f: 18.4, fs: 30, fw: 900, c: Y }) +
  '<g data-f="22.4">' + LN([[700, 600], [700, 700]], { s: Y, sw: 4, arrow: 1 }) + '</g>' + BOX(520, 710, 360, 120, { s: Y, sw: 5, del: 22.4 }) + T(700, 770, 'NABI YAHYA', { f: 22.6, fs: 34, fw: 900, c: Y }) + T(700, 805, 'cucu', { f: 22.8, fs: 22, fw: 800 }) +
  '<g data-f="30.8">' + LN([[1360, 600], [1360, 700]], { s: Y, sw: 4, arrow: 1 }) + '</g>' + BOX(1180, 710, 360, 120, { s: Y, sw: 5, del: 30.8 }) + T(1360, 770, 'NABI ISA', { f: 31.0, fs: 34, fw: 900, c: Y }) + T(1360, 805, 'cucu', { f: 31.2, fs: 22, fw: 800 }), 'left:0;top:0', 1920, 1080, .6);
crd(pill("menantu NABI · cucu pun NABI → عَلَى الْعَالَمِينَ", Y), 'left:440px;top:900px', 104.4, 111.7, 'scale', 'impact');

// --- 06 /citation : Ali Imran 34
scene(111.7, 140.1, { cut: 'glitch' });
paper(111.8, 'left:160px;top:180px;width:1600px;height:330px', '', 140.1);
arw(node('[ذُرِّيَّةً بَعْضُهَا مِنْ بَعْضٍ] وَاللَّهُ سَمِيعٌ عَلِيمٌ', 'left:220px;width:1480px;top:250px;text-align:center;font-size:84px;line-height:1.6;color:#151515'), 111.9, 9.4, { marks: [116.0] });
chip("QS. ALI 'IMRAN : 34", 112.1, 'left:160px;top:540px', 140.1, Y);
line(121.4, 129.4, 'left:160px;top:640px;width:1600px', 'keturunan sebagian dari sebagian · Allah [Maha Mendengar & Maha Mengetahui]', { fs: 38, m: [126.0] });
crd(`<div style="display:flex;gap:30px;align-items:center;font:900 40px Inter"><span style="border:4px solid #fff;border-radius:14px;padding:12px 22px">nabi</span><span style="color:${Y}">→</span><span style="border:4px solid #fff;border-radius:14px;padding:12px 22px">anaknya nabi</span><span style="color:${Y}">→</span><span style="border:4px solid ${Y};border-radius:14px;padding:12px 22px;color:${Y}">cucunya nabi…</span></div>`, 'left:260px;top:780px', 129.4, 140.1, 'up', 'stamp');

// --- 07 /timeline : silsilah Nuh, Ibrahim, Musa
scene(140.1, 175.1, { cut: 'glitch' });
label('SILSILAH KE ATAS · CONTOH-CONTOH', 140.2, 'left:160px;top:130px', 175.1);
chain(['Nuh', 'Idris', 'Syits', 'Adam'], [140.2, 145.4, 146.6, 148.5], 175.1, 220, [0, 3]);
chain(['Ibrahim', 'Nuh', 'Idris', 'Syits', 'Adam'], [152.0, 155.3, 155.9, 157.1, 158.8], 175.1, 420, [0, 4]);
chain(['Musa', "Ya'qub", 'Ishaq', 'Ibrahim', 'Nuh', 'Idris'], [160.1, 162.4, 164.2, 166.5, 168.2, 169.9], 175.1, 620, [0, 3]);
crd(`<div style="font:900 32px Inter;color:${CG}">… semuanya bersambung sampai Nabi Syits, putra Nabi Adam</div>`, 'left:160px;top:820px', 171.0, 175.1, 'up', 'beep');

// --- 08 /kinetic-type : nasab Rasulullah
scene(175.1, 208.5, { cut: 'glitch' });
label('NASAB BAGINDA RASULULLAH ﷺ', 175.2, 'left:160px;top:130px', 208.5);
(() => { const N = ['Muhammad ﷺ', "'Abdullah", "'Abdul Muththalib", 'Hasyim', "'Abdu Manaf", 'Qushai', 'Kilab', 'Murrah', "Ka'b", "Lu'ay", 'Ghalib', 'Fihr', 'Malik', 'Nadhr', 'Kinanah', 'Khuzaimah', 'Mudrikah', 'Ilyas', 'Mudhar', 'Nizar', "Ma'add", "'Adnan", '· · ·', 'Ismail', 'Ibrahim', 'Nuh', 'Idris', 'Syits', 'Adam'];
  const n = node(`<div style="display:flex;flex-wrap:wrap;gap:12px 10px;width:1640px">${N.map((s, i) => `<span class="nm" style="font:900 32px Inter;padding:8px 16px;border-radius:10px;border:3px solid ${[0, 23, 24, 25, 26, 27, 28].includes(i) ? Y : 'rgba(255,255,255,.5)'};color:${[0, 23, 24, 25, 26, 27, 28].includes(i) ? Y : '#fff'};opacity:0">${s}</span>`).join('<span class="nm" style="font:900 30px Inter;color:' + Y + ';opacity:0">›</span>')}</div>`, 'left:140px;top:220px');
  const W = [...n.querySelectorAll('.nm')]; sfx(175.8, 'whoosh', .6);
  item(175.8, 208.5, n, (lt, t, it) => { n.style.opacity = clamp((it.t1 - t) / .3); W.forEach((w, i) => { const k = eo((lt - i * (26.0 / W.length)) / .3); w.style.opacity = k; w.style.transform = `translateY(${(1 - k) * 14}px)`; }); }); })();
crd(`<div style="text-align:center;width:1640px"><div class="ar" style="font-size:64px;color:${Y}">ذُرِّيَّةً بَعْضُهَا مِنْ بَعْضٍ وَاللَّهُ سَمِيعٌ عَلِيمٌ</div></div>`, 'left:140px;top:860px', 203.5, 208.5, 'scale', 'stamp');

// --- 09 /sketchnotes : buah jatuh tak jauh dari pohon
scene(208.5, 236.3, { cut: 'glitch' });
sv(208.6, 236.3, `<path d="M520 880 V560" stroke="#c9a46a" stroke-width="22" stroke-linecap="round" data-d="320"/><path d="M520 640 L430 540 M520 600 L620 500" stroke="#c9a46a" stroke-width="12" stroke-linecap="round" data-d="160" data-del=".4"/>` +
  `<circle cx="520" cy="440" r="210" fill="rgba(127,224,160,.12)" stroke="${CG}" stroke-width="6" data-f=".6"/>` + [[430, 420], [600, 380], [520, 500], [640, 480]].map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="26" fill="${CR}" data-f="${1 + i * .3}"/>`).join('') +
  `<circle class="drop" cx="640" cy="900" r="26" fill="${CR}" data-f="3.0"/><path d="M300 920 H760" stroke="#fff" stroke-width="5" data-d="460"/>`, 'left:0;top:0', 1920, 1080, .8);
crd(`<div style="font:700 56px/1.3 Kalam;color:#fff8d0;width:900px">"buah jatuh tidak jauh dari <span style="color:${CG}">pohonnya</span>"</div>`, 'left:900px;top:240px', 210.0, 236.3, 'up', 'paper');
crd(vcard(880, Y, `<div class="mono" style="font-size:22px;color:${Y}">MENURUT AHLI HIKMAH</div><div style="font:900 34px Inter;margin-top:10px;line-height:1.35">rahasia anak tak jauh dari orang tuanya: <span class="mk">pikiran & niat orang tua</span> · dengan izin Allah</div>`), 'left:900px;top:520px', 221.7, 236.3, 'up', 'impact');

// --- 10 /checklist : ciri orang tua saleh
scene(236.3, 269.1, { cut: 'glitch' });
label('ORANG TUA YANG SALEH · HIDUPNYA DISIBUKKAN DENGAN…', 236.4, 'left:160px;top:130px', 269.1);
[['📿', 'berzikir kepada Allah', 238.0], ['🌹', 'berselawat kepada Nabi ﷺ', 240.0], ['💵', 'mencari nafkah halal', 243.5], ['🎯', 'berniat sungguh-sungguh takwa', 246.6], ['🪞', 'sibuk memperbaiki diri sendiri', 252.8], ['🚫', 'tak mencari kesalahan orang lain', 256.2], ['😌', 'diuji → bersabar', 269.1 - 5.4], ['🤲', 'diberi nikmat → bersyukur', 269.1 - 3.0]].forEach(([e, s, t], i) => crd(`<div style="width:780px;display:flex;align-items:center;gap:18px;border-left:8px solid ${i < 6 ? CG : Y};background:rgba(255,255,255,.04);padding:12px 20px"><span style="font-size:46px">${e}</span><span style="font:900 32px Inter">${s}</span></div>`, `left:${i % 2 ? 1000 : 140}px;top:${210 + Math.floor(i / 2) * 150}px`, t, 269.1, i % 2 ? 'left' : 'up', 'tick'));
crd(pill('diberi istri → tak lupa mengingat Allah', Y), 'left:560px;top:880px', 265.0, 269.1, 'scale', 'beep');

// --- 11 /roadmap : niat mendidik anak
scene(269.1, 323.4, { cut: 'glitch' });
line(269.2, 283.0, 'left:140px;top:130px;width:1640px', 'niatkan dalam hati: jika Allah karuniakan anak · aku akan [bersungguh-sungguh mendidiknya]', { fs: 38, m: [279.0] });
sv(283.0, 323.4, DEFS + `<path d="M200 560 C 500 420, 760 700, 1060 540 S 1560 420, 1740 520" fill="none" stroke="#fff" stroke-width="6" stroke-dasharray="20 14" data-d="1800" data-dur="1.6"/>` +
  [['📚', 'mendidik', 260, 520, 0], ['🤲', 'mendoakan', 560, 600, 2.0], ['🛡️', 'menjaga', 860, 600, 15.0], ['💬', 'menasihati', 1160, 520, 16.6], ['👀', 'mengawasi', 1460, 470, 17.6], ['🌿', 'saleh · salehah', 1740, 510, 22.0]].map(([e, s, x, y, d], i) => `<circle cx="${x}" cy="${y}" r="52" fill="#000" stroke="${i === 5 ? CG : Y}" stroke-width="5" data-f="${d}"/>` + T(x, y + 17, e, { f: d, fs: 46 }) + T(x, y + (i % 2 ? -84 : 112), s, { f: d + .2, fs: 30, fw: 900, c: i === 5 ? CG : '#fff' })).join(''), 'left:0;top:0', 1920, 1080, 1.0);
crd(vcard(1500, CG, `<div style="font:900 34px Inter;line-height:1.35">🤲 Ya Allah, karuniakan kami <span style="color:${CG}">keturunan yang baik</span> · jauhkan dari yang tidak baik · آمِينَ</div>`, '#000'), 'left:210px;top:800px', 311.4, 323.4, 'up', 'impact');

// --- 12 /search : hadis Fatimah
scene(323.4, 370.9, { cut: 'glitch', light: 1 });
crd(`<div class="ar" style="font-size:64px;color:${Y};text-align:center;width:1640px">ذُرِّيَّةً بَعْضُهَا مِنْ بَعْضٍ</div>`, 'left:140px;top:150px', 323.5, 327.6, 'scale', 'stamp');
searchFind(327.6, 370.9, {
  q: 'أي شيء خير للمرأة قالت ألا ترى رجلا ولا يراها رجل', count: 4, pick: 0, shelfPick: 0, times: { type: .4, scan: 2.4, res: 3.6, click: 4.8, det: 5.4 },
  shelf: [["Kanz al-'Ummal", 'كنز العمال'], ["Jam'ul Jawami' · as-Suyuthi", 'جمع الجوامع'], ["Kasyf al-Khafa' · al-'Ajluni", 'كشف الخفاء'], ["Mausu'ah Mahasin al-Islam", 'موسوعة محاسن الإسلام'], ["Jami' al-Ahadits", 'جامع الأحاديث']],
  results: [
    { title: "Kanz al-'Ummal · j. 16 hlm. 601", tag: 'HADIS', ar: 'أَيُّ شَيْءٍ خَيْرٌ لِلْمَرْأَةِ', sub: 'pertanyaan Nabi ﷺ kepada Fathimah' },
    { title: "Jam'ul Jawami' · as-Suyuthi · j. 18 hlm. 232", tag: 'HADIS', ar: 'أَلَّا تَرَى رَجُلًا وَلَا يَرَاهَا', sub: 'jawaban Fathimah radhiyallahu \'anha' },
    { title: "Mausu'ah Mahasin al-Islam · j. 11 hlm. 586", tag: 'CATATAN', ar: 'فَضَمَّهَا إِلَيْهِ', sub: 'sanadnya dibahas · sangat lemah' },
    { title: "Kasyf al-Khafa' · al-'Ajluni", tag: 'CATATAN', ar: 'ذُرِّيَّةً بَعْضُهَا مِنْ بَعْضٍ', sub: 'diriwayatkan ad-Dailami · ada perawi matruk' }],
  det: { title: 'Hadis Fathimah radhiyallahu \'anha', ar: 'فَاطِمَةُ الزَّهْرَاءُ', rows: [['PERTANYAAN', 'apa yang paling baik bagi perempuan?'], ['JAWABAN', 'tak melihat laki-laki lain & tak dilihat'], ['LALU', 'Nabi ﷺ memeluknya'], ['MEMBACA', 'ذُرِّيَّةً بَعْضُهَا مِنْ بَعْضٍ'], ['DINUKIL', "Kanz al-'Ummal · Jam'ul Jawami'"], ['RIWAYAT', 'ad-Dailami · ada perawi matruk'], ['DERAJAT', 'sangat lemah · sanadnya dikritik']], quote: 'أَلَّا تَرَى رَجُلًا وَلَا يَرَاهَا رَجُلٌ' }
});
camTour(327.6, 370.9, { type: .4, scan: 2.4, res: 3.6, click: 4.8, det: 5.4 });

// --- 13 /citation : Ali Imran 35
scene(370.9, 403.4, { cut: 'glitch' });
paper(371.0, 'left:160px;top:150px;width:1600px;height:400px', '', 403.4);
arw(node('إِذْ قَالَتِ امْرَأَتُ عِمْرَانَ رَبِّ إِنِّي نَذَرْتُ لَكَ مَا فِي بَطْنِي [مُحَرَّرًا] فَتَقَبَّلْ مِنِّي إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ', 'left:220px;width:1480px;top:200px;text-align:center;font-size:58px;line-height:1.8;color:#151515'), 371.0, 14.0, { marks: [380.5] });
chip("QS. ALI 'IMRAN : 35", 371.2, 'left:160px;top:580px', 403.4, Y);
[["👩 istri 'Imran · Hannah", 385.9, '#fff'], ['🤲 "aku bernazar kepada-Mu…"', 390.0, Y], ['🕊️ مُحَرَّرًا · diserahkan kepada Allah', 396.0, CG], ['✨ "terimalah dariku…"', 402.0, '#fff']].forEach(([s, t, c], i) => crd(`<div style="font:900 32px Inter;color:${c}">${s}</div>`, `left:${160 + (i % 2) * 820}px;top:${680 + Math.floor(i / 2) * 80}px`, Math.min(t, 402.5), 403.4, 'up', 'tick'));

// --- 14 /timeline : kisah nazar
scene(403.4, 433.4, { cut: 'glitch' });
sv(403.5, 433.4, DEFS + `<path d="M200 470 H1720" stroke="#fff" stroke-width="5" data-d="1520" data-dur="1.6"/>` +
  [['🤝', "'Imran & Hannah berunding", 'sebelum mengandung', 300, 0], ['🕌', 'anak untuk Masjidil Aqsa', 'tak ambil keuntungan dari anak', 760, 9.0], ['🕯️', "'Imran wafat", 'Hannah mengandung', 1220, 14.0], ['🔁', 'nazar diulang kembali', 'saat mengandung', 1640, 18.5]].map(([e, a, b, x, d]) => `<circle cx="${x}" cy="470" r="52" fill="#000" stroke="${Y}" stroke-width="5" data-f="${d}"/>` + T(x, 487, e, { f: d, fs: 46 }) + T(x, 580, a, { f: d + .2, fs: 28, fw: 900, c: Y }) + T(x, 622, b, { f: d + .4, fs: 24, fw: 800 })).join(''), 'left:0;top:0', 1920, 1080, .6);
crd(`<div class="ar" style="font-size:52px;text-align:center;width:1640px">إِنِّي نَذَرْتُ لَكَ مَا فِي بَطْنِي مُحَرَّرًا فَتَقَبَّلْ مِنِّي</div>`, 'left:140px;top:760px', 424.7, 433.4, 'up', 'beep');

// --- 15 /callout : tidak berlaku di syariat kita
scene(433.4, 458.7, { cut: 'glitch' });
crd(`<div style="width:1560px;border:5px solid ${CR};border-radius:20px;padding:30px 40px;background:rgba(255,138,92,.08)"><div class="mono" style="font-size:24px;color:${CR}">⚠ CATATAN PENTING</div><div style="font:900 50px Inter;margin-top:12px;line-height:1.3">nazar seperti ini <span style="color:${CR}">tidak berlaku</span> dalam syariat Nabi Muhammad ﷺ</div><div style="font:800 32px Inter;margin-top:14px">hanya terjadi pada umat terdahulu · tidak boleh kita bernazar anak dalam kandungan seperti ini</div></div>`, 'left:180px;top:200px', 433.5, 458.7, 'scale', 'impact');
crd(`<div class="ar" style="font-size:56px;color:${Y};text-align:center;width:1560px">فَتَقَبَّلْ مِنِّي إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ</div>`, 'left:180px;top:660px', 448.0, 458.7, 'up', 'beep');

// --- 16 /citation : Ali Imran 36
scene(458.7, 477.5, { cut: 'glitch' });
paper(458.8, 'left:160px;top:150px;width:1600px;height:340px', '', 477.5);
arw(node('فَلَمَّا وَضَعَتْهَا قَالَتْ رَبِّ إِنِّي وَضَعْتُهَا أُنْثَىٰ وَاللَّهُ أَعْلَمُ بِمَا وَضَعَتْ وَلَيْسَ الذَّكَرُ كَالْأُنْثَىٰ [وَإِنِّي سَمَّيْتُهَا مَرْيَمَ] وَإِنِّي أُعِيذُهَا بِكَ وَذُرِّيَّتَهَا مِنَ الشَّيْطَانِ الرَّجِيمِ', 'left:220px;width:1480px;top:190px;text-align:center;font-size:52px;line-height:1.8;color:#151515'), 459.0, 18.0, { marks: [472.0] });
chip("QS. ALI 'IMRAN : 36", 459.2, 'left:160px;top:520px', 477.5, Y);

// --- 17 /layers : ayat 36 frasa demi frasa
scene(477.5, 518.7, { cut: 'glitch' });
[['رَبِّ إِنِّي وَضَعْتُهَا أُنْثَىٰ', 'lahir PEREMPUAN · padahal harapannya laki-laki', 477.6, '#fff'], ['وَاللَّهُ أَعْلَمُ بِمَا وَضَعَتْ', 'Allah lebih tahu apa yang ia lahirkan', 499.2, Y], ['وَلَيْسَ الذَّكَرُ كَالْأُنْثَىٰ', 'laki-laki memang tidak seperti perempuan', 504.9, CB], ['وَإِنِّي سَمَّيْتُهَا مَرْيَمَ', 'kunamai dia MARYAM', 509.6, CG], ['وَإِنِّي أُعِيذُهَا بِكَ وَذُرِّيَّتَهَا مِنَ الشَّيْطَانِ الرَّجِيمِ', 'kulindungkan dia & keturunannya dari setan', 514.4, Y]].forEach(([ar, s, t, c], i) => crd(`<div style="width:1640px;display:flex;align-items:center;gap:26px;border:3px solid ${c};border-radius:14px;padding:10px 22px;background:#000"><div class="ar" style="font-size:42px;color:${c};flex:none;width:820px;text-align:right">${ar}</div><div style="font:900 30px Inter;flex:1">${s}</div></div>`, `left:140px;top:${180 + i * 150}px`, t, 518.7, 'left', 'tick'));

// --- 18 /flowchart : nazar diterima
scene(518.7, 533.6, { cut: 'glitch' });
sv(518.8, 533.6, DEFS + [['🤲', 'nazar DITERIMA', 'walau yang lahir perempuan', CG, 0], ['🌱', 'tumbuh dengan', 'pertumbuhan yang baik', CG, 5.0], ['🛡️', 'dipelihara oleh', 'NABI ZAKARIA', Y, 12.0]].map(([e, a, b, c, d], i) => BOX(160 + i * 560, 380, 480, 280, { s: c, sw: 5, del: d }) + T(400 + i * 560, 470, e, { f: d + .1, fs: 70 }) + T(400 + i * 560, 560, a, { f: d + .2, fs: 32, fw: 900, c }) + T(400 + i * 560, 610, b, { f: d + .3, fs: 28, fw: 900 }) + (i ? '<g data-f="' + d + '">' + LN([[160 + i * 560 - 80, 520], [160 + i * 560 - 10, 520]], { s: Y, sw: 5, arrow: 1 }) + '</g>' : '')).join(''), 'left:0;top:0', 1920, 1080, .6);

// --- 19 /blueprint : mihrab Masjidil Aqsa
scene(533.6, 555.9, { cut: 'glitch' });
show(node('', 'left:140px;top:120px;width:1640px;height:820px', 'bp'), 533.7, 'fade', 555.9);
label('MIHRAB DI MASJIDIL AQSA', 533.8, 'left:180px;top:150px', 555.9);
sv(534.0, 555.9, `<path d="M560 860 V500 Q560 300 760 260 Q960 300 960 500 V860" fill="rgba(255,255,255,.06)" stroke="#fff" stroke-width="6" data-d="1600" data-dur="1.4"/><path d="M500 860 H1020" stroke="#fff" stroke-width="6" data-d="520"/>` +
  `<rect x="850" y="660" width="36" height="46" rx="6" fill="none" stroke="${Y}" stroke-width="5" data-f="9.0"/><path d="M856 660 V646 Q868 630 880 646 V660" fill="none" stroke="${Y}" stroke-width="5" data-f="9.0"/>` + T(868, 740, 'dikunci 🔒', { f: 9.2, fs: 24, fw: 900, c: Y }),
  'left:0;top:0', 1920, 1080, .6);
[['🛏️ dibuatkan kamar · tinggal di sana', 541.0, '#fff'], ['🔒 dikunci · tak ada yang boleh masuk', 545.0, Y], ['🗝️ kecuali Nabi Zakaria', 547.4, Y], ['🍽️ mengantarkan makanan & minuman', 549.9, CG]].forEach(([s, t, c], i) => crd(`<div style="font:900 34px Inter;color:${c}">${s}</div>`, `left:1080px;top:${300 + i * 130}px`, t, 555.9, 'left', 'tick'));

// --- 20 /handwritten : rezeki di mihrab
scene(555.9, 585.0, { cut: 'glitch' });
arw(node('وَجَدَ عِنْدَهَا [رِزْقًا]', 'left:140px;width:1640px;top:130px;text-align:center;font-size:76px;color:#fff'), 556.0, 2.4, { marks: [557.5] });
['🍇', '🍎', '🍯', '🥛', '🍊', '🍞'].forEach((e, i) => crd(`<div style="font-size:84px">${e}</div>`, `left:${560 + i * 140}px;top:290px`, 559.5 + i * .25, 585.0, 'drop', 'tick'));
crd(`<div style="width:840px;border:3px dashed #fff;border-radius:30px 30px 30px 4px;padding:22px 28px"><div class="mono" style="font-size:22px;color:#fff">NABI ZAKARIA BERTANYA</div><div class="ar" style="font-size:52px">يَا مَرْيَمُ أَنَّىٰ لَكِ هَٰذَا</div><div style="font:900 30px Inter">"dari mana makanan ini?"</div></div>`, 'left:140px;top:450px', 564.8, 585.0, 'up', 'paper');
crd(`<div style="width:760px;border:3px dashed ${Y};border-radius:30px 30px 4px 30px;padding:22px 28px"><div class="mono" style="font-size:22px;color:${Y}">MARYAM MENJAWAB</div><div class="ar" style="font-size:52px;color:${Y}">هُوَ مِنْ عِنْدِ اللَّهِ</div><div style="font:900 30px Inter">"ini dari Allah"</div></div>`, 'left:1020px;top:610px', 569.8, 585.0, 'up', 'beep');
crd(`<div style="text-align:center;border:4px solid ${CG};border-radius:18px;padding:12px 30px;background:#000;width:1640px"><div class="ar" style="font-size:56px;color:${CG}">إِنَّ اللَّهَ يَرْزُقُ مَنْ يَشَاءُ بِغَيْرِ حِسَابٍ</div><div style="font:900 30px Inter">Allah beri rezeki kepada siapa yang Dia kehendaki tanpa disangka-sangka · QS. ALI 'IMRAN : 37</div></div>`, 'left:140px;top:860px', 574.1, 585.0, 'scale', 'stamp');

// --- 21 /teaser : penutup
scene(585.0, TOTAL, { cut: 'hard' });
mePol('left:200px;top:200px', 585.1, TOTAL, -4, 400);
crd(`<div style="font:900 38px Inter;line-height:1.35">anak saleh bermula dari <span class="mk">niat & kesalehan orang tuanya</span></div>`, 'left:760px;top:200px;width:1000px', 585.1, TOTAL, 'left', 'tick');
arw(node('اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ', 'left:760px;top:360px;width:1000px;text-align:right;font-size:46px;color:#fff'), 590.0, 3.4);
sub2('left:760px;top:600px', 592.0, TOTAL);

// ================================================================== JADWAL KODE VISUAL
[[0, 5.1, '/kinetic-type'], [5.1, 24.6, '/citation'], [24.6, 43.8, '/badge'], [43.8, 66.8, '/tree'], [66.8, 111.7, '/diagram'], [111.7, 140.1, '/citation'], [140.1, 175.1, '/timeline'], [175.1, 208.5, '/kinetic-type'],
 [208.5, 236.3, '/sketchnotes'], [236.3, 269.1, '/checklist'], [269.1, 323.4, '/roadmap'], [323.4, 370.9, '/search'], [370.9, 403.4, '/citation'], [403.4, 433.4, '/timeline'], [433.4, 458.7, '/callout'], [458.7, 477.5, '/citation'],
 [477.5, 518.7, '/layers'], [518.7, 533.6, '/flowchart'], [533.6, 555.9, '/blueprint'], [555.9, 585.0, '/handwritten'], [585.0, TOTAL, '/teaser']]
 .reduce((acc, [a, b, c]) => { if (!acc.m[c]) acc.m[c] = String(++acc.n).padStart(2, '0'); codeTag(a, b, acc.m[c], c); return acc; }, { n: 0, m: {} });
