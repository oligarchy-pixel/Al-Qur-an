// ================================================================== ADEGAN EPISODE 22 · Surah Ali Imran, Keistimewaan Nabi Adam & Qana'ah
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


// ================================================================== EP 16 · Jual Beli, Timbangan, Pendakwah & Penguasa
const vcard = (w, c, inner, bg = 'transparent') => `<div style="width:${w}px;border:4px solid ${c};border-radius:18px;padding:22px 26px;background:${bg}">${inner}</div>`;
const xcard = (e, s, t, t1, css, c = CR, mark = '✕') => crd(`<div style="width:500px;height:250px;border:4px solid ${c};border-radius:18px;padding:22px;background:rgba(255,138,92,.06)"><div style="display:flex;justify-content:space-between"><span style="font-size:70px">${e}</span><span style="font:900 60px Inter;color:${c}">${mark}</span></div><div style="font:900 32px Inter;margin-top:10px;line-height:1.2">${s}</div></div>`, css, t, t1, 'drop', 'stamp');
const tick = (s, t, t1, css, c = Y, m = '✓', fs = 50) => crd(`<div style="display:flex;align-items:center;gap:24px"><div style="width:78px;height:78px;flex:none;border-radius:12px;background:${c};display:flex;align-items:center;justify-content:center;font:900 50px Inter;color:#111">${m}</div><div style="font:900 ${fs}px Inter">${s}</div></div>`, css, t, t1, 'scale', 'tick');
const pill = (s, c, fg = '#111') => `<div style="font:900 40px Inter;color:${fg};background:${c};border-radius:12px;padding:10px 26px;display:inline-block">${s}</div>`;

// --- 01 /kinetic-type : pembuka
scene(0, 16.4, { cut: 'none' });
arw(node(BSM, 'left:140px;top:120px;width:1000px;font-size:58px;color:#fff;text-align:left'), .1, 1.4);
arw(node('أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ', 'left:140px;top:210px;width:1100px;font-size:40px;color:#fff;text-align:left'), 1.6, 3.4);
label('FILE 22 · SURAH KE-3 · ALI \'IMRAN', 5.2, 'left:140px;top:300px', 16.4);
seg('Surah Ali \'Imran &<br>[Kisah Nabi Adam]', 5.5, 'left:140px;top:350px;width:1100px', { size: 92, iv: .04, marks: [8.2] });
line(10.8, 16.4, 'left:140px;top:640px;width:1050px', 'alhamdulillah · kita lanjutkan pembahasan [surah-surah Al-Qur\'an]', { fs: 38, m: [13.5] });
mePol('left:1300px;top:150px', .2, 16.4, 4, 400);
meTag(1.0, 16.4, 'سُورَةُ آلِ عِمْرَانَ');

// --- 02 /badge : identitas surah
scene(16.4, 32.0, { cut: 'glitch' });
crd(`<div style="text-align:center"><div class="mono" style="font-size:24px;color:${Y};margin-bottom:40px">SURAH KE-3 DALAM AL-QUR'AN</div><div class="ar" style="font-size:110px;color:${Y};line-height:1.3">سُورَةُ آلِ عِمْرَانَ</div></div>`, 'left:360px;top:130px;width:1200px', 16.5, 32.0, 'scale', 'stamp');
crd(vcard(520, CB, `<div class="mono" style="font-size:22px;color:${CB}">JENIS</div><div style="font:900 52px Inter;margin-top:6px">MADANIYAH</div><div class="ar" style="font-size:40px;color:${CB}">مَدَنِيَّةٌ</div>`), 'left:160px;top:520px', 20.1, 32.0, 'up', 'tick');
crd(vcard(520, '#fff', `<div class="mono" style="font-size:22px;color:#fff">TURUN</div><div style="font:900 38px Inter;margin-top:10px;line-height:1.3">sesudah hijrah<br>🕋 Makkah → 🕌 Madinah</div>`), 'left:700px;top:520px', 22.5, 32.0, 'up', 'tick');
(() => { const n = node(`<div style="width:520px;border:4px solid ${Y};border-radius:18px;padding:22px 26px"><div class="mono" style="font-size:22px;color:${Y}">JUMLAH AYAT</div><div class="cnt" style="font:900 90px Inter;color:${Y};line-height:1;margin-top:14px">0</div></div>`, 'left:1240px;top:520px');
  item(27.3, 32.0, n, (lt, t, it) => { n.style.opacity = clamp(lt / .3) * clamp((it.t1 - t) / .3); n.querySelector('.cnt').textContent = Math.round(200 * eio(lt / 1.4)); }); sfx(27.3, 'beep', .7); })();

