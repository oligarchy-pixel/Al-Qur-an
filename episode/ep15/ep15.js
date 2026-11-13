// ================================================================== ADEGAN EPISODE 15 · Nusyuz, Khulu, Adab Bermasyarakat & 4 Jenis Riba
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


// ================================================================== EP 15 · Nusyuz, Khulu', Adab Bermasyarakat & 4 Jenis Riba
const vcard = (w, c, inner, bg = 'transparent') => `<div style="width:${w}px;border:4px solid ${c};border-radius:18px;padding:22px 26px;background:${bg}">${inner}</div>`;
const xcard = (e, s, t, t1, css, c = CR, mark = '✕') => crd(`<div style="width:500px;height:250px;border:4px solid ${c};border-radius:18px;padding:22px;background:rgba(255,138,92,.06)"><div style="display:flex;justify-content:space-between"><span style="font-size:70px">${e}</span><span style="font:900 60px Inter;color:${c}">${mark}</span></div><div style="font:900 32px Inter;margin-top:10px;line-height:1.2">${s}</div></div>`, css, t, t1, 'drop', 'stamp');
const tick = (s, t, t1, css, c = Y, m = '✓', fs = 50) => crd(`<div style="display:flex;align-items:center;gap:24px"><div style="width:78px;height:78px;flex:none;border-radius:12px;background:${c};display:flex;align-items:center;justify-content:center;font:900 50px Inter;color:#111">${m}</div><div style="font:900 ${fs}px Inter">${s}</div></div>`, css, t, t1, 'scale', 'tick');
const pill = (s, c, fg = '#111') => `<div style="font:900 40px Inter;color:${fg};background:${c};border-radius:12px;padding:10px 26px;display:inline-block">${s}</div>`;

// --- 01 /kinetic-type : pembuka
scene(0, 8.5, { cut: 'none' });
arw(node(BSM, 'left:140px;top:120px;width:1000px;font-size:58px;color:#fff;text-align:left'), .1, 1.0);
label('FILE 15 · MELANJUTKAN SURAH AL-BAQARAH', .4, 'left:140px;top:260px');
seg('Rumah Tangga,<br>Masyarakat & [Riba]', .9, 'left:140px;top:310px;width:1100px', { size: 96, iv: .04, marks: [3.2] });
line(5.2, 8.5, 'left:140px;top:620px;width:1050px', 'Allah berfirman di dalam [Al-Qur\'anul Karim]…', { fs: 40, m: [6.6] });
mePol('left:1300px;top:150px', .3, 8.5, 4, 400);
meTag(1.2, 8.5, 'وَأَحَلَّ اللَّهُ الْبَيْعَ');

// --- 02 /citation : An-Nisa 34
scene(8.5, 20.0, { cut: 'glitch' });
paper(8.6, 'left:160px;top:180px;width:1600px;height:460px', '', 20.0);
arw(node('وَاللَّاتِي تَخَافُونَ نُشُوزَهُنَّ [فَعِظُوهُنَّ] وَاهْجُرُوهُنَّ فِي الْمَضَاجِعِ وَاضْرِبُوهُنَّ', 'left:220px;width:1480px;top:240px;text-align:center;font-size:66px;line-height:1.8;color:#151515'), 8.8, 9.6, { marks: [14.0] });
chip("QS. AN-NISA' : 34", 9.0, 'left:160px;top:670px', 20.0, Y);
line(9.4, 20.0, 'left:160px;top:770px;width:1600px', 'kalau istri menampakkan [nusyuz] · durhaka kepada suami', { fs: 40, m: [12.0] });

// --- 03 /checklist : gelagat istri durhaka
scene(20.0, 37.7, { cut: 'glitch' });
line(20.1, 37.7, 'left:140px;top:130px;width:1640px', 'perempuan yang sudah jelas [menampakkan durhakanya]…', { fs: 44, m: [22.0] });
tick('kurang menghormati suami', 22.6, 37.7, 'left:220px;top:260px', CR, '!');
tick('bersuara lebih banyak', 24.8, 37.7, 'left:220px;top:390px', CR, '!');
tick('tinggi nada bicaranya kepada suami', 26.6, 37.7, 'left:220px;top:520px', CR, '!');
crd(pill('= gelagat istri yang durhaka', Y), 'left:220px;top:680px', 29.4, 37.7, 'scale', 'impact');
line(31.4, 37.7, 'left:220px;top:810px;width:1500px', 'bagaimana [suami yang takwa] menghadapinya?', { fs: 42, m: [34.5] });

// --- 04 /timeline : langkah bertahap
scene(37.7, 80.8, { cut: 'glitch' });
label('LANGKAH BERTAHAP SUAMI YANG TAKWA', 37.8, 'left:160px;top:130px', 80.8);
sv(37.8, 80.8, DEFS + `<path d="M200 430 H1720" stroke="#fff" stroke-width="5" data-d="1520" data-dur="2"/>` +
  [['01', 'NASIHATI', 'فَعِظُوهُنَّ', 300, 0, CG], ['02', 'pisah tidur', 'وَاهْجُرُوهُنَّ', 760, 4.0, CB], ['03', 'isyarat marah', 'وَاضْرِبُوهُنَّ', 1220, 14.8, Y], ['04', 'solusi terbaik', '', 1640, 33.0, '#fff']].map(([n, s, ar, x, d, c]) => `<circle cx="${x}" cy="430" r="34" fill="#000" stroke="${c}" stroke-width="5" data-f="${d}"/>` + T(x, 442, n, { f: d, fs: 28, fw: 900, c }) + T(x, 520, s, { f: d + .2, fs: 32, fw: 900, c }) + (ar ? T(x, 360, ar, { f: d + .3, ff: 'Amiri', fs: 42, fw: 700, c }) : '')).join(''), 'left:0;top:0', 1920, 1080, .6);
