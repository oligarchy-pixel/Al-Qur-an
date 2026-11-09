// ================================================================== ADEGAN EPISODE 09 · Perbanyaklah Bertaubat (sahur)
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
// langit malam (tanpa abu-abu)
const NIGHT = 'background:radial-gradient(1.5px 1.5px at 12% 18%,#fff,transparent),radial-gradient(1.5px 1.5px at 32% 8%,#fff,transparent),radial-gradient(2px 2px at 58% 22%,#fff,transparent),radial-gradient(1.5px 1.5px at 76% 12%,#fff,transparent),radial-gradient(1.5px 1.5px at 88% 30%,#fff,transparent),radial-gradient(1.5px 1.5px at 22% 40%,#fff,transparent),radial-gradient(1.5px 1.5px at 66% 46%,#fff,transparent),linear-gradient(#050b2a,#0c1c4f 60%,#1b2f6b)';
const line = (t0, t1, css, s, o = {}) => kin(node('', css + `;font:${o.w || 800} ${o.fs || 42}px Inter;color:${o.c || '#fff'};line-height:1.3`), s, t0, { iv: o.iv || .026, marks: o.m || [], t1 });
const crd = (html, css, t0, t1, kind = 'up', snd = 'click') => { const n = node(html, css, 'dimmable'); show(n, t0, kind, t1); sfx(t0, snd, .7); return n; };

// --- 0 pembuka (/kinetic-type)
scene(0, 6.0, { cut: 'none' });
arw(node(BSM, 'left:140px;top:130px;width:1000px;font-size:62px;color:#fff;text-align:left'), .1, 1.1);
label('FILE 09 · LANJUTAN KAJIAN', 1.4, 'left:140px;top:285px');
seg('Perbanyaklah<br>[Bertaubat]', 1.6, 'left:140px;top:335px;width:1000px', { size: 104, iv: .045, marks: [3.4] });
mePol('left:1300px;top:150px', .4, 6.0, 4, 400);
meTag(1.4, 6.0, 'التَّوْبَةُ');

// --- 1 /scripture : Al-Isra 79
scene(6.0, 19.18, { cut: 'glitch' });
doa(6.0, 19.18, "QS. AL-ISRA' : 79", 'وَمِنَ اللَّيْلِ [فَتَهَجَّدْ] بِهِ نَافِلَةً لَكَ عَسَىٰ أَنْ يَبْعَثَكَ رَبُّكَ مَقَامًا مَحْمُودًا', 'hendaknya kita [bangkit] mengerjakan salat tahajjud di waktu malam', { a0: 6.4, ad: 7.0, am: [8.6], tr0: 13.5, tm: [14.6], fs: 66, chip: 'سُورَةُ الْإِسْرَاءِ' });

// --- 2 /exploded-view : fi'l amr
scene(19.18, 31.42, { cut: 'glitch' });
line(19.2, 31.42, 'left:140px;top:130px;width:1640px', 'firman ini mengandung makna [suruhan]', { m: [21.4] });
arw(node('[وَمِنَ اللَّيْلِ فَتَهَجَّدْ]', 'left:0;right:0;top:250px;text-align:center;font-size:96px;color:#fff'), 22.9, 1.4, { marks: [23.9] });
(() => { const P = [['فَـ', 'huruf penghubung', '#fff', 24.7], ['تَهَجَّدْ', 'kerjakanlah tahajjud!', Y, 25.2]];
  P.forEach((p, i) => crd(`<div style="width:520px;height:260px;border:${i ? 6 : 3}px solid ${p[2]};border-radius:18px;text-align:center;padding-top:20px;background:${i ? 'rgba(233,242,58,.1)' : 'transparent'}"><div class="ar" style="font-size:110px;color:${p[2]}">${p[0]}</div><div style="font:800 30px Inter">${p[1]}</div></div>`, `left:${1200 - i * 700}px;top:470px`, p[3], 31.42, 'drop'));
  ['tahajjud!', 'tahajjud!', 'tahajjud!'].forEach((s, i) => crd(`<div style="font:900 ${60 + i * 14}px Inter;color:${Y}">${s}</div>`, `left:${180 + i * 520}px;top:800px`, 26.0 + i * .7, 28.2, 'scale', 'impact'));
  crd(`<div style="padding:14px 30px;background:${Y};color:#111;font:900 48px Inter;border-radius:10px">فِعْلُ أَمْرٍ = SURUHAN · PERINTAH</div>`, 'left:440px;top:800px', 28.2, 31.42, 'scale', 'stamp'); })();

// --- 3 /ladder : ke tempat yang terpuji
scene(31.42, 38.92, { cut: 'glitch' });
bgFill(31.42, 38.92, NIGHT);
sv(31.5, 38.92, [0, 1, 2, 3, 4].map(i => `<rect x="${360 + i * 230}" y="${820 - i * 120}" width="230" height="${120 + i * 120}" fill="${i === 4 ? 'rgba(233,242,58,.22)' : 'none'}" stroke="${Y}" stroke-width="3" data-f="${(.3 + i * .5).toFixed(1)}"/>`).join('') +
  `<g data-f="3.0"><circle cx="1720" cy="210" r="64" fill="${Y}"/><circle cx="1750" cy="190" r="58" fill="#0c1c4f"/></g>` + T(1720, 420, 'مَقَامًا مَحْمُودًا', { f: 3.4, ff: 'Amiri', fs: 54, fw: 400, c: Y }) + T(1720, 475, 'tempat yang terpuji', { f: 3.6, fs: 28, fw: 800 }), 'left:0;top:0', 1920, 1080, .5);
line(31.5, 38.92, 'left:140px;top:140px;width:900px', 'sembahyanglah tahajjud sebagai [ibadah tambahan]', { m: [33.6] });

