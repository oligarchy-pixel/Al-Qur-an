// 15 kode visual + tab pencarian per poin (Ep2 v3). Dimuat setelah app.js; semua elemen bertanggal eksplisit.
const KAL = "font-family:Kalam,cursive";

// ------------------------------------------------------------------ label kode di pojok
function codeTag(t0, t1, no, code) {
  const n = node(`<div style="display:flex;align-items:center;gap:12px;padding:8px 18px;border:2px solid #4f7cff;border-radius:10px;background:rgba(10,14,30,.85)"><span class="mono" style="color:#7fa0ff;font-size:20px">${no}</span><span style="font:800 26px Inter;color:#fff">${code}</span></div>`, 'left:56px;top:84px;z-index:40');
  sfx(t0 + .1, 'beep', .5);
  return item(t0, t1, n, (lt, t, it) => { n.style.opacity = clamp(lt / .25) * clamp((it.t1 - t) / .25); n.style.transform = `translateX(${(1 - eo(lt / .35)) * -30}px)`; });
}
// ------------------------------------------------------------------ svg: [data-d] digambar, [data-f] muncul
function sv(t0, t1, inner, css, w = 1920, h = 1080, dur = 1.0) {
  const n = node(`<svg width="${w}" height="${h}" style="overflow:visible">${inner}</svg>`, css);
  sfx(t0, 'draw', .55);
  return item(t0, t1, n, (lt, t, it) => {
    n.style.opacity = clamp(lt / .2) * clamp((it.t1 - t) / .25);
    n.querySelectorAll('[data-d]').forEach(p => { const L = +p.dataset.d, del = +(p.dataset.del || 0), k = eio((lt - del) / (+(p.dataset.dur || dur))); p.style.strokeDasharray = L; p.style.strokeDashoffset = L * (1 - k); });
    n.querySelectorAll('[data-f]').forEach(p => { const k = eo((lt - +p.dataset.f) / .35); p.style.opacity = k; });
  });
}
const T = (x, y, txt, o = {}) => `<text x="${x}" y="${y}" data-f="${o.f ?? 0}" font-family="${o.ff || 'Inter'}" font-weight="${o.fw || 700}" font-size="${o.fs || 30}" fill="${o.c || '#fff'}" text-anchor="${o.a || 'middle'}" ${o.rtl ? 'direction="rtl"' : ''}>${txt}</text>`;
const BOX = (x, y, w, h, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.r ?? 12}" fill="${o.fill || 'none'}" stroke="${o.s || '#fff'}" stroke-width="${o.sw || 4}" data-d="${2 * (w + h)}" data-del="${o.del || 0}"/>`;
const LN = (pts, o = {}) => { let L = 0; for (let i = 1; i < pts.length; i++) L += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); return `<path d="M${pts.map(p => p.join(' ')).join(' L')}" fill="none" stroke="${o.s || '#fff'}" stroke-width="${o.sw || 4}" ${o.dash ? 'stroke-dasharray="12 10"' : ''} data-d="${Math.ceil(L)}" data-del="${o.del || 0}" ${o.arrow ? 'marker-end="url(#ah)"' : ''}/>`; };
const DEFS = `<defs><marker id="ah" markerWidth="12" markerHeight="12" refX="9" refY="6" orient="auto"><path d="M0 0 L12 6 L0 12Z" fill="#e9f23a"/></marker></defs>`;

