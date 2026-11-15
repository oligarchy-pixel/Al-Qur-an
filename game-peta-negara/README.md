# 🌍 Perang Peta Negara: game interaktif TikTok LIVE

Game peta dunia ini meniru konsep live "country battle":

- Penonton **mengetik nama negara** di komentar untuk bergabung. Ejaan bebas dalam ±60 bahasa juga dikenali: `Indonesia`, `indo`, `ไทย`, `Việt Nam`, `pinas`, `USA`, atau emoji bendera 🇮🇩.
- **Gift, like, follow, dan share** menambah "tinggi" (meter) negaranya.
- Kamera **terbang otomatis** ke negara yang baru mendapat gift atau anggota baru. Negaranya menyala dan foto profil penonton muncul di dalam peta.
- **Papan peringkat 10 negara**, mahkota 👑 untuk negara pemimpin, timer ronde, dan **layar pemenang** berisi 3 "pahlawan negara" penyumbang terbanyak.
- Gift yang dikirim sebelum penonton memilih negara **tetap disimpan** dan dihitung setelah ia mengetik negaranya.
- Skor tersimpan otomatis, jadi aman kalau halaman tidak sengaja di-refresh.
- **Musik latar & efek suara** dibuat langsung oleh game (tanpa file rekaman, jadi aman dari klaim hak cipta musik). Lihat bagian *Suara* di bawah.

Tampilan dibuat **vertikal 9:16 (1080×1920)** untuk LIVE dari PC dengan mode portrait.

---

> 📱 **Hanya punya HP Android?** Ikuti **[PANDUAN-HP.md](PANDUAN-HP.md)**: semuanya bisa dijalankan dari satu HP (Termux + Chrome + TikTok Mobile Gaming).

## Yang dibutuhkan

1. Akun TikTok yang sudah bisa LIVE (umumnya 1.000+ followers, umur 18+).
2. PC/laptop Windows dengan **TikTok LIVE Studio** (atau OBS + stream key).
3. Salah satu penghubung event TikTok:
   - **TikFinity** (paling mudah), atau
   - **server bawaan** di folder `server/` (butuh Node.js 18+).
4. Internet, untuk citra satelit. Tanpa internet, peta otomatis tampil gaya gelap.

## Cara 1: pakai TikFinity (disarankan)

1. Instal dan buka **TikFinity**, lalu login atau hubungkan ke username TikTok kamu.
2. Pastikan **WebSocket API** TikFinity aktif. Alamat default-nya `ws://localhost:21213/`, sama dengan pengaturan game. Kalau alamatnya berbeda, ubah `WS_URL` di `config.js`.
3. Buka `index.html` di Chrome/Edge (klik dua kali file-nya).
4. Indikator kiri atas harus berubah menjadi **🟢 Terhubung** setelah kamu mulai LIVE.

## Cara 2: pakai server bawaan (tanpa TikFinity)

1. Instal **Node.js** dari nodejs.org.
2. Buka folder `server/`, lalu klik dua kali **`MULAI-SERVER.bat`** dan masukkan username TikTok kamu (tanpa @).
   Bisa juga lewat terminal: `cd server && npm install && node server.js usernamekamu`
3. Buka game di browser: **`http://localhost:21214/`** (server juga menyajikan file game dan otomatis tersambung).

> Server memakai library tidak resmi `tiktok-live-connector`. Kalau koneksi sering ditolak, daftar API key gratis di eulerstream.com, lalu jalankan dengan `set SIGN_API_KEY=kuncikamu` sebelum `node server.js`.

## Memasang di TikTok LIVE Studio

1. Buka `index.html` di browser dan buat jendelanya **tegak** (mis. 540×960), atau tekan F11 untuk layar penuh.
2. Di LIVE Studio, pilih orientasi **Portrait**, lalu **Add Source → Window Capture**, dan pilih jendela browser game.
3. Potong (crop) bilah alamat browser bila perlu, lalu tarik sampai memenuhi layar.
4. Pilih kategori **Gaming** dan judul live seperti *"Negara mana paling kuat? Ketik negaramu!"*, lalu mulai LIVE.

