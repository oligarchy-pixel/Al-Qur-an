// ================================================================== ADEGAN EPISODE 06 · Makna Bismillah & Alhamdulillah
const BSM = 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ';
const HMD = 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ';
function meTag(t0, t1, topik) { const n = node(`<div style="width:430px;background:#141414;border:2px solid ${Y};padding:18px 22px">
  <div class="mono" style="font-size:16px;color:${Y}">● PENYAMPAI KAJIAN</div><div style="font:800 34px Inter;margin-top:6px">@alurziyadahku</div>
  <div class="mono" style="font-size:15px;color:#eee;margin-top:8px">TOPIK: <span class="ar" style="font-size:24px;color:#fff">${topik}</span></div></div>`, 'left:1270px;top:720px'); show(n, t0, 'left', t1); sfx(t0, 'beep', .5); }
// kartu makna: nomor besar + istilah Arab + terjemah
function makna(t0, t1, no, ar, lat, desc, dT, o = {}) {
  const n = node(`<div style="width:1640px;display:flex;align-items:center;gap:50px">
    <div style="flex:none;width:250px;height:250px;border-radius:50%;border:8px solid ${Y};display:flex;flex-direction:column;align-items:center;justify-content:center"><div class="mono" style="font-size:24px;color:${Y}">MAKNA</div><div style="font:900 120px Inter;line-height:1">${no}</div></div>
    <div><div class="ar" style="font-size:110px;font-weight:700;text-align:left;line-height:1.4">${ar}</div><div class="mono" style="font-size:30px;color:${Y};margin-top:4px">${lat}</div></div></div>`, `left:140px;top:${o.top || 200}px`, 'dimmable');
  show(n, t0, 'left', t1); sfx(t0, 'stamp', .8);
  if (desc) kin(node('', `left:140px;top:${(o.top || 200) + 330}px;width:1640px;font:800 52px Inter;color:#fff`), desc, dT || t0 + 1.2, { iv: .03, marks: o.marks || [], t1 });
}

// --- 0 pembuka
scene(0, 11.46, { cut: 'none' });
label('FILE 06 · LANJUTAN KAJIAN', .3, 'left:140px;top:150px');
seg('Makna<br>[Bismillah]', .5, 'left:140px;top:200px;width:1000px', { size: 120, iv: .05, marks: [2.0] });
arw(node(BSM, 'left:140px;top:500px;width:1000px;font-size:74px;color:' + Y + ';text-align:left'), 4.2, 2.4);
kin(node('', 'left:140px;top:650px;width:1000px;font:700 38px Inter;color:#fff'), "ayat pertama Al-Fatihah · mazhab [Imam asy-Syafi'i]", 7.5, { iv: .03, marks: [9.4] });
mePol('left:1300px;top:150px', .4, 11.46, 4, 400);
meTag(2.0, 11.46, 'مَعَانِي الْبَسْمَلَةِ');

// --- 1 /diagram : arti & أبدأ
scene(11.46, 24.6, { cut: 'glitch' });
arw(node(BSM, 'left:0;right:0;top:150px;text-align:center;font-size:96px;color:#fff'), 11.6, 1.8);
kin(node('', 'left:140px;top:330px;width:1640px;font:800 46px Inter;color:#fff;text-align:center'), 'dengan nama Allah yang [Maha Pengasih] lagi [Maha Penyayang]', 12.2, { iv: .025, marks: [14.0, 15.2] });
sv(15.8, 24.6, DEFS + `<circle cx="560" cy="650" r="120" fill="rgba(233,242,58,.12)" stroke="${Y}" stroke-width="6" data-d="760"/>` + T(560, 690, 'بِـ', { f: .2, ff: 'Amiri', fs: 130, fw: 400, c: Y }) +
  LN([[680, 650], [960, 650]], { arrow: 1, s: Y, sw: 5, del: .6 }) + BOX(980, 560, 420, 180, { s: '#fff', del: .9 }) + T(1190, 650, 'أَبْدَأُ', { f: 1.1, ff: 'Amiri', fs: 80, fw: 400 }) + T(1190, 715, '"aku memulai"', { f: 1.3, fs: 30, c: Y }) +
  T(960, 880, 'memulai pekerjaan · memulai segala sesuatu', { f: 4.0, fs: 36, fw: 800 }), 'left:0;top:0', 1920, 1080, .6);

// --- 2 /mindmap : banyak makna
scene(24.6, 29.08, { cut: 'glitch' });
(() => { const M = ['التَّبَرُّكُ', 'التَّعْظِيمُ', 'اللُّجُوءُ إِلَى اللَّهِ', 'الْإِقْرَارُ بِالْأُلُوهِيَّةِ', 'الِاسْتِعَانَةُ بِاللَّهِ', 'طَرْدُ الشَّيْطَانِ'];
  let g = `<ellipse cx="960" cy="560" rx="250" ry="110" fill="rgba(233,242,58,.12)" stroke="${Y}" stroke-width="5" data-d="1200"/>` + T(960, 585, 'بِسْمِ اللَّهِ', { f: .1, ff: 'Amiri', fs: 80, fw: 400, c: Y });
  M.forEach((m, i) => { const a = -Math.PI / 2 + i * Math.PI / 3, x = 960 + Math.cos(a) * 640, y = 560 + Math.sin(a) * 360, d = .3 + i * .25; g += LN([[960 + Math.cos(a) * 250, 560 + Math.sin(a) * 110], [x, y]], { s: '#fff', sw: 3, del: d }) + BOX(x - 190, y - 55, 380, 110, { s: '#fff', del: d + .2 }) + T(x, y + 16, m, { f: d + .3, ff: 'Amiri', fs: 40, fw: 400 }); });
  sv(24.7, 29.08, g, 'left:0;top:0', 1920, 1080, .5); })();
