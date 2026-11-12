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


// ================================================================== EP 14 · Petunjuk Takwa Sehari-hari
const vcard = (w, c, inner, bg = 'transparent') => `<div style="width:${w}px;border:4px solid ${c};border-radius:18px;padding:22px 26px;background:${bg}">${inner}</div>`;
const xcard = (e, s, t, t1, css, c = CR) => crd(`<div style="width:500px;height:240px;border:4px solid ${c};border-radius:18px;padding:22px;background:rgba(255,138,92,.06)"><div style="display:flex;justify-content:space-between"><span style="font-size:70px">${e}</span><span style="font:900 60px Inter;color:${c}">✕</span></div><div style="font:900 32px Inter;margin-top:10px;line-height:1.2">${s}</div></div>`, css, t, t1, 'drop', 'stamp');

// --- 01 pembuka
scene(0, 9.2, { cut: 'none' });
arw(node(BSM, 'left:140px;top:120px;width:1000px;font-size:58px;color:#fff;text-align:left'), .1, 1.0);
label('FILE 14 · PETUNJUK AL-QUR\'AN', 1.2, 'left:140px;top:260px');
seg('Petunjuk Takwa<br>[Sehari-hari]', 1.4, 'left:140px;top:310px;width:1100px', { size: 100, iv: .05, marks: [3.0] });
arw(node('فَاسْأَلُوا أَهْلَ الذِّكْرِ [إِنْ كُنْتُمْ لَا تَعْلَمُونَ]', 'left:140px;top:580px;width:1050px;font-size:50px;color:#fff;text-align:left'), 1.5, 2.6, { marks: [3.4] });
line(4.3, 9.2, 'left:140px;top:700px;width:1050px', 'bertanyalah kepada [yang tahu] · semua yang kita perlukan ada di dalam Al-Qur\'an', { fs: 34, w: 700, m: [5.4] });
mePol('left:1300px;top:150px', .4, 9.2, 4, 400);
meTag(1.4, 9.2, 'هُدًى لِلْمُتَّقِينَ');

// --- 02 /roadmap : 5 petunjuk takwa
scene(9.2, 21.0, { cut: 'glitch' });
line(9.3, 21.0, 'left:140px;top:130px;width:1640px', 'kalau ingin menjadi [orang yang takwa] · ambil petunjuk dari Al-Qur\'an', { fs: 42, m: [11.0] });
sv(12.0, 21.0, `<path d="M180 640 C 480 480, 760 800, 1060 620 S 1560 460, 1760 600" fill="none" stroke="#fff" stroke-width="6" stroke-dasharray="20 14" data-d="1800" data-dur="1.6"/>` +
  [['01', 300, 575, '🍽️ makan & minum'], ['02', 640, 640, '👗 pakaian'], ['03', 1000, 650, '✨ berhias'], ['04', 1350, 545, '💍 nikah'], ['05', 1700, 575, '🏠 rumah tangga']].map(([n, x, y, s], i) => `<circle cx="${x}" cy="${y}" r="44" fill="${i ? '#000' : Y}" stroke="${Y}" stroke-width="5" data-f="${(.4 + i * .4).toFixed(1)}"/>` + T(x, y + 13, n, { f: .5 + i * .4, fs: 32, fw: 900, c: i ? Y : '#111' }) + T(x, y + (i % 2 ? -80 : 100), s, { f: .6 + i * .4, fs: 30, fw: 900 })).join(''), 'left:0;top:0', 1920, 1080, 1.0);

// --- 03 /citation : Al-A'raf 31
scene(21.0, 43.3, { cut: 'glitch' });
paper(21.1, 'left:160px;top:180px;width:1600px;height:400px', '', 43.3);
arw(node('وَكُلُوا وَاشْرَبُوا [وَلَا تُسْرِفُوا] إِنَّهُ لَا يُحِبُّ الْمُسْرِفِينَ', 'left:220px;width:1480px;top:240px;text-align:center;font-size:84px;line-height:1.7;color:#151515'), 21.2, 7.8, { marks: [26.0] });
chip("QS. AL-A'RAF : 31", 21.5, 'left:160px;top:610px', 43.3, Y);
[['🍽️ silakan makan', 31.6, CG], ['🥤 silakan minum', 32.6, CG], ['⚠ syaratnya: jangan melampaui batas', 34.4, Y], ['💔 Allah tidak suka yang melampaui batas', 37.0, CR]].forEach(([s, t, c], i) => crd(`<div style="font:900 38px Inter;color:${c}">${s}</div>`, `left:${160 + (i % 2) * 820}px;top:${720 + Math.floor(i / 2) * 80}px`, t, 43.3, 'left', 'tick'));
line(40.8, 43.3, 'left:160px;top:900px;width:1600px', 'melampaui batas ini ada [dua maksud]', { fs: 40, m: [41.8] });

