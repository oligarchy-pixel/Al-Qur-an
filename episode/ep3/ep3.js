// ================================================================== ADEGAN EPISODE 03 · Turunnya Al-Qur'an
// foto penyampai (foto asli pengguna, bingkai jauh/utuh)
function mePol(css, t0, t1, rot = -4, w = 360) {
  const n = node(`<div style="width:${w}px;padding:14px 14px 54px;background:#f4f1ea;box-shadow:0 24px 60px rgba(0,0,0,.7);position:relative">
  <div style="position:absolute;left:50%;top:-30px;width:2px;height:34px;background:#999"></div><div style="position:absolute;left:calc(50% - 9px);top:-40px;width:18px;height:18px;border-radius:50%;background:#c33"></div>
  <img src="user_photo.jpg" style="display:block;width:${w - 28}px;height:${w - 28}px;object-fit:cover">
  <div style="position:absolute;left:14px;right:14px;bottom:16px;font:600 12px 'DejaVu Sans Mono';color:#444;letter-spacing:.03em;text-align:center;white-space:nowrap">FILE N° 03 · PENYAMPAI · @alurziyadahku</div></div>`, css);
  n.dataset.rot = rot; sfx(t0, 'paper', .8);
  return item(t0, t1, n, (lt, t, it) => { const k = eo(lt / .55), sw = Math.sin(lt * 2.2) * 2.4 * Math.exp(-lt * .6); n.style.opacity = clamp(lt / .2) * clamp((it.t1 - t) / .25); n.style.transform = `translateY(${(1 - k) * -140}px) rotate(${rot + sw}deg)`; });
}
ILL.madinah = `<svg viewBox="0 0 300 220"><rect width="300" height="220" fill="#e6eadb"/><path d="M0 190 H300" stroke="#5b6b3a" stroke-width="3"/><rect x="95" y="120" width="110" height="70" fill="#d9d2bc" stroke="#5b6b3a" stroke-width="3"/><path d="M110 120 Q150 50 190 120Z" fill="#2f7d4a" stroke="#1f5a33" stroke-width="3"/><path d="M150 52 V36" stroke="#c9a24a" stroke-width="3"/><rect x="40" y="60" width="16" height="130" fill="#d9d2bc" stroke="#5b6b3a" stroke-width="3"/><rect x="244" y="60" width="16" height="130" fill="#d9d2bc" stroke="#5b6b3a" stroke-width="3"/><path d="M40 60 L48 40 L56 60 M244 60 L252 40 L260 60" fill="#2f7d4a" stroke="#1f5a33" stroke-width="2"/></svg>`;

// --- 0 pembuka: hamdalah + dosier penyampai (foto pengguna)
scene(0, 6.4, { cut: 'none' });
arw(node('الْحَمْدُ لِلَّهِ', 'left:140px;top:140px;font-size:84px;color:#fff;text-align:left;width:700px'), .1, .9);
label('FILE 03 · LANJUTAN KAJIAN', 1.0, 'left:140px;top:300px');
seg('Turunnya<br>[Al-Qur\'an]', 1.3, 'left:140px;top:350px;width:900px', { size: 110, iv: .05, marks: [3.4] });
kin(node('', 'left:140px;top:640px;width:860px;font:600 34px Inter;color:#ccc'), 'melanjutkan cerita kita berkenaan tentang Al-Qur\'an', 3.6, { iv: .03 });
mePol('left:1300px;top:150px', .6, 6.4, 4, 400);
const meTag = node(`<div style="width:430px;background:#141414;border:2px solid #e9f23a;padding:18px 22px">
  <div class="mono" style="font-size:16px;color:${Y}">● PENYAMPAI KAJIAN</div><div style="font:800 34px Inter;margin-top:6px">@alurziyadahku</div>
  <div class="mono" style="font-size:15px;color:#eee;margin-top:8px">TOPIK: <span class="ar" style="font-size:24px;color:#ddd">نُزُولُ الْقُرْآنِ</span></div></div>`, 'left:1270px;top:720px');
show(meTag, 2.2, 'left', 6.4); sfx(2.2, 'beep', .5);

// --- 1 Allah berfirman
scene(6.4, 10.3, { cut: 'glitch' });
seg('Allah Subhanahu wa Ta\'ala<br>berfirman di dalam', 6.5, 'left:140px;top:300px;width:1640px', { size: 92, iv: .035 });
seg('[Al-Qur\'an Al-Karim]', 8.6, 'left:140px;top:560px;width:1640px', { size: 92, iv: .04, marks: [9.6] });

// --- 2 ta'awwudz + basmalah
scene(10.3, 14.6, { cut: 'glitch' });
arw(node('أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ', 'left:0;right:0;top:330px;text-align:center;font-size:92px;color:#fff'), 10.35, 2.2);
arw(node('بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ', 'left:0;right:0;top:560px;text-align:center;font-size:92px;color:' + Y), 12.85, 1.4);

// --- 3 QS Al-Qadr : 1
scene(14.6, 22.8, { cut: 'glitch' });
label('AYAT RUJUKAN', 14.7, 'left:160px;top:150px');
paper(14.65, 'left:160px;top:200px;width:1600px;height:640px');
arw(node('إِنَّا أَنْزَلْنَاهُ فِي [لَيْلَةِ الْقَدْرِ]', 'left:220px;width:1480px;top:270px;text-align:center;font-size:120px;color:#151515'), 14.7, 2.0, { marks: [16.2] });
kin(node('', 'left:260px;top:500px;width:1400px;font:700 46px Inter;color:#222;text-align:center'), 'Sesungguhnya Kami menurunkannya pada [malam yang mulia]', 16.9, { iv: .03, marks: [19.0] });
kin(node('', 'left:260px;top:600px;width:1400px;font:600 36px Inter;color:#555;text-align:center'), 'malam yang agung · لَيْلَةُ الْقَدْرِ', 19.6, { iv: .03 });
chip('QS. AL-QADR : 1', 15.8, 'left:1460px;top:760px', 22.8, '#7a5a12');
punch(16.2, 17.6, 760, 340, 1.55);

