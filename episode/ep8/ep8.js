// ================================================================== ADEGAN EPISODE 08 · Ar-Rahman Ar-Rahim (gaya Ep7 + 8 gaya ilustrasi)
const BSM = 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ';
const RR = 'الرَّحْمَٰنِ الرَّحِيمِ';
const IYK = 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ';
function meTag(t0, t1, topik) { const n = node(`<div style="width:430px;background:#141414;border:2px solid ${Y};padding:18px 22px">
  <div class="mono" style="font-size:16px;color:${Y}">● PENYAMPAI KAJIAN</div><div style="font:800 34px Inter;margin-top:6px">@alurziyadahku</div>
  <div class="mono" style="font-size:15px;color:#eee;margin-top:8px">TOPIK: <span class="ar" style="font-size:24px;color:#fff">${topik}</span></div></div>`, 'left:1270px;top:720px'); show(n, t0, 'left', t1); sfx(t0, 'beep', .5); }
function doa(t0, t1, lab, ar, tr, o = {}) {
  label(lab, t0 + .05, 'left:160px;top:140px', t1);
  paper(t0, `left:160px;top:190px;width:1600px;height:${o.h || 620}px`, '', t1);
  arw(node(ar, `left:220px;width:1480px;top:240px;text-align:center;font-size:${o.fs || 70}px;line-height:1.75;color:#151515`), o.a0 || t0 + .1, o.ad || 2.6, { marks: o.am || [], t1 });
  if (tr) kin(node('', `left:260px;top:${o.tt || 560}px;width:1400px;font:700 ${o.tfs || 38}px Inter;color:#222;text-align:center`), tr, o.tr0 || t0 + 2.6, { iv: .026, marks: o.tm || [], t1 });
  if (o.chip) chip(o.chip, o.c0 || t0 + 1.2, `left:160px;top:${(o.h || 620) + 215}px`, t1, Y);
}
// ---------- ilustrasi: latar layar penuh
function bgFill(t0, t1, css) { const n = node('', 'left:-160px;top:-120px;width:2240px;height:1320px;' + css); show(n, t0, 'fade', t1, .3); return n; }
function sunburst(t0, t1, c1, c2) { const n = node('', `left:-480px;top:-960px;width:2880px;height:2880px;border-radius:50%;background:repeating-conic-gradient(${c1} 0 7.5deg, ${c2} 7.5deg 15deg)`);
  item(t0, t1, n, (lt, t, it) => { n.style.opacity = clamp(lt / .3) * clamp((it.t1 - t) / .3); n.style.transform = `rotate(${lt * 4}deg)`; }); }
// tokoh tanpa wajah (berdiri)
const person = (x, y, s, col = '#2b2219', cap = '#fff') => `<g transform="translate(${x} ${y}) scale(${s})"><circle cx="0" cy="-150" r="34" fill="#f2c9a0"/><path d="M-34 -160 Q0 -200 34 -160 Z" fill="${cap}"/><path d="M-50 -110 Q0 -125 50 -110 L62 60 L-62 60 Z" fill="${col}"/><rect x="-46" y="58" width="36" height="70" rx="10" fill="${col}"/><rect x="10" y="58" width="36" height="70" rx="10" fill="${col}"/></g>`;
const mosqueFlat = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-150" y="-80" width="300" height="160" fill="#fdf3dc"/><path d="M-90 -80 Q0 -220 90 -80 Z" fill="#2f8f5b"/><path d="M0 -200 V-240" stroke="#e9c043" stroke-width="8"/><circle cx="0" cy="-248" r="10" fill="#e9c043"/><rect x="-200" y="-200" width="34" height="280" fill="#fdf3dc"/><path d="M-200 -200 L-183 -240 L-166 -200 Z" fill="#2f8f5b"/><rect x="166" y="-200" width="34" height="280" fill="#fdf3dc"/><path d="M166 -200 L183 -240 L200 -200 Z" fill="#2f8f5b"/><path d="M-30 80 V10 Q0 -25 30 10 V80 Z" fill="#7a4a22"/></g>`;
const palm = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0 Q10 -120 -6 -240" stroke="#8a5a2b" stroke-width="18" fill="none"/>${[-60, -20, 20, 60, 100, 140].map(a => `<path d="M-6 -240 Q${Math.cos(a * Math.PI / 180) * 70} ${-240 - 60 + Math.abs(a) * .3} ${Math.cos(a * Math.PI / 180) * 140} ${-200 + Math.abs(a) * .5}" stroke="#3aa35b" stroke-width="16" fill="none" stroke-linecap="round"/>`).join('')}</g>`;
const drawerUp = (n, t0, t1, d = .5) => item(t0, t1, n, (lt, t, it) => { n.style.opacity = clamp(lt / .25) * clamp((it.t1 - t) / .25); n.style.transform = `translateY(${(1 - eo(lt / d)) * 60}px)`; });

// --- 0 pembuka (/kinetic-type)
scene(0, 9.8, { cut: 'none' });
arw(node(BSM, 'left:140px;top:120px;width:1000px;font-size:64px;color:#fff;text-align:left'), .1, 1.6);
label('FILE 08 · AYAT KETIGA AL-FATIHAH', 2.3, 'left:140px;top:275px');
arw(node(`[${RR}]`, 'left:140px;top:330px;width:1100px;font-size:110px;color:#fff;text-align:left'), 3.0, 1.6, { marks: [4.8] });
kin(node('', 'left:140px;top:590px;width:1100px;font:700 40px Inter;color:#fff'), 'menunjukkan Allah [berhak dipuji]', 6.0, { iv: .03, marks: [8.0] });
mePol('left:1300px;top:150px', .4, 9.8, 4, 400);
meTag(1.6, 9.8, RR);

// --- 1 /search : makna ar-Rahman ar-Rahim menurut ulama
scene(9.8, 18.6, { cut: 'glitch', light: 1 });
searchFind(9.8, 18.6, {
  q: 'الرحمن المنعم بجلائل النعم', count: 4, pick: 0, shelfPick: 0, times: { type: .4, scan: 1.4, res: 2.1, click: 2.9, det: 3.2 },
  shelf: [["Hasyiyah Ibnu 'Abidin", 'حاشية ابن عابدين'], ['Tafsir al-Qurthubi', 'القرطبي'], ['Tafsir al-Baidhawi', 'البيضاوي'], ['Ihya\' · al-Ghazali', 'الإحياء'], ["Fath al-Muta'al", 'فتح المتعال']],
  results: [
    { title: "Hasyiyah Ibnu 'Abidin (Radd al-Muhtar) · j. 1 hlm. 7", tag: 'COCOK', ar: 'الرَّحْمَٰنُ الْمُنْعِمُ بِجَلَائِلِ النِّعَمِ وَالرَّحِيمُ الْمُنْعِمُ بِدَقَائِقِهَا' },
    { title: "Fath al-Muta'al · ash-Sha'idi · hlm. 172", tag: 'DINUKIL', ar: 'وَالرَّحِيمُ الْمُنْعِمُ بِدَقَائِقِهَا' },
    { title: 'Tafsir al-Baidhawi · al-Fatihah', tag: 'TAFSIR', ar: 'الرَّحْمَٰنُ أَبْلَغُ مِنَ الرَّحِيمِ' },
    { title: 'Nuzhat al-Afkar · al-Majlisi', tag: 'TERKAIT', ar: 'الرَّحْمَٰنُ ذُو الرَّحْمَةِ الْعَامَّةِ' }],
  det: { title: "Hasyiyah Ibnu 'Abidin", ar: 'حَاشِيَةُ ابْنِ عَابِدِينَ', rows: [['PENULIS', "Ibnu 'Abidin (w. 1252 H)"], ['LETAK', 'jilid 1 · halaman 7'], ['AR-RAHMAN', 'pemberi nikmat-nikmat yang besar'], ['AR-RAHIM', 'pemberi nikmat-nikmat yang halus'], ['DIPERIKSA', 'Maktabah Syamilah']], quote: 'الرَّحْمَٰنُ الْمُنْعِمُ بِجَلَائِلِ النِّعَمِ' }
});
camTour(9.8, 18.6, { type: .4, scan: 1.4, res: 2.1, click: 2.9, det: 3.2 });

