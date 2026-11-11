// ================================================================== ADEGAN EPISODE 10 · Minta Bantuan & Pertolongan dari Allah (إِيَّاكَ نَسْتَعِينُ)
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


// ================================================================== EP 12 · Minta yang Pasti Baik (اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ)
const IKH = 'إِنْ كَانَ خَيْرًا لِي';
// kartu doa bersyarat (dipakai berulang)
function condDoa(t0, t1, doaTxt, tIkh, tYes, tNo, top = 560) {
  crd(`<div style="width:1500px;border:4px solid ${CG};border-radius:20px;padding:24px 34px;background:rgba(127,224,160,.06)"><div class="mono" style="font-size:22px;color:${CG}">🤲 DOA YANG BERSYARAT</div><div style="font:italic 800 40px Inter;margin-top:10px;line-height:1.3">"${doaTxt}"</div></div>`, `left:210px;top:${top}px`, t0, t1, 'up', 'paper');
  crd(`<div class="ar" style="font-size:66px;color:#111;background:${Y};border-radius:12px;padding:0 26px">${IKH}</div>`, `left:210px;top:${top + 230}px`, tIkh, t1, 'scale', 'impact');
  crd(`<div style="font:900 38px Inter;color:${CG}">✓ maka kabulkan, ya Allah</div>`, `left:820px;top:${top + 245}px`, tYes, t1, 'left', 'beep');
  crd(`<div style="font:900 38px Inter;color:${CR}">✕ kalau tidak, jangan</div>`, `left:1360px;top:${top + 245}px`, tNo, t1, 'left', 'beep'); }
const jangan = (txt, t0, t1, top = 150) => crd(`<div style="display:flex;align-items:center;gap:24px"><div style="font:900 44px Inter;color:#fff;background:#d7322b;border-radius:12px;padding:8px 20px">JANGAN</div><div style="font:900 50px Inter">${txt}</div></div>`, `left:160px;top:${top}px`, t0, t1, 'left', 'stamp');

// --- 01 pembuka (/kinetic-type)
scene(0, 6.98, { cut: 'none' });
arw(node(BSM, 'left:140px;top:130px;width:1000px;font-size:62px;color:#fff;text-align:left'), .1, 1.1);
label('FILE 12 · LANJUTAN SURAH AL-FATIHAH', 1.3, 'left:140px;top:285px');
seg('Minta yang<br>Pasti [Baik]', 1.6, 'left:140px;top:335px;width:1100px', { size: 110, iv: .05, marks: [3.4] });
arw(node('[اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ]', 'left:140px;top:620px;width:1000px;font-size:62px;color:#fff;text-align:left'), 5.0, 1.6, { marks: [6.1] });
mePol('left:1300px;top:150px', .4, 6.98, 4, 400);
meTag(1.4, 6.98, 'الصِّرَاطُ الْمُسْتَقِيمُ');

// --- 02 /road : jalan lurus & dua jalan menyimpang
scene(6.98, 24.34, { cut: 'glitch' });
[['bimbinglah kami', 7.0], ['tunjukilah kami', 10.0], ['jelaskan & terangkan', 12.6]].forEach(([s, t], i) => crd(`<div style="font:900 40px Inter;border:3px solid ${Y};border-radius:12px;padding:8px 20px"><span class="mono" style="color:${Y}">0${i + 1}</span> ${s}</div>`, `left:${160 + i * 560}px;top:140px`, t, 24.34, 'drop', 'tick'));
sv(15.8, 24.34, DEFS + `<path d="M760 1040 L940 380 L980 380 L1160 1040 Z" fill="rgba(233,242,58,.10)" stroke="${Y}" stroke-width="5" data-d="1800"/><path d="M960 1020 V400" stroke="${Y}" stroke-width="5" stroke-dasharray="26 22" data-d="620"/>` +
  `<circle cx="960" cy="370" r="22" fill="${Y}" data-f="1.0"/>` + T(960, 330, 'diberi NIKMAT ✓', { f: 1.0, fs: 42, fw: 900, c: Y }) +
  `<path d="M880 760 C 700 700, 520 640, 300 620" fill="none" stroke="${CR}" stroke-width="5" data-d="620" data-del="4.6"/>` + T(300, 590, 'DIMURKAI ✕', { f: 5.0, fs: 38, fw: 900, c: CR }) +
  `<path d="M1040 760 C 1220 700, 1400 640, 1620 620" fill="none" stroke="${CR}" stroke-width="5" data-d="620" data-del="6.4"/>` + T(1620, 590, 'SESAT ✕', { f: 6.8, fs: 38, fw: 900, c: CR }), 'left:0;top:0', 1920, 1080, 1.0);

// --- 03 /ranking : yang paling utama diminta
scene(24.34, 43.88, { cut: 'glitch' });
line(24.4, 43.88, 'left:140px;top:130px;width:1640px', 'pada ayat ini Allah [mengajarkan kita berdoa]', { fs: 46, m: [30.0] });
crd('<div style="font-size:150px">🤲</div>', 'left:200px;top:330px', 29.2, 43.88, 'scale', 'beep');
crd(`<div style="width:1080px;border:6px solid ${Y};border-radius:22px;padding:26px 34px;background:rgba(233,242,58,.10)"><div class="mono" style="font-size:26px;color:${Y}">👑 #1 · YANG PALING UTAMA DIMINTA</div><div style="font:900 60px Inter;margin-top:10px">petunjuk ke <span class="mk">jalan yang lurus</span></div></div>`, 'left:560px;top:320px', 34.4, 43.88, 'up', 'impact');
[['#2', 'harta?'], ['#3', 'jabatan?'], ['#4', 'jodoh?']].forEach(([n, s], i) => crd(`<div style="width:320px;border:3px dashed ${CR};border-radius:14px;padding:12px 18px;font:900 34px Inter;color:${CR}">${n} ${s}</div>`, `left:${560 + i * 360}px;top:610px`, 36.8 + i * .5, 43.88, 'up', 'tick'));
line(39.4, 43.88, 'left:560px;top:760px;width:1100px', 'itulah [pelajaran] yang Allah berikan pada ayat ini', { fs: 38, m: [41.0] });