// --- 04 /split-screen : dua makna melampaui batas
scene(43.3, 58.6, { cut: 'glitch' });
[['01', 'HALAL → HARAM', 'jangan makan & minum yang haram', '🚫🍷', CR, 43.4], ['02', 'HALAL TAPI BERLEBIHAN', 'makanan halal pun, kalau melampaui batas · Allah tidak suka', '🍗🍗🍗', Y, 52.3]].forEach(([n, h, d, e, c, t], i) =>
  crd(`<div style="width:780px;height:560px;border:5px solid ${c};border-radius:20px;padding:34px;text-align:center"><div class="mono" style="font-size:30px;color:${c}">${n}</div><div style="font-size:110px;margin-top:10px">${e}</div><div style="font:900 50px Inter;color:${c};margin-top:10px">${h}</div><div style="font:800 34px Inter;margin-top:14px;line-height:1.35">${d}</div></div>`, `left:${140 + i * 860}px;top:200px`, t, 58.6, 'up', 'stamp'));

// --- 05 /spectrum : makan di atas kenyang
scene(58.6, 68.7, { cut: 'glitch' });
line(58.7, 68.7, 'left:140px;top:130px;width:1640px', 'orang yang makan [di atas kenyang] · Allah tidak suka', { fs: 46, m: [62.0] });
(() => { let g = `<defs><linearGradient id="kg" x1="0" x2="1"><stop offset="0" stop-color="${CB}"/><stop offset=".6" stop-color="${CG}"/><stop offset=".8" stop-color="${Y}"/><stop offset="1" stop-color="${CR}"/></linearGradient></defs><rect x="200" y="520" width="1520" height="40" rx="20" fill="url(#kg)" data-f=".2"/>`;
  [['lapar', 260, CB], ['cukup', 900, CG], ['kenyang', 1320, Y], ['di atas kenyang ✕', 1660, CR]].forEach(([s, x, c], i) => g += T(x, 640, s, { f: .4 + i * .3, fs: 36, fw: 900, c }));
  const n = sv(59.0, 68.7, g + `<path class="pt" d="M0 0 L-26 -50 H26 Z" fill="#fff"/>`, 'left:0;top:0', 1920, 1080, .5);
  item(59.0, 68.7, node('', 'left:0;top:0'), (lt, t) => { const x = 260 + clamp((t - 60) / 6.5) * 1400; n.querySelector('.pt').setAttribute('transform', `translate(${x} 505)`); }); })();
crd(`<div style="font:900 40px Inter">contoh: masih kenyang → mau makan lagi = <span style="color:${CR}">MELAMPAUI BATAS</span></div>`, 'left:200px;top:760px', 63.8, 68.7, 'up', 'impact');

// --- 06 /handwritten : wasiat Luqman
scene(68.7, 98.9, { cut: 'glitch' });
label('WASIAT LUQMAN AL-HAKIM KEPADA ANAKNYA', 68.8, 'left:160px;top:130px', 98.9);
crd(vcard(1600, Y, `<div style="font:700 50px Kalam;color:#fff8d0;line-height:1.35">"Wahai anakku… andai perutmu masih kenyang dan engkau masih punya makanan, <span style="color:${Y}">lebih baik engkau sedekahkan</span> walaupun kepada hewan peliharaanmu, daripada engkau makan makanan itu."</div>`, 'rgba(233,242,58,.05)'), 'left:160px;top:200px', 71.0, 98.9, 'up', 'paper');
[['🍲', 'makanan berlebih', '#fff', 83.6], ['➜', '', Y, 84.6], ['🐈', 'sedekahkan · walau ke hewan', CG, 85.6], ['🚫', 'makan dalam keadaan kenyang', CR, 90.0]].forEach(([e, s, c, t], i) => crd(`<div style="text-align:center;width:${e === '➜' ? 120 : 360}px"><div style="font-size:${e === '➜' ? 90 : 110}px;color:${c}">${e}</div><div style="font:900 30px Inter;color:${c}">${s}</div></div>`, `left:${[200, 600, 760, 1260][i]}px;top:600px`, t, 98.9, 'scale', 'tick'));
line(94.0, 98.9, 'left:160px;top:900px;width:1600px;text-align:center', 'إِنَّهُ لَا يُحِبُّ الْمُسْرِفِينَ · itulah [pedoman Al-Qur\'an]', { fs: 38, m: [96.4] });

// --- 07 /layers : diuji dengan kelaparan (Al-Baqarah 155)
scene(98.9, 115.5, { cut: 'glitch' });
line(99.0, 104.7, 'left:140px;top:130px;width:1640px', 'lain halnya kalau kita [diuji] Allah · tidak ada makanan', { fs: 44, m: [101.0] });
arw(node('وَلَنَبْلُوَنَّكُمْ بِشَيْءٍ مِنَ الْخَوْفِ وَالْجُوعِ وَنَقْصٍ مِنَ الْأَمْوَالِ وَالْأَنْفُسِ وَالثَّمَرَاتِ [وَبَشِّرِ الصَّابِرِينَ]', 'left:140px;right:140px;top:220px;text-align:center;font-size:56px;color:#fff;line-height:1.7'), 104.8, 7.6, { marks: [111.0] });
chip('QS. AL-BAQARAH : 155', 105.0, 'left:160px;top:460px', 115.5, Y);
[['😨', 'ketakutan'], ['🍽️', 'kelaparan'], ['💸', 'kurang harta'], ['🕊️', 'kehilangan jiwa'], ['🌾', 'kurang buah-buahan']].forEach(([e, s], i) => crd(`<div style="width:300px;height:220px;border:3px solid #fff;border-radius:16px;text-align:center;padding-top:22px"><div style="font-size:70px">${e}</div><div style="font:900 28px Inter;margin-top:6px">${s}</div></div>`, `left:${140 + i * 330}px;top:560px`, 106.0 + i * 1.1, 115.5, 'up', 'tick'));
crd(`<div style="font:900 40px Inter;color:#111;background:${Y};border-radius:12px;padding:10px 24px">masing-masing akan diuji · kabar gembira bagi yang SABAR</div>`, 'left:350px;top:860px', 112.8, 115.5, 'scale', 'impact');

