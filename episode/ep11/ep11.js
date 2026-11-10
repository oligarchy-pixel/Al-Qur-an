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


// ================================================================== EP 11 · Musuh di Dalam Diri (2D; adegan 3D dirender terpisah di proj11/3d)

// rangka rusuk garis (2D) dengan bara nafsu berdenyut
function ribs(t0, t1, css, calmAt) { const u = Math.round(t0); let g = `<defs><radialGradient id="emb${u}" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ffd27a"/><stop offset=".35" stop-color="#ff5a3c"/><stop offset="1" stop-color="rgba(255,90,60,0)"/></radialGradient><radialGradient id="cal${u}" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#fff6c0"/><stop offset=".4" stop-color="#e9f23a"/><stop offset="1" stop-color="rgba(233,242,58,0)"/></radialGradient></defs>`;
  g += `<path d="M300 40 V600" stroke="#ebe6d6" stroke-width="10" stroke-linecap="round" data-d="560"/>`;
  for (let i = 0; i < 9; i++) { const y = 80 + i * 50, w = 110 + Math.sin((i + 1.5) / 10.5 * Math.PI) * 120, d = 34 + i * 4; [-1, 1].forEach(sd => g += `<path d="M${300 + sd * 8} ${y} C ${300 + sd * w * .95} ${y - 14}, ${300 + sd * w * 1.08} ${y + d * 1.0}, ${300 + sd * w * .42} ${y + d * 1.75}" fill="none" stroke="#ebe6d6" stroke-width="6" stroke-linecap="round" data-d="${Math.ceil(w * 1.6 + d)}" data-del="${(.2 + i * .12).toFixed(2)}"/>`); }
  g += `<circle class="em" cx="300" cy="330" r="90" fill="url(#emb${u})" data-f="1.2"/><circle class="ca" cx="300" cy="330" r="110" fill="url(#cal${u})" opacity="0"/>`;
  const n = sv(t0, t1, g, css, 600, 640, 1.0); const em = n.querySelector('.em'), ca = n.querySelector('.ca');
  item(t0, t1, node('', 'left:0;top:0'), (lt, t) => { const p = .5 + .5 * Math.sin(t * 5.2), k = calmAt ? clamp((t - calmAt) / 4) : 0; em.setAttribute('r', (70 + 26 * p) * (1 - k * .5)); ca.setAttribute('opacity', k * .9); });
  return n; }

// --- 01 pembuka (/kinetic-type)
scene(0, 7.0, { cut: 'none' });
arw(node(BSM, 'left:140px;top:130px;width:1000px;font-size:62px;color:#fff;text-align:left'), .1, 1.1);
label('FILE 11 · LANJUTAN SURAH AL-FATIHAH', 1.3, 'left:140px;top:285px');
seg('Musuh di<br>Dalam [Diri]', 1.6, 'left:140px;top:335px;width:1100px', { size: 110, iv: .05, marks: [3.4] });
arw(node('[إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ]', 'left:140px;top:620px;width:1000px;font-size:58px;color:#fff;text-align:left'), 5.0, 1.6, { marks: [6.2] });
mePol('left:1300px;top:150px', .4, 7.0, 4, 400);
meTag(1.4, 7.0, 'النَّفْسُ · إِيَّاكَ نَسْتَعِينُ');

// --- 03 /exploded-view
scene(7.0, 18.0, { cut: 'glitch' });
[['نَعْبُدُ', 'kami menyembah · beribadah', '#fff', 7.1], ['نَسْتَعِينُ', 'kami meminta pertolongan', Y, 11.2]].forEach(([a, s, c, t], i) =>
  crd(`<div style="width:700px;height:330px;border:${i ? 6 : 3}px solid ${c};border-radius:20px;text-align:center;padding-top:30px;background:${i ? 'rgba(233,242,58,.08)' : 'transparent'}"><div class="ar" style="font-size:110px;color:${c}">${a}</div><div style="font:900 40px Inter;margin-top:6px;color:${c}">${s}</div></div>`, `left:${1040 - i * 840}px;top:180px`, t, 18.0, 'drop', 'stamp'));
sv(13.0, 18.0, DEFS + LN([[550, 520], [550, 640]], { s: Y, sw: 6, arrow: 1 }), 'left:0;top:0', 1920, 1080, .5);
crd(box(1100, CR, `<div class="mono" style="font-size:24px;color:${CR}">TERKHUSUS PERTOLONGAN UNTUK</div><div style="font:900 52px Inter;margin-top:8px">menahan <span class="mk">nafsu</span> dari perbuatan tidak baik</div>`, 'background:rgba(255,138,92,.08)'), 'left:200px;top:690px', 13.8, 18.0, 'up', 'impact');

// --- 04 /alert
scene(18.0, 28.0, { cut: 'glitch' });
(() => { const n = node(`<div style="width:1400px;height:300px;border:8px solid ${CR};border-radius:30px;display:flex;align-items:center;justify-content:center;gap:30px"><div style="font-size:120px">⚠</div><div style="font:900 130px Inter;color:${CR}">NAFSU</div></div>`, 'left:260px;top:170px', 'dimmable');
  item(18.1, 28.0, n, (lt, t, it) => { n.style.opacity = clamp(lt / .3) * clamp((it.t1 - t) / .3); n.firstChild.style.boxShadow = `0 0 ${30 + 40 * Math.abs(Math.sin(t * 3.5))}px rgba(255,138,92,.6)`; }); sfx(18.1, 'impact', .8); })();
[['selalu mengajak kita', 20.4], ['melakukan perbuatan yang tidak baik', 22.6], ['musuh yang paling suka membuat MUDARAT', 25.0]].forEach(([s, t], i) => crd(`<div style="font:900 50px Inter;color:${i === 2 ? CR : '#fff'}">→ ${s}</div>`, `left:300px;top:${560 + i * 110}px`, t, 28.0, 'left', 'tick'));