// --- 4 pencarian atsar Ibnu 'Abbas
scene(22.8, 28.6, { cut: 'glitch', light: 1 });
searchFind(22.8, 28.6, {
  q: 'أنزل القرآن جملة واحدة', count: 4, pick: 0, shelfPick: 0, times: { type: .45, scan: 1.5, res: 2.2, click: 3.0, det: 3.3 },
  shelf: [['Al-Mustadrak · al-Hakim', 'المستدرك'], ["As-Sunan al-Kubra · an-Nasa'i", 'السنن الكبرى'], ['Tafsir Ibnu Katsir', 'ابن كثير'], ['Al-Itqan · as-Suyuthi', 'الإتقان']],
  results: [
    { title: "Al-Mustadrak · atsar Ibnu 'Abbas", tag: 'SHAHIH MENURUT AL-HAKIM', ar: 'أُنْزِلَ الْقُرْآنُ جُمْلَةً وَاحِدَةً إِلَى سَمَاءِ الدُّنْيَا لَيْلَةَ الْقَدْرِ' },
    { title: "As-Sunan al-Kubra · an-Nasa'i", tag: 'RIWAYAT', ar: 'فَوُضِعَ فِي بَيْتِ الْعِزَّةِ مِنَ السَّمَاءِ الدُّنْيَا' },
    { title: 'Tafsir Ibnu Katsir · QS. Al-Qadr', tag: 'TAFSIR', ar: 'مِنَ اللَّوْحِ الْمَحْفُوظِ إِلَى بَيْتِ الْعِزَّةِ' },
    { title: "Al-Itqan fi 'Ulumil Qur'an", tag: 'PEMBAHASAN', ar: 'كَيْفِيَّةُ إِنْزَالِهِ' }],
  det: { title: "'Abdullah bin 'Abbas", ar: 'عَبْدُ اللَّهِ بْنُ عَبَّاسٍ', rows: [['GELAR', "Turjumanul Qur'an · pemuka mufassirin"], ['WAFAT', "Tha'if · 68 H"], ['DIRIWAYATKAN', 'al-Hakim, an-Nasa\'i, al-Baihaqi']], quote: 'أُنْزِلَ الْقُرْآنُ جُمْلَةً وَاحِدَةً' }
});

// --- 5 /diagram : jalur turunnya Al-Qur'an
scene(28.6, 50.0, { cut: 'glitch' });
codeTag(28.6, 50.0, '01', '/diagram');
const bp3 = node('', 'left:0;top:0;width:1920px;height:1080px', 'bp'); show(bp3, 28.6, 'fade', 50.0, .3);
label('JALUR TURUNNYA AL-QUR\'AN', 28.8, 'left:120px;top:150px;color:#cfe0ff');
sv(29.0, 50.0, DEFS +
  BOX(160, 420, 440, 150, { s: '#fff' }) + T(380, 490, 'اللَّوْحُ الْمَحْفُوظُ', { f: .3, ff: 'Amiri', fs: 52, fw: 400 }) + T(380, 545, 'Lauh Mahfuzh', { f: .6, fs: 24, c: '#cfe0ff', ff: 'DejaVu Sans Mono' }) +
  LN([[600, 495], [740, 495]], { arrow: 1, s: Y, sw: 5, del: 4.2 }) + T(670, 450, 'جُمْلَةً وَاحِدَةً', { f: 4.5, ff: 'Amiri', fs: 38, c: Y, fw: 400 }) + T(670, 560, 'sekaligus', { f: 4.7, fs: 24, c: Y }) +
  BOX(760, 420, 440, 150, { s: Y, del: 5.0 }) + T(980, 490, 'بَيْتُ الْعِزَّةِ', { f: 5.3, ff: 'Amiri', fs: 52, fw: 400 }) + T(980, 545, 'langit pertama', { f: 6.2, fs: 24, c: '#cfe0ff', ff: 'DejaVu Sans Mono' }) +
  LN([[1200, 495], [1340, 495]], { arrow: 1, s: '#2fae5b', sw: 5, dash: 1, del: 9.6 }) + T(1270, 450, 'مُنَجَّمًا', { f: 9.9, ff: 'Amiri', fs: 40, c: '#7fe0a0', fw: 400 }) + T(1270, 560, 'bertahap', { f: 10.1, fs: 24, c: '#7fe0a0' }) +
  BOX(1360, 420, 400, 150, { s: '#fff', del: 11.0 }) + T(1560, 485, 'Rasulullah', { f: 11.3, fs: 40, fw: 800 }) + T(1560, 540, 'صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ', { f: 12.0, ff: 'Amiri', fs: 30, c: '#cfe0ff', fw: 400 }) +
  T(380, 640, 'pada malam Lailatul Qadr', { f: 2.0, fs: 24, c: '#cfe0ff' }), 'left:0;top:0', 1920, 1080, .7);
kin(node('', 'left:160px;top:740px;width:1600px;font:700 44px Inter;color:#fff'), 'dari awal surah sampai akhir · [sekaligus]', 33.2, { iv: .035, marks: [35.0] });
block('KURUN WAKTU', '± 23 tahun', Y, '#111', 47.6, 'left:1430px;top:740px', 50.0);
kin(node('', 'left:160px;top:830px;width:1200px;font:600 34px Inter;color:#cfe0ff'), 'diturunkan secara [bertahap] kepada Rasulullah', 42.4, { iv: .03, marks: [45.6] });
punch(48.4, 49.6, 1600, 860, 1.5);

// --- 6 Makkiyah vs Madaniyah
scene(50.0, 63.8, { cut: 'hard' });
label('DUA KELOMPOK AYAT', 50.1, 'left:140px;top:140px');
polaroid('kaaba', 'MEKAH', 'left:180px;top:250px', 50.3, 63.8, -5);
const mk1 = node(`<div style="width:620px"><div class="ar" style="font-size:92px;color:${Y};text-align:left">الْآيَاتُ الْمَكِّيَّةُ</div><div style="font:700 36px Inter;color:#ddd;margin-top:6px">ayat yang turun di Mekah</div></div>`, 'left:140px;top:640px');
show(mk1, 53.4, 'up', 63.8); sfx(53.4, 'beep', .5);
polaroid('madinah', 'MADINAH', 'left:1180px;top:250px', 56.6, 63.8, 5);
const md1 = node(`<div style="width:640px"><div class="ar" style="font-size:92px;color:#7fe0a0;text-align:left">الْآيَاتُ الْمَدَنِيَّةُ</div><div style="font:700 36px Inter;color:#ddd;margin-top:6px">ayat yang turun di Madinah</div></div>`, 'left:1140px;top:640px');
show(md1, 60.6, 'up', 63.8); sfx(60.6, 'beep', .5);
const vs = node('<div style="font:900 80px Inter;color:#fff">VS</div>', 'left:900px;top:420px'); show(vs, 56.4, 'scale', 63.8);
stamp('MAKKIYAH', 'left:560px;top:250px', 54.6, 63.8, Y);
stamp('MADANIYAH', 'left:1530px;top:250px', 61.6, 63.8, '#2fae5b');

