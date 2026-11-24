// ================================================================== ADEGAN EPISODE 25 · 8 Golongan yang Tak Dihuni Surga & Tanda-Tanda Dosa Besar
const BSM = 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ';
function meTag(t0, t1, topik) { const n = node(`<div style="width:430px;background:#141414;border:2px solid ${Y};padding:18px 22px">
  <div class="mono" style="font-size:16px;color:${Y}">● PENYAMPAI KAJIAN</div><div style="font:800 34px Inter;margin-top:6px">@alurziyadahku</div>
  <div class="mono" style="font-size:15px;color:#eee;margin-top:8px">TOPIK: <span class="ar" style="font-size:24px;color:#fff">${topik}</span></div></div>`, 'left:1270px;top:720px'); show(n, t0, 'left', t1); sfx(t0, 'beep', .5); }
const line = (t0, t1, css, s, o = {}) => kin(node('', css + `;font:${o.w || 800} ${o.fs || 42}px Inter;color:${o.c || '#fff'};line-height:1.3`), s, t0, { iv: o.iv || .026, marks: o.m || [], t1 });
const crd = (html, css, t0, t1, kind = 'up', snd = 'click') => { const n = node(html, css, 'dimmable'); show(n, t0, kind, t1); sfx(t0, snd, .7); return n; };
const CR = '#ff8a5c', CG = '#7fe0a0', CB = '#7fd6ff';
const vcard = (w, c, inner, bg = 'transparent') => `<div style="width:${w}px;border:4px solid ${c};border-radius:18px;padding:22px 26px;background:${bg}">${inner}</div>`;
const tick = (s, t, t1, css, c = Y, m = '✓', fs = 44) => crd(`<div style="display:flex;align-items:center;gap:24px"><div style="width:74px;height:74px;flex:none;border-radius:12px;background:${c};display:flex;align-items:center;justify-content:center;font:900 46px Inter;color:#111">${m}</div><div style="font:900 ${fs}px Inter">${s}</div></div>`, css, t, t1, 'left', 'tick');
const pill = (s, c, fg = '#111') => `<div style="font:900 40px Inter;color:${fg};background:${c};border-radius:12px;padding:10px 26px;display:inline-block">${s}</div>`;
const sp = (s, c = Y) => `<span style="color:${c}">${s}</span>`;
const DOTS = n => `<div style="display:flex;gap:8px">${[1, 2, 3, 4, 5, 6, 7, 8].map(i => `<div style="width:42px;height:42px;border-radius:8px;border:3px solid ${i === n ? CR : (i < n ? Y : 'rgba(233,242,58,.35)')};background:${i === n ? 'rgba(255,138,92,.3)' : (i < n ? 'rgba(233,242,58,.15)' : 'transparent')};font:800 18px Inter;color:${i === n ? '#fff' : Y};display:flex;align-items:center;justify-content:center">${i}</div>`).join('')}</div>`;
// header golongan: label kiri + 8 kotak penanda di kanan
function gol(n, t0, t1, nm) { label(`GOLONGAN 0${n} / 08 · ${nm}`, t0, 'left:160px;top:130px', t1); crd(DOTS(n), 'left:1340px;top:118px', t0 + .1, t1, 'fade', 'tick'); }
// kartu istilah Arab besar (wipe kanan → kiri)
function term(x, y, w, ar, t0, dur, mk, t1, fs = 96) {
  crd(`<div style="width:${w}px;height:200px;border:5px solid ${CR};border-radius:20px;background:rgba(255,138,92,.06)"></div>`, `left:${x}px;top:${y}px`, t0, t1, 'scale', 'stamp');
  arw(node(ar, `left:${x}px;top:${y + 34}px;width:${w}px;text-align:center;font-size:${fs}px;color:#fff;line-height:1.3`), t0 + .15, dur, { marks: mk, t1 });
}
const noJannah = (t0, t1, sub = '') => crd(`<div style="width:540px;height:200px;border:5px solid ${CR};border-radius:20px;text-align:center;padding-top:${sub ? 26 : 50}px;background:rgba(255,138,92,.10)"><div class="ar" style="font-size:60px;color:${CR}">لَا يَدْخُلُ الْجَنَّةَ</div>${sub ? `<div class="mono" style="font-size:18px;margin-top:4px">${sub}</div>` : ''}</div>`, 'left:1220px;top:190px', t0, t1, 'scale', 'stamp');
const node3 = (x, y, e, s, f, c = Y, r = 70) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#000" stroke="${c}" stroke-width="5" data-f="${f}"/>` + T(x, y + 22, e, { f, fs: 62 }) + T(x, y + r + 50, s, { f: f + .15, fs: 28, fw: 900, c });

// --- 01 /kinetic-type : pembuka
scene(0, 12.74, { cut: 'none' });
label("FILE 25 · LANJUTAN SURAH AN-NISA", .3, 'left:140px;top:150px', 12.74);
seg("8 Golongan yang<br>[Tak Dihuni Surga]", .6, 'left:140px;top:200px;width:1100px', { size: 92, iv: .04, marks: [2.6] });
mePol('left:1300px;top:150px', .2, 12.74, 4, 400);
meTag(.8, 12.74, 'لَا يَسْكُنُ فِيكِ');
arw(node(BSM, 'left:140px;top:450px;width:1000px;font-size:56px;color:#fff;text-align:left'), 5.1, 1.5);
chip('HADIS QUDSI · حَدِيثٌ قُدْسِيٌّ', 6.8, 'left:140px;top:560px', 12.74, Y);
arw(node('إِنَّ اللَّهَ تَعَالَى لَمَّا [خَلَقَ الْجَنَّةَ]', 'left:140px;top:650px;width:1080px;font-size:62px;color:#fff;text-align:left'), 8.4, 3.6, { marks: [11.0] });

// --- 02 /blueprint : gerbang surga digambar garis
scene(12.74, 23.1, { cut: 'glitch' });
label('SETELAH ALLAH ﷻ MENCIPTAKAN SURGA', 12.84, 'left:160px;top:130px', 23.1);
sv(12.9, 23.1, `<path d="M300 930 V520 Q300 250 560 230 Q820 250 820 520 V930" fill="none" stroke="${Y}" stroke-width="6" data-d="1700" data-dur="1.6"/>` +
  `<path d="M380 930 V540 Q380 330 560 315 Q740 330 740 540 V930" fill="rgba(233,242,58,.05)" stroke="${Y}" stroke-width="3" data-d="1400" data-del=".4" data-dur="1.6"/>` +
  `<path d="M560 318 V930" stroke="${Y}" stroke-width="3" data-d="620" data-del="1.0"/><path d="M200 930 H920" stroke="#fff" stroke-width="4" data-d="720" data-del=".2"/>` +
  `<circle cx="520" cy="640" r="9" fill="${Y}" data-f="1.6"/><circle cx="600" cy="640" r="9" fill="${Y}" data-f="1.6"/>` +
  [[230, 300], [890, 360], [250, 480], [870, 220], [560, 170]].map(([x, y], i) => `<path d="M${x} ${y - 16} L${x + 5} ${y - 5} L${x + 16} ${y} L${x + 5} ${y + 5} L${x} ${y + 16} L${x - 5} ${y + 5} L${x - 16} ${y} L${x - 5} ${y - 5}Z" fill="#fff8d0" data-f="${1.8 + i * .3}"/>`).join(''), 'left:0;top:0', 1920, 1080, 1.4);
line(13.6, 23.1, 'left:960px;top:240px;width:800px', 'Allah ﷻ sudah selesai menciptakan [surga] & seluruh isinya', { fs: 46, m: [15.6] });
paper(17.4, 'left:960px;top:440px;width:800px;height:190px', '', 23.1);
arw(node('قَالَ لَهَا [تَكَلَّمِي]', 'left:990px;top:470px;width:740px;text-align:center;font-size:72px;color:#151515'), 17.6, 2.2, { marks: [19.4] });
line(20.4, 23.1, 'left:960px;top:690px;width:800px', '"wahai surga, [bicaralah engkau]"', { fs: 46, m: [21.5] });