crd(vcard(1400, CB, `<div style="font:900 36px Inter;line-height:1.35">🛏️ beda kamar saat tidur · <span style="color:${CB}">suami di ruang tamu, istri di kamar</span></div>`), 'left:260px;top:620px', 47.6, 52.4, 'up', 'beep');
crd(vcard(1400, Y, `<div class="mono" style="font-size:24px;color:${Y}">MENURUT ULAMA TAFSIR</div><div style="font:900 36px Inter;margin-top:10px;line-height:1.3">"pukul" = misalnya dengan sapu tangan · <span class="mk">BUKAN untuk menyakiti</span> · hanya isyarat bahwa suami sangat marah</div>`, 'rgba(233,242,58,.06)'), 'left:260px;top:620px', 61.0, 70.6, 'up', 'impact');
crd(vcard(1400, '#fff', `<div style="font:900 36px Inter;line-height:1.35">dinasihati tak mempan · pisah tidur tak berubah → barulah pikirkan <span class="mk">cara & solusi terbaik</span></div>`), 'left:260px;top:620px', 70.7, 80.8, 'up', 'beep');

// --- 05 /spectrum : talak itu sangat jauh
scene(80.8, 86.6, { cut: 'glitch' });
line(80.9, 86.6, 'left:140px;top:150px;width:1640px', 'proses menuju [talak] itu sangat jauh · tidak sembarangan', { fs: 46, m: [82.0, 84.2] });
(() => { let g = `<defs><linearGradient id="tlk15" x1="0" x2="1"><stop offset="0" stop-color="${CG}"/><stop offset=".6" stop-color="${Y}"/><stop offset="1" stop-color="${CR}"/></linearGradient></defs><rect x="200" y="520" width="1520" height="36" rx="18" fill="url(#tlk15)" data-f=".1"/>`;
  [['nasihat', 260, CG], ['pisah tidur', 640, CG], ['isyarat', 1000, Y], ['solusi', 1300, Y], ['TALAK', 1660, CR]].forEach(([s, x, c], i) => g += `<circle cx="${x}" cy="538" r="14" fill="#000" stroke="${c}" stroke-width="4" data-f="${(.2 + i * .35).toFixed(2)}"/>` + T(x, 630, s, { f: .3 + i * .35, fs: 34, fw: 900, c }));
  g += T(960, 760, '← sangat jauh prosesnya →', { f: 3.6, fs: 40, fw: 900, c: '#fff' });
  sv(80.9, 86.6, g, 'left:0;top:0', 1920, 1080, .5); })();

// --- 06 /citation : fa in atha'nakum
scene(86.6, 105.7, { cut: 'glitch' });
paper(86.7, 'left:160px;top:180px;width:1600px;height:400px', '', 105.7);
arw(node('فَإِنْ أَطَعْنَكُمْ [فَلَا تَبْغُوا عَلَيْهِنَّ سَبِيلًا]', 'left:220px;width:1480px;top:260px;text-align:center;font-size:80px;line-height:1.8;color:#151515'), 87.6, 6.0, { marks: [92.0] });
chip("QS. AN-NISA' : 34", 88.0, 'left:160px;top:610px', 105.7, Y);
line(89.4, 97.7, 'left:160px;top:710px;width:1600px', 'jika istri sudah mulai taat → suami [tidak berhak lagi memarahinya]', { fs: 40, m: [95.0] });
crd(pill('aturan Al-Qur\'an untuk orang yang hendak takwa dalam perselisihan rumah tangga', Y), 'left:160px;top:820px;width:1600px', 97.8, 105.7, 'scale', 'impact');

// --- 07 /split-screen : suami terbaik vs suami bermasalah
scene(105.7, 125.2, { cut: 'glitch' });
crd(vcard(1640, CG, `<div style="font:900 44px Inter">🏆 suami terbaik = <span style="color:${CG}">yang paling baik terhadap istrinya</span></div>`, 'rgba(127,224,160,.06)'), 'left:140px;top:150px', 105.8, 125.2, 'up', 'stamp');
line(109.5, 125.2, 'left:140px;top:330px;width:1640px', 'sekarang gantian · yang jadi masalah adalah [suami]', { fs: 42, m: [111.0] });
crd(vcard(780, CG, `<div style="font:900 40px Inter;color:${CG}">👩 ISTRI</div><div style="font:900 34px Inter;margin-top:12px">baik ✓</div>`), 'left:140px;top:430px', 112.4, 125.2, 'left', 'beep');
crd(vcard(780, CR, `<div style="font:900 40px Inter;color:${CR}">👨 SUAMI</div><div style="font:900 34px Inter;margin-top:12px">tidak baik ✕ · menimbulkan sifat yang tidak disukai istri</div>`), 'left:1000px;top:430px', 113.6, 125.2, 'left', 'beep');
['😠 istri jadi tidak suka', '😤 istri marah', '💔 tidak lagi mencintai suami'].forEach((s, i) => crd(`<div style="font:900 34px Inter;color:${CR}">${s}</div>`, `left:${140 + i * 560}px;top:760px`, 118.0 + i * 1.8, 125.2, 'up', 'tick'));

// --- 08 /handwritten : Al-Qur'an memberi jalan terbaik
scene(125.2, 137.3, { cut: 'glitch' });
crd(`<div style="font:700 72px Kalam;color:#fff8d0;line-height:1.3">maka Al-Qur'anul Karim memberikan <span style="color:${Y}">jalan yang terbaik</span>…</div>`, 'left:200px;top:260px;width:1520px', 125.3, 137.3, 'up', 'paper');
crd(`<div style="display:flex;gap:16px;align-items:center;font:800 32px Inter;color:${Y}">📖 <span>ayat dibacakan…</span></div>`, 'left:200px;top:620px', 127.4, 137.3, 'fade', 'beep');
(() => { const n = node('<svg width="1520" height="140" viewBox="0 0 1520 140"><path class="wv" fill="none" stroke="#e9f23a" stroke-width="5"/></svg>', 'left:200px;top:700px');
  item(127.4, 137.3, n, (lt, t, it) => { n.style.opacity = clamp(lt / .4) * clamp((it.t1 - t) / .3); let d = 'M0 70'; for (let x = 0; x <= 1520; x += 20) d += ` L${x} ${70 + Math.sin(x / 45 + t * 5) * 40 * Math.sin(x / 1520 * Math.PI)}`; n.querySelector('.wv').setAttribute('d', d); }); })();