// --- 03 /search : hadis hari Jumat
scene(32.0, 57.4, { cut: 'glitch', light: 1 });
searchFind(32.0, 57.4, {
  q: 'من قرأ السورة التي يذكر فيها آل عمران يوم الجمعة', count: 4, pick: 0, shelfPick: 0, times: { type: .4, scan: 2.0, res: 3.0, click: 4.0, det: 4.6 },
  shelf: [["Jam'ul Jawami' · as-Suyuthi", 'جمع الجوامع'], ['Al-Mu\'jam al-Kabir · ath-Thabarani', 'المعجم الكبير'], ["Tafsir ats-Tsa'labi", 'تفسير الثعلبي'], ["Al-Jami' ash-Shaghir", 'الجامع الصغير'], ["Dha'if al-Jami' · al-Albani", 'ضعيف الجامع']],
  results: [
    { title: "Jam'ul Jawami' · as-Suyuthi · j. 9 hlm. 787", tag: 'HADIS', ar: 'مَنْ قَرَأَ السُّورَةَ الَّتِي يُذْكَرُ فِيهَا آلُ عِمْرَانَ', sub: '(طب) ath-Thabarani dari Ibnu \'Abbas' },
    { title: "Tafsir ats-Tsa'labi · j. 8 hlm. 9", tag: 'TAFSIR', ar: 'يَوْمَ الْجُمُعَةِ', sub: 'dari Thawus, dari Ibnu \'Abbas' },
    { title: "Al-Jami' ash-Shaghir · no. 12532", tag: 'HADIS', ar: 'صَلَّى اللَّهُ عَلَيْهِ وَمَلَائِكَتُهُ', sub: 'Allah & malaikat bershalawat atasnya' },
    { title: "Dha'if al-Jami' · al-Albani · no. 5759", tag: "DHA'IF", ar: 'حَتَّى تَجِبَ الشَّمْسُ', sub: 'penilaian al-Albani: lemah' }],
  det: { title: 'Keutamaan Ali \'Imran di hari Jumat', ar: 'يَوْمُ الْجُمُعَةِ', rows: [['RIWAYAT', 'ath-Thabarani'], ['SAHABAT', "Ibnu 'Abbas radhiyallahu 'anhuma"], ['AMALAN', "membaca Surah Ali 'Imran hari Jumat"], ['BALASAN', 'Allah & malaikat bershalawat atasnya'], ['SAMPAI', 'terbenam matahari'], ['DINUKIL', "as-Suyuthi · Jam'ul Jawami'"], ['DERAJAT', "dha'if (al-Albani · 5759)"]], quote: 'صَلَّى اللَّهُ عَلَيْهِ وَمَلَائِكَتُهُ حَتَّى تَغِيبَ الشَّمْسُ' }
});
camTour(32.0, 57.4, { type: .4, scan: 2.0, res: 3.0, click: 4.0, det: 4.6 });

// --- 04 /callout : fahuwa ghaniy
scene(57.4, 76.0, { cut: 'glitch' });
crd(`<div style="width:1560px;border:5px solid ${Y};border-radius:20px;padding:26px 40px;background:rgba(233,242,58,.06);text-align:center"><div class="mono" style="font-size:24px;color:${Y}">RIWAYAT AD-DARIMI</div><div class="ar" style="font-size:96px;margin-top:6px;color:${Y}">مَنْ قَرَأَ آلَ عِمْرَانَ فَهُوَ غَنِيٌّ</div><div style="font:900 40px Inter">siapa membaca Ali 'Imran · dia orang yang kaya</div></div>`, 'left:180px;top:160px', 57.5, 76.0, 'scale', 'stamp');
sv(64.3, 76.0, `<circle cx="760" cy="760" r="120" fill="rgba(233,242,58,.12)" stroke="${Y}" stroke-width="5" data-f="0"/>` + T(760, 780, '💛', { f: .1, fs: 80 }) + T(760, 920, 'KAYA HATI', { f: .3, fs: 34, fw: 900, c: Y }) +
  `<path d="M900 760 H1060" stroke="#fff" stroke-width="4" data-f="1.0"/>` + T(1340, 740, 'merasa cukup di hatinya', { f: 1.2, fs: 36, fw: 900 }) + T(1340, 800, 'sebab hikmah di surah ini', { f: 6.0, fs: 30, fw: 800, c: CG }), 'left:0;top:0', 1920, 1080, .6);