// --- 05 /bar-chart : enam "paling"
scene(28.0, 38.0, { cut: 'glitch' });
line(28.1, 38.0, 'left:140px;top:120px;width:1640px', 'nafsu: ujian yang [paling]…', { fs: 46, m: [28.6] });
(() => { const B = [['paling berat', 28.5], ['paling sulit dirawat', 30.3], ['paling sulit dipelihara', 32.3], ['paling susah dididik', 33.8], ['penyakit paling parah', 34.8], ['paling sulit diobati', 36.6]]; let g = `<path d="M180 900 H1760" stroke="#fff" stroke-width="4" data-d="1580"/>`;
  B.forEach(([s, t], i) => { const x = 200 + i * 262, h = 160 + i * 100, d = t - 28.2, c = i === 5 ? CR : Y; g += `<rect x="${x}" y="${900 - h}" width="200" height="${h}" rx="8" fill="${i === 5 ? 'rgba(255,138,92,.85)' : 'rgba(233,242,58,.75)'}" data-f="${d.toFixed(2)}"/>` + T(x + 100, 900 - h + 50, '0' + (i + 1), { f: d, fs: 40, fw: 900, c: '#111' }) + T(x + 100, 950, s.split(' ').slice(0, 2).join(' '), { f: d, fs: 26, fw: 800, c }) + T(x + 100, 985, s.split(' ').slice(2).join(' '), { f: d, fs: 26, fw: 800, c }); });
  sv(28.2, 38.0, g, 'left:0;top:0', 1920, 1080, .6); })();


// --- 06 /anatomy : musuh di antara dua lambung
scene(38.0, 49.0, { cut: 'glitch' });
ribs(38.1, 49.0, 'left:120px;top:230px', 0);
label('SABDA BAGINDA RASULULLAH ﷺ', 38.2, 'left:860px;top:150px', 49.0);
arw(node('أَعْدَى عَدُوِّكَ [نَفْسُكَ] الَّتِي بَيْنَ جَنْبَيْكَ', 'left:820px;width:960px;top:230px;text-align:right;font-size:70px;color:#fff;line-height:1.6'), 40.0, 2.0, { marks: [41.0] });
[['musuh yang paling musuh', 42.2], ['di antara segala macam musuh', 43.6], ['adalah NAFSU engkau', 45.0], ['yang ada di dalam badan engkau sendiri', 46.4]].forEach(([s, t], i) => crd(`<div style="font:900 ${i === 2 ? 52 : 38}px Inter;color:${i === 2 ? CR : '#fff'}">${s}</div>`, `left:860px;top:${470 + i * 90}px`, t, 49.0, 'left', 'tick'));

// --- 07 /process (sebelum 3D jihad akbar)
scene(49.0, 55.0, { cut: 'glitch' });
line(49.1, 55.0, 'left:140px;top:150px;width:1640px', 'kalau kita bisa…', { fs: 52 });
[['01', 'MELAWAN nafsu', 50.0], ['02', 'MENDIDIK nafsu', 52.0], ['03', 'MENGARAHKAN ke jalan Allah', 53.4]].forEach(([n, s, t], i) => crd(`<div style="width:500px;height:260px;border:${i === 2 ? 6 : 3}px solid ${Y};border-radius:18px;padding:30px;background:${i === 2 ? 'rgba(233,242,58,.1)' : 'transparent'}"><div class="mono" style="font-size:34px;color:${Y}">${n}</div><div style="font:900 44px Inter;margin-top:16px;line-height:1.15">${s}</div></div>`, `left:${150 + i * 560}px;top:350px`, t, 55.0, 'left', 'click'));
sv(50.0, 55.0, DEFS + [0, 1].map(i => `<g data-f="${[2.0, 3.4][i]}">` + LN([[655 + i * 560, 480], [705 + i * 560, 480]], { s: Y, sw: 6, arrow: 1 }) + '</g>').join(''), 'left:0;top:0', 1920, 1080, .3);

// --- 07b /kinetic-type : jihad akbar
scene(55.0, 58.0, { cut: 'hard' });
arw(node('[الْجِهَادُ الْأَكْبَرُ]', `left:0;right:0;top:230px;text-align:center;font-size:150px;color:${Y}`), 55.1, 1.2, { marks: [55.9] });
crd(`<div style="font:900 60px Inter">= jihad yang <span class="mk">paling besar</span></div>`, 'left:560px;top:600px', 56.4, 58.0, 'up', 'impact');

// --- 08 /poetry : keluhan nafsu (terjemahan saja)
scene(58.0, 73.0, { cut: 'glitch' });
bgFill(58.0, 73.0, NIGHT);
label('SYAIR · KELUHAN SEORANG HAMBA', 58.1, 'left:160px;top:130px', 73.0);
[['nafsuku selalu mengajakku', 61.0], ['berbuat yang merugikan diri', 63.0], ['dan memperbanyak penyakitku…', 66.0]].forEach(([s, t], i) => crd(`<div style="font:italic 800 52px Inter">"${s}"</div>`, `left:220px;top:${260 + i * 100}px`, t, 73.0, 'left', 'tick'));
crd(box(1480, Y, `<div style="font:900 48px Inter;line-height:1.3">bagaimana daya upayaku menghadapi musuh<br>yang berada <span class="mk">di antara tulang-tulang rusukku</span>?</div>`, 'background:rgba(233,242,58,.06)'), 'left:220px;top:620px', 68.8, 73.0, 'up', 'beep');

// --- 09 /callout
scene(73.0, 81.0, { cut: 'glitch' });
crd(`<div style="width:1500px;border:5px solid ${Y};border-radius:20px;padding:30px 40px;background:rgba(233,242,58,.08)"><div class="mono" style="font-size:24px;color:${Y}">💡 MAKA DARI ITU</div><div style="font:900 60px Inter;margin-top:14px">kita sangat memerlukan <span class="mk">pertolongan Allah</span></div></div>`, 'left:210px;top:250px', 73.6, 81.0, 'scale', 'beep');
seg('sungguh ibadah itu<br>sangat [sulit & rumit]', 78.6, 'left:210px;top:560px;width:1500px', { size: 76, iv: .03, marks: [80.0] });

