// Portfolio Data - Jose Inacio Savio Dias da Costa
// Centralized data untuk mudah di-edit

export const personalInfo = {
    name: "Jose Inacio Savio Dias da Costa",
    shortName: "Savio",
    role: "Mahasiswa Informatika",
    tagline: "Entrepreneur & E-sport Player",
    email: "saviouku1997@gmail.com",
    portfolioDescription:
        "Saya adalah seorang Entrepreneur dan Atlet E-sport yang berdedikasi. Saya menggabungkan ketajaman strategi bisnis dengan mentalitas kompetitif dan kerja sama tim yang solid. Bagi saya, baik di ruang rapat maupun di arena pertandingan, keberhasilan ditentukan oleh persiapan matang, eksekusi cepat, dan inovasi tanpa henti.",
};

export const aboutMe = {
    background: {
        status: "Mahasiswa",
        major: "Teknologi Informasi",
        university: "ITB STIKOM Bali",
    },
    interests: [
        "Pengembangan Bisnis",
        "E-Sport",
        "Teknologi & Inovasi",
    ],
    goals: [
        "Membangun ekosistem bisnis yang berkelanjutan dengan memanfaatkan disiplin dan pola pikir strategis dari dunia E-sport",
        "Mencapai puncak performa kompetitif sebagai atlet E-sport profesional sembari mengembangkan portofolio bisnis yang berdampak luas",
    ],
};

export const education = [
    {
        institution: "ITB STIKOM Bali",
        degree: "S1 Teknologi Informasi",
        period: "2022 - Sekarang",
        description: "",
    },
];

export const skills = {
    technical: [
        { name: "Microsft Office", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "Editing Video", level: 75 },
    ],
    softSkills: [
        {
            name: "Kerja Tim & Kepemimpinan",
            description:
                "Mampu bekerja sama dalam tim dan memimpin proyek kelompok dengan baik",
        },
        {
            name: "Komunikasi",
            description:
                "Kemampuan menyampaikan ide dan informasi secara jelas dan efektif",
        },
    ],
};

export const experiences = [
    {
        title: "Aset Management",
        organization: "ITB STIKOM Bali",
        period: "2024 - 2025",
        description: "",
    },
    {
        title: "Tour Guide",
        organization: "Savio Travel",
        period: "2023 - 2025",
        description: "",
    },
    {
        title: "Seller",
        organization: "Savio Jastip",
        period: "2025 - Sekarang",
        description: "",
    },
];

export interface Project {
    id: string;
    title: string;
    type: "Project Based" | "Case Based" | "Dummy Project";
    description: string;
    tools: string[];
    role: string;
    image?: string;
    reflection: {
        what: string;
        soWhat: string;
        nowWhat: string;
    };
}

export const projects: Project[] = [
    {
        id: "project-1",
        title: "Savio Jastip",
        type: "Case Based",
        description:
            "Proyek ini adalah salah satu binis yang saya buat berdasarkan studi kasus yang saya dapatkan dari lingkuhan saya di Timor Leste.",
        tools: ["Instagram", "Whatsapp"],
        role: "Owner",
        reflection: {
            what: "Saya membangun ekosistem bisnis Savio Jastip yang menghubungkan permintaan pelanggan dengan akses produk dari berbagai lokasi. Saya mengelola operasional end-to-end, mulai dari strategi pemasaran digital, manajemen pesanan, hingga koordinasi logistik untuk memastikan barang sampai tepat waktu.",
            soWhat:
                "Saya belajar banyak tentang Manajemen Rantai Pasok (Supply Chain) skala mikro dan Customer Relationship Management (CRM). Saya memahami bahwa kunci bisnis jasa bukan hanya pada barangnya, tetapi pada kecepatan respons dan kualitas komunikasi untuk membangun loyalitas pelanggan.",
            nowWhat:
                "Saya berencana melakukan scaling bisnis dengan memperluas jangkauan area belanja dan jenis produk. Untuk mendukung ini, saya akan mengembangkan sistem inventarisasi berbasis digital untuk mengurangi human error dalam pencatatan manual.",
        },
    },
    {
        id: "project-2",
        title: "Landing Page Portfolio",
        type: "Project Based",
        description:
            "Proyek latihan membuat landing page yang responsif untuk mengasah kemampuan CSS.",
        tools: ["HTML", "CSS"],
        role: "Solo Developer - Mengerjakan seluruh aspek dari desain hingga implementasi",
        reflection: {
            what: "Saya membuat landing page dengan fokus pada estetika dan animasi CSS. Mengimplementasikan berbagai teknik CSS seperti flexbox, grid, animasi keyframe, dan transisi smooth scroll.",
            soWhat:
                "Proyek ini memperdalam pemahaman saya tentang CSS modern. Saya belajar bahwa animasi yang halus dapat meningkatkan pengalaman pengguna secara signifikan. Juga memahami pentingnya performance optimization untuk animasi.",
            nowWhat:
                "Saya ingin mempelajari library animasi seperti GSAP dan Framer Motion untuk animasi yang lebih kompleks. Juga berencana mengeksplorasi CSS-in-JS dan styled-components untuk styling yang lebih terstruktur.",
        },
    },
    {
        id: "project-3",
        title: "Tour Guide Denpasar - Kuta",
        type: "Project Based",
        description:
            "Melakukan Tour Guide dengan tamu dari Timor Leste di Denpasar - Kuta.",
        tools: ["Whatsapp"],
        role: "Tour Guide",
        reflection: {
            what: "Saya mengorganisir dan memandu perjalanan wisata untuk tamu dari Timor Leste dengan rute strategis Denpasar hingga Kuta. Tugas saya mencakup penyusunan itinerary yang fleksibel, mulai dari wisata belanja di pusat kota Denpasar hingga menikmati sunset dan kuliner di Kuta, serta memastikan kenyamanan transportasi dan akomodasi tamu selama perjalanan.",
            soWhat:
                "Proyek ini mengajarkan saya inti dari Hospitality Service dan Cross-Cultural Communication. Saya belajar memahami preferensi spesifik pasar Timor Leste—yang seringkali mengutamakan keakraban dan rekomendasi belanja yang bernilai. Saya juga melatih kemampuan manajemen krisis (problem solving) saat menghadapi tantangan logistik di lapangan seperti kemacetan area wisata.",
            nowWhat:
                "Saya berencana mengembangkan layanan ini menjadi paket Premium Private Tour khusus pasar Timor Leste dengan cakupan area yang lebih luas (seperti Uluwatu atau Ubud). Saya juga ingin membangun kemitraan (B2B) dengan agen perjalanan di Dili untuk menciptakan aliran tamu yang lebih rutin dan sistematis.",
        },
    },
];

export const contactInfo = {
    email: "saviouku1997@gmail.com",
    socialLinks: [
        // { platform: "LinkedIn", url: "https://linkedin.com/in/username" },
        // { platform: "GitHub", url: "https://github.com/username" },
    ],
};