// ================================================================== MENIT 2 – AKHIR
// penghitung angka naik
function counter(t0, t1, val, css, lbl, col = Y, dur = 1.4) {
  const n = node(`<div><div class="mono" style="font-size:20px;color:#f0f0f0">${lbl}</div><div class="cv" style="font:900 120px Inter;color:${col};letter-spacing:-.02em"></div></div>`, css, 'dimmable');
  for (let i = 0; i < 10; i++) sfx(t0 + i * dur / 10, 'tick', .5); sfx(t0 + dur, 'beep', .6);
  item(t0, t1, n, (lt, t, it) => { n.style.opacity = clamp(lt / .2) * clamp((it.t1 - t) / .25); n.querySelector('.cv').textContent = Math.round(val * eo(lt / dur)).toLocaleString('id-ID'); });
  return n;
}
function sub2(css, t0, t1) { // profil bulat (foto) + SUBSCRIBE diklik
  const n = node(`<div style="display:flex;align-items:center;gap:22px"><div style="width:110px;height:110px;border-radius:50%;background:url(user_photo.jpg) 45% 54%/150% auto no-repeat;border:5px solid ${Y};box-shadow:0 0 0 3px #111"></div>
  <div style="font:800 52px Inter">@alurziyadahku</div><div class="sb" style="position:relative;background:#d7322b;color:#fff;font:900 46px Inter;padding:18px 34px;border-radius:12px">SUBSCRIBE
  <svg class="cs" style="position:absolute;right:-30px;bottom:-56px" width="64" height="64" viewBox="0 0 28 28"><path d="M2 2 L2 24 L8 18 L13 27 L17 25 L12 16 L21 16Z" fill="#fff" stroke="#000" stroke-width="2"/></svg></div></div>`, css);
  const tc = t0 + 1.2; sfx(tc, 'click', 1);
  item(t0, t1, n, (lt, t, it) => { n.style.opacity = clamp(lt / .3) * clamp((it.t1 - t) / .3); const sb = n.querySelector('.sb'), on = t > tc; sb.style.background = on ? '#2fae5b' : '#d7322b'; sb.firstChild.textContent = on ? 'SUBSCRIBED ✓' : 'SUBSCRIBE'; sb.style.transform = t > tc && t < tc + .15 ? 'scale(.92)' : ''; n.querySelector('.cs').style.transform = `translate(${(1 - eo(lt / 1.1)) * 120}px,${(1 - eo(lt / 1.1)) * 80}px)`; });
}

// --- 7 masa Rasulullah: belum dibukukan, di hafalan sahabat
scene(63.8, 80.0, { cut: 'glitch' });
label('MASA RASULULLAH', 63.9, 'left:140px;top:150px');
seg('Al-Qur\'an belum<br>[dibukukan]', 64.2, 'left:140px;top:210px;width:1100px', { size: 104, iv: .045, marks: [66.6] });
kin(node('', 'left:140px;top:480px;width:1100px;font:700 44px Inter;color:#ddd'), 'kitabnya belum ada', 71.0, { iv: .04 });
kin(node('', 'left:140px;top:580px;width:1200px;font:700 50px Inter;color:#fff'), 'masih di dalam [hafalan] para sahabat', 74.0, { iv: .035, marks: [76.4] });
polaroid('kitab', 'BELUM ADA', 'left:1420px;top:200px', 68.0, 80.0, 6);
stamp('BELUM DIJILID', 'left:1350px;top:600px', 71.6, 80.0);
punch(76.4, 78.2, 650, 610, 1.6);

// --- 8 /infographic : media tulisan
scene(80.0, 90.0, { cut: 'glitch' });
codeTag(80.0, 90.0, '02', '/infographic');
seg('ada pula yang [ditulis] di…', 80.1, 'left:140px;top:190px;width:1640px', { size: 80, iv: .04, marks: [81.6] });
(() => {
  const it = [['01', 'batu-batuan', 80.6, `<path d="M-70 40 Q-80 -30 -20 -50 Q50 -70 72 -10 Q90 50 30 60 Q-40 70 -70 40Z" fill="#8a8a80" stroke="#ddd" stroke-width="4"/>`],
    ['02', 'daun-daunan', 83.0, `<path d="M-70 50 Q-40 -70 70 -50 Q60 60 -70 50Z" fill="#4f8a3a" stroke="#cfe8b0" stroke-width="4"/><path d="M-60 45 Q0 0 60 -40" stroke="#cfe8b0" stroke-width="3" fill="none"/>`],
    ['03', 'kulit kambing / unta', 85.2, `<path d="M-80 -40 Q-40 -60 0 -45 Q40 -60 80 -40 Q70 0 82 40 Q40 60 0 48 Q-40 62 -80 40 Q-70 0 -80 -40Z" fill="#c9a46a" stroke="#f3e1bc" stroke-width="4"/><path d="M-50 -10 H50 M-50 10 H40" stroke="#6b4a22" stroke-width="3"/>`]];
  it.forEach((x, i) => { const n = node(`<div style="width:470px;text-align:center"><svg width="240" height="200" viewBox="-120 -100 240 200">${x[3]}</svg><div class="mono" style="font-size:22px;color:#e9f23a;margin-top:10px">${x[0]}</div><div style="font:800 44px Inter;margin-top:6px">${x[1]}</div></div>`, `left:${180 + i * 540}px;top:420px`); show(n, x[2], 'drop', 90.0); sfx(x[2], 'paper', .7); });
})();

// --- 9 Nabi wafat: belum ada wujudnya
scene(90.0, 95.5, { cut: 'hard' });
seg('Nabi shallallahu ‘alaihi wasallam wafat…', 90.1, 'left:140px;top:260px;width:1640px', { size: 80, iv: .05 });
seg('Al-Qur\'an belum ada [wujudnya]', 92.4, 'left:140px;top:470px;width:1640px', { size: 84, iv: .04, color: '#ddd', marks: [94.6] });

// --- 10 Abu Bakar ash-Shiddiq berfikir (/handwritten)
scene(95.5, 115.8, { cut: 'glitch' });
codeTag(97.0, 115.8, '03', '/handwritten');
entity(95.6, 115.8, { css: 'left:1060px;top:170px', w: 760, h: 520, tag: 'DOSIER · KHALIFAH PERTAMA', name: 'Abu Bakar ash-Shiddiq', ar: 'أَبُو بَكْرٍ الصِّدِّيقُ', rows: [['KHALIFAH', 'pertama sesudah Rasulullah shallallahu ‘alaihi wasallam'], ['MASA', '11 – 13 H'], ['WAFAT', 'Madinah · 13 H'], ['GAGASAN', "menghimpun Al-Qur'an"]], blocks: [['KHALIFAH', '01', Y], ['JILID', '1 mushaf', '#ebe6d6']], src: 'Shahih al-Bukhari · kitab Fadha\'il al-Qur\'an' });
(() => {
  const L = ['kalau tidak dikumpulkan,', 'tidak dijilid menjadi satu…', 'akan menyulitkan generasi nanti', 'yang hafal bisa wafat', '→ Al-Qur\'an bisa hilang!'], T0 = [97.2, 100.0, 103.4, 108.2, 113.6];
  const n = node(`<div style="width:860px;height:${L.length * 58 + 40}px;background:#fbf6e6;background-image:repeating-linear-gradient(transparent 0 56px,#c9d6ee 56px 58px);border-left:4px solid #e6a0a0;padding:14px 30px;transform:rotate(-1.5deg);box-shadow:0 20px 50px rgba(0,0,0,.6)">
   ${L.map((s, i) => `<div class="hw" style="${KAL};font-size:42px;color:${i === 4 ? '#c0302a' : '#1f3a8a'};height:58px;white-space:nowrap;overflow:hidden;width:0">${s}</div>`).join('')}</div>`, 'left:140px;top:300px', 'dimmable');
  T0.forEach(t => sfx(t, 'draw', .6));
  item(97.0, 115.8, n, (lt, t, it) => { n.style.opacity = clamp(lt / .25) * clamp((it.t1 - t) / .25); n.querySelectorAll('.hw').forEach((e, i) => e.style.width = clamp((t - T0[i]) / 1.4) * 800 + 'px'); });
  label('BELIAU BERFIKIR', 96.0, 'left:140px;top:240px');
})();
punch(113.8, 115.4, 420, 560, 1.55);