// --- 05 /citation : Ali Imran 33
scene(76.0, 91.6, { cut: 'glitch' });
line(76.1, 84.8, 'left:160px;top:130px;width:1600px', 'kenapa dinamakan [Ali \'Imran]? · dijelaskan pada ayat 33–37', { fs: 42, m: [78.0] });
paper(84.7, 'left:160px;top:220px;width:1600px;height:360px', '', 91.6);
arw(node('إِنَّ اللَّهَ اصْطَفَىٰ آدَمَ وَنُوحًا وَآلَ إِبْرَاهِيمَ [وَآلَ عِمْرَانَ] عَلَى الْعَالَمِينَ', 'left:220px;width:1480px;top:290px;text-align:center;font-size:70px;line-height:1.7;color:#151515'), 84.8, 6.6, { marks: [89.4] });
chip("QS. ALI 'IMRAN : 33", 85.0, 'left:160px;top:610px', 91.6, Y);

// --- 06 /tree : 4 yang dipilih Allah
scene(91.6, 118.7, { cut: 'glitch' });
sv(91.7, 118.7, DEFS + BOX(660, 130, 600, 120, { s: Y, sw: 5 }) + T(960, 205, 'اصْطَفَىٰ · DIPILIH ALLAH', { f: .1, fs: 38, fw: 900, c: Y }) +
  [['01', 'NABI ADAM', 'آدَمَ', 330, 1.0], ['02', 'NABI NUH', 'نُوحًا', 750, 4.4], ['03', 'KELUARGA IBRAHIM', 'آلَ إِبْرَاهِيمَ', 1170, 7.0], ['04', "KELUARGA 'IMRAN", 'آلَ عِمْرَانَ', 1590, 11.6]].map(([n, s, ar, x, d], i) => '<g data-f="' + d + '">' + LN([[960, 250], [x, 370]], { s: i === 3 ? Y : '#fff', sw: 4 }) + '</g>' + BOX(x - 190, 380, 380, 220, { s: i === 3 ? Y : '#fff', sw: i === 3 ? 6 : 4, del: d + .1, fill: i === 3 ? 'rgba(233,242,58,.10)' : 'none' }) + T(x, 430, n, { f: d + .2, fs: 26, c: Y, ff: 'DejaVu Sans Mono' }) + T(x, 490, s, { f: d + .2, fs: 32, fw: 900 }) + T(x, 560, ar, { f: d + .3, ff: 'Amiri', fs: 44, fw: 700, c: i === 3 ? Y : '#fff' })).join('') +
  T(960, 700, 'عَلَى الْعَالَمِينَ · atas seluruh alam', { f: 14.7, fs: 36, fw: 900 }), 'left:0;top:0', 1920, 1080, .6);
crd(pill("→ maka disebutlah SURAH ALI 'IMRAN", Y), 'left:560px;top:800px', 99.4, 118.7, 'scale', 'impact');

// --- 07 /checklist : 5 keistimewaan Nabi Adam
scene(118.7, 201.3, { cut: 'glitch' });
line(118.8, 129.4, 'left:140px;top:130px;width:1640px', 'apa [keistimewaan Nabi Adam] yang diberikan Allah?', { fs: 44, m: [123.0] });
[['01', 'diciptakan langsung tanpa perantara', 'خَلَقَهُ بِيَدِهِ وَنَفَخَ فِيهِ مِنْ رُوحِهِ', 129.4, CB], ['02', 'para malaikat diperintah sujud hormat', 'وَأَسْجَدَ لَهُ مَلَائِكَتَهُ', 137.2, Y], ['03', 'diajari nama-nama segala sesuatu', 'وَعَلَّمَهُ أَسْمَاءَ كُلِّ شَيْءٍ', 157.1, CG], ['04', 'ditempatkan di surga · penghuni pertama', 'وَأَسْكَنَهُ الْجَنَّةَ', 169.8, CB], ['05', 'dinikahkan dengan Hawa di surga', 'وَزَوَّجَهُ بِحَوَّاءَ فِيهَا', 185.0, Y]].forEach(([n, s, ar, t, c], i) => crd(`<div style="width:1640px;display:flex;align-items:center;gap:24px;border-left:8px solid ${c};background:rgba(255,255,255,.04);padding:12px 22px"><div style="font:900 34px 'DejaVu Sans Mono';color:${c};flex:none">${n}</div><div style="font:900 34px Inter;flex:1">${s}</div><div class="ar" style="font-size:40px;color:${c};flex:none">${ar}</div></div>`, `left:140px;top:${220 + i * 120}px`, t, 201.3, 'left', 'tick'));
crd(`<div style="font:900 34px Inter;color:#111;background:${Y};border-radius:12px;padding:10px 24px">= kemuliaan اصْطَفَىٰ آدَمَ</div>`, 'left:140px;top:860px', 194.6, 201.3, 'scale', 'impact');