label('BANYAK MAKNA YANG TERKANDUNG', 24.7, 'left:140px;top:100px');

// --- 3 makna 01 : tabarruk
scene(29.08, 38.56, { cut: 'hard' });
makna(29.1, 38.56, '01', 'التَّبَرُّكُ', 'TABARRUK BISMILLAH', 'mengambil [berkah] dengan nama Allah', 31.6, { marks: [33.0] });

// --- 4 /split-screen : bismillah vs billah
scene(38.56, 49.26, { cut: 'glitch' });
seg('Kenapa dengan [nama] Allah?<br>Kenapa tidak langsung dengan Allah?', 38.6, 'left:140px;top:140px;width:1640px', { size: 62, iv: .025, marks: [40.0] });
[['بِسْمِ اللَّهِ', 'dengan nama Allah', Y, 41.6], ['بِاللَّهِ', 'dengan Allah', '#fff', 43.2]].forEach((p, i) => { const n = node(`<div style="width:780px;height:420px;border:5px solid ${p[2]};border-radius:18px;text-align:center;padding-top:50px;background:rgba(255,255,255,.03)"><div class="ar" style="font-size:130px;color:${p[2]}">${p[0]}</div><div style="font:800 40px Inter;margin-top:10px">${p[1]}</div></div>`, `left:${140 + i * 860}px;top:400px`, 'dimmable'); show(n, p[3], 'up', 49.26); sfx(p[3], 'stamp', .6); });
const vsx = node('<div style="font:900 70px Inter;color:#ff8a5c">VS</div>', 'left:905px;top:570px'); show(vsx, 43.0, 'scale', 49.26);
kin(node('', 'left:140px;top:870px;width:1640px;font:800 40px Inter;color:#fff;text-align:center'), 'para ulama menjawab dengan [beberapa jawaban]', 45.7, { iv: .03, marks: [47.6] });

// --- 5 /flowchart : jawaban 1 sumpah vs tabarruk
scene(49.26, 61.0, { cut: 'glitch' });
label('JAWABAN 01 · MEMBEDAKAN SUMPAH & TABARRUK', 49.3, 'left:140px;top:140px');
sv(52.2, 61.0, DEFS + BOX(140, 300, 440, 150, { s: '#fff' }) + T(360, 395, 'بِاللَّهِ', { f: .2, ff: 'Amiri', fs: 80, fw: 400 }) +
  LN([[580, 340], [800, 260]], { arrow: 1, s: '#fff', sw: 4, del: .6 }) + BOX(820, 190, 520, 120, { s: '#fff', del: .8 }) + T(1080, 265, 'dengan Allah', { f: 1.0, fs: 40, fw: 800 }) +
  LN([[580, 410], [800, 490]], { arrow: 1, s: '#ff8a5c', sw: 4, del: 3.0 }) + BOX(820, 430, 520, 120, { s: '#ff8a5c', del: 3.2 }) + T(1080, 505, 'demi Allah (sumpah)', { f: 3.4, fs: 40, fw: 800, c: '#ff8a5c' }) +
  BOX(140, 690, 440, 150, { s: Y, sw: 6, del: 4.8 }) + T(360, 785, 'بِسْمِ اللَّهِ', { f: 5.0, ff: 'Amiri', fs: 80, fw: 400, c: Y }) +
  LN([[580, 765], [800, 765]], { arrow: 1, s: Y, sw: 5, del: 5.4 }) + BOX(820, 705, 520, 120, { s: Y, sw: 6, del: 5.6 }) + T(1080, 780, 'tabarruk · bukan sumpah', { f: 5.8, fs: 40, fw: 800, c: Y }), 'left:0;top:0', 1920, 1080, .5);
stamp('BEDA', 'left:1480px;top:560px', 58.0, 61.0, Y);

// --- 6 /layers : jawaban 2 nama saja berkah, apalagi Allah
scene(61.0, 82.7, { cut: 'glitch' });
label('JAWABAN 02', 61.1, 'left:140px;top:140px');
[['dengan NAMA Allah saja', 'sudah mendatangkan berkah', 'rgba(233,242,58,.14)', Y, 62.6], ['apalagi dengan ALLAH', 'otomatis mendapatkan berkah', '#e9f23a', '#111', 66.4]].forEach((p, i) => { const n = node(`<div style="width:1300px;height:170px;background:${p[2]};border:4px solid ${Y};color:${p[3]};display:flex;flex-direction:column;justify-content:center;padding-left:60px;transform:skewX(-10deg)"><div style="font:900 56px Inter;transform:skewX(10deg)">${p[0]}</div><div style="font:700 34px Inter;transform:skewX(10deg)">${p[1]}</div></div>`, `left:${210 + i * 120}px;top:${260 + i * 220}px`, 'dimmable'); show(n, p[4], 'drop', 82.7); sfx(p[4], 'click', .7); });
kin(node('', 'left:140px;top:780px;width:1640px;font:800 40px Inter;color:#ff8a5c'), 'kalau langsung "billah" → seolah-olah dengan nama-Nya [tidak ada berkah]', 69.1, { iv: .025, marks: [73.4] });
kin(node('', 'left:140px;top:880px;width:1640px;font:800 40px Inter;color:#fff'), 'dengan nama-Nya saja sudah berkah, apalagi dengan [Allah]', 76.1, { iv: .025, marks: [80.0] });

