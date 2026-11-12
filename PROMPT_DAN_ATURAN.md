# Prompt & Aturan Tetap — Seri Mengenal Al-Qur'an (@alurziyadahku)

Semua keluaran berbahasa Indonesia. Skill utama: `skills/video-kajian-dokumen-investigasi/SKILL.md` (berisi detail teknis lengkap). Ringkasan aturan yang WAJIB diterapkan di setiap episode:

## 1. Format & tampilan
- Video 16:9 Full HD 1920×1080, 30 fps, crf 27, tune grain.
- **Tidak ada abu-abu** sama sekali: tanpa noise, scanline, sweep, glitch RGB. Teks & garis putih atau kuning `#e9f23a`.
- Gaya: dokumen investigasi, latar hitam / navy malam, aksen kuning, krem untuk kertas ayat.

## 2. Kode visual
- **20–30 kode visual per video**, satu codeTag tampil pada satu waktu (di `#hud`, kiri atas, latar `#0b1022`).
- **DILARANG:** `/scene-illustration`, `/cartoon-diagram`, `/chalkboard`, `/world-map`, `/coin-dial`.
- Contoh kode yang dipakai: /kinetic-type, /scripture, /exploded-view, /ladder, /bar-chart, /badge, /night-sky, /dossier, /clock, /layers, /callout, /search, /soundwave, /split-screen, /wind, /night-timeline, /checklist, /quote, /versus, /poetry, /balance, /flowchart, /decision-matrix, /iceberg, /timeline, /contrast, /teaser, /mosaic, /mindmap, /blueprint, /chart, /isometric, /vintage-map.
- **Sinkron kata per kata:** setiap visual muncul TEPAT saat kata diucapkan (pakai timestamp transkrip). Ganti/tambah elemen tiap 2–4 detik agar penonton tidak bosan dan bisa membayangkan alur cerita. Pilih kode yang benar-benar menggambarkan kalimat (ayam berkokok → /soundwave, angin → /wind, seruan malam → /night-timeline, jam → /clock).
- Daftar berurutan ditampilkan kiri → kanan dengan nomor.

## 3. ⛔ Tidak boleh ada teks yang tertimpa (PERINGATAN TERAKHIR pengguna, Ep9)
- Panggung (stage) di-skala 0.9 dan digeser 52px ke bawah; jarak antar teks minimal 25px.
- Sebelum render final WAJIB jalankan `overlap.js` di seluruh durasi (langkah 0.5 dtk). Hasil harus **0 baris** DAN preview frame harus dicek (overlap.js berhenti dengan PAGE ERROR bila halaman gagal). Jangan ada layar kosong > 2 dtk.
- Baris teks baru di posisi yang sama → akhiri baris lama tepat saat baris baru muncul. Label grafik jangan di pita y 100–260 (wilayah judul).
- Jika pengguna bilang "perbaiki bagian itu saja", ubah HANYA bagian itu.

## 4. Tab pencarian sumber
- Gaya tab browser lama (Gading & Emas): kotak cari, 5 rak kitab, 4 hasil (judul + jilid/halaman + tag + kutipan Arab + **baris ringkasan Indonesia**), panel **RINCIAN SUMBER 7 poin penting** + kutipan.
- **Jangan tampilkan nama "Maktabah Syamilah"** di layar. Merek tab: "◆ pustaka kitab". Syamilah hanya dipakai di belakang layar untuk mengambil poin-poin pentingnya.
- Kamera tur (camTour) menzoom semua bagian data berurutan.

## 5. Isi & sumber
- Ikuti ucapan penyampai apa adanya; **jangan dikoreksi di layar**. Hasil cek sumber dilaporkan ke pengguna di chat (mis. Abdul Malik bin Marwan = khalifah ke-10, biarkan sesuai ucapan).
- Tampilkan derajat hadis bila ada (shahih / dha'if / maudhu') beserta kitab, jilid, halaman.
- Tulis "ma dibaca pendek/panjang" dengan huruf م ditampilkan.

## 6. Audio
- Suara: loudnorm I=-16, TP=-1.5. **TANPA musik latar/dengungan** (dihapus atas permintaan pengguna) — hanya suara + SFX (fxonly × 2.2, alimiter).
- **Volume SFX: `fx = fx[:n] * 5.8`** di `sfx.py` (riwayat: 2.1 → 2.7 → 3.8 → 4.8 → 5.8; pengguna beberapa kali minta dinaikkan).
- Jika pengguna mengirim MP3 pengganti dengan durasi sama, cukup ganti audio (visual tetap).