// --- 08 /citation : Al-Baqarah 34 (overlay saat poin 2)
scene(147.6, 157.1, { cut: 'none' });
paper(147.7, 'left:160px;top:820px;width:1600px;height:200px', '', 157.1);
arw(node('وَإِذْ قُلْنَا لِلْمَلَائِكَةِ اسْجُدُوا لِآدَمَ فَسَجَدُوا [إِلَّا إِبْلِيسَ أَبَىٰ وَاسْتَكْبَرَ] وَكَانَ مِنَ الْكَافِرِينَ', 'left:200px;width:1520px;top:850px;text-align:center;font-size:44px;line-height:1.6;color:#151515'), 147.8, 8.0, { marks: [152.0] });
chip('QS. AL-BAQARAH : 34', 148.0, 'left:1500px;top:770px', 157.1, Y);

scene(164.2, 169.8, { cut: 'none' });
paper(164.3, 'left:160px;top:820px;width:1600px;height:200px', '', 169.8);
arw(node('[وَعَلَّمَ آدَمَ الْأَسْمَاءَ كُلَّهَا]', 'left:200px;width:1520px;top:860px;text-align:center;font-size:58px;line-height:1.6;color:#151515'), 164.4, 3.0, { marks: [166.0] });
chip('QS. AL-BAQARAH : 31', 164.5, 'left:1500px;top:770px', 169.8, Y);

scene(178.8, 185.0, { cut: 'none' });
paper(178.9, 'left:160px;top:820px;width:1600px;height:200px', '', 185.0);
arw(node('وَقُلْنَا يَا آدَمُ [اسْكُنْ أَنْتَ وَزَوْجُكَ الْجَنَّةَ]', 'left:200px;width:1520px;top:860px;text-align:center;font-size:54px;line-height:1.6;color:#151515'), 179.0, 4.0, { marks: [181.5] });
chip('QS. AL-BAQARAH : 35', 179.1, 'left:1500px;top:770px', 185.0, Y);
scene(185.0, 201.3, { cut: 'none' });

// --- 09 /citation : Al-Baqarah 36
scene(201.3, 226.0, { cut: 'glitch' });
line(201.4, 213.4, 'left:160px;top:130px;width:1600px', 'lalu Allah turunkan Nabi Adam ke bumi · [لِحِكَمٍ] karena hikmah-hikmah', { fs: 40, m: [206.0] });
paper(213.3, 'left:160px;top:220px;width:1600px;height:440px', '', 226.0);
arw(node('فَأَزَلَّهُمَا الشَّيْطَانُ عَنْهَا فَأَخْرَجَهُمَا مِمَّا كَانَا فِيهِ وَقُلْنَا اهْبِطُوا بَعْضُكُمْ لِبَعْضٍ عَدُوٌّ [وَلَكُمْ فِي الْأَرْضِ مُسْتَقَرٌّ وَمَتَاعٌ إِلَىٰ حِينٍ]', 'left:220px;width:1480px;top:260px;text-align:center;font-size:52px;line-height:1.8;color:#151515'), 213.4, 12.2, { marks: [222.0] });
chip('QS. AL-BAQARAH : 36', 213.6, 'left:160px;top:690px', 226.0, Y);

// --- 10 /roadmap : tipu daya Iblis
scene(226.0, 250.7, { cut: 'glitch' });
line(226.1, 250.7, 'left:140px;top:130px;width:1640px', 'Iblis melakukan [segala macam cara] untuk menyingkirkan mereka dari surga', { fs: 40, m: [229.0] });
sv(229.0, 250.7, DEFS + `<path d="M220 560 C 560 420, 860 700, 1200 540 S 1620 440, 1720 520" fill="none" stroke="${CR}" stroke-width="6" stroke-dasharray="20 14" data-d="1700" data-dur="1.6"/>` +
  [['🗣️', 'memperdaya', 320, 520, 0], ['🌳', '"pohon kekal"', 760, 610, 4.6], ['🤞', 'bersumpah atas nama Allah', 1220, 540, 10.4], ['🍎', 'buahnya dimakan', 1660, 500, 15.6]].map(([e, s, x, y, d], i) => `<circle cx="${x}" cy="${y}" r="56" fill="#000" stroke="${CR}" stroke-width="5" data-f="${d}"/>` + T(x, y + 18, e, { f: d, fs: 48 }) + T(x, y + (i % 2 ? -90 : 120), s, { f: d + .2, fs: 32, fw: 900 })).join('') +
  T(760, 770, 'شَجَرَةُ الْخُلْدِ', { f: 6.4, ff: 'Amiri', fs: 44, fw: 700, c: CR }), 'left:0;top:0', 1920, 1080, 1.0);