// --- 7 /callout : maka disebut bismillah · pertama berkah
scene(82.7, 98.48, { cut: 'hard' });
arw(node(`[${BSM}]`, 'left:0;right:0;top:260px;text-align:center;font-size:110px;color:#fff'), 82.8, 1.8, { marks: [84.6] });
kin(node('', 'left:140px;top:500px;width:1640px;font:800 48px Inter;color:#fff;text-align:center'), 'dengan nama Allah yang Maha Pengasih lagi Maha Penyayang', 85.4, { iv: .025 });
const cb6 = node(`<div style="width:1500px;height:170px;border:4px solid ${Y};border-radius:18px;background:rgba(233,242,58,.1);padding:20px 30px"><div class="mono" style="font-size:22px;color:${Y}">💡 SEBELUM MELAKUKAN SESUATU</div></div>`, 'left:210px;top:700px'); show(cb6, 89.6, 'scale', 98.48); sfx(89.6, 'beep', .6);
kin(node('', 'left:250px;top:770px;width:1420px;font:800 46px Inter;color:#fff'), 'yang pertama: [mengambil berkah] dengan nama Allah', 93.0, { iv: .03, marks: [95.6] });

// --- 8 makna 02 : ta'zim
scene(98.48, 111.12, { cut: 'glitch' });
makna(98.5, 111.12, '02', 'التَّعْظِيمُ بِاللَّهِ', "TA'ZIM BILLAH", 'di dalamnya mengandung kalimat [mengagungkan Allah]', 100.4, { marks: [104.6] });
kin(node('', 'left:140px;top:640px;width:1640px;font:700 40px Inter;color:' + Y), 'memulai sesuatu dengan nama Allah = mengagungkan Allah', 107.0, { iv: .025 });

// --- 9 /versus : muslim vs musyrik
scene(111.12, 130.66, { cut: 'glitch' });
seg('kita [berbeda] dengan orang musyrik', 111.2, 'left:140px;top:140px;width:1640px', { size: 66, iv: .03, marks: [115.0] });
[['ORANG MUSYRIK', '"demi berhala…"', 'demi tuhan-tuhan yang disembahnya · tidak memberi manfaat sama sekali', '#ff8a5c', 117.2], ['KAUM MUSLIMIN', 'بِسْمِ اللَّهِ', 'dengan nama Allah', Y, 125.0]].forEach((p, i) => { const n = node(`<div style="width:780px;height:520px;border:5px solid ${p[3]};border-radius:18px;padding:34px;background:rgba(255,255,255,.03)"><div class="mono" style="font-size:26px;color:${p[3]}">${p[0]}</div><div class="${i ? 'ar' : ''}" style="font:${i ? '400 120px Amiri' : '900 64px Inter'};color:${p[3]};margin-top:30px;${i ? 'text-align:left' : ''}">${p[1]}</div><div style="font:700 34px Inter;margin-top:30px;line-height:1.3">${p[2]}</div></div>`, `left:${140 + i * 860}px;top:320px`, 'dimmable'); show(n, p[4], 'up', 130.66); sfx(p[4], 'stamp', .7); });
stamp('✕', 'left:700px;top:330px', 120.6, 130.66);

// --- 10 makna 03 : al-luju' ilallah (/handwritten)
scene(130.66, 159.5, { cut: 'glitch' });
makna(130.7, 159.5, '03', 'اللُّجُوءُ إِلَى اللَّهِ', "AL-LUJU' ILALLAH", null, 0, { top: 140 });
(() => { const L = ['hanya berharap kepada Allah', 'hanya berpegang kepada Allah', 'hanya minta bantuan & pertolongan-Nya', 'maka: bismillah · yang lain tidak ada ✓'], T0 = [141.5, 148.4, 150.6, 155.5];
  const n = node(`<div style="width:1200px;height:${L.length * 70 + 40}px;background:#fbf6e6;background-image:repeating-linear-gradient(transparent 0 68px,#c9d6ee 68px 70px);border-left:4px solid #e6a0a0;padding:16px 34px;transform:rotate(-1deg);box-shadow:0 20px 50px rgba(0,0,0,.6)">
   ${L.map((s, i) => `<div class="hw" style="${KAL};font-size:46px;color:${i === 3 ? '#b0302a' : '#1f3a8a'};height:70px;white-space:nowrap;overflow:hidden;width:0">${s}</div>`).join('')}</div>`, 'left:140px;top:470px', 'dimmable');
  T0.forEach(t => sfx(t, 'draw', .6));
  item(140.5, 159.5, n, (lt, t, it) => { n.style.opacity = clamp(lt / .25) * clamp((it.t1 - t) / .25); n.querySelectorAll('.hw').forEach((e, i) => e.style.width = clamp((t - T0[i]) / 1.6) * 1150 + 'px'); }); })();

// --- 11 makna 04 : al-iqrar bil-uluhiyyah (/stat)
scene(159.5, 182.24, { cut: 'glitch' });
makna(159.5, 182.24, '04', 'الْإِقْرَارُ بِالْأُلُوهِيَّةِ', "AL-IQRAR BIL-ULUHIYYAH", 'kita [mengakui ketuhanan]', 166.0, { top: 140, marks: [167.2] });
(() => { const n = node(`<div style="display:flex;align-items:center;gap:40px"><div style="font:900 260px Inter;color:${Y};line-height:.9">1</div><div><div class="mono" style="font-size:28px;color:${Y}">TUHAN HANYA</div><div style="font:900 90px Inter">SATU · ALLAH</div><div style="font:700 34px Inter;margin-top:6px">Yang Maha Pengasih lagi Maha Penyayang</div></div></div>`, 'left:180px;top:640px', 'dimmable'); show(n, 167.6, 'up', 182.24); sfx(167.6, 'impact', .6); })();