// ------------------------------------------------------------------ tab pencarian per poin
function tabSearch(t0, no, q, res, dur = 4.4) {
  const t1 = t0 + dur;
  const n = node(`<div class="bk" style="position:absolute;left:0;top:0;width:1920px;height:1080px;background:rgba(0,0,0,.72)"></div>
  <div class="win" style="position:absolute;left:330px;top:150px;width:1260px;height:720px;background:${IVORY};border-radius:14px;overflow:hidden;box-shadow:0 40px 100px rgba(0,0,0,.8);color:${ESP}">
   <div style="height:56px;background:#e8dfcc;display:flex;align-items:flex-end;padding:0 16px;gap:8px">
     <div style="background:#efe7d6;padding:10px 20px;border-radius:10px 10px 0 0;font:600 17px Inter;color:#8a7a60">Pencarian kitab</div>
     <div class="nt" style="background:${IVORY};padding:10px 20px;border-radius:10px 10px 0 0;font:700 17px Inter">Kehormatan ${no}</div>
     <div style="font:700 30px Inter;color:#8a7a60;padding:0 10px 8px">+</div></div>
   <div style="height:70px;display:flex;align-items:center;padding:0 24px;gap:16px;border-bottom:1px solid #e3d8c2">
     <div style="font:700 20px Inter;color:${GOLD}">◆ maktabah</div>
     <div style="flex:1;height:46px;border:2px solid ${GOLD};border-radius:23px;display:flex;align-items:center;padding:0 22px;font:600 24px Inter"><span class="q"></span><span class="cr" style="display:inline-block;width:2px;height:28px;background:${ESP};margin-left:3px"></span></div>
     <div style="background:${GOLD};color:#fff;font:700 18px Inter;padding:12px 22px;border-radius:22px">CARI</div></div>
   <div style="padding:22px 30px">
     <div class="cnt mono" style="font-size:16px;color:#8a7a60;height:22px"></div>
     ${res.map((r, i) => `<div class="rr" style="margin-top:14px;padding:16px 20px;border:1px solid #e6dcc6;border-radius:10px;background:#fffdf8">
       <div style="display:flex;justify-content:space-between;align-items:center"><span style="font:700 22px Inter">${r[0]}</span><span class="mono" style="font-size:15px;color:${GOLD};border:1px solid ${GOLD};padding:3px 10px;border-radius:12px">${r[1]}</span></div>
       <div class="ar" style="font-size:30px;margin-top:6px;text-align:right">${r[2]}</div></div>`).join('')}
   </div></div>
  <div class="curs" style="position:absolute;width:28px;height:28px"><svg width="28" height="28"><path d="M2 2 L2 24 L8 18 L13 27 L17 25 L12 16 L21 16Z" fill="#fff" stroke="#000" stroke-width="2"/></svg></div>`, 'left:0;top:0;width:1920px;height:1080px;z-index:30');
  const qq = n.querySelector('.q'), rows = n.querySelectorAll('.rr'), win = n.querySelector('.win'), cur = n.querySelector('.curs'), nt = n.querySelector('.nt'), cnt = n.querySelector('.cnt'), cr = n.querySelector('.cr');
  const tType = t0 + .55, iv = Math.min(.045, 1.3 / q.length), tRes = tType + q.length * iv + .25, tClick = tRes + 1.0;
  sfx(t0 + .25, 'click', .8); sfx(tClick, 'click', .9); for (let i = 0; i < q.length; i += 2) sfx(tType + i * iv, 'tick', .6); sfx(tRes, 'beep', .5);
  item(t0, t1, n, (lt, t) => {
    const op = clamp(lt / .2) * clamp((t1 - t) / .35); n.style.opacity = op;
    const k = eo(lt / .4); win.style.transform = `translateY(${(1 - k) * 50}px) scale(${.95 + .05 * k - .06 * eio((t - t1 + .45) / .45)})`;
    nt.style.opacity = t > t0 + .3 ? 1 : 0; nt.style.transform = t < t0 + .5 ? `translateY(${(1 - clamp((t - t0 - .3) / .2)) * 20}px)` : '';
    qq.textContent = q.slice(0, clamp(Math.floor((t - tType) / iv), 0, q.length)); cr.style.opacity = Math.floor(t * 3) % 2 ? 1 : .2;
    cnt.textContent = t > tRes ? `${res.length} sumber ditemukan` : (t > tType ? 'mengetik…' : '');
    rows.forEach((r, i) => { const v = clamp((t - tRes - i * .15) / .25); r.style.opacity = v; r.style.transform = `translateY(${(1 - v) * 16}px)`; const sel = t > tClick && i === 0; r.style.background = sel ? '#fff4d1' : '#fffdf8'; r.style.borderColor = sel ? GOLD : '#e6dcc6'; });
    const P = [[1430, 170, t0], [1430, 170, t0 + .25], [960, 240, tType], [960, 240, tRes], [900, 370, tClick], [900, 370, t1]];
    let cx = P[0][0], cy = P[0][1];
    for (let j = 0; j < P.length - 1; j++) if (t >= P[j][2] && t <= P[j + 1][2]) { const u = eio((t - P[j][2]) / Math.max(.01, P[j + 1][2] - P[j][2])); cx = P[j][0] + (P[j + 1][0] - P[j][0]) * u; cy = P[j][1] + (P[j + 1][1] - P[j][1]) * u; }
    cur.style.left = cx + 'px'; cur.style.top = cy + 'px'; cur.style.transform = [t0 + .25, tClick].some(c => t >= c && t < c + .15) ? 'scale(.8)' : '';
  });
  CUTS.push({ t: t1, kind: 'glitch' }); sfx(t1, 'whoosh', .5);
}
const Q = 'Muqaddimah Tafsir al-Qurthubi', TB = 'At-Tibyan · Imam an-Nawawi', HQ = 'حُرْمَةُ الْقُرْآنِ';
tabSearch(31.3, '02', 'menahan bacaan ketika menguap', [[Q, 'COCOK', 'أَنْ يُمْسِكَ عَنِ الْقِرَاءَةِ إِذَا تَثَاءَبَ'], [TB, 'ATSAR MUJAHID', 'يُمْسِكُ عَنِ الْقِرَاءَةِ'], ['Shahih al-Bukhari · Muslim', 'HADIS', 'التَّثَاؤُبُ مِنَ الشَّيْطَانِ']]);
tabSearch(49.9, '03', "ta'awwudz sebelum membaca Al-Qur'an", [["QS. An-Nahl : 98", 'AYAT', 'فَإِذَا قَرَأْتَ الْقُرْآنَ فَاسْتَعِذْ بِاللَّهِ'], [Q, 'COCOK', 'أَنْ يَسْتَعِيذَ بِاللَّهِ مِنَ الشَّيْطَانِ'], ['Sunan Abi Dawud · 775', 'DIPERBINCANGKAN', 'أَعُوذُ بِاللَّهِ السَّمِيعِ الْعَلِيمِ']]);
tabSearch(91.7, '04', 'tidak memotong bacaan untuk berbicara', [[Q, 'COCOK', 'أَلَّا يَقْطَعَ الْقِرَاءَةَ لِمُكَلِّمٍ آدَمِيٍّ'], ["Shahih al-Bukhari · atsar Ibnu 'Umar", 'ATSAR', 'لَمْ يَتَكَلَّمْ حَتَّى يَفْرُغَ مِنْهُ'], [TB, 'TERKAIT', HQ]]);
tabSearch(139.7, '05', "membaca Al-Qur'an dengan tartil", [['QS. Al-Muzzammil : 4', 'AYAT', 'وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا'], [Q, 'COCOK', 'أَنْ يَقْرَأَهُ عَلَى تُؤَدَةٍ وَتَرْتِيلٍ'], [TB, 'TERKAIT', HQ]]);
tabSearch(194.3, '06', 'shadaqallahul azhim setelah membaca', [["QS. Ali 'Imran : 95", 'AYAT', 'قُلْ صَدَقَ اللَّهُ'], [Q, 'DISEBUT', 'صَدَقَ اللَّهُ الْعَظِيمُ'], ['Catatan penelusuran', 'BUKAN LAFAZ HADIS', HQ]]);
tabSearch(222.6, '07', 'membaca sesuai urutan mushaf', [[Q, 'COCOK', 'أَنْ يَقْرَأَ الْقُرْآنَ عَلَى التَّرْتِيبِ'], ["Mushaf 'Utsmani · tartib surah", 'TERKAIT', 'الْفَاتِحَةُ · الْبَقَرَةُ · آلِ عِمْرَانَ'], [TB, 'TERKAIT', HQ]]);
tabSearch(263.6, '08', 'meletakkan mushaf di tempat tinggi', [[Q, 'COCOK', 'أَنْ يَضَعَ الْمُصْحَفَ عَلَى مَكَانٍ رَفِيعٍ'], [TB, 'TERKAIT', HQ], ['Rehal · alas mushaf', 'PRAKTIK', 'كُرْسِيُّ الْمُصْحَفِ']]);
tabSearch(316.6, '09', "menghapus tulisan Al-Qur'an dengan air liur", [[Q, 'DIBAHAS', HQ], [TB, 'TERKAIT', HQ], ['Catatan narator', 'PRAKTIK', 'الْمَاءُ الطَّاهِرُ']]);
tabSearch(343.4, '10', 'mushaf rusak dibakar atau dikubur', [["Shahih al-Bukhari · 'Utsman bin 'Affan", 'RIWAYAT', 'أَمَرَ بِمَا سِوَاهُ أَنْ يُحْرَقَ'], [Q, 'DIBAHAS', HQ], [TB, 'TERKAIT', HQ]]);
tabSearch(368.9, '11', 'membaca dengan melihat mushaf', [[Q, 'COCOK', 'أَنْ يُعْطِيَ عَيْنَيْهِ حَظَّهُمَا'], ["Syu'ab al-Iman · al-Baihaqi", 'DIRUJUK', 'أَفْضَلُ عِبَادَةِ أُمَّتِي'], [TB, 'TERKAIT', HQ]]);
tabSearch(429.5, '12', "menafsirkan Al-Qur'an dengan pendapat sendiri", [['Sunan at-Tirmidzi · 2951', 'DIPERSELISIHKAN', 'مَنْ قَالَ فِي الْقُرْآنِ بِرَأْيِهِ'], [Q, 'DIBAHAS', 'بَابُ مَا جَاءَ فِي الْوَعِيدِ'], ['Sunan at-Tirmidzi · 2950', 'DIPERSELISIHKAN', 'بِغَيْرِ عِلْمٍ']]);
tabSearch(479.9, '13', "melagukan Al-Qur'an berlebihan", [[Q, 'DIBAHAS', HQ], ['Sunan Abi Dawud · 1468', 'HADIS', 'زَيِّنُوا الْقُرْآنَ بِأَصْوَاتِكُمْ'], [TB, 'TERKAIT', HQ]]);
tabSearch(495.1, '14', 'memperbagus tulisan mushaf', [[Q, 'DIBAHAS', HQ], [TB, 'TERKAIT', HQ], ['Seni khat mushaf', 'PRAKTIK', 'الْخَطُّ الْعَرَبِيُّ']]);
tabSearch(509.7, '15', "membaca Al-Qur'an di pasar", [[Q, 'DIBAHAS', HQ], ['Shahih Muslim · atsar Salman', 'ATSAR', 'فَإِنَّهَا مَعْرَكَةُ الشَّيْطَانِ'], [TB, 'TERKAIT', HQ]]);
tabSearch(528.8, '16', 'setelah khatam mulai lagi Al-Fatihah', [['Sunan at-Tirmidzi · 2948', 'GHARIB', 'الْحَالُّ الْمُرْتَحِلُ'], [Q, 'DIBAHAS', HQ], [TB, 'TERKAIT', 'الْخَتْمُ']]);