// --- 04 /path-goal : jalan lurus menuju ridha Allah
scene(43.88, 68.24, { cut: 'glitch' });
line(43.9, 49.0, 'left:140px;top:130px;width:1640px', 'kenapa Allah menyuruh kita [memohon jalan yang lurus]?', { fs: 46, m: [46.4] });
sv(49.0, 68.24, DEFS + `<path d="M200 760 H1500" stroke="${Y}" stroke-width="8" stroke-linecap="round" data-d="1300" data-dur="2.4"/>` + `<circle cx="200" cy="760" r="22" fill="#fff"/>` + T(200, 830, 'kita', { fs: 34, fw: 900 }) +
  `<g data-f="2.4"><circle cx="1600" cy="760" r="90" fill="rgba(233,242,58,.15)" stroke="${Y}" stroke-width="6"/>` + T(1600, 750, 'RIDHA', { fs: 40, fw: 900, c: Y }) + T(1600, 795, 'ALLAH', { fs: 40, fw: 900, c: Y }) + '</g>', 'left:0;top:0', 1920, 1080, 1.0);
line(49.1, 56.0, 'left:140px;top:200px;width:1640px', 'jalan yang lurus itulah yang [menyampaikan kita kepada ridha Allah]', { fs: 42, m: [52.4] });
line(56.0, 64.9, 'left:140px;top:200px;width:1640px', 'jalan yang lurus itulah sesuatu yang [pasti baik] untuk kita', { fs: 42, m: [58.0] });
crd(box(1300, Y, `<div style="font:900 46px Inter">kalau meminta kepada Allah → mintalah yang <span class="mk">sudah jelas pasti baik</span></div>`, 'background:rgba(233,242,58,.08)'), 'left:310px;top:380px', 61.0, 68.24, 'scale', 'impact');

// --- 05 /checklist : contoh doa yang pasti baik
scene(68.24, 91.86, { cut: 'glitch' });
label('CONTOH DOA YANG PASTI BAIK', 68.3, 'left:160px;top:130px', 91.86);
[['🧭', 'petunjuk & hidayah ke jalan lurus', 68.6], ['💪', 'kekuatan iman', 74.2], ['💎', 'keyakinan yang benar-benar meyakinkan hati', 76.6], ['🌅', 'husnul khatimah', 81.2], ['🕊️', 'wafat dalam keadaan beriman', 83.7], ['🌿', 'ridha-Mu · selamat dunia & akhirat', 87.0]].forEach(([e, s, t], i) =>
  crd(`<div style="width:780px;height:150px;display:flex;align-items:center;gap:20px;border:3px solid ${Y};border-radius:16px;padding:0 24px;background:rgba(233,242,58,.05)"><div class="mono" style="font-size:28px;color:${Y}">0${i + 1}</div><div style="font-size:56px">${e}</div><div style="font:900 32px Inter;line-height:1.2">"ya Allah… ${s}"</div><div style="margin-left:auto;font:900 44px Inter;color:${CG}">✓</div></div>`, `left:${160 + (i % 2) * 830}px;top:${200 + Math.floor(i / 2) * 175}px`, t, 91.86, 'up', 'tick'));

// --- 06 /versus : pasti baik vs belum pasti baik
scene(91.86, 106.96, { cut: 'glitch' });
[['✓', 'PASTI BAIK', 'mintalah kepada Allah', CG, 92.0], ['⚠', 'BELUM PASTI BAIK', 'jangan diminta · dikhawatirkan mendatangkan MUDARAT', CR, 100.0]].forEach(([e, s, d, c, t], i) =>
  crd(`<div style="width:760px;height:520px;border:5px solid ${c};border-radius:20px;text-align:center;padding:40px 30px"><div style="font:900 130px Inter;color:${c}">${e}</div><div style="font:900 60px Inter;color:${c};margin-top:10px">${s}</div><div style="font:800 36px Inter;margin-top:16px;line-height:1.35">${d}</div></div>`, `left:${140 + i * 880}px;top:200px`, t, 106.96, 'up', 'stamp'));
crd('<div style="font:900 70px Inter">VS</div>', 'left:910px;top:410px', 99.6, 106.96, 'scale');

// --- 07 /rise-fall : rezeki luas belum tentu baik
scene(106.96, 130.66, { cut: 'glitch' });
jangan('"ya Allah, luaskanlah rezeki hamba"', 107.0, 130.66);
line(112.4, 117.8, 'left:160px;top:270px;width:1600px', 'kenapa? rezeki yang luas, yang halal pun [belum tentu baik] kepada kita', { fs: 40, m: [115.6] });
sv(117.8, 130.66, `<path d="M220 900 H1720" stroke="#fff" stroke-width="3" data-d="1500"/><path d="M260 820 C 520 820, 640 760, 760 720 S 1020 380, 1180 360" fill="none" stroke="${Y}" stroke-width="7" data-d="1100" data-dur="2.4"/><path d="M1180 360 C 1320 360, 1420 640, 1660 860" fill="none" stroke="${CR}" stroke-width="7" data-d="700" data-del="4.6" data-dur="1.6"/>` +
  `<circle cx="260" cy="820" r="16" fill="#fff"/>` + T(300, 880, 'miskin · taat kepada Allah', { fs: 32, fw: 900, a: 'start' }) + `<circle cx="1180" cy="360" r="18" fill="${Y}" data-f="2.2"/>` + T(1180, 320, 'harta melimpah ruah 💰', { f: 2.2, fs: 34, fw: 900, c: Y }) +
  `<circle cx="1660" cy="860" r="18" fill="${CR}" data-f="6.0"/>` + T(1640, 830, 'SESAT · lupa Allah', { f: 6.0, fs: 34, fw: 900, c: CR, a: 'end' }), 'left:0;top:0', 1920, 1080, 1.0);