// --- 10 /pictogram
scene(81.0, 94.0, { cut: 'glitch' });
line(81.1, 94.0, 'left:140px;top:120px;width:1640px', 'sungguh [sedikit] orang yang fokus belajar ilmu agama', { fs: 44, m: [81.6] });
(() => { let h = '<div style="display:grid;grid-template-columns:repeat(20,44px);gap:14px">'; for (let i = 0; i < 100; i++) h += `<div class="pp" data-i="${i}" style="font-size:38px;opacity:.25">👤</div>`; const n = node(h + '</div>', 'left:200px;top:250px');
  const ON = [7, 33, 58, 81]; item(82.0, 94.0, n, (lt, t, it) => { n.style.opacity = clamp(lt / .3) * clamp((it.t1 - t) / .3); n.querySelectorAll('.pp').forEach(p => { const on = ON.includes(+p.dataset.i) && t > 83.6; p.style.opacity = on ? 1 : .22; p.style.filter = on ? 'drop-shadow(0 0 12px #e9f23a)' : 'grayscale(1)'; }); }); sfx(83.6, 'beep', .7); })();
crd(box(1100, Y, `<div style="font:900 44px Inter">ilmu agama → <span class="mk">lebih semangat beribadah</span></div>`), 'left:410px;top:720px', 86.0, 94.0, 'up', 'impact');
crd(`<div style="font:800 34px Inter;color:${CG}">✓ ilmu agama sangat penting bagi kita · menuntun kita kepada Allah</div>`, 'left:410px;top:880px', 89.0, 94.0, 'up', 'tick');

// --- 11 /kinetic-type
scene(94.0, 100.0, { cut: 'hard' });
seg('siapa & apa yang kita<br>[utamakan] sekarang…<br>selain Allah?', 94.1, 'left:140px;top:220px;width:1640px', { size: 96, iv: .04, marks: [96.6] });

// --- 12–13 /mosaic : nikmat Allah
scene(100.0, 152.0, { cut: 'glitch' });
label('NIKMAT ALLAH ﷻ KEPADA KITA', 100.1, 'left:140px;top:120px', 152.0);
(() => { const N = [['🎁', 'memberi nikmat', 103.0], ['🛡️', 'menjaga kita', 106.0], ['👁️', 'melihat & mengawasi', 108.0], ['✨', 'menciptakan dari tiada', 111.0], ['⭐', 'memberi keistimewaan', 115.0], ['🌍', 'sebaik-baik umat', 118.0], ['🌹', 'sebaik-baik Rasul ﷺ', 121.0], ['🌾', 'memberi rezeki', 126.5], ['☪️', 'lahir dalam Islam', 129.5], ['💡', 'hidayah & taufik', 131.5], ['🕊️', 'selamat dunia · barzakh · akhirat', 134.0], ['📿', 'bisa berzikir', 139.5], ['🚪', 'pintu rahmat · ampunan · maaf', 144.5], ['🤲', 'menerima taubat · mengampuni dosa', 148.5]];
  N.forEach(([e, s, t], i) => { const big = i === 11; crd(`<div style="width:300px;height:190px;border:${big ? 6 : 3}px solid ${Y};border-radius:16px;padding:14px 16px;background:${big ? 'rgba(233,242,58,.2)' : 'rgba(233,242,58,.05)'};${big ? 'box-shadow:0 0 40px rgba(233,242,58,.5)' : ''}"><div style="display:flex;justify-content:space-between"><span class="mono" style="font-size:20px;color:${Y}">${String(i + 1).padStart(2, '0')}</span><span style="font-size:46px">${e}</span></div><div style="font:900 27px Inter;margin-top:10px;line-height:1.2">${s}</div></div>`, `left:${140 + (i % 5) * 330}px;top:${180 + Math.floor(i / 5) * 215}px`, t, 152.0, 'scale', 'tick'); });
  crd(`<div style="font:900 34px Inter;color:#111;background:${Y};border-radius:10px;padding:10px 20px">📿 berzikir = nikmat paling luar biasa</div>`, 'left:140px;top:840px', 140.6, 152.0, 'up', 'beep');
  crd(`<div style="font:900 40px Inter;color:${Y}">14… dan tak terhitung</div>`, 'left:1140px;top:845px', 150.0, 152.0, 'scale', 'impact'); })();

// --- 14 /callout
scene(152.0, 166.0, { cut: 'glitch' });
seg('sungguh Allah ﷻ<br>[sangat baik]', 152.1, 'left:140px;top:170px;width:1640px', { size: 90, iv: .04, marks: [153.6] });
[['→ lebih bersemangat dalam ketaatan', 156.0], ['→ bersungguh-sungguh melawan nafsu', 160.0]].forEach(([s, t], i) => crd(`<div style="font:900 48px Inter;color:${i ? CR : CG}">${s}</div>`, `left:160px;top:${480 + i * 100}px`, t, 166.0, 'left', 'click'));
line(162.2, 166.0, 'left:160px;top:760px;width:1600px', 'ilmu agama yang [mendekatkan diri kepada Allah] sangatlah penting', { fs: 40, m: [164.0] });

// --- 15 /no-deal
scene(166.0, 180.0, { cut: 'glitch' });
crd(`<div style="display:flex;align-items:center;gap:30px"><div style="font-size:150px;position:relative">🤝<div style="position:absolute;left:-10px;top:50%;width:190px;height:12px;background:${CR};transform:rotate(-30deg)"></div></div><div style="font:900 70px Inter;color:${CR}">BERUNDING<br>DENGAN MUSUH? ✕</div></div>`, 'left:200px;top:160px', 166.6, 180.0, 'scale', 'stamp');
[['memberi mudarat', 170.0], ['mencelakai diri kita', 173.0], ['menjerumuskan ke hal tidak baik', 176.0]].forEach(([s, t], i) => crd(box(500, CR, `<div class="mono" style="font-size:22px;color:${CR}">MUSUH YANG JELAS-JELAS</div><div style="font:900 36px Inter;margin-top:8px">${s}</div>`, 'background:rgba(255,138,92,.07);height:180px'), `left:${150 + i * 560}px;top:560px`, t, 180.0, 'up', 'beep'));