// --- 08 /decision-matrix : boleh makan sampai kenyang · 2 syarat
scene(115.5, 169.9, { cut: 'glitch' });
line(115.6, 120.0, 'left:140px;top:130px;width:1640px', 'boleh makan [sekenyang-kenyangnya] · ada dua syarat', { fs: 46, m: [117.4] });
crd(vcard(780, Y, `<div class="mono" style="font-size:28px;color:${Y}">01 · KETIKA JADI TUAN RUMAH 🏠</div><div style="font:900 38px Inter;margin-top:14px;line-height:1.3">tambah makan agar tamu <span class="mk">senang & bersemangat</span> makannya</div>`), 'left:140px;top:240px', 120.0, 169.9, 'up', 'stamp');
crd(vcard(780, CR, `<div style="font:900 36px Inter;color:${CR}">✕ menyuruh tamu makan · tapi kita sendiri tidak makan</div><div style="font:800 30px Inter;margin-top:8px">ini tidak cocok</div>`), 'left:140px;top:560px', 135.0, 169.9, 'up', 'beep');
crd(vcard(780, CG, `<div class="mono" style="font-size:28px;color:${CG}">02 · KETIKA JADI TAMU 🍽️</div><div style="font:900 38px Inter;margin-top:14px;line-height:1.3">disuruh makan → makan · disuruh tambah → tambah · untuk <span class="mk">memuliakan tuan rumah</span></div>`), 'left:1000px;top:240px', 144.6, 169.9, 'up', 'stamp');
crd(vcard(780, CG, `<div style="font:900 36px Inter;color:${CG}">✓ tidak dicela Allah</div><div style="font:800 30px Inter;margin-top:8px">tidak termasuk musrifin (yang melampaui batas)</div>`), 'left:1000px;top:560px', 153.6, 169.9, 'up', 'beep');
line(159.2, 169.9, 'left:140px;top:840px;width:1640px;text-align:center', 'jangan melampaui batas kepada [yang haram] · atau [makan di atas kenyang]', { fs: 40, m: [165.0, 167.4] });

// --- 09 /citation : Al-Ahzab 59
scene(169.9, 203.4, { cut: 'glitch' });
line(170.0, 173.2, 'left:160px;top:130px;width:1600px', 'contoh lagi: [pakaian] · khususnya perempuan', { fs: 46, m: [171.4] });
paper(173.0, 'left:160px;top:210px;width:1600px;height:520px', '', 203.4);
arw(node('يَا أَيُّهَا النَّبِيُّ قُلْ لِأَزْوَاجِكَ وَبَنَاتِكَ وَنِسَاءِ الْمُؤْمِنِينَ [يُدْنِينَ عَلَيْهِنَّ مِنْ جَلَابِيبِهِنَّ] ذَٰلِكَ أَدْنَىٰ أَنْ يُعْرَفْنَ فَلَا يُؤْذَيْنَ وَكَانَ اللَّهُ غَفُورًا رَحِيمًا', 'left:220px;width:1480px;top:230px;text-align:center;font-size:52px;line-height:1.8;color:#151515'), 173.3, 15.4, { marks: [180.0] });
chip('QS. AL-AHZAB : 59', 173.6, 'left:160px;top:760px', 203.4, Y);
[['istri-istrimu', 191.0], ['anak-anak perempuanmu', 192.6], ['perempuan beriman', 194.6], ['→ kenakan JILBAB saat keluar rumah / di hadapan non-mahram', 197.6]].forEach(([s, t], i) => crd(`<div style="font:900 ${i === 3 ? 36 : 34}px Inter;color:${i === 3 ? Y : '#fff'}">${i < 3 ? '👤 ' : ''}${s}</div>`, `left:${i < 3 ? 160 + i * 520 : 160}px;top:${i < 3 ? 840 : 920}px`, t, 203.4, 'left', 'tick'));