// --- 12 makna 05 : al-isti'anah (/checklist)
scene(182.24, 195.1, { cut: 'glitch' });
makna(182.3, 195.1, '05', 'الِاسْتِعَانَةُ بِاللَّهِ', "AL-ISTI'ANAH BILLAH", 'meminta [pertolongan] kepada Allah', 183.6, { top: 140, marks: [186.0] });
[['aku hendak memulai sesuatu', 186.4], ['aku mengucapkan bismillah', 189.6], ['meminta pertolongan & bantuan Allah', 192.1]].forEach(([s, t], i) => { const n = node(`<div style="display:flex;align-items:center;gap:22px"><div style="width:64px;height:64px;border-radius:10px;background:${Y};display:flex;align-items:center;justify-content:center;font:900 46px Inter;color:#111">✓</div><div style="font:800 46px Inter">${s}</div></div>`, `left:160px;top:${640 + i * 100}px`); show(n, t, 'scale', 195.1); sfx(t, 'click', .8); });

// --- 13 makna 06 : tard asy-syaitan (/sketchnotes)
scene(195.1, 225.16, { cut: 'glitch' });
makna(195.1, 203.8, '06', 'طَرْدُ الشَّيْطَانِ', 'TARDU ASY-SYAITAN', 'gunanya apa? [menolak syaitan]', 196.6, { marks: [199.4] });
arw(node('بِسْمِ اللَّهِ', 'left:0;right:0;top:120px;text-align:center;font-size:90px;color:' + Y), 203.9, 1.0, { t1: 225.16 });
(() => { const C = [['makan', 203.9, `<path d="M-60 20 Q0 70 60 20 Z" fill="none" stroke="${Y}" stroke-width="5"/><path d="M-30 -10 Q-20 -40 -30 -60 M0 -10 Q10 -40 0 -60 M30 -10 Q40 -40 30 -60" fill="none" stroke="#fff" stroke-width="4"/>`],
  ['pakaian', 210.6, `<path d="M-60 -50 L-25 -65 Q0 -40 25 -65 L60 -50 L75 -10 L45 0 L45 65 L-45 65 L-45 0 L-75 -10 Z" fill="none" stroke="${Y}" stroke-width="5"/>`],
  ['minum', 214.4, `<path d="M-35 -55 H35 L25 60 H-25 Z" fill="none" stroke="${Y}" stroke-width="5"/><path d="M-30 -5 H30" stroke="#4aa3ff" stroke-width="5"/>`]];
  C.forEach((c, i) => { const n = node(`<div style="width:520px;height:520px;border:3px dashed ${Y};border-radius:24px;text-align:center;padding-top:30px"><div style="${KAL};font-size:44px;color:#fff">sebelum ${c[0]}…</div><svg width="220" height="170" viewBox="-110 -85 220 170">${c[2]}</svg><div class="ar" style="font-size:60px;color:${Y}">بِسْمِ اللَّهِ</div><div style="${KAL};font-size:38px;color:#ff8a80;margin-top:6px">syaitan menjauh ✕</div></div>`, `left:${110 + i * 580}px;top:300px`); show(n, c[1], 'drop', 225.16); sfx(c[1], 'paper', .7); });
  kin(node('', 'left:140px;top:880px;width:1640px;font:800 42px Inter;color:#fff;text-align:center'), 'بِسْمِ اللَّهِ = [طَرْدٌ لِلشَّيْطَانِ] · menolak bagi syaitan', 218.6, { iv: .03, marks: [221.0] }); })();

// --- 14 /roadmap : makanan sedikit tapi berkah
scene(225.16, 249.42, { cut: 'glitch' });
seg('makanan [sedikit]… tapi berkah', 225.3, 'left:140px;top:150px;width:1640px', { size: 72, iv: .03, marks: [229.4] });
(() => { const S = [['makan + bismillah', 226.4], ['berkah', 230.2], ['kekuatan tubuh', 233.6], ['beribadah', 236.0], ['rajin salat', 238.4], ['menuntut ilmu', 240.0], ['segala kebaikan', 242.0]];
  const pth = 'M160 640 C300 640 320 500 470 500 S650 640 800 640 S970 500 1120 500 S1290 640 1440 640 S1590 500 1760 500';
  let g = `<path d="${pth}" fill="none" stroke="#3a3a2a" stroke-width="22" stroke-linecap="round" data-d="2000" data-dur="2.4"/><path d="${pth}" fill="none" stroke="${Y}" stroke-width="3" stroke-dasharray="16 14" data-d="2000" data-dur="2.4"/>`;
  const P = [[160, 640], [470, 500], [800, 640], [1120, 500], [1440, 640], [1600, 560], [1760, 500]];
  S.forEach(([s, t], i) => { const d = t - 225.3; g += `<circle cx="${P[i][0]}" cy="${P[i][1]}" r="22" fill="${Y}" data-f="${d}"/>` + T(P[i][0], P[i][1] + (i % 2 ? -50 : 70), s, { f: d + .1, fs: 32, fw: 800 }); });
  sv(225.3, 249.42, g, 'left:0;top:0', 1920, 1080, .5); })();
kin(node('', 'left:140px;top:850px;width:1640px;font:800 42px Inter;color:' + Y + ';text-align:center'), 'itulah pentingnya bismillah sebelum makan & minum', 243.3, { iv: .028 });

