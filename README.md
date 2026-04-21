<div align="center">

<img src="https://img.shields.io/badge/IPMAP-Kabupaten%20Puncak-4BBDD4?style=for-the-badge&labelColor=06171c" alt="IPMAP Badge"/>

# ◈ IPMAP
### Ikatan Pelajar & Mahasiswa Kabupaten Puncak
**Papua Tengah, Indonesia**

*Bersatu · Berprestasi · Berkarya*
---
- https://agusadhitama.github.io/ipmap/
---

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=flat-square&logo=github&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-Mobile%20%26%20Desktop-4BBDD4?style=flat-square)

</div>

---

## 📋 Tentang Project

Website resmi organisasi **IPMAP (Ikatan Pelajar & Mahasiswa Kabupaten Puncak)** mewadahi seluruh pelajar dan mahasiswa asal Kabupaten Puncak yang sedang menempuh pendidikan di berbagai daerah di Indonesia.

Website ini dibangun dengan HTML, CSS, dan JavaScript murni (tanpa framework) sehingga ringan, cepat, dan mudah di-deploy langsung ke GitHub Pages.

---

## ✨ Fitur

| Fitur | Keterangan |
|---|---|
| 🎬 Loading Screen | Animasi intro dengan progress bar |
| ⭐ Hero Particles | Partikel bintang interaktif berbasis Canvas |
| 🏔 Parallax Effect | Efek kedalaman saat scroll di section hero |
| 👁 Scroll Reveal | Elemen muncul animasi saat masuk viewport |
| 🔢 Counter Animasi | Angka statistik berhitung otomatis |
| 📸 Drag Gallery | Galeri foto dapat di-drag kiri-kanan |
| 📱 Fully Responsive | Tampilan optimal di PC, tablet, dan HP |
| 🍔 Hamburger Menu | Navigasi mobile dengan overlay |
| ⚡ Zero Dependencies | Murni HTML/CSS/JS, tanpa library eksternal |

---

## 🗂 Struktur File

```
ipmap/
├── 📄 index.html          # Halaman utama
├── 📁 css/
│   └── style.css          # Semua styling & animasi
├── 📁 js/
│   └── main.js            # Semua interaksi & efek
├── 📁 images/             # Taruh foto kegiatan di sini
└── 📄 README.md
```

---

## ✏️ Cara Kustomisasi

### 1. Ganti Nama Pengurus

Buka `index.html`, cari bagian `<!-- STRUKTUR -->` dan ganti:

```html
<h3>[Nama Ketua]</h3>        <!-- ← ganti nama ketua -->
<h3>[Nama Sekretaris]</h3>   <!-- ← ganti nama sekretaris -->
<h3>[Nama Bendahara]</h3>    <!-- ← ganti nama bendahara -->
```

### 2. Tambah Foto Pengurus

1. Taruh file foto di folder `images/` (misal: `ketua.jpg`)
2. Di `index.html`, ganti `<div class="photo-placeholder">` dengan:

```html
<img src="images/ketua.jpg"
     alt="Nama Ketua"
     style="width:100%; height:100%; object-fit:cover; border-radius:50%;">
```

### 3. Tambah Foto Galeri

1. Taruh foto kegiatan di folder `images/`
2. Di `index.html`, ganti `<div class="galeri-placeholder">` dengan:

```html
<img src="images/foto-kegiatan.jpg"
     alt="Nama Kegiatan"
     style="width:100%; height:100%; object-fit:cover;">
```

### 4. Ganti Informasi Kontak

Cari bagian `<!-- KONTAK / GABUNG -->` di `index.html`:

```html
<!-- Ganti nomor WhatsApp -->
<a href="https://wa.me/6281234567890" ...>

<!-- Ganti username Instagram -->
<span>@ipmap_official</span>

<!-- Ganti email -->
<span>ipmap@email.com</span>
```

### 5. Ubah Statistik Anggota

Cari bagian `.hero-stats` di `index.html`:

```html
<span class="stat-num" data-count="500">0</span>  <!-- jumlah anggota -->
<span class="stat-num" data-count="12">0</span>   <!-- jumlah distrik -->
<span class="stat-num" data-count="30">0</span>   <!-- jumlah program -->
```

### 6. Ubah Warna Tema

Edit bagian `:root` di `css/style.css`:

```css
:root {
  --blue: #4BBDD4;     /* biru logo - warna aksen utama */
  --gold: #FFD700;     /* kuning logo - warna tombol & highlight */
  --bg:   #06171c;     /* background utama */
}
```

---

## 🖼 Preview Sections

```
┌─────────────────────────────────────┐
│  NAVBAR                             │  ← sticky, transparan → solid saat scroll
├─────────────────────────────────────┤
│  HERO                               │  ← partikel + siluet gunung + statistik
├─────────────────────────────────────┤
│  TENTANG KAMI                       │  ← deskripsi + nilai organisasi
├─────────────────────────────────────┤
│  ◆ MARQUEE BERJALAN ◆              │  ← banner animasi warna biru
├─────────────────────────────────────┤
│  VISI & MISI                        │  ← dua card interaktif
├─────────────────────────────────────┤
│  PROGRAM UNGGULAN                   │  ← 6 program dalam grid hover 3D
├─────────────────────────────────────┤
│  STRUKTUR ORGANISASI                │  ← ketua, sekretaris, divisi
├─────────────────────────────────────┤
│  GALERI                             │  ← drag-to-scroll foto kegiatan
├─────────────────────────────────────┤
│  KONTAK / GABUNG                    │  ← WA, Instagram, Email
├─────────────────────────────────────┤
│  FOOTER                             │
└─────────────────────────────────────┘
```

---

## 🛠 Teknologi

- **HTML** Struktur semantik
- **CSS** Custom properties, Grid, Flexbox, Animasi
- **JavaScript** Canvas API, IntersectionObserver, Event Listeners
- **Google Fonts** Bebas Neue, Syne, Space Mono
- **GitHub Pages** Hosting gratis

---


<div align="center">

**IPMAP - Ikatan Pelajar & Mahasiswa Kabupaten Puncak**

*Papua Tengah · Indonesia*

⛰ *Bersatu · Berprestasi · Berkarya* ⛰

</div>
