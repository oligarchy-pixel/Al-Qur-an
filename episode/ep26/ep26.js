// ================================================================== EPISODE 26 · AMAL SEKecil APA PUN DICATAT ALLAH
// Master berbasis template seri; ucapan penyampai mengikuti MP3/transkrip.
const CR = '#ff8a5c', CG = '#7fe0a0', CB = '#7fd6ff';
const line = (t0, t1, css, s, o = {}) => kin(node('', css + `;font:${o.w || 800} ${o.fs || 42}px Inter;color:${o.c || '#fff'};line-height:1.32`), s, t0, { iv: o.iv || .027, marks: o.m || [], t1 });
const crd = (html, css, t0, t1, kind = 'up', snd = 'click') => { const n = node(html, css, 'dimmable'); show(n, t0, kind, t1); sfx(t0, snd, .65); return n; };
const pill = (s, c = Y, fg = '#111') => `<div style="font:900 36px Inter;color:${fg};background:${c};border-radius:12px;padding:12px 24px;display:inline-block">${s}</div>`;
const vcard = (w, c, html, bg = 'rgba(255,255,255,.03)') => `<div style="width:${w}px;border:4px solid ${c};border-radius:18px;padding:20px 26px;background:${bg}">${html}</div>`;
const sp = (s, c = Y) => `<span style="color:${c}">${s}</span>`;
function profileTag(t0, t1) { crd(`<div style="width:410px;background:#111;border:2px solid ${Y};padding:16px 20px"><div class="mono" style="font-size:16px;color:${Y}">● PENYAMPAI KAJIAN</div><div style="font:800 34px Inter;margin-top:6px">@alurziyadahku</div><div class="mono" style="font-size:15px;color:#eee;margin-top:7px">SURAH AN-NISA · 40 &amp; 48</div></div>`, 'left:1340px;top:610px', t0, t1, 'left', 'beep'); }
function node3(x, y, sym, txt, f, col = Y) { return `<circle cx="${x}" cy="${y}" r="58" fill="#050505" stroke="${col}" stroke-width="4" data-f="${f}"/>` + T(x, y + 17, sym, { f: f + .1, fs: 42, c: col }) + T(x, y + 100, txt, { f: f + .2, fs: 25, fw: 800, c: col }); }

// 01 /kinetic-type — pembuka dan konteks lima ayat
scene(0, 24, { cut: 'none' });
label('FILE 26 · LANJUTAN SURAH AN-NISA', .25, 'left:140px;top:145px', 24);
seg('Amal sekecil apa pun<br>[dicatat Allah]', .55, 'left:140px;top:210px;width:1100px', { size: 88, iv: .04, marks: [3.0] });
mePol('left:1370px;top:145px', .2, 24, -3, 350); profileTag(1.0, 24);
arw(node('إِنَّ فِي سُورَةِ النِّسَاءِ [لَخَمْسَ آيَاتٍ]', 'left:140px;top:545px;width:1100px;font-size:56px;color:#fff'), 5.5, 3.2, { marks: [7.5], t1: 24 });
[31, 40, 48, 64, 110].forEach((n, i) => crd(`<div style="width:164px;height:86px;border:3px solid ${i === 1 ? Y : '#fff'};border-radius:12px;display:flex;align-items:center;justify-content:center;font:900 36px Inter;color:${i === 1 ? Y : '#fff'}">An-Nisa ${n}</div>`, `left:${140 + i * 185}px;top:790px`, 12.2 + i * .45, 24, 'up', 'tick'));
chip('ATSAR IBNU MAS\'UD · LIMA AYAT ISTIMEWA', 15.1, 'left:140px;top:915px', 24, CG);

// 02 /timeline — ayat pertama sudah dibahas di Ep24
scene(24, 28.9, { cut: 'clean' });
label('AYAT PERTAMA · SUDAH DIBAHAS', 24.1, 'left:160px;top:130px', 28.9);
crd(`<div style="width:1500px;border:4px solid ${Y};padding:32px 42px;border-radius:16px"><div class="mono" style="color:${Y};font-size:20px">EP24 · QS. AN-NISA : 31</div><div style="font:800 54px Inter;margin-top:12px">Jauhi dosa besar — kebaikan Allah berlipat ganda</div></div>`, 'left:160px;top:300px', 24.2, 28.9, 'left', 'paper');
line(25.1, 28.9, 'left:160px;top:590px;width:1450px', 'Ayat pertama: Surah An-Nisa [31], sudah kita bahas.', { fs: 44, m: [27.0] });