// --- 10 /exploded-view : makna jilbab
scene(203.4, 215.8, { cut: 'glitch' });
arw(node('[جَلَابِيبِهِنَّ]', 'left:0;right:0;top:160px;text-align:center;font-size:130px;color:#fff'), 203.5, 1.0, { marks: [204.4] });
[['جَلَابِيبِ', 'bentuk JAMAK', '#fff', 205.0], ['جِلْبَاب', 'bentuk tunggal', Y, 206.4], ['هِنَّ', 'mereka (perempuan)', CB, 207.6]].forEach(([a, s, c, t], i) => crd(`<div style="width:440px;height:220px;border:4px solid ${c};border-radius:18px;text-align:center;padding-top:14px"><div class="ar" style="font-size:72px;color:${c}">${a}</div><div style="font:900 30px Inter">${s}</div></div>`, `left:${1290 - i * 540}px;top:450px`, t, 215.8, 'drop', 'stamp'));
crd(`<div style="font:900 40px Inter">jilbab = kain yang <span class="mk">menutupi seluruh tubuh</span> · tak terlihat bentuk tubuhnya</div>`, 'left:200px;top:760px', 209.0, 215.8, 'up', 'impact');

// --- 11 /checklist : naik tingkat menjadi takwa
scene(215.8, 229.5, { cut: 'glitch' });
line(215.9, 229.5, 'left:140px;top:130px;width:1640px', 'perempuan beriman yang ingin [naik tingkat menjadi takwa] dalam berpakaian…', { fs: 40, m: [220.0] });
[['menutup aurat', 224.0], ['tidak terlihat lekuk tubuh', 226.4], ['mengenakan jilbab', 228.0]].forEach(([s, t], i) => crd(`<div style="display:flex;align-items:center;gap:24px"><div style="width:80px;height:80px;border-radius:12px;background:${Y};display:flex;align-items:center;justify-content:center;font:900 54px Inter;color:#111">✓</div><div style="font:900 54px Inter">${s}</div></div>`, `left:260px;top:${330 + i * 150}px`, t, 229.5, 'scale', 'tick'));

// --- 12 /badge : berhias disukai Allah
scene(229.5, 249.7, { cut: 'glitch' });
line(229.6, 239.2, 'left:140px;top:130px;width:1640px', 'contoh lagi: [berhias] · berindah-indah · disukai Allah', { fs: 44, m: [231.6] });
sv(239.2, 249.7, `<g data-f=".2"><circle cx="960" cy="560" r="220" fill="rgba(233,242,58,.10)" stroke="${Y}" stroke-width="8"/><circle cx="960" cy="560" r="190" fill="none" stroke="${Y}" stroke-width="3" stroke-dasharray="6 10"/></g>` + T(960, 530, '👁️✨', { f: .4, fs: 80 }) + T(960, 620, 'NABI ﷺ SUKA BERHIAS', { f: .8, fs: 34, fw: 900, c: Y }), 'left:0;top:0', 1920, 1080, .8);
line(239.3, 246.8, 'left:140px;top:860px;width:1640px;text-align:center', 'bahkan Rasulullah ﷺ kalau safar [tidak lupa membawa celak mata]', { fs: 40, m: [243.0] });
crd(`<div style="font:900 44px Inter;color:#111;background:${CR};border-radius:12px;padding:10px 24px">tapi Al-Qur'an MEMBATASI ⚠</div>`, 'left:610px;top:950px', 246.9, 249.7, 'scale', 'impact');

// --- 13 /citation : An-Nisa 119
scene(249.7, 271.7, { cut: 'glitch' });
paper(249.8, 'left:160px;top:180px;width:1600px;height:440px', '', 271.7);
arw(node('وَلَآمُرَنَّهُمْ [فَلَيُغَيِّرُنَّ خَلْقَ اللَّهِ] وَمَنْ يَتَّخِذِ الشَّيْطَانَ وَلِيًّا مِنْ دُونِ اللَّهِ فَقَدْ خَسِرَ خُسْرَانًا مُبِينًا', 'left:220px;width:1480px;top:220px;text-align:center;font-size:60px;line-height:1.8;color:#151515'), 250.0, 8.2, { marks: [252.6] });
chip("QS. AN-NISA' : 119", 250.4, 'left:160px;top:650px', 271.7, Y);
crd(`<div style="font:900 44px Inter">berhias boleh ✓ · tapi jangan sampai <span class="mk">mengubah ciptaan Allah</span></div>`, 'left:200px;top:760px', 258.6, 271.7, 'up', 'impact');
crd(`<div style="font:900 40px Inter;color:${CR}">⚠ bisa mendapat laknat dari Allah & Rasul-Nya</div>`, 'left:200px;top:870px', 267.6, 271.7, 'up', 'beep');

// --- 14 /infographic : contoh mengubah ciptaan
scene(271.7, 287.2, { cut: 'glitch' });
label('CONTOH MENGUBAH CIPTAAN ALLAH', 271.8, 'left:160px;top:130px', 287.2);
xcard('💇', 'rambut keriting diluruskan · lurus dikeritingkan', 272.4, 287.2, 'left:160px;top:220px');
xcard('🦷', 'gigi yang tidak rata dikikir', 276.6, 287.2, 'left:710px;top:220px');
xcard('〰️', 'alis ditipis-tipiskan · dihaluskan', 279.9, 287.2, 'left:1260px;top:220px');
line(283.0, 287.2, 'left:160px;top:560px;width:1600px', 'ini [tidak disukai] oleh Allah dan Rasul-Nya', { fs: 46, c: CR, m: [285.0] });

