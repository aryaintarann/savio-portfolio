# Portfolio Website - Jose Inacio Savio Dias da Costa

Website portfolio personal yang dibangun menggunakan **Next.js 15** dengan desain modern, responsif, dan light theme.

---

## Daftar Isi

1. [Teknologi yang Digunakan](#teknologi-yang-digunakan)
2. [Struktur Project](#struktur-project)
3. [Struktur Website](#struktur-website)
4. [Cara Instalasi](#cara-instalasi)
5. [Cara Mengedit Konten](#cara-mengedit-konten)
6. [Kustomisasi Tampilan](#kustomisasi-tampilan)
7. [Deployment](#deployment)
8. [Troubleshooting](#troubleshooting)

---

## Teknologi yang Digunakan

| Teknologi | Versi | Kegunaan |
|-----------|-------|----------|
| Next.js | 15.1.3 | Framework React untuk SSR |
| React | 19.0.0 | Library UI |
| TypeScript | 5.x | Type-safe JavaScript |
| CSS Modules | - | Styling per-komponen |
| Netlify | - | Hosting & Deployment |

---

## Struktur Project

```
savio-portfolio/
├── public/                    # File statis (gambar, logo)
│   ├── profile.jpg           # Foto profil (WAJIB)
│   └── logo.png              # Logo website (WAJIB)
├── src/
│   ├── app/
│   │   ├── globals.css       # Styling global & warna
│   │   ├── layout.tsx        # Layout utama
│   │   └── page.tsx          # Halaman utama
│   ├── components/           # Komponen website
│   │   ├── Navbar.tsx        # Navigasi
│   │   ├── HeroSection.tsx   # Section Home
│   │   ├── AboutSection.tsx  # Section Tentang Saya
│   │   ├── ResumeSection.tsx # Section Resume
│   │   ├── ProjectsSection.tsx # Section Karya
│   │   ├── ContactSection.tsx  # Section Kontak
│   │   └── Footer.tsx        # Footer
│   └── data/
│       └── portfolio.ts      # DATA KONTEN WEBSITE
├── netlify.toml              # Konfigurasi Netlify
├── package.json              # Dependencies
└── README.md                 # Dokumentasi ini
```

---

## Struktur Website

### 1. Home (Hero Section)
- Foto profil
- Nama lengkap
- Role/jabatan
- Tagline
- Deskripsi portfolio
- Tombol CTA (Lihat Karya & Hubungi)

### 2. Tentang Saya (About Section)
- **Latar Belakang**: Status, jurusan, universitas
- **Minat & Ketertarikan**: Daftar minat
- **Tujuan Karier**: Goals masa depan

### 3. Resume
- **Pendidikan**: Timeline pendidikan
- **Pengalaman**: Timeline pengalaman kerja
- **Keterampilan Teknis**: Skill bar dengan persentase
- **Keterampilan Non-Teknis**: Soft skills

### 4. Karya (Projects)
- Daftar project dengan:
  - Tipe project
  - Deskripsi
  - Tools yang digunakan
  - Peran
  - Modal refleksi (What, So What, Now What)

### 5. Kontak
- Email
- Tombol kirim email

### 6. Footer
- Logo
- Tagline
- Copyright

---

## Cara Instalasi

### Prerequisites
- Node.js 18+ terinstall
- npm atau yarn

### Langkah Instalasi

```bash
# 1. Clone repository
git clone https://github.com/aryaintarann/savio-portfolio.git

# 2. Masuk ke folder
cd savio-portfolio

# 3. Install dependencies
npm install

# 4. Jalankan development server
npm run dev

# 5. Buka browser
# http://localhost:3000
```

---

## Cara Mengedit Konten

### File Utama: `src/data/portfolio.ts`

Semua konten website disimpan di file ini. Berikut panduan lengkapnya:

### 1. Informasi Personal

```typescript
export const personalInfo = {
    name: "Jose Inacio Savio Dias da Costa",  // Nama lengkap
    shortName: "Savio",                        // Nama pendek
    role: "Mahasiswa Informatika",             // Role/jabatan
    tagline: "Passionate Web Developer",       // Tagline
    email: "saviouku1997@gmail.com",           // Email
    portfolioDescription: "Deskripsi...",      // Deskripsi portfolio
};
```

### 2. Tentang Saya

```typescript
export const aboutMe = {
    background: {
        status: "Mahasiswa",
        major: "Teknologi Informasi",
        university: "ITB STIKOM Bali",
    },
    interests: [
        "Pengembangan Web",
        "UI/UX Design",
        // Tambah minat lainnya...
    ],
    goals: [
        "Menjadi Full-Stack Developer",
        // Tambah goals lainnya...
    ],
};
```

### 3. Pendidikan

```typescript
export const education = [
    {
        institution: "ITB STIKOM Bali",
        degree: "S1 Teknologi Informasi",
        period: "2022 - Sekarang",
        description: "Fokus pada pengembangan web",
    },
    // Tambah pendidikan lainnya...
];
```

### 4. Pengalaman

```typescript
export const experiences = [
    {
        title: "Aset Management",
        organization: "ITB STIKOM Bali",
        period: "2024 - 2025",
        description: "Deskripsi pekerjaan...",
    },
    // Tambah pengalaman lainnya...
];
```

### 5. Skills

```typescript
export const skills = {
    technical: [
        { name: "HTML", level: 85 },      // level = persentase (0-100)
        { name: "CSS", level: 80 },
        { name: "JavaScript", level: 75 },
        // Tambah skill lainnya...
    ],
    soft: [
        "Kerja Tim & Kepemimpinan",
        "Komunikasi",
        // Tambah soft skill lainnya...
    ],
};
```

### 6. Projects

```typescript
export const projects: Project[] = [
    {
        id: "project-1",                    // ID unik
        title: "Nama Project",              // Judul
        type: "Project Based",              // Tipe
        description: "Deskripsi project...",
        tools: ["HTML", "CSS", "JavaScript"],
        role: "Developer",
        reflection: {
            what: "Apa yang dikerjakan...",
            soWhat: "Apa yang dipelajari...",
            nowWhat: "Rencana selanjutnya...",
        },
    },
    // Tambah project lainnya...
];
```

---

## Mengganti Foto & Logo

### Foto Profil
1. Siapkan foto dengan format `.jpg` atau `.png`
2. Rename menjadi `profile.jpg`
3. Simpan ke folder `public/`
4. Refresh website

### Logo
1. Siapkan logo dengan format `.png`
2. Rename menjadi `logo.png`
3. Simpan ke folder `public/`
4. Refresh website

---

## Kustomisasi Tampilan

### Mengubah Warna

Edit file `src/app/globals.css`:

```css
:root {
  /* Warna Background */
  --color-bg-primary: #ffffff;      /* Putih */
  --color-bg-secondary: #f8fafc;    /* Abu-abu muda */
  
  /* Warna Aksen */
  --color-accent-primary: #2563eb;  /* Biru */
  --color-accent-secondary: #1d4ed8;
  
  /* Warna Text */
  --color-text-primary: #1e293b;    /* Hitam */
  --color-text-secondary: #475569;  /* Abu-abu */
}
```

### Mengubah Font

Edit file `src/app/layout.tsx`:

```typescript
import { Inter } from "next/font/google";

// Ganti 'Inter' dengan font lain, misalnya:
// import { Poppins } from "next/font/google";
// const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });
```

---

## Deployment

### Deploy ke Netlify

Website ini sudah dikonfigurasi untuk Netlify.

**Cara Deploy:**

1. Push code ke GitHub
2. Buka [Netlify](https://netlify.com)
3. Klik "Add new site" > "Import an existing project"
4. Pilih repository GitHub
5. Build settings otomatis terdeteksi dari `netlify.toml`
6. Klik "Deploy site"

**Build Settings (Otomatis):**
- Build command: `npm run build`
- Publish directory: `.next`

**Auto-Deploy:**
Setiap kali push ke branch `main`, Netlify akan otomatis rebuild.

---

## Troubleshooting

### Error: "Page not found" di Netlify
- Pastikan file `netlify.toml` ada
- Pastikan `@netlify/plugin-nextjs` terinstall

### Foto/Logo tidak muncul
- Pastikan file ada di folder `public/`
- Pastikan nama file benar (`profile.jpg`, `logo.png`)
- Clear cache browser (Ctrl+Shift+R)

### Hydration Error
- Sudah dihandle dengan `suppressHydrationWarning`
- Jika masih muncul, disable browser extensions

### Build Error
```bash
# Coba hapus folder .next dan node_modules
rm -rf .next node_modules
npm install
npm run build
```

---

## Kontak Developer

Untuk pertanyaan atau bantuan teknis, hubungi developer.

---

## License

© 2025 Jose Inacio Savio Dias da Costa. All rights reserved.