// 03 /scripture — pengingat An-Nisa 31
scene(28.9, 46.3, { cut: 'clean' });
label('PENGANTAR · QS. AN-NISA : 31', 29, 'left:160px;top:130px', 46.3);
paper(29.2, 'left:160px;top:205px;width:1600px;height:320px', '', 46.3);
arw(node('إِنْ تَجْتَنِبُوا [كَبَائِرَ] مَا تُنْهَوْنَ عَنْهُ نُكَفِّرْ عَنْكُمْ سَيِّئَاتِكُمْ وَنُدْخِلْكُمْ مُدْخَلًا كَرِيمًا', 'left:220px;top:245px;width:1480px;text-align:center;font-size:62px;line-height:1.75;color:#151515'), 29.4, 12.6, { marks: [32.0], t1: 46.3 });
line(39.2, 46.3, 'left:190px;top:600px;width:1500px;text-align:center', 'Bersungguh-sungguh menjauhi [dosa besar]…', { fs: 44, m: [42.5] });
chip('AN-NISA : 31', 40.1, 'left:160px;top:720px', 46.3, CG);

// 04 /quote — jeda ayat dan transisi ke ayat 40
scene(46.3, 48.5, { cut: 'clean' });
crd(`<div style="width:1300px;border-left:8px solid ${Y};padding:24px 36px;font:800 40px Inter">Amal saleh · niat yang tulus</div>`, 'left:260px;top:440px', 46.4, 48.5, 'left', 'tick');

// 05 /scripture — An-Nisa 40
scene(48.5, 58.3, { cut: 'clean' });
label('AYAT KEDUA · AN-NISA : 40', 48.6, 'left:160px;top:130px', 58.3);
paper(48.7, 'left:160px;top:250px;width:1600px;height:260px', '', 58.3);
arw(node('إِنَّ اللَّهَ لَا يَظْلِمُ [مِثْقَالَ ذَرَّةٍ] وَإِنْ تَكُ حَسَنَةً يُضَاعِفْهَا وَيُؤْتِ مِنْ لَدُنْهُ أَجْرًا عَظِيمًا', 'left:220px;top:288px;width:1480px;text-align:center;font-size:58px;line-height:1.7;color:#151515'), 48.8, 9.1, { marks: [51.6], t1: 58.3 });

// 06 /bar-chart — zarrah kecil, ganjaran besar
scene(58.3, 81.9, { cut: 'clean' });
line(58.4, 81.9, 'left:160px;top:150px;width:1550px;text-align:center', 'Allah tidak melupakan amal baik sekecil [zarrah].', { fs: 52, m: [63.0] });
sv(59, 81.9, DEFS + `<circle cx="520" cy="550" r="26" fill="${Y}" data-f=".3"/>` + T(520, 670, 'zarrah', { f: .5, fs: 30, c: Y }) +
  [110, 180, 260, 340].map((r, i) => `<circle cx="520" cy="550" r="${r}" fill="none" stroke="${i % 2 ? '#fff' : Y}" stroke-width="3" opacity=".6" data-f="${.8 + i * .3}"/>`).join('') +
  T(1180, 440, 'وَإِنْ تَكُ حَسَنَةً', { f: 1.3, fs: 48, c: Y }) + T(1180, 530, 'يُضَاعِفْهَا', { f: 2.2, fs: 68, c: '#fff' }) + T(1180, 630, 'أَجْرًا عَظِيمًا', { f: 3.3, fs: 44, c: CG }), 'left:0;top:0', 1920, 1080, .8);
line(67.0, 81.9, 'left:840px;top:770px;width:900px;text-align:center', 'satu kebaikan yang ikhlas → [pahala besar]', { fs: 42, m: [75.4] });

// 07 /night-timeline — batu kecil di jalan, waktu berlalu
scene(81.9, 105.6, { cut: 'clean' });
label('CONTOH KEBAIKAN KECIL · SEPULUH TAHUN LALU', 82.0, 'left:160px;top:130px', 105.6);
sv(82.1, 105.6, DEFS + `<path d="M180 660 C500 620 750 700 990 650 S1440 630 1740 670" fill="none" stroke="#fff" stroke-width="5" data-d="1600" data-dur="1.3"/>` +
  `<circle cx="640" cy="655" r="24" fill="${Y}" data-f=".6"/>` + T(640, 585, 'BATU', { f: .8, fs: 26, fw: 900, c: Y }) +
  `<path d="M640 690 V820" stroke="${Y}" stroke-width="4" data-d="140" data-del="1.3"/>` + T(640, 880, 'disingkirkan', { f: 1.7, fs: 30, c: Y }) +
  `<path d="M250 330 H1670" stroke="rgba(255,255,255,.4)" stroke-width="3" data-d="1420" data-del="2.0"/>` + T(250, 300, '10 TAHUN LALU', { f: 2.2, fs: 28 }) + T(1670, 300, 'HARI INI', { f: 2.6, fs: 28, c: CB }), 'left:0;top:0', 1920, 1080, 1.0);
line(84.4, 105.6, 'left:900px;top:420px;width:800px', 'Batu itu mungkin sudah [kita lupakan]…', { fs: 44, m: [89.0] });
crd(vcard(900, CG, `<div style="font:800 36px Inter">Allah ﷻ tidak melupakan amal baik yang dilakukan dengan ikhlas.</div>`), 'left:900px;top:555px', 92.0, 105.6, 'left', 'tick');