// --- 11 perintah kepada Zaid bin Tsabit + /flowchart
scene(115.8, 141.9, { cut: 'glitch' });
tabSearch(115.8, 'JAM\'UL QUR\'AN', 'Zaid bin Tsabit menghimpun Al-Qur\'an', [['Shahih al-Bukhari · 4986', 'RIWAYAT', 'فَتَتَبَّعْتُ الْقُرْآنَ أَجْمَعُهُ'], ["Abu Bakar & 'Umar · perintah", 'PERINTAH', 'إِنَّكَ رَجُلٌ شَابٌّ عَاقِلٌ'], ['Kitab al-Mashahif · Ibnu Abi Dawud', 'TERKAIT', 'جَمْعُ الْقُرْآنِ']], 5.0);
entity(121.0, 129.8, { css: 'left:1080px;top:200px', w: 720, h: 460, tag: 'DOSIER · PENGHIMPUN', name: 'Zaid bin Tsabit', ar: 'زَيْدُ بْنُ ثَابِتٍ', rows: [['PERAN', 'penulis wahyu Rasulullah shallallahu ‘alaihi wasallam'], ['DIPERINTAH', "Abu Bakar & 'Umar bin al-Khaththab"], ['TUGAS', "mengumpulkan & mencatat Al-Qur'an"]], src: 'Shahih al-Bukhari 4986' });
seg('[Zaid bin Tsabit]<br>diperintah<br>mengumpulkan', 121.2, 'left:140px;top:260px;width:900px', { size: 80, iv: .035, t1: 129.8, marks: [122.6] });
codeTag(129.8, 141.9, '04', '/flowchart');
sv(129.8, 141.9, DEFS + [['hafalan di dada', 0], ['daun-daunan', 1], ['kulit-kulit', 2], ['batu-batuan', 3]].map(([s, i]) => BOX(140, 260 + i * 150, 420, 100, { s: i ? '#fff' : Y, del: i * .5 }) + T(350, 322 + i * 150, s, { f: .2 + i * .5, fs: 34 }) + LN([[560, 310 + i * 150], [800, 540]], { s: Y, del: .4 + i * .5, sw: 3 })).join('') +
  `<circle cx="900" cy="540" r="100" fill="none" stroke="${Y}" stroke-width="5" data-d="630" data-del="2.2"/>` + T(900, 530, 'Zaid', { f: 2.4, fs: 40, fw: 800, c: Y }) + T(900, 572, 'bin Tsabit', { f: 2.5, fs: 26 }) +
  LN([[1000, 540], [1260, 540]], { arrow: 1, s: Y, sw: 5, del: 6.0 }) + BOX(1280, 440, 480, 200, { s: '#2fae5b', del: 9.5, sw: 5 }) + T(1520, 530, 'satu biji', { f: 9.8, fs: 44, fw: 800 }) + T(1520, 590, "Al-Qur'an", { f: 10.0, fs: 44, fw: 800, c: '#7fe0a0' }), 'left:0;top:0', 1920, 1080, .6);

// --- 12 /timeline : Abu Bakar → 'Umar → 'Utsman
scene(141.9, 151.6, { cut: 'glitch' });
codeTag(141.9, 151.6, '05', '/timeline');
sv(141.9, 151.6, LN([[200, 600], [1720, 600]], { s: '#fff', sw: 5 }) + [[340, 'Abu Bakar', 'menghimpun · wafat', 0], [960, "'Umar bin al-Khaththab", "Al-Qur'an masih demikian", 4.0], [1580, "'Utsman bin 'Affan", 'menyusun kembali', 8.2]].map(([x, a, b, d], i) =>
  `<circle cx="${x}" cy="600" r="22" fill="${i === 2 ? Y : '#ebe6d6'}" data-f="${d + .2}"/>` + T(x, 540, a, { f: d + .3, fs: 40, fw: 800, c: i === 2 ? Y : '#fff' }) + T(x, 660, b, { f: d + .5, fs: 26, c: '#eee', fw: 500 }) + T(x, 470, '0' + (i + 1), { f: d + .2, fs: 26, c: '#888', ff: 'DejaVu Sans Mono' })).join(''), 'left:0;top:0', 1920, 1080, .8);
label('KHALIFAH SESUDAH RASULULLAH shallallahu ‘alaihi wasallam', 142.0, 'left:200px;top:260px');

// --- 13 'Utsman menyusun surah (/roadmap)
scene(151.6, 189.2, { cut: 'glitch' });
entity(151.7, 172.0, { css: 'left:1040px;top:180px', w: 780, h: 560, tag: 'DOSIER · KHALIFAH KETIGA', name: "'Utsman bin 'Affan", ar: 'عُثْمَانُ بْنُ عَفَّانَ', rows: [['GELAR', 'Dzun Nurain'], ['MASA', '23 – 35 H'], ['LANGKAH', 'menyusun surah sesuai petunjuk Rasulullah shallallahu ‘alaihi wasallam'], ['SUMBER', 'himpunan Zaid bin Tsabit']], blocks: [['KHALIFAH', '03', Y], ['MUSHAF', "'Utsmani", '#7d8a3a', '#fff']], src: 'Shahih al-Bukhari 4987' });
seg('disusun [surah-surahnya]', 152.0, 'left:140px;top:240px;width:860px', { size: 76, iv: .04, t1: 172.0, marks: [154.2] });
kin(node('', 'left:140px;top:470px;width:840px;font:700 40px Inter;color:#ddd'), 'sesuai petunjuk [Baginda Rasulullah] semasa masih hidup', 158.4, { iv: .03, t1: 172.0, marks: [175.6 - 15] });
kin(node('', 'left:140px;top:640px;width:840px;font:600 34px Inter;color:#eee'), 'sebelumnya: lengkap, hanya belum tersusun', 164.6, { iv: .03, t1: 172.0 });
codeTag(172.0, 189.2, '06', '/roadmap');
(() => {
  const road = [[180, 640], [480, 520], [800, 640], [1120, 520], [1440, 640], [1740, 520]], P = 'M180 640 C330 640 330 520 480 520 S650 640 800 640 S970 520 1120 520 S1290 640 1440 640 S1590 520 1740 520';
  let g = `<path d="${P}" fill="none" stroke="#3a3a2a" stroke-width="22" stroke-linecap="round" data-d="1900" data-dur="2.4"/><path d="${P}" fill="none" stroke="${Y}" stroke-width="3" stroke-dasharray="16 14" data-d="1900" data-dur="2.4"/>`;
  const ms = [['1', 'Al-Fatihah', 'الْفَاتِحَةُ'], ['2', 'Al-Baqarah', 'الْبَقَرَةُ'], ['3', "Ali 'Imran", 'آلُ عِمْرَانَ'], ['…', 'dan seterusnya', ''], ['113', 'Al-Falaq', 'الْفَلَقُ'], ['114', 'An-Nas', 'النَّاسُ']], D = [7.6, 9.6, 11.0, 12.6, 13.4, 14.0];
  road.forEach((p, i) => { const d = D[i]; g += `<circle cx="${p[0]}" cy="${p[1]}" r="34" fill="${i < 3 ? Y : '#1a1a1a'}" stroke="${Y}" stroke-width="4" data-d="214" data-del="${d}"/>` + T(p[0], p[1] + 10, ms[i][0], { f: d + .2, fs: 26, c: i < 3 ? '#111' : Y, fw: 800 }) + T(p[0], p[1] + (i % 2 ? -64 : 84), ms[i][1], { f: d + .3, fs: 28 }) + (ms[i][2] ? T(p[0], p[1] + (i % 2 ? -104 : 128), ms[i][2], { f: d + .4, fs: 34, ff: 'Amiri', fw: 400, c: '#ddd' }) : ''); });
  sv(172.0, 189.2, g, 'left:0;top:0', 1920, 1080, .5);
  label('URUTAN SURAH · MUSHAF', 172.2, 'left:180px;top:250px');
})();
stamp("JASA 'UTSMAN", 'left:1240px;top:800px', 185.6, 189.2, Y);