// --- 11 /handwritten : dialog
scene(250.7, 270.4, { cut: 'glitch' });
label('DALAM KITAB TAFSIR', 250.8, 'left:160px;top:140px', 270.4);
crd(`<div style="width:1000px;border:3px dashed #fff;border-radius:30px 30px 30px 4px;padding:24px 30px;font:700 44px/1.35 Kalam;color:#fff8d0">"Wahai Adam, kenapa engkau makan buah yang Kularang itu?"</div>`, 'left:160px;top:210px', 250.8, 270.4, 'up', 'paper');
crd(`<div style="width:1200px;border:3px dashed ${Y};border-radius:30px 30px 4px 30px;padding:24px 30px;font:700 42px/1.35 Kalam;color:${Y}">"Demi kemuliaan-Mu ya Rabb… aku tak menyangka ada yang bersumpah atas nama-Mu, lalu ia berdusta."</div>`, 'left:560px;top:520px', 255.6, 270.4, 'up', 'whoosh');

// --- 12 /citation : Al-Baqarah 37 + doa Al-A'raf 23
scene(270.4, 310.5, { cut: 'glitch' });
paper(270.5, 'left:160px;top:150px;width:1600px;height:320px', '', 310.5);
arw(node('فَتَلَقَّىٰ آدَمُ مِنْ رَبِّهِ كَلِمَاتٍ فَتَابَ عَلَيْهِ [إِنَّهُ هُوَ التَّوَّابُ الرَّحِيمُ]', 'left:220px;width:1480px;top:200px;text-align:center;font-size:62px;line-height:1.7;color:#151515'), 271.0, 9.6, { marks: [278.0] });
chip('QS. AL-BAQARAH : 37', 270.7, 'left:160px;top:490px', 310.5, Y);
crd(`<div style="width:1600px;border:4px solid ${CG};border-radius:18px;padding:18px 28px;background:rgba(127,224,160,.06)"><div class="mono" style="font-size:22px;color:${CG}">DOA YANG DIAJARKAN ALLAH UNTUK NABI ADAM · QS. AL-A'RAF : 23</div><div class="ar" style="font-size:52px;text-align:center;line-height:1.6">رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ</div></div>`, 'left:160px;top:590px', 288.4, 310.5, 'up', 'stamp');
[['🤲 mengadu kepada Allah', 296.0], ['🙇 akui semua kesalahan', 300.5], ['✅ Allah terima taubat kita', 306.0]].forEach(([s, t], i) => crd(`<div style="font:900 32px Inter;color:${Y}">${s}</div>`, `left:${160 + i * 540}px;top:900px`, t, 310.5, 'up', 'tick'));

// --- 13 /split-screen : jawaban Adam & Hawa
scene(310.5, 364.8, { cut: 'glitch' });
line(310.6, 321.5, 'left:140px;top:130px;width:1640px', 'hikmah lain dalam kitab tafsir: [kenapa] buah itu dimakan?', { fs: 42, m: [316.0] });
crd(`<div style="width:780px;height:520px;border:5px solid ${CB};border-radius:20px;padding:30px;background:rgba(127,214,255,.05)"><div class="mono" style="font-size:24px;color:${CB}">JAWABAN NABI ADAM</div><div style="font:900 44px Inter;margin-top:16px;color:${CB}">"aku diperintah Hawa"</div><div style="font:800 32px Inter;margin-top:18px;line-height:1.4">karena mentaati istriku</div></div>`, 'left:140px;top:240px', 321.5, 364.8, 'up', 'stamp');
crd(`<div style="width:780px;height:520px;border:5px solid ${CR};border-radius:20px;padding:30px;background:rgba(255,138,92,.05)"><div class="mono" style="font-size:24px;color:${CR}">SEBAB DARI HAWA</div><div style="font:900 44px Inter;margin-top:16px;color:${CR}">tidak merasa puas</div><div style="font:800 32px Inter;margin-top:18px;line-height:1.4">dengan apa yang sudah dibolehkan Allah di surga</div></div>`, 'left:1000px;top:240px', 334.1, 364.8, 'up', 'stamp');
crd(pill('semua boleh dimakan · kecuali SATU buah saja', Y), 'left:500px;top:820px', 347.5, 364.8, 'scale', 'impact');