// ================================================================== 15 KODE VISUAL
// 01 /blueprint — arah membaca
codeTag(18.3, 25.7, '01', '/blueprint');
// 02 /flowchart — menguap
codeTag(42.3, 49.9, '02', '/flowchart');
sv(45.6, 49.9, DEFS + BOX(140, 470, 300, 110, { s: Y }) + T(290, 535, 'membaca', { f: .1 }) + LN([[440, 525], [560, 525]], { arrow: 1, s: Y, del: .3 }) +
  `<path d="M700 445 L800 525 L700 605 L600 525Z" fill="none" stroke="#fff" stroke-width="4" data-d="520" data-del=".5"/>` + T(700, 535, 'menguap?', { f: .7, fs: 26 }) +
  LN([[800, 525], [960, 525]], { arrow: 1, s: '#d7322b', del: 1.0 }) + T(880, 505, 'ya', { f: 1.1, fs: 24, c: '#ff8a80' }) + BOX(980, 470, 300, 110, { s: '#d7322b', del: 1.1 }) + T(1130, 535, 'berhenti', { f: 1.3 }) +
  LN([[1280, 525], [1420, 525]], { arrow: 1, s: Y, del: 1.6 }) + BOX(1440, 470, 330, 110, { s: '#2fae5b', del: 1.7 }) + T(1605, 535, 'lanjut membaca', { f: 1.9 }) +
  LN([[700, 605], [700, 720], [1605, 720], [1605, 590]], { arrow: 1, s: '#2fae5b', del: 2.2 }) + T(760, 700, 'tidak', { f: 2.3, fs: 24, c: '#7fe0a0' }), 'left:0;top:0', 1920, 1080, .6);