// --- 15 /search : hadis laknat
scene(287.2, 299.6, { cut: 'glitch', light: 1 });
searchFind(287.2, 299.6, {
  q: 'لعن الله الواشمات والمستوشمات والنامصات والمتنمصات', count: 4, pick: 0, shelfPick: 0, times: { type: .4, scan: 1.6, res: 2.4, click: 3.3, det: 3.7 },
  shelf: [['Shahih al-Bukhari', 'صحيح البخاري'], ['Shahih Muslim', 'صحيح مسلم'], ['Ghayat al-Maram · al-Albani', 'غاية المرام'], ['Al-Mausu\'ah al-Fiqhiyyah', 'الموسوعة الفقهية'], ['Al-Jami\' ash-Shaghir', 'الجامع الصغير']],
  results: [
    { title: 'Ghayat al-Maram · al-Albani · no. 94', tag: 'SHAHIH', ar: 'لَعَنَ اللَّهُ الْوَاشِمَاتِ وَالْمُسْتَوْشِمَاتِ', sub: 'diriwayatkan al-Bukhari & Muslim dari Ibnu Mas\'ud' },
    { title: "Al-Mausu'ah al-Fiqhiyyah · j. 11 hlm. 273", tag: 'FIKIH', ar: 'وَالنَّامِصَاتِ وَالْمُتَنَمِّصَاتِ', sub: 'pembahasan hukum mencukur / menipiskan alis' },
    { title: "Al-Jami' ash-Shaghir · as-Suyuthi · no. 9235", tag: 'DINUKIL', ar: 'الْمُغَيِّرَاتِ خَلْقَ اللَّهِ', sub: 'yang mengubah ciptaan Allah' },
    { title: 'Adillah Tahrim · al-Muqaddam · hlm. 37', tag: 'TERKAIT', ar: 'وَالْمُتَفَلِّجَاتِ لِلْحُسْنِ', sub: 'merenggangkan gigi demi kecantikan' }],
  det: { title: 'Hadis Ibnu Mas\'ud', ar: 'عَبْدُ اللَّهِ بْنُ مَسْعُودٍ', rows: [['DIRIWAYATKAN', 'al-Bukhari & Muslim'], ['PERAWI SAHABAT', "'Abdullah bin Mas'ud radhiyallahu 'anhu"], ['AN-NAMISHAH', 'yang mencabut / menipiskan alis'], ['AL-MUTANAMMISHAH', 'yang minta dicabut alisnya'], ['AL-MUTAFALLIJAH', 'yang merenggangkan gigi demi cantik'], ['ALASAN', 'mengubah ciptaan Allah'], ['DERAJAT', 'shahih (Ghayat al-Maram 94)']], quote: 'الْمُغَيِّرَاتِ خَلْقَ اللَّهِ' }
});
camTour(287.2, 299.6, { type: .4, scan: 1.6, res: 2.4, click: 3.3, det: 3.7 });

// --- 16 /balance : berhias boleh vs mengubah ciptaan
scene(299.6, 322.6, { cut: 'glitch' });
line(299.7, 309.6, 'left:140px;top:130px;width:1640px', 'apalagi alis [digunduli lalu dilukis ulang] · makin menjadi-jadi · tidak malu kepada Allah & manusia', { fs: 36, m: [302.0] });
(() => { const n = node(`<svg width="1400" height="560" viewBox="0 0 1400 560"><path d="M700 80 V480 M540 520 H860" stroke="#fff" stroke-width="6"/><g class="bm"><path d="M240 100 H1160" stroke="#fff" stroke-width="6"/><path d="M240 100 L150 260 H330 Z" fill="rgba(127,224,160,.15)" stroke="${CG}" stroke-width="4"/><text x="240" y="310" text-anchor="middle" font-family="Inter" font-weight="900" font-size="34" fill="${CG}">BERHIAS ✓</text><text x="240" y="362" text-anchor="middle" font-family="Inter" font-weight="800" font-size="26" fill="#fff">memperindah yang ada</text><path d="M1160 100 L1070 260 H1250 Z" fill="rgba(255,138,92,.15)" stroke="${CR}" stroke-width="4"/><text x="1160" y="310" text-anchor="middle" font-family="Inter" font-weight="900" font-size="34" fill="${CR}">MENGUBAH ✕</text><text x="1160" y="362" text-anchor="middle" font-family="Inter" font-weight="800" font-size="26" fill="#fff">ciptaan Allah</text></g></svg>`, 'left:260px;top:300px');
  item(309.6, 322.6, n, (lt, t, it) => { n.style.opacity = clamp(lt / .3) * clamp((it.t1 - t) / .3); n.querySelector('.bm').setAttribute('transform', `rotate(${-eio((t - 317.2) / 1.2) * 6} 700 100)`); }); sfx(317.2, 'impact', .6); })();
line(309.7, 317.1, 'left:140px;top:200px;width:1640px', 'alis pemberian Allah [jangan diubah-ubah]', { fs: 42, m: [311.6] });
line(317.2, 322.6, 'left:140px;top:200px;width:1640px', 'boleh berhias · [asalkan tidak mengubah ciptaan Allah]', { fs: 42, m: [319.6] });