// --- 16 /battle-prep
scene(180.0, 196.0, { cut: 'glitch' });
[['01', 'LAWAN', 180.6], ['02', 'PERSIAPKAN DIRI', 182.4], ['03', 'BERLATIH', 184.0]].forEach(([n, s, t], i) => crd(`<div style="width:500px;height:200px;border:4px solid ${Y};border-radius:18px;padding:26px 30px"><div class="mono" style="font-size:30px;color:${Y}">${n}</div><div style="font:900 50px Inter;margin-top:10px">${s}</div></div>`, `left:${150 + i * 560}px;top:180px`, t, 196.0, 'drop', 'stamp'));
(() => { const n = node('<div style="font-size:200px">⚔️</div>', 'left:200px;top:480px', 'dimmable'); item(185.0, 196.0, n, (lt, t, it) => { n.style.opacity = clamp(lt / .3) * clamp((it.t1 - t) / .3); n.style.filter = `drop-shadow(0 0 ${20 + 20 * Math.abs(Math.sin(t * 4))}px #e9f23a)`; }); sfx(185.4, 'impact', .8); })();
crd(`<div style="font:900 40px Inter;color:#111;background:${Y};border-radius:10px;padding:10px 20px">⚔ latih nafsu seperti prajurit menghadapi perang</div>`, 'left:520px;top:860px', 192.6, 196.0, 'up', 'impact');
line(186.0, 196.0, 'left:520px;top:520px;width:1240px', '"lawanlah nafsumu dengan pedang" · seperti engkau [berlatih menghadapi perang] · begitu pula engkau melatih nafsu', { fs: 44, m: [190.0] });

// --- 17 /split-screen : syaitan vs nafsu
scene(196.0, 221.0, { cut: 'glitch' });
[['😈', 'SYAITAN', 'musuh dari luar', '📿 dibacakan zikir → MUNDUR ✓', CG, 196.4], ['🔥', 'NAFSU', 'bagian dari diri kita sendiri', '📿 zikir → TIDAK MEMPAN ✕', CR, 201.6]].forEach(([e, s, d, r, c, t], i) =>
  crd(`<div style="width:780px;height:540px;border:5px solid ${c};border-radius:20px;text-align:center;padding:34px"><div style="font-size:110px">${e}</div><div style="font:900 60px Inter;color:${c}">${s}</div><div style="font:800 32px Inter;margin-top:8px">${d}</div><div style="font:900 36px Inter;color:${c};margin-top:30px">${r}</div></div>`, `left:${140 + i * 860}px;top:150px`, t, 221.0, 'up', 'stamp'));
crd(`<div style="font:900 34px Inter;color:${CR}">⚠ nafsu ada di dalam diri kita sendiri</div>`, 'left:1080px;top:710px', 206.0, 209.0, 'scale', 'beep');
line(209.0, 219.0, 'left:160px;top:760px;width:1600px;text-align:center', 'mesti lebih berhati-hati · maka kita [sangat butuh pertolongan Allah]', { fs: 42, m: [216.0] });
arw(node('إِيَّاكَ نَعْبُدُ وَ[إِيَّاكَ نَسْتَعِينُ]', `left:0;right:0;top:850px;text-align:center;font-size:64px;color:${Y}`), 219.0, 1.8, { marks: [220.2] });

// --- 18 /root-cause
scene(221.0, 247.0, { cut: 'glitch' });
line(221.1, 247.0, 'left:140px;top:120px;width:1640px', 'semoga Allah menolong kita [mengalahkan nafsu]', { fs: 42, m: [225.6] });
sv(229.0, 247.0, [['PENYESALAN', 360, 0], ['AIB TERBUKA', 960, 7.0], ['KERUGIAN & KEKALAHAN', 1560, 13.0]].map(([s, x, d]) => BOX(x - 250, 230, 500, 130, { s: CR, sw: 5, del: d, fill: 'rgba(255,138,92,.08)' }) + T(x, 312, s, { f: d + .2, fs: 38, fw: 900, c: CR }) +
  `<path d="M${x} 360 C ${x} 520, 960 560, 960 700" fill="none" stroke="${CR}" stroke-width="4" stroke-dasharray="10 8" data-d="700" data-del="${d + .6}"/>`).join('') + BOX(610, 700, 700, 130, { s: Y, sw: 7, del: 14.0, fill: 'rgba(233,242,58,.12)' }) + T(960, 782, 'MENURUTI HAWA NAFSU', { f: 14.3, fs: 46, fw: 900, c: Y }), 'left:0;top:0', 1920, 1080, 1.0);

// --- 19 /timeline
scene(247.0, 272.0, { cut: 'glitch' });
line(247.1, 260.0, 'left:140px;top:120px;width:1640px', 'renungkan satu [kaedah penting]', { fs: 44, m: [250.0] });
sv(258.0, 272.0, `<path d="M180 420 H1740" stroke="#fff" stroke-width="5" data-d="1560"/>` + T(180, 380, 'awal penciptaan', { fs: 30, fw: 900, a: 'start' }) + T(1740, 380, 'hari kiamat', { f: 7.0, fs: 30, fw: 900, a: 'end' }) +
  [['fitnah', 0], ['maksiat', 2.0], ['aib', 3.0], ['kehinaan', 4.0], ['kerusakan', 4.4], ['dosa', 5.0]].map(([s, d], i) => { const x = 330 + i * 250; return `<circle cx="${x}" cy="420" r="18" fill="${CR}" data-f="${d}"/>` + T(x, 480, s, { f: d, fs: 32, fw: 900, c: CR }) + `<path d="M${x} 500 L960 760" stroke="${CR}" stroke-width="3" data-d="600" data-del="11.0"/>`; }).join('') +
  BOX(610, 760, 700, 140, { s: Y, sw: 7, del: 11.6, fill: 'rgba(233,242,58,.12)' }) + T(960, 845, 'SUMBERNYA: HAWA NAFSU', { f: 12.0, fs: 46, fw: 900, c: Y }), 'left:0;top:0', 1920, 1080, 1.2);

