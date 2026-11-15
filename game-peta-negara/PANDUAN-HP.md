# 📱 Panduan LIVE Game Peta Negara: hanya pakai HP Android

Cara kerjanya: semua berjalan di **satu HP**.

```
Termux (server kecil)  ←→  TikTok LIVE kamu (membaca komentar & gift)
        ↓
Chrome (menampilkan game)  →  disiarkan ke penonton lewat TikTok "Mobile Gaming"
```

> ⚠️ **iPhone tidak bisa** memakai cara ini, karena Termux hanya ada di Android. Pengguna iPhone perlu meminjam laptop/PC (lihat `README.md`).

---

## BAGIAN A: Cek syarat dulu (2 menit)

1. Buka **TikTok** → tekan **＋** di bawah → geser ke **LIVE**.
2. Lihat pilihan di bagian bawah layar. Harus ada **"Mobile gaming" / "Game seluler"** (kadang di dalam menu "Siarkan layar"/"Screen share").
   - ✅ **Ada** → lanjut ke Bagian B.
   - ❌ **Tidak ada / tidak bisa LIVE** → akunmu belum memenuhi syarat (umumnya minimal **1.000 followers** dan umur **18+**). Kumpulkan followers dulu, lalu cek lagi.

---

## BAGIAN B: Persiapan (SEKALI SAJA, ±15 menit, pakai Wi-Fi)

### Langkah 1: Simpan file game
1. Di chat Claude, tekan file **`game-peta-negara.zip`** → **Download/Unduh**.
2. Pastikan file tersimpan di folder **Download** dengan nama persis `game-peta-negara.zip`.
   (Kalau namanya jadi `game-peta-negara (1).zip`, ganti namanya lewat aplikasi **File Manager**.)

### Langkah 2: Pasang aplikasi Termux
> ❗ **Jangan pasang dari Play Store**, karena versinya rusak/kedaluwarsa. Pakai F-Droid.

1. Buka **Chrome** dan ketik alamat **`f-droid.org`**.
2. Tekan **Download F-Droid**, lalu buka file yang terunduh.
   - Bila muncul peringatan *"Instal aplikasi tidak dikenal"*, tekan **Setelan** → aktifkan **Izinkan dari sumber ini** → kembali → **Instal**.
3. Buka **F-Droid**, tunggu sebentar sampai daftar aplikasi termuat, lalu cari **Termux** → **Instal**.

### Langkah 3: Ketik perintah di Termux
Buka **Termux**. Layarnya hitam dengan tulisan, itu normal. Ketik perintah di bawah **satu baris per satu baris**, lalu tekan **Enter** setelah tiap baris dan tunggu sampai selesai (muncul lagi tanda `$`).

> Tips: tekan lama perintah di bawah → **Salin**, lalu di Termux tekan lama layar → **Paste**.

```
termux-setup-storage
```
➡️ Akan muncul permintaan izin penyimpanan. Tekan **Izinkan**.

```
pkg update -y
```
➡️ Bila muncul pertanyaan `[Y/n]` atau `(Y/I/N/O/D/Z)`, ketik **y** lalu Enter.

```
pkg install -y nodejs unzip
```

```
cp ~/storage/downloads/game-peta-negara.zip ~/ && unzip -o ~/game-peta-negara.zip -d ~/
```

```
bash ~/game-peta-negara/server/mulai-hp.sh
```
➡️ Pertama kali, perintah ini menginstal paket (±2–5 menit). Lalu muncul:
`Masukkan username TikTok kamu (tanpa @):`
Ketik username TikTok-mu, **tanpa @**, lalu Enter.

✅ **Berhasil** jika muncul tulisan:
```
 Server siap. Buka di Chrome:  http://localhost:21214/
```
Tulisan *"Menunggu LIVE … dimulai"* yang muncul berulang itu **normal**, karena kamu belum LIVE.

### Langkah 4: Coba game-nya (tanpa LIVE)
1. Biarkan Termux tetap terbuka, lalu pindah ke **Chrome**.
2. Buka alamat: **`localhost:21214/?demo=1`**
3. Ketuk layar sekali. Game menjadi layar penuh, musik berbunyi, dan penonton palsu mulai bergabung ke negara-negara. 🎉
4. Kalau sudah melihatnya, tutup tab itu. Mode demo hanya untuk mencoba.

### Langkah 5: Supaya Termux tidak dimatikan HP
Buka **Setelan HP → Aplikasi → Termux → Baterai** → pilih **Tidak dibatasi / Unrestricted**.
Lakukan hal yang sama untuk **Chrome** dan **TikTok**.