// --- 17 /flowchart : pengecualian karena hajat
scene(322.6, 350.1, { cut: 'glitch' });
sv(322.7, 350.1, DEFS + BOX(760, 200, 400, 110, { s: '#fff', sw: 5 }) + T(960, 268, 'MENGUBAH CIPTAAN', { f: .2, fs: 32, fw: 900 }) +
  '<g data-f="1.0">' + LN([[860, 310], [520, 440]], { s: CG, sw: 5, arrow: 1 }) + '</g>' + BOX(240, 440, 560, 200, { s: CG, sw: 5, del: 1.2 }) + T(520, 500, 'karena HAJAT ✓', { f: 1.4, fs: 38, fw: 900, c: CG }) + T(520, 550, 'mis. lahir sumbing lalu dioperasi', { f: 6.4, fs: 28, fw: 800 }) + T(520, 595, 'boleh · dimaklumi', { f: 8.0, fs: 28, fw: 800 }) +
  '<g data-f="17.0">' + LN([[1060, 310], [1400, 440]], { s: CR, sw: 5, arrow: 1 }) + '</g>' + BOX(1120, 440, 560, 200, { s: CR, sw: 5, del: 17.2 }) + T(1400, 500, 'sekadar kecantikan ✕', { f: 17.4, fs: 38, fw: 900, c: CR }) + T(1400, 555, 'yang dilarang', { f: 17.6, fs: 28, fw: 800 }), 'left:0;top:0', 1920, 1080, .8);
line(341.6, 350.1, 'left:140px;top:760px;width:1640px;text-align:center', 'boleh kita berhias · [asalkan tidak mengubah ciptaan Allah]', { fs: 42, m: [346.0] });

// --- 18 /citation : Al-Baqarah 221
scene(350.1, 369.6, { cut: 'glitch' });
line(350.2, 354.6, 'left:160px;top:130px;width:1600px', 'petunjuk Al-Qur\'an tentang [nikah · kawin]', { fs: 46, m: [352.0] });
paper(354.5, 'left:160px;top:210px;width:1600px;height:520px', '', 369.6);
arw(node('وَلَأَمَةٌ مُؤْمِنَةٌ [خَيْرٌ مِنْ مُشْرِكَةٍ] وَلَوْ أَعْجَبَتْكُمْ ... وَلَعَبْدٌ مُؤْمِنٌ [خَيْرٌ مِنْ مُشْرِكٍ] وَلَوْ أَعْجَبَكُمْ', 'left:220px;width:1480px;top:250px;text-align:center;font-size:62px;line-height:1.8;color:#151515'), 354.8, 12.0, { marks: [358.0, 365.0] });
chip('QS. AL-BAQARAH : 221', 355.0, 'left:160px;top:760px', 369.6, Y);

// --- 19 /split-screen : beriman walau budak
scene(369.6, 404.0, { cut: 'glitch' });
line(369.7, 376.0, 'left:140px;top:130px;width:1640px', 'yang ingin tergolong [muttaqin] dan mencari pasangan hidup…', { fs: 42, m: [372.0] });
[['👩', 'PEREMPUAN', 'budak · hamba sahaya · tapi BERIMAN', 'memiliki segala-galanya · tapi TIDAK beriman', 376.0, 383.0], ['👨', 'LAKI-LAKI', 'budak · pembantu · tapi BERIMAN', 'punya segala-galanya · tapi TIDAK beriman', 387.6, 396.0]].forEach(([e, h, a, b, t1, t2], i) =>
  crd(`<div style="width:780px;border:4px solid #fff;border-radius:20px;padding:26px"><div style="font:900 40px Inter">${e} ${h}</div><div style="margin-top:16px;border-left:8px solid ${CG};padding:10px 18px;font:900 32px Inter;color:${CG}">✓ ${a}</div><div style="font:900 36px Inter;color:${Y};margin:10px 0 10px 18px">LEBIH BAIK daripada</div><div style="border-left:8px solid ${CR};padding:10px 18px;font:900 32px Inter;color:${CR}">✕ ${b}</div></div>`, `left:${140 + i * 860}px;top:240px`, t1, 404.0, 'up', 'stamp'));

