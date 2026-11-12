---
name: "video-kajian-dokumen-investigasi"
description: "Bikin video kajian YouTube 16:9 @alurziyadahku gaya dokumen investigasi (Video-15937) dari audio + transkrip bertimestamp: pencarian kitab Gading & Emas, dosier, zoom kata, blueprint, cover."
---

# Video kajian gaya dokumen investigasi (@alurziyadahku)

Dipakai untuk episode lanjutan seri yang dimulai dengan Ep1 "Hurmatul Quran" (001.mp3, 9:30). Input dari pengguna: rekaman mp3 + transkrip bertimestamp (+ foto pengguna untuk cover). Gaya meniru video referensi Video-15937 (situs investigasi data: hitam + kuning stabilo).

## Mesin (paket ENGINE)
Pengguna menyimpan file `PAKET_mesin_video_dokumen_ep1.zip`. Minta pengguna melampirkannya di awal episode baru, lalu ekstrak ke `/home/claude/proj/`. Isinya:
- `index.html` (panggung 1920×1080 + CSS), `app.js` (mesin + semua adegan Ep1 sebagai contoh), `fx.js` (lapisan thriller), `render.js`, `sfx.py`, `cover/cover.html` + `shot_cover.js`, foto pengguna `cover/me_wide.jpg`, `cover/me.jpg`.
- Jika zip tidak ada: bangun ulang mesin dengan arsitektur yang sama (lihat bagian "Arsitektur").

### Arsitektur
- Semua animasi Web Animations API dibuat paused; `window.setTime(t)` mengatur `currentTime`, menjalankan `hooks`, dan menggambar kanvas jaringan. Render: Playwright screenshot JPEG q92 → ffmpeg libx264 veryfast crf18 yuv420p 30 fps.
- Render per potongan: `node render.js <dari> <sampai> out/x.mp4 [end]` (adegan di luar rentang tidak dibangun → cepat). Pratinjau: `node render.js preview t1,t2,... dir`. Event suara: `node render.js sfx out/sfx.json`. Semua dengan `FX=1` untuk lapisan thriller.
- Musik + SFX: `FXB=1 python3 sfx.py <durasi> bed.wav sfx.json` (pad ambient, ketukan elektronik 124 bpm mulai bagian jaringan, tick ketik halus per huruf, click, whoosh, impact, static, beep, chatter, scroll, folder, duck/potong musik saat zoom kata).
- Suara: `loudnorm I=-16`, mix `[bed]volume=0.4 + voice amix normalize=0`, aac 192k.
- Volume SFX (permintaan pengguna): di `sfx.py` baris `fx = fx[:n] * 5.8` (Ep2–Ep3 = 2.1; Ep4 = 2.7; Ep5–6 = 3.8; Ep7–9 = 4.8; mulai Ep9 v2 = 5.8, permintaan pengguna). Musik latar tetap.
- Maksimal ±4 proses render bersamaan (7 bersamaan pernah crash "Target crashed"). Potongan 20–30 detik.
- Gabung: concat demuxer `-c copy` (list memakai path relatif). File >500 MB tidak bisa dikirim → encode ulang `crf 22 veryfast` (+ versi 720p crf 25 untuk HP).
- Hati-hati: `pkill -f` bisa membunuh shell sendiri; matikan proses render pakai PID.