// --- 14 perkataan Sayyidina 'Ali
scene(189.2, 214.5, { cut: 'glitch', light: 1 });
searchFind(189.2, 196.0, {
  q: 'أعظم الناس في المصاحف أجرا', count: 3, pick: 0, shelfPick: 0, times: { type: .45, scan: 1.6, res: 2.4, click: 3.4, det: 3.8 },
  shelf: [['Kitab al-Mashahif · Ibnu Abi Dawud', 'المصاحف'], ['Al-Itqan · as-Suyuthi', 'الإتقان'], ["Kanz al-'Ummal", 'كنز العمال'], ['Fath al-Bari', 'فتح الباري']],
  results: [
    { title: "Kitab al-Mashahif · atsar 'Ali bin Abi Thalib", tag: 'SANAD HASAN · AS-SUYUTHI', ar: 'أَعْظَمُ النَّاسِ فِي الْمَصَاحِفِ أَجْرًا أَبُو بَكْرٍ' },
    { title: "Al-Itqan fi 'Ulumil Qur'an", tag: 'DINUKIL', ar: 'هُوَ أَوَّلُ مَنْ جَمَعَ كِتَابَ اللَّهِ' },
    { title: "Kanz al-'Ummal", tag: 'DINUKIL', ar: 'رَحْمَةُ اللَّهِ عَلَى أَبِي بَكْرٍ' }],
  det: { title: "'Ali bin Abi Thalib", ar: 'عَلِيُّ بْنُ أَبِي طَالِبٍ', rows: [['GELAR', 'karramallahu wajhah'], ['KHALIFAH', 'keempat'], ['TENTANG', 'Abu Bakar ash-Shiddiq']], quote: 'أَوَّلُ مَنْ جَمَعَ كِتَابَ اللَّهِ' }
});
paper(196.0, 'left:160px;top:180px;width:1600px;height:700px', '', 214.5);
label("PERKATAAN SAYYIDINA 'ALI", 196.1, 'left:160px;top:130px', 214.5);
arw(node('أَعْظَمُ النَّاسِ فِي الْمَصَاحِفِ أَجْرًا [أَبُو بَكْرٍ]', 'left:220px;width:1480px;top:230px;text-align:center;font-size:84px;color:#151515'), 196.1, 2.2, { marks: [198.6], t1: 214.5 });
kin(node('', 'left:260px;top:400px;width:1400px;font:700 40px Inter;color:#222;text-align:center'), 'setiap umat membaca Al-Qur\'an sampai hari kiamat, [Abu Bakar dapat pahala]', 197.6, { iv: .028, marks: [202.4], t1: 214.5 });
seg('Kenapa?', 203.7, 'left:260px;top:540px;width:600px;color:#151515', { size: 70, iv: .06, t1: 214.5 });
kin(node('', 'left:260px;top:650px;width:1400px;font:700 40px Inter;color:#222;text-align:center'), 'beliaulah yang [pertama] punya gagasan menghimpun Al-Qur\'an', 205.0, { iv: .03, marks: [206.3], t1: 214.5 });
stamp('PAHALA MENGALIR', 'left:1240px;top:520px', 208.0, 214.5, '#2fae5b');

// --- 15 /tree : rangkaian khalifah sampai ke-10
scene(214.5, 222.1, { cut: 'glitch' });
codeTag(214.5, 222.1, '07', '/tree');
const KH = [['Abu Bakar ash-Shiddiq', '11–13 H'], ["'Umar bin al-Khaththab", '13–23 H'], ["'Utsman bin 'Affan", '23–35 H'], ["'Ali bin Abi Thalib", '35–40 H'], ['Hasan bin \'Ali', '40–41 H'], ["Mu'awiyah bin Abi Sufyan", '41–60 H'], ["Yazid bin Mu'awiyah", '60–64 H'], ["Mu'awiyah bin Yazid", '64 H'], ['Marwan bin al-Hakam', '64–65 H'], ["'Abdul Malik bin Marwan", '65–86 H']];
function khChain(t0, t1, hi, step = .35) {
  let g = DEFS;
  KH.forEach((k, i) => { const row = Math.floor(i / 5), c = i % 5, x = 110 + c * 345, y = 300 + row * 290, d = i * step, on = i === hi;
    g += BOX(x, y, 320, 200, { s: on ? Y : '#fff', sw: on ? 7 : 3, del: d, fill: on ? 'rgba(233,242,58,.16)' : 'rgba(255,255,255,.04)' }) +
      T(x + 30, y + 50, String(i + 1).padStart(2, '0'), { f: d + .1, fs: 34, c: Y, ff: 'DejaVu Sans Mono', a: 'start' }) +
      T(x + 160, y + 112, k[0].length > 19 ? k[0].split(' ').slice(0, 2).join(' ') : k[0], { f: d + .2, fs: 28, fw: 800, c: on ? Y : '#fff' }) +
      (k[0].length > 19 ? T(x + 160, y + 146, k[0].split(' ').slice(2).join(' '), { f: d + .2, fs: 28, fw: 800, c: on ? Y : '#fff' }) : '') +
      T(x + 160, y + 184, k[1], { f: d + .3, fs: 22, c: '#eee', ff: 'DejaVu Sans Mono' });
    if (c < 4) g += LN([[x + 322, y + 100], [x + 343, y + 100]], { arrow: 1, s: Y, sw: 4, del: d + .2 });
  });
  g += LN([[1730, 500], [1730, 545], [190, 545], [190, 588]], { arrow: 1, s: Y, sw: 4, del: 4 * step + .3 });
  KH.forEach((_, i) => sfx(t0 + i * step, 'click', .4));
  return sv(t0, t1, g, 'left:0;top:0', 1920, 1080, .4);
}
khChain(214.6, 222.1, 3, .7);
label('URUTAN KHALIFAH SESUDAH RASULULLAH shallallahu ‘alaihi wasallam', 214.6, 'left:110px;top:210px');

