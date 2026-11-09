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

// --- 0 pembuka (/kinetic-type)
scene(0, 7.34, { cut: 'none' });
arw(node(BSM, 'left:140px;top:130px;width:1000px;font-size:62px;color:#fff;text-align:left'), .1, 1.1);
label('FILE 10 · LANJUTAN SURAH AL-FATIHAH', 1.3, 'left:140px;top:285px');
seg('Minta Bantuan &<br>[Pertolongan] Allah', 1.6, 'left:140px;top:335px;width:1100px', { size: 96, iv: .04, marks: [4.9] });
arw(node('[إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ]', 'left:140px;top:600px;width:1000px;font-size:58px;color:#fff;text-align:left'), 5.0, 1.6, { marks: [6.3] });
mePol('left:1300px;top:150px', .4, 7.34, 4, 400);
meTag(1.4, 7.34, 'إِيَّاكَ نَسْتَعِينُ');

// --- 1 /exploded-view : dua bagian ayat
scene(7.34, 15.6, { cut: 'glitch' });
[['إِيَّاكَ نَعْبُدُ', 'hanya kepada Engkau, ya Allah', 'KAMI MENYEMBAH', '#fff', 7.4], ['وَإِيَّاكَ نَسْتَعِينُ', 'hanya kepada Engkau, ya Allah', 'KAMI MEMINTA PERTOLONGAN', Y, 10.6]].forEach(([a, s, b, c, t], i) =>
  crd(`<div style="width:780px;height:430px;border:${i ? 6 : 3}px solid ${c};border-radius:20px;text-align:center;padding-top:34px;background:${i ? 'rgba(233,242,58,.08)' : 'transparent'}"><div class="ar" style="font-size:96px;color:${c}">${a}</div><div style="font:700 32px Inter;margin-top:16px">${s}</div><div style="font:900 44px Inter;color:${c};margin-top:10px">${b}</div></div>`, `left:${1000 - i * 860}px;top:180px`, t, 15.6, 'drop', 'stamp'));
crd(`<div style="padding:14px 30px;background:${Y};color:#111;font:900 40px Inter;border-radius:10px">terkhusus: pertolongan dalam mengerjakan IBADAH</div>`, 'left:360px;top:720px', 13.2, 15.6, 'scale', 'impact');

// --- 2 /scripture : doa hadiah pahala (sambil menunggu, lafaz per lafaz)
scene(15.6, 62.28, { cut: 'glitch' });
label('DOA SEBELUM MEMULAI', 15.7, 'left:160px;top:130px', 62.28);
paper(15.6, 'left:160px;top:180px;width:1600px;height:450px', '', 62.28);
arw(node('اللَّهُمَّ تَقَبَّلْ وَأَوْصِلْ ثَوَابَ مَا قَرَأْنَاهُ مِنَ [الْقُرْآنِ الْعَظِيمِ]، وَمَا اسْتَغْفَرْنَاهُ مِنْ قَوْلِ [أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ]، وَمَا هَلَّلْنَاهُ مِنْ قَوْلِ [لَا إِلَهَ إِلَّا اللَّهُ]، وَمَا سَبَّحْنَاهُ مِنْ قَوْلِ [سُبْحَانَ اللَّهِ]، وَمَا صَلَّيْنَا عَلَىٰ [سَيِّدِنَا وَمَوْلَانَا مُحَمَّدٍ]', 'left:210px;width:1500px;top:205px;text-align:center;font-size:44px;line-height:1.8;color:#151515'), 16.0, 44.0, { marks: [24.0, 33.0, 41.0, 48.5, 56.0], t1: 62.28 });
[['01', '📖', "bacaan Al-Qur'an", 24.0], ['02', '🤲', 'istighfar', 33.0], ['03', '☝️', 'tahlil', 41.0], ['04', '📿', 'tasbih', 48.5], ['05', '🌹', 'shalawat Nabi ﷺ', 56.0]].forEach(([n, e, s, t], i) =>
  crd(`<div style="width:292px;height:200px;border:3px solid ${Y};border-radius:16px;text-align:center;padding-top:16px;background:rgba(233,242,58,.06)"><div class="mono" style="font-size:20px;color:${Y}">${n}</div><div style="font-size:56px">${e}</div><div style="font:800 28px Inter;margin-top:6px">${s}</div></div>`, `left:${160 + i * 327}px;top:690px`, t, 62.28, 'up'));

// --- 3 /mindmap : semua ibadah butuh pertolongan Allah
scene(62.28, 71.06, { cut: 'glitch' });
line(62.3, 71.06, 'left:140px;top:120px;width:1640px', 'setiap ibadah yang bisa kita kerjakan · tak lepas dari [pertolongan Allah]', { fs: 38, m: [67.4] });
sv(62.6, 71.06, DEFS + `<circle cx="960" cy="560" r="150" fill="rgba(233,242,58,.12)" stroke="${Y}" stroke-width="6" data-d="950"/>` + T(960, 548, 'PERTOLONGAN', { f: .3, fs: 34, fw: 900, c: Y }) + T(960, 592, 'dari Allah ﷻ', { f: .4, fs: 28, fw: 800 }) +
  [['🕌 salat', 360, 330], ['📖 membaca Al-Qur\'an', 1560, 330], ['🌙 puasa', 360, 800], ['🤲 sedekah', 1560, 800]].map(([s, x, y], i) => LN([[960 + (x < 960 ? -150 : 150) * .8, 560 + (y < 560 ? -90 : 90)], [x + (x < 960 ? 210 : -210), y]], { s: Y, sw: 3, del: 1.4 + i * .6 }) + BOX(x - 210, y - 50, 420, 100, { s: '#fff', del: 1.6 + i * .6 }) + T(x, y + 12, s, { f: 1.8 + i * .6, fs: 32, fw: 800 })).join(''), 'left:0;top:0', 1920, 1080, .6);

// --- 4 /kinetic-type : iyyaka na'budu diulang
scene(71.06, 81.1, { cut: 'hard' });
arw(node('إِيَّاكَ نَعْبُدُ وَ[إِيَّاكَ نَسْتَعِينُ]', 'left:0;right:0;top:220px;text-align:center;font-size:120px;color:#fff'), 71.1, 2.4, { marks: [72.6] });
line(73.8, 81.1, 'left:160px;top:520px;width:1600px;text-align:center', 'kami menyembah · kami beribadah · dan kami meminta tolong · [terutama dalam ibadah]', { fs: 44, m: [79.0] });

// --- 5 /mountain : ibadah itu sulit & rumit
scene(81.1, 90.1, { cut: 'glitch' });
bgFill(81.1, 90.1, NIGHT);
(() => { const n = node(`<svg width="1920" height="1080"><path d="M120 940 L560 560 L760 700 L1180 260 L1420 520 L1800 940 Z" fill="rgba(233,242,58,.08)" stroke="${Y}" stroke-width="5"/><path class="tr" d="M180 930 L560 580 L760 710 L1180 290" fill="none" stroke="#fff" stroke-width="4" stroke-dasharray="14 12"/><circle class="cl" r="20" fill="${Y}"/><g class="hd" opacity="0"><path d="M1180 120 V250" stroke="${CG}" stroke-width="8"/><path d="M1150 220 L1180 260 L1210 220" fill="none" stroke="${CG}" stroke-width="8"/></g></svg>`, 'left:0;top:0');
  const P = [[180, 930], [560, 580], [760, 710], [1180, 290]];
  item(81.2, 90.1, n, (lt, t, it) => { n.style.opacity = clamp(lt / .3) * clamp((it.t1 - t) / .3); const u = t < 86.0 ? clamp(lt / 4.4) * .55 : .55 + eio((t - 86.0) / 1.6) * .45; const seg = Math.min(2, Math.floor(u * 3)), k = u * 3 - seg; const x = P[seg][0] + (P[seg + 1][0] - P[seg][0]) * k, y = P[seg][1] + (P[seg + 1][1] - P[seg][1]) * k; n.querySelector('.cl').setAttribute('cx', x); n.querySelector('.cl').setAttribute('cy', y); n.querySelector('.hd').setAttribute('opacity', clamp((t - 85.6) / .4)); }); sfx(85.6, 'whoosh', .8); })();