// --- 2 /mosaic : ar-Rahman = nikmat besar
scene(18.6, 30.1, { cut: 'glitch' });
arw(node('[الرَّحْمَٰنُ]', 'left:140px;width:620px;top:150px;text-align:left;font-size:120px;color:#fff'), 18.8, .8, { marks: [19.8] });
kin(node('', 'left:140px;top:380px;width:620px;font:900 46px Inter;color:#fff;line-height:1.25'), 'pemberi nikmat yang [besar & agung]', 19.5, { iv: .03, marks: [21.4] });
(() => { const IC = {
    iman: `<path d="M0 34 C-60 -6 -30 -60 0 -26 C30 -60 60 -6 0 34Z" fill="none" stroke="${Y}" stroke-width="7"/><path d="M0 -70 V-50 M-40 -56 L-30 -42 M40 -56 L30 -42" stroke="${Y}" stroke-width="6"/>`,
    islam: `<path d="M18 -50 A52 52 0 1 0 18 50 A40 40 0 1 1 18 -50Z" fill="none" stroke="${Y}" stroke-width="7"/><path d="M40 -10 l8 16 l17 2 l-13 11 l4 17 l-16 -9 l-16 9 l4 -17 l-13 -11 l17 -2Z" fill="${Y}"/>`,
    umur: `<path d="M-34 -56 H34 M-34 56 H34 M-28 -56 Q-28 -10 0 0 Q28 -10 28 -56 M-28 56 Q-28 10 0 0 Q28 10 28 56" fill="none" stroke="${Y}" stroke-width="7"/><path d="M-14 46 H14 L0 26Z" fill="${Y}"/>`,
    sehat: `<path d="M-70 0 H-34 L-18 -40 L4 44 L22 -16 L32 0 H70" fill="none" stroke="${Y}" stroke-width="7" stroke-linejoin="round"/>`,
    melihat: `<path d="M-66 0 Q0 -60 66 0 Q0 60 -66 0Z" fill="none" stroke="${Y}" stroke-width="7"/><circle r="20" fill="${Y}"/>`,
    mendengar: `<path d="M-16 50 Q-40 50 -40 20 Q-40 -50 10 -50 Q46 -50 46 -12 Q46 10 22 22 Q8 30 8 44 Q8 62 -16 50Z" fill="none" stroke="${Y}" stroke-width="7"/><path d="M-12 -4 Q-12 -24 8 -24 Q22 -24 22 -10" fill="none" stroke="${Y}" stroke-width="6"/>` };
  [['iman', 22.4], ['islam', 23.4], ['umur', 24.4], ['sehat', 25.4], ['melihat', 26.6], ['mendengar', 27.8]].forEach(([k, t], i) => {
    const n = node(`<div style="width:300px;height:260px;border:3px solid ${Y};border-radius:18px;background:rgba(233,242,58,.06);text-align:center;padding-top:30px"><svg width="160" height="140" viewBox="-80 -70 160 140">${IC[k]}</svg><div style="font:900 30px Inter;margin-top:10px;white-space:nowrap">nikmat ${k === 'islam' ? 'Islam' : k}</div></div>`, `left:${840 + (i % 3) * 330}px;top:${150 + Math.floor(i / 3) * 300}px`, 'dimmable');
    show(n, t, 'scale', 30.1); sfx(t, 'click', .7); }); })();
kin(node('', 'left:140px;top:560px;width:620px;font:700 34px Inter;color:#fff;line-height:1.3'), 'semua itu urusan [Ar-Rahman]', 28.6, { iv: .03, marks: [29.4] });

// --- 3 /bar-chart : ar-Rahim = menyempurnakan nikmat
scene(30.1, 44.0, { cut: 'glitch' });
bgFill(30.1, 44.0, 'background:#0d1b3d;background-image:radial-gradient(rgba(255,255,255,.18) 1px,transparent 1px);background-size:34px 34px');
arw(node('[الرَّحِيمُ]', 'left:120px;width:700px;top:110px;text-align:left;font-size:120px;color:#fff'), 30.2, .8, { marks: [31.2] });
kin(node('', 'left:120px;top:310px;width:900px;font:800 44px Inter;color:#cfe0ff'), 'yang [menyempurnakan] nikmat itu', 31.0, { iv: .03, marks: [33.0] });
(() => { const B = [['iman', 34.2, 1], ['ilmu', 35.6, .85], ['penglihatan', 37.4, .7], ['pendengaran', 39.2, .78]]; let g = `<path d="M1000 900 H1820 M1000 900 V300" stroke="#fff" stroke-width="3" data-d="1420"/>`;
  B.forEach(([s, t, h], i) => { const x = 1060 + i * 190, d = t - 30.2; g += `<rect x="${x}" y="${900 - h * 520}" width="120" height="${h * 520}" rx="8" fill="${i % 2 ? '#7fd6ff' : Y}" data-f="${d}" style="transform-origin:${x}px 900px"/>` + T(x + 60, 940, s, { f: d, fs: 24, fw: 800 }) + T(x + 60, 880 - h * 520, '+', { f: d + .3, fs: 50, fw: 900, c: '#fff' }); });
  sv(30.2, 44.0, g, 'left:0;top:0', 1920, 1080, .6); })();
kin(node('', 'left:120px;top:880px;width:860px;font:800 40px Inter;color:' + Y), 'bertambah iman · ilmu · tajam mata · tajam telinga', 41.9, { iv: .02 });