// --- 4 /bar-chart : tidak harus ratusan rakaat
scene(38.92, 56.24, { cut: 'glitch' });
line(39.0, 49.2, 'left:140px;top:130px;width:1640px', 'ayat ini tidak menyuruh harus…', {});
(() => { const B = [['10 rakaat', 42.4, .22], ['100 rakaat', 43.6, .5], ['1000 rakaat', 44.8, .92]]; let g = `<path d="M240 860 H1700 M240 860 V260" stroke="#fff" stroke-width="3" data-d="2060"/>`;
  B.forEach(([s, t, h], i) => { const x = 360 + i * 280, d = t - 39.1; g += `<rect x="${x}" y="${860 - h * 560}" width="180" height="${h * 560}" rx="8" fill="#ff8a5c" data-f="${d}"/>` + T(x + 90, 900, s, { f: d, fs: 28, fw: 800 }); });
  g += T(1440, 330, 'diamalkan orang-orang saleh terdahulu', { f: 7.0, fs: 28, fw: 700, c: '#ffb38f' }) +
    `<rect x="1300" y="${860 - .12 * 560}" width="240" height="${.12 * 560}" rx="8" fill="${Y}" data-f="10.0"/>` + T(1420, 900, '2 rakaat', { f: 10.0, fs: 34, fw: 900, c: Y }) + T(1420, 740, 'SUDAH CUKUP ✓', { f: 10.4, fs: 40, fw: 900, c: Y });
  sv(39.1, 56.24, g, 'left:0;top:0', 1920, 1080, .5); })();
line(49.3, 56.24, 'left:140px;top:130px;width:1640px', 'kita orang awam pun · lebih dari itu → [alhamdulillah]', { fs: 34, w: 700, m: [54.4] });

// --- 5 /badge : golongan yang salat di tengah malam
scene(56.24, 70.58, { cut: 'glitch' });
sv(56.4, 70.58, `<path d="M960 220 L1180 300 V520 Q1180 720 960 820 Q740 720 740 520 V300 Z" fill="rgba(233,242,58,.12)" stroke="${Y}" stroke-width="8" data-d="1700"/>` + `<g data-f=".8"><circle cx="960" cy="440" r="70" fill="${Y}"/><circle cx="990" cy="420" r="62" fill="#000"/></g>` + T(960, 640, 'AHLI QIYAMUL LAIL', { f: 1.2, fs: 40, fw: 900, c: Y }), 'left:0;top:0', 1920, 1080, 1.0);
line(57.0, 70.58, 'left:140px;top:880px;width:1640px;text-align:center', 'termasuk golongan orang yang [salat di tengah malam]', { m: [61.0] });
crd(`<div style="font:800 34px Inter;color:#fff;border:3px solid #fff;border-radius:12px;padding:12px 22px">mau tambah rakaat? silakan, lebih baik</div>`, 'left:140px;top:300px', 63.9, 70.58, 'left');
crd(`<div style="font:800 34px Inter;color:#111;background:${Y};border-radius:12px;padding:12px 22px">dua rakaat pun lebih dari cukup ✓</div>`, 'left:1300px;top:300px', 67.7, 70.58, 'left');

// --- 6 /scripture : Adz-Dzariyat 18
scene(70.58, 90.38, { cut: 'glitch' });
doa(70.58, 90.38, 'QS. ADZ-DZARIYAT : 18', 'وَبِالْأَسْحَارِ هُمْ [يَسْتَغْفِرُونَ]', 'di waktu [sahur] mereka selalu beristighfar · meminta ampun · bertaubat kepada Allah', { a0: 77.6, ad: 2.4, am: [79.6], tr0: 82.7, tm: [83.6], fs: 100, chip: 'سُورَةُ الذَّارِيَاتِ' });
line(70.7, 77.4, 'left:260px;top:420px;width:1400px;text-align:center', 'Allah melanjutkan firman-Nya…', { c: '#7a1f1a', fs: 44 });

// --- 7 /night-sky : waktu terbaik bertaubat
scene(90.38, 105.74, { cut: 'glitch' });
bgFill(90.38, 105.74, NIGHT);
line(90.5, 105.74, 'left:140px;top:130px;width:1640px', 'firman ini mengandung [pujian] Allah kepada yang beristighfar di waktu sahur', { fs: 38, m: [93.6] });
sv(96.0, 105.74, `<path d="M200 820 H1720" stroke="#fff" stroke-width="3" data-d="1520"/>` + [['Isya', 200], ['tengah malam', 760], ['sahur', 1300], ['Subuh', 1720]].map(([s, x], i) => `<circle cx="${x}" cy="820" r="12" fill="#fff" data-f="${.2 + i * .3}"/>` + T(x, 880, s, { f: .3 + i * .3, fs: 30, fw: 800 })).join('') +
  `<rect x="760" y="640" width="960" height="160" rx="16" fill="none" stroke="${Y}" stroke-width="5" data-d="2240" data-del="4.4"/>` + T(1240, 735, 'WAKTU TERBAIK BERTAUBAT', { f: 4.8, fs: 46, fw: 900, c: Y }) +
  `<g data-f="1.0"><circle cx="1500" cy="330" r="70" fill="${Y}"/><circle cx="1532" cy="310" r="62" fill="#0c1c4f"/></g>`, 'left:0;top:0', 1920, 1080, .8);

// --- 8 /dossier : Nabi Ya'qub
scene(105.74, 114.14, { cut: 'glitch' });
entity(105.8, 114.14, { css: 'left:860px;top:170px', w: 920, h: 520, tag: 'KISAH · ISTIGHFAR DI WAKTU SAHUR', name: "Nabi Ya'qub 'alaihissalam", ar: 'يَعْقُوبُ عَلَيْهِ السَّلَامُ', rows: [['MEMINTAKAN', 'ampunan kepada Allah untuk anak-anaknya'], ['SEBAB', "perilaku mereka terhadap Nabi Yusuf 'alaihissalam"], ['DALAM AYAT', 'سَوْفَ أَسْتَغْفِرُ لَكُمْ رَبِّي']], blocks: [['QS. YUSUF', '98', Y], ['WAKTU', 'sahur', '#ebe6d6']], src: "QS. Yusuf 98 · tafsir: ditunda sampai waktu sahur" });
arw(node('[سَوْفَ أَسْتَغْفِرُ لَكُمْ رَبِّي]', 'left:140px;width:680px;top:330px;text-align:center;font-size:62px;color:#fff'), 106.6, 1.6, { marks: [108.6] });