line(81.2, 90.1, 'left:140px;top:130px;width:900px', 'ibadah ini begitu [sulit & rumit]', { fs: 50, m: [83.4] });
crd(`<div style="font:900 40px Inter;color:#111;background:${CG};border-radius:12px;padding:12px 24px">sangat diperlukan bantuan Allah ↓</div>`, 'left:1240px;top:150px', 85.6, 90.1, 'scale', 'beep');
crd(`<div style="font:800 34px Inter;border:3px solid #fff;border-radius:12px;padding:10px 22px">jangan pernah lupakan hal itu</div>`, 'left:140px;top:300px', 87.7, 90.1, 'left');

// --- 6 /blueprint : 4 hal yang bersangkutan dengan ibadah
scene(90.1, 96.2, { cut: 'glitch' });
label('4 HAL YANG BERSANGKUTAN DENGAN IBADAH', 90.2, 'left:160px;top:130px', 96.2);
[['01', 'صِحَّةُ الْعِبَادَةِ', 'sahnya ibadah', Y, 92.8], ['02', 'قَبُولُ الْعِبَادَةِ', 'diterimanya ibadah', '#fff', 90.9], ['03', 'كَثْرَةٌ وَمُدَاوَمَةٌ', 'banyak & rutin', '#fff', 91.1], ['04', 'حِفْظُ الْعِبَادَةِ', 'terpelihara', '#fff', 91.3]].forEach(([n, a, s, c, t], i) =>
  crd(`<div style="width:380px;height:420px;border:${i ? 3 : 6}px solid ${c};border-radius:18px;text-align:center;padding-top:40px;background:${i ? 'transparent' : 'rgba(233,242,58,.1)'};opacity:${i ? .55 : 1}"><div class="mono" style="font-size:40px;color:${c}">${n}</div><div class="ar" style="font-size:50px;margin-top:30px;color:${c}">${a}</div><div style="font:800 32px Inter;margin-top:20px">${s}</div></div>`, `left:${160 + i * 410}px;top:260px`, t, 96.2, 'up'));
line(93.0, 96.2, 'left:160px;top:760px;width:1600px', 'yang pertama: sahnya ibadah itu dengan apa? → [dengan ilmu]', { fs: 40, m: [95.6] });

// --- 7 /tree : sah ← ilmu ← doa & belajar (beradab)
scene(96.2, 117.06, { cut: 'glitch' });
sv(96.3, 117.06, DEFS + BOX(760, 170, 400, 110, { s: Y, sw: 6, fill: 'rgba(233,242,58,.1)' }) + T(960, 240, 'SAHNYA IBADAH', { f: .2, fs: 38, fw: 900, c: Y }) +
  LN([[960, 280], [960, 360]], { s: Y, sw: 4, del: .4 }) + BOX(800, 360, 320, 100, { s: '#fff', del: .5 }) + T(960, 424, 'ILMU', { f: .7, fs: 44, fw: 900 }) +
  LN([[960, 460], [560, 560]], { s: '#fff', sw: 3, del: 3.2 }) + BOX(330, 560, 460, 110, { s: CB, del: 3.3 }) + T(560, 607, '01 · berdoa kepada Allah', { f: 3.4, fs: 32, fw: 900, c: CB }) + T(560, 648, 'beradab kepada Allah', { f: 11.9, fs: 26, fw: 700 }) +
  LN([[960, 460], [1360, 560]], { s: '#fff', sw: 3, del: 6.6 }) + BOX(1130, 560, 460, 110, { s: CG, del: 6.7 }) + T(1360, 607, '02 · menuntut ilmu · belajar', { f: 6.8, fs: 32, fw: 900, c: CG }) + T(1360, 648, 'beradab ketika belajar', { f: 14.4, fs: 26, fw: 700 }) +
  BOX(760, 720, 400, 90, { s: Y, sw: 5, del: 9.4 }) + T(960, 778, '+ ADAB', { f: 9.6, fs: 40, fw: 900, c: Y }) + LN([[560, 670], [760, 765]], { s: Y, sw: 3, del: 9.8 }) + LN([[1360, 670], [1160, 765]], { s: Y, sw: 3, del: 9.8 }), 'left:0;top:0', 1920, 1080, .5);
line(99.6, 106.0, 'left:140px;top:130px;width:620px', 'bagaimana caranya kita [mendapatkan ilmu]?', { fs: 34, m: [100.6] });
line(112.0, 117.06, 'left:160px;top:880px;width:1600px;text-align:center', 'ilmu yang dimaksud: [ilmu yang mendekatkan diri kita kepada Allah]', { fs: 38, m: [114.4] });

// --- 8 /process : diterimanya ibadah → bertaubat dulu
scene(117.06, 137.2, { cut: 'glitch' });
label('02 · قَبُولُ الْعِبَادَةِ · DITERIMANYA IBADAH', 117.1, 'left:160px;top:130px', 137.2);
line(120.4, 125.4, 'left:160px;top:190px;width:1600px', 'bagaimana supaya ibadah kita [ada harapan diterima] Allah?', { fs: 40, m: [122.6] });
[['01', 'perbuatan sehari-hari', '🚶', '#fff', 127.4], ['02', 'BERTAUBAT kepada Allah', '🤲', Y, 125.4], ['03', 'mengerjakan ibadah', '🕌', CB, 133.0], ['04', 'ada harapan diterima', '✓', CG, 135.0]].forEach(([n, s, e, c, t], i) =>
  crd(`<div style="width:360px;height:300px;border:${i === 1 ? 6 : 3}px solid ${c};border-radius:18px;text-align:center;padding-top:26px;background:${i === 1 ? 'rgba(233,242,58,.1)' : 'transparent'}"><div class="mono" style="font-size:24px;color:${c}">${n}</div><div style="font-size:72px;margin-top:6px;color:${c}">${e}</div><div style="font:900 32px Inter;margin-top:10px;color:${c}">${s}</div></div>`, `left:${160 + i * 410}px;top:330px`, t, 137.2, 'left'));
sv(127.4, 137.2, DEFS + [0, 1, 2].map(i => `<g data-f="${[0, 5.6, 7.6][i]}">` + LN([[525 + i * 410, 480], [565 + i * 410, 480]], { s: Y, sw: 5, arrow: 1 }) + '</g>').join(''), 'left:0;top:0', 1920, 1080, .3);
line(127.4, 137.2, 'left:160px;top:720px;width:1600px', 'sebelum melakukan suatu ibadah · [mesti bertaubat dulu] kepada Allah', { fs: 40, m: [133.6] });