// 08 /dossier — buku amal
scene(105.6, 125.9, { cut: 'clean' });
label('CATATAN AMAL · SEKecil APA PUN', 105.7, 'left:160px;top:130px', 125.9);
crd(`<div style="width:720px;height:580px;background:#f2ecdf;color:#181818;border-radius:10px;padding:36px 40px;box-shadow:0 28px 75px rgba(0,0,0,.55)"><div class="mono" style="font-size:22px;color:#846b3e">سِجِلُّ الْعَمَلِ · CATATAN AMAL</div><div style="height:2px;background:#b99c63;margin:24px 0"></div><div style="font:700 34px Inter;line-height:1.8">✓ Menggeser batu dari jalan<br>✓ Niat agar orang lain selamat<br>✓ Kebaikan sekecil zarrah</div><div class="mono" style="margin-top:22px;color:#846b3e">TIDAK ADA KEBAIKAN YANG SIA-SIA</div></div>`, 'left:160px;top:220px', 106.0, 125.9, 'left', 'paper');
crd(`<div style="width:720px;height:480px;border:3px solid ${CR};border-radius:16px;padding:30px"><div style="font:900 44px Inter;color:${CR}">Juga berhati-hati…</div><div style="font:700 36px Inter;line-height:1.5;margin-top:26px">Kesalahan dicatat.<br>Jangan menunda taubat.</div><div class="mono" style="color:${CG};margin-top:30px">بَابُ التَّوْبَةِ · TAUBAT</div></div>`, 'left:1000px;top:270px', 112.0, 125.9, 'up', 'tick');

// 09 /checklist — hisab dan tanggung jawab
scene(125.9, 143.5, { cut: 'clean' });
label('MENGHADAP ALLAH · HISAB', 126.0, 'left:160px;top:130px', 143.5);
line(127.0, 143.5, 'left:160px;top:215px;width:1600px;text-align:center', 'Semua perbuatan akan diminta [pertanggungjawaban].', { fs: 48, m: [136.0] });
[['Kebaikan', CG, '✓'], ['Kesalahan', CR, '!'], ['Taubat', Y, '↶']].forEach(([s, c, m], i) => crd(`<div style="width:480px;height:260px;border:4px solid ${c};border-radius:16px;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:20px"><div style="font:900 86px Inter;color:${c}">${m}</div><div style="font:900 38px Inter;color:${c}">${s}</div></div>`, `left:${160 + i * 540}px;top:420px`, 128.2 + i * 2.8, 143.5, 'up', 'tick'));

// 10 /search — satu tab pustaka sumber ganjaran salat
scene(143.5, 169.4, { cut: 'clean', light: 1 });
const ST = { type: .5, scan: 3.4, res: 6.2, click: 9.0, det: 11.2 };
searchFind(143.5, 169.4, {
  q: 'صلاة في مسجدي بعشرة آلاف صلاة', count: 4, pick: 0, shelfPick: 0,
  times: ST,
  shelf: [["Ihya' 'Ulum ad-Din", 'الإحياء'], ["Takhrij al-Ihya' · al-'Iraqi", 'التخريج'], ['Shahih al-Bukhari', 'البخاري'], ['Shahih Muslim', 'مسلم'], ['Sunan Ibn Majah', 'ابن ماجه']],
  results: [
    { title: "Ihya' 'Ulum ad-Din · riwayat keutamaan salat", tag: 'DINUKIL', ar: 'عَشَرَةُ آلَافٍ · مِائَةُ أَلْفٍ · أَلْفَا أَلْفٍ', sub: 'angka 10.000 · 100.000 · dua juta dalam redaksi yang beredar' },
    { title: "Takhrij al-Ihya' · catatan sanad", tag: 'LEMAH', ar: 'إِسْنَادُهُ ضَعِيفٌ', sub: 'jalur Anas untuk rangkaian angka itu dinilai lemah' },
    { title: 'Shahih al-Bukhari 1190 · Muslim 1394', tag: 'SHAHIH', ar: 'أَلْفُ صَلَاةٍ إِلَّا الْمَسْجِدَ الْحَرَامَ', sub: 'keutamaan Masjid Nabawi: seribu salat' },
    { title: 'Musnad Ahmad · Sunan Ibn Majah', tag: 'SANAD SAHIH', ar: 'الْمَسْجِدُ الْحَرَامُ · مِائَةُ أَلْفٍ', sub: 'riwayat Jabir tentang seratus ribu di Masjidil Haram' }],
  det: { title: 'Ganjaran salat · cek riwayat', ar: 'فَضْلُ الصَّلَاةِ', rows: [['I H Y A', 'menyebut angka 10.000, 100.000 dan dua juta'], ["AL-'IRAQI", 'sanad rangkaian angka itu lemah; redaksi lengkap gharib'], ['NABAWI', 'Bukhari 1190 · Muslim 1394: 1.000 salat'], ['HARAM', 'Ahmad · Ibn Majah: 100.000 salat'], ['RIBATH', 'angka dua juta berada pada jalur lemah'], ['SALAT MALAM', 'riwayat pada rangkaian ini juga lemah'], ['CATATAN', 'ucapan asli dipertahankan; grade dibedakan']], quote: 'إِسْنَادُهُ ضَعِيفٌ' }
});
camTour(143.5, 169.4, ST);