// --- 4 /world-map : Rabbil 'alamin memelihara alam semesta
scene(44.0, 71.0, { cut: 'glitch' });
bgFill(44.0, 71.0, 'background:#06121f');
(() => { let r = 11; const R = () => (r = (r * 16807) % 2147483647) / 2147483647; let dots = '';
  const land = [[230, 300, 260, 150], [420, 520, 150, 220], [880, 260, 240, 140], [950, 470, 170, 230], [1180, 260, 380, 200], [1420, 600, 150, 90], [1520, 720, 140, 90]];
  land.forEach(([x, y, w, h]) => { for (let i = 0; i < w * h / 520; i++) { const a = R() * 2 * Math.PI, rr = Math.sqrt(R()); const px = x + Math.cos(a) * rr * w / 2, py = y + Math.sin(a) * rr * h / 2; dots += `<circle cx="${px.toFixed(0)}" cy="${py.toFixed(0)}" r="3.2" fill="#2f6f9f" data-f="${(R() * 1.6).toFixed(2)}"/>`; } });
  dots += `<circle cx="1080" cy="420" r="16" fill="${Y}" data-f="2"/><circle cx="1080" cy="420" r="40" fill="none" stroke="${Y}" stroke-width="3" data-d="252" data-del="2.2"/>` + T(1080, 380, 'Mekah', { f: 2.4, fs: 26, fw: 800, c: Y });
  sv(44.1, 71.0, dots, 'left:0;top:0', 1920, 1080, .8); })();
kin(node('', 'left:140px;top:110px;width:1640px;font:800 40px Inter;color:#fff'), 'kita ambil ayat sebelumnya…', 44.1, { iv: .03 });
arw(node('[رَبِّ الْعَالَمِينَ]', 'left:0;right:0;top:760px;text-align:center;font-size:100px;color:#fff'), 54.2, 1.2, { marks: [55.6] });
kin(node('', 'left:140px;top:930px;width:1640px;font:800 40px Inter;color:#ff8a5c;text-align:center'), 'pemelihara alam semesta, begitu dahsyat → kita pun [takut]', 58.5, { iv: .03, marks: [68.5] });

// --- 5 /mindmap : dahsyat tapi Pengasih Penyayang
scene(71.0, 110.0, { cut: 'hard' });
(() => { const nodeBox = (x, y, w, h, ar, sub, c, d, fs = 44) => BOX(x - w / 2, y - h / 2, w, h, { s: c, sw: 5, del: d, fill: 'rgba(255,255,255,.04)' }) + T(x, y + (sub ? -6 : 14), ar, { f: d + .2, ff: 'Amiri', fs, fw: 400, c }) + (sub ? T(x, y + 40, sub, { f: d + .3, fs: 24, fw: 800 }) : '');
  sv(71.1, 110.0, DEFS + LN([[640, 300], [800, 430]], { s: '#fff', sw: 4, del: .6, arrow: 1 }) +
    nodeBox(420, 260, 440, 150, 'رَبُّ الْعَالَمِينَ', 'dahsyat · mengelola alam', '#ff8a5c', .1) +
    `<rect x="760" y="420" width="400" height="200" rx="18" fill="rgba(233,242,58,.12)" stroke="${Y}" stroke-width="7" data-d="1200" data-del="1.0"/>` + T(960, 515, RR, { f: 1.2, ff: 'Amiri', fs: 56, fw: 400, c: Y }) + T(960, 580, 'bukan pemarah · bukan keras', { f: 6.0, fs: 24, fw: 800 }) +
    LN([[860, 620], [460, 760]], { s: Y, sw: 4, del: 27.1, arrow: 1 }) + LN([[960, 620], [960, 760]], { s: Y, sw: 4, del: 30.4, arrow: 1 }) + LN([[1060, 620], [1460, 760]], { s: Y, sw: 4, del: 33.0, arrow: 1 }) +
    nodeBox(460, 840, 380, 130, 'dikasihi', 'pasti aku…', '#fff', 27.1, 40) + nodeBox(960, 840, 380, 130, 'diampuni', 'pasti aku…', '#fff', 30.4, 40) + nodeBox(1460, 840, 380, 130, 'disayangi', 'pasti aku…', '#fff', 33.0, 40), 'left:0;top:0', 1920, 1080, .5); })();
kin(node('', 'left:1180px;top:200px;width:640px;font:900 44px Inter;color:#fff;line-height:1.25'), 'hati kita [senang] & gembira', 87.7, { iv: .03, marks: [90.0] });
stamp('KHABAR GEMBIRA', 'left:1260px;top:330px', 105.7, 110.0, Y);

// --- 6 /chart : grafik takut & harap
scene(110.0, 136.7, { cut: 'glitch' });
bgFill(110.0, 136.7, 'background:#0d1b3d');
label('GRAFIK HATI SEORANG HAMBA · AYAT 2 → 4', 110.1, 'left:140px;top:110px;color:#cfe0ff');
(() => { const X = [380, 960, 1540], fy = [330, 760, 300], hy = [700, 300, 680];
  let g = `<path d="M240 860 H1680 M240 860 V240" stroke="#fff" stroke-width="3" data-d="2060"/>` +
    `<path d="M${X[0]} ${fy[0]} C700 ${fy[0]} 700 ${fy[1]} ${X[1]} ${fy[1]} S1300 ${fy[2]} ${X[2]} ${fy[2]}" fill="none" stroke="#ff8a5c" stroke-width="7" data-d="1500" data-del=".4" data-dur="3"/>` +
    `<path d="M${X[0]} ${hy[0]} C700 ${hy[0]} 700 ${hy[1]} ${X[1]} ${hy[1]} S1300 ${hy[2]} ${X[2]} ${hy[2]}" fill="none" stroke="#7fe0a0" stroke-width="7" data-d="1500" data-del=".6" data-dur="3"/>` +
    [['رَبِّ الْعَالَمِينَ', 0], [RR, 1], ['مَالِكِ يَوْمِ الدِّينِ', 2]].map(([a, i]) => T(X[i], 920, a, { f: i === 2 ? 11.4 : .3 + i * .5, ff: 'Amiri', fs: 40, fw: 400, c: i === 2 ? Y : '#fff' })).join('') +
    T(1700, 300, 'takut', { f: 2.0, fs: 30, fw: 900, c: '#ff8a5c', a: 'start' }) + T(1700, 680, 'harap', { f: 2.2, fs: 30, fw: 900, c: '#7fe0a0', a: 'start' });
  sv(110.1, 136.7, g, 'left:0;top:0', 1920, 1080, .6); })();
kin(node('', 'left:140px;top:170px;width:1640px;font:800 36px Inter;color:#fff'), 'berpikir Maha Pengasih [saja] → dikhawatirkan tertipu', 110.6, { iv: .025, marks: [114.0], t1: 121.4 });
arw(node('[مَالِكِ يَوْمِ الدِّينِ]', 'left:0;right:0;top:160px;text-align:center;font-size:70px;color:' + Y), 121.6, 1.2, { marks: [123.2] });
kin(node('', 'left:140px;top:990px;width:1640px;font:800 34px Inter;color:#fff;text-align:center'), 'Pemilik hari pembalasan', 124.5, { iv: .03 });