chip('CONTOH: SEORANG SAHABAT DI ZAMAN NABI ﷺ', 126.6, 'left:160px;top:960px', 130.66, CR);

// --- 08 /formula : doa rezeki bersyarat
scene(130.66, 147.52, { cut: 'glitch' });
jangan('minta "luaskan rezeki"…', 130.7, 147.52);
seg('kecuali [bersyarat]<br>permohonannya', 136.3, 'left:160px;top:270px;width:1600px', { size: 70, iv: .03, marks: [137.4] });
condDoa(136.9, 147.52, 'ya Allah, luaskan rezeki hamba seluas-luasnya, jika itu membawa kebaikan kepada hamba', 143.5, 145.2, 146.3, 520);

// --- 09 /ballot : jangan minta jabatan
scene(147.52, 168.88, { cut: 'glitch' });
jangan('minta kedudukan & jabatan', 147.6, 168.88);
crd(`<div style="text-align:center;width:420px"><div style="font-size:170px">🗳️</div><div style="font:italic 900 40px Inter;margin-top:6px">"ya Allah, menangkan hamba"</div><div style="font:900 54px Inter;color:${CR};margin-top:8px">✕ JANGAN</div></div>`, 'left:200px;top:320px', 151.9, 168.88, 'scale', 'stamp');
line(157.4, 160.6, 'left:760px;top:330px;width:1000px', 'belum tentu memberikan [kebaikan] kepada dirinya', { fs: 40, m: [158.8] });
sv(160.6, 168.88, DEFS + [['berbuat DOSA di dunia', 0], ['SIKSA di akhirat', 2.6], ['masuk NERAKA', 5.6]].map(([s, d], i) => BOX(780, 420 + i * 170, 760, 110, { s: CR, sw: 5, del: d, fill: 'rgba(255,138,92,.08)' }) + T(1160, 488 + i * 170, s, { f: d + .2, fs: 40, fw: 900, c: CR }) + (i < 2 ? `<g data-f="${d + 1.4}">` + LN([[1160, 532 + i * 170], [1160, 586 + i * 170]], { s: CR, sw: 5, arrow: 1 }) + '</g>' : '')).join(''), 'left:0;top:0', 1920, 1080, .8);

// --- 10 /formula : doa pemilihan bersyarat
scene(168.88, 187.9, { cut: 'glitch' });
line(168.9, 174.6, 'left:160px;top:150px;width:1600px', 'kalaupun hendak ikut pemilihan… buatlah doanya [bersyarat]', { fs: 44, m: [173.2] });
crd('<div style="font-size:150px">🏘️🏙️</div>', 'left:760px;top:250px', 174.6, 187.9, 'scale', 'tick');
condDoa(174.6, 187.9, 'ya Allah, jadikanlah hamba menang dalam pemilihan di kampung ini, kota ini, jika itu membawa kebaikan kepadaku', 182.6, 184.4, 186.8, 520);

// --- 11 /ecg : sakit membuat ingat Allah
scene(187.9, 215.4, { cut: 'glitch' });
jangan('cepat-cepat minta sehat', 187.9, 215.4);
line(192.0, 196.1, 'left:160px;top:260px;width:1600px', 'karena sehat [belum tentu] mendatangkan kebaikan', { fs: 42, m: [193.6] });
(() => { const n = node(`<svg width="1600" height="220" viewBox="0 0 1600 220"><path class="ecg" d="" fill="none" stroke="${CG}" stroke-width="5" stroke-linejoin="round"/></svg>`, 'left:160px;top:360px', 'dimmable');
  item(196.1, 215.4, n, (lt, t, it) => { n.style.opacity = clamp(lt / .3) * clamp((it.t1 - t) / .3); let d = 'M0 110'; for (let x = 0; x <= 1600; x += 8) { const ph = ((x / 1600) * 6 - lt * 1.4) % 1, ph2 = ph < 0 ? ph + 1 : ph; const y = ph2 > .45 && ph2 < .5 ? 110 - 90 * Math.sin((ph2 - .45) / .05 * Math.PI) : ph2 > .5 && ph2 < .54 ? 110 + 40 * Math.sin((ph2 - .5) / .04 * Math.PI) : 110; d += ` L${x} ${y.toFixed(1)}`; } n.querySelector('.ecg').setAttribute('d', d); }); sfx(196.2, 'beep', .6); })();
[['🤒 sakit', 196.2, '#fff'], ['→ ingat Allah', 198.0, CG], ['📿 berzikir', 200.0, CG], ['🤲 banyak berdoa', 201.6, CG], ['"sedikit-sedikit berdoa · sedikit-sedikit berzikir"', 202.8, Y]].forEach(([s, t, c], i) => crd(`<div style="font:900 ${i === 4 ? 34 : 40}px Inter;color:${c}">${s}</div>`, `left:${i === 4 ? 160 : 160 + i * 380}px;top:${i === 4 ? 720 : 620}px`, t, 215.4, 'up', 'tick'));
crd(box(1400, Y, `<div style="font:900 40px Inter">sakit yang membuat ingat Allah → <span class="mk">jangan cepat-cepat minta sehat</span></div>`, 'background:rgba(233,242,58,.07)'), 'left:160px;top:820px', 206.8, 215.4, 'up', 'impact');