## 7. Foto pengguna
- Pembuka: foto polaroid berlabel **PENYAMPAI**.
- Penutup: polaroid + avatar bulat kecil + @alurziyadahku + tombol SUBSCRIBE (diklik → SUBSCRIBED ✓), avatar diberi jarak.

## 8. Cover (setiap episode)
1. **Cover dosier lama** (`cover_ep.html?ep=N&v=yt|reel`): YouTube 1920×1080 + Reel 1080×1920, menceritakan isi video (judul, hook, 4 kartu poin, stamp, blueprint, foto, SUBSCRIBE). Judul panjang → `fs: .8`.
2. **Post seri IG** (`seri_latin_peny.html`): latar hitam, Bebas Neue, "Ep NN", judul latin 2 baris, بِإِذْنِ اللهِ · إِنْ شَاءَ اللهُ, avatar + label PENYAMPAI, HD 2160×2700.
3. Gaya lain yang pernah diminta: islamic art, mini vlog, hitam + Arab, bulan, air, kucing, carousel quote, cover buku, cover gaya terbaru (kaca pembesar).

## 9. Penamaan & pengiriman
- **Setiap versi nama file baru, jangan menimpa** (v2, v3, …).
- Kirim: video final, cover YouTube, cover Reel, post seri IG, laporan cek sumber, lalu tawarkan caption.
- Caption: judul YouTube, caption pembuka yang memancing (hook), poin isi dengan emoji, ajakan komentar/bagikan/subscribe, **5 hashtag** paling berpengaruh (mis. `#taubat #istighfar #tahajjud #kajianislam #mengenalalquran`).

## 10. Gaya standar terbaru (dipakai mulai Ep12 — hasil Ep11 yang disetujui "Bagus")
**Dasar = gaya Ep10 (2D hitam + kuning) + lapisan referensi `ref.js` (dari video referensi "The Night Journey").** Salin `episode/ep11/` (ep11.js + ref.js + index.html + engine.js + full.sh) sebagai titik awal.
1. **Bar bab di atas tengah** (`ref.js`): judul episode huruf kapital kecil + 6–8 segmen bab (mis. PEMBUKA · NAFSU · NIKMAT · PERANG · 5 KESULITAN · CINTA · TAUBAT · PENUTUP) yang terisi kuning sesuai bagian yang sedang dibahas. Tentukan bab dari alur transkrip.
2. **Latar astrolab samar**: lingkaran garis tipis kuning (opasitas 0.05–0.12) berputar pelan + ±70 bintang berkedip. Tidak boleh mengganggu keterbacaan.
3. **Garis bercahaya lembut** (drop-shadow kuning) HANYA pada ilustrasi garis (diagram, rangka, timeline, root-cause, segi lima) — bukan pada teks.
4. **Visual per kalimat**: setiap 2–4 detik ada elemen baru yang muncul tepat saat katanya diucapkan (kartu, panah, stabilo, ikon, poin). Daftar/enumerasi dari penyampai = kartu bernomor kiri → kanan yang muncul satu per satu (contoh Ep11: 14 kotak nikmat muncul tiap "Allah ﷻ…").
5. **Ilustrasi garis 2D sebagai pengganti 3D**: rangka tulang rusuk dengan bara merah berdenyut (nafsu), diagram segi lima dengan sosok di tengah (lima perkara), garis waktu "awal penciptaan → kiamat", cermin, lensa mata cinta/benci, kerumunan titik, ruang terkunci dengan sorot cahaya.
6. **⛔ 3D (Three.js / bloom) DITOLAK** — "terlalu terang, sakit mata". Jangan dipakai lagi kecuali pengguna memintanya.
7. ID gradien/elemen SVG harus unik per pemanggilan (mis. `emb${t0}`), kalau tidak efek kedua tidak tampil.