// --- 09 /flowchart : khulu'
scene(137.3, 172.5, { cut: 'glitch' });
sv(137.4, 172.5, DEFS +
  BOX(160, 140, 760, 230, { s: CR, sw: 5 }) + T(540, 200, 'istri tak lagi:', { f: .2, fs: 32, fw: 900, c: CR }) + T(540, 260, 'mencintai · menghormati · sayang', { f: 1.4, fs: 32, fw: 900 }) + T(540, 320, 'kepada suaminya', { f: 2.4, fs: 28, fw: 800 }) +
  BOX(1000, 140, 760, 230, { s: '#fff', sw: 4, del: 22.2 }) + T(1380, 200, 'karena ulah suami:', { f: 22.4, fs: 32, fw: 900, c: Y }) + T(1380, 260, 'akhlak · sifat · tanggung jawab', { f: 23.0, fs: 32, fw: 900 }) + T(1380, 320, 'yang tidak diberikan', { f: 24.0, fs: 28, fw: 800 }) +
  '<g data-f="10.0">' + LN([[540, 370], [540, 470]], { s: Y, sw: 5, arrow: 1 }) + '</g>' +
  BOX(260, 480, 560, 130, { s: Y, sw: 5, del: 10.2 }) + T(540, 535, 'usul ke WALI / HAKIM', { f: 10.4, fs: 32, fw: 900, c: Y }) + T(540, 582, 'minta cerai', { f: 11.0, fs: 28, fw: 800 }) +
  '<g data-f="14.4">' + LN([[820, 545], [1000, 545]], { s: Y, sw: 5, arrow: 1 }) + '</g>' +
  BOX(1010, 470, 560, 150, { s: CB, sw: 5, del: 14.6 }) + T(1290, 535, 'KHULU\'', { f: 14.8, fs: 46, fw: 900, c: CB }) + T(1290, 590, 'خُلْعٌ · istilah fikih', { f: 15.4, ff: 'Amiri', fs: 32, c: CB }),
  'left:0;top:0', 1920, 1080, .8);
crd(pill('✓ boleh mengusulkan hal yang demikian', CG), 'left:420px;top:720px', 152.5, 172.5, 'scale', 'impact');

// --- 10 /balance : hakim memutuskan · ganti mahar
scene(172.5, 181.6, { cut: 'glitch' });
line(172.6, 181.6, 'left:140px;top:140px;width:1640px', 'jika hakim memutuskan → laki-laki [mesti menceraikan]', { fs: 44, m: [174.5] });
(() => { const n = node(`<svg width="1400" height="520" viewBox="0 0 1400 520"><path d="M700 60 V440 M540 480 H860" stroke="#fff" stroke-width="6"/><g class="bm"><path d="M240 80 H1160" stroke="#fff" stroke-width="6"/><path d="M240 80 L150 240 H330 Z" fill="rgba(127,214,255,.15)" stroke="${CB}" stroke-width="4"/><text x="240" y="300" text-anchor="middle" font-family="Inter" font-weight="900" font-size="34" fill="${CB}">💍 CERAI</text><text x="240" y="350" text-anchor="middle" font-family="Inter" font-weight="800" font-size="26" fill="#fff">diputuskan hakim</text><path d="M1160 80 L1070 240 H1250 Z" fill="rgba(233,242,58,.15)" stroke="${Y}" stroke-width="4"/><text x="1160" y="300" text-anchor="middle" font-family="Inter" font-weight="900" font-size="34" fill="${Y}">💰 MAHAR</text><text x="1160" y="350" text-anchor="middle" font-family="Inter" font-weight="800" font-size="26" fill="#fff">dikembalikan seperti dulu</text></g></svg>`, 'left:260px;top:260px');
  item(175.8, 181.6, n, (lt, t, it) => { n.style.opacity = clamp(lt / .3) * clamp((it.t1 - t) / .3); n.querySelector('.bm').setAttribute('transform', `rotate(${Math.sin(lt * 2.2) * 4 * Math.exp(-lt * .6)} 700 80)`); }); sfx(175.8, 'impact', .6); })();
line(178.8, 181.6, 'left:140px;top:850px;width:1640px;text-align:center', 'itulah [aturan Al-Qur\'anul Karim]', { fs: 40, m: [180.0] });

// --- 11 /callout : minta cerai karena terpikat laki-laki lain
scene(181.6, 188.7, { cut: 'glitch' });
crd(`<div style="font:900 46px Inter;color:${CR}">✕ minta cerai karena <span style="text-decoration:underline">terpikat laki-laki lain</span></div>`, 'left:180px;top:220px', 181.7, 188.7, 'left', 'stamp');
crd(`<div style="width:1560px;border:5px solid ${CR};border-radius:20px;padding:30px 40px;background:rgba(255,138,92,.08)"><div class="mono" style="font-size:24px;color:${CR}">⚠ PERINGATAN</div><div style="font:900 58px Inter;margin-top:14px">haram mencium <span style="color:${CR}">bau surga</span></div></div>`, 'left:180px;top:420px', 184.5, 188.7, 'scale', 'impact');