Untuk **OBS**, tambahkan **Browser Source**, centang *Local file*, pilih `index.html`, dan isi ukuran **1080 × 1920**.

## Suara

Semua suara disintesis langsung oleh game:

| Kejadian | Suara |
|---|---|
| Musik latar | Musik bernuansa "strategi/epik" yang terus berputar. Makin ramai saat banyak gift dan saat 30 detik terakhir ronde. |
| Penonton bergabung | "pop" + denting |
| Gift kecil (< 10 koin) | Lonceng naik; makin panjang combo, makin banyak nadanya |
| Gift sedang (10–29 koin) | Hujan koin + akor |
| Gift besar (≥ 30 koin) | Whoosh → dentuman → fanfare terompet. Musik otomatis dikecilkan sesaat. |
| Gift raksasa (≥ 900 koin) | Gulungan drum + fanfare panjang |
| Follow / share | Ding-dong / whoosh |
| Negara pemimpin berganti | Terompet pendek |
| 10 detik terakhir | Detak hitung mundur |
| Pemenang ronde | Fanfare kemenangan |

- **Chrome/Edge biasa:** klik sekali di layar game (atau tombol kuning *"Klik untuk menyalakan suara"*), karena browser melarang suara otomatis.
- **OBS Browser Source:** suara langsung jalan. Centang *Control audio via OBS* agar volumenya bisa diatur di mixer OBS.
- **TikTok LIVE Studio + Window Capture:** suara browser masuk lewat audio desktop/speaker. Pastikan audio sistem ikut tertangkap di pengaturan audio LIVE Studio.
- Tombol **M** menyalakan/mematikan musik, tombol **S** menyalakan/mematikan efek.
- Volume dan pilihan suara diatur di `config.js`: `VOLUME_MUSIK`, `VOLUME_EFEK`, `SUARA_LIKE`.
- **Mau pakai musik sendiri?** Taruh mp3 bebas hak cipta di folder game (mis. `musik/latar.mp3`) lalu isi `MUSIK_FILE: "musik/latar.mp3"`. Efek tertentu juga bisa diganti, mis. `EFEK_FILE: { giftBesar: "suara/wow.mp3" }`.

## Coba dulu sebelum LIVE

Buka `index.html?demo=1` untuk melihat simulasi penonton palsu, atau tekan tombol berikut saat game terbuka:

| Tombol | Fungsi |
|---|---|
| **D** | mode demo on/off |
| **J** / **G** / **L** | tes gabung / gift / like |
| **N** | selesaikan ronde sekarang |
| **R** | reset semua skor |
| **M** / **S** | musik / efek suara on/off |
| **H** | tampil/sembunyikan bantuan |

## Mengatur game

Semua pengaturan ada di **`config.js`** (dengan komentar berbahasa Indonesia):

- Poin: `METER_PER_KOIN`, `METER_PER_LIKE`, `METER_FOLLOW`, `METER_SHARE`
- Ronde: `DURASI_RONDE_DETIK` (0 = tanpa ronde), `RESET_SETELAH_RONDE`
- Teks: `JUDUL`, `SUBJUDUL`, `KETERANGAN`
- Peta: `TILE_URL` (kosongkan untuk peta gelap tanpa internet), `ZOOM_MAKS`, `JEDA_KAMERA_DETIK`

Setelah mengubah pengaturan, simpan file lalu refresh game (F5).

## Tips agar aman di TikTok

- Tulis aturan poin secara netral ("1 koin = 100 m"). **Jangan memaksa atau mendesak penonton mengirim gift.**
- Ubah judul, warna, dan teks agar menjadi ciri khasmu sendiri.
- Tetap berinteraksi: sapa negara yang memimpin dan umumkan pemenang setiap ronde.

## Sumber data

- Bentuk negara: Natural Earth 1:50m melalui paket `world-atlas` (domain publik)
- Nama negara multi-bahasa: `i18n-iso-countries` (MIT)
- Bendera: `flag-icons` (MIT)
- Peta: Leaflet (BSD-2), citra satelit Esri World Imagery (perlu internet)