### Helper di app.js (API)
`scene(t0,t1)`, `seg(...)` teks besar kiri, `kin(el,text,t0,t1,{rtl,iv})` ketik huruf demi huruf (Latin per huruf + titik kuning; Arab wipe kanan→kiri per kata, `[kata]` = bisa distabilo), `mark()`, `paper()` kartu krem, `parab()` Arab di kartu, `ptr()` terjemah di kartu, `chips()`, `tabs()`, `steps()`, `dossier(c,{...})` polaroid+stempel+panel gelap+blok angka (`ar:1` angka Arab), `punch(c,ox,oy,t0,t1,k,dx,dy)` zoom ekstrem ke kata (elemen lain meredup, musik di-duck), `caseFiles()` grid folder diklik, `searchFind()` jendela browser tab baru tema Gading & Emas (klik +, ketik URL, ketik Arab, pindai rak kitab, hasil, scroll, klik banyak sumber, panel rincian, kamera menyorot), `cursorRun()`, `flashCut()` hard cut, `bp()` blueprint + `sv/draw` garis tumbuh + callout, kanvas `drawNet` (114 surah, mode Network/Orbit/Clusters/Holdings/Flow, data jumlah ayat & Makkiyah/Madaniyah), panel kanan dashboard, montase staccato kartu warna, kartu penutup follow. `CUTS` = titik glitch/transisi, `LIGHT` = rentang jendela terang (HUD atas & scanline diredam).
- Posisi `punch`: render pratinjau dulu, ukur posisi kata di frame (koordinat kartu = stage − (380,110)), lalu isi ox,oy,dx,dy supaya kata ke tengah layar.