// 11 /counter — keutamaan Masjid Nabawi dan Masjidil Haram
scene(169.4, 192.5, { cut: 'clean' });
label('KEUTAMAAN SALAT · RIWAYAT SHAHIH', 169.5, 'left:160px;top:130px', 192.5);
crd(`<div style="width:680px;height:430px;border:5px solid ${CB};border-radius:18px;text-align:center;padding-top:34px"><div style="font:700 24px Inter;color:${CB}">MASJID NABAWI · BUKHARI/MUSLIM</div><div style="font:900 92px Inter;color:#fff;margin-top:42px">1.000</div><div style="font:800 30px Inter">lebih utama dari masjid lain*</div></div>`, 'left:160px;top:230px', 170.0, 192.5, 'left', 'beep');
crd(`<div style="width:680px;height:430px;border:5px solid ${Y};border-radius:18px;text-align:center;padding-top:34px"><div style="font:700 24px Inter;color:${Y}">MASJIDIL HARAM · RIWAYAT JABIR</div><div style="font:900 92px Inter;color:#fff;margin-top:42px">100.000</div><div style="font:800 30px Inter">Ahmad · Ibn Majah</div></div>`, 'left:1000px;top:230px', 177.0, 192.5, 'up', 'tick');
chip('* KECUALI MASJIDIL HARAM · HR. BUKHARI 1190 · MUSLIM 1394', 181.0, 'left:160px;top:730px', 192.5, CG);

// 12 /night-timeline — angka ribath diberi kehati-hatian
scene(192.5, 231.3, { cut: 'clean' });
label('SALAT DI WILAYAH RIBATH · ANGKA RIWAYAT', 192.6, 'left:160px;top:130px', 231.3);
sv(192.7, 231.3, DEFS + `<path d="M220 570 H1700" stroke="#fff" stroke-width="4" data-d="1480" data-dur="1.2"/>` +
  [[360, 'S', 'menjaga perbatasan', .3, CB], [960, 'M', 'salat', 3.0, Y], [1560, '٢', 'dua rakaat', 7.0, CG]].map(([x, s, l, f, c]) => node3(x, 570, s, l, f, c)).join(''), 'left:0;top:0', 1920, 1080, 1.0);
crd(vcard(1280, CR, `<div style="font:900 40px Inter;color:${CR}">Angka “dua juta” · jalur yang dikutip sanadnya lemah</div><div class="mono" style="font-size:18px;margin-top:10px">AL-'IRAQI · CATATAN TAKHRIJ</div>`), 'left:320px;top:780px', 215.0, 231.3, 'up', 'stamp');

// 13 /night-sky — dua rakaat malam tanpa angka pasti
scene(231.3, 260.5, { cut: 'clean' });
label('WAKTU SUNYI · DUA RAKAAT MALAM', 231.4, 'left:160px;top:130px', 260.5);
sv(231.5, 260.5, Array.from({ length: 62 }, (_, i) => `<circle cx="${120 + (i * 293) % 1680}" cy="${170 + (i * 181) % 520}" r="${i % 5 === 0 ? 3 : 1.5}" fill="#fff8d0" data-f="${(i * .07).toFixed(2)}"/>`).join('') +
  `<circle cx="960" cy="570" r="220" fill="rgba(233,242,58,.04)" stroke="${Y}" stroke-width="4" data-d="1382" data-dur="1.5"/>` + T(960, 520, 'رَكْعَتَانِ', { f: .7, fs: 64, c: Y }) + T(960, 590, 'فِي جَوْفِ اللَّيْلِ', { f: 1.4, fs: 42 }) + T(960, 690, 'لَا يُرِيدُ بِهِمَا إِلَّا وَجْهَ اللَّهِ', { f: 2.2, fs: 38, c: '#fff8d0' }), 'left:0;top:0', 1920, 1080, 1.0);
line(248.0, 260.5, 'left:360px;top:830px;width:1200px;text-align:center', 'Besar pahala yang Allah siapkan: [hanya Allah yang tahu].', { fs: 42, m: [247.6] });

