# Portfolio Website - Jose Inacio Savio Dias da Costa

Website portfolio personal yang dibangun menggunakan Next.js dengan desain modern dan responsif.

## Teknologi yang Digunakan

- **Framework:** Next.js 15
- **Bahasa:** TypeScript
- **Styling:** CSS Modules + CSS Variables
- **Deployment:** Netlify

---

## Struktur Website

| Section | Deskripsi |
|---------|-----------|
| **Home** | Halaman utama dengan foto profil, nama, dan deskripsi |
| **Tentang Saya** | Latar belakang, minat, dan tujuan karier |
| **Resume** | Pendidikan, pengalaman, dan keterampilan |
| **Karya** | Daftar project dengan detail refleksi |
| **Kontak** | Informasi email untuk menghubungi |

---

## Cara Mengedit Konten

### 1. Mengganti Foto Profil
Simpan foto ke folder `public/` dengan nama `profile.jpg`

### 2. Mengganti Logo
Simpan logo ke folder `public/` dengan nama `logo.png`

### 3. Mengedit Data Personal
Edit file `src/data/portfolio.ts`:

```typescript
// Informasi Personal
export const personalInfo = {
    name: "Jose Inacio Savio Dias da Costa",
    shortName: "Savio",
    role: "Mahasiswa Informatika",
    tagline: "Passionate Web Developer & Tech Enthusiast",
    email: "saviouku1997@gmail.com",
    portfolioDescription: "...",
};

// Pendidikan
export const education = [
    {
        institution: "ITB STIKOM Bali",
        degree: "S1 Teknologi Informasi",
        period: "2022 - Sekarang",
        description: "...",
    },
];

// Skills
export const skills = {
    technical: [
        { name: "HTML", level: 85 },
        { name: "CSS", level: 80 },
        { name: "JavaScript", level: 75 },
    ],
    soft: ["Kerja Tim & Kepemimpinan", "Komunikasi"],
};

// Projects
export const projects = [
    {
        id: "project-1",
        title: "Nama Project",
        type: "Project Based",
        description: "Deskripsi project...",
        tools: ["HTML", "CSS", "JavaScript"],
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

## Menjalankan Secara Lokal

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev

# Buka http://localhost:3000
```

---

## Deployment ke Netlify

Website ini sudah dikonfigurasi untuk Netlify. Setiap kali push ke GitHub, Netlify akan otomatis rebuild.

**Build Settings:**
- Build command: `npm run build`
- Publish directory: `.next`

---

## File Penting

| File | Fungsi |
|------|--------|
| `src/data/portfolio.ts` | Semua data konten website |
| `public/profile.jpg` | Foto profil |
| `public/logo.png` | Logo website |
| `src/app/globals.css` | Warna dan styling global |

---

## Kontak

Untuk pertanyaan atau bantuan, hubungi developer.

© 2025 Jose Inacio Savio Dias da Costa