// --- 12 /search : hadis Tsauban
scene(188.7, 202.6, { cut: 'glitch', light: 1 });
searchFind(188.7, 202.6, {
  q: 'فحرام عليها رائحة الجنة', count: 4, pick: 0, shelfPick: 0, times: { type: .4, scan: 1.4, res: 2.2, click: 3.0, det: 3.4 },
  shelf: [['Sunan Abi Dawud', 'سنن أبي داود'], ['Sunan at-Tirmidzi', 'سنن الترمذي'], ['Misykat al-Mashabih', 'مشكاة المصابيح'], ["Al-Mausu'ah al-Fiqhiyyah", 'الموسوعة الفقهية'], ['Sunan Ibni Majah', 'سنن ابن ماجه']],
  results: [
    { title: 'Sunan Abi Dawud · tahqiq al-Arna\'uth · j. 3 hlm. 543', tag: 'HADIS', ar: 'أَيُّمَا امْرَأَةٍ سَأَلَتْ زَوْجَهَا طَلَاقًا', sub: 'dari Tsauban radhiyallahu \'anhu' },
    { title: 'Misykat al-Mashabih · at-Tabrizi · no. 3279', tag: 'SHAHIH', ar: 'فَحَرَامٌ عَلَيْهَا رَائِحَةُ الْجَنَّةِ', sub: 'derajat: shahih' },
    { title: "Al-Mausu'ah al-Fiqhiyyah · j. 19 hlm. 242", tag: 'FIKIH', ar: 'وَيَقَعُ الْخُلْعُ', sub: 'pembahasan khulu\'' },
    { title: "Sunan Abi Dawud · 'Aun al-Ma'bud · j. 2 hlm. 235", tag: 'SYARAH', ar: 'فِي غَيْرِ مَا بَأْسٍ', sub: 'tanpa alasan yang dibenarkan' }],
  det: { title: 'Hadis Tsauban', ar: 'ثَوْبَانُ', rows: [['DIRIWAYATKAN', 'Abu Dawud · at-Tirmidzi · Ibnu Majah'], ['PERAWI SAHABAT', "Tsauban radhiyallahu 'anhu"], ['LAFAZ', 'أَيُّمَا امْرَأَةٍ سَأَلَتْ زَوْجَهَا طَلَاقًا'], ['SYARAT', 'فِي غَيْرِ مَا بَأْسٍ · tanpa alasan'], ['AKIBAT', 'haram atasnya bau surga'], ['BAB', "talak & khulu'"], ['DERAJAT', 'shahih (Misykat 3279)']], quote: 'فَحَرَامٌ عَلَيْهَا رَائِحَةُ الْجَنَّةِ' }
});
camTour(188.7, 202.6, { type: .4, scan: 1.4, res: 2.2, click: 3.0, det: 3.4 });

// --- 13 /mindmap : Al-Qur'an petunjuk segala urusan
scene(202.6, 233.2, { cut: 'glitch' });
sv(202.7, 233.2, `<circle cx="960" cy="520" r="150" fill="rgba(233,242,58,.08)" stroke="${Y}" stroke-width="6"/>` + T(960, 505, 'AL-QUR\'AN', { f: .2, fs: 40, fw: 900, c: Y }) + T(960, 555, 'petunjuk', { f: .4, fs: 30, fw: 800 }) +
  [['🏠 rumah tangga', 400, 260, 1.4], ['🍽️ makan & minum', 1520, 260, 3.2], ['👗 berpakaian', 340, 560, 4.6], ['✨ berhias', 1580, 560, 5.6], ['🤝 bermasyarakat', 960, 860, 7.2]].map(([s, x, y, d]) => `<path d="M960 520 L${x} ${y}" stroke="#fff" stroke-width="3" stroke-dasharray="8 8" data-f="${d}"/>` + `<rect x="${x - 190}" y="${y - 45}" width="380" height="90" rx="45" fill="#000" stroke="#fff" stroke-width="4" data-f="${d}"/>` + T(x, y + 12, s, { f: d + .1, fs: 32, fw: 900 })).join(''), 'left:0;top:0', 1920, 1080, .8);
crd(vcard(1640, Y, `<div style="font:900 38px Inter;line-height:1.3">ingin beriman & mencapai derajat takwa → <span class="mk">ambil pedoman dari Al-Qur'anul Karim</span></div>`, '#000'), 'left:140px;top:120px', 214.2, 226.9, 'down', 'impact');
crd(`<div style="text-align:center;background:#000;border:4px solid ${Y};border-radius:18px;padding:14px 30px"><div class="ar" style="font-size:64px;color:${Y}">هُدًى لِلْمُتَّقِينَ</div><div style="font:900 32px Inter">petunjuk bagi orang-orang yang takwa</div></div>`, 'left:560px;top:110px', 227.0, 233.2, 'scale', 'stamp');

// --- 14 /layers : ada masalah → kembali ke Al-Qur'an
scene(233.2, 240.2, { cut: 'glitch' });
[['😟 ada masalah', '#fff', 233.3], ['📖 kembali kepada Al-Qur\'an', Y, 235.0], ['🚪 jalan keluar · solusi paling baik', CG, 236.8]].forEach(([s, c, t], i) => crd(`<div style="width:${1000 + i * 200}px;border:4px solid ${c};border-radius:16px;padding:26px 30px;background:#000;font:900 46px Inter;color:${c}">${s}</div>`, `left:${460 - i * 100}px;top:${220 + i * 190}px`, t, 240.2, 'up', 'tick'));

// --- 15 /citation : Al-Hujurat 11
scene(240.2, 267.9, { cut: 'glitch' });
line(240.3, 244.9, 'left:160px;top:130px;width:1600px', 'contoh lagi: petunjuk dalam [pergaulan masyarakat]', { fs: 46, m: [242.0] });
paper(244.8, 'left:160px;top:210px;width:1600px;height:540px', '', 267.9);
arw(node('يَا أَيُّهَا الَّذِينَ آمَنُوا لَا يَسْخَرْ قَوْمٌ مِنْ قَوْمٍ عَسَىٰ أَنْ يَكُونُوا خَيْرًا مِنْهُمْ وَلَا نِسَاءٌ مِنْ نِسَاءٍ عَسَىٰ أَنْ يَكُنَّ خَيْرًا مِنْهُنَّ وَلَا تَلْمِزُوا أَنْفُسَكُمْ [وَلَا تَنَابَزُوا بِالْأَلْقَابِ]', 'left:220px;width:1480px;top:240px;text-align:center;font-size:52px;line-height:1.8;color:#151515'), 245.0, 18.6, { marks: [260.0] });
chip('QS. AL-HUJURAT : 11', 245.2, 'left:160px;top:780px', 267.9, Y);
line(264.4, 267.9, 'left:160px;top:870px;width:1600px', 'dalam bermasyarakat · Al-Qur\'an [memberi petunjuk]', { fs: 38, m: [266.0] });