// --- 9 /clock : jam berapa?
scene(114.14, 132.74, { cut: 'glitch' });
bgFill(114.14, 132.74, NIGHT);
line(114.2, 132.74, 'left:140px;top:140px;width:820px', 'menjelang subuh: [waktu khusus] yang disediakan Allah bagi yang bertaubat', { fs: 40, m: [117.0] });
(() => { const n = node(`<svg width="560" height="560" viewBox="-280 -280 560 560"><circle r="250" fill="rgba(255,255,255,.04)" stroke="#fff" stroke-width="8"/>${Array.from({ length: 12 }, (_, i) => `<text x="${Math.sin(i * Math.PI / 6) * 200}" y="${-Math.cos(i * Math.PI / 6) * 200 + 14}" text-anchor="middle" font-family="Inter" font-weight="900" font-size="40" fill="${[1, 2, 3].includes(i) ? Y : '#fff'}">${i || 12}</text>`).join('')}<line class="hr" x1="0" y1="0" x2="0" y2="-120" stroke="${Y}" stroke-width="14" stroke-linecap="round"/><line class="mn" x1="0" y1="0" x2="0" y2="-180" stroke="#fff" stroke-width="8" stroke-linecap="round"/><circle r="14" fill="${Y}"/></svg>`, 'left:1180px;top:240px');
  item(114.3, 132.74, n, (lt, t, it) => { n.style.opacity = clamp(lt / .3) * clamp((it.t1 - t) / .3); const h = t < 128.0 ? 12 + eo(lt / 1.5) * 0 : t < 129.1 ? 1 : t < 129.9 ? 2 : t < 130.7 ? 3 : 4.6; n.querySelector('.hr').setAttribute('transform', `rotate(${h * 30})`); n.querySelector('.mn').setAttribute('transform', `rotate(${(t * 220) % 360})`); }); })();
[['jam satu kah?', 128.0], ['jam dua kah?', 129.1], ['jam tiga kah?', 129.9], ['sebelum masuk Subuh', 130.7]].forEach(([s, t], i) => crd(`<div style="font:900 44px Inter;color:${i === 3 ? Y : '#fff'}">${s}</div>`, `left:140px;top:${470 + i * 90}px`, t, 132.74, 'left'));

// --- 10 /scripture : Ali 'Imran 17
scene(132.74, 144.72, { cut: 'glitch' });
doa(132.74, 144.72, "QS. ALI 'IMRAN : 17", 'الصَّابِرِينَ وَالصَّادِقِينَ وَالْقَانِتِينَ وَالْمُنْفِقِينَ وَ[الْمُسْتَغْفِرِينَ بِالْأَسْحَارِ]', null, { a0: 137.6, ad: 6.8, am: [143.4], fs: 62, h: 320, chip: 'سُورَةُ آلِ عِمْرَانَ' });

// --- 11 /layers : lima sifat
scene(144.72, 159.96, { cut: 'glitch' });
[['الصَّابِرِينَ', 'orang yang sabar', 145.0], ['الصَّادِقِينَ', 'orang yang benar · berjaya', 146.6], ['الْقَانِتِينَ', 'orang yang taat', 148.2], ['الْمُنْفِقِينَ', 'mengeluarkan harta di jalan Allah', 150.8], ['الْمُسْتَغْفِرِينَ بِالْأَسْحَارِ', 'beristighfar di waktu sahur', 154.8]].forEach(([a, s, t], i) =>
  crd(`<div style="width:${1100 + i * 90}px;height:118px;background:${i === 4 ? Y : 'rgba(233,242,58,.1)'};border:3px solid ${Y};color:${i === 4 ? '#111' : '#fff'};display:flex;align-items:center;justify-content:space-between;padding:0 40px;transform:skewX(-10deg)"><span style="transform:skewX(10deg);font:900 36px Inter">${String(i + 1).padStart(2, '0')} · ${s}</span><span class="ar" style="transform:skewX(10deg);font-size:46px">${a}</span></div>`, `left:${170 + i * 26}px;top:${170 + i * 145}px`, t, 159.96, 'drop'));

// --- 12 /callout : hebat & mulia = ampunan
scene(159.96, 189.1, { cut: 'hard' });
line(160.0, 189.1, 'left:140px;top:130px;width:1640px', 'ayat ini mengandung [peringatan] dari Allah', { m: [162.6] });
crd(`<div style="width:1500px;border:5px solid ${Y};border-radius:20px;padding:30px 40px;background:rgba(233,242,58,.08)"><div class="mono" style="font-size:24px;color:${Y}">💡 MAU JADI ORANG YANG HEBAT & MULIA?</div><div style="font:900 58px Inter;margin-top:14px">perbanyaklah <span class="mk">istighfar di waktu sahur</span></div></div>`, 'left:210px;top:260px', 164.4, 189.1, 'scale', 'beep');
seg('hebat & mulia = <br>[cukup ampunan Allah]', 173.1, 'left:210px;top:560px;width:1500px', { size: 66, iv: .03, marks: [176.0] });
line(180.4, 189.1, 'left:210px;top:820px;width:1500px', 'atas dosa-dosa · [sengaja] maupun [tidak sengaja] · itu sudah lebih dari cukup', { fs: 36, m: [182.4, 183.6] });