// 14 /scripture — An-Nisa 48
scene(260.5, 278.0, { cut: 'clean' });
label('AYAT KETIGA · QS. AN-NISA : 48', 260.6, 'left:160px;top:130px', 278.0);
paper(260.8, 'left:160px;top:220px;width:1600px;height:360px', '', 278.0);
arw(node('إِنَّ اللَّهَ لَا يَغْفِرُ أَنْ [يُشْرَكَ بِهِ] وَيَغْفِرُ مَا دُونَ ذَلِكَ لِمَنْ يَشَاءُ وَمَنْ يُشْرِكْ بِاللَّهِ فَقَدِ افْتَرَى إِثْمًا عَظِيمًا', 'left:220px;top:270px;width:1480px;text-align:center;font-size:56px;line-height:1.8;color:#151515'), 261.0, 15.8, { marks: [267.2], t1: 278.0 });
chip('AL-QUR\'AN · SURAH AN-NISA : 48', 262.0, 'left:160px;top:640px', 278.0, CG);

// 15 /balance — perbedaan antara syirik dan dosa di bawah kehendak Allah
scene(278.0, 311.7, { cut: 'clean' });
line(278.1, 311.7, 'left:160px;top:140px;width:1600px;text-align:center', 'Ayat ini mengingatkan tentang [syirik] dan keluasan ampunan Allah.', { fs: 46, m: [285.0] });
crd(vcard(720, CR, `<div class="mono" style="font-size:22px;color:${CR}">PERINGATAN AYAT</div><div style="font:900 42px Inter;margin-top:16px">Syirik yang dibawa mati<br>tanpa taubat</div>`), 'left:160px;top:330px', 288.0, 311.7, 'left', 'impact');
crd(vcard(720, CG, `<div class="mono" style="font-size:22px;color:${CG}">PINTU TAUBAT TERBUKA</div><div style="font:900 42px Inter;margin-top:16px">Kembali mentauhidkan Allah<br>sebelum wafat</div>`), 'left:1000px;top:330px', 294.0, 311.7, 'up', 'tick');
line(299.0, 311.7, 'left:220px;top:780px;width:1480px;text-align:center', 'Dosa selain syirik: [bagi siapa yang Allah kehendaki].', { fs: 42, m: [304.0] });

// 16 /decision-matrix — kewajiban memahami makna syirik
scene(311.7, 329.2, { cut: 'clean' });
label('MEMAHAMI MAKNA SYIRIK', 311.8, 'left:160px;top:130px', 329.2);
crd(vcard(720, CB, `<div style="font:900 38px Inter;color:${CB}">WAJIB DIKETAHUI</div><div style="font:700 30px Inter;margin-top:16px">Setiap muslim dan muslimah memahami makna syirik</div>`), 'left:160px;top:320px', 313.0, 329.2, 'left', 'paper');
crd(vcard(720, Y, `<div style="font:900 38px Inter;color:${Y}">PENJELASAN ULAMA</div><div style="font:700 34px Inter;margin-top:16px">Menyembah selain Allah</div>`), 'left:1000px;top:320px', 326.0, 329.2, 'up', 'tick');

// 17 /contrast — contoh-contoh yang disebut, teks saja tanpa sosok
scene(329.2, 340.2, { cut: 'clean' });
label('CONTOH YANG DISEBUT DALAM KAJIAN', 329.3, 'left:160px;top:130px', 340.2);
const exNames = ['SAPI', 'GUNUNG', 'POHON', 'MATAHARI', 'BULAN', 'GURU', 'NABI', 'PATUNG'];
sv(329.4, 340.2, exNames.map((n, i) => {
  const x = 300 + (i % 4) * 440, y = i < 4 ? 430 : 700, f = [.2, 1.4, 2.6, 3.8, 5.0, 6.2, 7.4, 8.5][i];
  return BOX(x - 130, y - 58, 260, 116, { s: i % 2 ? '#fff' : Y, sw: 4, del: f }) + T(x, y + 13, n, { f: f + .12, fs: 30, c: i % 2 ? '#fff' : Y });
}).join(''), 'left:0;top:0', 1920, 1080, 1.0);

// 18 /contrast — makna menyembah dan pengakuan ketuhanan
scene(340.2, 360.4, { cut: 'clean' });
label('APA ARTI MENYEMBAH?', 340.3, 'left:160px;top:130px', 360.4);
crd(vcard(700, Y, `<div style="font:900 40px Inter;color:${Y}">MENGAKUI KETUHANAN</div>`), 'left:160px;top:320px', 344.8, 360.4, 'left', 'tick');
crd(vcard(700, CB, `<div style="font:900 38px Inter;color:${CB}">TUNDUK · PATUH · HORMAT</div><div style="font:700 28px Inter;margin-top:16px">tidak sama dengan menyembah bila tak mengakui sebagai Tuhan</div>`), 'left:1000px;top:320px', 348.9, 360.4, 'up', 'tick');