// --- 9 /life-line : banyak & rutin sampai mati
scene(137.2, 162.0, { cut: 'glitch' });
label('03 · كَثْرَةُ الْعِبَادَةِ وَمُدَاوَمَتُهَا إِلَى الْمَوْتِ', 137.3, 'left:160px;top:130px', 162.0);
sv(141.6, 162.0, `<path d="M200 470 H1720" stroke="#fff" stroke-width="5" data-d="1520" data-dur="7.6"/>` + Array.from({ length: 24 }, (_, i) => `<circle cx="${230 + i * 62}" cy="470" r="${i % 3 ? 9 : 14}" fill="${Y}" data-f="${(.3 + i * .3).toFixed(1)}"/>`).join('') +
  T(200, 540, 'hari ini', { f: .2, fs: 28, fw: 800, a: 'start' }) + T(1720, 540, 'sampai mati', { f: 7.8, fs: 30, fw: 900, c: CR, a: 'end' }) + `<path d="M1700 420 V520" stroke="${CR}" stroke-width="6" data-d="100" data-del="7.8"/>`, 'left:0;top:0', 1920, 1080, .6);
[['melaksanakan', 141.6], ['memperbanyak', 143.4], ['merutinkan', 145.2], ['istiqamah', 146.7], ['mengekalkan', 148.0]].forEach(([s, t], i) => crd(`<div style="font:900 28px Inter;color:${i === 3 ? '#111' : Y};background:${i === 3 ? Y : 'transparent'};border:3px solid ${Y};border-radius:10px;padding:8px 16px">0${i + 1} · ${s}</div>`, `left:${160 + i * 330}px;top:250px`, t, 162.0, 'drop', 'tick'));
line(150.6, 162.0, 'left:160px;top:640px;width:1600px', 'ini sangat penting & [sangat menjadi masalah] bagi kita: memperbanyak · merutinkan · mengistiqamahkan ibadah sampai mati', { fs: 38, m: [152.6] });

// --- 10 /scripture : Al-Hijr 99
scene(162.0, 174.24, { cut: 'glitch' });
doa(162.0, 174.24, 'QS. AL-HIJR : 99', 'وَاعْبُدْ رَبَّكَ حَتَّىٰ يَأْتِيَكَ [الْيَقِينُ]', 'beribadahlah kamu kepada Allah [sampai yakin] → menurut ulama tafsir: [sampai mati]', { a0: 163.6, ad: 4.0, am: [167.0], tr0: 168.3, tm: [170.8, 172.8], fs: 96, h: 520, tt: 470, chip: 'سُورَةُ الْحِجْرِ' });

// --- 11 /calendar : rutin tiap hari
scene(174.24, 191.32, { cut: 'glitch' });
line(174.3, 191.32, 'left:140px;top:120px;width:1640px', 'seperti apa caranya supaya bisa beribadah dengan [rutin & istiqamah]?', { fs: 40, m: [177.0] });
(() => { const D = ['SEN', 'SEL', 'RAB', 'KAM', 'JUM', 'SAB', 'AHA']; let h = '<div style="display:grid;grid-template-columns:repeat(7,200px);gap:14px">';
  for (let w = 0; w < 3; w++) for (let d = 0; d < 7; d++) h += `<div class="cd" style="height:110px;border:2px solid ${w ? 'rgba(255,255,255,.35)' : '#fff'};border-radius:12px;position:relative;padding:8px 12px"><div class="mono" style="font-size:16px;color:#ddd">${w ? '' : D[d]} ${w * 7 + d + 1}</div><div class="ck" style="position:absolute;right:12px;bottom:6px;font-size:40px;opacity:0">🕌📖</div></div>`;
  const n = node(h + '</div>', 'left:200px;top:270px');
  item(179.6, 191.32, n, (lt, t, it) => { n.style.opacity = clamp(lt / .3) * clamp((it.t1 - t) / .3); n.querySelectorAll('.ck').forEach((c, i) => { c.style.opacity = clamp((lt - .6 - i * .38) / .2); }); });
  for (let i = 0; i < 21; i += 3) sfx(180.2 + i * .38, 'tick', .5); })();
line(184.2, 191.32, 'left:200px;top:700px;width:1520px', 'ibadah yang paling [rutin & istiqamah] → ibadah yang [disukai Allah]', { fs: 40, m: [186.0, 189.6] });

// --- 12 /quote : hadis ibadah yang kekal
scene(191.32, 196.7, { cut: 'glitch' });
doa(191.32, 196.7, 'SABDA BAGINDA RASULULLAH ﷺ', 'أَحَبُّ الْأَعْمَالِ إِلَى اللَّهِ [أَدْوَمُهَا] وَإِنْ قَلَّ', 'Allah sangat suka ibadah yang [kekal]', { a0: 191.4, ad: 3.2, am: [193.4], tr0: 194.9, tm: [195.9], fs: 84, h: 440, tt: 420, chip: 'SHAHIH AL-BUKHARI 6464 · SHAHIH MUSLIM 783', c0: 192.4 });

// --- 13 /water-drop : sedikit tapi terus-menerus
scene(196.7, 211.8, { cut: 'glitch' });
(() => { const n = node(`<svg width="900" height="760" viewBox="0 0 900 760"><path d="M120 560 H780 V720 H120 Z" fill="rgba(255,255,255,.06)" stroke="#fff" stroke-width="4"/><path class="hole" d="" fill="#000" stroke="${CB}" stroke-width="3"/><path class="dr" d="M450 0 C470 30 480 46 480 60 A30 30 0 0 1 420 60 C420 46 430 30 450 0Z" fill="${CB}"/></svg>`, 'left:120px;top:220px');
  item(196.8, 211.8, n, (lt, t, it) => { n.style.opacity = clamp(lt / .3) * clamp((it.t1 - t) / .3); const ph = (lt % .7) / .7; n.querySelector('.dr').setAttribute('transform', `translate(0,${ph * 470})`); const dep = Math.min(110, lt * 8); n.querySelector('.hole').setAttribute('d', `M${450 - 30 - dep * .4} 560 Q450 ${560 + dep * 1.2} ${450 + 30 + dep * .4} 560 Z`); }); })();
line(196.8, 211.8, 'left:1060px;top:200px;width:740px', 'walaupun [sedikit] · tapi dikerjakan [terus-menerus] · istiqamah & rutin → Allah sangat suka', { fs: 42, m: [197.6, 199.4] });
crd(box(740, Y, `<div style="font:900 40px Inter;color:${Y}">apalagi banyak + rutin + istiqamah</div><div style="font:800 34px Inter;margin-top:10px">→ itu lebih baik · Allah pun akan suka ✓</div>`, 'background:rgba(233,242,58,.08)'), 'left:1060px;top:620px', 203.8, 211.8, 'up', 'beep');