// --- 03 /soundwave : surga berkata
scene(23.1, 33.4, { cut: 'glitch' });
label('SURGA BERKATA', 23.2, 'left:160px;top:130px', 33.4);
arw(node('فَقَالَتْ: [سَعِدَ مَنْ دَخَلَنِي]', 'left:160px;top:190px;width:1600px;text-align:center;font-size:88px;color:#fff'), 23.3, 3.2, { marks: [25.4] });
sv(23.6, 33.4, Array.from({ length: 61 }, (_, i) => { const x = 210 + i * 25, h = 30 + 190 * Math.abs(Math.sin(i * .62) * Math.cos(i * .21)); return `<rect x="${x}" y="${555 - h / 2}" width="12" height="${h}" rx="6" fill="${i % 7 === 3 ? '#fff' : Y}" data-f="${(i * .045).toFixed(2)}"/>`; }).join(''), 'left:0;top:0', 1920, 1080, .8);
line(27.6, 33.4, 'left:160px;top:760px;width:1600px;text-align:center', 'sungguh [benar-benar bahagia] orang yang masuk kepadaku 🌿', { fs: 50, m: [29.6] });

// --- 04 /citation : firman Allah kepada surga
scene(33.4, 49.48, { cut: 'glitch' });
arw(node('فَقَالَ [الْجَبَّارُ] جَلَّ وَعَلَا', 'left:160px;top:140px;width:1600px;text-align:center;font-size:62px;color:#fff'), 33.5, 2.4, { marks: [34.8] });
label('ALLAH ﷻ BERFIRMAN KEPADA SURGA', 36.2, 'left:160px;top:270px', 49.48);
paper(36.3, 'left:160px;top:320px;width:1600px;height:240px', '', 49.48);
arw(node('لَا يَسْكُنُ فِيكِ [ثَمَانِيَةُ أَنْفَارٍ] مِنَ النَّاسِ', 'left:220px;width:1480px;top:370px;text-align:center;font-size:76px;color:#151515'), 39.0, 4.4, { marks: [41.4] });
line(43.9, 49.48, 'left:160px;top:620px;width:1180px', '"tidak bisa masuk kepada engkau, wahai surga, [delapan golongan] manusia ini"', { fs: 42, m: [46.4] });
counter(44.6, 49.48, 8, 'left:1480px;top:600px', 'GOLONGAN', CR, 1.2);

// --- 05 /search : sumber hadis 8 golongan
scene(49.48, 70.42, { cut: 'glitch', light: 1 });
const ST1 = { type: .4, scan: 2.2, res: 3.4, click: 4.8, det: 5.4 };
searchFind(49.48, 70.42, {
  q: 'لا يسكن فيك ثمانية نفر مدمن الخمر', count: 4, pick: 0, shelfPick: 0, times: ST1,
  shelf: [["Takhrij al-Ihya' · al-'Iraqi", 'المغني'], ["Ihya' 'Ulum ad-Din", 'الإحياء'], ['ash-Shamt · Ibnu Abi ad-Dunya', 'الصمت'], ['Musnad Ahmad', 'المسند'], ['Shahih al-Bukhari & Muslim', 'الصحيحان']],
  results: [
    { title: "al-Mughni 'an Haml al-Asfar · al-'Iraqi", tag: 'TAKHRIJ', ar: 'لَا يَسْكُنُ فِيكِ ثَمَانِيَةُ نَفَرٍ', sub: "hadis Ibnu 'Umar · dinisbatkan ke Ibnu Abi ad-Dunya" },
    { title: "Musnad Ahmad no. 5117 · an-Nasa'i no. 2562", tag: 'PENGUAT', ar: 'مُدْمِنُ الْخَمْرِ وَالْعَاقُّ وَالدَّيُّوثُ', sub: '"tiga golongan diharamkan surga" · hasan shahih' },
    { title: 'Shahih al-Bukhari 6056 · Muslim 105', tag: 'SHAHIH', ar: 'لَا يَدْخُلُ الْجَنَّةَ قَتَّاتٌ', sub: 'tukang adu domba tidak masuk surga' },
    { title: 'Shahih al-Bukhari 5984 · Muslim 2556', tag: 'SHAHIH', ar: 'لَا يَدْخُلُ الْجَنَّةَ قَاطِعٌ', sub: 'pemutus silaturahmi tidak masuk surga' }],
  det: { title: 'Hadis 8 golongan', ar: 'ثَمَانِيَةُ أَنْفَارٍ', rows: [['ISI', 'surga berbicara · 8 golongan tak menghuninya'], ['DINUKIL', "Ihya' 'Ulum ad-Din · al-Ghazali"], ["AL-'IRAQI", "riwayat Ibnu Abi ad-Dunya dari Ibnu 'Umar"], ['DERAJAT', 'lemah bila selengkap ini'], ['PENGUAT', "khamr · dayyuts · qattat · qathi' → shahih/hasan"], ['ANCAMAN', 'tak masuk surga → tanda DOSA BESAR'], ['PENGHAPUS', 'taubat sungguh-sungguh & meninggalkannya']], quote: 'سَعِدَ مَنْ دَخَلَنِي' }
});
camTour(49.48, 70.42, ST1);

// --- 06 /exploded-view : golongan 1 · pecandu khamr
scene(70.42, 89.06, { cut: 'glitch' });
gol(1, 70.5, 89.06, 'PECANDU KHAMR');
term(160, 190, 1600, 'لَا يَسْكُنُكِ [مُدْمِنُ خَمْرٍ]', 71.8, 2.6, [73.6], 89.06);
sv(75.0, 89.06, `<path d="M385 450 H455 V560 Q540 600 540 680 V910 Q540 940 510 940 H330 Q300 940 300 910 V680 Q300 600 385 560 Z" fill="none" stroke="${Y}" stroke-width="6" data-d="1500" data-dur="1.4"/>` +
  `<path d="M300 760 H540" stroke="${CR}" stroke-width="4" stroke-dasharray="10 8" data-d="240" data-del=".9"/>` +
  [[360, 840, 10], [440, 880, 7], [480, 810, 9], [400, 900, 6]].map(([x, y, r], i) => `<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="${CR}" stroke-width="3" data-f="${1.2 + i * .2}"/>`).join('') +
  `<path d="M250 470 L590 935" stroke="${CR}" stroke-width="10" data-d="580" data-del="9.0" data-dur=".5"/><path d="M590 470 L250 935" stroke="${CR}" stroke-width="10" data-d="580" data-del="9.3" data-dur=".5"/>`, 'left:0;top:0', 1920, 1080, 1.2);
crd(vcard(900, '#fff', `<div style="font:900 40px Inter">🍶 orang yang ${sp('suka minum arak')}</div>`), 'left:860px;top:450px', 75.2, 89.06, 'left', 'tick');
crd(vcard(900, Y, `<div style="font:900 40px Inter">🔁 terus-menerus · <span class="ar" style="font-size:44px;color:${Y}">مُدْمِن</span></div>`), 'left:860px;top:600px', 79.7, 89.06, 'left', 'tick');
crd(vcard(900, CR, `<div style="font:900 40px Inter">✕ tidak pernah & ${sp('tidak mau bertaubat', CR)}</div>`, 'rgba(255,138,92,.06)'), 'left:860px;top:770px', 84.0, 89.06, 'left', 'stamp');

// --- 07 /cycle : golongan 2 · terus-menerus berzina
scene(89.06, 109.44, { cut: 'glitch' });
gol(2, 89.15, 109.44, 'TERUS BERZINA');
term(160, 190, 1600, 'وَلَا [مُصِرٌّ عَلَى الزِّنَا]', 89.6, 2.6, [91.0], 109.44);
sv(95.8, 109.44, DEFS + `<circle cx="520" cy="690" r="200" fill="none" stroke="${CR}" stroke-width="4" stroke-dasharray="14 12" data-d="1260" data-dur="1.2"/>` +
  `<path d="M700 610 L716 650 L676 646" fill="none" stroke="${CR}" stroke-width="5" data-f="1.2"/>` +
  node3(520, 490, '💔', '', .2, CR, 60) + node3(693, 790, '😶', '', 3.8, CR, 60) + node3(347, 790, '🚫', '', 5.8, CR, 60) +
  T(520, 700, '🔁', { f: .6, fs: 70 }), 'left:0;top:0', 1920, 1080, .9);
line(92.8, 109.44, 'left:900px;top:450px;width:860px', 'orang yang [selalu / mengekalkan] perbuatan zina', { fs: 44, m: [94.2] });
crd(`<div style="display:flex;flex-direction:column;gap:14px;font:900 32px Inter"><div>💔 pernah berzina semasa hidupnya</div><div style="color:${CR}">😶 tidak mau menyesal</div><div style="color:${CR}">🚫 tidak mau bertaubat</div></div>`, 'left:900px;top:600px', 96.0, 109.44, 'left', 'tick');
crd(vcard(860, CR, `<div style="font:900 34px Inter;line-height:1.3">⛔ "tidak bakalan menghuni engkau, wahai surga" — kata Allah</div>`, 'rgba(255,138,92,.06)'), 'left:900px;top:800px', 105.2, 109.44, 'up', 'impact');