// 19 /mindmap — pengakuan Allah sebagai Pencipta dan alasan Quraisy
scene(360.4, 389.6, { cut: 'clean' });
label('MENYEKUTUKAN DALAM IBADAH', 360.5, 'left:160px;top:130px', 389.6);
sv(360.6, 389.6, DEFS + `<circle cx="960" cy="520" r="170" fill="rgba(233,242,58,.06)" stroke="${Y}" stroke-width="5" data-d="1068" data-dur="1.2"/>` + T(960, 520, 'ALLAH · PENCIPTA', { f: .5, fs: 36, c: Y }) +
  [[350, 380, 'BERHALA', CR], [1570, 380, 'IBADAH', CB]].map(([x, y, s, c], i) => `<circle cx="${x}" cy="${y}" r="108" fill="none" stroke="${c}" stroke-width="4" data-f="${1 + i * .8}"/>` + T(x, y + 8, s, { f: 1.2 + i * .8, fs: 27, c })).join('') +
  `<path d="M490 420 L790 470 M1130 470 L1460 420" stroke="${CR}" stroke-width="4" stroke-dasharray="10 9" data-d="710" data-del="2.2"/>` + T(960, 790, 'ALASAN YANG DISEBUT: AGAR MENDEKATKAN DIRI KEPADA ALLAH', { f: 17.3, fs: 30, c: '#fff8d0' }), 'left:0;top:0', 1920, 1080, 1.0);

// 20 /flowchart — sebab bukan sekutu; makan dan obat sebagai sarana
scene(389.6, 410.0, { cut: 'clean' });
label('SEBAB · IKHTIAR · TAUHID', 389.7, 'left:160px;top:130px', 410.0);
sv(389.8, 410.0, DEFS + T(960, 240, 'SEBAB BUKAN TUHAN', { f: .3, fs: 40, c: Y }) +
  BOX(180, 340, 520, 250, { s: Y, sw: 5, del: 9.4 }) + T(440, 430, 'MAKAN', { f: 9.6, fs: 42, c: Y }) + T(440, 510, 'KENYANG', { f: 10.2, fs: 34 }) +
  BOX(1220, 340, 520, 250, { s: CB, sw: 5, del: 13.0 }) + T(1480, 430, 'OBAT', { f: 13.2, fs: 42, c: CB }) + T(1480, 510, 'SEMBUH', { f: 13.8, fs: 34 }) +
  T(960, 760, 'SEBAB DIAMBIL · KEYAKINAN TETAP KEPADA ALLAH', { f: 15.1, fs: 31, c: '#fff8d0' }), 'left:0;top:0', 1920, 1080, 1.0);
line(396.6, 410.0, 'left:180px;top:840px;width:1560px;text-align:center', 'Jangan meyakini sebab sebagai [sekutu] bagi Allah.', { fs: 36, m: [399.1] });

// 21 /layers — Allah yang memberi hasil; ikhtiar tetap dilakukan
scene(410.0, 430.2, { cut: 'clean' });
label('IKHTIAR TETAP DILAKUKAN', 410.1, 'left:160px;top:130px', 430.2);
crd(vcard(700, Y, `<div style="font:900 36px Inter;color:${Y}">ALLAH YANG MEMBERI KENYANG</div>`), 'left:160px;top:300px', 410.3, 430.2, 'left', 'tick');
crd(vcard(700, CB, `<div style="font:900 36px Inter;color:${CB}">ALLAH YANG MENYEMBUHKAN</div>`), 'left:1000px;top:300px', 414.6, 430.2, 'up', 'tick');
crd(pill('SEBAB DIPAKAI · KUASA MILIK ALLAH', CG), 'left:410px;top:690px', 423.3, 430.2, 'scale', 'beep');
crd(pill('SILAKAN MAKAN · SILAKAN MINUM OBAT', '#fff', '#111'), 'left:360px;top:820px', 426.4, 430.2, 'up', 'tick');

// 22 /quote — larangan menyandarkan sekutu, anak, atau pasangan kepada Allah
scene(430.2, 442.0, { cut: 'clean' });
label('PERINGATAN TAUHID', 430.3, 'left:160px;top:130px', 442.0);
sv(430.4, 442.0, ['TANDINGAN', 'ANAK', 'ISTRI'].map((x, i) => {
  const t = [0.1, 5.6, 9.1][i], xx = 420 + i * 540, c = [Y, CB, CR][i];
  return BOX(xx - 190, 400, 380, 170, { s: c, sw: 5, del: t }) + T(xx, 495, x, { f: t + .15, fs: 38, c });
}).join('') + T(960, 720, 'الشِّرْكُ بِاللَّهِ', { f: 10.2, fs: 44, c: CR }), 'left:0;top:0', 1920, 1080, 1.0);