// --- 14 /balance : tamak vs qanaah
scene(364.8, 388.7, { cut: 'glitch' });
(() => { const n = node(`<svg width="1400" height="520" viewBox="0 0 1400 520"><path d="M700 60 V440 M540 480 H860" stroke="#fff" stroke-width="6"/><g class="bm"><path d="M240 80 H1160" stroke="#fff" stroke-width="6"/><path d="M240 80 L150 240 H330 Z" fill="rgba(255,138,92,.15)" stroke="${CR}" stroke-width="4"/><text x="240" y="300" text-anchor="middle" font-family="Inter" font-weight="900" font-size="40" fill="${CR}">TAMAK</text><text x="240" y="350" text-anchor="middle" font-family="Inter" font-weight="800" font-size="26" fill="#fff">tak merasa cukup</text><path d="M1160 80 L1070 240 H1250 Z" fill="rgba(127,224,160,.15)" stroke="${CG}" stroke-width="4"/><text x="1160" y="300" text-anchor="middle" font-family="Inter" font-weight="900" font-size="40" fill="${CG}">QANA'AH</text><text x="1160" y="350" text-anchor="middle" font-family="Inter" font-weight="800" font-size="26" fill="#fff">merasa cukup</text></g></svg>`, 'left:260px;top:180px');
  item(364.9, 388.7, n, (lt, t, it) => { n.style.opacity = clamp(lt / .3) * clamp((it.t1 - t) / .3); n.querySelector('.bm').setAttribute('transform', `rotate(${(t < 368.2 ? 5 : -5) * eio(clamp((t - (t < 368.2 ? 365 : 368.2)) / .8))} 700 80)`); }); sfx(368.2, 'impact', .6); })();
line(373.1, 388.7, 'left:160px;top:760px;width:1600px;text-align:center', 'karena sangat sayang istrinya · Nabi Adam [mentaatinya] → keduanya diturunkan ke bumi', { fs: 36, m: [380.0] });

// --- 15 /split-screen : surga vs bumi
scene(388.7, 421.7, { cut: 'glitch' });
crd(`<div style="width:780px;height:520px;border:5px solid ${CG};border-radius:20px;padding:30px;text-align:center;background:rgba(127,224,160,.06)"><div style="font-size:110px">🌴</div><div style="font:900 50px Inter;color:${CG}">SURGA</div><div style="font:800 32px Inter;margin-top:12px;line-height:1.4">indah · mewah · serba ada</div></div>`, 'left:140px;top:200px', 388.8, 421.7, 'up', 'stamp');
crd(`<div style="width:780px;height:520px;border:5px solid ${CR};border-radius:20px;padding:30px;text-align:center;background:rgba(255,138,92,.06)"><div style="font-size:110px">🌍</div><div style="font:900 50px Inter;color:${CR}">BUMI</div><div style="font:800 32px Inter;margin-top:12px;line-height:1.4">penuh bala · ujian · cobaan · bencana</div></div>`, 'left:1000px;top:200px', 396.6, 421.7, 'up', 'stamp');
crd(`<div style="font:900 34px Inter">sebabnya: ① <span style="color:${CR}">tidak qana'ah</span> · ② <span style="color:${CR}">mentaati permintaan istri</span></div>`, 'left:200px;top:800px', 412.0, 421.7, 'up', 'beep');

// --- 16 /iceberg : akibat tamak
scene(421.7, 482.8, { cut: 'glitch' });
line(421.8, 436.3, 'left:140px;top:120px;width:1640px', 'tanpa qana\'ah · hidup terasa [susah & payah] · tak menemukan kebahagiaan', { fs: 40, m: [425.5] });
sv(436.3, 482.8, `<defs><linearGradient id="sea22" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0c1c4f"/><stop offset="1" stop-color="#050b2a"/></linearGradient></defs><rect x="0" y="480" width="1920" height="600" fill="url(#sea22)" data-f=".1"/><path d="M0 480 H1920" stroke="${CB}" stroke-width="4" data-f=".1"/>` +
  `<path d="M760 480 L860 340 L960 280 L1060 350 L1160 480 Z" fill="rgba(255,138,92,.12)" stroke="${CR}" stroke-width="4" data-f=".3"/>` + T(960, 250, '😤 TAMAK', { f: .5, fs: 40, fw: 900, c: CR }) +
  `<path d="M760 480 L560 700 L680 960 L1240 960 L1360 700 L1160 480 Z" fill="rgba(255,138,92,.08)" stroke="${CR}" stroke-width="4" data-f="2.0"/>` +
  [['🎭 mau menipu orang', 3.0], ['💸 cari harta siang malam · lupa Allah', 6.4], ['🃏 berbuat curang', 15.0], ['⛔ segala cara · melanggar hukum Allah', 19.0], ['😣 tak tenang · sengsara dunia & akhirat', 35.0]].map(([s, d], i) => T(960, 560 + i * 80, s, { f: d, fs: 30, fw: 900, c: i === 4 ? CR : '#fff' })).join(''), 'left:0;top:0', 1920, 1080, .8);