// 03 /decision-matrix — awal vs pertengahan surah
codeTag(70.2, 91.7, '03', '/decision-matrix');
(() => {
  const x0 = 140, y0 = 330, cw = [520, 560, 560], rh = 120, rows = [["", 'AWAL SURAH', 'PERTENGAHAN SURAH'], ["ta'awwudz", '✓ dibaca', '✓ dibaca'], ['basmalah', '✓ dibaca', 'boleh / tidak'], ['hukum', 'ta\'awwudz + basmalah', 'terserah']];
  let g = ''; let yy = y0;
  rows.forEach((r, i) => { let xx = x0; r.forEach((c, j) => { const hd = i === 0 || j === 0; g += BOX(xx, yy, cw[j], rh, { r: 0, s: '#555', sw: 2, del: .1 * i }); const col = c.startsWith('✓') ? '#7fe0a0' : (c === 'terserah' || c.startsWith('boleh')) ? Y : (hd ? '#aaa' : '#fff'); g += T(xx + cw[j] / 2, yy + rh / 2 + 12, c, { f: .3 + .5 * i + .15 * j, fs: hd ? 28 : 34, c: col, ff: hd ? 'DejaVu Sans Mono' : 'Inter' }); xx += cw[j]; }); yy += rh; });
  sv(74.2, 91.7, g, 'left:0;top:0', 1920, 1080, .5);
  chip('tidak mengurangi kehormatan Al-Qur\'an', 87.6, 'left:140px;top:880px', 91.7);
})();
// 04 /handwritten — tanya kabar dulu
codeTag(118.0, 124.7, '04', '/handwritten');
(() => {
  const n = node(`<div style="width:900px;height:250px;background:#fbf6e6;background-image:repeating-linear-gradient(transparent 0 46px,#c9d6ee 46px 48px);border-left:4px solid #e6a0a0;padding:14px 30px;transform:rotate(-1.5deg);box-shadow:0 20px 50px rgba(0,0,0,.5)">
   ${['1. tanya kabar dulu ✓', '2. selesai bercakap', '3. baru membaca Al-Qur\'an'].map((s, i) => `<div class="hw" data-i="${i}" style="${KAL};font-size:40px;color:#1f3a8a;height:48px;white-space:nowrap;overflow:hidden">${s}</div>`).join('')}</div>`, 'left:140px;top:150px');
  [118.3, 119.9, 121.5].forEach(t => sfx(t, 'draw', .6));
  item(118.1, 124.7, n, (lt, t, it) => { n.style.opacity = clamp(lt / .25) * clamp((it.t1 - t) / .25); n.querySelectorAll('.hw').forEach(e => { const k = clamp((t - 118.3 - 1.6 * +e.dataset.i) / 1.3); e.style.width = (k * 840) + 'px'; }); });
})();
// 05 /infographic — tartil
codeTag(151.4, 162.4, '05', '/infographic');
(() => {
  const it = [['01', 'huruf', 'sebutan huruf', 'ب'], ['02', 'tajwid', 'hukum bacaan', 'مٓ'], ['03', 'suara', 'memperindah', '♪'], ['04', 'paham', 'tadabbur', '✦']];
  let g = LN([[220, 760], [1700, 760]], { s: '#444', sw: 6 });
  it.forEach((x, i) => { const cx = 330 + i * 420, d = .2 + i * .55; g += `<circle cx="${cx}" cy="760" r="62" fill="${i === 3 ? Y : '#1a1a1a'}" stroke="${i === 3 ? Y : '#ebe6d6'}" stroke-width="4" data-d="390" data-del="${d}"/>`;
    g += T(cx, 782, x[3], { f: d + .3, fs: x[3].length > 1 ? 44 : 54, c: i === 3 ? '#111' : '#fff', ff: 'Amiri' }) + T(cx, 676, x[0], { f: d + .2, fs: 26, c: '#888', ff: 'DejaVu Sans Mono' }) +
      T(cx, 868, x[1], { f: d + .35, fs: 38, c: i === 3 ? Y : '#fff', fw: 800 }) + T(cx, 908, x[2], { f: d + .45, fs: 24, c: '#aaa', fw: 500 }); });
  sv(151.4, 162.4, g, 'left:0;top:0', 1920, 1080, .5);
})();
// 06 /diagram — terdengar oleh telinga sendiri
codeTag(162.4, 194.3, '06', '/diagram');
sv(165.5, 194.3, DEFS + LN([[1180, 300], [1060, 230]], { s: Y, del: .2 }) + T(1050, 220, 'telinga', { f: .4, fs: 26, a: 'end', c: Y }) + LN([[1300, 420], [1560, 420]], { s: Y, del: .5 }) + T(1570, 428, 'mulut membaca', { f: .7, fs: 26, a: 'start', c: Y }) +
  LN([[1420, 560], [1560, 620]], { s: Y, del: .8 }) + T(1570, 628, 'mushaf', { f: 1.0, fs: 26, a: 'start', c: Y }), 'left:0;top:0');