// --- 16 /layers : belum bertitik, belum berbaris
scene(222.1, 236.4, { cut: 'hard' });
codeTag(222.1, 236.4, '08', '/layers');
seg('belum diberi [titik]<br>belum diberi [baris]', 222.2, 'left:140px;top:170px;width:1640px', { size: 74, iv: .035, marks: [224.8, 227.0] });
(() => {
  const L = [['RASM · tanpa titik & baris', 'ٮسم الله الرحمں الرحىم', '#ff8a5c', 222.6 + 2.6], ['+ TITIK (nuqath)', 'بسم الله الرحمن الرحيم', '#ebe6d6', 228.4], ['+ BARIS (harakat)', 'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ', Y, 233.4]];
  L.forEach((x, i) => { const n = node(`<div style="width:1640px;height:150px;border:3px solid ${x[2]};border-radius:12px;display:flex;align-items:center;justify-content:space-between;padding:0 40px;background:rgba(0,0,0,.4)"><span class="mono" style="font-size:22px;color:${x[2]}">${x[0]}</span><span class="ar" style="font-size:70px;color:#fff">${x[1]}</span></div>`, `left:140px;top:${400 + i * 180}px`, 'dimmable'); show(n, x[3], 'left', 236.4); sfx(x[3], 'click', .7); });
  kin(node('', 'left:140px;top:950px;width:1640px;font:600 30px Inter;color:#eee'), 'orang yang tidak mengaji tidak pandai membacanya', 230.1, { iv: .028, t1: 233.3 });
})();

// --- 17 'Abdul Malik bin Marwan · khalifah ke-10 · ±80 H
scene(236.4, 260.6, { cut: 'glitch' });
khChain(236.5, 241.0, 9, .18);
label('KHALIFAH KE-10 · MENURUT SEBAGIAN AHLI SEJARAH', 236.5, 'left:110px;top:210px', 241.0);
entity(241.0, 260.6, { css: 'left:1000px;top:170px', w: 820, h: 560, tag: 'DOSIER · KHALIFAH', name: "'Abdul Malik bin Marwan", ar: 'عَبْدُ الْمَلِكِ بْنُ مَرْوَانَ', rows: [['URUTAN', 'khalifah ke-10 sesudah Rasulullah shallallahu ‘alaihi wasallam'], ['TAHUN', 'sekitar 80 Hijriyah'], ['PERINTAH', 'ulama memberi titik & baris'], ['PELAKSANA', "asy-Syaikh Yahya bin Ya'mar"]], blocks: [['KHALIFAH KE', '10', Y], ['TAHUN', '± 80 H', '#ebe6d6'], ['TUGAS', 'titik + baris', '#7d8a3a', '#fff']], src: 'sejarah penulisan mushaf' });
seg('memberi [titik]<br>sekaligus [baris]<br>harakatnya', 248.0, 'left:140px;top:250px;width:820px', { size: 76, iv: .04, marks: [251.4, 253.4] });
punch(257.0, 258.6, 1280, 700, 1.5);

// --- 18 asy-Syaikh Yahya bin Ya'mar
scene(260.6, 268.0, { cut: 'glitch' });
polaroid('kitab', 'MUSHAF BERTITIK', 'left:200px;top:220px', 260.7, 268.0, -5);
entity(261.0, 268.0, { css: 'left:760px;top:200px', w: 960, h: 480, tag: 'DOSIER · ULAMA PELAKSANA', name: "asy-Syaikh Yahya bin Ya'mar", ar: 'يَحْيَى بْنُ يَعْمَرَ', rows: [['ASAL', "Bashrah · generasi tabi'in"], ['KEAHLIAN', "nahwu & qira'at"], ['TUGAS', "titik & baris Al-Qur'an"], ['BERSAMA', "Nashr bin 'Ashim"]], src: "Muqaddimah Tafsir al-Qurthubi · fasal syakl & nuqath mushaf" });

// --- 19 mudah dibaca: jasa pendahulu
scene(268.0, 282.6, { cut: 'glitch' });
seg('Al-Qur\'an sampai kepada kita<br>[mudah dibaca]', 268.1, 'left:140px;top:200px;width:1640px', { size: 80, iv: .03, marks: [270.6] });
steps(['susunan', 'titik', 'baris', 'mudah dibaca'], 272.8, 1.6, 'left:140px;top:520px', 282.6);
kin(node('', 'left:140px;top:760px;width:1640px;font:700 46px Inter;color:#fff'), 'semua itu [jasa] para pendahulu kita', 277.9, { iv: .035, marks: [279.4] });

// --- 20 bid'ah hasanah
scene(282.6, 312.1, { cut: 'hard' });
paper(282.7, 'left:160px;top:180px;width:1600px;height:700px');
label('KESIMPULAN', 282.8, 'left:160px;top:130px');
arw(node('[بِدْعَةٌ حَسَنَةٌ]', 'left:220px;width:1480px;top:230px;text-align:center;font-size:140px;color:#151515'), 286.6, 1.0, { marks: [287.8] });
kin(node('', 'left:260px;top:450px;width:1400px;font:700 42px Inter;color:#222;text-align:center'), 'zaman Baginda Rasul tidak ada [mushaf] seperti yang kita baca', 289.8, { iv: .03, marks: [292.6] });
kin(node('', 'left:260px;top:560px;width:1400px;font:700 42px Inter;color:#222;text-align:center'), 'menyusun Al-Qur\'an = inisiatif [para sahabat]', 294.8, { iv: .03, marks: [300.6] });
kin(node('', 'left:260px;top:680px;width:1400px;font:600 36px Inter;color:#7a1f1a;text-align:center'), 'yang anti bid\'ah… jangan membaca mushaf sekarang', 302.0, { iv: .03 });
stamp("BID'AH YANG BAIK", 'left:1220px;top:760px', 310.0, 312.1, '#2fae5b');

// --- 21 /decision-matrix : 30 juz · 114 surah · 6.225 ayat
scene(312.1, 342.3, { cut: 'glitch' });
codeTag(312.1, 342.3, '09', '/decision-matrix');
label("AL-QUR'AN AL-KARIM TERDIRI DARIPADA", 312.2, 'left:140px;top:170px');
counter(313.6, 342.3, 30, 'left:140px;top:250px', 'JUZUK'); stamp('SEPAKAT', 'left:150px;top:470px', 316.8, 342.3, '#2fae5b');
counter(318.4, 342.3, 114, 'left:700px;top:250px', 'SURAH'); stamp('SEPAKAT', 'left:710px;top:470px', 320.0, 342.3, '#2fae5b');
counter(321.2, 342.3, 6225, 'left:1260px;top:250px', 'AYAT', '#ff8a5c'); stamp('KHILAF', 'left:1300px;top:470px', 325.6, 342.3);
sv(327.0, 342.3, BOX(140, 640, 820, 110, { s: '#fff', r: 0 }) + T(550, 707, '6.23x · ada yang mengatakan', { f: 5.4, fs: 34 }) + BOX(960, 640, 820, 110, { s: '#fff', r: 0, del: .2 }) + T(1370, 707, '6.22x · ada yang mengatakan', { f: 7.6, fs: 34 }) +
  BOX(140, 750, 1640, 110, { s: Y, r: 0, del: 13 }) + T(960, 818, "sebab berbeda: tergantung qira'at yang dibaca", { f: 15.4, fs: 36, c: Y }), 'left:0;top:0', 1920, 1080, .5);