// --- 20 /bar-chart : pilih iman dulu
scene(404.0, 436.4, { cut: 'glitch' });
line(404.1, 420.3, 'left:140px;top:130px;width:1640px', 'dalam memilih pasangan · [pilih iman terlebih dahulu] · apakah ia takwa kepada Allah?', { fs: 40, m: [409.0] });
sv(411.0, 436.4, `<path d="M300 900 H1620" stroke="#fff" stroke-width="4" data-d="1320"/>` + [['IMAN & TAKWA', .95, Y, 0], ['harta', .28, '#fff', 20.0], ['keturunan', .24, '#fff', 20.6], ['cantik · tampan', .2, '#fff', 21.2]].map(([s, h, c, d], i) => `<rect x="${380 + i * 310}" y="${900 - h * 560}" width="200" height="${h * 560}" rx="8" fill="${i ? 'rgba(233,242,58,.10)' : 'rgba(233,242,58,.85)'}" stroke="${c}" stroke-width="3" data-f="${d}"/>` + T(480 + i * 310, 945, s, { f: d, fs: 28, fw: 900, c }) + (i ? '' : T(480, 900 - h * 560 - 20, '#1 UTAMA', { f: .4, fs: 30, fw: 900, c: Y }))).join('') + T(1255, 680, 'nomor sekian', { f: 21.6, fs: 32, fw: 900 }), 'left:0;top:0', 1920, 1080, .6);
crd(vcard(620, CG, `<div style="font:900 32px Inter;line-height:1.3">beriman tapi tak punya harta → <span style="color:${CG}">insya Allah dimudahkan · didatangkan rezeki</span></div>`), 'left:1180px;top:250px', 420.4, 430.8, 'left', 'beep');

// --- 21 /callout : jangan tunda urusan iman
scene(436.4, 455.8, { cut: 'glitch' });
crd(`<div style="font:900 50px Inter;color:${CR}">✕ "urusan iman nanti saja · bisa diajarkan nanti"</div>`, 'left:200px;top:200px', 439.9, 455.8, 'left', 'stamp');
seg('itu sangat sulit · sangat payah<br>mendidik diri sendiri saja [susah]', 445.0, 'left:200px;top:340px;width:1520px', { size: 60, iv: .03, marks: [449.6] });
crd(`<div style="width:1500px;border:5px solid ${Y};border-radius:20px;padding:30px 40px;background:rgba(233,242,58,.08)"><div class="mono" style="font-size:24px;color:${Y}">💡 NASIHAT AL-QUR'AN</div><div style="font:900 60px Inter;margin-top:14px">pilihlah <span class="mk">iman terlebih dahulu</span></div></div>`, 'left:200px;top:620px', 451.4, 455.8, 'scale', 'impact');

// --- 22 /citation : Al-Baqarah 228
scene(455.8, 479.8, { cut: 'glitch' });
line(455.9, 467.0, 'left:160px;top:130px;width:1600px', 'dalam rumah tangga · seperti apa [kedudukan istri] dan [kedudukan suami]?', { fs: 42, m: [461.0, 464.0] });
paper(466.8, 'left:160px;top:230px;width:1600px;height:420px', '', 479.8);
arw(node('وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ [وَلِلرِّجَالِ عَلَيْهِنَّ دَرَجَةٌ]', 'left:220px;width:1480px;top:290px;text-align:center;font-size:70px;line-height:1.8;color:#151515'), 467.0, 9.0, { marks: [474.0] });
chip('QS. AL-BAQARAH : 228', 467.2, 'left:160px;top:680px', 479.8, Y);

// --- 23 /diagram : hak timbal balik
scene(479.8, 518.2, { cut: 'glitch' });
line(479.9, 492.4, 'left:140px;top:130px;width:1640px', 'masing-masing punya hak · cuma laki-laki [lebih satu tingkatan]', { fs: 42, m: [487.0] });
crd(vcard(700, CB, `<div style="font:900 40px Inter;color:${CB}">👩 HAK ISTRI dari suami</div>${['💰 nafkah', '🛡️ perlindungan', '📚 pendidikan', '🔒 keamanan'].map((s, i) => `<div class="hk" style="font:900 34px Inter;margin-top:12px">${s}</div>`).join('')}`), 'left:140px;top:240px', 493.1, 518.2, 'left', 'stamp');
crd(vcard(700, Y, `<div style="font:900 40px Inter;color:${Y}">👨 HAK SUAMI dari istri</div>${['🤝 taat', '🙇 patuh', '🎖️ hormat'].map(s => `<div style="font:900 34px Inter;margin-top:12px">${s}</div>`).join('')}`), 'left:1080px;top:240px', 500.0, 518.2, 'left', 'stamp');
crd(`<div style="font:900 90px Inter;color:#fff">⇄</div>`, 'left:900px;top:380px', 499.6, 518.2, 'scale');
crd(`<div style="font:900 44px Inter;color:#111;background:${CG};border-radius:12px;padding:10px 26px">suami-istri taat & takwa → rumah tangga NYAMAN & TENTERAM 🏠</div>`, 'left:200px;top:820px', 509.4, 518.2, 'up', 'impact');

// --- 24 /citation : An-Nisa 34 (nusyuz)
scene(518.2, 538.9, { cut: 'glitch' });
line(518.3, 530.7, 'left:160px;top:130px;width:1600px', 'kalau istri menampakkan hal yang tidak baik · bagaimana [sikap suami yang takwa]?', { fs: 40, m: [526.0] });
paper(530.5, 'left:160px;top:230px;width:1600px;height:440px', '', 538.9);
arw(node('وَاللَّاتِي تَخَافُونَ نُشُوزَهُنَّ [فَعِظُوهُنَّ] وَاهْجُرُوهُنَّ فِي الْمَضَاجِعِ وَاضْرِبُوهُنَّ', 'left:220px;width:1480px;top:290px;text-align:center;font-size:66px;line-height:1.8;color:#151515'), 530.8, 7.6, { marks: [534.0] });
chip("QS. AN-NISA' : 34", 531.0, 'left:160px;top:700px', 538.9, Y);

