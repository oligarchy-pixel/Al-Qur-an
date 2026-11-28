#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT"

D=599.797551
FADE_AUDIO=598.397551
FADE_VIDEO=598.397551
MP3="$ROOT/ep28.mp3"
OUT_DIR="$ROOT/out/Ep28_Dokumen"
mkdir -p out/full "$OUT_DIR"

if [[ ! -f "$MP3" ]]; then echo "MP3 tidak ditemukan: $MP3" >&2; exit 2; fi
node --check ep28.js

# Bersihkan hanya artefak sementara Ep28 dari percobaan parsial sebelumnya.
rm -f out/full/c*.mp4 out/full/c*.log out/full/list.txt out/full/v.mp4 \
      out/sfx_ep28.json out/fxonly_ep28.wav out/a_ep28.m4a

# SFX saja: BK=0 memastikan tidak ada musik/bed/dengung.
node render.js sfx out/sfx_ep28.json
BK=0 FK=1 python3 sfx_split.py "$D" out/fxonly_ep28.wav out/sfx_ep28.json

# Render video dalam segmen 30 detik, paling banyak empat proses bersamaan.
mapfile -t RANGES < <(python3 - <<'PY'
D=599.797551
start=0.0
while start < D-1e-9:
    end=min(start+30.0,D)
    print(f'{start:.3f} {end:.3f}')
    start=end
PY
)
printf 'Mulai render Ep28: %d segmen, durasi %.6f detik.\n' "${#RANGES[@]}" "$D"
PIDS=()
BATCH=0
for i in "${!RANGES[@]}"; do
  read -r A B <<< "${RANGES[$i]}"
  printf -v F 'out/full/c%02d.mp4' "$i"
  node render.js vid "$A" "$B" "$F" >"out/full/c$(printf '%02d' "$i").log" 2>&1 &
  PIDS+=("$!")
  if (( ${#PIDS[@]} == 4 )); then
    for PID in "${PIDS[@]}"; do wait "$PID"; done
    PIDS=()
    BATCH=$((BATCH+1))
    printf 'Progres render: batch %d selesai (%d/%d segmen).\n' "$BATCH" "$((i+1))" "${#RANGES[@]}"
  fi
done
for PID in "${PIDS[@]}"; do wait "$PID"; done
if (( ${#PIDS[@]} > 0 )); then
  printf 'Progres render: segmen akhir selesai.\n'
fi

printf '%s\n' out/full/c*.mp4 | sort | sed 's#^#file #; s#^file out/full/#file #' > out/full/list.txt
(cd out/full && ffmpeg -v error -y -f concat -safe 0 -i list.txt -c copy v.mp4)

# Audio asli utuh dinormalisasi; hanya SFX, limiter, dan fade akhir.
ffmpeg -v error -y -i "$MP3" -i out/fxonly_ep28.wav \
  -filter_complex "[0:a]loudnorm=I=-15:TP=-1.5:LRA=11,aresample=44100,aformat=channel_layouts=stereo[v];[1:a]volume=1.6[f];[v][f]amix=inputs=2:duration=first:normalize=0,alimiter=limit=0.84:level=0:attack=5:release=50,afade=t=out:st=${FADE_AUDIO}:d=1.4[a]" \
  -map "[a]" -c:a aac -b:a 192k -t "$D" out/a_ep28.m4a

ffmpeg -v error -y -i out/full/v.mp4 -i out/a_ep28.m4a \
  -map 0:v -map 1:a -vf "fade=t=out:st=${FADE_VIDEO}:d=1.4" \
  -c:v libx264 -preset medium -crf 27 -tune grain -pix_fmt yuv420p \
  -c:a copy -shortest -t "$D" -movflags +faststart \
  "$OUT_DIR/FINAL_Ep28_Dari_Satu_Jiwa_Menuju_Ikatan_Keluarga_HD.mp4"

echo "SELESAI: $OUT_DIR/FINAL_Ep28_Dari_Satu_Jiwa_Menuju_Ikatan_Keluarga_HD.mp4"