// --- 7 /balance : besar atau kecil dimintai pertanggungjawaban
scene(136.7, 159.0, { cut: 'glitch' });
seg('Allah [Maha Adil]', 136.8, 'left:140px;top:140px;width:1640px', { size: 84, iv: .04, marks: [138.6] });
sv(137.2, 159.0, `<path d="M960 330 V780 M760 840 H1160" stroke="#fff" stroke-width="6" data-d="840"/><g data-f=".3"><path d="M600 420 L1320 420" stroke="#fff" stroke-width="6"/><path d="M600 420 L520 560 H680 Z" fill="rgba(233,242,58,.15)" stroke="${Y}" stroke-width="4"/><path d="M1320 420 L1240 560 H1400 Z" fill="rgba(255,138,92,.15)" stroke="#ff8a5c" stroke-width="4"/></g>` +
  T(600, 610, 'amal besar', { f: .6, fs: 34, fw: 800, c: Y }) + T(1320, 610, 'amal sangat kecil', { f: .8, fs: 34, fw: 800, c: '#ff8a5c' }) + T(960, 300, 'DISIDANG SEADIL-ADILNYA', { f: 12.4, fs: 40, fw: 900 }), 'left:0;top:0', 1920, 1080, .6);
kin(node('', 'left:140px;top:900px;width:1640px;font:800 40px Inter;color:#fff;text-align:center'), 'tak ada alasan lagi → [bersegera bertaubat] · lebih berhati-hati', 141.9, { iv: .025, marks: [146.0] });

// --- 8 /layers : iyyaka na'budu wa iyyaka nasta'in
scene(159.0, 187.9, { cut: 'glitch' });
arw(node(`[${IYK}]`, 'left:0;right:0;top:110px;text-align:center;font-size:88px;color:#fff'), 159.1, 2.0, { marks: [161.4] });
[['hanya kepada Allah kami menyembah', 160.5], ['hanya kepada Allah kami beribadah', 163.5], ['hanya kepada Allah kami mengabdi', 166.8], ['hanya kepada Allah kami taat & patuh', 170.2], ['hanya kepada Engkau kami minta pertolongan', 176.0]].forEach(([s, t], i) => {
  const n = node(`<div style="width:${1000 + i * 90}px;height:96px;background:${i === 4 ? Y : 'rgba(233,242,58,.12)'};border:3px solid ${Y};color:${i === 4 ? '#111' : '#fff'};display:flex;align-items:center;padding-left:40px;font:900 38px Inter;transform:skewX(-10deg)"><span style="transform:skewX(10deg)">${String(i + 1).padStart(2, '0')} · ${s}</span></div>`, `left:${180 + i * 30}px;top:${340 + i * 116}px`, 'dimmable'); show(n, t, 'drop', 187.9); sfx(t, 'click', .7); });

// --- 9 /chalkboard : definisi ibadah
scene(187.9, 222.2, { cut: 'glitch' });
bgFill(187.9, 222.2, 'background:#1d3b2c;background-image:radial-gradient(ellipse at 40% 30%,rgba(255,255,255,.08),transparent 60%);border:24px solid #6b4a2b;box-sizing:border-box');
const chalk = 'font-family:Kalam,cursive;color:#f6efd8;text-shadow:0 0 2px rgba(255,255,255,.4)';
kin(node('', `left:140px;top:120px;width:1640px;${chalk};font-size:60px;font-weight:700`), 'IBADAH = melaksanakan sesuatu yang [dituntut oleh syarak]', 188.0, { iv: .03, marks: [194.0] });
sv(188.4, 222.2, `<path d="M140 230 Q900 210 1700 235" stroke="#e9c043" stroke-width="4" fill="none" data-d="1570" data-del="3"/>` +
  `<g transform="translate(380 560)"><circle cx="0" cy="-120" r="30" fill="none" stroke="#f6efd8" stroke-width="5" data-d="190" data-del="9.2"/><path d="M0 -90 V40 M0 -60 L-50 -10 M0 -60 L50 -10 M0 40 L-40 140 M0 40 L40 140" stroke="#f6efd8" stroke-width="5" fill="none" data-d="560" data-del="9.4"/></g>` + T(380, 760, 'sembahyang', { f: 10, ff: 'Kalam', fs: 40, c: '#f6efd8' }) +
  `<g transform="translate(960 560)"><path d="M-110 30 L0 -20 L110 30 M-110 30 L0 70 L110 30" stroke="#f6efd8" stroke-width="5" fill="none" data-d="560" data-del="10.6"/><path d="M-90 -10 Q0 -50 0 -10 Q0 -50 90 -10 V20 Q0 -20 0 15 Q0 -20 -90 20 Z" stroke="#e9c043" stroke-width="4" fill="none" data-d="520" data-del="10.8"/></g>` + T(960, 760, "membaca Al-Qur'an", { f: 11.2, ff: 'Kalam', fs: 40, c: '#f6efd8' }) +
  `<g transform="translate(1540 540)"><path d="M-40 -60 A70 70 0 1 0 40 60 A55 55 0 1 1 -40 -60Z" stroke="#e9c043" stroke-width="5" fill="none" data-d="420" data-del="12"/></g>` + T(1540, 760, 'berpuasa', { f: 12.4, ff: 'Kalam', fs: 40, c: '#f6efd8' }), 'left:0;top:0', 1920, 1080, .8);
kin(node('', `left:140px;top:880px;width:1640px;${chalk};font-size:48px;text-align:center`), 'ibadah sulit & rumit → sangat perlu [pertolongan Allah]', 214.9, { iv: .025, marks: [219.0] });

// --- 10 /coin-dial : empat hal ibadah
const COINS = [['١', 'SAH', 225.0], ['٢', 'DITERIMA', 227.0], ['٣', 'BANYAK & KEKAL', 229.7], ['٤', 'TERPELIHARA', 248.3]];
function coinRow(t0, t1, hi) { COINS.forEach(([n, s, t], i) => { const c = node(`<div style="width:320px;text-align:center"><div style="width:220px;height:220px;margin:0 auto;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff3c4,#e9c043 60%,#b98a1e);border:8px solid #8a6414;box-shadow:0 12px 0 #6b4a0e;display:flex;align-items:center;justify-content:center"><span class="ar" style="font-size:120px;font-weight:700;color:#5b3f08">${n}</span></div><div style="font:900 36px Inter;color:#2b2219;margin-top:26px">${s}</div></div>`, `left:${170 + i * 400}px;top:300px`, 'dimmable');
  item(Math.max(t0, t), t1, c, (lt, tt, it) => { c.style.opacity = clamp(lt / .2) * clamp((it.t1 - tt) / .25) * (hi === undefined || hi === i ? 1 : .35); c.style.transform = `rotateY(${(1 - eo(lt / .6)) * 180}deg)`; }); sfx(Math.max(t0, t), 'beep', .7); }); }