// --- 25 /checklist : gelagat nusyuz
scene(538.9, 557.3, { cut: 'glitch' });
line(539.0, 549.3, 'left:140px;top:130px;width:1640px', 'perempuan yang sudah jelas [menampakkan durhakanya]…', { fs: 46, m: [543.0] });
[['kurang menghormati suami', 549.4], ['bersuara lebih banyak', 551.6], ['nada bicara tinggi kepada suami', 553.4]].forEach(([s, t], i) => crd(`<div style="display:flex;align-items:center;gap:24px"><div style="width:76px;height:76px;border-radius:12px;background:${CR};display:flex;align-items:center;justify-content:center;font:900 50px Inter;color:#111">!</div><div style="font:900 50px Inter">${s}</div></div>`, `left:260px;top:${300 + i * 150}px`, t, 557.3, 'scale', 'tick'));
line(555.0, 557.3, 'left:260px;top:780px;width:1400px', 'ini petunjuk [gelagat istri yang durhaka]', { fs: 40, m: [556.0] });

// --- 26 /timeline : langkah bertahap suami yang takwa
scene(557.3, 592.0, { cut: 'glitch' });
line(557.4, 567.1, 'left:140px;top:130px;width:1640px', 'bagaimana suami yang takwa menghadapinya? → [bertahap]', { fs: 44, m: [562.0] });
sv(567.0, 592.0, DEFS + `<path d="M200 470 H1720" stroke="#fff" stroke-width="5" data-d="1520" data-dur="2"/>` +
  [['01', 'NASIHATI', 'فَعِظُوهُنَّ', 300, 0, CG], ['02', 'pisah ranjang', 'وَاهْجُرُوهُنَّ', 760, 4.8, CB], ['03', 'isyarat ringan', 'وَاضْرِبُوهُنَّ', 1220, 13.4, Y], ['04', 'cari solusi terbaik', '', 1640, 24.0, '#fff']].map(([n, s, ar, x, d, c]) => `<circle cx="${x}" cy="470" r="34" fill="#000" stroke="${c}" stroke-width="5" data-f="${d}"/>` + T(x, 482, n, { f: d, fs: 28, fw: 900, c }) + T(x, 560, s, { f: d + .2, fs: 32, fw: 900, c }) + (ar ? T(x, 400, ar, { f: d + .3, ff: 'Amiri', fs: 42, fw: 700, c }) : '')).join(''), 'left:0;top:0', 1920, 1080, .6);
crd(vcard(1300, Y, `<div class="mono" style="font-size:24px;color:${Y}">MENURUT ULAMA TAFSIR</div><div style="font:900 38px Inter;margin-top:10px;line-height:1.3">"pukul" = misalnya dengan sapu tangan · <span class="mk">BUKAN untuk menyakiti</span> · hanya isyarat bahwa suami sangat marah</div>`, 'rgba(233,242,58,.06)'), 'left:310px;top:660px', 580.6, 592.0, 'up', 'impact');

// --- 27 penutup
scene(592.0, TOTAL, { cut: 'hard' });
mePol('left:200px;top:200px', 592.1, TOTAL, -4, 400);
crd(`<div style="font:900 40px Inter;line-height:1.3">kalau tidak mempan juga → barulah memikirkan <span class="mk">cara & solusi terbaik</span></div>`, 'left:760px;top:220px;width:1000px', 592.2, TOTAL, 'left', 'tick');
sub2('left:760px;top:520px', 593.0, TOTAL);

// ================================================================== JADWAL KODE VISUAL
[[0, 9.2, '/kinetic-type'], [9.2, 21.0, '/roadmap'], [21.0, 43.3, '/citation'], [43.3, 58.6, '/split-screen'], [58.6, 68.7, '/spectrum'], [68.7, 98.9, '/handwritten'], [98.9, 115.5, '/layers'], [115.5, 169.9, '/decision-matrix'],
 [169.9, 203.4, '/citation'], [203.4, 215.8, '/exploded-view'], [215.8, 229.5, '/checklist'], [229.5, 249.7, '/badge'], [249.7, 271.7, '/citation'], [271.7, 287.2, '/infographic'], [287.2, 299.6, '/search'], [299.6, 322.6, '/balance'],
 [322.6, 350.1, '/flowchart'], [350.1, 369.6, '/citation'], [369.6, 404.0, '/split-screen'], [404.0, 436.4, '/bar-chart'], [436.4, 455.8, '/callout'], [455.8, 479.8, '/citation'], [479.8, 518.2, '/diagram'], [518.2, 538.9, '/citation'],
 [538.9, 557.3, '/checklist'], [557.3, 592.0, '/timeline'], [592.0, TOTAL, '/teaser']]
 .reduce((acc, [a, b, c]) => { if (!acc.m[c]) acc.m[c] = String(++acc.n).padStart(2, '0'); codeTag(a, b, acc.m[c], c); return acc; }, { n: 0, m: {} });