// --- 17 /search : hadis taat istri
scene(482.8, 505.4, { cut: 'glitch', light: 1 });
searchFind(482.8, 505.4, {
  q: 'هلكت الرجال حين أطاعت النساء', count: 4, pick: 0, shelfPick: 0, times: { type: .4, scan: 1.8, res: 2.8, click: 3.8, det: 4.2 },
  shelf: [['Musnad Ahmad', 'مسند أحمد'], ["Iqtidha' ash-Shirath · Ibnu Taimiyah", 'اقتضاء الصراط المستقيم'], ["Al-Maqashid al-Hasanah · as-Sakhawi", 'المقاصد الحسنة'], ["Dha'if al-Jami' · al-Albani", 'ضعيف الجامع'], ["Takhrij al-Ihya' · al-'Iraqi", 'تخريج أحاديث الإحياء']],
  results: [
    { title: "Iqtidha' ash-Shirath al-Mustaqim · j. 2 hlm. 7", tag: 'HADIS', ar: 'هَلَكَتِ الرِّجَالُ حِينَ أَطَاعَتِ النِّسَاءَ', sub: 'riwayat Ahmad dari Abu Bakrah' },
    { title: "Dha'if al-Jami' · al-Albani · no. 6097", tag: "DHA'IF", ar: 'هَلَكَتِ الرِّجَالُ', sub: 'penilaian al-Albani: lemah' },
    { title: "Al-Maqashid al-Hasanah · as-Sakhawi · j. 5 hlm. 313", tag: 'CATATAN', ar: 'حِينَ أَطَاعَتِ النِّسَاءَ', sub: 'dibahas derajatnya' },
    { title: "Takhrij al-Ihya' · al-'Iraqi · no. 8", tag: 'TAK ADA ASAL', ar: 'تَعِسَ عَبْدُ الزَّوْجَةِ', sub: 'al-\'Iraqi: tidak kutemukan asalnya' }],
  det: { title: 'Dua riwayat tentang taat istri', ar: 'طَاعَةُ الزَّوْجَةِ', rows: [['PERTAMA', 'هَلَكَتِ الرِّجَالُ حِينَ أَطَاعَتِ النِّسَاءَ'], ['RIWAYAT', 'Ahmad · ath-Thabarani · al-Hakim'], ['SAHABAT', 'Abu Bakrah radhiyallahu \'anhu'], ['DERAJAT', "dha'if (al-Albani · 6097)"], ['KEDUA', 'تَعِسَ عَبْدُ الزَّوْجَةِ'], ['DINUKIL', "al-Ghazali · Ihya'"], ['DERAJAT', "al-'Iraqi: tidak ada asalnya"]], quote: 'هَلَكَتِ الرِّجَالُ حِينَ أَطَاعَتِ النِّسَاءَ' }
});
camTour(482.8, 505.4, { type: .4, scan: 1.8, res: 2.8, click: 3.8, det: 4.2 });

// --- 18 /bar-chart : 10 → 4
scene(505.4, 545.7, { cut: 'glitch' });
line(505.5, 515.0, 'left:140px;top:130px;width:1640px', 'artinya [bukan] tidak boleh sama sekali mentaati kehendak istri', { fs: 42, m: [507.0] });
(() => { const n = node(`<svg width="1500" height="300" viewBox="0 0 1500 300">${Array.from({ length: 10 }, (_, i) => `<rect class="k" data-i="${i}" x="${i * 150}" y="40" width="120" height="200" rx="14" stroke-width="4"/><text x="${i * 150 + 60}" y="160" text-anchor="middle" font-family="Inter" font-weight="900" font-size="54" fill="#fff">${i + 1}</text>`).join('')}</svg>`, 'left:210px;top:290px');
  item(515.0, 545.7, n, (lt, t, it) => { n.style.opacity = clamp(lt / .3) * clamp((it.t1 - t) / .3); n.querySelectorAll('.k').forEach(r => { const i = +r.dataset.i, on = t > 518.0, ok = i < 4; r.setAttribute('fill', on ? (ok ? 'rgba(127,224,160,.35)' : 'rgba(255,138,92,.18)') : 'rgba(233,242,58,.12)'); r.setAttribute('stroke', on ? (ok ? CG : CR) : Y); }); }); sfx(518.0, 'impact', .6); })();