// --- 12 /formula : doa sehat bersyarat
scene(215.4, 234.18, { cut: 'glitch' });
line(215.5, 222.0, 'left:160px;top:150px;width:1600px', 'kalau hendak meminta sehat juga → [bersyarat] permohonannya', { fs: 44, m: [221.0] });
condDoa(217.3, 234.18, 'ya Allah, sehatkanlah hamba-Mu ini jika itu akan menambah ketaatan & ketakwaan kepada-Mu', 225.5, 226.6, 228.0, 300);
line(228.3, 234.18, 'left:210px;top:840px;width:1500px', 'itulah permohonan yang [sudah pasti membawa kebaikan]', { fs: 40, m: [231.0] });

// --- 13 /scripture : Ghafir 60
scene(234.18, 252.5, { cut: 'glitch' });
line(234.2, 241.0, 'left:160px;top:130px;width:1600px', '"tidak boleh kita berdoa kepada Allah?" → [boleh, boleh saja!]', { fs: 44, m: [238.0] });
paper(240.6, 'left:160px;top:250px;width:1600px;height:420px', '', 252.5);
arw(node('وَقَالَ رَبُّكُمُ [ادْعُونِي أَسْتَجِبْ لَكُمْ]', 'left:220px;width:1480px;top:290px;text-align:center;font-size:96px;line-height:1.7;color:#151515'), 241.0, 3.0, { marks: [242.4] });
kin(node('', 'left:260px;top:520px;width:1400px;font:700 40px Inter;color:#222;text-align:center;line-height:1.3'), 'mintalah kepada-Ku, [niscaya akan Aku perkenankan]', 244.3, { iv: .03, marks: [246.0], t1: 252.5 });
chip("QS. GHAFIR : 60", 242.0, 'left:160px;top:700px', 252.5, Y);
line(247.9, 252.5, 'left:160px;top:800px;width:1600px', 'permintaan [seperti apa] yang akan diperkenankan Allah?', { fs: 42, m: [249.4] });

// --- 14 /ocean : ilmu kita setetes
scene(252.5, 266.68, { cut: 'glitch' });
line(252.6, 266.68, 'left:140px;top:130px;width:1640px', 'jaga kehati-hatian · mintalah [sesuatu yang membawa kebaikan]', { fs: 42, m: [258.0] });
sv(260.3, 266.68, `<circle cx="1180" cy="620" r="320" fill="rgba(127,214,255,.10)" stroke="${CB}" stroke-width="5" data-d="2010"/>` + T(1180, 610, 'ILMU ALLAH', { f: .6, fs: 54, fw: 900, c: CB }) + T(1180, 670, 'tak terbatas', { f: .8, fs: 34, fw: 800 }) +
  `<path d="M440 600 C 470 640 480 660 480 680 A40 40 0 0 1 400 680 C 400 660 410 640 440 600Z" fill="${Y}" data-f="2.4"/>` + T(440, 780, 'ilmu kita', { f: 2.6, fs: 36, fw: 900, c: Y }) + T(440, 825, 'sangat sedikit', { f: 2.8, fs: 30, fw: 800 }), 'left:0;top:0', 1920, 1080, 1.4);

// --- 15 /compass : jodoh bersyarat
scene(266.68, 302.1, { cut: 'glitch' });
jangan('cepat-cepat minta jodoh', 266.7, 302.1);
crd('<div style="font-size:120px">💍</div>', 'left:1560px;top:120px', 268.8, 302.1, 'drop', 'tick');
line(268.8, 279.8, 'left:160px;top:270px;width:1300px', 'laki-laki maupun perempuan yang [merasa lambat dapat jodoh] · kecuali permohonannya bersyarat', { fs: 38, m: [272.0] });
crd(`<div style="width:1500px;border:4px solid ${CG};border-radius:20px;padding:22px 32px;background:rgba(127,224,160,.06)"><div style="font:italic 800 38px Inter">"ya Allah, permudahkan hamba mendapatkan pasangan, kalau itu mendatangkan kebaikan…"</div></div>`, 'left:210px;top:270px', 279.8, 302.1, 'up', 'paper');
crd(`<div class="ar" style="font-size:60px;color:#111;background:${Y};border-radius:12px;padding:0 24px">${IKH}</div>`, 'left:210px;top:420px', 286.1, 302.1, 'scale', 'impact');
[['✓ membuat hamba lebih taat', 290.6, CG, 'left:210px;top:580px'], ['✓ lebih rajin beribadah', 293.4, CG, 'left:210px;top:660px'], ['✕ jangan membuat hamba lupa', 297.2, CR, 'left:1000px;top:580px'], ['✕ jangan membuat hamba lalai', 299.0, CR, 'left:1000px;top:660px']].forEach(([s, t, c, css]) => crd(`<div style="font:900 40px Inter;color:${c}">${s}</div>`, css, t, 302.1, 'left', 'tick'));

// --- 16 /gate : anak belum tentu membawa kebaikan
scene(302.1, 341.58, { cut: 'glitch' });
jangan('sembarang minta keturunan', 304.1, 323.8);
line(313.0, 315.3, 'left:160px;top:250px;width:1600px', 'anak [belum tentu] membawa kebaikan kepada kita', { fs: 42, m: [314.0] });
sv(315.4, 323.8, DEFS + `<path d="M1500 360 V760 M1700 360 V760 M1480 360 Q1600 250 1720 360" fill="none" stroke="${CG}" stroke-width="6" data-d="900"/>` + T(1600, 820, 'SURGA', { f: .5, fs: 40, fw: 900, c: CG }) +
  LN([[300, 640], [1440, 640]], { s: '#fff', sw: 5, arrow: 1 }) + `<circle cx="300" cy="640" r="20" fill="#fff"/>` +
  `<g data-f="3.6">${LN([[1440, 700], [400, 880]], { s: CR, sw: 6, arrow: 1 })}</g>` + T(900, 900, 'DITARIK KE NERAKA · karena anaknya', { f: 4.4, fs: 36, fw: 900, c: CR }), 'left:0;top:0', 1920, 1080, 1.6);
