# Ep26 · Catatan produksi

## Master

- Seri: *Mengenal Al-Qur'an* (@alurziyadahku)
- Judul kerja: **Amal Sekecil Apa Pun Dicatat Allah**
- Audio sumber: `ep26.mp3`, durasi 597.786 detik; sumber suara dipertahankan penuh.
- Master final: 1920×1080, 30 fps, 16:9, H.264, CRF 27, AAC 192 kbps.
- Visual: 32 segmen adegan grafis, 24 kode visual unik, satu tab pencarian sumber bertanda `◆ pustaka kitab`, bar bab dan astrolab seri. Tanpa penggambaran Allah/Nabi/sahabat, tanpa targeting individu/kelompok, tanpa glitch RGB.
- Audio: rekaman pengguna + SFX saja. Tidak ada musik, bed, atau dengung. Loudnorm I=-15 LUFS, TP=-1.5 dB, limiter; fade audio pada ujung salam dan fade gambar 1.4 detik di ujung master.

## Validasi pra-render

- `node --check ep26.js`, `engine.js`, dan `ref.js`: lulus.
- `overlap.js` empat rentang (0–150, 150–300, 300–450, 450–597.786 detik; langkah 0.5 detik): 0 baris temuan, tanpa error halaman.
- Tiga lembar kontak diperiksa: tab sumber, bagian konsep syirik/tauhid, dan penutup.
- Sumber angka salat dibedakan di layar: riwayat lemah 10.000 dan dua juta; 1.000 di Masjid Nabawi menurut Bukhari/Muslim; 100.000 di Masjidil Haram menurut riwayat Jabir yang dinilai sahih oleh al-Mundhiri.
## Hasil master dan pemeriksaan akhir

Master telah dirender satu kali setelah persetujuan storyboard. ffprobe melaporkan durasi 597,800 detik, 1920×1080 pada 30/1 fps, H.264 dan AAC; ukuran 72.599.989 byte. Lima frame (pembuka, tab sumber, konsep, peringatan Bukhari, salam penutup) telah ditinjau. `volumedetect` pada AAC mengukur mean −17,0 dB dan peak sampel −1,4 dB; peak sampel bukan pengukuran true peak/LUFS.

## Lokasi master

`/home/claude/proj26/out/Ep26_Dokumen/FINAL_Ep26_Amal_Sekecil_Apa_Pun_Dicatat_Allah_FULL_HD.mp4`

Skrip `full.sh` dijalankan satu kali dengan potongan 30 detik, rekaman pengguna dan SFX saja, tanpa musik latar atau dengung.