// --- 08 /callout : golongan 3 · qattat
scene(109.44, 120.0, { cut: 'glitch' });
gol(3, 109.5, 120.0, 'TUKANG ADU DOMBA');
term(160, 190, 1600, 'وَلَا [قَتَّاتٌ]', 110.3, 1.6, [111.2], 120.0, 100);
line(112.4, 120.0, 'left:160px;top:470px;width:1600px;text-align:center', 'orang yang suka [namimah]', { fs: 64, m: [114.4] });
crd(pill('🗣️ نَمِيمَة = ADU DOMBA', Y), 'left:640px;top:640px', 117.6, 120.0, 'scale', 'impact');

// --- 09 /diagram : berkabar ke sini, berkabar ke sana
scene(120.0, 134.34, { cut: 'glitch' });
label('BERKABAR KE SINI · BERKABAR KE SANA', 120.1, 'left:160px;top:130px', 134.34);
sv(120.1, 134.34, DEFS + node3(330, 430, '👤', 'orang sini', 0, '#fff', 90) + node3(960, 430, '🗣️', 'pengadu domba', .1, CR, 90) + node3(1590, 430, '👤', 'orang sana', 2.6, '#fff', 90) +
  '<g data-f=".3">' + LN([[860, 430], [440, 430]], { s: CR, sw: 5, arrow: 1 }) + '</g>' + T(650, 395, '🔥 panas', { f: .5, fs: 30, fw: 900, c: CR }) +
  '<g data-f="2.7">' + LN([[1060, 430], [1480, 430]], { s: CR, sw: 5, arrow: 1 }) + '</g>' + T(1270, 395, '🔥 panas', { f: 2.9, fs: 30, fw: 900, c: CR }) +
  `<path d="M330 600 Q960 820 1590 600" fill="none" stroke="${CR}" stroke-width="4" stroke-dasharray="16 12" data-d="1400" data-del="5.1"/>` + T(960, 700, '✕', { f: 5.6, fs: 64, fw: 900, c: CR }) + T(960, 770, 'tidak akur · tidak saling sapa', { f: 5.8, fs: 30, fw: 900 }), 'left:0;top:0', 1920, 1080, 1.0);
crd(vcard(760, '#fff', `<div style="font:900 36px Inter">😊 dulu baik → ${sp('😠 bertengkar', CR)}</div>`), 'left:160px;top:840px', 128.9, 134.34, 'up', 'tick');
crd(vcard(760, '#fff', `<div style="font:900 36px Inter">🤝 dulu rukun → ${sp('↔️ renggang', CR)}</div>`), 'left:1000px;top:840px', 132.1, 134.34, 'up', 'tick');

// --- 10 /split-screen : ancaman vs pengecualian
scene(134.34, 144.88, { cut: 'glitch' });
label('ANCAMAN BAGI PELAKU NAMIMAH', 134.4, 'left:160px;top:130px', 144.88);
crd(`<div style="width:760px;height:420px;border:5px solid ${CR};border-radius:20px;text-align:center;padding-top:60px;background:rgba(255,138,92,.06)"><div style="font-size:110px">⛔</div><div style="font:900 44px Inter;color:${CR};margin-top:16px">diancam TIDAK<br>MASUK SURGA</div></div>`, 'left:160px;top:200px', 134.5, 144.88, 'left', 'impact');
crd(`<div style="width:760px;height:420px;border:5px solid ${CG};border-radius:20px;text-align:center;padding-top:60px;background:rgba(127,224,160,.06)"><div style="font-size:110px">🤲</div><div style="font:900 44px Inter;color:${CG};margin-top:16px">KECUALI dia bertaubat<br>kepada Allah ﷻ</div></div>`, 'left:1000px;top:200px', 142.0, 144.88, 'up', 'tick');
chip('لَا يَدْخُلُ الْجَنَّةَ قَتَّاتٌ · HR. AL-BUKHARI 6056 · MUSLIM 105', 136.6, 'left:160px;top:700px', 144.88, CG);

// --- 11 /callout : golongan 4 · dayyuts
scene(144.88, 159.64, { cut: 'glitch' });
gol(4, 144.95, 159.64, 'DAYYUTS');
term(160, 190, 1000, 'وَلَا [دَيُّوثٌ]', 145.4, 1.6, [146.3], 159.64, 100);
noJannah(155.0, 159.64);
line(147.4, 159.64, 'left:160px;top:450px;width:1600px', 'orang yang [membiarkan] istrinya, anak perempuannya dekat & akrab dengan laki-laki lain yang [bukan mahram]', { fs: 44, m: [148.6, 153.4] });
crd(pill('⚠ ini bahaya!', CR), 'left:160px;top:660px', 156.6, 159.64, 'scale', 'impact');
crd(vcard(900, Y, `<div style="font:900 40px Inter">💔 tidak punya rasa ${sp('CEMBURU')} · <span class="ar" style="font-size:44px">غَيْرَة</span></div>`), 'left:560px;top:640px', 158.2, 159.64, 'left', 'beep');

// --- 12 /checklist : yang dibiarkan
scene(159.64, 170.96, { cut: 'glitch' });
label('YANG DIBIARKAN OLEH SEORANG DAYYUTS', 159.7, 'left:160px;top:130px', 170.96);
[['👩', 'istrinya', 160.0], ['👧', 'adiknya', 161.9], ['👧', 'anak perempuannya', 162.8]].forEach(([e, s, t], i) => crd(`<div style="width:500px;height:180px;border:4px solid #fff;border-radius:18px;text-align:center;padding-top:18px"><div style="font-size:70px">${e}</div><div style="font:900 34px Inter">${s}</div></div>`, `left:${160 + i * 550}px;top:200px`, t, 170.96, 'drop', 'tick'));
tick('keluar rumah tidak menutup aurat', 164.3, 170.96, 'left:160px;top:440px', CR, '✕');
tick('berdua-duaan dengan laki-laki bukan mahram', 166.0, 170.96, 'left:160px;top:560px', CR, '✕');
crd(pill('⚠ INI DOSA BESAR · MASALAH YANG SANGAT BESAR', CR), 'left:160px;top:720px', 168.0, 170.96, 'scale', 'impact');

// --- 13 /roadmap : ayah ditarik ke neraka
scene(170.96, 183.38, { cut: 'glitch' });
line(171.0, 183.38, 'left:160px;top:150px;width:1600px', 'berapa banyak [ayah] yang hendak masuk surga…', { fs: 50, m: [172.6] });
line(176.6, 183.38, 'left:160px;top:250px;width:1600px', '…ditarik ke neraka akibat membiarkan perempuan di bawah [pengawasannya]', { fs: 40, m: [180.0], c: '#fff8d0' });
sv(171.2, 183.38, DEFS + `<path d="M220 640 H1480" stroke="#fff" stroke-width="5" stroke-dasharray="20 14" data-d="1260" data-dur="1.2"/>` +
  T(400, 600, '👨', { f: .3, fs: 90 }) + T(400, 710, 'seorang ayah', { f: .5, fs: 30, fw: 900 }) +
  `<path d="M1520 640 V500 Q1520 420 1620 410 Q1720 420 1720 500 V640" fill="none" stroke="${CG}" stroke-width="6" data-d="600" data-del=".8"/>` + T(1620, 590, '🌿', { f: 1.2, fs: 70 }) + T(1620, 710, 'surga', { f: 1.3, fs: 30, fw: 900, c: CG }) +
  '<g data-f="4.0">' + LN([[900, 650], [900, 800], [780, 880]], { s: CR, sw: 6, arrow: 1 }) + '</g>' + T(700, 920, '🔥', { f: 4.6, fs: 80 }) + T(1160, 880, 'ditarik ke neraka', { f: 4.8, fs: 40, fw: 900, c: CR }), 'left:0;top:0', 1920, 1080, 1.0);