seg('kalaupun hendak meminta →<br>harus [bersyarat]', 323.8, 'left:160px;top:200px;width:1600px', { size: 70, iv: .03, marks: [326.4] });
[['01', 'anak yang membawa kebaikan', 328.4], ['02', 'niat & bersungguh-sungguh mendidiknya', 332.3], ['03', 'menjadi anak yang taat kepada Allah', 337.7]].forEach(([n, s, t], i) => crd(`<div style="width:500px;height:220px;border:4px solid ${CG};border-radius:18px;padding:24px"><div class="mono" style="font-size:30px;color:${CG}">${n}</div><div style="font:900 36px Inter;margin-top:12px;line-height:1.2">${s}</div></div>`, `left:${160 + i * 560}px;top:520px`, t, 341.58, 'left', 'click'));

// --- 17 /mosaic : yang boleh diminta
scene(341.58, 365.9, { cut: 'glitch' });
label('YANG PASTI BAIK UNTUK DIMINTA', 341.6, 'left:160px;top:130px', 365.9);
[['📚', 'ilmu yang bermanfaat · mendekatkan kepada Allah', 341.7], ['🕌', 'rajin beramal saleh & beribadah', 349.5], ['🛡️', 'hati dikuatkan · dijauhkan dari dosa', 354.5], ['🕰️', 'mudah salat lima waktu sampai mati', 359.5]].forEach(([e, s, t], i) =>
  crd(`<div style="width:370px;height:420px;border:4px solid ${Y};border-radius:20px;text-align:center;padding:40px 24px;background:rgba(233,242,58,.06)"><div class="mono" style="font-size:28px;color:${Y}">0${i + 1}</div><div style="font-size:110px;margin-top:10px">${e}</div><div style="font:900 32px Inter;margin-top:16px;line-height:1.25">${s}</div></div>`, `left:${160 + i * 410}px;top:220px`, t, 365.9, 'up', 'tick'));
line(361.0, 365.9, 'left:160px;top:720px;width:1600px', 'minta yang [pasti mendatangkan kebaikan]', { fs: 44, m: [362.6] });

// --- 18 /callout : yang paling penting
scene(365.9, 388.7, { cut: 'glitch' });
crd(`<div style="width:1500px;border:5px solid ${Y};border-radius:20px;padding:30px 40px;background:rgba(233,242,58,.08)"><div class="mono" style="font-size:24px;color:${Y}">💡 YANG PALING PENTING</div><div style="font:900 62px Inter;margin-top:14px">mintalah <span class="mk">jalan yang lurus</span></div></div>`, 'left:210px;top:200px', 376.4, 388.7, 'scale', 'beep');
line(366.0, 376.0, 'left:210px;top:220px;width:1500px', 'ayat ini mengajarkan: mintalah sesuatu yang [pasti mendatangkan kebaikan]', { fs: 44, m: [372.0] });
seg('jalan yang lurus itu sangat luas maknanya →<br>termasuk [agama Islam]', 382.9, 'left:210px;top:540px;width:1500px', { size: 54, iv: .025, marks: [386.6] });

// --- 19 /dot-grid : 73 golongan
scene(388.7, 400.2, { cut: 'glitch' });
line(388.8, 400.2, 'left:140px;top:120px;width:1640px', 'umatku akan terpecah menjadi [73 golongan] · hanya satu yang masuk surga', { fs: 40, m: [393.0] });
(() => { let h = '<div style="display:grid;grid-template-columns:repeat(19,62px);gap:12px">'; for (let i = 0; i < 73; i++) h += `<div class="dt" style="width:62px;height:62px;border-radius:50%;border:3px solid rgba(255,255,255,.35);display:flex;align-items:center;justify-content:center;font:700 20px 'DejaVu Sans Mono';color:rgba(255,255,255,.6)">${i + 1}</div>`; const n = node(h + '</div>', 'left:150px;top:250px');
  item(389.0, 400.2, n, (lt, t, it) => { n.style.opacity = clamp(lt / .3) * clamp((it.t1 - t) / .3); n.querySelectorAll('.dt').forEach((d, i) => { const on = i === 36 && t > 395.2; d.style.opacity = clamp((lt - i * .03) / .2) * (t > 395.2 && !on ? .3 : 1); d.style.background = on ? Y : 'transparent'; d.style.color = on ? '#111' : 'rgba(255,255,255,.6)'; d.style.borderColor = on ? Y : 'rgba(255,255,255,.35)'; d.style.transform = on ? 'scale(1.4)' : ''; }); }); sfx(395.2, 'impact', .8); })();
crd(`<div style="font:900 46px Inter">yang satu itulah → <span class="mk">ash-shiratal mustaqim</span></div>`, 'left:400px;top:690px', 396.8, 400.2, 'up', 'beep');
chip('HR. ABU DAWUD 4596 · AT-TIRMIDZI 2641 · IBNU MAJAH 3992', 393.4, 'left:150px;top:830px', 400.2, Y);