---

## BAGIAN C: SETIAP KALI MAU LIVE

1. **Aktifkan "Jangan Ganggu"** supaya notifikasi WhatsApp dll. tidak ikut tersiar.
2. **Buka Termux** dan ketik:
   ```
   bash ~/game-peta-negara/server/mulai-hp.sh
   ```
   (Tips: di Termux, tombol panah ▲ memunculkan perintah terakhir.)
3. **Buka Chrome** → alamat **`localhost:21214`** → **ketuk layar sekali** (layar penuh + suara).
   Di pojok kiri atas akan tertulis 🔴 *Menunggu LIVE …*
4. **Buka TikTok** → **＋** → **LIVE** → pilih **Mobile gaming**.
   - Judul, contohnya: **"Negara mana paling kuat? Ketik negaramu! 🌍"**
   - Kategori/game: pilih yang paling sesuai (mis. *Lainnya/Other*).
   - Tekan **Mulai LIVE** → izinkan **merekam/menyiarkan layar** (pilih *seluruh layar* bila ditanya).
5. **Kembali ke Chrome** lewat tombol aplikasi terakhir (☰ / kotak).
   Dalam ±15–30 detik, tulisan pojok kiri atas berubah menjadi 🟢 **Terhubung ke LIVE @usernamekamu**.
6. Selesai! Penonton tinggal mengetik nama negara di komentar.
   Coba dari akun lain: komentar **"Indonesia"**. Fotonya akan muncul di peta Indonesia.

**Mengakhiri LIVE:** akhiri LIVE di TikTok → buka Termux → tekan **CTRL** (di baris tombol atas Termux) lalu **C**. Atau tutup saja Termux.

---

## Masalah yang sering terjadi

| Masalah | Solusi |
|---|---|
| Perintah `pkg` error / "repository" error | Termux terpasang dari Play Store. Hapus, pasang ulang dari **F-Droid**. |
| `cp: cannot stat … game-peta-negara.zip` | File zip tidak ada di folder Download atau namanya berbeda. Cek dengan File Manager. |
| Chrome: *"Situs tidak dapat dijangkau"* | Termux belum dijalankan atau sudah ditutup HP. Jalankan lagi perintah di Bagian C langkah 2. |
| Sudah LIVE tapi status tetap 🔴 *Menunggu LIVE* | Tunggu 30 detik. Pastikan username benar. Untuk mengganti username, jalankan `rm ~/game-peta-negara/server/.username` lalu jalankan `mulai-hp.sh` lagi. |
| Komentar penonton tidak masuk ke game | Lihat tulisan di Termux. Kalau ada pesan error dari TikTok, coba matikan & jalankan ulang Termux. |
| Penonton tidak mendengar musik | Di pengaturan Mobile Gaming TikTok, aktifkan **audio game/perangkat** (butuh Android 10+). Cara cadangan: besarkan volume speaker agar tertangkap mikrofon. |
| HP panas / lambat | Buka game dengan **`localhost:21214/?satelit=0`** (peta tanpa citra satelit, jauh lebih ringan). Tutup aplikasi lain. Pasang charger. |
| Papan peringkat berisi pemain lama/palsu | Buka **`localhost:21214/?reset=1`** sekali untuk menghapus semua skor & pemain. |
| Notifikasi muncul di LIVE | Aktifkan mode **Jangan Ganggu** sebelum LIVE. |

### Memperbarui game (kalau ada versi baru)
Unduh zip terbaru ke folder Download, lalu di Termux ketik:
```
cp ~/storage/downloads/game-peta-negara.zip ~/ && unzip -o ~/game-peta-negara.zip -d ~/
```

### Mengubah pengaturan (durasi ronde, poin, judul)
Di Termux ketik `nano ~/game-peta-negara/config.js`. Ubah angkanya, lalu simpan dengan **CTRL+O → Enter**, dan keluar dengan **CTRL+X**. Setelah itu refresh Chrome.

---

## Catatan penting
- Server memakai library tidak resmi (`tiktok-live-connector`) untuk membaca komentar & gift. Cara ini umum dipakai pembuat game live, tapi bukan fitur resmi TikTok.
- Tulis aturan poin dengan netral. **Jangan memaksa/mendesak penonton mengirim gift.**
- Tetap aktif: sapa penonton dan umumkan negara pemenang tiap ronde. Ini membuat LIVE-mu lebih ramai dan tidak dianggap "LIVE tanpa interaksi".