scene(222.2, 233.0, { cut: 'glitch' });
bgFill(222.2, 233.0, 'background:#f6ecd2');
(() => { const n = node('<div class="mono" style="font:700 30px DejaVu Sans Mono;letter-spacing:.1em;color:#2b2219">EMPAT HAL YANG BERSANGKUTAN DENGAN IBADAH</div>', 'left:140px;top:150px'); show(n, 222.3, 'fade', 233.0); })();
coinRow(222.2, 233.0);
sv(222.4, 233.0, `<path d="M160 760 H1760" stroke="#2b2219" stroke-width="5" data-d="1600"/>${Array.from({ length: 33 }, (_, i) => `<path d="M${160 + i * 50} 760 V${i % 4 ? 780 : 800}" stroke="#2b2219" stroke-width="4" data-f="${(i * .03).toFixed(2)}"/>`).join('')}`, 'left:0;top:0', 1920, 1080, .8);

// --- 11 /vintage-map : beribadah sampai al-yaqin
scene(233.0, 254.5, { cut: 'glitch' });
bgFill(233.0, 254.5, 'background:radial-gradient(ellipse at 50% 45%,#f4e4bc,#d9bf86 80%,#b9985a)');
sv(233.1, 254.5, `<rect x="80" y="70" width="1760" height="940" fill="none" stroke="#6b4a22" stroke-width="6" data-d="5400"/><rect x="100" y="90" width="1720" height="900" fill="none" stroke="#6b4a22" stroke-width="2" data-d="5240"/>` +
  `<path d="M260 820 C520 820 520 560 780 560 S1100 820 1320 700 S1560 360 1680 320" fill="none" stroke="#8a2b1a" stroke-width="7" stroke-dasharray="18 14" data-d="1900" data-del=".8" data-dur="8"/>` +
  [[260, 820, 'mulai beribadah', .5], [780, 560, 'istiqamah', 3.6], [1320, 700, 'rutin & banyak', 6.4], [1680, 320, 'الْيَقِينُ = mati', 9.0]].map(([x, y, s, d], i) => `<circle cx="${x}" cy="${y}" r="20" fill="${i === 3 ? '#8a2b1a' : '#6b4a22'}" data-f="${d}"/>` + T(x, y - 40, s, { f: d + .2, fs: 34, ff: i === 3 ? 'Amiri' : 'Kalam', fw: 700, c: '#4a2f10' })).join('') +
  `<g transform="translate(1680 860)" data-f="1"><circle r="70" fill="none" stroke="#6b4a22" stroke-width="4"/><path d="M0 -60 L12 0 L0 60 L-12 0Z" fill="#8a2b1a"/><text y="-78" text-anchor="middle" font-family="Kalam" font-size="26" fill="#4a2f10">U</text></g>`, 'left:0;top:0', 1920, 1080, .8);
arw(node('وَاعْبُدْ رَبَّكَ [حَتَّىٰ يَأْتِيَكَ الْيَقِينُ]', 'left:0;right:0;top:120px;text-align:center;font-size:80px;color:#3b240c'), 236.5, 2.4, { marks: [239.5] });
chip('QS. AL-HIJR : 99', 237.2, 'left:150px;top:960px', 254.5, '#6b4a22');
kin(node('', 'left:300px;top:930px;width:1400px;font:800 34px Inter;color:#3b240c;text-align:center'), 'menurut ulama tafsir: "keyakinan" = [sampai mati]', 244.5, { iv: .03, marks: [247.2] });

// --- 12 /checklist : rekap empat perkara
scene(254.5, 277.0, { cut: 'glitch' });
arw(node(`[${IYK}]`, 'left:0;right:0;top:110px;text-align:center;font-size:76px;color:#fff'), 254.6, 1.8, { marks: [256.6] });
[['ibadah kita SAH', 258.6], ['ibadah kita DITERIMA', 261.6], ['ibadah kita BANYAK & RUTIN', 264.4], ['SELAMAT dari digugurkan Allah', 267.6]].forEach(([s, t], i) => { const n = node(`<div style="display:flex;align-items:center;gap:22px"><div style="width:70px;height:70px;border-radius:10px;background:${Y};display:flex;align-items:center;justify-content:center;font:900 50px Inter;color:#111">✓</div><div style="font:900 50px Inter">${s}</div></div>`, `left:300px;top:${330 + i * 120}px`); show(n, t, 'scale', 277.0); sfx(t, 'click', .8); });
kin(node('', 'left:140px;top:860px;width:1640px;font:800 38px Inter;color:' + Y + ';text-align:center'), 'empat perkara yang sangat memerlukan bantuan Allah', 271.4, { iv: .025 });

// --- 13 /split-screen : sahnya ibadah melalui ilmu
scene(277.0, 302.4, { cut: 'glitch' });
arw(node('[صِحَّةُ الْعِبَادَةِ]', 'left:0;right:0;top:100px;text-align:center;font-size:96px;color:#fff'), 277.1, 1.0, { marks: [279.4] });
kin(node('', 'left:140px;top:260px;width:1640px;font:800 40px Inter;color:#fff;text-align:center'), 'sahnya ibadah diketahui melalui [ilmu]', 279.4, { iv: .03, marks: [282.4] });
[['DENGAN ILMU', '✓ SAH', '#2fae5b', 284.2], ['TANPA ILMU', '✕ TIDAK SAH', '#ff8a5c', 286.0]].forEach((p, i) => { const n = node(`<div style="width:780px;height:560px;border:5px solid ${p[2]};border-radius:18px;text-align:center;padding-top:20px;background:rgba(255,255,255,.03)"><div class="mono" style="font-size:26px;color:${p[2]}">${p[0]}</div><svg width="300" height="320" viewBox="-150 -280 300 320">${person(0, -20, 1.0, i ? '#7a4a22' : '#2f5d8a')}</svg><div style="font:900 52px Inter;color:${p[2]}">${p[1]}</div></div>`, `left:${140 + i * 860}px;top:340px`, 'dimmable'); show(n, p[3], 'up', 302.4); sfx(p[3], 'stamp', .6); });
kin(node('', 'left:140px;top:960px;width:1640px;font:700 32px Inter;color:#fff;text-align:center'), 'walaupun tampak sama · ilmu = pokok pertama agar ibadah sah', 290.0, { iv: .022 });

// --- 14 /tree : ilmu tauhid
scene(302.4, 312.0, { cut: 'glitch' });
sv(302.5, 312.0, BOX(760, 220, 400, 100, { s: Y }) + T(960, 283, 'ILMU', { f: .1, fs: 44, fw: 900, c: Y }) + LN([[960, 320], [960, 380]], { del: .3 }) + LN([[560, 380], [1360, 380]], { del: .4 }) +
  LN([[560, 380], [560, 430]], { del: .6 }) + BOX(260, 430, 600, 150, { s: Y, sw: 6, del: .7 }) + T(560, 495, '01 · ILMU TAUHID', { f: .9, fs: 40, fw: 900, c: Y }) + T(560, 545, 'mengetahui siapa yang kita sembah', { f: 1.2, fs: 26, fw: 700 }) +
  LN([[1360, 380], [1360, 430]], { del: .8 }) + BOX(1060, 430, 600, 150, { s: '#fff', del: .9 }) + T(1360, 515, '02 · ILMU FIKIH', { f: 1.1, fs: 40, fw: 900 }), 'left:0;top:0', 1920, 1080, .5);