// --- 16 /checklist : larangan Al-Hujurat 11
scene(267.9, 297.7, { cut: 'glitch' });
label('HAI ORANG-ORANG YANG BERIMAN, JANGANLAH…', 268.0, 'left:160px;top:130px', 297.7);
tick('mengolok-olok / merendahkan suatu kaum', 268.2, 297.7, 'left:200px;top:210px', CR, '✕', 42);
tick('perempuan merendahkan perempuan lain', 273.1, 297.7, 'left:200px;top:320px', CR, '✕', 42);
crd(`<div style="font:900 34px Inter;color:${Y};margin-left:102px">↳ barangkali yang direndahkan lebih baik daripada yang merendahkan</div>`, 'left:200px;top:420px', 276.8, 297.7, 'left', 'beep');
tick('saling mencela', 279.8, 297.7, 'left:200px;top:500px', CR, '✕', 42);
tick('memanggil dengan gelar / julukan yang tidak disukai', 282.6, 297.7, 'left:200px;top:610px', CR, '✕', 42);
crd(`<div style="text-align:center;border:4px solid ${Y};border-radius:18px;padding:14px 30px;background:#000"><div class="ar" style="font-size:60px;color:${Y}">وَلَا تَنَابَزُوا بِالْأَلْقَابِ</div><div style="font:800 28px Inter">kecuali gelar yang disenangi orang yang digelar</div></div>`, 'left:560px;top:760px', 290.6, 297.7, 'scale', 'stamp');

// --- 17 /citation : Al-Hujurat 12
scene(297.7, 305.9, { cut: 'glitch' });
paper(297.8, 'left:160px;top:200px;width:1600px;height:420px', '', 305.9);
arw(node('يَا أَيُّهَا الَّذِينَ آمَنُوا اجْتَنِبُوا كَثِيرًا مِنَ الظَّنِّ [إِنَّ بَعْضَ الظَّنِّ إِثْمٌ]', 'left:220px;width:1480px;top:260px;text-align:center;font-size:66px;line-height:1.8;color:#151515'), 297.9, 7.6, { marks: [302.6] });
chip('QS. AL-HUJURAT : 12', 298.2, 'left:160px;top:650px', 305.9, Y);

// --- 18 /infographic : 3 larangan
scene(305.9, 325.7, { cut: 'glitch' });
label('KALAU KITA HENDAK BERTAKWA, JAUHI…', 306.0, 'left:160px;top:130px', 325.7);
xcard('🤔', 'buruk sangka kepada orang lain · itu dosa', 306.1, 325.7, 'left:160px;top:220px');
xcard('🔍', 'وَلَا تَجَسَّسُوا · mencari-cari kesalahan orang', 310.8, 325.7, 'left:710px;top:220px');
xcard('🗣️', 'وَلَا يَغْتَبْ · mengghibah orang', 316.0, 325.7, 'left:1260px;top:220px');
line(321.2, 325.7, 'left:160px;top:560px;width:1600px', 'demikianlah kalau kita [hendak bertakwa] kepada Allah', { fs: 44, m: [323.4] });

// --- 19 /citation : Al-Baqarah 275–276
scene(325.7, 350.5, { cut: 'glitch' });
line(325.8, 332.0, 'left:160px;top:130px;width:1600px', 'bagaimana [mencari penghidupan] di alam dunia ini?', { fs: 46, m: [328.0] });
paper(331.9, 'left:160px;top:210px;width:1600px;height:440px', '', 350.5);
arw(node('وَأَحَلَّ اللَّهُ الْبَيْعَ [وَحَرَّمَ الرِّبَا] يَمْحَقُ اللَّهُ الرِّبَا وَيُرْبِي الصَّدَقَاتِ', 'left:220px;width:1480px;top:270px;text-align:center;font-size:70px;line-height:1.8;color:#151515'), 332.1, 8.8, { marks: [336.0] });
chip('QS. AL-BAQARAH : 275–276', 332.3, 'left:160px;top:680px', 350.5, Y);
line(341.2, 350.5, 'left:160px;top:780px;width:1600px', 'petunjuk bagi orang beriman · bagaimana mencari [sumber penghasilan & rezeki]', { fs: 38, m: [346.0] });

// --- 20 /split-screen : jual beli halal vs riba haram
scene(350.5, 373.8, { cut: 'glitch' });
crd(`<div style="width:780px;height:600px;border:5px solid ${CG};border-radius:20px;padding:34px;text-align:center;background:rgba(127,224,160,.05)"><div class="ar" style="font-size:56px;color:${CG}">وَأَحَلَّ اللَّهُ الْبَيْعَ</div><div style="font-size:110px;margin-top:10px">🏪</div><div style="font:900 52px Inter;color:${CG};margin-top:10px">JUAL BELI ✓</div><div style="font:800 32px Inter;margin-top:14px;line-height:1.35">perniagaan · perdagangan = sumber penghidupan di dunia</div></div>`, 'left:140px;top:200px', 354.3, 373.8, 'up', 'stamp');
crd(`<div style="width:780px;height:600px;border:5px solid ${CR};border-radius:20px;padding:34px;text-align:center;background:rgba(255,138,92,.05)"><div class="ar" style="font-size:56px;color:${CR}">وَحَرَّمَ الرِّبَا</div><div style="font-size:110px;margin-top:10px">🚫💸</div><div style="font:900 52px Inter;color:${CR};margin-top:10px">RIBA ✕</div><div style="font:800 32px Inter;margin-top:14px;line-height:1.35">Allah melarang keras mencari rezeki dengan cara riba</div></div>`, 'left:1000px;top:200px', 369.9, 373.8, 'up', 'stamp');