// --- 20 /kinetic-type
scene(272.0, 279.0, { cut: 'hard' });
seg('berhati-hatilah selalu &<br>mintalah [pertolongan Allah]', 272.1, 'left:140px;top:220px;width:1640px', { size: 84, iv: .035, marks: [274.6] });
arw(node('إِيَّاكَ نَعْبُدُ وَ[إِيَّاكَ نَسْتَعِينُ]', `left:0;right:0;top:620px;text-align:center;font-size:84px;color:#fff`), 276.6, 2.0, { marks: [277.8] });

// --- 21 /search
scene(279.0, 290.0, { cut: 'glitch', light: 1 });
searchFind(279.0, 290.0, {
  q: 'المؤمن بين خمس شدائد مؤمن يحسده ومنافق يبغضه', count: 4, pick: 0, shelfPick: 0, times: { type: .4, scan: 1.6, res: 2.4, click: 3.3, det: 3.7 },
  shelf: [["Ihya' 'Ulumiddin · al-Ghazali", 'الإحياء'], ['Al-Firdaus · ad-Dailami', 'الفردوس'], ['Zahr al-Firdaus · Ibnu Hajar', 'زهر الفردوس'], ['Takhrij al-Ihya · al-\'Iraqi', 'تخريج الإحياء'], ['Jami\' al-Ahadits', 'جامع الأحاديث']],
  results: [
    { title: "Ihya' 'Ulumiddin · j. 3 hlm. 65", tag: 'COCOK', ar: 'الْمُؤْمِنُ بَيْنَ خَمْسِ شَدَائِدَ', sub: 'dikutip al-Ghazali dalam bab nafsu musuh yang wajib dilawan' },
    { title: 'Zahr al-Firdaus · Ibnu Hajar · j. 6 hlm. 336', tag: 'SANAD', ar: 'مُؤْمِنٍ يَحْسُدُهُ وَمُنَافِقٍ يُبْغِضُهُ', sub: 'sanad ad-Dailami dari Anas bin Malik' },
    { title: 'Al-Firdaus bi Ma\'tsur al-Khithab · ad-Dailami', tag: 'RIWAYAT', ar: 'وَكَافِرٍ يُقَاتِلُهُ', sub: 'sumber asal riwayat' },
    { title: 'Takhrij Ahadits al-Ihya · al-\'Iraqi', tag: 'PENILAIAN', ar: 'إِسْنَادُهُ ضَعِيفٌ', sub: 'penilaian sanad' }],
  det: { title: 'Hadis lima kesulitan', ar: 'خَمْسُ شَدَائِدَ', rows: [['LETAK', "Ihya' 'Ulumiddin · j. 3 hlm. 65"], ['RIWAYAT', 'ad-Dailami · al-Firdaus'], ['PERAWI SAHABAT', 'Anas bin Malik radhiyallahu \'anhu'], ['ISI', '5 kesulitan yang dihadapi orang beriman'], ['DICATAT JUGA', 'Zahr al-Firdaus · Ibnu Hajar · j. 6 hlm. 336'], ['DERAJAT', 'sanadnya lemah (ada perawi Aban)'], ['MAKNA', 'nafsu = musuh yang wajib dilawan']], quote: 'وَشَيْطَانٍ يُضِلُّهُ وَنَفْسٍ تُنَازِعُهُ' }
});
camTour(279.0, 290.0, { type: .4, scan: 1.6, res: 2.4, click: 3.3, det: 3.7 });


// --- 22 /pentagon : lima kesulitan orang beriman
scene(290.0, 362.0, { cut: 'glitch' });
label('ORANG BERIMAN HIDUP DI TENGAH 5 KESULITAN', 290.1, 'left:140px;top:120px', 362.0);
(() => { const SY = [['مُؤْمِنٌ يَحْسُدُهُ', 'DENGKI', 290.5], ['مُنَافِقٌ يُبْغِضُهُ', 'MUNAFIK', 315.0], ['كَافِرٌ يُقَاتِلُهُ', 'KAFIR', 327.5], ['شَيْطَانٌ يُضِلُّهُ', 'SYAITAN', 337.5], ['نَفْسٌ تُنَازِعُهُ', 'NAFSU', 351.0]];
  const cx = 470, cy = 600, R0 = 300; let g = `<circle cx="${cx}" cy="${cy}" r="86" fill="rgba(233,242,58,.15)" stroke="${Y}" stroke-width="6" data-d="540"/>` + T(cx, cy + 14, 'MUKMIN', { f: .3, fs: 36, fw: 900, c: Y });
  SY.forEach(([a, s, t], i) => { const an = -Math.PI / 2 + i * Math.PI * 2 / 5, x = cx + Math.cos(an) * R0, y = cy + Math.sin(an) * R0, d = (t - 290.1).toFixed(2), c = i === 4 ? CR : Y;
    g += `<path d="M${cx + Math.cos(an) * 90} ${cy + Math.sin(an) * 90} L${x - Math.cos(an) * 80} ${y - Math.sin(an) * 80}" stroke="${c}" stroke-width="4" stroke-dasharray="10 8" data-d="${R0}" data-del="${d}"/><circle cx="${x}" cy="${y}" r="78" fill="${i === 4 ? 'rgba(255,138,92,.18)' : 'rgba(233,242,58,.10)'}" stroke="${c}" stroke-width="5" data-f="${d}"/>` + T(x, y - 8, '0' + (i + 1), { f: d, fs: 30, fw: 900, c }) + T(x, y + 30, s, { f: d, fs: 24, fw: 900, c: '#fff' }); });
  sv(290.1, 362.0, g, 'left:0;top:0', 1920, 1080, .8);
  const D = [[290.5, 315.0, [['nikmat kita → ia tidak terima', 304.0], ['musibah kita → ia gembira hatinya', 306.4], ['hadapi: SABAR & minta pertolongan Allah', 309.0]]],
    [315.0, 327.5, [['tidak suka kita rajin beribadah', 317.6], ['tidak setuju kita dekat kepada Allah', 320.0], ['hadapi: SABAR & TAAT kepada Allah', 323.4]]],
    [327.5, 337.5, [['⚔️ dengan pedang', 332.4], ['💰 ekonomi', 333.2], ['🎭 budaya', 333.9], ['🧭 akhlak & lainnya', 334.6]]],
    [337.5, 351.0, [['menyesatkan kita', 339.2], ['menggoda & membujuk agar jauh dari Allah', 341.0], ['hadapi: ILMU & TAKWA', 346.4]]],
    [351.0, 362.0, [['menentang kita untuk taat', 353.0], ['mengajak berbuat yang tidak baik', 356.0], ['hanya mau KESENANGAN saja', 360.0]]]];
  D.forEach(([a, b, L], i) => { const c = i === 4 ? CR : Y; crd(`<div style="width:860px;border:5px solid ${c};border-radius:20px;padding:22px 30px;background:rgba(0,0,0,.4)"><div class="mono" style="font-size:24px;color:${c}">KESULITAN 0${i + 1} / 05</div><div class="ar" style="font-size:64px;color:${c};text-align:right">${SY[i][0]}</div></div>`, 'left:930px;top:200px', a + .3, b, 'left', 'stamp');
    L.forEach(([s, t], j) => crd(`<div style="font:900 ${s.startsWith('hadapi') ? 40 : 36}px Inter;color:${s.startsWith('hadapi') ? '#111' : '#fff'};${s.startsWith('hadapi') ? `background:${Y};border-radius:10px;padding:8px 18px` : ''}">${s.startsWith('hadapi') ? '' : '→ '}${s}</div>`, `left:960px;top:${470 + j * 95}px`, t, b, 'left', 'tick')); }); })();