kin(node('', 'left:140px;top:720px;width:1640px;font:800 40px Inter;color:#fff;text-align:center'), 'ilmu tentang kewajiban & cara beribadah = [pokok pertama]', 302.6, { iv: .025, marks: [306.0] });

// --- 15 /search + /citation : hadis sedikit amal dengan ilmu
scene(312.0, 320.6, { cut: 'glitch', light: 1 });
searchFind(312.0, 320.6, {
  q: 'قليل العمل ينفع مع العلم', count: 4, pick: 0, shelfPick: 0, times: { type: .4, scan: 1.4, res: 2.1, click: 2.9, det: 3.2 },
  shelf: [['Al-Jami\' ash-Shaghir · as-Suyuthi', 'الجامع الصغير'], ['Dha\'if al-Jami\' · al-Albani', 'ضعيف الجامع'], ['Musnad asy-Syihab', 'مسند الشهاب'], ['Firdaus · ad-Dailami', 'الفردوس'], ['At-Tanwir · ash-Shan\'ani', 'التنوير']],
  results: [
    { title: 'Al-Jami\' ash-Shaghir wa Ziyadatuh · no. 8540', tag: 'HADIS', ar: 'قَلِيلُ الْعَمَلِ يَنْفَعُ مَعَ الْعِلْمِ وَكَثِيرُ الْعَمَلِ لَا يَنْفَعُ مَعَ الْجَهْلِ' },
    { title: 'Dha\'if al-Jami\' ash-Shaghir · no. 4110', tag: 'DHA\'IF', ar: '(فر) عَنْ أَنَسٍ' },
    { title: 'Musnad asy-Syihab · al-Qudha\'i · j. 2 hlm. 121', tag: 'RIWAYAT', ar: 'مَعَ الْعِلْمِ كَثِيرٌ وَكَثِيرُ الْعَمَلِ مَعَ الْجَهْلِ قَلِيلٌ' },
    { title: 'At-Tanwir Syarh al-Jami\' ash-Shaghir · j. 8 hlm. 90', tag: 'SYARAH', ar: 'قَلِيلُ الْعَمَلِ' }],
  det: { title: 'Al-Jami\' ash-Shaghir', ar: 'الْجَامِعُ الصَّغِيرُ', rows: [['PENULIS', 'Jalaluddin as-Suyuthi (w. 911 H)'], ['RIWAYAT', 'ad-Dailami (al-Firdaus) dari Anas'], ['ISI', 'sedikit amal + ilmu > banyak amal + jahil'], ['DERAJAT', "dha'if (al-Albani · Dha'if al-Jami' 4110)"], ['DIPERIKSA', 'Maktabah Syamilah']], quote: 'قَلِيلُ الْعَمَلِ يَنْفَعُ مَعَ الْعِلْمِ' }
});
camTour(312.0, 320.6, { type: .4, scan: 1.4, res: 2.1, click: 2.9, det: 3.2 });
scene(320.6, 329.1, { cut: 'glitch' });
label('SABDA BAGINDA RASULULLAH', 320.7, 'left:160px;top:140px');
paper(320.6, 'left:160px;top:190px;width:1600px;height:600px', '', 329.1);
kin(node('', 'left:260px;top:280px;width:1400px;font:800 52px Inter;color:#222;text-align:center;line-height:1.3'), '"Sedikit amal tapi [berharap kepada Allah], lebih baik daripada banyak amal tapi [jahil kepada Allah]"', 320.8, { iv: .022, marks: [323.4, 326.4] });

// --- 16 /tree : ilmu fikih
scene(329.1, 342.0, { cut: 'glitch' });
sv(329.2, 342.0, BOX(710, 200, 500, 110, { s: Y }) + T(960, 268, '02 · ILMU FIKIH', { f: .1, fs: 42, fw: 900, c: Y }) + LN([[960, 310], [960, 360]], { del: .3 }) + LN([[440, 360], [1480, 360]], { del: .4 }) +
  [['rukunnya', 3.0], ['syarat sahnya', 4.6], ['yang membatalkan', 6.2]].map(([s, d], i) => { const x = 440 + i * 520; return LN([[x, 360], [x, 410]], { del: d }) + BOX(x - 220, 410, 440, 110, { del: d + .1 }) + T(x, 478, s, { f: d + .3, fs: 36, fw: 800 }); }).join(''), 'left:0;top:0', 1920, 1080, .5);
kin(node('', 'left:140px;top:640px;width:1640px;font:800 42px Inter;color:#fff;text-align:center'), 'contohnya hendak sembahyang · syarat sahnya semua ibadah = [ilmu]', 332.0, { iv: .025, marks: [340.0] });

// --- 17 /flowchart : hukum menuntut ilmu
scene(342.0, 366.0, { cut: 'glitch' });
seg('mesti [menuntut ilmu] · rajin belajar', 342.1, 'left:140px;top:140px;width:1640px', { size: 64, iv: .03, marks: [344.4] });
kin(node('', 'left:140px;top:260px;width:1640px;font:800 40px Inter;color:#fff'), 'apa hukumnya menuntut ilmu? bergantung pada ibadahnya', 348.0, { iv: .025 });
sv(352.2, 366.0, DEFS + BOX(140, 420, 520, 140, { s: '#fff' }) + T(400, 505, 'ibadah SUNAH', { f: 2.9, fs: 40, fw: 900 }) + LN([[660, 490], [880, 490]], { arrow: 1, s: Y, sw: 5, del: 3.3 }) + BOX(900, 420, 620, 140, { s: Y, del: 3.5 }) + T(1210, 505, 'menuntut ilmu SUNAH', { f: 3.7, fs: 40, fw: 900, c: Y }) +
  BOX(140, 640, 520, 140, { s: '#fff', del: 8.6 }) + T(400, 725, 'ibadah WAJIB', { f: 8.8, fs: 40, fw: 900 }) + LN([[660, 710], [880, 710]], { arrow: 1, s: '#2fae5b', sw: 5, del: 9.0 }) + BOX(900, 640, 620, 140, { s: '#2fae5b', sw: 6, del: 9.2 }) + T(1210, 725, 'menuntut ilmu WAJIB', { f: 9.4, fs: 40, fw: 900, c: '#7fe0a0' }), 'left:0;top:0', 1920, 1080, .5);