## Perintah gaya (wajib, dari pengguna)
1. Format mendatar 16:9 HD 1920×1080 30 fps; latar hitam, stabilo kuning #e9f23a, kartu krem #ebe6d6, blueprint #0b3d91.
2. Teks muncul diketik huruf demi huruf dengan titik kuning di ujung dan satu ketukan halus per huruf (lembut, seperti referensi).
3. Saat pembicara membaca Arab, ketikan/pencarian memakai huruf Arab (kanan ke kiri). Teks Arab yang ditulis Latin → huruf Arab saja (label, nama kitab, nama perawi, angka Arab ٠١٢). Kata Arab di dalam kalimat Indonesia boleh tetap Latin.
4. Hadis/kitab: adegan mencari — tab baru di browser desktop tema A "Gading & Emas" (gading #f7f2e7, emas #b8913f, espresso #2b2219), ketik Arab, rak kitab dipindai, scroll daftar, klik banyak sumber yang berkaitan, panel rincian, kamera menyorot, lalu kartu dosier naik.
5. Dosier ala referensi: foto polaroid (ilustrasi kitab, ditulis "ILUSTRASI"), stempel merah, panel gelap kanan dengan blok angka (hitam/kuning/zaitun/krem), punch-in zoom ke kata kunci saat diucapkan.
6. Kamera hidup: melayang, miring tipis, getar tangan, dorongan pelan tiap adegan, glitch RGB + hyper-zoom di setiap potongan; scanline, noise, vinyet, garis pindai, "● ANALISIS LANGSUNG".
7. Dari dokumen storyboard referensi: dashboard tiga area, mode jaringan (Network/Orbit/Clusters/Holdings/Flow), panel entitas bernilai angka dari node, case files folder diklik, blueprint dengan callout bergerak warna (merah = larangan, hijau = boleh, biru = air/wudhu, kuning = objek), montase staccato sesuai ketukan, cold open kalimat besar, hard cut ke judul, penutup satu kata distabilo.
8. Label sumber ditulis sesuai ucapan pembicara bila pengguna minta dipertahankan (Ep1: "رواه البخاري ومسلم" dipertahankan), tapi selalu cek sumber dan laporkan perbedaannya.
9. Nama Allah, Nabi, sahabat, ulama ditulis lengkap (shallallahu 'alaihi wasallam, radhiyallahu 'anhu), bukan singkatan SAW/RA.

10. Tampilan bersih tanpa abu-abu (permintaan pengguna sejak Ep3): JANGAN pakai noise/grain, scanline, garis sapu, glitch RGB; vinyet sangat tipis; semua teks/label/garis di latar gelap putih atau kuning (bukan #888/#aaa); redup saat punch cukup brightness(.62).
11. Ikuti ucapan pembicara apa adanya, jangan dikoreksi di layar (mis. 'Abdul Malik bin Marwan = khalifah ke-10 sesudah Rasulullah: Abu Bakar, 'Umar, 'Utsman, 'Ali, Hasan, Mu'awiyah, Yazid, Mu'awiyah bin Yazid, Marwan, 'Abdul Malik). Daftar berurutan ditampilkan kiri→kanan bernomor + masa jabatan.
13. Kode visual (permintaan pengguna sejak Ep5): pakai 20–30 kode per video, satu label kode per waktu (jadwal codeTag di akhir file). Daftar: /kinetic-type /venn /canvas /decision-matrix /spectrum /balance /layers /blueprint /citation /roadmap /iceberg /split-screen /callout /flowchart /infographic /diagram /badge /timeline /sketchnotes /cycle /handwritten /checklist /tree /exploded-view /teaser (+ /mindmap /bar-chart bila cocok).
14. Tab pencarian sumber (keputusan pengguna setelah Ep7): pakai gaya LAMA searchFind (Gading & Emas, rak kitab, daftar hasil, panel rincian), BUKAN tampilan situs Syamilah. Buat lebih detail: 5 rak kitab, 4 hasil (judul + nomor/jilid/halaman + tag + kutipan Arab), tiap hasil diberi baris ringkasan (sub) bahasa Indonesia, panel rincian 7 baris POIN PENTING (letak, perawi/penulis, isi dipecah per poin, derajat/status, dinukil di / didukung ayat) + kutipan. JANGAN tampilkan nama/label 'Maktabah Syamilah' di layar (keputusan Ep9): merek tab = '◆ pustaka kitab', tanpa baris DIPERIKSA; Syamilah hanya dipakai di belakang layar untuk mengambil poin-poin pentingnya, lalu TUR KAMERA menzoom semua data berurutan (permintaan pengguna): engine punya CAMS (keyframe [t,cx,cy,zoom], interpolasi eio, dicek sebelum PUNCH di setTime) dan ep7.js punya camTour(t0,t1,times): kotak cari (1300,205,1.75) → rak kitab (380,470,1.65) → daftar hasil (890,430,1.5) → hasil terpilih (890,340,1.85) → rincian (1475,470,1.65) → kutipan (1475,720,1.7) → kembali (960,540,1). Salin dari /home/claude/proj7. Data dicek di Maktabah Syamilah (shamela.ws, boleh via cap_shamela.js untuk verifikasi saja).
15. GAYA ILUSTRASI GERAK (mulai Ep8, terinspirasi contoh "MotionLah" yang dikirim pengguna; dibuat sendiri dengan SVG, tidak menyalin aset orang lain). Dipakai sebagai adegan selingan layar penuh 6–8 kali per video (±1 per menit), di samping gaya investigasi. Warna cerah boleh, tetap tanpa abu-abu. Tokoh manusia digambar tanpa wajah atau dari belakang; Nabi & sahabat tidak pernah digambar.
   JANGAN pakai /scene-illustration, /cartoon-diagram (ditolak Ep8), /chalkboard, /world-map, /coin-dial (ditolak Ep9). Pengganti yang sesuai isi: /mosaic · /mindmap gelap · /blueprint anatomi · /chart · /isometric · /vintage-map · /night-timeline · /night-sky · /clock · /soundwave · /wind · /ladder · /badge · /balance · /iceberg · /flowchart · /versus · /poetry · /checklist.
   SINKRON KATA PER KATA (Ep9): setiap visual muncul TEPAT saat kata itu diucapkan (pakai timestamp transkrip); ganti/tambah elemen tiap 2–4 detik agar penonton tidak bosan & bisa membayangkan alur ceritanya; pilih kode yang benar-benar menggambarkan isi kalimat (mis. ayam berkokok → /soundwave, angin sahur → /wind, seruan malam → /night-timeline).
16. TIDAK BOLEH ADA TEKS BERTABRAKAN (permintaan pengguna Ep8): label kode (codeTag) ditaruh di lapisan #hud (appendChild ke #hud, left:56 top:76, latar #0b1022 pekat), panggung #stage diperkecil `transform:translate(0,52px) scale(.9);transform-origin:50% 0` dan engine mengonversi titik kamera (cx = 960+(cx-960)*.9; cy = 52+cy*.9) sehingga pita atas kosong. Beri jarak antar-teks min. 25px (Arab ber-harakat butuh ruang ekstra). Selalu cek pratinjau frame untuk tabrakan sebelum render. Salin engine/codes/index dari /home/claude/proj8.
12. Foto pengguna dipakai di video (polaroid PENYAMPAI di pembuka + penutup dengan profil bulat & SUBSCRIBE), bingkai jauh/utuh.

## Alur kerja (wajib)
1. Baca transkrip; susun adegan per kalimat dengan timestamp.
2. Cek setiap hadis/atsar/kitab di web sebelum tampil (nomor, perawi, bab, derajat). Contoh Ep1: Bukhari 5027 (Utsman), Abu Dawud 1452, Tirmidzi 2907, Ibnu Majah 211, Darimi 3381, Ahmad 412; Thabrani al-Kabir 8676 (Ibnu Mas'ud, "رجاله ثقات" al-Haitsami); Ibnu Majah 219 Abu Dzar = ضعيف; atsar "إن أفواهكم طرق من طرق القرآن" = يزيد بن أبي مالك; daftar حرمة القرآن ada di mukadimah Tafsir al-Qurthubi, bab "تعظيم القرآن وحرمته" (dari Nawadir al-Ushul al-Hakim at-Tirmidzi). Derajat yang tidak bisa dipastikan → jangan beri stempel صحيح/ضعيف, tulis sumbernya saja, lalu beri tahu pengguna.
3. Kerja STEP BY STEP per menit: buat contoh menit 1 → kirim → tunggu persetujuan → menit berikutnya. Pratinjau frame (contact sheet) sebelum render. Setiap versi = nama file baru (CONTOH_menitN_...), jangan menimpa.
4. Saat pengguna minta "jangan render, kasi contoh": kirim gambar frame saja.
5. Setelah semua menit disetujui: render potongan yang belum ada, regenerasi bed suara penuh, gabung jadi `FINAL_<Judul>_FULL_HD.mp4` (+720p), cek jumlah frame & beberapa frame, kirim.
6. Cover: `cover.html` (?v=yt 1920×1080 dan ?v=reel 1080×1920) + JPG 1280×720 untuk thumbnail: judul Arab + judul Latin besar (kata kunci distabilo), kalimat pemikat, kartu dosier daftar poin pembahasan dengan centang + nama Arab, jendela browser berisi ayat/hadis utama, chip sumber, stempel merah, polaroid foto pengguna (bingkai jauh/utuh, "FILE N° · PENYAMPAI · @alurziyadahku"), lingkaran profil + tombol SUBSCRIBE merah diklik kursor.

Cover alternatif gaya buku (disukai pengguna, Ep3): kertas krem bermotif girih tipis, bingkai emas ganda + ornamen 4 sudut, label "Seri Kajian Al-Qur'an · Jilid NN", judul Arab zamrud #0f4d3a (Amiri bold), judul Latin serif kapital, subjudul miring, foto pengguna dalam lengkung mihrab emas, "Disampaikan oleh ALUR ZIYADAHKU" + @alurziyadahku; versi YouTube = mockup buku 3D (punggung hijau) kiri + judul kanan.

Cover SERI berkelanjutan (permintaan pengguna, gaya akun "Satu Hari Satu Hadits"): 1080×1920, latar hitam dengan cahaya diagonal lembut, teks di tengah (aman untuk crop grid 3:4): "Ep NN" (Amiri bold kecil) → “MENGENAL AL-QUR'AN.” (Bebas Neue besar, putih, tanda kutip pembuka) → بِإِذْنِ اللَّهِ → judul episode kecil + Arab → @alurziyadahku. Buat setiap episode baru dengan nomor berikutnya. Font Bebas Neue: unduh dari raw.githubusercontent.com/google/fonts/main/ofl/bebasneue/BebasNeue-Regular.ttf.

## Laporan ke pengguna
Bahasa Indonesia, ringkas. Selalu sebutkan sumber yang dicek dan perbedaan dengan ucapan pembicara (nama perawi, riwayat, derajat).

## ⛔ WAJIB SEBELUM RENDER FINAL — CEK TABRAKAN TEKS OTOMATIS (peringatan terakhir pengguna, Ep9)
Pengguna memberi PERINGATAN TERAKHIR: tidak boleh ada satu pun teks yang tertimpa/bertabrakan (contoh kesalahan Ep9: label grafik "diamalkan orang-orang saleh terdahulu" menimpa baris "kita orang awam pun…").
1. Salin `/home/claude/shared/overlap.js` ke folder proyek. Jalankan pada SELURUH durasi, 4 paralel, langkah 0.5 dtk:
   `node overlap.js 0 150 0.5 > ov1.txt & node overlap.js 150.5 300 0.5 > ov2.txt & node overlap.js 300.5 450 0.5 > ov3.txt & node overlap.js 450.5 END 0.5 > ov4.txt & wait; cat ov?.txt`
2. Hasil HARUS 0 baris untuk teks adegan (abaikan HUD pojok saat camTour zoom bila pengguna tidak meminta). Perbaiki hanya bagian yang dikeluhkan pengguna bila ia minta "perbaiki bagian itu saja". Ulangi sampai 0, baru jalankan full.sh.
3. Pola aman: baris teks berikutnya di posisi yang sama → akhiri baris sebelumnya (t1) tepat saat baris baru muncul; label grafik/SVG jangan diletakkan di pita y 100–260 (wilayah judul `line()`); kata yang melayang (angin, partikel) diberi jalur (lane) berbeda, jangan satu titik akhir.

## 📦 ARSIP LENGKAP DI GITHUB (mulai episode baru dari sini)
Repo `oligarchy-pixel/Al-Qur-an` (branch `claude/greeting-c94nj2`, nanti main): `README.md`, `PROMPT_DAN_ATURAN.md` (semua aturan + riwayat permintaan), `kit/engine/` (mesin terbaru Ep9 + overlap.js), `kit/covers/` (cover_ep.html, seri_latin_peny.html, shot*.js, bg/), `kit/fonts/`, `kit/shared/`, `episode/ep2..ep9/` (naskah adegan contoh), `transkrip/`, `hasil/` (semua cover & caption). Jika /home/claude/proj* atau /home/claude/covers tidak ada (container baru), salin dari repo: `cp kit/engine/* /home/claude/projN/`, `cp -r kit/covers /home/claude/covers`, `mkdir -p /home/claude/fonts && cp kit/fonts/* /home/claude/fonts/` (Bebas Neue juga di /home/claude/fonts/dl/), `cp -r kit/shared /home/claude/shared`.

## Catatan Ep10 (mesin terbaru = proj10 / repo kit/engine)
- `overlap.js` kini GAGAL KERAS bila halaman error (mis. nama konstanta bentrok seperti `G`/`R`/`B` dengan engine) → jangan pernah percaya hasil 0 tanpa melihat preview. Pakai nama warna lokal `CR/CG/CB`.
- HUD pojok memudar otomatis saat camTour zoom (`HUDK` di engine.js) → tab pencarian tidak tertimpa tulisan pojok.
- Jangan biarkan layar kosong > 2 dtk (mis. saat lafaz kurang terdengar): perpanjang teks sebelumnya atau tambah kartu pendukung.
- Perbaikan kecil setelah render: render ulang potongan 30 dtk yang terkena saja (`node render.js vid A B out/full/cNN.mp4`), lalu ulang sfx/bed + concat + mux.

## Catatan Ep11 (keputusan pengguna)
- **3D Three.js DITOLAK** ("terlalu terang, sakit mata"). Jangan pakai bloom/3D. Tetap gaya Ep10 2D, tambah visual baru di setiap kalimat (elemen muncul tiap 2–4 dtk).
- **Sentuhan video referensi (The Night Journey) yang DITERIMA**, file `ref.js` di proj11 / repo `episode/ep11`: bar bab di atas tengah (judul episode + segmen bab yang terisi kuning), latar astrolab garis tipis kuning sangat samar berputar pelan + bintang berkedip, dan efek garis bercahaya (drop-shadow kuning) hanya pada ilustrasi garis (tulang rusuk, segi lima, root-cause, timeline).
- ID gradien SVG harus unik per pemanggilan (mis. `emb${t0}`), kalau tidak gradien kedua tidak tampil.

## ✅ STANDAR MULAI EP12 (disetujui pengguna: "Bagus")
Mulai dari `episode/ep11/` di repo (ep11.js + ref.js). Wajib: gaya Ep10 2D + `ref.js` (bar bab, latar astrolab samar, garis bercahaya pada ilustrasi garis) + visual baru per kalimat tiap 2–4 dtk. Tanpa 3D/bloom. Alur kerja, rumus caption, dan riwayat prompt lengkap ada di `PROMPT_DAN_ATURAN.md` bagian 10–13 di repo.

## ⚠ KODE STYLE YANG DISEPAKATI WAJIB DIPAKAI (pengingat pengguna Ep12)
Setiap episode WAJIB memakai sebanyak mungkin kode dari daftar sepakat (poin 13): /kinetic-type /venn /canvas /decision-matrix /spectrum /balance /layers /blueprint /citation /roadmap /iceberg /split-screen /callout /flowchart /infographic /diagram /badge /timeline /sketchnotes /cycle /handwritten /checklist /tree /exploded-view /teaser /mindmap /bar-chart — minimal ±18 kode berbeda dari daftar ini, baru ditambah kode khusus (/search, /scripture, dll). Contoh pemakaian Ep12 v2: doa bersyarat → /handwritten (font Kalam), contoh doa → /sketchnotes (Kalam + kartu miring), pasti-baik vs belum → /spectrum, sakit→ingat Allah→zikir→doa → /cycle, ilmu kita dalam ilmu Allah → /venn, makna luas → /mindmap, mulut berdoa vs hati lalai → /iceberg, ayat → /citation, #1 → /badge, jalan → /roadmap, latar grid biru → /blueprint, perjalanan hidup → /timeline, 73 titik → /infographic, ayat 5→6 → /exploded-view.

## Audio SHORT vertikal (keluhan pengguna: SFX senyap)
Pisahkan jalur: `BK=1 FK=0 python3 sfx_split.py D bedonly.wav sfx.json` dan `BK=0 FK=1 … fxonly.wav`, lalu amix suara (loudnorm I=-16) + bedonly×0.45 + fxonly×2.2, `alimiter=limit=0.84:level=0`. Target: SFX jelas terdengar, puncak ≤ -1 dB.

## ⛔ TANPA DENGUNGAN (keluhan pengguna: "suara dengungan merusak pendengaran")
Musik latar ambient (pad nada rendah 55–165 Hz + noise + denyut) DIHAPUS. Mulai sekarang campur HANYA suara penyampai + jalur SFX (`BK=0 FK=1 python3 sfx_split.py …` → fxonly.wav, volume 2.2) + alimiter limit=0.84 level=0. Berlaku untuk short DAN video panjang (ubah full.sh: jangan pakai bed_full.wav; pakai fxonly).

## SHORT VERTIKAL — STANDAR (disetujui setelah Short Ep2 v5)
Ikuti `PROMPT_DAN_ATURAN.md` bagian 13 dan `kit/short_vertikal/CARA_BUAT_SHORT.md` di repo: 2:50, suara asli, hook penasaran 0–3 dtk, hook LIKE/FOLLOW/SUBSCRIBE + panah 'klik di bawah ini' 3–6 dtk, isi poin bernomor sinkron kata per kata, penutup ringkasan + CTA, audio tanpa dengungan (suara + SFX×2.2 + limiter), cek overlap 0, foto preview sebelum render.

## CAPTION SEO (mulai Ep13, permintaan pengguna)
Ikuti `PROMPT_DAN_ATURAN.md` bagian 12: judul YouTube berisi kata kunci pencarian di depan (keutamaan surah / tafsir ayat / arti / kisah nabi), baris pertama caption = kata kunci + emoji, poin ✅ + sumber, ajakan AAMIIN/simpan/bagikan, 5 hashtag `#fyp #islam #kajianislam #<topik> #mengenalalquran`, plus 6–8 kata kunci untuk kolom tag YouTube.
