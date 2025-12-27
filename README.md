# Portfolio Website - Jose Inacio Savio Dias da Costa

Website portfolio personal yang dibangun menggunakan **Next.js 15** dengan desain modern, responsif, light theme, dan parallax effects.

---

## Daftar Isi

1. [Teknologi yang Digunakan](#teknologi-yang-digunakan)
2. [Fitur Website](#fitur-website)
3. [Struktur Project](#struktur-project)
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

## Fitur Website

### Parallax Effects
Website ini memiliki efek parallax yang bekerja saat scroll naik dan turun:

| Section | Efek Parallax |
|---------|---------------|
| **Hero** | Background orbs bergerak, semua konten fade + move, scroll indicator fade out |
| **About** | Cards muncul dengan scale animation |
| **Resume** | Kolom slide dari kiri/kanan, skill bars animasi fill |
| **Projects** | Cards dengan wave-like movement |
| **Contact** | Title, email card, dan tombol animate in/out |

### Struktur Sections

| Section | Deskripsi |
|---------|-----------|
| **Home** | Foto profil, nama, tagline, deskripsi, dan CTA buttons |
| **Tentang Saya** | Latar belakang, minat, dan tujuan karier |
| **Resume** | Pendidikan, pengalaman, dan keterampilan |
| **Karya** | Daftar project dengan modal refleksi |
| **Kontak** | Email dan tombol kirim |

---

## Struktur Project

```
savio-portfolio/
├── public/                    # File statis
│   ├── profile.jpg           # Foto profil (WAJIB)
│   └── logo.png              # Logo & favicon (WAJIB)
├── src/
│   ├── app/
│   │   ├── globals.css       # Styling global
│   │   ├── layout.tsx        # Layout & metadata
│   │   └── page.tsx          # Halaman utama
│   ├── components/           # Komponen React
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ResumeSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── hooks/                # Custom React Hooks
│   │   ├── useParallax.ts    # Hook untuk parallax scroll
│   │   └── useScrollAnimation.ts
│   └── data/
│       └── portfolio.ts      # DATA KONTEN WEBSITE
├── netlify.toml              # Konfigurasi Netlify
└── README.md                 # Dokumentasi ini
```

---

## Cara Instalasi

```bash
# 1. Clone repository
git clone https://github.com/aryaintarann/savio-portfolio.git

# 2. Masuk ke folder
cd savio-portfolio

# 3. Install dependencies
npm install

# 4. Jalankan development server
npm run dev

# 5. Buka http://localhost:3000
```

---

## Cara Mengedit Konten

### File Utama: `src/data/portfolio.ts`

### 1. Informasi Personal
```typescript
export const personalInfo = {
    name: "Jose Inacio Savio Dias da Costa",
    shortName: "Savio",
    role: "Mahasiswa Informatika",
    tagline: "Passionate Web Developer",
    email: "saviouku1997@gmail.com",
    portfolioDescription: "Deskripsi...",
};
```

### 2. Pendidikan & Pengalaman
```typescript
export const education = [
    {
        institution: "ITB STIKOM Bali",
        degree: "S1 Teknologi Informasi",
        period: "2022 - Sekarang",
        description: "...",
    },
];

export const experiences = [
    {
        title: "Aset Management",
        organization: "ITB STIKOM Bali",
        period: "2024 - 2025",
        description: "...",
    },
];
```

### 3. Skills
```typescript
export const skills = {
    technical: [
        { name: "HTML", level: 85 },  // level = persentase
        { name: "CSS", level: 80 },
    ],
    softSkills: [
        { name: "Kerja Tim", description: "..." },
    ],
};
```

### 4. Projects
```typescript
export const projects = [
    {
        id: "project-1",
        title: "Nama Project",
        type: "Project Based",
        description: "...",
        tools: ["HTML", "CSS"],
        role: "Developer",
        reflection: {
            what: "Apa yang dikerjakan...",
            soWhat: "Apa yang dipelajari...",
            nowWhat: "Rencana selanjutnya...",
        },
    },
];
```

---

## Mengganti Foto & Logo

| File | Lokasi | Kegunaan |
|------|--------|----------|
| `profile.jpg` | `public/` | Foto profil di Hero |
| `logo.png` | `public/` | Logo navbar, footer, dan favicon |

---

## Kustomisasi Tampilan

### Mengubah Warna
Edit `src/app/globals.css`:
```css
:root {
  --color-bg-primary: #ffffff;
  --color-accent-primary: #2563eb;  /* Warna biru */
  --color-text-primary: #1e293b;
}
```

---

## Deployment

### Deploy ke Netlify
Website sudah dikonfigurasi untuk Netlify. Push ke GitHub akan auto-deploy.

**Build Settings:**
- Build command: `npm run build`
- Publish directory: `.next`

---

## Branches

| Branch | Deskripsi |
|--------|-----------|
| `main` | Production - tanpa parallax |
| `parallax-effect` | Development - dengan parallax effects |

### Merge Parallax ke Main
```bash
git checkout main
git merge parallax-effect
git push
```

---

## Troubleshooting

### Parallax tidak bekerja
- Pastikan menggunakan branch `parallax-effect`
- Refresh browser (Ctrl+Shift+R)

### Foto/Logo tidak muncul
- Pastikan file ada di folder `public/`
- Nama file harus tepat: `profile.jpg`, `logo.png`

### Build Error
```bash
rm -rf .next node_modules
npm install
npm run build
```

---

## License

© 2025 Jose Inacio Savio Dias da Costa. All rights reserved.