## 11. Alur kerja per episode (urutan yang disukai pengguna)
1. Terima MP3 + transkrip bertimestamp (boleh per detik). Cek durasi MP3.
2. **Cek sumber** semua hadis/atsar/syair di Maktabah Syamilah (belakang layar): kitab, jilid, halaman, derajat. Lafaz yang "kurang terdengar" → jangan ditebak; tampilkan terjemahan saja, atau usulkan syair masyhur yang cocok dan minta konfirmasi.
3. Bila pengguna minta **"sheet by sheet dulu, jangan render"**: kirim dokumen sheet-by-sheet (waktu · kode · ucapan · visual · catatan sumber) **+ foto storyboard per sheet** (`node render.js preview …` lalu dijadikan lembar 3×4 bernomor). Pengguna biasanya ingin MELIHAT FOTO, bukan hanya teks.
4. Bangun adegan → cek sintaks → `overlap.js` seluruh durasi (0 baris) → cek foto preview (tidak ada layar kosong > 2 dtk, tidak ada bug gradien).
5. Render final (`full.sh`), cek durasi/volume/foto, kirim: video + cover dosier YT & Reel + post seri IG + caption.
6. Laporkan hasil cek sumber di chat (derajat lemah/palsu disebut di chat & tab pencarian, bukan dikoreksi di layar).
7. Simpan semuanya ke repo (episode/epN, hasil/EpN_Dokumen, transkrip, skill).

## 12. Rumus caption SEO (mudah dicari · berlaku mulai Ep13)
Pencarian TikTok/IG/YouTube membaca KATA KUNCI di judul & caption → kata yang diketik orang wajib ada di depan.
1. **Judul YouTube**: kata kunci pencarian di depan, dipisah `|` (contoh: "Kisah Sapi Betina Nabi Musa & Keutamaan Surah Al-Baqarah | Arti Alif Lam Mim | Tafsir Al-Baqarah Ayat 1-2"). Pakai frasa yang biasa dicari: *keutamaan surah …*, *tafsir … ayat …*, *arti …*, *kisah nabi …*, *doa …*, *hukum …*, *cara …*.
2. **Baris pertama caption** = kata kunci utama + emoji (yang tampil sebelum "lihat selengkapnya").
3. **Baris kedua** = hook penasaran ("Ternyata…", "Kenapa…?", "Pantesan…").
4. **Poin isi** pakai ✅ + sumber (HR./QS.) — tiap poin mengandung kata kunci turunan.
5. **Ajakan**: 💬 "Tulis AAMIIN…" · 📌 simpan & bagikan.
6. **5 hashtag** (data hashtag paling konsisten 2025–2026): `#fyp #islam #kajianislam` + 1 topik (`#kisahislami` untuk kisah · `#dakwahislam` untuk nasihat · `#doa` untuk doa) + `#mengenalalquran`.
7. **Kata kunci tambahan** (YouTube → kolom tag): 6–8 frasa pencarian (nama surah, keutamaan, tafsir ayat, tokoh kisah, "kajian islam", "ngaji online").
8. Cek tren terbaru sebelum unggah: ketik kata kunci di kolom cari TikTok/YouTube → pakai saran otomatis yang muncul paling atas.