// --- 18 /search : syarah Zubad
scene(366.0, 374.6, { cut: 'glitch', light: 1 });
searchFind(366.0, 374.6, {
  q: 'وكل من بغير علم يعمل أعماله مردودة', count: 4, pick: 0, shelfPick: 0, times: { type: .4, scan: 1.4, res: 2.1, click: 2.9, det: 3.2 },
  shelf: [['Az-Zubad · Ibnu Ruslan', 'الزبد'], ['Ghayat al-Bayan · ar-Ramli', 'غاية البيان'], ['Mawahib ash-Shamad', 'مواهب الصمد'], ['Al-I\'lam bi Hurmat Ahl al-\'Ilm', 'الإعلام'], ['Syarh al-Mu\'tamad', 'شرح المعتمد']],
  results: [
    { title: 'Az-Zubad fi al-Fiqh asy-Syafi\'i · Ibnu Ruslan · hlm. 4', tag: 'MATAN', ar: 'وَكُلُّ مَنْ بِغَيْرِ عِلْمٍ يَعْمَلُ ... أَعْمَالُهُ مَرْدُودَةٌ لَا تُقْبَلُ' },
    { title: 'Al-I\'lam bi Hurmat Ahl al-\'Ilm wa al-Islam · hlm. 150', tag: 'DINUKIL', ar: 'أَعْمَالُهُ مَرْدُودَةٌ لَا تُقْبَلُ' },
    { title: 'Syarh al-Mu\'tamad fi Ushul al-Fiqh · hlm. 14', tag: 'DINUKIL', ar: 'فَعَالِمٌ بِعِلْمِهِ لَمْ يَعْمَلَنْ' },
    { title: 'Ghayat al-Bayan Syarh Zubad · ar-Ramli', tag: 'SYARAH', ar: 'الْعِلْمُ شَرْطٌ لِصِحَّةِ الْعَمَلِ' }],
  det: { title: 'Az-Zubad', ar: 'مَتْنُ الزُّبَدِ', rows: [['PENULIS', 'Ibnu Ruslan asy-Syafi\'i (w. 844 H)'], ['LETAK', 'halaman 4 · muqaddimah'], ['BENTUK', 'nazham (syair) fikih Syafi\'i'], ['ISI', 'beramal tanpa ilmu → amalnya ditolak'], ['DIPERIKSA', 'Maktabah Syamilah']], quote: 'وَكُلُّ مَنْ بِغَيْرِ عِلْمٍ يَعْمَلُ أَعْمَالُهُ مَرْدُودَةٌ لَا تُقْبَلُ' }
});
camTour(366.0, 374.6, { type: .4, scan: 1.4, res: 2.1, click: 2.9, det: 3.2 });
scene(374.6, 379.1, { cut: 'glitch' });
kin(node('', 'left:140px;top:380px;width:1640px;font:900 56px Inter;color:#ff8a5c;text-align:center;line-height:1.25'), 'beramal tanpa ilmu → amalan [kurang · ditolak · tidak sah]', 374.7, { iv: .02, marks: [376.6] });

// --- 19 /spotlight : qabul al-ibadah
scene(379.1, 408.3, { cut: 'hard' });
arw(node('[قَبُولُ الْعِبَادَةِ]', 'left:0;right:0;top:130px;text-align:center;font-size:120px;color:#fff'), 379.2, 1.0, { marks: [380.4] });
kin(node('', 'left:140px;top:380px;width:1640px;font:800 46px Inter;color:#fff;text-align:center'), 'setiap ibadah kita [belum tentu diterima] Allah', 382.5, { iv: .03, marks: [384.6] });
arw(node(IYK, 'left:0;right:0;top:520px;text-align:center;font-size:70px;color:' + Y), 393.4, 1.6);
kin(node('', 'left:140px;top:700px;width:1640px;font:800 42px Inter;color:#fff;text-align:center'), 'bagaimana agar diterima? ini pun [perlu belajar] → bekal di akhirat', 395.8, { iv: .025, marks: [399.2] });

// --- 20 /isometric : taubat = pondasi
scene(408.3, 441.4, { cut: 'glitch' });
bgFill(408.3, 441.4, 'background:linear-gradient(#bfe6ff,#eaf7ff)');
(() => { const iso = (x, y, w, d, h, top, l, r, del) => { const p = (a, b) => `${x + (a - b) * .866},${y + (a + b) * .5}`; return `<g data-f="${del}"><path d="M${p(0, 0)} L${p(w, 0)} L${p(w, d)} L${p(0, d)} Z" transform="translate(0 ${-h})" fill="${top}"/><path d="M${p(0, d)} L${p(w, d)} L${p(w, d)} L${p(0, d)} Z" fill="none"/><path d="M${x + (0 - d) * .866},${y + d * .5 - h} L${x + (w - d) * .866},${y + (w + d) * .5 - h} L${x + (w - d) * .866},${y + (w + d) * .5} L${x - d * .866},${y + d * .5} Z" fill="${l}"/><path d="M${x + (w - d) * .866},${y + (w + d) * .5 - h} L${x + w * .866},${y + w * .5 - h} L${x + w * .866},${y + w * .5} L${x + (w - d) * .866},${y + (w + d) * .5} Z" fill="${r}"/></g>`; };
  let g = iso(960, 560, 520, 520, 60, '#d9b25a', '#a77f2c', '#8a6420', .2) +
    iso(960, 620, 380, 380, 220, '#fdf3dc', '#e8d6aa', '#cdb680', 6.0) + `<g data-f="7.0"><path d="M860 590 Q960 450 1060 590 Z" fill="#2f8f5b"/><path d="M960 470 V430" stroke="#e9c043" stroke-width="6"/></g>` + T(960, 380, 'IBADAH', { f: 7.2, fs: 54, fw: 900, c: '#1b3b2f' }) +
    `<path d="M1440 960 L1300 880" stroke="#5b3f08" stroke-width="5" data-d="160" data-del=".8"/>` + T(1450, 975, 'PONDASI: TAUBAT', { f: .9, fs: 44, fw: 900, c: '#5b3f08', a: 'start' });
  sv(408.4, 441.4, g, 'left:0;top:0', 1920, 1080, .5); })();
kin(node('', 'left:120px;top:120px;width:760px;font:900 44px Inter;color:#1b3b2f;line-height:1.25'), 'mesti [benar-benar bertaubat] dari segala dosa', 408.6, { iv: .03, marks: [411.0] });
kin(node('', 'left:1240px;top:160px;width:600px;font:800 34px Inter;color:#1b3b2f;line-height:1.3'), 'taubat = asas · pondasi menuju jalan Allah', 423.5, { iv: .025 });
stamp('ADAB KEPADA ALLAH', 'left:1240px;top:420px', 438.3, 441.4, '#d7322b');

// --- 21 /scripture : innama yataqabbalullah
scene(441.4, 456.7, { cut: 'glitch' });
doa(441.4, 456.7, 'QS. AL-MA\'IDAH : 27', 'إِنَّمَا يَتَقَبَّلُ اللَّهُ مِنَ [الْمُتَّقِينَ]', 'Allah hanya menerima amal dari orang-orang yang [bertakwa]', { a0: 441.6, ad: 1.8, am: [443.4], tr0: 444.0, tm: [446.6], fs: 96, chip: 'سُورَةُ الْمَائِدَةِ' });
kin(node('', 'left:160px;top:960px;width:1600px;font:800 36px Inter;color:' + Y + ';text-align:center'), 'maka selalulah bertaubat setiap saat atas segala dosa', 450.0, { iv: .025 });

