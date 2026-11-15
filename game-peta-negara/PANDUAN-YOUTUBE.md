# 📺 Panduan LIVE di YouTube + Game Islami (hanya HP Android)

Game Islami punya 2 mode, dan keduanya bisa dipakai di **YouTube** maupun **TikTok**:

| Mode | Alamat di Chrome | Cara penonton ikut |
|---|---|---|
| 🕌 **Kuis Islami** | `localhost:21214/islami.html` | Ketik **A**, **B**, **C**, atau **D** di chat |
| 📿 **Dzikir Bersama** | `localhost:21214/islami.html?mode=dzikir` | Ketik **SubhanAllah**, **Alhamdulillah**, **Allahu Akbar**, **Astaghfirullah**, **La ilaha illallah**, atau **shalawat** |

Tampilan bawaan berbahasa Inggris. Pilih bahasa dengan **`?lang=ms`** (Bahasa Melayu) atau **`?lang=id`** (Bahasa Indonesia), misalnya `localhost:21214/islami.html?lang=ms`.

- **Kuis Islami**: 97 soal (Al-Qur'an, rukun Islam & iman, para nabi, sirah). Satu soal berlangsung 20 detik. Jawaban benar dapat 10 poin, ditambah bonus untuk 3 penjawab tercepat. Setiap 10 soal muncul layar **Juara Kuis**.
- **Dzikir Bersama**: semua dzikir penonton dijumlahkan menuju target (500, 1.000, …). Saat target tercapai muncul **"MasyaAllah!"**.
- Penonton baru disapa **"Assalamu'alaikum"** dan diajak ikut.
- Gift, Super Chat, dan member **hanya diberi ucapan "Jazakallahu khairan 🤲"**, tidak dijadikan poin, supaya permainan tetap tentang ilmu dan dzikir.
- Tanpa musik, hanya bunyi pendek. Sangat ringan untuk HP biasa.

## ♾️ LIVE sangat panjang (24 jam+) dalam Bahasa Melayu

Alamat yang disarankan:
```
localhost:21214/islami.html?lang=ms&auto=15
```
- Kuiz ⇄ Zikir bergantian setiap 15 minit tanpa henti. Setiap 10 soalan muncul Juara Kuiz, lalu pusingan baharu.
- Setiap 6 minit muncul **pengingat** (kongsikan LIVE, selawat, cara bermain, like & subscribe). Ubah dengan `&remind=10`, atau matikan dengan `&remind=0`.
- Data pemain dirampingkan otomatis supaya HP tidak semakin berat walau berjalan berhari-hari.
- Server Termux **menyala ulang otomatis** kalau berhenti.
- ⚠️ YouTube hanya menyimpan rakaman (VOD) untuk live **≤ 12 jam**. Live yang lebih lama tetap boleh berjalan, tetapi rakamannya tidak disimpan penuh.

## ⏱ LIVE panjang (mis. 3 jam) tanpa menyentuh HP

Buka **`localhost:21214/islami.html?auto=15`**. Game akan **bergantian otomatis**: 15 menit Kuis, lalu 15 menit Dzikir, dan seterusnya. Saat berganti, soal yang sedang berjalan diselesaikan dulu. Angka 15 bisa diganti, misalnya `?auto=20`. Untuk Bahasa Indonesia: `?auto=15&lang=id`.

---

## BAGIAN A: Syarat LIVE di YouTube (cek dulu)

1. **Aktifkan fitur live** di channel: buka **youtube.com/features** di Chrome → verifikasi **nomor HP**. Saat pertama kali diaktifkan, YouTube bisa butuh **hingga 24 jam** sebelum Anda bisa live.
2. **LIVE dari aplikasi YouTube di HP** biasanya mensyaratkan **minimal 50 subscriber**. Syarat ini bisa berubah sewaktu-waktu, jadi cek di aplikasi YouTube: **＋ (Buat) → Tayangkan live / Go live**.
3. **Belum punya 50 subscriber?** Pakai aplikasi siaran gratis yang bisa menyiarkan **layar HP** ke YouTube, misalnya **Streamlabs** atau **PRISM Live Studio** dari Play Store. Siaran lewat aplikasi seperti ini umumnya tidak terkena syarat 50 subscriber, karena dihitung sebagai "encoder".
4. Catat **handle channel** Anda, yaitu nama yang diawali **@**. Lihat di aplikasi YouTube → **Anda** → nama channel (contoh: `@namachannel`).

> ⚠️ Untuk membaca chat, LIVE harus **Publik** (atau minimal **Tidak publik/Unlisted**), dan **live chat harus aktif**.

---

## BAGIAN B: Pasang versi terbaru (sekali saja)

1. Unduh zip terbaru dari chat Claude → buka/simpan dengan **Termux**.
2. Di Termux, tekan **CTRL + c** kalau ada server yang masih jalan, lalu tempel:
   ```
   cd ~ && unzip -o "$(ls -t ~/downloads/*.zip ~/storage/downloads/game-*.zip 2>/dev/null | head -1)" -d ~/
   ```
3. Jalankan server mode YouTube:
   ```
   bash ~/game-peta-negara/server/mulai-youtube.sh
   ```
   Pertama kali, perintah ini menginstal paket tambahan (±1–3 menit). Lalu muncul pertanyaan:
   `Masukkan handle channel YouTube kamu (contoh: @namachannel):`
   Ketik handle Anda **lengkap dengan @**, lalu Enter.

✅ Berhasil kalau muncul **"Server siap"** dan daftar alamat game. Tulisan *"Menunggu YouTube Live … dimulai"* yang berulang itu **normal**, karena Anda belum live.

> Untuk **TikTok**, tetap pakai `bash ~/game-peta-negara/server/mulai-hp.sh`. Game Islami juga bisa dipakai di TikTok.

---

## BAGIAN C: Setiap kali mau LIVE di YouTube

1. Nyalakan **Jangan Ganggu** dan pasang **charger**.
2. **Termux:** `bash ~/game-peta-negara/server/mulai-youtube.sh`, lalu tekan Home (jangan tutup Termux).
3. **Chrome:** buka `localhost:21214/islami.html` (kuis) atau `localhost:21214/islami.html?mode=dzikir` (dzikir), lalu **ketuk layar sekali**.
4. **Mulai LIVE dengan berbagi layar:**
   - **Aplikasi YouTube** (kalau sudah 50+ subscriber): **＋ → Tayangkan live** → pilih opsi **berbagi layar / Share screen** kalau tersedia.
   - **Streamlabs / PRISM**: login dengan akun YouTube → pilih sumber **Layar / Screen** → mulai siaran.
   - Judul, contohnya: **"Islamic Quiz LIVE 🕌 Answer A B C D!"** atau **"Dzikir Together 📿 Type SubhanAllah"**.
5. **Pindah ke Chrome.** Dalam ±30 detik, status kiri atas berubah menjadi 🟢 **Connected to LIVE @handle**.
6. Setiap chat penonton juga tampil di Termux (contoh: `💬 Ahmad: B`), jadi mudah dicek.

---

## Masalah yang sering terjadi

| Masalah | Solusi |
|---|---|
| Status tetap *"Waiting for LIVE…"* padahal sudah live | Tunggu 20–40 detik. Pastikan handle benar (hapus dengan `rm ~/game-peta-negara/server/.youtube` lalu jalankan lagi), LIVE **Publik/Unlisted**, dan **chat aktif**. |
| *"Server not running"* di game | Termux tertutup. Jalankan lagi perintah di Bagian C langkah 2. Atur baterai Termux → **Tidak dibatasi**. |
| Jawaban penonton tidak dihitung | Jawaban hanya dihitung **selama timer soal berjalan**, dan setiap orang hanya dihitung **jawaban pertamanya**. |
| Papan skor berisi nama lama | Buka `localhost:21214/islami.html?reset=1` sekali. |
| Ingin mencoba tanpa live | `localhost:21214/islami.html?demo=1` (penonton simulasi). |

### Menambah soal sendiri
Di Termux: `nano ~/game-peta-negara/islami-data.js`. Salin satu baris soal lalu ubah isinya. **Jawaban benar selalu ditulis pertama**; game mengacak urutannya. Simpan dengan **CTRL+O → Enter**, keluar dengan **CTRL+X**, lalu refresh Chrome.