## 13. Short vertikal (Reels/TikTok/Shorts) — STANDAR (disetujui pengguna setelah Short Ep2 v5)
Template terbaru: `kit/short_vertikal/ep2_v4/index.html` (+ `render.js`, `overlap.js`, `sfx_split.py`). Panduan langkah: `kit/short_vertikal/CARA_BUAT_SHORT.md`.
1. **Format**: 1080×1920, durasi **2:50 (170 dtk)** kecuali pengguna minta lain. Konten penting di y 250–1500 (aman dari UI aplikasi).
2. **Pakai suara asli penyampai** (potongan terbaik dari MP3 episode, ±150–160 dtk) — pilih bagian berisi daftar/poin praktis yang utuh dan berakhir di kalimat yang tuntas.
3. **Hook 1 · penasaran (0–3 dtk)**: kalimat menohok + jumlah poin (contoh: "rajin baca Al-Qur'an… tapi pahalanya bisa **BERKURANG?** 😳 · 5 adab yang sering dilupakan 👇" + kotak 01–05).
4. **Hook 2 · ajakan (3–6 dtk)**: "sebelum mulai… bantu kami 🙏" + tombol ❤️ LIKE · ＋/✓ FOLLOW · 🔔 SUBSCRIBE yang ditekan satu per satu (animasi pop) + "📺 video lengkapnya **klik di bawah ini**" dengan panah ⬇ memantul (mengarah ke tautan "video terkait" di kiri bawah).
5. **Isi**: suara mulai detik 6 (offset audio = waktu_audio − (awal_potongan − 6)). Tiap poin: header "ADAB/POIN KE-n" bernomor berwarna, lafaz Arab per kata dengan stabilo, teks kinetik per kalimat, kartu/ikon/alur 3 langkah, penghitung "n/5" di HUD. Visual baru tiap 2–4 dtk, sinkron kata per kata.
6. **Penutup (±7 dtk)**: ringkasan semua poin (kotak ikon bernomor) + tombol LIKE/FOLLOW/SUBSCRIBE lagi + "masih banyak … lainnya 📖 · tonton video lengkapnya → klik di bawah ini ⬇".
7. **Audio**: ⛔ TANPA musik latar/dengungan. Hanya suara (loudnorm I=-16, TP=-1.5, adelay 6000) + SFX keras (`BK=0 FK=1 python3 sfx_split.py 170 fxonly.wav sfx.json`, volume 2.2) + `alimiter=limit=0.84:level=0`, fade-out 1,4 dtk. Puncak ≤ −1 dB.
8. **Cek**: `overlap.js` seluruh durasi langkah 0,25 dtk = 0 baris + foto preview sebelum render.
9. **Kirim** video + caption singkat gaya viral (STOP/pantesan/ternyata + ajakan komentar "AAMIIN"/simpan/kirim + 5 hashtag: `#fyp #dakwahislam #<topik> #pengingatdiri #mengenalalquran`) + pengingat: di YouTube Shorts pilih "Video terkait" → video episode lengkap; di TikTok/IG taruh tautan di bio/komentar tersemat.
10. Setiap versi nama file baru (`SHORT_EpN_vX_…`), jangan menimpa.

---

