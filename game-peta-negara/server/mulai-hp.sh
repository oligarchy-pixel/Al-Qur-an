#!/data/data/com.termux/files/usr/bin/bash
# Jalankan game Peta Negara di HP Android (Termux).
# Pemakaian:  bash mulai-hp.sh
cd "$(dirname "$0")"
if ! command -v node >/dev/null 2>&1; then
  echo "Menginstal Node.js (sekali saja)..."
  pkg install -y nodejs || exit 1
fi
if [ ! -d node_modules ]; then
  echo "Menginstal paket game (sekali saja, butuh internet)..."
  npm install --no-audit --no-fund || exit 1
fi
command -v termux-wake-lock >/dev/null 2>&1 && termux-wake-lock
if [ -f .username ]; then U=$(cat .username); fi
if [ -z "$U" ]; then
  read -p "Masukkan username TikTok kamu (tanpa @): " U
  echo "$U" > .username
fi
echo "Username: @$U   (untuk mengganti: hapus file server/.username)"
node server.js "$U"