// --- 20 /layers : ilmu yang lurus
scene(400.2, 430.8, { cut: 'glitch' });
label('ILMU YANG SHIRATAL MUSTAQIM · ILMU YANG LURUS', 400.3, 'left:140px;top:120px', 430.8);
[['ibadah kita menjadi SAH', 400.3], ['ibadah DITERIMA Allah', 404.8], ['membuat kita TAKUT kepada Allah', 408.8], ['CINTA kepada Allah, Rasul & keluarganya', 411.0], ['merasa DIAWASI Allah', 416.8], ['tidak merasa lebih baik dari orang lain', 419.8], ['lebih TAAT & lebih DEKAT kepada Allah', 423.4]].forEach(([s, t], i) =>
  crd(`<div style="width:${1000 + i * 60}px;height:84px;background:${i === 6 ? Y : 'rgba(233,242,58,.08)'};border:3px solid ${Y};color:${i === 6 ? '#111' : '#fff'};display:flex;align-items:center;padding:0 30px;transform:skewX(-10deg)"><span style="transform:skewX(10deg);font:900 34px Inter"><span class="mono">0${i + 1}</span> · ${s}</span></div>`, `left:${170 + i * 24}px;top:${180 + i * 100}px`, t, 430.8, 'drop', 'tick'));

// --- 21 /split : ibadah lurus & usaha lurus
scene(430.8, 455.0, { cut: 'glitch' });
crd(`<div style="width:720px;height:620px;border:5px solid ${Y};border-radius:20px;padding:34px"><div class="mono" style="font-size:26px;color:${Y}">IBADAH YANG LURUS</div><div style="font-size:110px;margin-top:20px">🔁</div><div style="font:900 46px Inter;margin-top:20px;line-height:1.2">ibadah yang <span class="mk">terus-menerus</span> dikerjakan</div></div>`, 'left:140px;top:170px', 431.7, 455.0, 'up', 'stamp');
crd(`<div style="width:820px;height:620px;border:5px solid ${CG};border-radius:20px;padding:34px"><div class="mono" style="font-size:26px;color:${CG}">USAHA YANG LURUS</div></div>`, 'left:940px;top:170px', 438.1, 455.0, 'up', 'stamp');
[['💼 usaha yang HALAL', 439.8], ['🕌 tidak mengganggu ibadah · tidak meninggalkan salat', 442.0], ['🤝 tidak mengganggu berbuat baik & amal saleh', 445.2], ['👨‍👩‍👧 tidak mengganggu silaturahmi', 450.0]].forEach(([s, t], i) => crd(`<div style="font:900 32px Inter;width:740px;line-height:1.25">${s}</div>`, `left:980px;top:${280 + i * 120}px`, t, 455.0, 'left', 'tick'));

// --- 22 /sequence : ibadah dulu baru berdoa
scene(455.0, 473.2, { cut: 'glitch' });
line(455.1, 460.1, 'left:140px;top:130px;width:1640px', 'ayat ini [sangat terkait] dengan ayat sebelumnya', { fs: 46, m: [457.6] });
[['AYAT 5', 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', 'IBADAH dulu', 460.2, Y], ['AYAT 6', 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ', 'baru BERDOA', 463.0, CG]].forEach(([a, ar, s, t, c], i) =>
  crd(`<div style="width:720px;height:380px;border:5px solid ${c};border-radius:20px;text-align:center;padding:28px"><div class="mono" style="font-size:26px;color:${c}">0${i + 1} · ${a}</div><div class="ar" style="font-size:64px;margin-top:20px">${ar}</div><div style="font:900 48px Inter;color:${c};margin-top:16px">${s}</div></div>`, `left:${180 + i * 860}px;top:260px`, t, 473.2, 'left', 'stamp'));
crd(`<div style="font:900 90px Inter;color:${Y}">→</div>`, 'left:915px;top:390px', 462.6, 473.2, 'scale');
line(466.2, 473.2, 'left:180px;top:720px;width:1560px;text-align:center', 'sebelum meminta kepada Allah · alangkah baiknya [beribadah dulu]', { fs: 42, m: [470.0] });

// --- 23 /search : hadis hati yang lalai
scene(473.2, 488.6, { cut: 'glitch', light: 1 });
searchFind(473.2, 488.6, {
  q: 'ادعوا الله وأنتم موقنون بالإجابة واعلموا أن الله لا يستجيب دعاء من قلب غافل لاه', count: 4, pick: 0, shelfPick: 0, times: { type: .4, scan: 1.8, res: 2.6, click: 3.6, det: 4.0 },
  shelf: [['Sunan at-Tirmidzi', 'سنن الترمذي'], ['Al-Mustadrak · al-Hakim', 'المستدرك'], ['Jami\' al-Ushul · Ibnu al-Atsir', 'جامع الأصول'], ['At-Tamhid · Ibnu \'Abdil Barr', 'التمهيد'], ['Mashabih as-Sunnah · al-Baghawi', 'مصابيح السنة']],
  results: [
    { title: 'Sunan at-Tirmidzi · no. 3479', tag: 'COCOK', ar: 'ادْعُوا اللَّهَ وَأَنْتُمْ مُوقِنُونَ بِالْإِجَابَةِ', sub: 'berdoalah dalam keadaan yakin akan dikabulkan' },
    { title: "Jami' al-Ushul · j. 4 hlm. 153 · no. 2119", tag: 'DINUKIL', ar: 'لَا يَسْتَجِيبُ دُعَاءً مِنْ قَلْبٍ غَافِلٍ لَاهٍ', sub: 'tidak dikabulkan doa dari hati yang lalai' },
    { title: "At-Tamhid · Ibnu 'Abdil Barr · j. 3 hlm. 741", tag: 'TAKHRIJ', ar: 'إِنَّ اللَّهَ لَا يَقْبَلُ', sub: 'jalur-jalur riwayat & penilaiannya' },
    { title: 'Al-Mustadrak · al-Hakim · j. 1 hlm. 493', tag: 'RIWAYAT', ar: 'مِنْ قَلْبٍ غَافِلٍ', sub: 'diriwayatkan juga oleh al-Hakim' }],
  det: { title: 'Sunan at-Tirmidzi', ar: 'سُنَنُ التِّرْمِذِيِّ', rows: [['NOMOR', '3479 · bab ad-Da\'awat'], ['PERAWI SAHABAT', "Abu Hurairah radhiyallahu 'anhu"], ['ISI 1', 'berdoalah dengan yakin akan dikabulkan'], ['ISI 2', 'Allah tidak mengabulkan doa dari hati yang lalai'], ['PENILAIAN', 'at-Tirmidzi: gharib · ada perawi lemah (Shalih al-Murri)'], ['DIRIWAYATKAN JUGA', 'al-Hakim · ath-Thabrani · al-Baihaqi'], ['PELAJARAN', 'hati harus hadir ketika berdoa']], quote: 'وَاعْلَمُوا أَنَّ اللَّهَ لَا يَسْتَجِيبُ دُعَاءً مِنْ قَلْبٍ غَافِلٍ لَاهٍ' }
});
camTour(473.2, 488.6, { type: .4, scan: 1.8, res: 2.6, click: 3.6, det: 4.0 });

