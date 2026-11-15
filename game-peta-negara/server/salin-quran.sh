#!/data/data/com.termux/files/usr/bin/bash
# Salin bacaan Al-Quran milik sendiri (mis. maqam Jiharkah) ke dalam game.
# Taruh file mp3 di folder HP:  Download/Jiharkah   (atau buka/bagikan mp3 ke Termux)
# Lalu jalankan:  bash ~/game-peta-negara/server/salin-quran.sh
DEST="$HOME/game-peta-negara/quran"
mkdir -p "$DEST"
n=0
for f in "$HOME/storage/downloads/Jiharkah/"*.{mp3,m4a,ogg,wav,MP3,M4A} "$HOME/downloads/"*.{mp3,m4a,ogg,wav,MP3,M4A}; do
  [ -f "$f" ] || continue
  cp -f "$f" "$DEST/" && n=$((n+1)) && echo "✓ $(basename "$f")"
done
echo "-----------------------------------------"
echo "$n file disalin. Isi folder quran sekarang:"
ls -1 "$DEST"
echo "Refresh Chrome (atau buka ulang game) supaya daftar bacaan baru dipakai."
echo "Untuk kembali ke bacaan dari internet: rm ~/game-peta-negara/quran/*"