// 23 /mosaic — menyandarkan sifat yang tak layak, cita-cita, dan rida
scene(442.0, 464.4, { cut: 'clean' });
label('JAGA SIKAP HATI', 442.1, 'left:160px;top:130px', 464.4);
[['SIFAT TIDAK LAYAK', 'Jangan menyandarkan sifat yang tak patut kepada Allah', Y], ['MENCITA-CITAKAN SYIRIK', 'Niat yang disebut dalam penjelasan penceramah', CB], ['RIDA DENGAN SYIRIK', 'Jangan merestui perbuatan syirik', CR]].forEach(([a, b, c], i) => {
  const at = [442.2, 449.2, 459.9][i];
  crd(`<div style="width:470px;height:360px;border:4px solid ${c};border-radius:18px;padding:26px"><div style="font:900 38px Inter;color:${c}">${a}</div><div style="font:700 28px Inter;line-height:1.4;margin-top:28px">${b}</div></div>`, `left:${160 + i * 540}px;top:290px`, at, 464.4, 'up', 'tick');
});

// 24 /checklist — jangan meridai perbuatan syirik
scene(464.4, 475.4, { cut: 'clean' });
label('JANGAN MERIDAI KESYIRIKAN', 464.5, 'left:160px;top:130px', 475.4);
crd(vcard(680, CR, `<div style="font:900 36px Inter;color:${CR}">SENANG MELIHATNYA?</div><div style="font:700 28px Inter;margin-top:16px">Perhatikan sikap hati</div>`), 'left:160px;top:330px', 464.6, 475.4, 'left', 'paper');
crd(vcard(680, CG, `<div style="font:900 36px Inter;color:${CG}">JANGAN MERIDAI</div><div style="font:700 28px Inter;margin-top:16px">Jangan mendukung kesyirikan</div>`), 'left:1000px;top:330px', 469.9, 475.4, 'up', 'tick');

// 25 /clock — kisah menunda bantuan kepada orang yang ingin masuk Islam
scene(475.4, 502.0, { cut: 'clean' });
label('JANGAN MENUNDA BANTUAN', 475.5, 'left:160px;top:130px', 502.0);
sv(475.6, 502.0, DEFS + `<circle cx="960" cy="560" r="310" fill="none" stroke="${Y}" stroke-width="5" data-d="1948" data-dur="1.4"/>` +
  `<path d="M960 560 L960 320 M960 560 L1130 610" stroke="#fff" stroke-width="8" data-d="412" data-del=".9"/>` +
  T(960, 190, 'PERMINTAAN PERTOLONGAN', { f: .3, fs: 34, c: CB }) + T(960, 925, 'JANGAN BIARKAN MENUNGGU', { f: 17.8, fs: 32, c: CG }), 'left:0;top:0', 1920, 1080, .9);
line(489.3, 502.0, 'left:280px;top:830px;width:1360px;text-align:center', 'Ketika seseorang meminta diajarkan [syahadat], jangan ditunda.', { fs: 40, m: [493.5] });

// 26 /clock — jangan meminta orang menunggu
scene(502.0, 517.7, { cut: 'clean' });
label('JANGAN MEMINTA MENUNGGU', 502.1, 'left:160px;top:130px', 517.7);
crd(vcard(680, CR, `<div style="font:900 38px Inter;color:${CR}">“TUNGGU DULU”</div><div style="font:700 28px Inter;margin-top:16px">selesai makan / berkhutbah</div>`), 'left:160px;top:310px', 502.8, 517.7, 'left', 'paper');
crd(vcard(680, CG, `<div style="font:900 38px Inter;color:${CG}">BANTU SEKARANG</div><div style="font:700 28px Inter;margin-top:16px">Ajarkan kalimat syahadat</div>`), 'left:1000px;top:310px', 509.5, 517.7, 'up', 'tick');

// 27 /wind — doakan petunjuk dan hidayah
scene(517.7, 527.1, { cut: 'clean' });
label('DOAKAN PETUNJUK & HIDAYAH', 517.8, 'left:160px;top:130px', 527.1);
sv(517.9, 527.1, Array.from({ length: 12 }, (_, i) => `<path d="M${220 + i * 130} 650 Q${320 + i * 130} ${460 - (i % 3) * 36} ${420 + i * 130} 600" fill="none" stroke="${i % 3 === 0 ? Y : '#fff'}" stroke-width="3" opacity=".6" data-d="240" data-del="${(i * .14).toFixed(2)}"/>`).join('') +
  T(960, 480, 'PETUNJUK & HIDAYAH', { f: .2, fs: 56, c: Y }) + T(960, 570, 'MOHON PETUNJUK DAN HIDAYAH', { f: 1.0, fs: 34, c: '#fff8d0' }), 'left:0;top:0', 1920, 1080, 1.0);

// 28 /poetry — ajarkan dua kalimat syahadat
scene(527.1, 540.0, { cut: 'clean' });
label('AJARKAN DUA KALIMAT SYAHADAT', 527.2, 'left:160px;top:130px', 540.0);
arw(node('أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ', 'left:160px;top:280px;width:1600px;text-align:center;font-size:78px;color:#fff'), 527.2, 5.2, { marks: [530.5], t1: 540 });
arw(node('وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ', 'left:160px;top:445px;width:1600px;text-align:center;font-size:74px;color:' + Y), 532.8, 5.0, { marks: [536.2], t1: 540 });
chip('BANTU DENGAN ILMU · DENGAN LEMAH LEMBUT', 537.3, 'left:410px;top:700px', 540, CG);