// --- 15 /search : atsar Ibnu Mas'ud
scene(249.42, 256.4, { cut: 'glitch', light: 1 });
searchFind(249.42, 256.4, {
  q: 'الزبانية التسعة عشر بسم الله', count: 3, pick: 0, shelfPick: 0, times: { type: .4, scan: 1.6, res: 2.4, click: 3.6, det: 4.0 },
  shelf: [['Tafsir al-Qurthubi', 'القرطبي'], ['Tafsir Ibnu Katsir', 'ابن كثير'], ['QS. Al-Muddatstsir', 'المدثر'], ['Ad-Durr al-Mantsur', 'الدر المنثور']],
  results: [
    { title: "Tafsir al-Qurthubi · fadhilah basmalah", tag: "ATSAR IBNU MAS'UD", ar: 'فَلْيَقْرَأْ بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ' },
    { title: 'Tafsir Ibnu Katsir · basmalah', tag: 'DINUKIL', ar: 'لِيَجْعَلَ اللَّهُ لَهُ بِكُلِّ حَرْفٍ مِنْهَا جُنَّةً' },
    { title: 'QS. Al-Muddatstsir : 30', tag: 'AYAT', ar: 'عَلَيْهَا تِسْعَةَ عَشَرَ' }],
  det: { title: "'Abdullah bin Mas'ud", ar: 'عَبْدُ اللَّهِ بْنُ مَسْعُودٍ', rows: [['STATUS', "perkataan sahabat (atsar)"], ['DINUKIL', 'al-Qurthubi · Ibnu Katsir'], ['TEMA', 'Malaikat Zabaniyah · 19']], quote: 'تِسْعَةَ عَشَرَ' }
});

// --- 16 /citation : kartu atsar
scene(256.4, 274.18, { cut: 'glitch' });
card(256.4, 274.18, "IBNU MAS'UD BERKATA", 'مَنْ أَرَادَ أَنْ يُنَجِّيَهُ اللَّهُ مِنَ [الزَّبَانِيَةِ] فَلْيَقُلْ بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ، لِأَنَّ حُرُوفَهَا [تِسْعَةَ عَشَرَ]', 'barang siapa ingin diselamatkan Allah dari Malaikat Zabaniyah, hendaklah membaca bismillah, karena hurufnya [sembilan belas]', { fs: 60, ad: 3.4, am: [258.4, 260.6], tt: 520, tr0: 261.4, tm: [266.4], h: 700 });

// --- 17 /exploded-view : 19 huruf
scene(274.18, 285.7, { cut: 'glitch' });
label('بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ · DIURAI PER HURUF', 274.3, 'left:140px;top:150px');
(() => { const L = ['ب', 'س', 'م', 'ا', 'ل', 'ل', 'ه', 'ا', 'ل', 'ر', 'ح', 'م', 'ن', 'ا', 'ل', 'ر', 'ح', 'ي', 'م'];
  L.forEach((h, i) => { const col = i % 10, row = Math.floor(i / 10), x = 1640 - col * 160, y = 260 + row * 200;
    const n = node(`<div style="width:140px;height:170px;border:3px solid ${Y};border-radius:12px;text-align:center"><div class="ar" style="font-size:80px;line-height:1.5">${h}</div><div class="mono" style="font-size:18px;color:${Y};margin-top:-14px">${String(i + 1).padStart(2, '0')}</div></div>`, `left:${x}px;top:${y}px`);
    show(n, 274.6 + i * .2, 'scale', 285.7); sfx(274.6 + i * .2, 'tick', .6); }); })();
counter(279.0, 285.7, 19, 'left:140px;top:700px', 'HURUF = MALAIKAT ZABANIYAH', Y, 1.2);
kin(node('', 'left:560px;top:760px;width:1220px;font:800 42px Inter;color:#fff'), 'tercantum di Al-Qur\'an · [Surah Al-Muddatstsir]', 280.9, { iv: .025, marks: [283.6] });

// --- 18 /scripture : QS. Al-Muddatstsir 26-30
scene(285.7, 311.31, { cut: 'glitch' });
card(285.7, 311.31, 'QS. AL-MUDDATSTSIR : 26 – 30', 'سَأُصْلِيهِ سَقَرَ ۝ وَمَا أَدْرَاكَ مَا سَقَرُ ۝ لَا تُبْقِي وَلَا تَذَرُ ۝ لَوَّاحَةٌ لِلْبَشَرِ ۝ عَلَيْهَا [تِسْعَةَ عَشَرَ]', null, { fs: 70, ad: 20.0, am: [306.6], h: 640, chip: 'سُورَةُ الْمُدَّثِّرِ' });
punch(306.6, 309.0, 960, 560, 1.4);

// --- 19 /infographic : gambaran neraka
scene(311.31, 337.65, { cut: 'glitch' });
label('GAMBARAN DALAM AYAT', 311.4, 'left:140px;top:150px');
(() => { const I = [['19', 'malaikat penjaga di atasnya', 311.4], ['?', 'tahukah engkau perihal neraka?', 313.8], ['✕', 'tidak menyisakan daging & rambut', 322.3], ['🔥', 'menghancurkan kulit manusia', 327.7], ['19', 'Malaikat Zabaniyah', 331.2]];
  I.forEach((x, i) => { const n = node(`<div style="width:320px;height:380px;border:4px solid ${i === 4 ? Y : '#fff'};border-radius:16px;text-align:center;padding:30px 18px;background:rgba(255,255,255,.03)"><div style="font:900 110px Inter;color:${i === 4 ? Y : '#ff8a5c'};line-height:1.1">${x[0]}</div><div style="font:800 34px Inter;margin-top:20px;line-height:1.25">${x[1]}</div></div>`, `left:${110 + i * 345}px;top:300px`, 'dimmable'); show(n, x[2], 'up', 337.65); sfx(x[2], 'click', .7); }); })();