// --- 23 /poetry : syair mata ridha (USULAN — menunggu persetujuan)
scene(362.0, 385.0, { cut: 'glitch' });
bgFill(362.0, 385.0, NIGHT);
label('SYAIR ARAB YANG MASYHUR', 362.1, 'left:160px;top:130px', 385.0);
arw(node('وَعَيْنُ الرِّضَا عَنْ كُلِّ عَيْبٍ [كَلِيلَةٌ]', 'left:960px;width:800px;top:230px;text-align:right;font-size:58px;color:#fff'), 362.6, 2.6, { marks: [365.0] });
arw(node('وَلَكِنَّ عَيْنَ السُّخْطِ [تُبْدِي الْمَسَاوِيَا]', `left:160px;width:780px;top:330px;text-align:right;font-size:58px;color:${Y}`), 365.6, 2.6, { marks: [368.0] });
line(373.0, 385.0, 'left:160px;top:600px;width:1600px', 'orang yang jatuh cinta tidak akan melihat cela · kekurangan orang yang dicintai [tidak tampak di mata]', { fs: 40, m: [382.0] });

// --- 24 /lens : mata cinta vs mata benci
scene(385.0, 411.0, { cut: 'glitch' });
[['💛', 'MATA CINTA', 'apa saja yang dilihat = kebaikan · mata tumpul terhadap cela', CG, 385.4], ['🔴', 'MATA BENCI', 'tampak berbagai keburukan · kalaupun tidak ada salah, dicari-cari', CR, 398.0]].forEach(([e, s, d, c, t], i) =>
  crd(`<div style="width:780px;height:560px;border:5px solid ${c};border-radius:20px;text-align:center;padding:40px 34px"><div style="width:220px;height:220px;margin:0 auto;border-radius:50%;border:10px solid ${c};display:flex;align-items:center;justify-content:center;font-size:110px;box-shadow:inset 0 0 50px ${c}55">${e}</div><div style="font:900 56px Inter;color:${c};margin-top:20px">${s}</div><div style="font:800 32px Inter;margin-top:12px;line-height:1.35">${d}</div></div>`, `left:${140 + i * 860}px;top:170px`, t, 411.0, 'up', 'stamp'));

[['semua yang dilihat = kebaikan', 389.4, 'left:180px;top:770px', CG], ['kekurangannya tidak tampak', 392.6, 'left:180px;top:840px', CG], ['tampak berbagai keburukan', 401.0, 'left:1040px;top:770px', CR], ['tidak ada salah pun dicari-cari', 406.4, 'left:1040px;top:840px', CR]].forEach(([s, t, css, c]) => crd(`<div style="font:900 34px Inter;color:${c}">→ ${s}</div>`, css, t, 411.0, 'left', 'tick'));

// --- 25 /mirror
scene(411.0, 443.0, { cut: 'glitch' });
line(411.1, 443.0, 'left:140px;top:120px;width:1640px', 'menganggap baik [kejelekan yang datang dari nafsunya] · hampir tidak dapat melihat celanya', { fs: 38, m: [418.0] });
(() => { const n = node(`<div style="position:relative;width:560px;height:680px;border:10px solid ${Y};border-radius:280px 280px 30px 30px;background:linear-gradient(160deg,rgba(255,255,255,.10),rgba(255,255,255,.02));overflow:hidden"><div style="position:absolute;left:180px;top:200px;font-size:200px">🧍</div><div class="sh" style="position:absolute;left:120px;top:240px;width:300px;height:420px;border-radius:150px 150px 20px 20px;background:radial-gradient(rgba(255,60,40,.6),transparent 70%)"></div><div class="lt" style="position:absolute;inset:0;background:linear-gradient(100deg,transparent 40%,rgba(233,242,58,.55) 50%,transparent 60%);background-size:300% 100%"></div></div>`, 'left:200px;top:260px');
  item(411.2, 443.0, n, (lt, t, it) => { n.style.opacity = clamp(lt / .4) * clamp((it.t1 - t) / .3); const g = clamp((t - 420) / 12), cut = clamp((t - 435.4) / 3); n.querySelector('.sh').style.transform = `scale(${.4 + g * .9 - cut * .8})`; n.querySelector('.lt').style.opacity = cut; n.querySelector('.lt').style.backgroundPosition = `${100 - cut * 100}% 0`; }); })();