punch(325.6, 327.0, 1420, 420, 1.5);

// --- 22 /exploded-view : kalimat & huruf
scene(342.3, 377.3, { cut: 'glitch' });
codeTag(342.3, 377.3, '10', '/exploded-view');
counter(342.5, 377.3, 77439, 'left:140px;top:220px', 'KALIMAT', Y, 2.2);
(() => { const W = [['اللَّهِ', 346.8], ['الرَّحْمَنِ', 348.6], ['الرَّحِيمِ', 350.4]];
  W.forEach(([w, t], i) => { const n = node(`<div style="width:300px;height:170px;border:3px dashed ${Y};border-radius:12px;display:flex;flex-direction:column;align-items:center;justify-content:center"><div class="ar" style="font-size:66px">${w}</div><div class="mono" style="font-size:18px;color:${Y}">1 KALIMAT</div></div>`, `left:${900 + i * 330}px;top:230px`); show(n, t, 'drop', 377.3); sfx(t, 'click', .7); }); })();
counter(360.2, 377.3, 340740, 'left:140px;top:500px', 'HURUF', '#7fe0a0', 2.2);
kin(node('', 'left:140px;top:780px;width:1640px;font:700 40px Inter;color:#ddd'), 'pendahulu kita sudah menghitung · ada perbedaan sedikit = [khilaf ulama]', 366.0, { iv: .028, marks: [371.4] });
chip("BERLAINAN QIRA'AT YANG DIBACA", 375.0, 'left:140px;top:900px', 377.3);

// --- 23 /iceberg : kalamullah berhuruf?
scene(377.3, 425.3, { cut: 'hard' });
seg('Al-Qur\'an itu kalamullah,<br>kenapa [ada hurufnya]?', 377.4, 'left:140px;top:150px;width:1640px', { size: 76, iv: .035, marks: [381.0] });
codeTag(382.7, 425.3, '11', '/iceberg');
sv(382.7, 425.3, `<path d="M120 560 H1800" stroke="#4aa3ff" stroke-width="4" data-d="1680"/>` +
  `<path d="M760 560 L880 410 L960 450 L1060 380 L1160 560Z" fill="rgba(255,255,255,.08)" stroke="#fff" stroke-width="4" data-d="900" data-del=".2"/>` + T(960, 360, "Al-Qur'an yang berhuruf · dibaca", { f: .5, fs: 30 }) +
  `<path d="M760 560 L560 760 L760 940 L1180 960 L1380 760 L1160 560" fill="rgba(74,163,255,.1)" stroke="#7fd6ff" stroke-width="4" data-d="1500" data-del="10.0"/>` +
  T(960, 700, 'كَلَامُ اللَّهِ الْقَدِيمُ', { f: 10.3, ff: 'Amiri', fs: 58, c: '#7fd6ff', fw: 400 }) +
  ['tidak berhuruf', 'tidak bersuara', 'tidak berawal', 'tidak berakhir'].map((s, i) => T(i < 2 ? 620 : 1300, 800 + (i % 2) * 60, '✕ ' + s, { f: 11 + i * 1.2, fs: 30, c: '#ff8a80' })).join('') +
  T(150, 545, 'yang tampak', { f: .6, fs: 22, a: 'start', c: '#fff', ff: 'DejaVu Sans Mono' }) + T(150, 600, 'qadim pada zat-Nya', { f: 10.4, fs: 22, a: 'start', c: '#7fd6ff', ff: 'DejaVu Sans Mono' }), 'left:0;top:0', 1920, 1080, .8);
kin(node('', 'left:140px;top:1000px;width:1640px;font:800 34px Inter;color:#fff;text-align:center'), 'menunjukkan kepada [sesuatu yang sama] · maka disebut juga kalamullah', 406.8, { iv: .03, marks: [410.4] });
punch(410.4, 412.4, 960, 1000, 1.5);

// --- 24 Surah Al-Fatihah: nama-nama (/canvas)
scene(425.3, 448.6, { cut: 'hard' });
label('BAHAGIAN PERTAMA', 425.4, 'left:140px;top:150px');
arw(node('سُورَةُ [الْفَاتِحَةِ]', 'left:140px;top:200px;font-size:120px;color:#fff;text-align:left;width:1000px'), 431.0, 1.0, { marks: [433.0] });
kin(node('', 'left:140px;top:420px;width:900px;font:700 44px Inter;color:#ddd'), 'ada beberapa macam [namanya]', 433.5, { iv: .035, marks: [435.6] });
codeTag(436.4, 448.6, '12', '/canvas');
(() => { const notes = [['فَاتِحَةُ الْكِتَابِ', 'Fatihatul Kitab · pembuka', '#f7e078', -3, 445.0], ['فَاتِحَةُ الْقُرْآنِ', 'Fatihatul Quran', '#bfe8c8', 2, 446.4], ['أُمُّ الْقُرْآنِ', 'Ummul Qur\'an · bacaan kedua', '#f5c6c0', -2, 448.0]];
  notes.forEach((x, i) => { const n = node(`<div style="width:420px;height:210px;background:${x[2]};padding:18px;box-shadow:0 14px 30px rgba(0,0,0,.5);transform:rotate(${x[3]}deg);color:#222"><div class="ar" style="font-size:46px;text-align:center">${x[0]}</div><div style="${KAL};font-size:30px;text-align:center;margin-top:10px">${x[1]}</div></div>`, `left:${1180 + (i % 2) * 120}px;top:${200 + i * 250}px`); show(n, x[4] - 7, 'drop', 448.6); sfx(x[4] - 7, 'paper', .7); });
  kin(node('', 'left:140px;top:600px;width:900px;font:800 56px Inter;color:#fff'), 'الفاتحة = [pembuka]', 441.9, { iv: .05, marks: [444.0] }); })();

