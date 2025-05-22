# Website Belajar Bahasa Jepang - JLPT Level N5 sampai N1

## Deskripsi

Website ini dibuat sebagai media belajar bahasa Jepang yang terstruktur berdasarkan level JLPT, dari N5 (paling dasar) hingga N1 (paling sulit). Materi yang disediakan meliputi:

- Huruf Hiragana dan Katakana  
- Kosakata per level JLPT  
- Latihan kuis per level JLPT

---

## Menu Navigasi Utama

Menu navigasi di website ini terdiri dari dua bagian utama:

### Navigasi Tetap (Global)

- **Beranda**  
  Halaman pengantar dan ringkasan belajar bahasa Jepang.

- **Hiragana**  
  Materi belajar huruf Hiragana.

- **Katakana**  
  Materi belajar huruf Katakana.

### Navigasi Berdasarkan Level JLPT

Setiap level JLPT memiliki halaman tersendiri dengan sub-menu:

- **N5**  
  - Kosakata N5  
  - Latihan N5

- **N4**  
  - Kosakata N4  
  - Latihan N4

- **N3**  
  - Kosakata N3  
  - Latihan N3

- **N2**  
  - Kosakata N2  
  - Latihan N2

- **N1**  
  - Kosakata N1  
  - Latihan N1

---

## Teknologi yang Digunakan

- **HTML5**  
- **CSS3** dengan **Tailwind CSS** untuk styling modern dan responsif  
- **JavaScript** untuk interaktivitas, filter kosakata, dan latihan kuis  
- **GSAP** untuk animasi yang menarik dan smooth  
- **SweetAlert2** untuk notifikasi dan konfirmasi interaktif  
- Data kosakata dan latihan disimpan dalam file JSON yang di-load secara dinamis menggunakan JavaScript.

---

## Struktur File

```
/
├── index.html                 # Halaman beranda
├── hiragana.html              # Materi Hiragana
├── katakana.html              # Materi Katakana
│
├── n5/
│   ├── index.html            # Overview N5
│   ├── kosakata.html         # Kosakata N5
│   └── latihan.html          # Latihan N5
│
├── n4/
│   ├── index.html            # Overview N4
│   ├── kosakata.html         # Kosakata N4
│   └── latihan.html          # Latihan N4
│
├── n3/
│   ├── index.html            # Overview N3
│   ├── kosakata.html         # Kosakata N3
│   └── latihan.html          # Latihan N3
│
├── n2/
│   ├── index.html            # Overview N2
│   ├── kosakata.html         # Kosakata N2
│   └── latihan.html          # Latihan N2
│
├── n1/
│   ├── index.html            # Overview N1
│   ├── kosakata.html         # Kosakata N1
│   └── latihan.html          # Latihan N1
│
├── assets/
│   ├── css/
│   │   └── style.css         # File CSS utama (Tailwind)
│   ├── js/
│   │   ├── main.js           # Script umum (navigasi, animasi GSAP)
│   │   ├── kosakata.js       # Script untuk load dan filter kosakata
│   │   └── latihan.js        # Script untuk kuis dan filter latihan
│   └── data/
│       ├── n5-kosakata.json  # Data kosakata N5
│       ├── n5-latihan.json   # Data latihan N5
│       ├── n4-kosakata.json  # Data kosakata N4
│       ├── n4-latihan.json   # Data latihan N4
│       └── ... (sama untuk n3, n2, n1)
│
└── README.md                 # Dokumentasi proyek ini
```

---

## Cara Menjalankan

1. Buka website `Cardo.my.id` di browser modern.  
2. Navigasi ke halaman materi sesuai kebutuhan.  
3. Gunakan menu navigasi untuk berpindah antar level dan materi.  

---

Jika ada pertanyaan atau permintaan fitur baru, silakan hubungi pembuat proyek.

---

Terima kasih sudah menggunakan website ini sebagai media belajar bahasa Jepang kamu!
