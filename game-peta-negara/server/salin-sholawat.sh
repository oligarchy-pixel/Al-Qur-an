#!/data/data/com.termux/files/usr/bin/bash
# Salin sholawat / qasidah milik sendiri (mp3) ke dalam game.
# Taruh file mp3 di folder HP:  Download/Sholawat   lalu jalankan:  bash ~/game-peta-negara/server/salin-sholawat.sh
# Lalu buka game dengan:  localhost:21214/islami.html?latar=sholawat
DEST="$HOME/game-peta-negara/sholawat"
mkdir -p "$DEST"
n=0
for f in "$HOME/storage/downloads/Sholawat/"*.{mp3,m4a,ogg,wav,MP3,M4A} "$HOME/storage/shared/Download/Sholawat/"*.{mp3,m4a,ogg,wav,MP3,M4A}; do
  [ -f "$f" ] || continue
  cp -f "$f" "$DEST/" && n=$((n+1)) && echo "✓ $(basename "$f")"
done
echo "-----------------------------------------"
echo "$n file disalin. Isi folder sholawat:"; ls -1 "$DEST"
echo "Buka game dengan: localhost:21214/islami.html?latar=sholawat"