crd(`<div style="display:flex;gap:40px"><div style="font:900 40px Inter;color:${CG}">✓ 4 dikabulkan</div><div style="font:900 40px Inter;color:${CR}">✕ 6 tidak</div></div>`, 'left:560px;top:600px', 520.0, 545.7, 'up', 'tick');
crd(vcard(1500, CR, `<div style="font:900 36px Inter;line-height:1.35">jangan karena terlalu sayang · patuh sampai <span style="color:${CR}">melanggar hukum Allah</span> → tunggulah kehancuran dunia & akhirat</div>`), 'left:210px;top:740px', 527.0, 545.7, 'up', 'impact');

// --- 19 /handwritten : al-Hasan al-Bashri
scene(545.7, 567.3, { cut: 'glitch' });
label('AL-IMAM AL-HASAN AL-BASHRI', 545.8, 'left:160px;top:150px', 567.3);
crd(`<div style="width:1600px;text-align:center;border:4px solid ${Y};border-radius:18px;padding:20px 30px;background:#000"><div class="ar" style="font-size:58px;line-height:1.6">مَا أَصْبَحَ رَجُلٌ يُطِيعُ امْرَأَتَهُ فِيمَا تَهْوَى [إِلَّا كَبَّهُ اللَّهُ فِي النَّارِ]</div></div>`.replace(/\[|\]/g, ''), 'left:160px;top:220px', 545.8, 567.3, 'scale', 'stamp');
crd(`<div style="font:700 44px/1.35 Kalam;color:#fff8d0;width:1500px">"laki-laki yang selalu taat pada keinginan istrinya hingga melanggar larangan Allah… <span style="color:${CR}">Allah telungkupkan dia di neraka</span>."</div>`, 'left:210px;top:480px', 551.0, 567.3, 'up', 'paper');
chip("DINUKIL: IHYA' 'ULUM AD-DIN · AZ-ZAWAJIR", 552.0, 'left:160px;top:760px', 567.3, Y);
crd(`<div style="font:900 32px Inter;color:${CG}">🤲 semoga Allah beri hidayah · kita ambil pelajaran & hikmahnya</div>`, 'left:160px;top:860px', 553.6, 567.3, 'up', 'tick');

// --- 20 /teaser : doa penutup
scene(567.3, TOTAL, { cut: 'hard' });
arw(node('اللَّهُمَّ بَارِكْ لَنَا فِي رَجَبَ وَشَعْبَانَ [وَبَلِّغْنَا رَمَضَانَ]', 'left:140px;width:1640px;top:150px;text-align:center;font-size:64px;color:#fff'), 575.3, 3.6, { marks: [577.5] });
crd(`<div style="font:900 36px Inter;text-align:center;width:1640px">🤲 rahmat · ampunan · hidayah · taufik · nikmat · afiat · keselamatan</div>`, 'left:140px;top:300px', 579.1, TOTAL, 'up', 'tick');
mePol('left:200px;top:430px', 567.4, TOTAL, -4, 360);
sub2('left:760px;top:600px', 583.0, TOTAL);

// ================================================================== JADWAL KODE VISUAL
[[0, 16.4, '/kinetic-type'], [16.4, 32.0, '/badge'], [32.0, 57.4, '/search'], [57.4, 76.0, '/callout'], [76.0, 91.6, '/citation'], [91.6, 118.7, '/tree'], [118.7, 201.3, '/checklist'], [201.3, 226.0, '/citation'],
 [226.0, 250.7, '/roadmap'], [250.7, 270.4, '/handwritten'], [270.4, 310.5, '/citation'], [310.5, 364.8, '/split-screen'], [364.8, 388.7, '/balance'], [388.7, 421.7, '/split-screen'], [421.7, 482.8, '/iceberg'], [482.8, 505.4, '/search'],
 [505.4, 545.7, '/bar-chart'], [545.7, 567.3, '/handwritten'], [567.3, TOTAL, '/teaser']]
 .reduce((acc, [a, b, c]) => { if (!acc.m[c]) acc.m[c] = String(++acc.n).padStart(2, '0'); codeTag(a, b, acc.m[c], c); return acc; }, { n: 0, m: {} });