// 07 /canvas — shadaqallahul azhim
codeTag(208.0, 222.6, '07', '/canvas');
(() => {
  const notes = [['صَدَقَ اللَّهُ الْعَظِيمُ', 'Maha benar Allah Yang Maha Agung', '#f7e078', -3], ['وَبَلَّغَ الرَّسُولُ الْكَرِيمُ', 'Rasul-Nya yang mulia telah menyampaikan', '#bfe8c8', 2], ['مِنَ الشَّاهِدِينَ', 'dan aku menyaksikannya', '#bcd7f5', -2], ['', 'tidak dibaca pun tidak apa · bukan lafaz hadis', '#f6c3b8', 3]];
  notes.forEach((x, i) => { const n = node(`<div style="width:370px;height:200px;background:${x[2]};padding:18px;box-shadow:0 14px 30px rgba(0,0,0,.5);transform:rotate(${x[3]}deg);color:#222">${x[0] ? `<div class="ar" style="font-size:34px;text-align:center">${x[0]}</div>` : ''}<div style="${KAL};font-size:${x[0] ? 26 : 32}px;text-align:center;margin-top:8px;line-height:1.25">${x[1]}</div></div>`, `left:${140 + i * 410}px;top:790px`);
    show(n, 211.2 + i * 1.3, 'drop', 222.6); sfx(211.2 + i * 1.3, 'paper', .7); });
})();
// 08 /roadmap — menurut tertib
codeTag(229.0, 263.6, '08', '/roadmap');
(() => {
  const road = [[180, 640], [480, 520], [800, 640], [1120, 520], [1440, 640], [1740, 520]];
  let g = `<path d="M180 640 C330 640 330 520 480 520 S650 640 800 640 S970 520 1120 520 S1290 640 1440 640 S1590 520 1740 520" fill="none" stroke="#444" stroke-width="22" stroke-linecap="round" data-d="1900" data-dur="2.4"/>` +
    `<path d="M180 640 C330 640 330 520 480 520 S650 640 800 640 S970 520 1120 520 S1290 640 1440 640 S1590 520 1740 520" fill="none" stroke="${Y}" stroke-width="3" stroke-dasharray="16 14" data-d="1900" data-dur="2.4"/>`;
  const ms = [['1', 'Al-Fatihah'], ['2', 'Al-Baqarah'], ['3', "Ali 'Imran"], ['…', ''], ['113', 'Al-Falaq'], ['114', 'An-Nas']];
  road.forEach((p, i) => { const d = .3 + i * .4; g += `<circle cx="${p[0]}" cy="${p[1]}" r="34" fill="${i < 3 ? Y : '#1a1a1a'}" stroke="${Y}" stroke-width="4" data-d="214" data-del="${d}"/>` + T(p[0], p[1] + 10, ms[i][0], { f: d + .2, fs: 26, c: i < 3 ? '#111' : Y, fw: 800 }) + T(p[0], p[1] + (i % 2 ? -56 : 80), ms[i][1], { f: d + .3, fs: 28 }); });
  sv(231.7, 252.6, g, 'left:0;top:0', 1920, 1080, .5);
  kin(node('', 'left:240px;top:720px;width:1440px;font:600 32px Inter;color:#aaa;text-align:center'), 'membaca surah terpisah pun tidak apa-apa', 247.0, { iv: .03, t1: 252.6 });
})();
// 09 /exploded-view — mushaf, rehal, tempat tinggi
codeTag(263.6, 279.9, '09', '/exploded-view');
(() => {
  const bpx = node('', 'left:1040px;top:200px;width:760px;height:640px', 'bp'); show(bpx, 264.0, 'fade', 279.9);
  const g = `<rect x="250" y="70" width="260" height="70" rx="6" fill="none" stroke="#fff" stroke-width="4" data-d="660"/><path d="M380 70 V140" stroke="#fff" stroke-width="3" data-d="70"/>` + T(560, 112, 'mushaf', { f: .3, a: 'start', fs: 26, c: Y }) +
    LN([[380, 150], [380, 230]], { dash: 1, s: '#cfe0ff', del: .4, sw: 3 }) +
    `<path d="M200 330 L380 240 L560 330 M200 330 L380 400 L560 330" fill="none" stroke="#fff" stroke-width="4" data-d="900" data-del=".6"/>` + T(600, 320, 'rehal (alas)', { f: .9, a: 'start', fs: 26, c: Y }) +
    LN([[380, 410], [380, 470]], { dash: 1, s: '#cfe0ff', del: 1.0, sw: 3 }) + `<rect x="170" y="480" width="420" height="40" fill="none" stroke="#fff" stroke-width="4" data-d="920" data-del="1.1"/>` + T(380, 508, 'tempat tinggi & suci', { f: 1.3, fs: 24 }) +
    `<path d="M120 600 H640" stroke="#d7322b" stroke-width="4" stroke-dasharray="10 8" data-d="520" data-del="1.5"/>` + T(380, 590, '✕ lantai', { f: 1.7, fs: 24, c: '#ff8a80' });
  sv(265.0, 279.9, g, 'left:1040px;top:200px', 760, 640, .7);
})();
// 10 /tree — yang wajib diambil
codeTag(279.9, 316.6, '10', '/tree');
sv(297.2, 316.6, BOX(760, 560, 400, 80, { s: Y }) + T(960, 612, 'wajib diambil', { f: .1, c: Y, fw: 800 }) +
  LN([[960, 640], [960, 690]], { del: .3 }) + LN([[400, 690], [1520, 690]], { del: .4 }) + [400, 960, 1520].map((x, i) => LN([[x, 690], [x, 740]], { del: .6 + i * .2 }) + BOX(x - 220, 740, 440, 90, { del: .7 + i * .2 }) + T(x, 798, ['nama-nama Allah', "ayat-ayat Al-Qur'an", 'nama nabi & rasul'][i], { f: .9 + i * .2 })).join(''), 'left:0;top:0', 1920, 1080, .4);