// --- 14 /badge : golongan 5 · aparat zalim
scene(183.38, 196.6, { cut: 'glitch' });
gol(5, 183.45, 196.6, 'APARAT ZALIM');
term(160, 190, 1600, 'وَلَا [شُرَطِيٌّ]', 184.0, 1.6, [184.9], 196.6, 100);
line(186.5, 196.6, 'left:160px;top:450px;width:1600px', 'orang yang bekerja dalam ranah [penegakan hukum]', { fs: 46, m: [189.4] });
crd(`<div style="width:520px;height:250px;border:5px solid #fff;border-radius:20px;text-align:center;padding-top:26px"><div style="font-size:90px">👮</div><div style="font:900 34px Inter">contoh: seorang polisi</div></div>`, 'left:160px;top:580px', 191.9, 196.6, 'scale', 'stamp');
crd(vcard(900, CG, `<div style="font:900 42px Inter">✓ tentu ${sp('TIDAK SEMUA', CG)} polisi</div>`), 'left:760px;top:640px', 194.3, 196.6, 'left', 'tick');

// --- 15 /versus : seharusnya vs malah
scene(196.6, 209.72, { cut: 'glitch' });
line(196.7, 209.72, 'left:160px;top:140px;width:1600px;text-align:center', 'polisi [seperti apa?]', { fs: 56, m: [197.5] });
crd(`<div style="width:760px;height:420px;border:5px solid ${CR};border-radius:20px;text-align:center;padding-top:56px;background:rgba(255,138,92,.06)"><div class="mono" style="font-size:24px;color:${CR}">YANG SUKA</div><div style="font-size:110px;margin-top:8px">💸</div><div style="font:900 46px Inter;color:${CR};margin-top:10px">memeras rakyatnya</div></div>`, 'left:160px;top:260px', 198.6, 209.72, 'left', 'impact');
crd(`<div style="width:760px;height:420px;border:5px solid ${CG};border-radius:20px;text-align:center;padding-top:56px;background:rgba(127,224,160,.06)"><div class="mono" style="font-size:24px;color:${CG}">SEHARUSNYA</div><div style="font-size:110px;margin-top:8px">🛡️</div><div style="font:900 46px Inter;color:${CG};margin-top:10px">melindungi · mengayomi</div></div>`, 'left:1000px;top:260px', 202.0, 209.72, 'up', 'tick');
crd(`<div style="width:110px;height:110px;border-radius:50%;background:${Y};color:#111;font:900 44px Inter;display:flex;align-items:center;justify-content:center">VS</div>`, 'left:905px;top:415px', 204.6, 209.72, 'scale', 'stamp');
crd(pill('⚠ yang seharusnya melindungi · malah sebaliknya memeras', CR), 'left:160px;top:760px', 205.6, 209.72, 'scale', 'beep');

// --- 16 /flowchart : ancaman → taubat → berhenti
scene(209.72, 216.32, { cut: 'glitch' });
label('ANCAMAN DARI ALLAH ﷻ', 209.8, 'left:160px;top:130px', 216.32);
sv(209.8, 216.32, DEFS + [['🔥', 'ANCAMAN', 'dari Allah ﷻ', CR, 0], ['🤲', 'BERTAUBAT', 'sungguh-sungguh', CG, 3.4], ['🛑', 'BERHENTI', 'jangan lagi melakukannya', Y, 5.0]].map(([e, a, b, c, d], i) => BOX(160 + i * 560, 200, 480, 300, { s: c, sw: 5, del: d }) + T(400 + i * 560, 300, e, { f: d + .1, fs: 80 }) + T(400 + i * 560, 400, a, { f: d + .2, fs: 40, fw: 900, c }) + T(400 + i * 560, 450, b, { f: d + .3, fs: 28, fw: 900 }) + (i ? '<g data-f="' + d + '">' + LN([[160 + i * 560 - 72, 350], [160 + i * 560 - 10, 350]], { s: Y, sw: 5, arrow: 1 }) + '</g>' : '')).join(''), 'left:0;top:0', 1920, 1080, .6);
chip('قَوْمٌ مَعَهُمْ سِيَاطٌ يَضْرِبُونَ بِهَا النَّاسَ · HR. MUSLIM 2128', 210.8, 'left:160px;top:600px', 216.32, CG);

// --- 17 /sketchnotes : golongan 6 · mukhannats
scene(216.32, 230.36, { cut: 'glitch' });
gol(6, 216.4, 230.36, 'MENYERUPAI PEREMPUAN');
term(160, 190, 1000, 'وَلَا [مُخَنَّثٌ]', 217.0, 1.6, [217.9], 230.36, 100);
noJannah(219.3, 230.36);
crd(`<div style="font:700 52px/1.35 Kalam;color:#fff8d0;width:1600px">laki-laki yang ${sp('sengaja')} tingkahnya dibuat-buat seperti tingkah perempuan</div>`, 'left:160px;top:450px', 221.0, 230.36, 'up', 'paper');
const sk1 = crd(`<div style="border:4px dashed ${Y};border-radius:16px;padding:16px 26px;font:700 46px Kalam;color:#fff">🎭 gayanya dibuat seperti gaya perempuan</div>`, 'left:160px;top:700px', 226.9, 230.36, 'up', 'paper'); sk1.dataset.rot = -2;

// --- 18 /sketchnotes : contoh yang disebut
scene(230.36, 249.3, { cut: 'glitch' });
crd(pill('⚠ mendapatkan ancaman dari Allah ﷻ', CR), 'left:160px;top:180px', 230.5, 249.3, 'scale', 'impact');
[['👗', 'sengaja berpakaian', 234.4, -3], ['🚶', 'sengaja berjalan', 236.3, 2], ['💃', 'bergaya menyerupai perempuan', 237.6, -2]].forEach(([e, s, t, r], i) => { const n = crd(`<div style="width:500px;height:230px;border:4px solid #fff8d0;border-radius:14px;text-align:center;padding-top:26px;background:rgba(255,248,208,.05)"><div style="font-size:80px">${e}</div><div style="font:700 40px Kalam;color:#fff8d0">${s}</div></div>`, `left:${160 + i * 550}px;top:320px`, t, 249.3, 'drop', 'paper'); n.dataset.rot = r; });
stamp('DOSA BESAR', 'left:780px;top:610px', 240.1, 249.3, CR);
crd(vcard(1600, CG, `<div style="font:900 38px Inter">🤲 segera ${sp('bertaubat kepada Allah', CG)} & tinggalkan perkara yang demikian</div>`), 'left:160px;top:760px', 242.0, 249.3, 'up', 'tick');
chip('HR. AL-BUKHARI 5886 · NABI ﷺ MELAKNAT AL-MUKHANNATSIN', 245.0, 'left:160px;top:910px', 249.3, CG);