// --- 21 /bar-chart : riba dihancurkan, sedekah disuburkan
scene(373.8, 399.3, { cut: 'glitch' });
line(373.9, 399.3, 'left:140px;top:130px;width:1640px', 'يَمْحَقُ اللَّهُ الرِّبَا وَيُرْبِي الصَّدَقَاتِ', { fs: 50, m: [] });
(() => { const n = node(`<svg width="1640" height="640" viewBox="0 0 1640 640"><path d="M80 560 H1560" stroke="#fff" stroke-width="4"/><rect class="r" x="300" width="260" rx="10" fill="rgba(255,138,92,.25)" stroke="${CR}" stroke-width="4"/><rect class="s" x="1080" width="260" rx="10" fill="rgba(127,224,160,.3)" stroke="${CG}" stroke-width="4"/><text x="430" y="610" text-anchor="middle" font-family="Inter" font-weight="900" font-size="36" fill="${CR}">RIBA ↓ dihancurkan</text><text x="1210" y="610" text-anchor="middle" font-family="Inter" font-weight="900" font-size="36" fill="${CG}">SEDEKAH ↑ disuburkan</text></svg>`, 'left:140px;top:260px');
  item(376.5, 399.3, n, (lt, t, it) => { n.style.opacity = clamp(lt / .3) * clamp((it.t1 - t) / .3); const hr = 420 - 360 * eio(clamp((t - 377) / 5)), hs = 60 + 400 * eio(clamp((t - 383) / 4)); const r = n.querySelector('.r'), s = n.querySelector('.s'); r.setAttribute('y', 560 - hr); r.setAttribute('height', hr); s.setAttribute('y', 560 - hs); s.setAttribute('height', hs); }); })();
crd(vcard(620, CR, `<div style="font:900 32px Inter;line-height:1.3">riba hilangkan berkah · <span style="color:${CR}">tidak menguntungkan</span>, bahkan menghancurkan kita</div>`, '#000'), 'left:600px;top:260px', 386.5, 399.3, 'down', 'beep');

// --- 22 /iceberg : riba tapi makmur?
scene(399.3, 426.2, { cut: 'glitch' });
crd(vcard(1640, CR, `<div style="font:900 40px Inter">usaha dengan jalan riba → <span style="color:${CR}">pasti bangkrut · pasti ada hutang</span> · itu jaminan Allah</div>`, '#000'), 'left:140px;top:120px', 399.4, 426.2, 'down', 'impact');
sv(407.0, 426.2, `<defs><linearGradient id="sea15" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0c1c4f"/><stop offset="1" stop-color="#050b2a"/></linearGradient></defs><rect x="0" y="560" width="1920" height="520" fill="url(#sea15)" data-f=".1"/><path d="M0 560 H1920" stroke="${CB}" stroke-width="4" data-f=".1"/>` +
  `<path d="M760 560 L860 420 L960 360 L1060 430 L1160 560 Z" fill="rgba(233,242,58,.12)" stroke="${Y}" stroke-width="4" data-f=".4"/>` + T(960, 320, 'rezeki luas · hidup makmur', { f: .6, fs: 34, fw: 900, c: Y }) +
  `<path d="M760 560 L600 760 L700 960 L1220 960 L1340 760 L1160 560 Z" fill="rgba(255,138,92,.12)" stroke="${CR}" stroke-width="4" data-f="7.8"/>` + T(970, 730, 'Allah biarkan saja…', { f: 8.0, fs: 34, fw: 900, c: CR }) + T(970, 800, 'agar di akhirat sempurna', { f: 10.0, fs: 34, fw: 900, c: CR }) + T(970, 850, 'mendapatkan siksanya', { f: 10.4, fs: 34, fw: 900, c: CR }),
  'left:0;top:0', 1920, 1080, .8);
crd(pill('petunjuk Allah: jauhkan diri dari riba', Y), 'left:1300px;top:420px', 422.2, 426.2, 'scale', 'stamp');

// --- 23 /tree : 4 jenis riba
scene(426.2, 431.9, { cut: 'glitch' });
sv(426.3, 431.9, DEFS + BOX(710, 160, 500, 110, { s: Y, sw: 5 }) + T(960, 228, '4 JENIS RIBA', { f: .1, fs: 44, fw: 900, c: Y }) + T(960, 320, 'menurut ulama fikih', { f: .3, fs: 28, fw: 800 }) +
  [['01', 'RIBA FADL', 300], ['02', 'RIBA NASA\'', 740], ['03', 'RIBA YAD', 1180], ['04', 'RIBA QARDH', 1620]].map(([n, s, x], i) => '<g data-f="' + (.5 + i * .3) + '">' + LN([[960, 340], [x, 470]], { s: '#fff', sw: 3 }) + '</g>' + BOX(x - 200, 480, 400, 150, { s: '#fff', sw: 4, del: .6 + i * .3 }) + T(x, 540, n, { f: .7 + i * .3, fs: 30, c: Y, ff: 'DejaVu Sans Mono' }) + T(x, 595, s, { f: .7 + i * .3, fs: 38, fw: 900 })).join(''), 'left:0;top:0', 1920, 1080, .5);