// 11 /iceberg — hak mata
codeTag(372.4, 415.5, '11', '/iceberg');
sv(395.0, 415.5, `<path d="M120 640 H1180" stroke="#4aa3ff" stroke-width="4" data-d="1060"/>` + `<path d="M520 640 L620 470 L700 520 L780 640Z" fill="rgba(255,255,255,.08)" stroke="#fff" stroke-width="4" data-d="560" data-del=".2"/>` +
  T(650, 450, 'membaca sambil memandang mushaf', { f: .5, fs: 28 }) + `<path d="M520 640 L380 800 L560 860 L840 830 L900 700 L780 640" fill="rgba(74,163,255,.1)" stroke="#7fd6ff" stroke-width="4" data-d="1100" data-del=".8"/>` +
  T(150, 620, 'yang terlihat', { f: .6, fs: 22, a: 'start', c: '#888', ff: 'DejaVu Sans Mono' }) + T(150, 690, 'yang tersembunyi', { f: 1.0, fs: 22, a: 'start', c: '#7fd6ff', ff: 'DejaVu Sans Mono' }) +
  T(640, 730, '01 · mensyukuri nikmat mata', { f: 3.1, fs: 30, c: '#fff' }) + T(640, 790, '02 · menebus kesalahan mata', { f: 5.1, fs: 30, c: Y }), 'left:0;top:0', 1920, 1080, .8);
