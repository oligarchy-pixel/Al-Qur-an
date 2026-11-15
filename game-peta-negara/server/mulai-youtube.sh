#!/data/data/com.termux/files/usr/bin/bash
# Jalankan game untuk YouTube Live di HP Android (Termux).
# Pemakaian:  bash mulai-youtube.sh
cd "$(dirname "$0")"
if ! command -v node >/dev/null 2>&1; then
  echo "Menginstal Node.js (sekali saja)..."
  pkg install -y nodejs || exit 1
fi
if [ ! -d node_modules/youtube-chat ] || [ ! -d node_modules/tiktok-live-connector ]; then
  echo "Menginstal paket game (sekali saja, butuh internet)..."
  npm install --no-audit --no-fund || exit 1
fi
# hentikan server lama yang mungkin masih berjalan (mencegah error EADDRINUSE)
# hentikan skrip lama lewat file PID (aman: tidak pernah menghentikan dirinya sendiri)
if [ -f .pid ]; then OLD=$(cat .pid); if [ -n "$OLD" ] && [ "$OLD" != "$$" ] && kill -0 "$OLD" 2>/dev/null; then kill "$OLD" 2>/dev/null; fi; fi
echo $$ > .pid
pkill -f "node server.js" 2>/dev/null && sleep 1
command -v termux-wake-lock >/dev/null 2>&1 && termux-wake-lock
# Bisa juga langsung dengan link live:  bash mulai-youtube.sh https://youtube.com/live/XXXXXXXXXXX
if [ -n "$1" ]; then LINK="$1"; fi
if [ -f .youtube ]; then Y=$(cat .youtube); fi
if [ -z "$Y" ]; then
  read -p "Masukkan handle channel YouTube kamu (contoh: @namachannel): " Y
  Y="@$(echo "$Y" | tr -d ' ' | sed 's/^@*//')"   # rapikan: tepat satu @, tanpa spasi
  echo "$Y" > .youtube
fi
echo "YouTube: $Y   (untuk mengganti: hapus file server/.youtube)"
# LIVE tanpa batas: kalau server berhenti/crash, otomatis dinyalakan lagi (tekan CTRL+C dua kali untuk keluar)
while true; do
  if [ -n "$LINK" ]; then node server.js "yt:$LINK"; else node server.js "yt:$Y"; fi
  echo "Server berhenti — menyala ulang dalam 3 detik… (CTRL+C untuk keluar)"
  sleep 3 || break
done
