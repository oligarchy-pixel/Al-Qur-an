# Paket Produksi dan Arsip Ep27

## Status final

Render penuh dijalankan satu kali dan selesai dengan status sukses. MP4 lulus pemeriksaan metadata, decode penuh tanpa error, dan tinjauan frame representatif.

**File master:** `FINAL_Ep27_Lima_Ayat_An_Nisa_HD.mp4`  
**Durasi:** 596,8 detik (09:56,8)  
**Video:** H.264, 1920×1080, 30 fps  
**Audio:** AAC, 44,1 kHz, stereo  
**Ukuran:** 69.961.673 byte (sekitar 67 MB), di bawah batas 100 MB per file GitHub.  
**Loudness terukur:** −14,8 LUFS integrated; true peak −1,4 dBFS.  
**SHA-256:** `b16b31c1ad04dd26fff6ffa3afc8083922abfc6a5242f89ec80a5dc760609119`

## Audio dan editorial

Rekaman penyampai dipertahankan utuh. Mix memakai SFX saja; tidak ada musik latar, ambience, atau dengung. Transkrip yang ditandai kurang pasti pada 00:15,1–00:16,5 dan 09:49,8–09:53,0 tidak dijadikan teks kutipan, dan teks syair yang tidak tersedia tidak ditebak.

Visual menggunakan 27 kode unik dengan gaya hitam/navy dan aksen kuning-putih. Tidak ada penggambaran Allah, Nabi, Sahabat, atau tokoh kisah dan tidak ada individu/kelompok masa kini yang dijadikan sasaran. Tab sumber satu-satunya memakai label “◆ pustaka kitab”; nama perpustakaan sumber tidak tampil di layar.

## Pemeriksaan yang selesai

- Sintaks JavaScript dan shell lulus.
- `overlap.js` mencakup durasi penuh dengan langkah 0,5 detik dan menemukan 0 baris benturan.
- Tiga lembar kontak storyboard 3×4 telah ditinjau; frame rangkuman diambil pada 09:35,3 agar kalimat tampil utuh.
- `ffprobe` memeriksa ukuran, codec, resolusi, fps, sample rate, kanal, dan durasi.
- `ffmpeg` mendekode seluruh video (17.903 frame) tanpa error.
- Frame pembuka (00:01), tab sumber (06:15), rangkuman (09:35), dan salam (09:54) diperiksa sesudah encode.

## Arsip repo

Source dan bahan produksi disimpan di `episode/ep27/`. MP4 final, cover YouTube/Reel/post seri, caption, storyboard, dossier sumber, konfigurasi cover, dan dokumen ini disimpan di `hasil/Ep27_Dokumen/` pada branch kerja seri.

Cover v2 memakai headline **AMPUNAN / PERIHAL TAUBAT / KEHATI-HATIAN**. Atas permintaan berikutnya, post Instagram saja dibuat ulang sebagai v3 dengan teks **AMPUNAN ALLAH / PERIHAL TAUBAT / KEHATI-HATIAN**. Cover v1 dan v2 tetap tersimpan dan tidak ditimpa; YouTube dan Reel tidak dibuat ulang.

MP4 juga diarsipkan sebagai `Ep27.mp4` di branch `arsip-video` menggunakan resep Git ringan di `PROMPT_DAN_ATURAN.md`: `git init`, `fetch --depth 1 --filter=blob:none`, bentuk tree yang membawa MP4 baru, lalu `git push`. Blob video episode lama tidak diunduh. Commit arsip: `867bcf7324c32b857ed1ecf0e87588ce35b2dce1`. Versi cover dan video memakai nama baru, dan tidak menimpa versi sebelumnya.