arw(node('الزَّبَانِيَةُ', 'left:0;right:0;top:760px;text-align:center;font-size:100px;color:' + Y), 333.0, 1.0);

// --- 20 /symmetry : 19 huruf melindungi dari 19 malaikat
scene(337.65, 359.17, { cut: 'glitch' });
seg('dengan [hati yang bersih]<br>penuh keimanan kepada Allah', 337.7, 'left:140px;top:120px;width:1640px', { size: 62, iv: .025, marks: [340.6] });
(() => { let g = '';
  for (let i = 0; i < 19; i++) { const y = 400 + i * 30, d = .2 + i * .12; g += `<circle cx="560" cy="${y}" r="11" fill="${Y}" data-f="${d}"/><circle cx="1360" cy="${y}" r="11" fill="#ff8a5c" data-f="${d}"/>`; }
  g += T(560, 370, '19 HURUF BISMILLAH', { f: .1, fs: 32, fw: 900, c: Y }) + T(1360, 370, '19 MALAIKAT', { f: .1, fs: 32, fw: 900, c: '#ff8a5c' }) +
    `<path d="M880 560 L960 520 L1040 560 V680 Q1040 760 960 800 Q880 760 880 680 Z" fill="rgba(233,242,58,.15)" stroke="${Y}" stroke-width="6" data-d="800" data-del="3"/>` + T(960, 690, '✓', { f: 3.6, fs: 90, fw: 900, c: Y }) +
    LN([[600, 680], [860, 680]], { s: Y, sw: 4, del: 3.2, arrow: 1 }) + LN([[1320, 680], [1060, 680]], { s: '#ff8a5c', sw: 4, del: 3.4, dash: 1 });
  sv(345.0, 359.17, DEFS + g, 'left:0;top:0', 1920, 1080, .6); })();
kin(node('', 'left:140px;top:1000px;width:1640px;font:800 38px Inter;color:#fff;text-align:center'), 'mencegah kita dari cengkeraman [malaikat yang sembilan belas]', 349.6, { iv: .025, marks: [352.6] });

// --- 21 /cycle : Ratib al-'Attas ×3
scene(359.17, 401.67, { cut: 'glitch' });
seg('khusus bacaan [bismillah] ini', 359.3, 'left:140px;top:130px;width:1640px', { size: 60, iv: .03, marks: [360.6] });
(() => { const n = node(`<div style="width:700px;height:200px;border:5px solid ${Y};border-radius:18px;text-align:center;padding-top:20px;background:rgba(233,242,58,.08)"><div class="ar" style="font-size:96px">رَاتِبُ الْعَطَّاسِ</div><div class="mono" style="font-size:24px;color:${Y}">RATIB AL-'ATTAS</div></div>`, 'left:140px;top:300px'); show(n, 362.4, 'left', 401.67); sfx(362.4, 'stamp', .7); })();
kin(node('', 'left:140px;top:540px;width:760px;font:700 36px Inter;color:#fff;line-height:1.3'), 'pengarangnya memulai dengan [tiga kali] membaca bismillah', 364.4, { iv: .025, marks: [367.0] });
(() => { const cx = 1340, cy = 560, R = 250; let g = `<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="#fff" stroke-width="4" stroke-dasharray="14 12" data-d="1571" data-dur="2"/>`;
  [0, 1, 2].forEach(i => { const a = -Math.PI / 2 + i * 2 * Math.PI / 3, x = cx + Math.cos(a) * R, y = cy + Math.sin(a) * R, d = 1.6 + i * 3.5; g += `<circle cx="${x}" cy="${y}" r="42" fill="${Y}" data-f="${d}"/>` + T(x, y + 16, '×' + (i + 1), { f: d + .1, fs: 40, fw: 900, c: '#111' }); });
  g += T(cx, cy - 10, 'بِسْمِ اللَّهِ', { f: .5, ff: 'Amiri', fs: 80, fw: 400, c: Y }) + T(cx, cy + 50, 'الرَّحْمَٰنِ الرَّحِيمِ', { f: .7, ff: 'Amiri', fs: 52, fw: 400 });
  sv(368.6, 401.67, g, 'left:0;top:0', 1920, 1080, .8); })();
kin(node('', 'left:140px;top:900px;width:1640px;font:800 40px Inter;color:' + Y + ';text-align:center'), 'dibaca dengan hati bersih → [melindungi] dari Malaikat Zabaniyah', 392.8, { iv: .025, marks: [397.0] });

// --- 22 /bullets : aku memulai…
scene(401.67, 417.9, { cut: 'glitch' });
arw(node(BSM, 'left:0;right:0;top:120px;text-align:center;font-size:80px;color:' + Y), 401.8, 1.6);
[['aku memulai ini pekerjaanku', 404.0], ['aku memulai ini salatku', 406.9], ['aku memulai ini bacaanku', 408.7], ['aku memulai segala sesuatu yang baik', 410.5]].forEach(([s, t], i) => { const n = node(`<div style="display:flex;align-items:center;gap:22px"><div style="width:22px;height:22px;border-radius:50%;background:${Y}"></div><div style="font:800 50px Inter">${s}</div></div>`, `left:260px;top:${330 + i * 100}px`, 'dimmable'); show(n, t, 'left', 417.9); sfx(t, 'click', .6); });
kin(node('', 'left:140px;top:800px;width:1640px;font:800 44px Inter;color:#fff;text-align:center'), 'tak terlepas dari [nikmat & pertolongan] Allah', 413.2, { iv: .03, marks: [415.0] });

