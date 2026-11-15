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
pgrep -f "mulai-(hp|youtube).sh" | grep -vx "$$" | xargs -r kill 2>/dev/null
pkill -f "node server.js" 2>/dev/null && sleep 1
command -v termux-wake-lock >/dev/null 2>&1 && termux-wake-lock
if [ -f .youtube ]; then Y=$(cat .youtube); fi
if [ -z "$Y" ]; then
  read -p "Masukkan handle channel YouTube kamu (contoh: @namachannel): " Y
  echo "$Y" > .youtube
fi
echo "YouTube: $Y   (untuk mengganti: hapus file server/.youtube)"
# LIVE tanpa batas: kalau server berhenti/crash, otomatis dinyalakan lagi (tekan CTRL+C dua kali untuk keluar)
while true; do
  node server.js "yt:$Y"
  echo "Server berhenti — menyala ulang dalam 3 detik… (CTRL+C untuk keluar)"
  sleep 3 || break
done