[['padahal nafsu selalu memusuhi kita', 421.6], ['mendatangkan mudarat · menjerumuskan ke aib & kerusakan', 426.0], ['sedangkan kita tidak merasa…', 433.0]].forEach(([s, t], i) => crd(`<div style="font:900 40px Inter;color:${CR};width:900px">${s}</div>`, `left:860px;top:${330 + i * 140}px`, t, 443.0, 'left', 'tick'));
crd(`<div style="font:900 46px Inter;color:#111;background:${Y};border-radius:12px;padding:14px 26px">kecuali jika Allah menjaga & menolong kita</div>`, 'left:860px;top:780px', 435.4, 443.0, 'scale', 'impact');

// --- 26 /flowchart : cinta sejati
scene(443.0, 468.0, { cut: 'glitch' });
label('CINTA YANG SEJATI', 443.1, 'left:140px;top:130px', 468.0);
[['01', 'melihat kebaikan & juga cela', '#fff', 446.0], ['02', 'cela diperbaiki', CB, 452.0], ['03', 'dituntun ke jalan Allah', Y, 456.0], ['04', 'mendapat ridha Allah ✓', CG, 465.0]].forEach(([n, s, c, t], i) => crd(`<div style="width:380px;height:300px;border:${i === 3 ? 6 : 3}px solid ${c};border-radius:18px;padding:30px"><div class="mono" style="font-size:34px;color:${c}">${n}</div><div style="font:900 40px Inter;margin-top:20px;line-height:1.2;color:${c}">${s}</div></div>`, `left:${130 + i * 430}px;top:300px`, t, 468.0, 'left', 'click'));
sv(452.0, 468.0, DEFS + [0, 1, 2].map(i => `<g data-f="${[0, 4.0, 13.0][i]}">` + LN([[512 + i * 430, 450], [556 + i * 430, 450]], { s: Y, sw: 6, arrow: 1 }) + '</g>').join(''), 'left:0;top:0', 1920, 1080, .3);
line(460.0, 468.0, 'left:140px;top:720px;width:1640px', 'keburukan itu [diubah menjadi sesuatu yang baik]', { fs: 44, m: [463.0] });

// --- 27 /scripture
scene(468.0, 487.0, { cut: 'glitch' });
doa(468.0, 487.0, 'SURAH AL-FATIHAH : 5', 'إِيَّاكَ نَعْبُدُ وَ[إِيَّاكَ نَسْتَعِينُ]', 'hanya kepada-Mu ya Allah kami beribadah · hanya kepada-Mu kami meminta pertolongan · [terkhusus dalam mengerjakan ibadah]', { a0: 469.0, ad: 2.4, am: [482.4], tr0: 476.0, tm: [484.0], fs: 110, h: 520, tt: 470, tfs: 36, chip: 'سُورَةُ الْفَاتِحَةِ' });

// --- 28 /before-after
scene(487.0, 508.0, { cut: 'glitch' });
line(487.1, 499.0, 'left:140px;top:120px;width:1640px', 'rajin memohon dengan [sungguh-sungguh] & hati yang [yakin] → insya Allah Allah kabulkan', { fs: 40, m: [494.4, 496.4] });
[['DULU', ['sering berbuat dosa', 'sering berbuat buruk'], CR, 499.4], ['SEKARANG', ['tidak lagi ✓', 'tidak lagi ✓'], CG, 501.8]].forEach(([h, L, c, t], i) => crd(`<div style="width:700px;border:5px solid ${c};border-radius:20px;padding:30px 36px"><div style="font:900 56px Inter;color:${c}">${h}</div>${L.map(s => `<div style="font:800 40px Inter;margin-top:16px">• ${s}</div>`).join('')}</div>`, `left:${170 + i * 880}px;top:330px`, t, 508.0, 'up', 'stamp'));
crd(`<div style="font:900 80px Inter;color:${Y}">→</div>`, 'left:920px;top:420px', 501.4, 508.0, 'scale');

// --- 29 /escalation : nafsu belum berhenti
scene(508.0, 535.0, { cut: 'glitch' });
line(508.1, 513.0, 'left:140px;top:120px;width:1640px', 'apakah nafsu yang buruk itu [sudah berhenti]?', { fs: 50, m: [510.0] });
stamp('TIDAK', 'left:1400px;top:110px', 513.4, 535.0);
line(514.0, 535.0, 'left:140px;top:200px;width:1200px', 'ia mengarahkan engkau ke [masalah yang jauh lebih besar]', { fs: 38, m: [516.0] });
[['merasa diri lebih hebat', 520.6], ['merasa rajin menuntut ilmu', 522.6], ['merasa rajin beribadah', 524.6], ['merasa lebih baik dari orang lain', 526.4], ['lupa kepada Allah', 528.6]].forEach(([s, t], i) => crd(`<div style="width:${560 + i * 60}px;border-left:10px solid ${CR};background:rgba(255,138,92,${.06 + i * .04});padding:12px 22px;font:900 34px Inter"><span class="mono" style="color:${CR}">0${i + 1}</span> · ${s}</div>`, `left:${140 + i * 120}px;top:${820 - i * 105}px`, t, 535.0, 'up', 'tick'));
crd(`<div style="font:900 64px Inter;color:#111;background:${CR};border-radius:12px;padding:8px 24px">UJUB</div>`, 'left:1450px;top:330px', 529.6, 535.0, 'scale', 'impact');
crd(`<div style="font:800 32px Inter">🚪 ia akan bertamu kepada kita · <span class="mk">bersiaplah</span></div>`, 'left:1080px;top:880px', 531.0, 535.0, 'up', 'beep');

// --- 30 /spotlight : tempat sunyi
scene(535.0, 548.0, { cut: 'glitch' });
(() => { const n = node(`<div style="width:1920px;height:1080px;background:radial-gradient(ellipse 420px 520px at 960px 560px,rgba(255,240,180,.16),rgba(0,0,0,.0) 70%)"></div>`, 'left:-0px;top:0'); item(535.2, 548.0, n, (lt, t, it) => { n.style.opacity = clamp(lt / .6) * clamp((it.t1 - t) / .3); }); })();
crd('<div style="font-size:150px">🔒</div>', 'left:880px;top:250px', 535.4, 548.0, 'drop', 'click');
line(535.6, 540.0, 'left:140px;top:120px;width:1640px;text-align:center', 'di tempat yang [sunyi] · tempat yang [terkunci]…', { fs: 44, m: [537.6, 538.6] });
crd(`<div style="font:900 60px Inter;text-align:center">"Allah ﷻ <span class="mk">mengawasi diriku</span>"</div><div style="font:800 38px Inter;text-align:center;margin-top:16px">maka aku mesti berhati-hati dalam setiap perbuatanku</div>`, 'left:260px;top:560px;width:1400px', 541.0, 548.0, 'up', 'beep');