// --- 24 /infographic : riba fadl & benda ribawi
scene(431.9, 459.5, { cut: 'glitch' });
label('01 · RIBA FADL', 432.0, 'left:160px;top:130px', 459.5);
crd(`<div style="text-align:left"><div class="ar" style="font-size:60px;color:${Y}">بِأَنْ يَزِيدَ أَحَدُ الْعِوَضَيْنِ</div><div style="font:900 38px Inter;margin-top:6px">lebih salah satu dari dua gantinya (tambahan)</div></div>`, 'left:160px;top:190px', 434.0, 459.5, 'left', 'stamp');
line(439.0, 459.5, 'left:160px;top:410px;width:1600px', 'khusus tentang [barang / benda ribawi]', { fs: 42, m: [441.0] });
[['🍚', 'makanan'], ['🍇', 'buah-buahan'], ['🥇', 'emas'], ['🥈', 'perak'], ['💧', 'air']].forEach(([e, s], i) => crd(`<div style="width:280px;height:220px;border:3px solid ${Y};border-radius:16px;text-align:center;padding-top:24px"><div style="font-size:76px">${e}</div><div style="font:900 32px Inter;margin-top:6px">${s}</div></div>`, `left:${160 + i * 330}px;top:500px`, 444.0 + i * 1.2, 459.5, 'up', 'tick'));
crd(pill('⚠ berjual beli dengan barang ini → berhati-hatilah', CR), 'left:160px;top:780px', 452.0, 459.5, 'scale', 'beep');

// --- 25 /diagram : contoh beras 10 kg ↔ 8 kg
scene(459.5, 476.8, { cut: 'glitch' });
label('CONTOH RIBA FADL', 459.6, 'left:160px;top:130px', 476.8);
sv(459.6, 476.8, DEFS + BOX(200, 220, 560, 300, { s: '#fff', sw: 5 }) + T(480, 330, '🌾 kita', { f: .3, fs: 40, fw: 900 }) + T(480, 430, 'beras 10 kg', { f: .5, fs: 52, fw: 900, c: Y }) +
  BOX(1160, 220, 560, 300, { s: '#fff', sw: 5, del: 1.4 }) + T(1440, 330, '🌾 kawan', { f: 1.6, fs: 40, fw: 900 }) + T(1440, 430, 'beras 8 kg', { f: 1.8, fs: 52, fw: 900, c: Y }) +
  '<g data-f="5.0">' + LN([[780, 330], [1140, 330]], { s: Y, sw: 5, arrow: 1 }) + LN([[1140, 420], [780, 420]], { s: Y, sw: 5, arrow: 1 }) + '</g>' + T(960, 300, 'ditukarkan', { f: 5.2, fs: 30, fw: 800, c: Y }),
  'left:0;top:0', 1920, 1080, .6);
crd(pill('✕ RIBA · salah satunya ada yang lebih', CR), 'left:560px;top:600px', 470.0, 476.8, 'scale', 'impact');
crd(`<div style="font:800 32px Inter;text-align:center;width:1600px">emas · perak · uang · buah · kacang · jagung · anggur → sama juga</div>`, 'left:160px;top:740px', 472.4, 476.8, 'up', 'tick');

// --- 26 /sketchnotes : riba nasa'
scene(476.8, 509.2, { cut: 'glitch' });
label('02 · RIBA NASA\'', 476.9, 'left:160px;top:130px', 509.2);
crd(`<div style="font:900 40px Inter">menunda salah satu dari dua gantinya ⏳</div>`, 'left:160px;top:190px', 478.0, 509.2, 'left', 'stamp');
crd(`<div style="width:760px;border:3px dashed #fff;border-radius:30px 30px 30px 4px;padding:24px 30px;font:700 40px Kalam;color:#fff8d0">"aku tukar berasku 10 kilo dengan berasmu ya…"</div>`, 'left:160px;top:330px', 488.5, 509.2, 'up', 'whoosh');
crd(`<div style="width:760px;border:3px dashed ${Y};border-radius:30px 30px 4px 30px;padding:24px 30px;font:700 40px Kalam;color:${Y}">"berasmu kuambil dulu… <u>aku tempo dulu</u>, nanti kukasih berasku"</div>`, 'left:1000px;top:520px', 494.0, 509.2, 'up', 'whoosh');
crd(pill('✕ menunda pertukaran, waktu tidak tentu = RIBA NASA\'', CR), 'left:160px;top:820px', 503.3, 509.2, 'scale', 'impact');

// --- 27 /blueprint : riba yad
scene(509.2, 531.2, { cut: 'glitch' });
show(node('', 'left:140px;top:120px;width:1640px;height:820px', 'bp'), 509.3, 'fade', 531.2);
label('03 · RIBA YAD', 509.4, 'left:180px;top:150px', 531.2);
crd(`<div><div class="ar" style="font-size:56px;color:#fff">بِأَنْ يُفَارِقَ قَبْلَ الْقَبْضِ</div><div style="font:900 36px Inter;margin-top:6px">berpisah sebelum serah terima</div></div>`, 'left:180px;top:210px', 509.6, 531.2, 'left', 'stamp');
sv(514.3, 531.2, DEFS + BOX(300, 520, 440, 200, { s: '#fff', sw: 4 }) + T(520, 600, '🌾 beras A', { f: .2, fs: 36, fw: 900 }) + T(520, 660, 'sekian kg', { f: .4, fs: 30, fw: 800 }) +
  BOX(1180, 520, 440, 200, { s: '#fff', sw: 4, del: .6 }) + T(1400, 600, '🌾 beras B', { f: .8, fs: 36, fw: 900 }) + T(1400, 660, 'sekian kg · sama', { f: 1.0, fs: 30, fw: 800 }) +
  `<path d="M760 620 H1160" stroke="${CR}" stroke-width="5" stroke-dasharray="14 12" data-f="4.0"/>` + T(960, 600, 'serah terima ✕', { f: 4.2, fs: 32, fw: 900, c: CR }) + T(960, 680, 'sudah ditinggalkan', { f: 4.6, fs: 28, fw: 800, c: CR }),
  'left:0;top:0', 1920, 1080, .6);