// --- 14 /roadmap : jalan-jalan dari ulama ahli suluk
scene(211.8, 222.38, { cut: 'glitch' });
line(211.9, 222.38, 'left:140px;top:120px;width:1640px', 'bagaimana caranya supaya [banyak beribadah] & bisa istiqamah?', { fs: 40, m: [213.8] });
sv(216.9, 222.38, `<path d="M180 640 C 500 420, 760 820, 1060 600 S 1560 420, 1760 560" fill="none" stroke="#fff" stroke-width="6" stroke-dasharray="20 14" data-d="1900"/>` +
  [['01', 330, 545, 'dunia'], ['02', 760, 650, 'makhluk'], ['03', 1210, 540, 'pemberian'], ['04', 1640, 520, 'syaitan']].map(([n, x, y, s], i) => `<circle cx="${x}" cy="${y}" r="44" fill="${i ? '#000' : Y}" stroke="${Y}" stroke-width="5" data-f="${.6 + i * .4}"/>` + T(x, y + 13, n, { f: .7 + i * .4, fs: 34, fw: 900, c: i ? Y : '#111' }) + T(x, y + 100, s, { f: .8 + i * .4, fs: 30, fw: 800 })).join('') +
  T(960, 300, 'JALAN-JALAN DARI PARA ULAMA AHLI SULUK', { f: .2, fs: 38, fw: 900, c: Y }), 'left:0;top:0', 1920, 1080, 1.2);

// --- 15 /notifications : sibuk mengurusi dunia
scene(222.38, 239.18, { cut: 'glitch' });
label('JALAN 01 · التَّجَرُّدُ عَنِ الدُّنْيَا · MENGASINGKAN DIRI DARI DUNIA', 222.4, 'left:140px;top:130px', 239.18);
crd(`<div style="width:300px;height:300px;border-radius:50%;border:6px solid ${Y};display:flex;align-items:center;justify-content:center;font-size:140px">🕌</div>`, 'left:810px;top:360px', 224.5, 239.18, 'scale');
[['💼', 'perdagangan', 226.4, 'left:230px;top:250px'], ['🧾', 'pekerjaan', 227.6, 'left:1300px;top:250px'], ['📱', 'HP', 228.6, 'left:200px;top:560px'], ['🛒', 'macam-macam urusan dunia', 229.8, 'left:1240px;top:560px'], ['🔔', 'tidak mendekatkan kepada Allah', 232.0, 'left:620px;top:800px']].forEach(([e, s, t, css]) =>
  crd(`<div style="display:flex;gap:16px;align-items:center;background:#111;border:3px solid ${CR};border-radius:16px;padding:16px 22px"><div style="font-size:48px">${e}</div><div style="font:800 32px Inter">${s}</div><div style="width:18px;height:18px;border-radius:50%;background:${CR}"></div></div>`, css, t, 239.18, 'drop', 'beep'));
stamp('TIDAK BISA RUTIN', 'left:1340px;top:840px', 236.0, 239.18);

// --- 16 /planner : contoh Surah Tabarak tiap malam
scene(239.18, 255.6, { cut: 'glitch' });
bgFill(239.18, 255.6, NIGHT);
line(239.2, 255.6, 'left:140px;top:120px;width:1640px', 'contoh: hendak membaca [Surah تَبَارَكَ] setiap malam', { fs: 44, m: [241.0] });
crd(`<div style="width:760px;background:#0b1022;border:4px solid ${Y};border-radius:24px;padding:30px 36px"><div class="mono" style="font-size:24px;color:${Y}">⏰ JADWAL IBADAH · SETIAP MALAM</div><div style="font:900 96px Inter;margin-top:10px">jam sekian</div><div class="ar" style="font-size:64px;color:${Y};margin-top:6px">سُورَةُ تَبَارَكَ · الْمُلْك</div></div>`, 'left:180px;top:270px', 242.6, 255.6, 'up', 'beep');
(() => { const n = node(`<div style="width:640px;background:#111;border:3px solid #fff;border-radius:22px;padding:26px 30px"><div style="display:flex;justify-content:space-between;align-items:center"><div style="font:900 40px Inter">🔕 Jangan Ganggu</div><div class="tg" style="width:120px;height:62px;border-radius:31px;background:#444;position:relative"><div class="kb" style="position:absolute;top:6px;left:6px;width:50px;height:50px;border-radius:50%;background:#fff"></div></div></div><div style="font:700 30px Inter;margin-top:18px;line-height:1.4">tidak ada urusan dunia yang bisa mengganggu · fokus</div></div>`, 'left:1080px;top:300px', 'dimmable');
  item(244.4, 255.6, n, (lt, t, it) => { n.style.opacity = clamp(lt / .3) * clamp((it.t1 - t) / .3); const k = eio((t - 246.8) / .4); n.querySelector('.tg').style.background = k > .5 ? CG : '#444'; n.querySelector('.kb').style.left = (6 + k * 58) + 'px'; }); sfx(246.8, 'click', .9); })();
line(248.4, 255.6, 'left:180px;top:760px;width:1560px', 'mesti kita [fokuskan] · berikan waktu malam itu khusus untuk ibadah', { fs: 40, m: [249.8] });

// --- 17 /calendar (jadwal penuh dunia) : waktu ibadah terganggu
scene(255.6, 276.46, { cut: 'glitch' });
line(255.7, 276.46, 'left:140px;top:120px;width:1640px', 'kalau waktunya hanya diurusi untuk [perihal dunia]…', { fs: 42, m: [262.0] });
[['08.00', 'kerjaan', CR, 258.4], ['11.00', 'perdagangan', CR, 263.0], ['15.00', 'macam-macam lainnya', CR, 264.6], ['21.00', 'ibadah ?', Y, 266.0]].forEach(([h, s, c, t], i) =>
  crd(`<div style="width:1000px;display:flex;gap:30px;align-items:center;border-left:8px solid ${c};background:rgba(255,255,255,.04);padding:14px 26px"><div class="mono" style="font-size:34px;color:${c}">${h}</div><div style="font:900 40px Inter;color:${c}">${s}</div></div>`, `left:160px;top:${250 + i * 120}px`, t, 276.46, 'left', 'tick'));
crd(box(560, CR, `<div style="font:900 40px Inter;color:${CR}">tidak akan bisa rutin</div><div style="font:800 32px Inter;margin-top:10px;line-height:1.35">pasti ada saja pikirannya · waktu ibadah terganggu</div>`), 'left:1220px;top:390px', 266.0, 276.46, 'scale', 'impact');