// --- 31 /crowd : tempat ramai
scene(548.0, 573.0, { cut: 'glitch' });
line(548.1, 573.0, 'left:140px;top:120px;width:1640px', 'di tempat yang ramai, katakan dalam hati…', { fs: 42 });
(() => { let h = ''; let s = 11; const r = () => (s = (s * 16807) % 2147483647) / 2147483647; for (let i = 0; i < 70; i++) h += `<div style="position:absolute;left:${r() * 820}px;top:${r() * 400}px;width:34px;height:34px;border-radius:50%;background:#fff;opacity:${.25 + r() * .4}"></div>`;
  const n = node(`<div style="position:relative;width:860px;height:440px">${h}<div class="me" style="position:absolute;left:400px;top:190px;width:60px;height:60px;border-radius:50%;background:${Y}"></div></div>`, 'left:140px;top:240px');
  item(548.6, 573.0, n, (lt, t, it) => { n.style.opacity = clamp(lt / .4) * clamp((it.t1 - t) / .3); const k = clamp((t - 554) / 3); const me = n.querySelector('.me'); me.style.transform = `scale(${1 - k * .55})`; me.style.opacity = 1 - k * .5; }); })();
crd(box(800, CR, `<div style="font:900 40px Inter;line-height:1.3">"akulah yang <span style="color:${CR}">paling hina</span>, yang paling penuh salah & dosa"</div>`), 'left:1000px;top:260px', 554.0, 573.0, 'left', 'beep');
[['menolongku', 559.4], ['membantuku', 560.6], ['memaafkan dosaku', 561.8], ['menutupi aibku', 564.2]].forEach(([s, t], i) => crd(`<div style="font:900 34px Inter;color:#111;background:${Y};border-radius:10px;padding:10px 18px">✦ ${s}</div>`, `left:${140 + i * 420}px;top:740px`, t, 573.0, 'scale', 'tick'));
line(567.0, 573.0, 'left:140px;top:860px;width:1640px', 'maka berterima kasih kepada Allah · [tidak merasa lebih baik] dari orang lain', { fs: 40, m: [570.0] });


// --- 32 /anatomy : jihad paling besar (bara diredam cahaya)
scene(573.0, 588.0, { cut: 'glitch' });
ribs(573.1, 588.0, 'left:120px;top:230px', 578.0);
line(573.2, 588.0, 'left:860px;top:160px;width:920px', 'sungguh melawan nafsu itu adalah [jihad yang paling besar]', { fs: 48, m: [575.6] });
[['musuh yang paling musuh…', 579.6], ['adalah NAFSU engkau', 583.0], ['di dalam badan engkau sendiri', 585.4]].forEach(([s, t], i) => crd(`<div style="font:900 ${i === 1 ? 50 : 38}px Inter;color:${i === 1 ? CR : '#fff'}">${s}</div>`, `left:860px;top:${480 + i * 100}px`, t, 588.0, 'left', 'tick'));
// --- 33 penutup
scene(588.0, TOTAL, { cut: 'hard' });
mePol('left:200px;top:220px', 588.1, TOTAL, -4, 400);
[['01 melawan', 588.4], ['02 mendidik', 590.4], ['03 ke jalan Allah', 591.6]].forEach(([s, t], i) => crd(`<div style="font:900 34px Inter;border:3px solid ${Y};border-radius:10px;padding:8px 16px">${s}</div>`, `left:${760 + i * 340}px;top:200px`, t, TOTAL, 'left', 'tick'));
arw(node('[الْجِهَادُ الْأَكْبَرُ]', `left:760px;top:320px;width:1050px;font-size:110px;color:${Y};text-align:left`), 592.8, 1.2, { marks: [593.8] });
sub2('left:760px;top:640px', 594.4, TOTAL);

// ================================================================== JADWAL KODE VISUAL (3D ikut dinomori agar konsisten)
[[0, 7.0, '/kinetic-type'], [7.0, 18.0, '/exploded-view'], [18.0, 28.0, '/alert'], [28.0, 38.0, '/bar-chart'], [38.0, 49.0, '/anatomy'], [49.0, 55.0, '/process'], [55.0, 58.0, '/kinetic-type'], [58.0, 73.0, '/poetry'],
 [73.0, 81.0, '/callout'], [81.0, 94.0, '/pictogram'], [94.0, 100.0, '/kinetic-type'], [100.0, 152.0, '/mosaic'], [152.0, 166.0, '/callout'], [166.0, 180.0, '/no-deal'], [180.0, 196.0, '/battle-prep'], [196.0, 221.0, '/split-screen'],
 [221.0, 247.0, '/root-cause'], [247.0, 272.0, '/timeline'], [272.0, 279.0, '/kinetic-type'], [279.0, 290.0, '/search'], [290.0, 362.0, '/pentagon'], [362.0, 385.0, '/poetry'], [385.0, 411.0, '/lens'], [411.0, 443.0, '/mirror'],
 [443.0, 468.0, '/flowchart'], [468.0, 487.0, '/scripture'], [487.0, 508.0, '/before-after'], [508.0, 535.0, '/escalation'], [535.0, 548.0, '/spotlight'], [548.0, 573.0, '/crowd'], [573.0, 588.0, '/anatomy'], [588.0, TOTAL, '/teaser']]
 .reduce((acc, [a, b, c]) => { if (!acc.m[c]) acc.m[c] = String(++acc.n).padStart(2, '0'); codeTag(a, b, acc.m[c], c); return acc; }, { n: 0, m: {} });