// --- 19 /tree : golongan 7 · pemutus silaturahmi
scene(249.3, 264.48, { cut: 'glitch' });
gol(7, 249.35, 264.48, 'PEMUTUS SILATURAHMI');
term(160, 190, 1000, 'وَلَا [قَاطِعُ رَحِمٍ]', 249.6, 2.6, [250.9], 264.48, 90);
noJannah(252.0, 264.48, 'HR. AL-BUKHARI 5984 · MUSLIM 2556');
const TP = [[580, 480], [330, 650], [580, 650], [830, 650], [250, 840], [410, 840], [750, 840], [910, 840]], TE = [[0, 1], [0, 2], [0, 3], [1, 4], [1, 5], [3, 6], [3, 7]];
sv(252.8, 264.48, TE.map(([a, b], i) => `<path d="M${TP[a][0]} ${TP[a][1]} L${TP[b][0]} ${TP[b][1]}" stroke="${b === 3 || a === 3 ? CR : Y}" stroke-width="4" ${b === 3 || a === 3 ? 'stroke-dasharray="10 8"' : ''} data-d="260" data-del="${(.2 + i * .12).toFixed(2)}"/>`).join('') +
  TP.map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="${i ? 44 : 56}" fill="#000" stroke="${i === 3 || i > 5 ? CR : Y}" stroke-width="4" data-f="${(i * .12).toFixed(2)}"/>` + T(x, y + 16, ['👴', '👨', '👩', '👨', '👦', '👧', '👦', '👧'][i], { f: i * .12, fs: i ? 40 : 52 })).join('') +
  T(705, 575, '✂️', { f: 1.9, fs: 56 }) + T(1010, 660, 'diputus', { f: 2.1, fs: 32, fw: 900, c: CR }), 'left:0;top:0', 1920, 1080, .8);
line(253.0, 264.48, 'left:1160px;top:480px;width:600px', 'orang yang [memutus] hubungan keluarga', { fs: 46, m: [254.8] });
crd(vcard(600, CR, `<div style="font:900 36px Inter;line-height:1.3">⚠ kalau ${sp('tidak mau bertaubat', CR)} → ini DOSA BESAR</div>`), 'left:1160px;top:680px', 258.5, 264.48, 'up', 'impact');

// --- 20 /citation : golongan 8 · ingkar sumpah
scene(264.48, 282.76, { cut: 'glitch' });
gol(8, 264.55, 282.76, 'INGKAR SUMPAH');
paper(264.7, 'left:160px;top:190px;width:1600px;height:300px', '', 282.76);
arw(node('وَلَا الَّذِي يَقُولُ عَلَيْهَا [عَهْدُ اللَّهِ] إِنْ لَمْ أَفْعَلْ كَذَا وَكَذَا ثُمَّ [لَمْ يَفِ بِهِ]', 'left:220px;width:1480px;top:220px;text-align:center;font-size:62px;line-height:1.75;color:#151515'), 264.8, 8.4, { marks: [267.8, 272.4] });
line(273.5, 282.76, 'left:160px;top:540px;width:1600px', '"…orang yang [bersumpah atas nama Allah] akan mengerjakan ini, ini, ini — ternyata [tidak dibuatnya]"', { fs: 44, m: [275.4, 280.6] });
[0, 1, 2].forEach(i => crd(`<div style="width:300px;height:110px;border:4px solid #fff;border-radius:14px;text-align:center;padding-top:26px;font:900 40px Inter">☐ ini</div>`, `left:${160 + i * 330}px;top:730px`, 277.6 + i * .6, 282.76, 'up', 'tick'));
crd(pill('✕ tidak dikerjakan', CR), 'left:1180px;top:750px', 280.8, 282.76, 'scale', 'stamp');

// --- 21 /timeline : sumpah jabatan
scene(282.76, 309.76, { cut: 'glitch' });
label('HUBUNGANNYA DENGAN PARA PEJABAT · DPR', 282.85, 'left:160px;top:130px', 309.76);
sv(282.9, 309.76, `<path d="M200 380 H1720" stroke="#fff" stroke-width="4" data-d="1520" data-dur="1.2"/>` +
  [[320, '🏛️', 'sebelum bertugas', 2.9], [740, '🤚', 'sumpah atas nama Allah', 6.0], [1160, '📖', "Al-Qur'an di atas kepala", 8.9], [1580, '🗣️', '"tugas sebaik-baiknya"', 11.9]].map(([x, e, s, f]) => node3(x, 380, e, s, f, Y, 70)).join(''), 'left:0;top:0', 1920, 1080, 1.0);
crd(vcard(760, CR, `<div style="font:900 36px Inter;line-height:1.3">✕ ternyata TIDAK → ${sp('tidak akan masuk surga', CR)}</div>`, 'rgba(255,138,92,.06)'), 'left:160px;top:640px', 300.6, 309.76, 'up', 'impact');
crd(vcard(760, CG, `<div style="font:900 36px Inter;line-height:1.3">🤲 kalau mati dalam keadaan demikian · ${sp('mesti benar-benar bertaubat', CG)}</div>`), 'left:1000px;top:640px', 303.8, 309.76, 'up', 'tick');

// --- 22 /venn : kuasa Allah
scene(309.76, 328.34, { cut: 'glitch' });
line(309.8, 328.34, 'left:160px;top:140px;width:1600px;text-align:center', '❓ "apakah benar mereka nanti [tidak akan masuk surga?]"', { fs: 46, m: [312.4] });
sv(315.8, 328.34, `<circle cx="960" cy="610" r="330" fill="rgba(233,242,58,.05)" stroke="${Y}" stroke-width="6" data-d="2080" data-dur="1.2"/>` + T(960, 360, 'KUASA PENUH ALLAH ﷻ', { f: .5, fs: 34, fw: 900, c: Y }) +
  `<circle cx="805" cy="630" r="135" fill="rgba(127,224,160,.10)" stroke="${CG}" stroke-width="5" data-f="6.5"/>` + T(805, 625, '🌿', { f: 6.6, fs: 70 }) + T(805, 690, 'surga', { f: 6.7, fs: 32, fw: 900, c: CG }) +
  `<circle cx="1115" cy="630" r="135" fill="rgba(255,138,92,.10)" stroke="${CR}" stroke-width="5" data-f="6.8"/>` + T(1115, 625, '🔥', { f: 6.9, fs: 70 }) + T(1115, 690, 'neraka', { f: 7.0, fs: 32, fw: 900, c: CR }) +
  T(960, 850, 'siapa saja yang Allah kehendaki', { f: 7.6, fs: 26, fw: 900 }), 'left:0;top:0', 1920, 1080, 1.0);

// --- 23 /infographic : hindari dosa besar → dosa kecil dihapus
scene(328.34, 354.08, { cut: 'glitch' });
label('KITA SEBAGAI HAMBA ALLAH ﷻ', 328.4, 'left:160px;top:130px', 354.08);
crd(`<div style="width:740px;height:300px;border:6px solid ${CR};border-radius:20px;text-align:center;padding-top:34px;background:rgba(255,138,92,.06)"><div style="font-size:80px">🛑</div><div style="font:900 46px Inter;color:${CR}">HINDARI dosa BESAR</div><div style="font:800 28px Inter;margin-top:6px">bersungguh-sungguh menjauhkan diri</div></div>`, 'left:160px;top:190px', 330.4, 354.08, 'left', 'stamp');
crd(`<div style="font:900 90px Inter;color:${Y}">→</div>`, 'left:925px;top:270px', 338.0, 354.08, 'left', 'whoosh');
crd(`<div style="width:740px;height:300px;border:6px solid ${Y};border-radius:20px;text-align:center;padding-top:34px;background:rgba(233,242,58,.06)"><div style="font-size:80px">🧽</div><div style="font:900 46px Inter;color:${Y}">dosa-dosa KECIL</div><div style="font:800 28px Inter;margin-top:6px">insyaallah dihapuskan oleh Allah ﷻ</div></div>`, 'left:1020px;top:190px', 340.4, 354.08, 'up', 'impact');
label('DENGAN MENGERJAKAN…', 345.0, 'left:160px;top:540px', 354.08);
[['🕌', 'sembahyang', 346.4], ['🌙', 'puasa', 348.3], ['💝', 'sedekah', 349.9], ['✨', 'amal saleh lainnya', 351.6]].forEach(([e, s, t], i) => crd(`<div style="width:380px;height:190px;border:4px solid ${CG};border-radius:18px;text-align:center;padding-top:22px"><div style="font-size:66px">${e}</div><div style="font:900 32px Inter;color:${CG}">${s}</div></div>`, `left:${160 + i * 410}px;top:600px`, t, 354.08, 'up', 'tick'));

// --- 24 /scripture : An-Nisa 31
scene(354.08, 364.82, { cut: 'glitch' });
label('SESUAI FIRMAN ALLAH ﷻ · QS. AN-NISA : 31', 354.15, 'left:160px;top:130px', 364.82);
paper(354.3, 'left:160px;top:190px;width:1600px;height:330px', '', 364.82);
arw(node('إِنْ تَجْتَنِبُوا [كَبَائِرَ] مَا تُنْهَوْنَ عَنْهُ نُكَفِّرْ عَنْكُمْ سَيِّئَاتِكُمْ وَنُدْخِلْكُمْ مُدْخَلًا كَرِيمًا', 'left:220px;width:1480px;top:230px;text-align:center;font-size:66px;line-height:1.75;color:#151515'), 354.5, 9.6, { marks: [357.0] });
chip('QS. AN-NISA : 31', 355.0, 'left:160px;top:560px', 364.82, Y);
line(358.6, 364.82, 'left:160px;top:660px;width:1600px', '"jika kamu menjauhi [dosa-dosa besar]… Kami hapus kesalahan-kesalahanmu & Kami masukkan ke tempat yang [mulia]"', { fs: 40, m: [360.0, 362.6] });

// --- 25 /mindmap : laknat
scene(364.82, 376.66, { cut: 'glitch' });
arw(node('أَوْ [لَعْنٌ]', 'left:160px;top:160px;width:1600px;text-align:center;font-size:110px;color:#fff'), 364.9, 1.4, { marks: [365.8] });
sv(367.4, 376.66, LN([[860, 330], [540, 400]], { s: CR, sw: 4 }) + LN([[1060, 330], [1380, 400]], { s: CR, sw: 4, del: 1.8 }), 'left:0;top:0', 1920, 1080, .6);
crd(vcard(700, CR, `<div style="font:900 40px Inter">⛔ laknat dari ${sp('ALLAH ﷻ', CR)}</div>`), 'left:200px;top:400px', 367.6, 376.66, 'left', 'tick');
crd(vcard(700, CR, `<div style="font:900 40px Inter">⛔ atau dari ${sp('RASULULLAH ﷺ', CR)}</div>`), 'left:1020px;top:400px', 369.3, 376.66, 'up', 'tick');
line(370.5, 376.66, 'left:160px;top:590px;width:1600px;text-align:center', 'sudah ada peringatan & laknat → [jelas dosa besar]', { fs: 50, m: [374.4] });
crd(`<div style="width:1600px"><div class="mono" style="font-size:20px;color:#fff;margin-bottom:12px">6 TANDA DOSA BESAR · LIHAT EP24</div><div style="display:flex;gap:14px">${['حَدٌّ', 'وَعِيدٌ', 'لَعْنٌ', 'تَبَرُّؤٌ', 'لَيْسَ مِنَّا', 'نَفْيُ إِيمَانٍ'].map((s, i) => `<div class="ar" style="flex:1;text-align:center;font-size:40px;padding:8px 0;border:3px solid ${i === 2 ? CR : 'rgba(233,242,58,.5)'};border-radius:12px;color:${i === 2 ? '#111' : Y};background:${i === 2 ? CR : 'transparent'}">${s}</div>`).join('')}</div></div>`, 'left:160px;top:740px', 372.0, 376.66, 'up', 'beep');

// --- 26 /citation : hadis laknat suap
scene(376.66, 384.6, { cut: 'glitch' });
label('CONTOHNYA · HADIS TENTANG SUAP', 376.7, 'left:160px;top:130px', 384.6);
paper(376.75, 'left:160px;top:190px;width:1600px;height:300px', '', 384.6);
arw(node('لَعَنَ اللَّهُ [الرَّاشِيَ] وَ[الْمُرْتَشِيَ] وَ[الرَّائِشَ] الَّذِي يَمْشِي بَيْنَهُمَا', 'left:220px;width:1480px;top:230px;text-align:center;font-size:66px;line-height:1.75;color:#151515'), 376.9, 5.6, { marks: [378.3, 379.7, 381.1] });
crd(`<div class="ar" style="font-size:90px;color:${CR};text-align:center;width:1600px">لَعَنَ اللَّهُ الرَّاشِيَ</div>`, 'left:160px;top:600px', 383.1, 384.6, 'scale', 'impact');

// --- 27 /balance : laknat manusia vs laknat Allah
scene(384.6, 393.32, { cut: 'glitch' });
const PAN = (x, y) => `<path d="M${x} ${y} L${x - 120} ${y + 150} M${x} ${y} L${x + 120} ${y + 150}" stroke="#fff" stroke-width="3" data-d="400"/><path d="M${x - 150} ${y + 150} Q${x} ${y + 230} ${x + 150} ${y + 150} Z" fill="rgba(233,242,58,.08)" stroke="${Y}" stroke-width="5" data-d="520"/>`;
sv(384.7, 389.6, `<path d="M960 240 V470 M880 470 H1040" stroke="#fff" stroke-width="6" data-d="400"/><path d="M560 290 H1360" stroke="${Y}" stroke-width="7" data-d="800"/>` + PAN(560, 290) + PAN(1360, 290), 'left:0;top:0', 1920, 1080, .7);
sv(389.6, 393.32, `<path d="M960 240 V470 M880 470 H1040" stroke="#fff" stroke-width="6" data-d="400" data-dur=".01"/><path d="M560 230 L1360 350" stroke="${CR}" stroke-width="7" data-d="820" data-dur=".3"/>` + PAN(560, 230).replace(/data-d="(\d+)"/g, 'data-d="$1" data-dur=".2"') + PAN(1360, 350).replace(/data-d="(\d+)"/g, 'data-d="$1" data-dur=".2"').replace(/rgba\(233,242,58,\.08\)/, 'rgba(255,138,92,.25)'), 'left:0;top:0', 1920, 1080, .7);
crd(vcard(620, CG, `<div style="font:900 32px Inter;line-height:1.3">🌍 semua orang di dunia melaknat kita → ${sp('tidak jadi masalah', CG)}</div>`), 'left:250px;top:560px', 384.8, 393.32, 'up', 'tick');
crd(vcard(620, CR, `<div style="font:900 32px Inter;line-height:1.3">⚠ kalau ALLAH yang melaknat → ${sp('INI YANG JADI MASALAH', CR)}</div>`, 'rgba(255,138,92,.08)'), 'left:1050px;top:640px', 389.8, 393.32, 'up', 'impact');

// --- 28 /search : hadis ar-rasyi
scene(393.32, 411.5, { cut: 'glitch', light: 1 });
const ST2 = { type: .4, scan: 2.0, res: 3.2, click: 4.4, det: 5.0 };
searchFind(393.32, 411.5, {
  q: 'لعن الله الراشي والمرتشي والرائش', count: 4, pick: 0, shelfPick: 0, times: ST2,
  shelf: [['Musnad Ahmad', 'المسند'], ['Sunan Abi Dawud', 'سنن أبي داود'], ['Sunan at-Tirmidzi', 'سنن الترمذي'], ["Majma' az-Zawa'id", 'مجمع الزوائد'], ['an-Nihayah · Ibnu al-Atsir', 'النهاية']],
  results: [
    { title: 'Musnad Ahmad no. 22399 · dari Tsauban', tag: 'HADIS', ar: 'الرَّاشِيَ وَالْمُرْتَشِيَ وَالرَّائِشَ', sub: 'lafaz lengkap dengan "ar-ra\'isy" (perantara)' },
    { title: 'Sunan Abi Dawud 3580 · at-Tirmidzi 1337', tag: 'SHAHIH', ar: 'لَعَنَ رَسُولُ اللَّهِ ﷺ الرَّاشِيَ وَالْمُرْتَشِيَ', sub: "dari 'Abdullah bin 'Amr · tanpa kata perantara" },
    { title: "Majma' az-Zawa'id · al-Haitsami", tag: 'PENILAIAN', ar: 'وَالرَّائِشَ الَّذِي يَمْشِي بَيْنَهُمَا', sub: 'tambahan "perantara": ada perawi tak dikenal' },
    { title: 'an-Nihayah · Ibnu al-Atsir (bab رشا)', tag: 'SYARAH', ar: 'تَوَصُّلًا إِلَى أَخْذِ حَقٍّ أَوْ دَفْعِ ظُلْمٍ', sub: 'memberi untuk ambil hak / tolak zalim: tidak termasuk' }],
  det: { title: 'Laknat suap-menyuap', ar: 'الرِّشْوَةُ', rows: [['AR-RASYI', 'penyogok · yang memberi'], ['AL-MURTASYI', 'yang menerima sogok'], ["AR-RA'ISY", 'perantara di antara keduanya'], ['DERAJAT', 'shahih · tambahan "perantara" lemah'], ['YANG DILAKNAT', 'sogok yang mengubah hukum'], ['PENGECUALIAN', 'menolak zalim → dosa pada penerima'], ['SUMBER', 'Ahmad · Abu Dawud · at-Tirmidzi']], quote: 'لَعَنَ اللَّهُ الرَّاشِيَ وَالْمُرْتَشِيَ' }
});
camTour(393.32, 411.5, ST2);

// --- 29 /checklist : contoh 1 · kita yang melanggar
scene(411.5, 431.64, { cut: 'glitch' });
label('CONTOH 1 · KITA YANG MELANGGAR', 411.55, 'left:160px;top:130px', 431.64);
crd(`<div style="width:500px;height:300px;border:5px solid #fff;border-radius:20px;text-align:center;padding-top:40px"><div style="font-size:120px">🏍️</div><div style="font:900 34px Inter">naik sepeda motor</div></div>`, 'left:160px;top:190px', 411.6, 431.64, 'scale', 'whoosh');
tick('tidak pakai helm ⛑️', 413.6, 431.64, 'left:720px;top:200px', CR, '✕', 40);
tick('tidak punya SIM 🪪', 414.8, 431.64, 'left:720px;top:300px', CR, '✕', 40);
tick('surat-surat tidak lengkap 📄', 416.2, 431.64, 'left:720px;top:400px', CR, '✕', 40);
crd(vcard(1600, '#fff', `<div style="font:900 36px Inter;line-height:1.3">⚖️ berarti sudah ${sp('melanggar undang-undang')} yang mesti ditaati untuk keselamatan diri</div>`), 'left:160px;top:540px', 418.2, 431.64, 'up', 'tick');
[['👮', 'ditahan polisi', 424.2], ['💵', 'beri Rp50.000', 426.9], ['🔓', 'dilepaskan', 428.0]].forEach(([e, s, t], i) => crd(`<div style="width:500px;height:110px;border:4px solid ${Y};border-radius:16px;display:flex;align-items:center;justify-content:center;gap:18px;font:900 36px Inter"><span style="font-size:56px">${e}</span>${s}</div>`, `left:${160 + i * 550}px;top:720px`, t, 431.64, 'left', 'click'));
stamp('⛔ LAKNAT ALLAH', 'left:700px;top:880px', 429.6, 431.64, CR);

// --- 30 /split-screen : contoh 2 · kita benar
scene(431.64, 452.48, { cut: 'glitch' });
crd(`<div style="width:740px;height:640px;border:4px solid ${CR};border-radius:20px;background:rgba(255,138,92,.04)"></div>`, 'left:160px;top:190px', 431.7, 452.48, 'left', 'click');
crd(`<div style="width:780px;height:640px;border:4px solid ${CG};border-radius:20px;background:rgba(127,224,160,.04)"></div>`, 'left:980px;top:190px', 431.8, 452.48, 'up', 'click');
crd(`<div class="mono" style="font-size:24px;color:${CR}">CONTOH 1 · KITA SALAH</div>`, 'left:200px;top:220px', 431.75, 452.48, 'fade', 'tick');
crd(`<div style="font:900 34px Inter;line-height:1.6;width:660px">✕ helm · SIM · surat<br>💵 menyogok agar lolos<br>${sp('⛔ dilaknat Allah', CR)}</div>`, 'left:200px;top:290px', 432.0, 452.48, 'up', 'tick');
crd(`<div class="mono" style="font-size:24px;color:${CG}">CONTOH 2 · KITA BENAR</div>`, 'left:1020px;top:220px', 431.85, 452.48, 'fade', 'tick');
[['✓ helm & surat-surat lengkap', 432.6, '#fff'], ['👮 ditahan · diperas · dicari kesalahan', 438.4, '#fff'], ['💵 Rp50.000 → kita selamat', 443.5, '#fff'], ['🛡️ kita benar → untuk menolak bala', 446.3, Y]].forEach(([s, t, c], i) => crd(`<div style="font:900 32px Inter;color:${c};width:700px">${s}</div>`, `left:1020px;top:${290 + i * 100}px`, t, 452.48, 'left', 'tick'));
crd(pill('✓ masih diperbolehkan', CG), 'left:1020px;top:700px', 450.9, 452.48, 'scale', 'impact');
chip('ULAMA: BOLEH BAGI PEMBERI UNTUK MENOLAK ZALIM · DOSA PADA PENERIMA', 447.4, 'left:160px;top:880px', 452.48, CG);

// --- 31 /roadmap : contoh 3 · difitnah
scene(452.48, 479.06, { cut: 'glitch' });
label('CONTOH 3 · KITA DIFITNAH', 452.55, 'left:160px;top:130px', 479.06);
sv(452.6, 479.06, `<path d="M180 380 H1740" stroke="#fff" stroke-width="4" stroke-dasharray="18 12" data-d="1560" data-dur="1.2"/>` +
  [[260, '🗣️', 'difitnah', .2], [610, '⚖️', 'disidang', 5.6], [960, '🙅', 'tak pernah melakukan', 7.2], [1310, '⛓️', 'bakal dipenjara', 13.2], [1660, '😢', '"aku difitnah orang"', 15.0]].map(([x, e, s, f]) => node3(x, 380, e, s, f, f > 13 ? CR : Y, 66)).join(''), 'left:0;top:0', 1920, 1080, 1.0);
crd(vcard(1600, '#fff', `<div style="font:900 36px Inter;line-height:1.3">kalau tidak disogok → ${sp('dipenjarakan, dihukum orang', CR)} · padahal bukan aku yang melakukannya</div>`), 'left:160px;top:620px', 462.0, 479.06, 'up', 'tick');
crd(vcard(1600, CR, `<div class="mono" style="font-size:22px;color:${CR}">YANG AKAN DILAKNAT ALLAH ﷻ</div><div style="font:900 40px Inter;margin-top:8px">📥 yang menerima · 📝 yang membuat perkara · 🎭 yang mengada-ada</div>`, 'rgba(255,138,92,.06)'), 'left:160px;top:790px', 472.0, 479.06, 'up', 'impact');

// --- 32 /citation : laknat tasyabbuh
scene(479.06, 490.84, { cut: 'glitch' });
label('LAKNAT BAGI YANG MENYERUPAI LAWAN JENIS', 479.1, 'left:160px;top:130px', 490.84);
paper(479.15, 'left:160px;top:190px;width:1600px;height:300px', '', 490.84);
arw(node('لَعَنَ اللَّهُ [الْمُتَشَبِّهَاتِ] مِنَ النِّسَاءِ بِالرِّجَالِ وَ[الْمُتَشَبِّهِينَ] مِنَ الرِّجَالِ بِالنِّسَاءِ', 'left:220px;width:1480px;top:220px;text-align:center;font-size:62px;line-height:1.75;color:#151515'), 479.3, 5.6, { marks: [480.8, 483.0] });
line(485.3, 490.84, 'left:160px;top:540px;width:1600px', 'Allah melaknat [perempuan yang menyerupai laki-laki] & [laki-laki yang menyerupai perempuan]', { fs: 44, m: [486.8, 489.0] });
chip("HR. AL-BUKHARI NO. 5885 · IBNU 'ABBAS", 480.0, 'left:160px;top:720px', 490.84, CG);

// --- 33 /diagram : meniru · menyerupai
scene(490.84, 499.2, { cut: 'glitch' });
line(490.9, 499.2, 'left:160px;top:150px;width:1600px;text-align:center', 'perkara khusus perihal [meniru · menyerupai]', { fs: 52, m: [492.6] });
sv(490.9, 499.2, DEFS + `<circle cx="560" cy="480" r="130" fill="none" stroke="${CB}" stroke-width="6" data-d="820"/>` + T(560, 530, '♂', { f: .2, fs: 150, c: CB }) + T(560, 660, 'laki-laki', { f: .3, fs: 32, fw: 900, c: CB }) +
  `<circle cx="1360" cy="480" r="130" fill="none" stroke="#ffb0d0" stroke-width="6" data-d="820"/>` + T(1360, 530, '♀', { f: .2, fs: 150, c: '#ffb0d0' }) + T(1360, 660, 'perempuan', { f: .3, fs: 32, fw: 900, c: '#ffb0d0' }) +
  '<g data-f=".6">' + LN([[710, 440], [1210, 440]], { s: Y, sw: 5, arrow: 1 }) + LN([[1210, 520], [710, 520]], { s: Y, sw: 5, arrow: 1 }) + '</g>' + T(960, 505, '✕', { f: 1.2, fs: 90, fw: 900, c: CR }), 'left:0;top:0', 1920, 1080, .8);
crd(pill('🚫 jangan sampai kita berani melakukannya', '#fff'), 'left:520px;top:740px', 495.6, 499.2, 'scale', 'beep');
stamp('DOSA BESAR', 'left:800px;top:870px', 497.6, 499.2, CR);

// --- 34 /badge : tabarru'
scene(499.2, 510.86, { cut: 'glitch' });
crd(`<div style="width:400px;height:400px;border-radius:50%;border:8px solid ${CB};background:rgba(127,214,255,.08);text-align:center;padding-top:110px"><div class="ar" style="font-size:92px;color:${CB}">تَبَرُّؤٌ</div><div class="mono" style="font-size:22px;margin-top:8px">BERLEPAS DIRI</div></div>`, 'left:160px;top:190px', 499.3, 510.86, 'scale', 'stamp');
line(500.5, 510.86, 'left:640px;top:220px;width:1120px', 'Rasulullah ﷺ [berlepas diri] → berarti [dosanya besar]', { fs: 48, m: [501.6, 503.4] });
paper(504.2, 'left:640px;top:420px;width:1120px;height:200px', '', 510.86);
arw(node('أَنَا [بَرِيءٌ] مِمَّنْ حَلَقَ وَصَرَخَ وَخَرَقَ', 'left:670px;top:455px;width:1060px;text-align:center;font-size:64px;color:#151515'), 504.4, 5.8, { marks: [506.0] });
chip("HR. AL-BUKHARI 1296 · MUSLIM 104 · ABU MUSA", 505.4, 'left:640px;top:670px', 510.86, CG);

// --- 35 /canvas : tiga perbuatan saat musibah
scene(510.86, 530.86, { cut: 'glitch' });
label('KETIKA MENDAPAT MUSIBAH ⚠', 510.9, 'left:160px;top:130px', 530.86);
[['✂️', 'حَلَقَ', 'menggundul kepala', 512.8], ['📢', 'صَرَخَ', 'berteriak menjerit', 516.6], ['👕', 'خَرَقَ', 'merobek-robek baju', 520.4]].forEach(([e, ar, s, t], i) => crd(`<div style="width:500px;height:320px;border:5px solid ${CB};border-radius:20px;text-align:center;padding-top:26px;position:relative"><div style="position:absolute;right:18px;top:10px;font:900 50px Inter;color:${CR}">✕</div><div style="font-size:84px">${e}</div><div class="ar" style="font-size:52px;color:${CB}">${ar}</div><div style="font:900 34px Inter">${s}</div></div>`, `left:${160 + i * 550}px;top:190px`, t, 530.86, 'drop', 'stamp'));
crd(vcard(1600, CB, `<div style="font:900 38px Inter">🙅 perkara yang ${sp('Nabi kita sendiri pun berlepas', CB)} darinya</div>`), 'left:160px;top:560px', 522.7, 530.86, 'up', 'impact');
crd(`<div style="font:700 56px/1.3 Kalam;color:#fff8d0;width:1600px;text-align:center">"kalau Nabi sudah berlepas… ${sp('siapa lagi')} yang hendak kita ikuti?"</div>`, 'left:160px;top:730px', 526.4, 530.86, 'up', 'paper');

// --- 36 /layers : laisa minna
scene(530.86, 547.14, { cut: 'glitch' });
label('BUKAN GOLONGAN KAMI · لَيْسَ مِنَّا', 530.9, 'left:160px;top:130px', 547.14);
paper(531.0, 'left:160px;top:190px;width:1600px;height:200px', '', 547.14);
arw(node('لَيْسَ مِنَّا مَنْ [غَشَّ] مُسْلِمًا أَوْ [ضَارَّهُ] أَوْ [مَكَرَ بِهِ]', 'left:220px;width:1480px;top:225px;text-align:center;font-size:66px;color:#151515'), 531.1, 4.6, { marks: [532.4, 533.8, 535.0] });
[['غَشَّ', 'menipu orang lain · apalagi sesama muslim', 536.0, Y], ['ضَارَّهُ', 'memudaratkan · mencelakainya', 541.4, CR], ['مَكَرَ بِهِ', 'menjebaknya', 544.6, CR]].forEach(([ar, s, t, c], i) => crd(`<div style="width:${1600 - i * 120}px;height:100px;border-left:12px solid ${c};background:rgba(255,255,255,.05);display:flex;align-items:center;gap:30px;padding:0 30px"><span class="ar" style="font-size:50px;color:${c};width:200px;text-align:center">${ar}</span><span style="font:900 36px Inter">${s}</span></div>`, `left:${160 + i * 60}px;top:${440 + i * 125}px`, t, 547.14, 'left', 'tick'));
chip("AR-RAFI'I DARI 'ALI · PENGUAT: HR. MUSLIM 102 «مَنْ غَشَّ فَلَيْسَ مِنِّي»", 538.0, 'left:160px;top:840px', 547.14, CG);

// --- 37 /iceberg : iman & amanah
scene(547.14, 552.48, { cut: 'glitch' });
arw(node('لَا إِيمَانَ لِمَنْ لَا [أَمَانَةَ] لَهُ', 'left:160px;top:140px;width:1600px;text-align:center;font-size:76px;color:#fff'), 547.2, 2.4, { marks: [548.8] });
line(549.8, 552.48, 'left:160px;top:290px;width:1600px;text-align:center', 'tidak ada [iman] bagi orang yang [tidak amanah]', { fs: 50, m: [550.5, 551.5] });
sv(547.4, 552.48, `<path d="M300 560 H1620" stroke="${CB}" stroke-width="3" stroke-dasharray="14 10" data-d="1320"/>` +
  `<path d="M820 560 L900 440 L960 480 L1030 410 L1110 560 Z" fill="rgba(233,242,58,.12)" stroke="${Y}" stroke-width="5" data-d="700"/>` + T(965, 540, 'IMAN', { f: .6, fs: 32, fw: 900, c: Y }) +
  `<path d="M780 560 L1160 560 L1250 720 L1100 860 L830 870 L680 720 Z" fill="rgba(127,214,255,.08)" stroke="${CB}" stroke-width="5" data-d="1300" data-del=".3"/>` + T(965, 730, 'AMANAH', { f: .9, fs: 40, fw: 900, c: CB }) + T(965, 780, 'fondasinya', { f: 1.0, fs: 26, fw: 700 }), 'left:0;top:0', 1920, 1080, .9);
chip('HR. AHMAD · IBNU HIBBAN · ANAS', 548.2, 'left:1300px;top:860px', 552.48, CG);

// --- 38 /handwritten : doa penutup
scene(552.48, 560.26, { cut: 'glitch' });
mePol('left:200px;top:200px', 552.55, 560.26, -4, 380);
crd(`<div style="font:700 54px/1.35 Kalam;color:#fff8d0;width:1000px">"mudah-mudahan Allah ﷻ menolong kita… sehingga benar-benar ${sp('menjauhkan diri')} dari perkara dosa besar"</div>`, 'left:760px;top:230px', 552.7, 560.26, 'up', 'paper');
crd(pill('🤲 aamiin', CG), 'left:760px;top:680px', 557.2, 560.26, 'scale', 'tick');

// --- 39 /teaser : salam & salawat
scene(560.26, TOTAL, { cut: 'hard' });
arw(node('السَّلَامُ عَلَيْكَ يَا [نَبِيَّ اللَّهِ]', 'left:160px;top:130px;width:1600px;text-align:center;font-size:58px;color:#fff'), 560.4, 4.0, { marks: [563.0] });
arw(node('السَّلَامُ عَلَيْكَ يَا [رَسُولَ اللَّهِ]', 'left:160px;top:240px;width:1600px;text-align:center;font-size:58px;color:#fff'), 565.9, 4.0, { marks: [568.6] });
arw(node('السَّلَامُ عَلَيْكَ يَا [حَبِيبَ اللَّهِ]', 'left:160px;top:350px;width:1600px;text-align:center;font-size:58px;color:#fff'), 571.4, 4.0, { marks: [574.4] });
arw(node('اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ', 'left:160px;top:470px;width:1600px;text-align:center;font-size:62px;color:' + Y), 578.0, 5.0);
sub2('left:560px;top:700px', 572.5, TOTAL);

// ================================================================== JADWAL KODE VISUAL
[[0, 12.74, '/kinetic-type'], [12.74, 23.1, '/blueprint'], [23.1, 33.4, '/soundwave'], [33.4, 49.48, '/citation'], [49.48, 70.42, '/search'], [70.42, 89.06, '/exploded-view'], [89.06, 109.44, '/cycle'], [109.44, 120.0, '/callout'], [120.0, 134.34, '/diagram'], [134.34, 144.88, '/split-screen'],
 [144.88, 159.64, '/callout'], [159.64, 170.96, '/checklist'], [170.96, 183.38, '/roadmap'], [183.38, 196.6, '/badge'], [196.6, 209.72, '/versus'], [209.72, 216.32, '/flowchart'], [216.32, 249.3, '/sketchnotes'], [249.3, 264.48, '/tree'], [264.48, 282.76, '/citation'], [282.76, 309.76, '/timeline'],
 [309.76, 328.34, '/venn'], [328.34, 354.08, '/infographic'], [354.08, 364.82, '/scripture'], [364.82, 376.66, '/mindmap'], [376.66, 384.6, '/citation'], [384.6, 393.32, '/balance'], [393.32, 411.5, '/search'], [411.5, 431.64, '/checklist'], [431.64, 452.48, '/split-screen'], [452.48, 479.06, '/roadmap'],
 [479.06, 490.84, '/citation'], [490.84, 499.2, '/diagram'], [499.2, 510.86, '/badge'], [510.86, 530.86, '/canvas'], [530.86, 547.14, '/layers'], [547.14, 552.48, '/iceberg'], [552.48, 560.26, '/handwritten'], [560.26, TOTAL, '/teaser']]
 .reduce((acc, [a, b, c]) => { if (!acc.m[c]) acc.m[c] = String(++acc.n).padStart(2, '0'); codeTag(a, b, acc.m[c], c); return acc; }, { n: 0, m: {} });