// --- 23 /hook : apa yang paling layak?
scene(417.9, 430.93, { cut: 'hard' });
seg('Bila dapat nikmat,<br>apa yang paling [layak] kita katakan?', 418.0, 'left:140px;top:200px;width:1640px', { size: 76, iv: .025, marks: [420.6] });
arw(node(`[${HMD}]`, 'left:0;right:0;top:560px;text-align:center;font-size:110px;color:#fff'), 426.1, 1.8, { marks: [428.0] });

// --- 24 /tree : nikmat → alhamdulillah
scene(430.93, 465.2, { cut: 'glitch' });
kin(node('', 'left:140px;top:120px;width:1640px;font:800 44px Inter;color:#fff'), 'orang yang mengerti → [khusyuk] · fokus dalam membaca Al-Fatihah', 431.0, { iv: .025, marks: [434.0] });
(() => { const N = ['bisa salat', 'beribadah', "membaca Al-Qur'an", 'hidup', 'bernafas', 'dan lainnya'];
  let g = BOX(710, 240, 500, 110, { s: Y }) + T(960, 312, 'بِسْمِ اللَّهِ', { f: .1, ff: 'Amiri', fs: 64, fw: 400, c: Y }) + LN([[960, 350], [960, 400]], { del: .3 }) + LN([[260, 400], [1660, 400]], { del: .4 });
  N.forEach((s, i) => { const x = 260 + i * 280, d = 14.2 + i * 1.4; g += LN([[x, 400], [x, 450]], { del: d }) + BOX(x - 130, 450, 260, 100, { s: '#fff', del: d }) + T(x, 510, s, { f: d + .2, fs: 25, fw: 800 }) + LN([[x, 550], [960, 690]], { s: Y, sw: 2, del: 24.0 + i * .1 }); });
  g += BOX(560, 690, 800, 140, { s: Y, sw: 6, del: 24.5, fill: 'rgba(233,242,58,.12)' }) + T(960, 785, HMD, { f: 24.8, ff: 'Amiri', fs: 60, fw: 400, c: Y });
  sv(431.0, 465.2, g, 'left:0;top:0', 1920, 1080, .5); })();
kin(node('', 'left:140px;top:900px;width:1640px;font:700 38px Inter;color:#fff;text-align:center'), 'segala puji bagi Allah, Tuhan semesta alam', 461.5, { iv: .025 });

// --- 25 /balance : alhamdulillah harga nikmat
scene(465.2, 491.77, { cut: 'glitch' });
seg('الْحَمْدُ لِلَّهِ = [harga] tiap-tiap nikmat', 465.3, 'left:140px;top:130px;width:1640px', { size: 64, iv: .03, marks: [469.4] });
kin(node('', 'left:140px;top:230px;width:1640px;font:700 34px Inter;color:#fff'), 'sabda Baginda Rasulullah shallallahu ‘alaihi wasallam', 466.0, { iv: .02 });
sv(474.2, 491.77, `<path d="M960 330 V760 M760 820 H1160" stroke="#fff" stroke-width="6" data-d="840"/><g data-f=".3"><path d="M600 420 L1320 420" stroke="#fff" stroke-width="6"/><path d="M600 420 L520 560 H680 Z" fill="rgba(233,242,58,.12)" stroke="${Y}" stroke-width="4"/><path d="M1320 420 L1240 560 H1400 Z" fill="rgba(47,174,91,.18)" stroke="#2fae5b" stroke-width="4"/></g>` +
  T(600, 610, 'nikmat dari Allah', { f: .6, fs: 34, fw: 800, c: Y }) + T(1320, 610, 'الْحَمْدُ لِلَّهِ', { f: 2.9, ff: 'Amiri', fs: 52, fw: 400, c: '#7fe0a0' }) + T(1320, 690, 'LUNAS ✓', { f: 5.9, fs: 50, fw: 900, c: '#7fe0a0' }), 'left:0;top:0', 1920, 1080, .6);
kin(node('', 'left:140px;top:900px;width:1640px;font:800 42px Inter;color:#ff8a5c;text-align:center'), 'tidak mengucap alhamdulillah → [tidak membayar] nikmat itu', 480.4, { iv: .028, marks: [484.0] });
stamp('HARGA NIKMAT', 'left:1360px;top:720px', 487.3, 491.77, Y);

// --- 26 /search : hadis Ibnu Majah 3805
scene(491.77, 499.2, { cut: 'glitch', light: 1 });
searchFind(491.77, 499.2, {
  q: 'ما أنعم الله على عبد نعمة فقال الحمد لله', count: 3, pick: 0, shelfPick: 0, times: { type: .4, scan: 1.6, res: 2.4, click: 3.6, det: 4.0 },
  shelf: [['Sunan Ibni Majah', 'سنن ابن ماجه'], ["Syu'ab al-Iman", 'شعب الإيمان'], ['Al-Adzkar · an-Nawawi', 'الأذكار'], ["Mu'jam ath-Thabrani", 'الطبراني']],
  results: [
    { title: 'Sunan Ibni Majah · 3805 · Anas bin Malik', tag: 'TERKAIT', ar: 'إِلَّا كَانَ الَّذِي أَعْطَى أَفْضَلَ مِمَّا أَخَذَ' },
    { title: "Syu'ab al-Iman · al-Baihaqi", tag: 'DIBAHAS', ar: 'فَضْلُ الْحَامِدِينَ' },
    { title: 'Al-Adzkar · bab hamdalah', tag: 'TERKAIT', ar: 'الْحَمْدُ لِلَّهِ' }],
  det: { title: 'Sunan Ibni Majah', ar: 'سُنَنُ ابْنِ مَاجَهْ', rows: [['NOMOR', '3805 · kitab al-Adab'], ['BAB', 'فَضْلُ الْحَامِدِينَ'], ['PERAWI', "Anas bin Malik radhiyallahu 'anhu"]], quote: 'مَا أَنْعَمَ اللَّهُ عَلَى عَبْدٍ نِعْمَةً فَقَالَ: الْحَمْدُ لِلَّهِ' }
});