// --- 24 /heart-check : mulut berdoa, hati lalai
scene(488.6, 502.9, { cut: 'glitch' });
[['👄', 'MULUT berdoa', '✓', CG, 489.0], ['🫀', 'HATI lalai · tidak hadir', '✕', CR, 491.0]].forEach(([e, s, m, c, t], i) => crd(`<div style="width:500px;height:400px;border:5px solid ${c};border-radius:20px;text-align:center;padding-top:40px"><div style="font-size:120px">${e}</div><div style="font:900 40px Inter;color:${c};margin-top:14px">${s}</div><div style="font:900 60px Inter;color:${c}">${m}</div></div>`, `left:${160 + i * 580}px;top:200px`, t, 502.9, 'up', 'stamp'));
crd(`<div style="width:520px;height:400px;border:6px solid ${CR};border-radius:20px;background:rgba(255,138,92,.12);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center"><div style="font:900 56px Inter;color:${CR}">= TIDAK DIKABULKAN</div></div>`, 'left:1240px;top:200px', 497.0, 502.9, 'scale', 'impact');
line(493.0, 502.9, 'left:160px;top:700px;width:1600px', 'hati tidak ikut [hadir] saat berdoa bersama Allah → Allah tidak mengabulkan doa kita', { fs: 40, m: [494.6] });

// --- 25 /scripture : An-Naml 62 + hanya Allah
scene(502.9, 520.2, { cut: 'glitch' });
line(503.0, 505.4, 'left:160px;top:130px;width:1600px', 'Al-Qur\'an juga [memberikan petunjuk]', { fs: 44, m: [504.0] });
paper(505.0, 'left:160px;top:210px;width:1600px;height:300px', '', 512.0);
arw(node('أَمَّنْ يُجِيبُ [الْمُضْطَرَّ] إِذَا دَعَاهُ', 'left:220px;width:1480px;top:240px;text-align:center;font-size:96px;line-height:1.7;color:#151515'), 505.3, 2.4, { marks: [507.0], t1: 512.0 });
chip('QS. AN-NAML : 62', 506.0, 'left:160px;top:530px', 512.0, Y);
kin(node('', 'left:260px;top:410px;width:1400px;font:700 40px Inter;color:#222;text-align:center'), '"Allah mengabulkan doa orang yang [mudhtar]"', 508.0, { iv: .03, marks: [509.4], t1: 512.0 });
sv(512.0, 520.2, ['', '', '', '', '', ''].map((_, i) => { const a = i / 6 * Math.PI * 2; return `<circle cx="${960 + Math.cos(a) * 330}" cy="${640 + Math.sin(a) * 250}" r="46" fill="none" stroke="#fff" stroke-width="4" data-f="${(i * .2).toFixed(1)}"/>` + T(960 + Math.cos(a) * 330, 652 + Math.sin(a) * 250, '👤', { f: i * .2, fs: 40 }) + `<path d="M${960 + Math.cos(a) * 280} ${640 + Math.sin(a) * 200} L${960 + Math.cos(a) * 380} ${640 + Math.sin(a) * 300}" stroke="${CR}" stroke-width="6" data-d="140" data-del="${(2.4 + i * .2).toFixed(1)}"/>`; }).join('') +
  `<circle cx="960" cy="640" r="110" fill="rgba(233,242,58,.15)" stroke="${Y}" stroke-width="6" data-f="4.6"/>` + T(960, 655, 'hanya ALLAH', { f: 4.8, fs: 40, fw: 900, c: Y }), 'left:0;top:0', 1920, 1080, .8);
line(512.0, 520.2, 'left:160px;top:200px;width:1600px', 'orang yang [tidak melihat siapa pun] yang bisa menolongnya · kecuali hanya Allah', { fs: 40, m: [514.0] });