// --- 18 /search : hadis cinta dunia & akhirat
scene(276.46, 290.02, { cut: 'glitch', light: 1 });
searchFind(276.46, 290.02, {
  q: 'من أحب دنياه أضر بآخرته فآثروا ما يبقى على ما يفنى', count: 4, pick: 0, shelfPick: 1, times: { type: .4, scan: 1.6, res: 2.4, click: 3.3, det: 3.7 },
  shelf: [['Musnad Ahmad', 'مسند أحمد'], ['Jam\' al-Jawami\' · as-Suyuthi', 'جمع الجوامع'], ['Al-Mustadrak · al-Hakim', 'المستدرك'], ['Dha\'if al-Jami\' · al-Albani', 'ضعيف الجامع'], ['Al-Maqashid al-Hasanah', 'المقاصد الحسنة']],
  results: [
    { title: "Jam' al-Jawami' (al-Jami' al-Kabir) · j. 8 hlm. 387", tag: 'COCOK', ar: 'فَآثِرُوا مَا يَبْقَى عَلَى مَا يَفْنَى', sub: 'riwayat Ahmad, al-Hakim, Ibnu Hibban, al-Baihaqi · dari Abu Musa' },
    { title: "Al-Musnad al-Maudhu'i al-Jami' · j. 18 hlm. 292", tag: 'TEKS', ar: 'مَنْ أَحَبَّ دُنْيَاهُ أَضَرَّ بِآخِرَتِهِ', sub: 'barang siapa cinta dunianya, merugikan akhiratnya' },
    { title: 'Mukhtashar Talkhis adz-Dzahabi · j. 6 hlm. 2963', tag: 'RIWAYAT', ar: 'وَمَنْ أَحَبَّ آخِرَتَهُ أَضَرَّ بِدُنْيَاهُ', sub: 'riwayat al-Hakim dalam al-Mustadrak' },
    { title: "Dha'if al-Jami' ash-Shaghir · no. 5340", tag: 'PENILAIAN', ar: 'ضَعِيفٌ', sub: 'penilaian al-Albani terhadap sanadnya' }],
  det: { title: 'Hadis Abu Musa al-Asy\'ari', ar: 'أَبُو مُوسَى الْأَشْعَرِيُّ', rows: [['PERAWI SAHABAT', "Abu Musa al-Asy'ari radhiyallahu 'anhu"], ['DIRIWAYATKAN', 'Ahmad · al-Hakim · Ibnu Hibban · al-Baihaqi'], ['BAGIAN 1', 'cinta dunia → merugikan akhirat'], ['BAGIAN 2', 'cinta akhirat → merugikan dunia'], ['PENUTUP', 'utamakan yang kekal atas yang fana'], ['DERAJAT', "dha'if menurut al-Albani (Dha'if al-Jami' 5340)"], ['DIKUMPULKAN', "as-Suyuthi · Jam' al-Jawami' j. 8 hlm. 387"]], quote: 'فَآثِرُوا مَا يَبْقَى عَلَى مَا يَفْنَى' }
});
camTour(276.46, 290.02, { type: .4, scan: 1.6, res: 2.4, click: 3.3, det: 3.7 });

// --- 19 /balance : abadi vs fana
scene(290.02, 298.5, { cut: 'glitch' });
arw(node('فَآثِرُوا مَا يَبْقَىٰ عَلَىٰ مَا لَا يَبْقَىٰ', 'left:0;right:0;top:120px;text-align:center;font-size:70px;color:#fff'), 291.2, 3.0);
(() => { const n = node(`<svg width="1400" height="640" viewBox="0 0 1400 640"><path d="M700 120 V560 M520 600 H880" stroke="#fff" stroke-width="6"/><g class="bm"><path d="M260 140 H1140" stroke="#fff" stroke-width="6"/><g class="pl"><path d="M260 140 L170 300 H350 Z" fill="rgba(233,242,58,.15)" stroke="${Y}" stroke-width="4"/><text x="260" y="350" text-anchor="middle" font-family="Inter" font-weight="900" font-size="38" fill="${Y}">ABADI · akhirat</text></g><g class="pr"><path d="M1140 140 L1050 300 H1230 Z" fill="rgba(255,138,92,.15)" stroke="${CR}" stroke-width="4"/><text x="1140" y="350" text-anchor="middle" font-family="Inter" font-weight="900" font-size="38" fill="${CR}">FANA · dunia</text></g></g></svg>`, 'left:260px;top:300px');
  item(290.1, 298.5, n, (lt, t, it) => { n.style.opacity = clamp(lt / .3) * clamp((it.t1 - t) / .3); const a = eio((t - 294.6) / 1.2) * 8; n.querySelector('.bm').setAttribute('transform', `rotate(${-a} 700 140)`); }); sfx(294.6, 'impact', .6); })();
line(296.2, 298.5, 'left:160px;top:960px;width:1600px;text-align:center', 'pilihlah [yang abadi] · tinggalkan yang fana', { fs: 42, m: [297.0] });

// --- 20 /split-screen : tutup toko vs buka toko
scene(298.5, 323.6, { cut: 'glitch' });
line(298.6, 323.6, 'left:140px;top:120px;width:1640px', 'apabila urusan dunia [berbenturan] dengan urusan akhirat · mana yang kita pilih?', { fs: 38, m: [300.6] });
[['🏪🔒 → 🕌', 'tutup toko', 'pergi salat berjemaah · sudah masuk waktu', CG, 303.0, 'PILIHAN ABADI ✓'], ['🏪💰 → ✕', 'buka toko', 'melayani pembeli · tidak bisa berjemaah ke masjid', CR, 309.0, 'PILIHAN FANA']].forEach(([e, s, d, c, t, v], i) => {
  crd(`<div style="width:780px;height:520px;border:5px solid ${c};border-radius:20px;text-align:center;padding:34px"><div style="font-size:100px">${e}</div><div style="font:900 52px Inter;color:${c};margin-top:10px">${s}</div><div style="font:800 32px Inter;margin-top:16px;line-height:1.35">${d}</div></div>`, `left:${140 + i * 860}px;top:240px`, t, 323.6, 'up', 'stamp');
  crd(`<div style="font:900 40px Inter;color:#111;background:${c};border-radius:10px;padding:10px 24px">${v}</div>`, `left:${330 + i * 860}px;top:810px`, 318.2, 323.6, 'scale', 'beep'); });

// --- 21 /fork : dengar nasihat Rasul → selamat
scene(323.6, 335.4, { cut: 'glitch' });
sv(323.7, 335.4, DEFS + `<path d="M960 900 V620" stroke="#fff" stroke-width="8" data-d="280"/>` + LN([[960, 620], [560, 360]], { s: CG, sw: 8, del: .8, arrow: 1 }) + LN([[960, 620], [1360, 360]], { s: CR, sw: 8, del: 5.6, arrow: 1 }) +
  '<g data-f="1.4">' + BOX(260, 220, 600, 120, { s: CG, sw: 5, del: 1.4, fill: 'rgba(127,224,160,.1)' }) + '</g>' + T(560, 275, 'mendengar nasihat Rasulullah ﷺ', { f: 1.6, fs: 32, fw: 900, c: CG }) + T(560, 318, 'hidupnya SELAMAT ✓', { f: 2.6, fs: 34, fw: 900 }) +
  '<g data-f="6.2">' + BOX(1060, 220, 600, 120, { s: CR, sw: 5, del: 6.2, fill: 'rgba(255,138,92,.1)' }) + '</g>' + T(1360, 275, 'tidak mau mendengar', { f: 6.4, fs: 32, fw: 900, c: CR }) + T(1360, 318, 'hidupnya TIDAK SELAMAT ✕', { f: 9.0, fs: 34, fw: 900 }) +
  T(960, 960, 'KAMU', { f: .2, fs: 36, fw: 900, c: Y }), 'left:0;top:0', 1920, 1080, .8);