// 12 /layers — rantai penafsir
codeTag(447.8, 459.5, '12', '/layers');
(() => {
  const L = [['Rasulullah ﷺ', Y, '#111'], ['para sahabat', '#ebe6d6', '#111'], ['ulama terdahulu', '#7d8a3a', '#fff'], ['kita: merujuk tafsir mereka', '#222', '#fff']];
  L.forEach((x, i) => { const n = node(`<div style="width:900px;height:84px;background:${x[1]};color:${x[2]};font:800 34px Inter;display:flex;align-items:center;padding-left:40px;transform:skewX(-14deg);box-shadow:0 12px 30px rgba(0,0,0,.5)"><span style="transform:skewX(14deg)">${x[0]}</span></div>`, `left:${700 - i * 30}px;top:${400 + i * 92}px`);
    show(n, 448.3 + i * 1.2, 'drop', 459.5); sfx(448.3 + i * 1.2, 'click', .7); });
})();
// 13 /timeline — Imam al-Qurthubi
codeTag(472.8, 479.9, '13', '/timeline');
sv(473.6, 479.9, LN([[200, 950], [1720, 950]], { s: '#666', sw: 4 }) + [[260, 'Cordoba', 'lahir · awal abad ke-7 H'], [700, 'belajar', 'fikih, qira\'at, tafsir'], [1140, 'Mesir', 'menetap di Munyah Bani Khushaib'], [1600, '671 H', 'wafat · 9 Syawal']].map((x, i) =>
  `<circle cx="${x[0]}" cy="950" r="14" fill="${i === 3 ? Y : '#ebe6d6'}" data-f="${.3 + i * .5}"/>` + T(x[0], 920, x[1], { f: .35 + i * .5, fs: 28, c: i === 3 ? Y : '#fff', fw: 800 }) + T(x[0], 998, x[2], { f: .45 + i * .5, fs: 20, c: '#aaa', fw: 500 })).join(''), 'left:0;top:0', 1920, 1080, 1.0);