// 29 /callout — jangan gegabah memberi label kepada orang bertauhid
scene(540.0, 557.2, { cut: 'clean' });
label('HATI-HATI MEMBERI LABEL', 540.1, 'left:160px;top:130px', 557.2);
crd(vcard(1450, CR, `<div style="font:900 38px Inter;color:${CR}">Jangan gegabah menyebut orang bertauhid sebagai musyrik.</div>`), 'left:235px;top:300px', 540.3, 557.2, 'up', 'impact');
crd(vcard(1450, CB, `<div style="font:800 34px Inter;color:${CB}">Ucapan tentang iman orang lain menuntut kehati-hatian.</div>`), 'left:235px;top:560px', 548.9, 557.2, 'left', 'tick');

// 30 /quote — hadis Bukhari sebagai konteks sumber
scene(557.2, 566.0, { cut: 'clean' });
label('RIWAYAT PERINGATAN · HR. AL-BUKHARI', 557.3, 'left:160px;top:130px', 566.0);
crd(`<div style="width:1450px;background:#f2ecdf;color:#181818;border-right:10px solid ${Y};padding:32px 42px;border-radius:12px"><div style="font:800 38px Inter;line-height:1.45">“Jika seseorang berkata kepada saudaranya: <span style="color:${CR}">wahai kafir</span>, ucapan itu kembali kepada salah satu dari keduanya.”</div><div class="mono" style="font-size:18px;color:#705f3a;margin-top:18px">SAHIH AL-BUKHARI · PERINGATAN KERAS TENTANG TAKFIR</div></div>`, 'left:235px;top:300px', 557.4, 566.0, 'up', 'paper');

// 31 /split-screen — teguh pada tauhid, berhati-hati menghakimi orang
scene(566.0, 584.4, { cut: 'clean' });
crd(vcard(700, Y, `<div class="ar" style="font-size:56px;color:${Y}">التَّوْحِيدُ</div><div style="font:800 30px Inter;margin-top:20px">Teguh menjaga tauhid</div>`), 'left:160px;top:300px', 566.1, 584.4, 'left', 'tick');
crd(vcard(700, CB, `<div class="ar" style="font-size:56px;color:${CB}">التَّثَبُّتُ</div><div style="font:800 30px Inter;margin-top:20px">Teliti menjaga lisan</div>`), 'left:1000px;top:300px', 570.5, 584.4, 'up', 'tick');
line(571.2, 584.4, 'left:200px;top:700px;width:1520px;text-align:center', 'Agama menuntut [kehati-hatian] yang sangat besar dalam perkara ini.', { fs: 42, m: [576.0] });

// 29 /teaser — doa, salam, identitas kanal
scene(584.4, TOTAL, { cut: 'none' });
mePol('left:180px;top:250px', 584.5, TOTAL, -4, 340);
label('MENGENAL AL-QUR\'AN · EP26', 584.8, 'left:650px;top:230px', TOTAL);
arw(node('السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ', 'left:570px;top:500px;width:1160px;text-align:center;font-size:50px;color:#fff'), 584.8, 5.0, { t1: TOTAL });
sub2('left:650px;top:820px', 587.5, TOTAL);

// ================================================================== 24 KODE VISUAL UNIK
[[0,24,'/kinetic-type'],[24,28.9,'/timeline'],[28.9,46.3,'/scripture'],[46.3,48.5,'/quote'],[48.5,58.3,'/scripture'],[58.3,81.9,'/bar-chart'],[81.9,105.6,'/night-timeline'],[105.6,125.9,'/dossier'],[125.9,143.5,'/checklist'],[143.5,169.4,'/search'],[169.4,192.5,'/counter'],[192.5,231.3,'/night-timeline'],[231.3,260.5,'/night-sky'],[260.5,278,'/scripture'],[278,311.7,'/balance'],[311.7,329.2,'/decision-matrix'],[329.2,360.4,'/contrast'],[360.4,389.6,'/mindmap'],[389.6,410,'/flowchart'],[410,430.2,'/layers'],[430.2,442,'/quote'],[442,464.4,'/mosaic'],[464.4,475.4,'/checklist'],[475.4,517.7,'/clock'],[517.7,527.1,'/wind'],[527.1,540,'/poetry'],[540,557.2,'/callout'],[557.2,566,'/quote'],[566,584.4,'/split-screen'],[584.4,TOTAL,'/teaser']]
 .reduce((a,[s,e,c])=>{if(!a.m[c])a.m[c]=String(++a.n).padStart(2,'0');codeTag(s,e,a.m[c],c);return a;},{n:0,m:{}});