// --- 22 /fire : dunia memakan iman
scene(335.4, 359.7, { cut: 'glitch' });
line(335.5, 359.7, 'left:140px;top:120px;width:1640px', 'akan datang kepada kalian [dunia yang memakan iman] · seperti api memakan kayu bakar yang kering', { fs: 38, m: [341.6] });
(() => { const n = node(`<svg width="900" height="620" viewBox="0 0 900 620"><g class="lg">${[0, 1, 2].map(i => `<rect x="${170 + i * 40}" y="${470 - i * 50}" width="560" height="60" rx="30" fill="#7a4a1a" stroke="#c98a3a" stroke-width="4" transform="rotate(${i % 2 ? 8 : -8} 450 ${500 - i * 50})"/>`).join('')}<text x="450" y="560" text-anchor="middle" font-family="Inter" font-weight="900" font-size="40" fill="#fff">IMAN</text></g>${[0, 1, 2, 3, 4].map(i => `<path class="fl" data-i="${i}" d="" fill="${i % 2 ? '#ff8a5c' : Y}" opacity=".9"/>`).join('')}</svg>`, 'left:510px;top:300px');
  item(340.0, 359.7, n, (lt, t, it) => { n.style.opacity = clamp(lt / .3) * clamp((it.t1 - t) / .3); const g = clamp(lt / 3); n.querySelectorAll('.fl').forEach(p => { const i = +p.dataset.i, x = 260 + i * 95, h = (150 + 90 * Math.sin(t * 7 + i * 1.7)) * g, w = 70; p.setAttribute('d', `M${x - w} 420 Q${x - w * .4} ${420 - h * .6} ${x + Math.sin(t * 5 + i) * 18} ${420 - h} Q${x + w * .4} ${420 - h * .6} ${x + w} 420 Z`); }); n.querySelector('.lg').style.opacity = 1 - clamp((lt - 6) / 14) * .6; }); sfx(340.0, 'whoosh', .7); })();
line(351.4, 359.7, 'left:160px;top:980px;width:1600px;text-align:center', 'Baginda Rasulullah mengabarkan kepada kita [hal-hal yang akan datang]', { fs: 36, m: [356.6] });

// --- 23 /warning : akan datang suatu masa
scene(359.7, 388.4, { cut: 'glitch' });
label('⚠ KABAR DARI RASULULLAH · AKAN DATANG SUATU MASA', 359.8, 'left:140px;top:130px', 388.4);
[['tidak mendapat uang dengan cara yang halal', 363.9], ['rezeki hanya dengan perbuatan haram', 366.5], ['rezeki hanya kalau melakukan maksiat', 370.4], ['jadi pejabat hanya kalau berbuat dosa', 374.0], ['dapat pekerjaan hanya kalau curang', 376.7]].forEach(([s, t], i) =>
  crd(`<div style="width:${i % 2 ? 780 : 780}px;display:flex;gap:18px;align-items:center;border:3px solid ${CR};border-radius:14px;padding:14px 22px;background:rgba(255,138,92,.08)"><div style="font:900 34px Inter;color:${CR}">0${i + 1}</div><div style="font:800 32px Inter">${s}</div></div>`, `left:${i < 3 ? 140 : 1000}px;top:${200 + (i < 3 ? i : i - 3) * 130}px`, t, 388.4, 'left', 'beep'));
crd(box(1640, Y, `<div style="font:900 42px Inter;color:${Y}">dunia hanya didapat dengan melalui dosa & perbuatan yang tidak baik</div>`, 'background:rgba(233,242,58,.06)'), 'left:140px;top:640px', 380.7, 388.4, 'up', 'impact');

// --- 24 /versus : jujur vs pendosa
scene(388.4, 400.0, { cut: 'glitch' });
line(388.5, 400.0, 'left:140px;top:120px;width:1640px', 'suatu masa itu datang kepada kita…', { fs: 42 });
[['🙂', 'ORANG JUJUR', 'tidak mendapatkan apa-apa', CB, 391.8], ['😈', 'PELAKU DOSA', 'dipuji & disanjung', CR, 395.2]].forEach(([e, s, d, c, t], i) => crd(`<div style="width:740px;height:520px;border:5px solid ${c};border-radius:18px;text-align:center;padding-top:44px"><div style="font-size:140px">${e}</div><div style="font:900 56px Inter;color:${c};margin-top:14px">${s}</div><div style="font:800 38px Inter;margin-top:10px">${d}</div></div>`, `left:${140 + i * 900}px;top:240px`, t, 400.0, 'up', 'stamp'));
const vs10 = node('<div style="font:900 70px Inter;color:#fff">VS</div>', 'left:905px;top:450px'); show(vs10, 395.0, 'scale', 400.0);

// --- 25 /alert : bersiap & berhati-hati
scene(400.0, 413.96, { cut: 'hard' });
(() => { const n = node(`<div style="width:1500px;height:520px;border:8px solid ${CR};border-radius:30px;display:flex;flex-direction:column;align-items:center;justify-content:center"><div style="font-size:120px">🚨</div><div style="font:900 84px Inter;color:${CR}">BERSIAP & BERHATI-HATI</div><div style="font:800 40px Inter;margin-top:14px">akan datang masa itu · akan kita jumpai masa itu</div></div>`, 'left:210px;top:180px', 'dimmable');
  item(400.1, 413.96, n, (lt, t, it) => { n.style.opacity = clamp(lt / .3) * clamp((it.t1 - t) / .3); n.firstChild.style.boxShadow = `0 0 ${40 + 40 * Math.abs(Math.sin(t * 4))}px rgba(255,138,92,.55)`; }); sfx(406.6, 'impact', .7); })();
line(411.3, 413.96, 'left:160px;top:800px;width:1600px;text-align:center', 'ingatkan hati: [pilih yang abadi] · tinggalkan yang fana', { fs: 44, m: [412.0] });

// --- 26 /funnel : sisihkan dunia → fokus ibadah
scene(413.96, 433.8, { cut: 'glitch' });
line(414.0, 433.8, 'left:140px;top:120px;width:1640px', 'mesti kita [sisihkan dunia] yang mengganggu ketika hendak beribadah', { fs: 40, m: [418.0] });
sv(420.0, 433.8, `<path d="M560 300 H1360 L1060 640 V820 H860 V640 Z" fill="rgba(233,242,58,.06)" stroke="${Y}" stroke-width="6" data-d="2300"/>` +
  [['📱', 620, 260], ['💼', 820, 230], ['🛒', 1020, 250], ['🎮', 1220, 230]].map(([e, x, y], i) => `<text x="${x}" y="${y}" font-size="60" data-f="${.4 + i * .3}" text-anchor="middle">${e}</text><path d="M${x - 34} ${y - 50} L${x + 34} ${y + 16} M${x + 34} ${y - 50} L${x - 34} ${y + 16}" stroke="${CR}" stroke-width="7" data-d="200" data-del="${4.6 + i * .4}"/>`).join('') +
  T(960, 900, 'FOKUS IBADAH RUTIN TIAP HARI', { f: 8.0, fs: 46, fw: 900, c: Y }) + T(960, 470, 'siapkan waktu', { f: 3.4, fs: 34, fw: 800 }) + T(960, 520, 'mengasingkan diri', { f: 4.4, fs: 34, fw: 800 }), 'left:0;top:0', 1920, 1080, 1.2);

// --- 27 /sorting : dunia ada yang baik, ada yang melalaikan
scene(433.8, 452.2, { cut: 'glitch' });
line(433.9, 452.2, 'left:140px;top:120px;width:1640px', 'karena dunia ini [tak semuanya jahat]', { fs: 48, m: [435.4] });
[['AMBIL ✓', 'dunia yang baik · mendukung kita beribadah kepada Allah', CG, 437.6, 444.4], ['TINGGALKAN ✕', 'dunia yang melalaikan kita beribadah kepada Allah', CR, 446.3, 448.6]].forEach(([h, s, c, t, t2], i) => {
  crd(`<div style="width:780px;height:560px;border:5px dashed ${c};border-radius:22px;text-align:center;padding-top:30px"><div style="font:900 64px Inter;color:${c}">${h}</div></div>`, `left:${140 + i * 860}px;top:260px`, t2, 452.2, 'scale', 'stamp');
  crd(box(660, c, `<div style="font:800 36px Inter;line-height:1.35">${s}</div>`), `left:${200 + i * 860}px;top:430px`, t, 452.2, 'drop', 'whoosh'); });