// --- 22 /blueprint : wudhu menyucikan hadas & dosa
scene(456.7, 481.2, { cut: 'glitch' });
const bpW = node('', 'left:-160px;top:-120px;width:2240px;height:1320px', 'bp'); show(bpW, 456.7, 'fade', 481.2, .3);
label('BLUEPRINT · ANGGOTA WUDHU', 456.8, 'left:140px;top:130px', 481.2);
sv(456.8, 481.2, `<g transform="translate(470 560)"><circle cx="0" cy="-260" r="58" fill="none" stroke="#fff" stroke-width="5" data-d="365"/><path d="M-80 -190 Q0 -210 80 -190 L100 120 L-100 120 Z" fill="none" stroke="#fff" stroke-width="5" data-d="900" data-del=".3"/><path d="M-80 -170 L-170 40 M80 -170 L170 40" stroke="#fff" stroke-width="5" data-d="480" data-del=".6"/><path d="M-60 120 V360 M60 120 V360" stroke="#fff" stroke-width="5" data-d="480" data-del=".8"/></g>` +
  [[470, 300, 'wajah', 2.0, 760, 250], [640, 600, 'kedua tangan', 2.8, 760, 400], [470, 215, 'kepala', 3.6, 760, 150], [530, 920, 'kedua kaki', 4.4, 760, 550]].map(([x, y, s, d, lx, ly]) => `<circle cx="${x}" cy="${y}" r="12" fill="${Y}" data-f="${d}"/>` + LN([[x + 12, y], [lx, ly]], { s: Y, sw: 3, del: d + .1 }) + T(lx + 10, ly + 10, s, { f: d + .3, fs: 30, fw: 800, a: 'start', c: Y })).join(''), 'left:0;top:0', 1920, 1080, .6);
kin(node('', 'left:1060px;top:150px;width:760px;font:900 44px Inter;color:#fff;line-height:1.25'), 'kenapa sebelum sembahyang disuruh [berwudhu]?', 456.9, { iv: .03, marks: [459.6] });
[['suci dari HADAS (zahir)', 461.8, '#7fd6ff'], ['anggota tubuh suci dari DOSA', 466.0, Y], ['barulah sembahyang → diperkenankan Allah', 473.0, '#7fe0a0']].forEach(([s2, t, c], i) => { const n = node(`<div style="width:760px;border:3px solid ${c};border-radius:14px;padding:16px 22px;font:900 34px Inter;color:${c};background:rgba(0,0,0,.25)">${String(i + 1).padStart(2, '0')} · ${s2}</div>`, `left:1060px;top:${430 + i * 130}px`); show(n, t, 'left', 481.2); sfx(t, 'click', .7); });

// --- 23 penutup
scene(481.2, TOTAL, { cut: 'hard' });
mePol('left:200px;top:200px', 481.3, TOTAL, -4, 420);
seg('jangan anggap enteng<br>[taubat]', 481.4, 'left:760px;top:220px;width:1100px', { size: 72, iv: .03, marks: [484.0] });
sub2('left:760px;top:600px', 484.5, TOTAL);

// ================================================================== JADWAL KODE VISUAL
[[0, 9.8, '/kinetic-type'], [9.8, 18.6, '/search'], [18.6, 30.1, '/mosaic'], [30.1, 44.0, '/bar-chart'], [44.0, 71.0, '/world-map'], [71.0, 110.0, '/mindmap'], [110.0, 136.7, '/chart'], [136.7, 159.0, '/balance'],
 [159.0, 187.9, '/layers'], [187.9, 222.2, '/chalkboard'], [222.2, 233.0, '/coin-dial'], [233.0, 254.5, '/vintage-map'], [254.5, 277.0, '/checklist'], [277.0, 302.4, '/split-screen'], [302.4, 312.0, '/tree'], [312.0, 320.6, '/search'],
 [320.6, 329.1, '/citation'], [329.1, 342.0, '/tree'], [342.0, 366.0, '/flowchart'], [366.0, 374.6, '/search'], [374.6, 379.1, '/callout'], [379.1, 408.3, '/spotlight'], [408.3, 441.4, '/isometric'], [441.4, 456.7, '/scripture'],
 [456.7, 481.2, '/blueprint'], [481.2, TOTAL, '/teaser']]
 .reduce((acc, [a, b, c]) => { if (!acc.m[c]) acc.m[c] = String(++acc.n).padStart(2, '0'); codeTag(a, b, acc.m[c], c); return acc; }, { n: 0, m: {} });

// ================================================================== PETA WAKTU: perkiraan → timestamp asli (transkrip bertimestamp)
const WP = [[0, 0], [9.8, 10.38], [12.0, 12.54], [16.0, 16.02], [30.1, 30.86], [41.9, 41.78], [44.0, 43.88], [46.1, 45.74], [54.2, 54.32], [68.0, 67.78], [71.0, 70.98], [78.1, 75.54], [83.2, 83.68], [87.6, 87.48], [91.3, 91.14], [97.0, 98.06], [100.0, 101.38], [102.8, 104.0], [105.6, 106.76], [110.0, 110.72], [121.5, 122.7], [128.2, 130.42], [136.7, 139.14], [141.8, 143.84], [149.6, 151.28], [159.0, 159.34], [176.0, 174.52], [184.2, 181.72], [187.9, 186.06], [197.0, 196.84], [204.5, 204.58], [214.8, 216.62], [222.2, 222.86], [225.0, 226.1], [227.0, 229.66], [229.7, 233.36], [240.0, 245.5], [244.5, 250.53], [248.3, 254.17], [254.5, 260.49], [271.3, 276.91], [277.0, 281.95], [279.2, 283.41], [284.1, 287.95], [293.1, 293.45], [302.4, 304.69], [312.0, 311.37], [329.1, 331.95], [332.0, 333.03], [338.6, 338.99], [342.0, 342.13], [346.4, 345.53], [348.0, 347.15], [352.1, 350.85], [355.1, 352.77], [360.8, 357.31], [366.0, 361.69], [370.9, 366.49], [379.1, 379.15], [382.4, 382.37], [387.0, 386.43], [393.4, 393.05], [395.7, 395.77], [400.6, 400.83], [408.3, 408.91], [415.7, 416.19], [423.4, 423.81], [429.8, 430.55], [438.3, 439.11], [440.0, 440.59], [441.4, 441.73], [449.9, 451.93], [456.7, 457.61], [472.9, 474.21], [477.3, 478.57], [481.2, 482.45], [490.9, 490.9]];
const pw = (t, a, b) => { for (let i = 0; i < WP.length - 1; i++) { const A = WP[i], B = WP[i + 1]; if (t <= B[a] || i === WP.length - 2) return A[b] + (B[b] - A[b]) * clamp((t - A[a]) / (B[a] - A[a])); } return t; };
const _setTime = window.setTime, _getSFX = window.getSFX;
window.setTime = t => { _setTime(pw(t, 1, 0)); const s = Math.floor(t); document.getElementById('tc').textContent = `00:${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`; document.getElementById('prog').style.width = (t / TOTAL * 1920) + 'px'; };
window.getSFX = () => _getSFX().map(e => ({ ...e, t: +pw(e.t, 0, 1).toFixed(3) }));