// --- 28 /venn : benda ribawi vs bukan
scene(531.2, 550.7, { cut: 'glitch' });
line(531.3, 550.7, 'left:140px;top:130px;width:1640px', 'mesti ada barang yang mengandung [ribawi]…', { fs: 42, m: [533.0] });
sv(531.4, 550.7, `<circle cx="620" cy="560" r="300" fill="rgba(255,138,92,.08)" stroke="${CR}" stroke-width="5" data-f=".2"/><circle cx="1300" cy="560" r="300" fill="rgba(127,224,160,.08)" stroke="${CG}" stroke-width="5" data-f="3.0"/>` +
  T(620, 380, 'BENDA RIBAWI', { f: .4, fs: 36, fw: 900, c: CR }) + ['🍚 makanan', '🍇 buah-buahan', '🥇 emas · 🥈 perak', '💧 air'].map((s, i) => T(620, 470 + i * 70, s, { f: .8 + i * .4, fs: 32, fw: 900 })).join('') +
  T(1300, 380, 'TIDAK RIBAWI ✓', { f: 3.2, fs: 36, fw: 900, c: CG }) + T(1300, 480, '👕 1 baju ↔ 2 baju', { f: 3.6, fs: 34, fw: 900 }) + T(1300, 540, 'ditukar → tidak apa-apa', { f: 7.0, fs: 28, fw: 800, c: CG }) + T(1300, 640, '🧱 barang bangunan', { f: 10.2, fs: 34, fw: 900 }) + T(1300, 700, 'tidak apa-apa', { f: 13.0, fs: 28, fw: 800, c: CG }),
  'left:0;top:0', 1920, 1080, .6);

// --- 29 /cycle : riba qardh
scene(550.7, 580.7, { cut: 'glitch' });
label('04 · RIBA QARDH · RIBA HUTANG', 550.8, 'left:160px;top:130px', 580.7);
crd(`<div style="text-align:center;border:4px solid ${Y};border-radius:18px;padding:14px 30px;background:#000"><div class="ar" style="font-size:58px;color:${Y}">كُلُّ قَرْضٍ جَرَّ مَنْفَعَةً لِلْمُقْرِضِ</div><div style="font:800 28px Inter">tiap hutang yang ada manfaat bagi yang menghutangi · termasuk bunga</div></div>`, 'left:300px;top:190px', 553.0, 580.7, 'scale', 'stamp');
crd(`<div style="font:900 30px Inter;color:${CR}">⚠ ini yang banyak kita lakukan</div>`, 'left:160px;top:400px', 552.4, 562.0, 'left', 'beep');
sv(562.2, 580.7, DEFS + [['💵 menghutangi Rp1 juta', 560, 520, 0], ['🛵 kendaraannya kita pakai', 1360, 520, 3.0], ['➕ manfaat bagi pemberi hutang', 1360, 800, 9.0], ['✕ RIBA', 560, 800, 14.4]].map(([s, x, y, d], i) => `<rect x="${x - 290}" y="${y - 55}" width="580" height="110" rx="55" fill="#000" stroke="${i === 3 ? CR : '#fff'}" stroke-width="5" data-f="${d}"/>` + T(x, y + 12, s, { f: d + .1, fs: 34, fw: 900, c: i === 3 ? CR : '#fff' })).join('') +
  '<g data-f="2.8">' + LN([[850, 520], [1060, 520]], { s: Y, sw: 5, arrow: 1 }) + '</g><g data-f="8.8">' + LN([[1360, 575], [1360, 735]], { s: Y, sw: 5, arrow: 1 }) + '</g><g data-f="14.2">' + LN([[1060, 800], [860, 800]], { s: Y, sw: 5, arrow: 1 }) + '</g>' +
  T(1560, 640, '(misal sebagai jaminan)', { f: 4.4, fs: 26, fw: 800, c: Y }), 'left:0;top:0', 1920, 1080, .6);

// --- 30 /teaser : penutup
scene(580.7, TOTAL, { cut: 'hard' });
mePol('left:200px;top:200px', 580.8, TOTAL, -4, 400);
arw(node('وَأَحَلَّ اللَّهُ الْبَيْعَ [وَحَرَّمَ الرِّبَا]', 'left:760px;top:180px;width:1000px;text-align:right;font-size:64px;color:#fff'), 581.0, 6.5, { marks: [585.5] });
crd(`<div style="font:900 38px Inter;line-height:1.35">Allah menghalalkan jual beli · <span class="mk">mengharamkan riba</span></div>`, 'left:760px;top:320px;width:1000px', 588.8, TOTAL, 'left', 'tick');
sub2('left:760px;top:540px', 589.6, TOTAL);

// ================================================================== JADWAL KODE VISUAL
[[0, 8.5, '/kinetic-type'], [8.5, 20.0, '/citation'], [20.0, 37.7, '/checklist'], [37.7, 80.8, '/timeline'], [80.8, 86.6, '/spectrum'], [86.6, 105.7, '/citation'], [105.7, 125.2, '/split-screen'], [125.2, 137.3, '/handwritten'],
 [137.3, 172.5, '/flowchart'], [172.5, 181.6, '/balance'], [181.6, 188.7, '/callout'], [188.7, 202.6, '/search'], [202.6, 233.2, '/mindmap'], [233.2, 240.2, '/layers'], [240.2, 267.9, '/citation'], [267.9, 297.7, '/checklist'],
 [297.7, 305.9, '/citation'], [305.9, 325.7, '/infographic'], [325.7, 350.5, '/citation'], [350.5, 373.8, '/split-screen'], [373.8, 399.3, '/bar-chart'], [399.3, 426.2, '/iceberg'], [426.2, 431.9, '/tree'], [431.9, 459.5, '/infographic'],
 [459.5, 476.8, '/diagram'], [476.8, 509.2, '/sketchnotes'], [509.2, 531.2, '/blueprint'], [531.2, 550.7, '/venn'], [550.7, 580.7, '/cycle'], [580.7, TOTAL, '/teaser']]
 .reduce((acc, [a, b, c]) => { if (!acc.m[c]) acc.m[c] = String(++acc.n).padStart(2, '0'); codeTag(a, b, acc.m[c], c); return acc; }, { n: 0, m: {} });