// --- 28 /kinetic-type : butuh pertolongan
scene(452.2, 461.92, { cut: 'hard' });
seg('menyisihkan diri dari dunia<br>adalah hal yang [sulit]', 452.3, 'left:140px;top:200px;width:1640px', { size: 76, iv: .03, marks: [455.4] });
line(457.0, 461.92, 'left:140px;top:560px;width:1640px', 'makanya kita perlu → "kepada Engkau, ya Allah, [kami meminta pertolongan]"', { fs: 46, c: Y, m: [460.0] });

// --- 29 /network : jalan 02 · sisihkan waktu dari makhluk
scene(461.92, 493.2, { cut: 'glitch' });
label('JALAN 02 · MENYISIHKAN WAKTU DARI MAKHLUK', 462.0, 'left:140px;top:130px', 493.2);
(() => { const P = Array.from({ length: 14 }, (_, i) => { const a = i / 14 * Math.PI * 2; return [960 + Math.cos(a) * (260 + (i % 3) * 70), 620 + Math.sin(a) * (190 + (i % 2) * 50)]; });
  sv(476.0, 493.2, P.map(([x, y], i) => `<path d="M960 620 L${x.toFixed(0)} ${y.toFixed(0)}" stroke="${CB}" stroke-width="3" data-d="${Math.ceil(Math.hypot(x - 960, y - 620))}" data-del="${(i * .45).toFixed(2)}"/><circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="22" fill="#000" stroke="${CB}" stroke-width="4" data-f="${(i * .45 + .3).toFixed(2)}"/>`).join('') + `<circle cx="960" cy="620" r="60" fill="${Y}"/>` + T(960, 632, 'AKU', { fs: 32, fw: 900, c: '#111' }), 'left:0;top:0', 1920, 1080, .5); })();
line(465.0, 476.0, 'left:140px;top:200px;width:1640px', 'agar ibadah bisa banyak & rutin · kita juga mesti [menyisihkan waktu] dari makhluk-makhluk Allah', { fs: 38, m: [469.0] });
line(476.1, 486.0, 'left:140px;top:200px;width:1640px', 'banyak berkenalan · banyak berkawan · suka bergaul → [mengganggu ibadah yang rutin]', { fs: 38, m: [482.0] });
[['GHIBAH', 486.1, 'left:60px;top:330px'], ['RIYA', 488.8, 'left:1400px;top:330px'], ['SOMBONG', 490.8, 'left:700px;top:900px']].forEach(([s, t, css]) => stamp(s + ' · sebab bergaul', css, t, 493.2));

// --- 30 /calendar (undangan) : waktu ibadah hilang
scene(493.2, 510.1, { cut: 'glitch' });
line(493.3, 510.1, 'left:140px;top:120px;width:1640px', 'hari ini undangan di sana · hari ini jumpa di situ · jam sekian jumpa orang ini…', { fs: 36 });
[['📩 undangan di sana', 'left:160px;top:240px', 494.4], ['📩 undangan di situ', 'left:760px;top:240px', 495.8], ['🤝 jumpa di sana', 'left:1360px;top:240px', 497.4], ['⏰ jam sekian · jumpa orang ini', 'left:160px;top:400px', 499.4], ['⏰ jam sekian · jumpa orang itu', 'left:900px;top:400px', 501.4]].forEach(([s, css, t]) => crd(`<div style="font:800 34px Inter;border:3px solid ${CB};border-radius:14px;padding:14px 22px;background:rgba(127,214,255,.08)">${s}</div>`, css, t, 510.1, 'drop', 'beep'));
(() => { const n = node(`<div style="width:900px;border:4px dashed ${Y};border-radius:16px;padding:18px 26px;font:900 44px Inter;color:${Y}">🕌 waktu ibadah rutin</div>`, 'left:510px;top:620px', 'dimmable');
  item(503.4, 510.1, n, (lt, t, it) => { n.style.opacity = clamp(lt / .3) * clamp((it.t1 - t) / .3) * (1 - clamp((t - 505.6) / 2.4) * .8); n.style.filter = `blur(${clamp((t - 505.6) / 2.4) * 6}px)`; }); })();
line(505.6, 510.1, 'left:160px;top:820px;width:1600px;text-align:center', 'waktu kita untuk beribadah dengan rutin [akan hilang]', { fs: 42, c: CR, m: [507.0] });

// --- 31 /slider : pilih pertengahan
scene(510.1, 539.24, { cut: 'glitch' });
line(510.2, 521.2, 'left:140px;top:120px;width:1640px', 'bergaul lalu ia [mengingatkan kita kepada Allah] → alhamdulillah', { fs: 40, c: CG, m: [512.4] });
crd(`<div style="width:1200px;display:flex;gap:40px;align-items:center;justify-content:center"><div style="font-size:120px">🤝</div><div style="font:900 54px Inter;color:${CG}">kawan yang mengingatkan<br>kepada Allah ✓</div></div>`, 'left:360px;top:360px', 511.2, 521.2, 'scale', 'beep');
line(521.2, 539.24, 'left:140px;top:120px;width:1640px', 'maka pilihlah [pertengahan] kalau hendak hidup di tengah masyarakat', { fs: 40, m: [522.6] });
(() => { const n = node(`<svg width="1600" height="300" viewBox="0 0 1600 300"><path d="M100 150 H1500" stroke="#fff" stroke-width="10" stroke-linecap="round"/><circle cx="100" cy="150" r="14" fill="${CR}"/><circle cx="1500" cy="150" r="14" fill="${CR}"/><circle cx="800" cy="150" r="16" fill="${CG}"/><circle class="kb" cx="100" cy="150" r="44" fill="${Y}"/><text x="60" y="250" text-anchor="start" font-family="Inter" font-weight="900" font-size="34" fill="${CR}">terlalu tertutup</text><text x="1540" y="250" text-anchor="end" font-family="Inter" font-weight="900" font-size="34" fill="${CR}">terlalu terbuka</text><text x="800" y="70" text-anchor="middle" font-family="Inter" font-weight="900" font-size="38" fill="${CG}">PERTENGAHAN ✓</text></svg>`, 'left:160px;top:250px');
  item(521.2, 539.24, n, (lt, t, it) => { n.style.opacity = clamp(lt / .3) * clamp((it.t1 - t) / .3); const x = t < 525.8 ? 100 + eio(lt / 2) * 700 : t < 529.0 ? 800 - eio((t - 525.8) / .8) * 700 : t < 534.4 ? 100 + eio((t - 529.0) / .8) * 1400 : 1500 - eio((t - 534.4) / 1.2) * 700; n.querySelector('.kb').setAttribute('cx', x); }); })();
crd(box(760, CR, `<div style="font:900 36px Inter;color:${CR}">terlalu tertutup</div><div style="font:800 32px Inter;margin-top:8px">→ mengundang permusuhan di masyarakat</div>`), 'left:140px;top:650px', 529.0, 539.24, 'up', 'beep');
crd(box(760, CR, `<div style="font:900 36px Inter;color:${CR}">terlalu terbuka</div><div style="font:800 32px Inter;margin-top:8px">→ mengundang kawan yang tidak baik</div>`), 'left:1020px;top:650px', 534.4, 539.24, 'up', 'beep');