// --- 13 /search : tiga suara
scene(189.1, 197.6, { cut: 'glitch', light: 1 });
searchFind(189.1, 197.6, {
  q: 'ثلاثة أصوات يحبها الله صوت الديك', count: 4, pick: 0, shelfPick: 0, times: { type: .4, scan: 1.4, res: 2.1, click: 2.9, det: 3.2 },
  shelf: [['Al-Firdaus · ad-Dailami', 'الفردوس'], ['Tafsir ats-Tsa\'labi', 'الثعلبي'], ['Silsilah adh-Dha\'ifah', 'السلسلة الضعيفة'], ['Hayat al-Hayawan', 'حياة الحيوان'], ['Fath al-Qarib al-Mujib', 'فتح القريب']],
  results: [
    { title: 'Fath al-Qarib al-Mujib · j. 11 hlm. 310', tag: 'COCOK', ar: 'ثَلَاثَةُ أَصْوَاتٍ يُحِبُّهَا اللَّهُ: صَوْتُ الدِّيكِ وَصَوْتُ قَارِئِ الْقُرْآنِ', sub: 'teks lengkap: ayam · pembaca Al-Qur\'an · peminta ampun di waktu sahur' },
    { title: "Tafsir ats-Tsa'labi (al-Kasyf wa al-Bayan) · j. 8 hlm. 146", tag: 'DINUKIL', ar: 'وَصَوْتُ الْمُسْتَغْفِرِينَ بِالْأَسْحَارِ', sub: 'dinukil saat menafsirkan ayat istighfar di waktu sahur' },
    { title: "Al-Firdaus bi Ma'tsur al-Khithab · ad-Dailami", tag: 'RIWAYAT', ar: 'ثَلَاثَةُ أَصْوَاتٍ', sub: 'sumber asal riwayat hadis ini' },
    { title: "Silsilah al-Ahadits adh-Dha'ifah · no. 6326", tag: 'PENILAIAN', ar: 'مَوْضُوعٌ', sub: 'penilaian derajat sanad oleh al-Albani' }],
  det: { title: 'Fath al-Qarib al-Mujib', ar: 'فَتْحُ الْقَرِيبِ الْمُجِيبِ', rows: [['LETAK', 'jilid 11 · halaman 310'], ['RIWAYAT', 'ad-Dailami · al-Firdaus'], ['SUARA 1', 'ayam jantan berkokok'], ['SUARA 2', "pembaca Al-Qur'an"], ['SUARA 3', 'orang yang beristighfar di waktu sahur'], ['DERAJAT SANAD', "maudhu' · al-Albani, adh-Dha'ifah 6326"], ['MAKNA DIDUKUNG AYAT', "QS. Ali 'Imran 17 · QS. Adz-Dzariyat 18"]], quote: 'وَصَوْتُ الْمُسْتَغْفِرِينَ بِالْأَسْحَارِ' }
});
camTour(189.1, 197.6, { type: .4, scan: 1.4, res: 2.1, click: 2.9, det: 3.2 });

// --- 14 /soundwave : tiga suara yang dicintai
scene(197.6, 214.94, { cut: 'glitch' });
arw(node('ثَلَاثَةُ أَصْوَاتٍ يُحِبُّهَا اللَّهُ تَعَالَىٰ', 'left:0;right:0;top:120px;text-align:center;font-size:66px;color:#fff'), 197.7, 1.4);
(() => { const W = [['🐓', 'ayam jantan berkokok di waktu sahur', 206.9, '#ffb38f'], ['📖', "orang yang membaca Al-Qur'an", 208.7, Y], ['🤲', 'orang yang beristighfar di waktu sahur', 211.0, '#7fe0a0']];
  W.forEach(([e, s, t, c], i) => { const n = node(`<div style="display:flex;align-items:center;gap:30px;width:1640px"><div style="font-size:80px;width:110px;text-align:center">${e}</div><svg width="620" height="110" viewBox="0 0 620 110"><path class="wv" d="" fill="none" stroke="${c}" stroke-width="6" stroke-linecap="round"/></svg><div style="font:900 40px Inter;color:${c}">${s}</div></div>`, `left:140px;top:${330 + i * 190}px`, 'dimmable');
    item(t, 214.94, n, (lt, tt, it) => { n.style.opacity = clamp(lt / .3) * clamp((it.t1 - tt) / .3); let d = 'M0 55'; for (let x = 0; x <= 620; x += 10) { const a = Math.sin(x * .05 + tt * 9 + i) * Math.sin(x * .011 + i) * 42 * clamp(lt / .6); d += ` L${x} ${(55 + a).toFixed(1)}`; } n.querySelector('.wv').setAttribute('d', d); }); sfx(t, 'beep', .7); }); })();
line(202.6, 206.8, 'left:140px;top:240px;width:1640px;text-align:center', 'ujar Nabi kita: ada [tiga suara] yang dicintai Allah', { fs: 38, m: [204.6] });

// --- 15 /split-screen : ayam & keledai
scene(214.94, 233.62, { cut: 'glitch' });
line(215.0, 233.62, 'left:140px;top:120px;width:1640px', "dari Abu Hurairah radhiyallahu 'anhu, Baginda Rasulullah bersabda:", { fs: 34, w: 700 });
[['🐓', 'mendengar AYAM BERKOKOK', 'mintalah karunia · berdoa kepada Allah', 'ia melihat MALAIKAT', '#7fe0a0', 219.0], ['🫏', 'mendengar KELEDAI MERINGKIK', 'mintalah perlindungan kepada Allah', 'ia melihat SYAITAN', '#ff8a5c', 226.4]].forEach((p, i) =>
  crd(`<div style="width:780px;height:600px;border:5px solid ${p[4]};border-radius:18px;text-align:center;padding:30px;background:rgba(255,255,255,.03)"><div style="font-size:120px">${p[0]}</div><div style="font:900 40px Inter;color:${p[4]};margin-top:10px">${p[1]}</div><div style="font:800 34px Inter;margin-top:24px;line-height:1.3">${p[2]}</div><div class="mono" style="font-size:26px;color:${p[4]};margin-top:26px">karena ${p[3]}</div></div>`, `left:${140 + i * 860}px;top:220px`, p[5], 233.62, 'up', 'stamp'));
chip('SHAHIH AL-BUKHARI 3303 · SHAHIH MUSLIM 2729', 228.0, 'left:560px;top:880px', 233.62, Y);