## Riwayat permintaan pengguna (urut)
- Masukkan foto bulat kecil di samping @alurziyadahku; jaraknya dijauhkan.
- Mulai Ep3 masukkan foto saya di video.
- Abdul Malik bin Marwan khalifah ke-10 — jangan diubah, sesuaikan saja; urutkan khalifah dengan benar.
- Ubah tampilan seluruh layar, jangan ada abu-abu yang merusak mata.
- Buat cover, caption, 5 hashtag yang paling berpengaruh supaya banyak yang nonton.
- Cover gaya cover buku yang bagus dengan penulis yang rapi; cover model quotes/carousel (1 slide); cover yang pas dengan hasil video.
- Naikkan sedikit lagi volume seluruh SFX (diminta berulang: Ep4, Ep5, Ep7, Ep9).
- Ep5: tambahkan 20–30 kode visual terbaik, terapkan untuk semua episode selanjutnya; ganti MP3 dengan rekaman yang lebih bagus.
- Cover yang menceritakan semua isi video; buat juga untuk Ep1, Ep2, Ep3.
- Ep1: cover islamic art ala Pinterest; mini vlog; latar hitam + judul + penjelasan bahasa Arab; cover bulan ukuran post IG; gaya air; gaya kucing (fokus tengah) + ringkasan adegan.
- Seri berkelanjutan ala "Satu Hari Satu Hadits": Ep1 "Kehormatan Al-Qur'an", di bawahnya بِإِذْنِ اللهِ · إِنْ شَاءَ اللهُ, foto kecil sebagai penyampai, HD; versi judul latin Ep2–Ep5; label PENYAMPAI.
- Ep6: olah sampai final; deskripsi, caption, hashtag ringkas padat yang bikin meledak; cover seperti dulu yang menceritakan isi video.
- Ep7: tab pencarian sumber → kembalikan gaya lama, lebih detail, kamera menzoom semua data.
- Ep8: gabungkan analisa iklan MotionLah secara profesional; gaya Ep7 + 8 gaya ilustrasi; tanpa kartun & scene ilustrasi; teks / kode tidak boleh menimpa teks lain (contoh: label kinetic-type tertabrak bismillah).
- Cover versi lama + versi terbaru; tambahkan versi seri PENYAMPAI.
- Ep9: buat sampai final; cover seri IG + cover dosier lama; **jangan chalkboard, world-map, coin-dial**; visual & kode harus sesuai kata per kata, profesional, agar penonton tidak bosan dan bisa berimajinasi.
- Ep9: jangan gunakan (tampilan) Maktabah Syamilah — pakai tab browser seperti sebelumnya, lebih detail & terperinci; dari Syamilah ambil poin pentingnya saja.
- Ep9: tambahkan lagi semua SFX, ganti MP3 dengan yang baru.
- Ep9: perbaiki teks yang tertimpa di bar-chart — **peringatan terakhir, jangan terulang**; perbaiki bagian yang dikirim gambar saja.
- Simpan semua skill, perintah, prompt, aset untuk video selanjutnya (arsip ini).
- Ep10: lanjut sampai final, tambahkan apa yang patut, buat terlihat seperti editor profesional.
- Ep10: caption yang bisa menambah like & view (rumus di bagian 12).
- Ep1: buat short video < 3 menit dari Ep1 (dibuat dari catatan sheet Ep1 karena rekaman tidak ada).
- Contoh 3D (CSS) → "tidak cocok"; contoh 3D Three.js meja investigasi → lalu Ep11 dengan 3D → **dibatalkan: terlalu terang, sakit mata**.
- Ep11: lanjut dengan gaya Ep10 + 3D paling bagus → minta **sheet by sheet dulu, jangan render** → "mana photonya, saya mau lihat" (kirim foto storyboard per sheet).
- Ep11: "buat saja seperti Ep10 lengkap, tambahkan visual yang paling bagus setiap detik per detik kalimatnya".
- Ep11: tambahkan sedikit dari video referensi (The Night Journey) agar video lebih baik → bar bab, latar astrolab, garis bercahaya. Hasil: **"Bagus"** → jadikan standar episode selanjutnya.
- Ep12: lanjut sampai final, buat lebih bagus lagi sebagai pro editor dengan berbagai macam visual (dipakai: jalan lurus bercabang, grafik naik-turun, kartu doa bersyarat إِنْ كَانَ خَيْرًا لِي, EKG, tetes vs lautan ilmu, gerbang surga, 73 titik, lapisan ilmu, dll).
- Ep12: tambahkan kode style yang disepakati dahulu (daftar poin 13 skill) → Ep12 v2 memakai 19 kode sepakat; minta foto per sheet dulu, jangan render; lalu "lanjut render sampai final".
- Short Ep2: gaya short Ep1 + hook awal ajakan LIKE · FOLLOW · SUBSCRIBE dan panah "video lengkapnya klik di bawah ini" (mengarah ke tautan video terkait), diulang di penutup. Template: kit/short_vertikal/ep2 (pakai suara asli, potongan audio diberi offset 3,5 dtk setelah hook).
- Short Ep2 v2: durasi 2:45; hook penasaran 0–3 dtk ("rajin baca Al-Qur'an… tapi pahalanya bisa BERKURANG? 😳 · 5 adab yang sering dilupakan") lalu CTA like/follow/subscribe + panah klik di bawah (3–6 dtk), isi 5 adab dengan suara asli, penutup ringkasan + CTA.
- Short Ep2 v3: "tambahkan sound sfx-nya, kenapa senyap" → untuk SHORT: pisahkan jalur musik & SFX (kit/short_vertikal/sfx_split.py, env BK/FK), campur suara (loudnorm -16) + musik 0.45 + SFX 2.2 + alimiter limit=0.84 level=0. Jangan campur bed+sfx lalu volume 0.5 (SFX jadi senyap).
- Short Ep2 v4: durasi 2:50 (suara diteruskan sampai 2:46 audio, poin 06 'memperdengarkan bacaan ke diri sendiri'), SFX keras.
- Short Ep2 v5: "suara dengungan dihapus, merusak pendengaran" → musik latar/drone DIHAPUS untuk semua video selanjutnya; hanya suara + SFX.
- Simpan perintah short (Ep2) untuk episode selanjutnya → bagian 13 di atas menjadi standar short.
- Cover short Ep2 (`kit/covers/short_cover.html`): vertikal HD 2160×3840, hook judul + daftar poin bernomor berikon + PENYAMPAI + ▶ TONTON; isi penting di area tengah agar aman dipotong 4:5 di grid IG.
- Ep13: lanjutkan Ep13 (Surah Al-Baqarah · kisah sapi betina · Alif Lam Mim · ayat 2) → standar penuh: 20 kode sepakat, tab pencarian, bar bab, audio TANPA dengungan (full.sh baru: fxonly × 2.0 + limiter; salin dari episode/ep13).
- Ep13: ganti caption ke yang sedang terkenal agar mudah dicari + hashtag → rumus caption SEO (bagian 12) diterapkan untuk episode selanjutnya.