// --- 32 /gift : jalan 03 · jangan mengungkit pemberian
scene(539.24, 548.6, { cut: 'glitch' });
label('JALAN 03 · JANGAN MENGUNGKIT PEMBERIAN', 539.3, 'left:140px;top:130px', 548.6);
crd('<div style="font-size:230px">🎁</div>', 'left:300px;top:300px', 541.3, 548.6, 'scale', 'beep');
crd(`<div style="position:relative;width:900px;border:5px solid #fff;border-radius:40px;padding:30px 40px;font:800 42px Inter;line-height:1.35">"ingat ya, dulu aku sudah memberimu…"<div style="position:absolute;left:-10px;top:50%;width:960px;height:8px;background:${CR};transform:rotate(-6deg)"></div></div>`, 'left:820px;top:330px', 543.6, 548.6, 'left', 'stamp');
line(544.0, 548.6, 'left:820px;top:700px;width:900px', 'jangan menyebut-nyebut [pemberian yang sudah kita berikan] kepada orang lain', { fs: 36, m: [546.0] });

// --- 33 /shield : jalan 04 · memerangi syaitan dengan ilmu & taqwa
scene(548.6, 556.9, { cut: 'glitch' });
label('JALAN 04 · MEMERANGI SYAITAN', 548.7, 'left:140px;top:130px', 556.9);
sv(549.0, 556.9, DEFS + [['ILMU', 640], ['TAQWA', 1280]].map(([s, x], i) => `<path d="M${x} 300 L${x + 170} 360 V520 Q${x + 170} 680 ${x} 760 Q${x - 170} 680 ${x - 170} 520 V360 Z" fill="rgba(233,242,58,.12)" stroke="${Y}" stroke-width="7" data-d="1400" data-del="${4.4 + i * .5}"/>` + T(x, 550, s, { f: 4.8 + i * .5, fs: 54, fw: 900, c: Y })).join('') +
  [0, 1, 2, 3].map(i => LN([[100, 260 + i * 160], [440, 330 + i * 120]], { s: CR, sw: 5, del: 1.0 + i * .2, arrow: 0 })).join(''), 'left:0;top:0', 1920, 1080, .5);
line(552.0, 556.9, 'left:160px;top:880px;width:1600px;text-align:center', 'dengan cara apa? → [dengan ilmu dan taqwa]', { fs: 44, m: [553.6] });

// --- 34 /mosaic : godaan kufur lewat gaya hidup
scene(556.9, 580.52, { cut: 'glitch' });
line(556.95, 568.0, 'left:140px;top:120px;width:1640px', 'godaan syaitan yang pertama: [KUFUR] · tidak langsung menyuruh jadi kafir…', { fs: 40, m: [559.6] });
line(568.0, 580.52, 'left:140px;top:120px;width:1640px', '…tapi menyesatkan, sehingga [gaya hidup & tingkah laku] kita seperti orang kafir', { fs: 40, m: [570.0] });
[['👕', 'pakaian kita', 569.6], ['🗣️', 'cara bicara kita', 571.0], ['🏠', 'reka bentuk rumah kita', 572.4], ['🔁', 'kebiasaan sehari-hari', 573.6]].forEach(([e, s, t], i) => crd(`<div style="width:370px;height:330px;border:4px solid ${CR};border-radius:18px;text-align:center;padding-top:40px;background:rgba(255,138,92,.06)"><div class="mono" style="font-size:24px;color:${CR}">0${i + 1}</div><div style="font-size:96px">${e}</div><div style="font:900 32px Inter;margin-top:8px">${s}</div></div>`, `left:${160 + i * 410}px;top:280px`, t, 580.52, 'up', 'tick'));
crd(`<div style="font:900 50px Inter;color:#111;background:${CR};border-radius:12px;padding:12px 30px">semuanya seperti orang kafir → itulah ajakan KUFUR</div>`, 'left:210px;top:720px', 575.4, 580.52, 'scale', 'impact');

// --- 35 /scripture : jawaban kita
scene(580.52, 587.4, { cut: 'glitch' });
label('JAWABAN KITA KEPADA SYAITAN', 580.6, 'left:160px;top:130px', 587.4);
paper(580.52, 'left:160px;top:190px;width:1600px;height:560px', '', 587.4);
arw(node('[رَضِيتُ بِاللَّهِ رَبًّا]، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ نَبِيًّا وَرَسُولًا', 'left:220px;width:1480px;top:260px;text-align:center;font-size:72px;line-height:1.75;color:#151515'), 583.2, 3.6, { marks: [584.0] });
kin(node('', 'left:260px;top:600px;width:1400px;font:700 34px Inter;color:#222;text-align:center;line-height:1.3'), 'aku ridha Allah sebagai Tuhanku · Islam agamaku · Muhammad nabi & rasulku', 584.4, { iv: .02 });

// --- 36 penutup
scene(587.4, TOTAL, { cut: 'hard' });
mePol('left:200px;top:220px', 587.5, TOTAL, -4, 400);
arw(node('إِنَّ الدِّينَ عِنْدَ اللَّهِ [الْإِسْلَامُ]', 'left:760px;top:200px;width:1100px;font-size:84px;color:#fff;text-align:left'), 587.6, 1.6, { marks: [589.0] });
chip("QS. ALI 'IMRAN : 19", 588.0, 'left:760px;top:360px', TOTAL, Y);
sub2('left:760px;top:600px', 588.4, TOTAL);

// ================================================================== JADWAL KODE VISUAL
[[0, 7.34, '/kinetic-type'], [7.34, 15.6, '/exploded-view'], [15.6, 62.28, '/scripture'], [62.28, 71.06, '/mindmap'], [71.06, 81.1, '/kinetic-type'], [81.1, 90.1, '/mountain'], [90.1, 96.2, '/blueprint'], [96.2, 117.06, '/tree'],
 [117.06, 137.2, '/process'], [137.2, 162.0, '/life-line'], [162.0, 174.24, '/scripture'], [174.24, 191.32, '/calendar'], [191.32, 196.7, '/quote'], [196.7, 211.8, '/water-drop'], [211.8, 222.38, '/roadmap'], [222.38, 239.18, '/notifications'],
 [239.18, 255.6, '/planner'], [255.6, 276.46, '/calendar'], [276.46, 290.02, '/search'], [290.02, 298.5, '/balance'], [298.5, 323.6, '/split-screen'], [323.6, 335.4, '/fork'], [335.4, 359.7, '/fire'], [359.7, 388.4, '/warning'],
 [388.4, 400.0, '/versus'], [400.0, 413.96, '/alert'], [413.96, 433.8, '/funnel'], [433.8, 452.2, '/sorting'], [452.2, 461.92, '/kinetic-type'], [461.92, 493.2, '/network'], [493.2, 510.1, '/calendar'], [510.1, 539.24, '/slider'],
 [539.24, 548.6, '/gift'], [548.6, 556.9, '/shield'], [556.9, 580.52, '/mosaic'], [580.52, 587.4, '/scripture'], [587.4, TOTAL, '/teaser']]
 .reduce((acc, [a, b, c]) => { if (!acc.m[c]) acc.m[c] = String(++acc.n).padStart(2, '0'); codeTag(a, b, acc.m[c], c); return acc; }, { n: 0, m: {} });
