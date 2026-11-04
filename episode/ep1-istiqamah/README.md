# Ep1: Istiqamah dalam ibadah (gaya "Urutan Wahyu 3D")

- Alur cerita = `audio/TRANSKRIP_FINAL_audio_Puck_bertimestamp.txt` (audio Puck ms-MY, 170 dtk) + kad follow 3 dtk = 173 dtk.
- Engine: `engine/ist.js` (+ `ist.html`), dipakai dengan `shot.js`/`pages.json`/fon dari `../ep1-urutan-wahyu/engine/`:
  `PAGE=ist.html node shot.js stills <dir> 1 30 60` atau `PAGE=ist.html node shot.js video out.mp4 0 5190 1.5`.
- Audio: `audio/mix.py` membuat SFX sintetis (whoosh, riser, boom, hit, tick, klik, sparkle) mengikuti peristiwa adegan;
  suara: highpass 70 Hz, EQ ringan, kompresor, loudnorm; campuran akhir -14 LUFS, TP ≤ -1.5 dBFS.