// --- 26 /process : hati dibawa beribadah lalu berdoa
scene(520.2, 535.7, { cut: 'glitch' });
[['🕌', 'hati dibawa BERIBADAH', 520.3], ['🫙', 'hati DIKOSONGKAN', 525.5], ['✨', 'diisi hanya ALLAH', 527.4], ['🤲', 'lalu BERDOA', 530.6]].forEach(([e, s, t], i) => crd(`<div style="width:380px;height:320px;border:${i === 3 ? 6 : 3}px solid ${Y};border-radius:18px;text-align:center;padding-top:34px;background:${i === 3 ? 'rgba(233,242,58,.1)' : 'transparent'}"><div class="mono" style="font-size:26px;color:${Y}">0${i + 1}</div><div style="font-size:90px;margin-top:6px">${e}</div><div style="font:900 34px Inter;margin-top:10px">${s}</div></div>`, `left:${130 + i * 430}px;top:220px`, t, 535.7, 'left', 'click'));
sv(525.5, 535.7, DEFS + [0, 1, 2].map(i => `<g data-f="${[0, 1.9, 5.1][i]}">` + LN([[512 + i * 430, 380], [556 + i * 430, 380]], { s: Y, sw: 6, arrow: 1 }) + '</g>').join(''), 'left:0;top:0', 1920, 1080, .3);
crd(`<div style="font:900 52px Inter;color:#111;background:${Y};border-radius:12px;padding:12px 30px">insya Allah doa itu diperkenankan ✓</div>`, 'left:440px;top:640px', 531.5, 535.7, 'scale', 'impact');

// --- 27 /scripture : Al-Baqarah 186
scene(535.7, 561.3, { cut: 'glitch' });
line(535.8, 538.6, 'left:160px;top:130px;width:1600px', 'Allah ﷻ [melanjutkan] di dalam Al-Qur\'an…', { fs: 44, m: [537.0] });
paper(538.4, 'left:160px;top:210px;width:1600px;height:460px', '', 561.3);
arw(node('وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي [قَرِيبٌ] أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ [فَلْيَسْتَجِيبُوا لِي]', 'left:220px;width:1480px;top:230px;text-align:center;font-size:62px;line-height:1.8;color:#151515'), 538.7, 8.0, { marks: [541.6, 546.6] });
kin(node('', 'left:260px;top:520px;width:1400px;font:700 34px Inter;color:#222;text-align:center;line-height:1.3'), 'Aku dekat · Aku kabulkan doa hamba-Ku bila ia berdoa · dan hendaklah mereka [memenuhi perintah-Ku]', 547.8, { iv: .025, marks: [555.4], t1: 561.3 });
chip('QS. AL-BAQARAH : 186', 539.0, 'left:160px;top:690px', 561.3, Y);
crd(`<div style="display:flex;gap:24px;align-items:center"><div style="font:900 40px Inter;border:4px solid ${Y};border-radius:12px;padding:10px 22px">01 laksanakan PERINTAH Allah</div><div style="font:900 50px Inter;color:${Y}">→</div><div style="font:900 40px Inter;color:#111;background:${Y};border-radius:12px;padding:10px 22px">02 baru BERDOA</div></div>`, 'left:330px;top:820px', 557.8, 561.3, 'up', 'impact');

// --- 28 penutup : doa penutup
scene(561.3, TOTAL, { cut: 'hard' });
mePol('left:200px;top:200px', 561.4, TOTAL, -4, 400);
label('DOA PENUTUP · 3 PELAJARAN EP 12', 561.5, 'left:760px;top:180px', TOTAL);
[['01', 'mintalah yang PASTI BAIK · jalan yang lurus', 563.0], ['02', `yang belum pasti → <span class="ar" style="font-size:40px">${IKH}</span>`, 567.0], ['03', 'hati hadir · taati perintah-Nya dulu', 571.0]].forEach(([n, s, t], i) => crd(`<div style="width:1000px;border-left:8px solid ${Y};background:rgba(233,242,58,.06);padding:14px 24px;font:900 36px Inter"><span class="mono" style="color:${Y}">${n}</span> · ${s}</div>`, `left:760px;top:${250 + i * 110}px`, t, TOTAL, 'left', 'tick'));
(() => { const n = node('<div style="font-size:120px">🤲</div>', 'left:1640px;top:410px', 'dimmable'); item(575.0, TOTAL, n, (lt, t, it) => { n.style.opacity = clamp(lt / .4) * clamp((it.t1 - t) / .3); n.style.filter = `drop-shadow(0 0 ${18 + 14 * Math.abs(Math.sin(t * 1.5))}px #e9f23a)`; }); })();
sub2('left:760px;top:620px', 578.0, TOTAL);
line(590.4, TOTAL, 'left:760px;top:860px;width:1000px', '…dan Engkau [kabulkan hajatku]', { fs: 46, c: Y, m: [591.4] });

// ================================================================== JADWAL KODE VISUAL
[[0, 6.98, '/kinetic-type'], [6.98, 24.34, '/road'], [24.34, 43.88, '/ranking'], [43.88, 68.24, '/path-goal'], [68.24, 91.86, '/checklist'], [91.86, 106.96, '/versus'], [106.96, 130.66, '/rise-fall'], [130.66, 147.52, '/formula'],
 [147.52, 168.88, '/chain'], [168.88, 187.9, '/formula'], [187.9, 215.4, '/ecg'], [215.4, 234.18, '/formula'], [234.18, 252.5, '/scripture'], [252.5, 266.68, '/scale-compare'], [266.68, 302.1, '/condition'], [302.1, 341.58, '/gate'],
 [341.58, 365.9, '/mosaic'], [365.9, 388.7, '/callout'], [388.7, 400.2, '/dot-grid'], [400.2, 430.8, '/layers'], [430.8, 455.0, '/split-screen'], [455.0, 473.2, '/sequence'], [473.2, 488.6, '/search'], [488.6, 502.9, '/heart-check'],
 [502.9, 520.2, '/scripture'], [520.2, 535.7, '/process'], [535.7, 561.3, '/scripture'], [561.3, TOTAL, '/teaser']]
 .reduce((acc, [a, b, c]) => { if (!acc.m[c]) acc.m[c] = String(++acc.n).padStart(2, '0'); codeTag(a, b, acc.m[c], c); return acc; }, { n: 0, m: {} });