// --- 16 /search : Sufyan ats-Tsauri
scene(233.62, 242.2, { cut: 'glitch', light: 1 });
searchFind(233.62, 242.2, {
  q: 'إن لله ريحا تهب وقت الأسحار تحمل الأذكار والاستغفار', count: 4, pick: 0, shelfPick: 0, times: { type: .4, scan: 1.4, res: 2.1, click: 2.9, det: 3.2 },
  shelf: [["Tafsir ats-Tsa'labi", 'الثعلبي'], ['Al-Bahr al-Madid', 'البحر المديد'], ['Ihya\' · al-Ghazali', 'الإحياء'], ['Masalik al-Abshar', 'مسالك الأبصار'], ['Tafsir al-Haddad', 'تفسير الحداد']],
  results: [
    { title: "Tafsir ats-Tsa'labi (al-Kasyf wa al-Bayan) · j. 8 hlm. 147", tag: 'COCOK', ar: 'إِنَّ لِلَّهِ رِيحًا يُقَالُ لَهَا الصَّبِيحَةُ تَهُبُّ وَقْتَ الْأَسْحَارِ', sub: 'perkataan Sufyan ats-Tsauri tentang angin waktu sahur' },
    { title: 'Tafsir al-Haddad · j. 2 hlm. 24', tag: 'DINUKIL', ar: 'تَحْمِلُ الْأَذْكَارَ وَالِاسْتِغْفَارَ إِلَى الْمَلِكِ الْجَبَّارِ', sub: 'membawa zikir & istighfar kepada Raja Yang Maha Perkasa' },
    { title: 'Al-Bahr al-Madid · Ibnu \'Ajibah · j. 1 hlm. 332', tag: 'TERKAIT', ar: 'وَإِلَى الْمُسْتَغْفِرِينَ بِالْأَسْحَارِ', sub: 'keutamaan orang yang beristighfar di waktu sahur' },
    { title: 'Masalik al-Abshar · al-\'Umari · j. 8 hlm. 142', tag: 'TERKAIT', ar: 'وَقْتُ السَّحَرِ', sub: 'penjelasan tentang waktu sahur' }],
  det: { title: 'Sufyan ats-Tsauri', ar: 'سُفْيَانُ الثَّوْرِيُّ', rows: [['NAMA LENGKAP', "Sufyan bin Sa'id ats-Tsauri"], ['WAFAT', 'Bashrah · 161 H'], ['STATUS', "perkataan ulama tabi'ut tabi'in · bukan hadis"], ['NAMA ANGIN', 'ash-Shabihah · bertiup waktu sahur'], ['YANG DIBAWA', 'zikir & istighfar'], ['DIBAWA KEPADA', 'al-Malik al-Jabbar · Raja Yang Maha Perkasa'], ['DINUKIL', "Tafsir ats-Tsa'labi · j. 8 hlm. 147"]], quote: 'تَحْمِلُ الْأَذْكَارَ وَالِاسْتِغْفَارَ' }
});
camTour(233.62, 242.2, { type: .4, scan: 1.4, res: 2.1, click: 2.9, det: 3.2 });

// --- 17 /wind : angin sahur membawa zikir
scene(242.2, 248.22, { cut: 'glitch' });
bgFill(242.2, 248.22, NIGHT);
(() => { const n = node(`<svg width="1920" height="1080">${[0, 1, 2, 3, 4, 5].map(i => `<path class="wd" data-i="${i}" d="M${-200 + i * 40} ${900 - i * 90} C 500 ${760 - i * 90}, 900 ${980 - i * 90}, 1500 ${600 - i * 100} S 1900 ${300 - i * 60}, 2100 ${200 - i * 40}" fill="none" stroke="${i % 2 ? '#7fd6ff' : Y}" stroke-width="5" stroke-linecap="round" stroke-dasharray="80 260"/>`).join('')}</svg>`, 'left:0;top:0');
  item(242.3, 248.22, n, (lt, t, it) => { n.style.opacity = clamp(lt / .3) * clamp((it.t1 - t) / .3); n.querySelectorAll('.wd').forEach(p => p.style.strokeDashoffset = -(lt * 420 + +p.dataset.i * 60)); }); sfx(242.4, 'whoosh', .9); })();
['ذِكْرٌ', 'اسْتِغْفَارٌ', 'ذِكْرٌ', 'اسْتِغْفَارٌ'].forEach((w, i) => { const n = node(`<div class="ar" style="font-size:54px;color:${i % 2 ? '#7fd6ff' : Y}">${w}</div>`, 'left:0;top:0'); item(242.6 + i * .7, 248.22, n, (lt, t, it) => { const u = clamp(lt / 3.6); n.style.opacity = clamp(lt / .3) * clamp((it.t1 - t) / .3); n.style.transform = `translate(${200 + u * 1400}px,${880 - u * 640 - i * 30}px)`; }); });
line(242.4, 248.22, 'left:140px;top:130px;width:1640px', 'Allah menciptakan satu [angin] yang berhembus di waktu sahur', { m: [244.4] });

// --- 18 /night-timeline : seruan sepanjang malam
scene(248.22, 316.76, { cut: 'glitch' });
bgFill(248.22, 316.76, NIGHT);
label('SUFYAN ATS-TSAURI · SERUAN SEPANJANG MALAM', 248.3, 'left:140px;top:130px', 316.76);
(() => { const S = [['tengah malam', 'wahai ahli ibadah, bangkitlah!', 'mereka bangkit & salat yang banyak', 248.3, '#fff'], ['separuh malam', 'wahai الْقَانِتِينَ, bangkitlah!', 'yang taat · salat sampai sahur', 262.4, '#7fd6ff'], ['waktu sahur', 'wahai yang beristighfar, bangkitlah!', 'yang memohon ampun · diampuni Allah', 274.6, Y], ['azan Subuh', 'bangunlah! jangan jadi orang lalai', 'masih tidur saat azan = lalai', 306.5, '#ff8a5c']];
  let g = `<path d="M200 300 H1720" stroke="#fff" stroke-width="4" data-d="1520"/>`;
  S.forEach(([a, b, c, t, col], i) => { const x = 200 + i * 506, d = t - 248.3; g += `<circle cx="${x}" cy="300" r="22" fill="${col}" data-f="${d}"/>` + T(x, 260, a, { f: d + .1, fs: 30, fw: 900, c: col, a: i === 0 ? 'start' : i === 3 ? 'end' : 'middle' }); });
  sv(248.3, 316.76, g, 'left:0;top:0', 1920, 1080, .8);
  S.forEach(([a, b, c, t, col], i) => { const n = node(`<div style="width:1540px;border-left:8px solid ${col};padding:14px 30px;background:rgba(0,0,0,.35)"><div style="font:900 44px Inter;color:${col}">"${b}"</div><div style="font:700 32px Inter;margin-top:8px">${c}</div></div>`, `left:190px;top:${400 + i * 150}px`, 'dimmable'); show(n, t + .4, 'left', 316.76); sfx(t + .4, 'click', .7); }); })();
