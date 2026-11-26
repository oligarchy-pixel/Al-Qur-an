#!/usr/bin/env bash
set -euo pipefail
cd /home/claude/proj26

D=597.786
FADE_AUDIO=593.6
FADE_VIDEO=596.386
OUT_DIR=/home/claude/proj26/out/Ep26_Dokumen
mkdir -p out/full "$OUT_DIR"

# Buat event SFX secara deterministik. BK=0 memastikan tanpa bed, dengung, atau musik.
node render.js sfx out/sfx_ep26.json
BK=0 FK=1 python3 sfx_split.py "$D" out/fxonly_ep26.wav out/sfx_ep26.json

# Pecah render menjadi potongan 30 detik dan jalankan paling banyak empat proses bersamaan.
mapfile -t RANGES < <(python3 - <<'PY'
D=597.786
start=0.0
while start < D-1e-9:
    end=min(start+30.0,D)
    print(f'{start:.3f} {end:.3f}')
    start=end
PY
)
PIDS=()
for i in "${!RANGES[@]}"; do
  read -r A B <<< "${RANGES[$i]}"
  printf -v F 'out/full/c%02d.mp4' "$i"
  node render.js vid "$A" "$B" "$F" >"out/full/c$(printf '%02d' "$i").log" 2>&1 &
  PIDS+=("$!")
  if (( ${#PIDS[@]} == 4 )); then
    for PID in "${PIDS[@]}"; do wait "$PID"; done
    PIDS=()
  fi
done
for PID in "${PIDS[@]}"; do wait "$PID"; done

printf '%s\n' out/full/c*.mp4 | sort | sed 's#^#file #; s#^file out/full/#file #' > out/full/list.txt
(cd out/full && ffmpeg -v error -y -f concat -safe 0 -i list.txt -c copy v.mp4)

# Campur rekaman pengguna dengan SFX saja; normalisasi I=-15 LUFS, TP=-1.5 dB, limiter, dan fade terakhir.
ffmpeg -v error -y -i ep26.mp3 -i out/fxonly_ep26.wav \
  -filter_complex "[0:a]loudnorm=I=-15:TP=-1.5:LRA=11,aresample=44100,aformat=channel_layouts=stereo[v];[1:a]volume=1.6[f];[v][f]amix=inputs=2:duration=first:normalize=0,alimiter=limit=0.84:level=0:attack=5:release=50,afade=t=out:st=${FADE_AUDIO}:d=1.4[a]" \
  -map "[a]" -c:a aac -b:a 192k out/a_ep26.m4a

ffmpeg -v error -y -i out/full/v.mp4 -i out/a_ep26.m4a \
  -map 0:v -map 1:a -vf "fade=t=out:st=${FADE_VIDEO}:d=1.4" \
  -c:v libx264 -preset medium -crf 27 -tune grain -pix_fmt yuv420p \
  -c:a copy -shortest -movflags +faststart \
  "$OUT_DIR/FINAL_Ep26_Amal_Sekecil_Apa_Pun_Dicatat_Allah_FULL_HD.mp4"

echo "SELESAI: $OUT_DIR/FINAL_Ep26_Amal_Sekecil_Apa_Pun_Dicatat_Allah_FULL_HD.mp4"