// --- 25 Ummul Qur'an: ibu/induk Al-Qur'an
scene(448.6, 470.1, { cut: 'glitch', light: 1 });
searchFind(448.6, 455.0, {
  q: 'أم القرآن', count: 3, pick: 0, shelfPick: 0, times: { type: .45, scan: 1.4, res: 2.2, click: 3.2, det: 3.6 },
  shelf: [['Shahih al-Bukhari', 'صحيح البخاري'], ['Sunan at-Tirmidzi', 'سنن الترمذي'], ['Tafsir Ibnu Katsir', 'ابن كثير'], ['Tafsir al-Qurthubi', 'القرطبي']],
  results: [
    { title: 'Shahih al-Bukhari · 4704', tag: 'HADIS', ar: 'أُمُّ الْقُرْآنِ هِيَ السَّبْعُ الْمَثَانِي وَالْقُرْآنُ الْعَظِيمُ' },
    { title: 'Tafsir Ibnu Katsir · Al-Fatihah', tag: 'NAMA SURAH', ar: 'وَيُقَالُ لَهَا: أُمُّ الْكِتَابِ' },
    { title: 'Tafsir al-Qurthubi · Al-Fatihah', tag: 'NAMA SURAH', ar: 'أَسْمَاءُ الْفَاتِحَةِ' }],
  det: { title: 'Shahih al-Bukhari', ar: 'صَحِيحُ الْبُخَارِيِّ', rows: [['NOMOR', '4704 · kitab at-Tafsir'], ['PERAWI', 'Abu Hurairah radhiyallahu \'anhu'], ['ISI', "Ummul Qur'an = as-Sab'ul Matsani"]], quote: 'أُمُّ الْقُرْآنِ' }
});
seg('"Mari sama-sama kita bacakan<br>[Ummul Qur\'an]"', 455.1, 'left:140px;top:220px;width:1640px', { size: 72, iv: .03, marks: [458.6] });
kin(node('', 'left:140px;top:500px;width:1640px;font:800 64px Inter;color:#fff'), 'artinya [ibu] Al-Qur\'an · [induk] Al-Qur\'an', 460.2, { iv: .04, marks: [461.4, 463.0] });
seg('Kenapa?', 466.0, 'left:140px;top:700px;width:800px', { size: 100, iv: .06, color: '#ff8a5c' });

// --- 26 seluruh isi Al-Qur'an tergambar di Al-Fatihah
scene(470.1, 480.1, { cut: 'hard' });
seg('seluruh isi Al-Qur\'an<br>dari awal sampai akhir', 470.2, 'left:140px;top:240px;width:1640px', { size: 84, iv: .03 });
seg('[tergambar] di dalam<br>Surah Al-Fatihah', 475.0, 'left:140px;top:520px;width:1640px', { size: 84, iv: .03, color: '#ddd', marks: [476.6] });

// --- 27 /blueprint : peta isi Al-Qur'an ↔ ayat Al-Fatihah
const FAT = [
  [480.1, 491.4, 'الْحَمْدُ لِلَّهِ', 490.3, [[480.4, 'tentang Allah'], [485.4, 'pujian-pujian kepada Allah']]],
  [491.4, 505.8, 'رَبِّ الْعَالَمِينَ', 502.0, [[492.6, 'makhluk'], [494.5, 'langit · bumi · laut'], [496.5, 'surga · neraka'], [497.8, 'jin · manusia']]],
  [505.8, 532.8, 'الرَّحْمَنِ الرَّحِيمِ', 524.4, [[506.6, 'pemberian Allah'], [514.4, 'ampunan · rahmat'], [517.4, 'nikmat · rezeki'], [520.0, 'keselamatan · segala keperluan']]],
  [532.8, 549.0, 'مَالِكِ يَوْمِ الدِّينِ', 543.6, [[532.9, 'kubur · hari kiamat'], [536.2, 'surga · neraka'], [540.8, 'mizan · hisab · hari akhir'], [546.5, 'Maharaja hari pembalasan']]],
  [549.0, 560.0, 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', 557.2, [[549.4, 'syari\'at'], [551.6, 'thariqat'], [554.0, 'haqiqat']]],
  [560.0, 570.3, 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ', 567.4, [[560.4, 'doa-doa'], [562.6, 'bermacam-macam doa']]],
  [570.3, 584.8, 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ', 581.4, [[570.6, 'para nabi & rasul'], [575.0, 'para auliya'], [577.4, 'orang yang dikasihi Allah']]],
  [584.8, 593.6, 'غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ', 590.2, [[585.0, 'orang-orang kafir'], [587.4, 'orang-orang yang sesat']]]];
codeTag(480.1, 593.6, '13', '/blueprint');
FAT.forEach(([t0, t1, ar, ta, tops], k) => {
  scene(t0, t1, { cut: 'glitch' });
  const b = node('', 'left:0;top:0;width:1920px;height:1080px', 'bp'); show(b, t0, 'fade', t1, .3);
  const strip = node(`<div style="display:flex;gap:10px">${FAT.map((_, j) => `<div style="width:120px;height:14px;border-radius:7px;background:${j < k ? '#7d8a3a' : j === k ? Y : 'rgba(255,255,255,.55)'}"></div>`).join('')}</div>`, 'left:140px;top:150px'); show(strip, t0, 'fade', t1);
  label(`PETA AL-FATIHAH · ${String(k + 1).padStart(2, '0')} / 08`, t0 + .1, 'left:140px;top:190px;color:#cfe0ff', t1);
  kin(node('', 'left:140px;top:250px;width:760px;font:700 34px Inter;color:#cfe0ff'), "Al-Qur'an membicarakan tentang…", t0 + .15, { iv: .025, t1 });
  tops.forEach(([tt, s], i) => { const n = node(`<div style="display:flex;align-items:center;gap:16px"><div style="width:16px;height:16px;border-radius:50%;background:${Y}"></div><div style="font:800 44px Inter;color:#fff">${s}</div></div>`, `left:160px;top:${340 + i * 96}px`, 'dimmable'); show(n, Math.max(t0 + .5, tt), 'left', t1); sfx(Math.max(t0 + .5, tt), 'click', .6); });
  sv(t0, t1, DEFS + LN([[880, 540], [1010, 540]], { arrow: 1, s: Y, sw: 5, del: Math.max(.6, ta - t0 - 1.2) }) + BOX(1030, 330, 760, 420, { s: '#fff', r: 18, del: .2 }), 'left:0;top:0', 1920, 1080, .7);
  const qm = node(`<div style="font:900 170px Inter;color:${Y}">?</div>`, 'left:1370px;top:430px'); item(t0 + 1.0, ta, qm, (lt, t) => { qm.style.opacity = .35 + .35 * Math.sin(t * 4); });
  label('TERKANDUNG DALAM', t0 + .4, 'left:1070px;top:360px;color:#cfe0ff', t1);
  arw(node(`[${ar}]`, `left:1060px;width:700px;top:470px;text-align:center;font-size:${ar.length > 26 ? 54 : 70}px;color:#fff`), ta, Math.min(1.6, ar.split(' ').length * .45), { marks: [ta + .6], t1 });
  punch(ta + .6, ta + 2.0, 1410, 540, 1.45);
});

// --- 28 penutup: foto penyampai + subscribe + satu kata distabilo
scene(593.6, TOTAL, { cut: 'hard' });
mePol('left:200px;top:200px', 593.7, TOTAL, -4, 420);
seg('[Ummul Qur\'an]', 593.8, 'left:760px;top:250px;width:1100px', { size: 110, iv: .05, marks: [594.6] });
sub2('left:760px;top:560px', 594.0, TOTAL);