line(282.0, 306.4, 'left:190px;top:1010px;width:1540px;text-align:center', 'panggilan Allah, disaksikan para malaikat: [saat ini yang meminta ampun akan diampuni]', { fs: 32, w: 800, m: [292.0] });

// --- 19 /checklist : kalau awal bangun
scene(316.76, 330.18, { cut: 'glitch' });
line(316.8, 330.18, 'left:140px;top:140px;width:1640px', 'kalau kita [awal bangun], kita sempat…', { fs: 52, m: [318.6] });
[['salat malam', 321.4], ["membaca Al-Qur'an", 323.4], ['beristighfar & bertaubat', 327.0]].forEach(([s, t], i) => crd(`<div style="display:flex;align-items:center;gap:24px"><div style="width:76px;height:76px;border-radius:12px;background:${Y};display:flex;align-items:center;justify-content:center;font:900 54px Inter;color:#111">✓</div><div style="font:900 56px Inter">${s}</div></div>`, `left:260px;top:${330 + i * 150}px`, t, 330.18, 'scale'));

// --- 20 /quote : wasiat Luqman
scene(330.18, 344.86, { cut: 'glitch' });
doa(330.18, 344.86, 'WASIAT LUQMAN AL-HAKIM KEPADA ANAKNYA', 'يَا بُنَيَّ لَا يَكُنِ [الدِّيكُ] أَكْيَسَ مِنْكَ', '"wahai anakku tercinta, janganlah ayam jantan itu [lebih bijak] daripada engkau"', { a0: 334.6, ad: 1.6, am: [336.2], tr0: 335.0, tm: [339.6], fs: 96, chip: 'TAFSIR AN-NASAFI · J. 1 HLM. 242' });

// --- 21 /versus : ayam berkokok, engkau tidur
scene(344.86, 353.34, { cut: 'glitch' });
[['🐓', 'IA BERKOKOK', 'di waktu sahur', Y, 344.9], ['😴', 'ENGKAU', 'masih saja tidur', '#ff8a5c', 346.6]].forEach((p, i) => crd(`<div style="width:740px;height:520px;border:5px solid ${p[3]};border-radius:18px;text-align:center;padding-top:50px"><div style="font-size:150px">${p[0]}</div><div style="font:900 60px Inter;color:${p[3]};margin-top:20px">${p[1]}</div><div style="font:800 40px Inter;margin-top:10px">${p[2]}</div></div>`, `left:${140 + i * 900}px;top:220px`, p[4], 353.34, 'up', 'stamp'));
const vs9 = node('<div style="font:900 70px Inter;color:#fff">VS</div>', 'left:905px;top:430px'); show(vs9, 346.0, 'scale', 353.34);

// --- 22 /poetry : syair merpati
scene(353.34, 382.72, { cut: 'glitch' });
bgFill(353.34, 382.72, NIGHT);
label('SYAIR YANG SANGAT INDAH · 🕊️', 353.4, 'left:160px;top:130px', 382.72);
(() => { const B = [['لَقَدْ هَتَفَتْ فِي جُنْحِ لَيْلٍ حَمَامَةٌ', 'عَلَى فَنَنٍ وَهْنًا وَإِنِّي لَنَائِمُ', 355.0], ['كَذَبْتُ وَبَيْتِ اللَّهِ لَوْ كُنْتُ عَاشِقًا', 'لَمَا سَبَقَتْنِي بِالْبُكَاءِ الْحَمَائِمُ', 361.8], ['وَأَزْعُمُ أَنِّي هَائِمٌ ذُو صَبَابَةٍ', 'لِرَبِّي فَلَا أَبْكِي وَتَبْكِي الْبَهَائِمُ', 368.0]];
  B.forEach(([a, b, t], i) => { arw(node(a, `left:960px;width:780px;top:${210 + i * 140}px;text-align:right;font-size:46px;color:#fff`), t, 2.6); arw(node(b, `left:160px;width:780px;top:${210 + i * 140}px;text-align:right;font-size:46px;color:${Y}`), t + 2.8, 2.6); }); })();
line(373.4, 382.72, 'left:160px;top:680px;width:1600px', 'merpati di atas dahan terus menangis karena [rindu] · sedangkan aku asyik dalam tidurku', { fs: 36, m: [378.0] });

// --- 23 /balance : mengaku cinta vs bukti
scene(382.72, 418.66, { cut: 'glitch' });
sv(382.8, 418.66, `<path d="M960 320 V780 M760 840 H1160" stroke="#fff" stroke-width="6" data-d="860"/><g data-f=".3"><path d="M600 380 L1320 460" stroke="#fff" stroke-width="6"/><path d="M600 380 L520 520 H680 Z" fill="rgba(233,242,58,.15)" stroke="${Y}" stroke-width="4"/><path d="M1320 460 L1240 600 H1400 Z" fill="rgba(255,138,92,.2)" stroke="#ff8a5c" stroke-width="4"/></g>` +
  T(600, 570, 'MENGAKU CINTA', { f: .6, fs: 36, fw: 900, c: Y }) + T(1320, 650, 'BUKTI?', { f: 22.0, fs: 46, fw: 900, c: '#ff8a5c' }), 'left:0;top:0', 1920, 1080, .6);
