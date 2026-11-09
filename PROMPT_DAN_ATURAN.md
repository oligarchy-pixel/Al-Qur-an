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
- Sebelum render final WAJIB jalankan `overlap.js` di seluruh durasi (langkah 0.5 dtk). Hasil harus **0 baris**.
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
- Suara: loudnorm I=-16, TP=-1.5. Musik latar volume 0.4.
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