// 14 /sketchnotes — tulisan yang bagus
codeTag(497.6, 509.7, '14', '/sketchnotes');
sv(501.5, 509.7, `<path d="M330 380 l10 -30 l10 30 l30 0 l-24 18 l10 30 l-26 -18 l-26 18 l10 -30 l-24 -18Z" fill="none" stroke="${Y}" stroke-width="3" data-d="300"/>` +
  `<path d="M1560 390 q40 -60 80 0 t80 0" fill="none" stroke="${Y}" stroke-width="3" data-d="200" data-del=".3"/>` + T(1640, 460, 'rapi!', { f: .5, ff: 'Kalam', fs: 40, c: Y }) +
  `<path d="M420 820 Q960 870 1500 820" fill="none" stroke="${Y}" stroke-width="5" data-d="1100" data-del=".6"/>` + T(270, 860, 'pakai pena terbaik ✎', { f: 1.0, ff: 'Kalam', fs: 34, c: '#fff', a: 'start' }) +
  `<path d="M1580 700 q-60 40 -120 10" fill="none" stroke="#fff" stroke-width="3" data-d="160" data-del="1.2" marker-end="url(#ah)"/>` + DEFS + T(1600, 690, 'indah!', { f: 1.4, ff: 'Kalam', fs: 36, a: 'start' }), 'left:0;top:0', 1920, 1080, .7);
// 15 /cycle — khatam lalu mulai lagi
codeTag(528.8, 546.4, '15', '/cycle');
(() => {
  const cx = 960, cy = 640, R = 230, st = ['khatam', 'Al-Fatihah', '5 ayat Al-Baqarah', 'lanjut membaca'];
  let g = `<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="#333" stroke-width="10" data-d="1446"/>` + `<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="${Y}" stroke-width="4" stroke-dasharray="20 16" data-d="1446" data-del=".2" data-dur="2"/>`;
  st.forEach((s, i) => { const a = -Math.PI / 2 + i * Math.PI / 2, x = cx + Math.cos(a) * R, y = cy + Math.sin(a) * R, d = .4 + i * .9; g += `<circle cx="${x}" cy="${y}" r="20" fill="${Y}" data-f="${d}"/>` + T(x + (i === 1 ? 50 : i === 3 ? -50 : 0), y + (i === 0 ? -40 : i === 2 ? 60 : 10), s, { f: d + .1, fs: 32, a: i === 1 ? 'start' : i === 3 ? 'end' : 'middle', fw: 800 }); });
  g += T(cx, cy + 12, 'الْحَالُّ الْمُرْتَحِلُ', { f: 3.4, ff: 'Amiri', fs: 46, c: Y, fw: 400 });
  const n = sv(539.4, 546.4, g, 'left:0;top:0', 1920, 1080, .8);
  const s0 = item;  // rotasi halus seluruh lingkaran
})();