[['merpati menangis karena rindu kepada Allah', 382.8], ['bohong… seandainya aku benar-benar cinta, burung tak akan mendahuluiku menangis', 387.6], ['aku mengaku pecinta yang dahaga & rindu', 396.0], ['kenapa aku belum pandai menangis?', 404.8]].forEach(([s, t], i) => { const e = [387.6, 396.0, 404.8, 409.4][i]; line(t, e, 'left:140px;top:130px;width:1640px;text-align:center', s, { fs: 40 }); });
line(409.5, 418.66, 'left:140px;top:900px;width:1640px;text-align:center', 'mengaku cinta kepada Allah tanpa [bukti] = bohong', { fs: 46, m: [414.0] });
stamp('BUKTIKAN', 'left:1340px;top:740px', 414.4, 418.66);

// --- 24 /callout : ibadah sesuai syarak
scene(418.66, 437.38, { cut: 'glitch' });
crd(`<div style="width:1500px;border:5px solid ${Y};border-radius:20px;padding:30px 40px;background:rgba(233,242,58,.08)"><div class="mono" style="font-size:24px;color:${Y}">💡 NASIHAT YANG PALING PENTING</div><div style="font:900 56px Inter;margin-top:14px">ibadah kita <span class="mk">sesuai aturan syarak</span></div></div>`, 'left:210px;top:220px', 418.8, 437.38, 'scale', 'beep');
line(423.8, 437.38, 'left:210px;top:560px;width:1500px', 'inti sari segala ilmu = [mengetahui cara] mengerjakan ketaatan & ibadah kepada Allah', { fs: 44, m: [431.0] });

// --- 25 /flowchart : ucapan, perbuatan, yang ditinggalkan
scene(437.38, 475.7, { cut: 'glitch' });
line(437.4, 453.4, 'left:140px;top:130px;width:1640px', 'ibadah tidak selalu bisa setiap saat · ada [waktu tertentu] · ada aturan · ada prioritas', { fs: 38, m: [441.0] });
sv(453.4, 475.7, DEFS + [['ucapan', 0], ['perbuatan', 1], ['yang ditinggalkan', 2]].map(([s, i]) => BOX(140, 260 + i * 170, 440, 120, { s: '#fff', del: 4.8 + i * 1.6 }) + T(360, 332 + i * 170, s, { f: 5.0 + i * 1.6, fs: 36, fw: 800 }) + LN([[580, 320 + i * 170], [780, 490]], { s: Y, sw: 3, del: 5.2 + i * 1.6 })).join('') +
  BOX(800, 420, 460, 140, { s: Y, sw: 6, del: 0, fill: 'rgba(233,242,58,.12)' }) + T(1030, 505, 'SYARIAT ALLAH', { f: .3, fs: 40, fw: 900, c: Y }) +
  '<g data-f="10.5">' + LN([[1260, 450], [1460, 340]], { arrow: 1, s: '#2fae5b', sw: 5, del: 10.5 }) + '</g>' + BOX(1480, 270, 300, 110, { s: '#2fae5b', sw: 5, del: 10.7 }) + T(1630, 338, 'ibadah ✓', { f: 10.9, fs: 34, fw: 900, c: '#7fe0a0' }) +
  '<g data-f="19.7">' + LN([[1260, 530], [1460, 640]], { arrow: 1, s: '#ff8a5c', sw: 5, del: 19.7 }) + '</g>' + BOX(1480, 600, 300, 110, { s: '#ff8a5c', sw: 5, del: 19.9 }) + T(1630, 668, 'kalau tidak → DOSA', { f: 20.1, fs: 28, fw: 900, c: '#ff8a5c' }), 'left:0;top:0', 1920, 1080, .5);

// --- 26 /decision-matrix : boleh, tidak, baik, sangat baik
scene(475.7, 482.34, { cut: 'glitch' });
[['BOLEH', '#2fae5b', 477.9], ['TIDAK BOLEH', '#ff8a5c', 478.8], ['LEBIH BAIK', '#7fd6ff', 479.8], ['SANGAT BAIK', Y, 480.9]].forEach(([s, c, t], i) => crd(`<div style="width:760px;height:260px;border:5px solid ${c};border-radius:18px;display:flex;align-items:center;justify-content:center;font:900 66px Inter;color:${c}">${s}</div>`, `left:${180 + (i % 2) * 800}px;top:${200 + Math.floor(i / 2) * 300}px`, t, 482.34, 'scale', 'stamp'));
label('ATURAN-ATURAN IBADAH', 475.8, 'left:180px;top:140px', 482.34);

// --- 27 /iceberg : salat dengan pakaian curian
scene(482.34, 500.56, { cut: 'glitch' });
line(482.4, 500.56, 'left:140px;top:120px;width:1640px', 'contohnya salat dengan memakai [pakaian yang dicuri]', { m: [485.4] });
sv(486.0, 500.56, `<path d="M120 470 H1800" stroke="#4aa3ff" stroke-width="4" data-d="1680"/><path d="M820 470 L900 380 L960 410 L1030 360 L1100 470Z" fill="rgba(233,242,58,.15)" stroke="${Y}" stroke-width="4" data-d="600" data-del=".2"/>` + T(960, 320, 'zahirnya: ibadah', { f: .4, fs: 36, fw: 900, c: Y }) +
  `<path d="M820 470 L560 700 L760 900 L1180 920 L1380 700 L1100 470" fill="rgba(255,138,92,.14)" stroke="#ff8a5c" stroke-width="4" data-d="1500" data-del="2.0"/>` + T(960, 690, 'DOSA', { f: 2.4, fs: 80, fw: 900, c: '#ff8a5c' }) + T(960, 770, 'tidak sesuai cara & aturannya', { f: 8.0, fs: 32, fw: 800 }), 'left:0;top:0', 1920, 1080, .8);
line(494.0, 500.56, 'left:140px;top:960px;width:1640px;text-align:center', 'ladang pahala → [berubah menjadi dosa]', { fs: 40, m: [498.4] });

