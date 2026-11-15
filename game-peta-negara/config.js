/*
 * ===== PENGATURAN GAME PETA NEGARA =====
 * Ubah angka/teks di bawah ini, simpan, lalu refresh halaman game (F5).
 */
window.GAME_CONFIG = {
  // --- Koneksi ke TikTok LIVE ---
  // TikFinity  : ws://localhost:21213/   (default, aktifkan di TikFinity)
  // server.js  : ws://localhost:21214/   (pakai server bawaan di folder /server)
  // Bisa juga diubah lewat URL: index.html?ws=ws://localhost:21214/
  WS_URL: "ws://localhost:21213/",

  // --- Bahasa & teks di layar ---
  // "en" = English (untuk penonton seluruh dunia), "id" = Bahasa Indonesia
  BAHASA: "en",
  JUDUL: "TYPE YOUR COUNTRY!",
  SUBJUDUL: "type your country in the comments to join",
  // Versi Indonesia (salin ke atas bila BAHASA: "id"):
  //   JUDUL: "KETIK NAMA NEGARAMU!", SUBJUDUL: "ketik nama negara di komentar untuk bergabung"

  // --- Poin (tinggi negara dalam meter) ---
  METER_PER_KOIN: 100,   // 1 koin gift (mis. Rose) = 100 m
  METER_PER_LIKE: 1,     // 100 like = 100 m
  METER_FOLLOW: 50,      // follow = 50 m
  METER_SHARE: 30,       // share = 30 m
  METER_KOMENTAR: 5,     // (versi Lite) tiap komentar pemain = 5 m (maks. 1x per 2 detik per orang)
  METER_GABUNG: 10,      // bonus saat pertama kali bergabung
  GIFT_BESAR_KOIN: 30,   // gift senilai >= ini koin tampil besar di tengah layar

  // Daftar keterangan di pojok kanan atas (hanya tampilan)
  KETERANGAN: [
    { ikon: "🌹", teks: "1 coin = 100 m" },
    { ikon: "❤️", teks: "100 likes = 100 m" },
    { ikon: "➕", teks: "follow = 50 m" },
    { ikon: "↗️", teks: "share = 30 m" },
  ],
  // Versi Indonesia: "1 koin = 100 m", "100 like = 100 m", "follow = 50 m", "share = 30 m"

  // --- Ronde ---
  DURASI_RONDE_DETIK: 300,  // 0 = tanpa ronde (skor terus bertambah)
  LAMA_LAYAR_PEMENANG: 10,  // detik layar pemenang tampil
  RESET_SETELAH_RONDE: true,

  // --- Aturan pemain ---
  BOLEH_PINDAH_NEGARA: true, // penonton boleh ganti negara dengan mengetik negara lain
  GIFT_SEBELUM_GABUNG_DISIMPAN: true, // gift sebelum gabung dihitung setelah ia mengetik negaranya

  // --- Tampilan peta ---
  // Citra satelit (perlu internet). Kosongkan ("") untuk peta gaya gelap tanpa internet.
  TILE_URL: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  TILE_ATRIBUSI: "Esri World Imagery",
  ZOOM_MAKS: 6,
  JEDA_KAMERA_DETIK: 2.5,   // jarak minimal antar perpindahan kamera
  AVATAR_PER_NEGARA: 14,    // foto profil maksimal di dalam satu negara

  // --- Suara ---
  // Musik & efek dibuat langsung oleh game (tanpa file rekaman, aman dari klaim hak cipta).
  // Browser biasa: klik sekali di layar game agar suara menyala. OBS: otomatis.
  SUARA: true,              // efek suara (gift, gabung, follow, pemimpin, hitung mundur, pemenang)
  MUSIK: true,              // musik latar
  VOLUME_MUSIK: 0.45,       // 0 sampai 1
  VOLUME_EFEK: 0.8,         // 0 sampai 1
  SUARA_LIKE: false,        // bunyi kecil tiap like (bisa ramai, default mati)
  // Pakai musik sendiri (mp3 bebas hak cipta), mis. "musik/latar.mp3". Kosong = musik bawaan.
  MUSIK_FILE: "",
  // Ganti efek tertentu dengan file sendiri, mis. { giftBesar: "suara/wow.mp3" }
  // Nama efek: gabung, giftKecil, giftSedang, giftBesar, giftMega, follow, share, like,
  //            pemimpin, tik, tikAkhir, menang
  EFEK_FILE: {},

  // --- Bacaan Al-Quran di Game Islami (islami.html) ---
  // Diputar dari internet, berganti surah lalu diulang tanpa henti. Bunyi efek game dimatikan selama bacaan diputar.
  QURAN: true,                  // false = tanpa bacaan Al-Quran (atau pakai alamat ?quran=0)
  QURAN_QARI: "alafasy",        // alafasy | husary | minshawi | sudais   (atau ?qari=husary)
  QURAN_SURAH: [1, 36, 55, 56, 67, 18, 19, 32, 78, 50, 2],  // urutan surah (atau ?surah=1,36,55)
  VOLUME_EFEK_KUIS: 1,         // kekuatan bunyi kuiz (1 = keras, 1.5 = lebih keras) atau ?svol=1.5
  QURAN_VOLUME: 0.3,            // 0 sampai 1 (atau ?qvol=0.6) — bawaan 30%
  // Pakai mp3 milik sendiri (taruh di folder game/quran/): ["quran/yasin.mp3", "quran/ar-rahman.mp3"]
  QURAN_LOKAL: [],
};