// --- 27 /iceberg : dunia sedikit vs ucapan besar abadi
scene(499.2, 529.01, { cut: 'glitch' });
kin(node('', 'left:140px;top:120px;width:1640px;font:800 42px Inter;color:#fff'), 'rezeki · makanan · kesehatan · pakaian → disahuti [alhamdulillah]', 501.9, { iv: .022, marks: [506.0] });
sv(512.2, 529.01, `<path d="M120 470 H1800" stroke="#4aa3ff" stroke-width="4" data-d="1680"/>` +
  `<path d="M840 470 L910 400 L960 420 L1020 390 L1080 470Z" fill="rgba(255,255,255,.08)" stroke="#fff" stroke-width="4" data-d="560" data-del=".2"/>` + T(960, 360, 'dunia sedikit · tidak ada artinya', { f: 4.0, fs: 32, fw: 800 }) +
  `<path d="M840 470 L560 700 L760 900 L1180 920 L1380 700 L1080 470" fill="rgba(74,163,255,.1)" stroke="#7fd6ff" stroke-width="4" data-d="1500" data-del="8.4"/>` +
  T(960, 680, 'الْحَمْدُ لِلَّهِ', { f: 8.8, ff: 'Amiri', fs: 90, fw: 400, c: '#7fd6ff' }) + T(960, 780, 'ucapan sangat besar · abadi sampai hari akhir', { f: 9.2, fs: 32, fw: 800 }), 'left:0;top:0', 1920, 1080, .8);
kin(node('', 'left:140px;top:960px;width:1640px;font:800 40px Inter;color:' + Y + ';text-align:center'), 'Allah berfirman: "Lihat itu hamba-Ku…"', 512.4, { iv: .03 });

// --- 28 /badge : keamanan dari hilangnya nikmat
scene(529.01, 551.39, { cut: 'glitch' });
seg('bentuk [keamanan]<br>dari hilangnya nikmat', 529.1, 'left:140px;top:160px;width:1000px', { size: 76, iv: .03, marks: [535.4] });
sv(533.5, 551.39, `<path d="M1400 300 L1600 380 V560 Q1600 720 1400 800 Q1200 720 1200 560 V380 Z" fill="rgba(47,174,91,.15)" stroke="#2fae5b" stroke-width="8" data-d="1400"/>` + T(1400, 560, 'الْحَمْدُ لِلَّهِ', { f: .6, ff: 'Amiri', fs: 64, fw: 400, c: '#7fe0a0' }) + T(1400, 640, 'nikmat aman', { f: 1.0, fs: 34, fw: 800 }), 'left:0;top:0', 1920, 1080, 1.0);
kin(node('', 'left:140px;top:640px;width:1000px;font:800 44px Inter;color:#fff;line-height:1.3'), 'insyaAllah nikmat itu [tidak akan hilang], tidak akan binasa', 544.7, { iv: .03, marks: [548.0] });

// --- 29 penutup
scene(551.39, TOTAL, { cut: 'hard' });
mePol('left:200px;top:200px', 551.5, TOTAL, -4, 420);
label('BERSAMBUNG · HADIS BERIKUTNYA', 551.6, 'left:760px;top:200px');
arw(node(HMD, 'left:760px;top:250px;width:1100px;font-size:76px;color:' + Y + ';text-align:left'), 552.2, 1.4);
sub2('left:760px;top:600px', 553.4, TOTAL);

// ================================================================== JADWAL KODE VISUAL
[[0, 11.46, '/kinetic-type'], [11.46, 24.6, '/diagram'], [24.6, 29.08, '/mindmap'], [29.08, 38.56, '/spotlight'], [38.56, 49.26, '/split-screen'], [49.26, 61.0, '/flowchart'], [61.0, 82.7, '/layers'], [82.7, 98.48, '/callout'],
 [98.48, 111.12, '/spotlight'], [111.12, 130.66, '/versus'], [130.66, 159.5, '/handwritten'], [159.5, 182.24, '/stat'], [182.24, 195.1, '/checklist'], [195.1, 225.16, '/sketchnotes'], [225.16, 249.42, '/roadmap'], [249.42, 256.4, '/search'],
 [256.4, 274.18, '/citation'], [274.18, 285.7, '/exploded-view'], [285.7, 311.31, '/scripture'], [311.31, 337.65, '/infographic'], [337.65, 359.17, '/symmetry'], [359.17, 401.67, '/cycle'], [401.67, 417.9, '/bullets'], [417.9, 430.93, '/hook'],
 [430.93, 465.2, '/tree'], [465.2, 491.77, '/balance'], [491.77, 499.2, '/search'], [499.2, 529.01, '/iceberg'], [529.01, 551.39, '/badge'], [551.39, TOTAL, '/teaser']]
 .reduce((acc, [a, b, c]) => { if (!acc.m[c]) acc.m[c] = String(++acc.n).padStart(2, '0'); codeTag(a, b, acc.m[c], c); return acc; }, { n: 0, m: {} });