// --- 28 /timeline : tertidur, tertinggal Zuhur & Asar
scene(500.56, 527.24, { cut: 'glitch' });
line(500.6, 527.24, 'left:140px;top:120px;width:1640px', 'contoh lain: [tertinggal salat]', { fs: 52, m: [502.4] });
sv(503.4, 527.24, `<path d="M200 520 H1720" stroke="#fff" stroke-width="5" data-d="1520"/><rect x="300" y="470" width="1100" height="100" rx="14" fill="rgba(127,214,255,.15)" stroke="#7fd6ff" stroke-width="3" data-d="2400" data-del=".4" data-dur="2"/>` + T(850, 535, '😴 tertidur', { f: 1.0, fs: 40, fw: 900, c: '#7fd6ff' }) +
  [['Zuhur', 560, '✕', 1.6], ['Asar', 1080, '✕', 6.0], ['Maghrib', 1600, 'bangun', 2.2]].map(([s, x, m, d], i) => `<circle cx="${x}" cy="520" r="18" fill="${i === 2 ? Y : '#ff8a5c'}" data-f="${d}"/>` + T(x, 640, s, { f: d + .1, fs: 38, fw: 900, c: i === 2 ? Y : '#ff8a5c' }) + T(x, 450, m, { f: d + .2, fs: i === 2 ? 30 : 56, fw: 900, c: i === 2 ? Y : '#ff8a5c' })).join(''), 'left:0;top:0', 1920, 1080, .5);
crd(`<div style="border:5px solid ${Y};border-radius:16px;padding:20px 30px;font:900 46px Inter;background:rgba(233,242,58,.1)">WAJIB segera <span class="mk">mengqadha</span> kedua salat itu · bukan karena uzur</div>`, 'left:200px;top:760px', 513.0, 527.24, 'up', 'stamp');

// --- 29 /contrast : tanpa aturan syarak sia-sia
scene(527.24, 538.02, { cut: 'glitch' });
seg('ilmu & amal tanpa aturan syarak<br>= [sia-sia]', 527.3, 'left:140px;top:240px;width:1640px', { size: 74, iv: .025, marks: [533.6] });
line(534.4, 538.02, 'left:140px;top:560px;width:1640px', 'justru sebaliknya → mendapatkan dosa', { c: '#ff8a5c', fs: 46 });

// --- 30 /kinetic-type : ibda' binafsik
scene(538.02, 548.3, { cut: 'hard' });
arw(node('[ابْدَأْ بِنَفْسِكَ]', 'left:0;right:0;top:280px;text-align:center;font-size:160px;color:#fff'), 538.4, 1.6, { marks: [540.6] });
line(541.0, 548.3, 'left:140px;top:620px;width:1640px;text-align:center', 'mulailah dari [diri engkau sendiri] dalam segala sesuatu', { fs: 48, m: [544.6] });

// --- 31 /scripture : Al-Baqarah 42 & Al-'Ankabut 45
scene(548.3, 576.44, { cut: 'glitch' });
paper(548.3, 'left:160px;top:180px;width:1600px;height:330px', '', 576.44); paper(548.3, 'left:160px;top:560px;width:1600px;height:330px', '', 576.44);
label("QS. AL-BAQARAH : 42", 548.4, 'left:160px;top:130px', 576.44);
arw(node('وَلَا تَلْبِسُوا الْحَقَّ بِالْبَاطِلِ وَتَكْتُمُوا الْحَقَّ وَأَنْتُمْ تَعْلَمُونَ', 'left:220px;width:1480px;top:250px;text-align:center;font-size:58px;line-height:1.7;color:#151515'), 549.0, 3.0);
arw(node("إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ [الْفَحْشَاءِ وَالْمُنْكَرِ]", 'left:220px;width:1480px;top:630px;text-align:center;font-size:66px;line-height:1.7;color:#151515'), 556.6, 2.4, { marks: [559.4] });
chip("QS. AL-'ANKABUT : 45", 556.4, 'left:200px;top:820px', 576.44, '#7a5a12');
line(568.0, 576.44, 'left:160px;top:950px;width:1600px;text-align:center', 'agar ibadah kita semata-mata [hanya karena Allah]', { fs: 40, m: [572.6] });

// --- 32 penutup
scene(576.44, TOTAL, { cut: 'hard' });
mePol('left:200px;top:220px', 576.5, TOTAL, -4, 400);
arw(node('ابْدَأْ بِنَفْسِكَ', 'left:760px;top:220px;width:1100px;font-size:96px;color:' + Y + ';text-align:left'), 576.6, 1.0);
sub2('left:760px;top:600px', 577.4, TOTAL);

// ================================================================== JADWAL KODE VISUAL
[[0, 6.0, '/kinetic-type'], [6.0, 19.18, '/scripture'], [19.18, 31.42, '/exploded-view'], [31.42, 38.92, '/ladder'], [38.92, 56.24, '/bar-chart'], [56.24, 70.58, '/badge'], [70.58, 90.38, '/scripture'], [90.38, 105.74, '/night-sky'],
 [105.74, 114.14, '/dossier'], [114.14, 132.74, '/clock'], [132.74, 144.72, '/scripture'], [144.72, 159.96, '/layers'], [159.96, 189.1, '/callout'], [189.1, 197.6, '/search'], [197.6, 214.94, '/soundwave'], [214.94, 233.62, '/split-screen'],
 [233.62, 242.2, '/search'], [242.2, 248.22, '/wind'], [248.22, 316.76, '/night-timeline'], [316.76, 330.18, '/checklist'], [330.18, 344.86, '/quote'], [344.86, 353.34, '/versus'], [353.34, 382.72, '/poetry'], [382.72, 418.66, '/balance'],
 [418.66, 437.38, '/callout'], [437.38, 475.7, '/flowchart'], [475.7, 482.34, '/decision-matrix'], [482.34, 500.56, '/iceberg'], [500.56, 527.24, '/timeline'], [527.24, 538.02, '/contrast'], [538.02, 548.3, '/kinetic-type'], [548.3, 576.44, '/scripture'], [576.44, TOTAL, '/teaser']]
 .reduce((acc, [a, b, c]) => { if (!acc.m[c]) acc.m[c] = String(++acc.n).padStart(2, '0'); codeTag(a, b, acc.m[c], c); return acc; }, { n: 0, m: {} });
