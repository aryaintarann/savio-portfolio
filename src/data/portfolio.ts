// Portfolio Data - Jose Inacio Savio Dias da Costa
// Centralized data untuk mudah di-edit

export const personalInfo = {
    name: "Jose Inacio Savio Dias da Costa",
    shortName: "Savio",
    role: "Mahasiswa Informatika",
    tagline: "Passionate Web Developer & Tech Enthusiast",
    email: "saviouku1997@gmail.com",
    portfolioDescription:
        "Portofolio ini menampilkan perjalanan saya dalam mempelajari pengembangan web dan teknologi. Setiap karya di sini merupakan hasil pembelajaran dan pengalaman yang membentuk kemampuan saya.",
};

export const aboutMe = {
    background: {
        status: "Mahasiswa",
        major: "Teknologi Informasi",
        university: "ITB STIKOM Bali",
    },
    interests: [
        "Pengembangan Web",
        "UI/UX Design",
        "Teknologi & Inovasi",
        "Problem Solving",
    ],
    goals: [
        "Menjadi Full-Stack Web Developer yang kompeten",
        "Berkontribusi dalam proyek-proyek teknologi yang berdampak",
        "Terus belajar dan mengembangkan kemampuan di bidang IT",
    ],
};

export const education = [
    {
        institution: "ITB STIKOM Bali",
        degree: "S1 Teknologi Informasi",
        period: "2022 - Sekarang",
        description: "Fokus pada pengembangan web dan pemrograman",
    },
];

export const skills = {
    technical: [
        { name: "HTML", level: 85 },
        { name: "CSS", level: 80 },
        { name: "JavaScript", level: 75 },
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
        description: "Membantu pemerintahan Kota Badung dalam pengelolaan aset",
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
        title: "Manajemen Bisnis SamagriTech",
        type: "Project Based",
        description:
            "Proyek ini adalah manajemen bisnis yang saya lakukan untuk memperoleh nilai tambah bagi bisnis saya.",
        tools: ["HTML", "CSS", "JavaScript"],
        role: "Frontend Developer - Fokus pada desain antarmuka pengguna dan pengalaman pengguna (UX)",
        reflection: {
            what: "Saya menganalisis kebutuhan sistem perpustakaan dan merancang antarmuka pengguna yang intuitif. Mengimplementasikan fitur pencarian buku dengan filter kategori dan status ketersediaan menggunakan JavaScript.",
            soWhat:
                "Proyek ini mengajarkan saya tentang pentingnya user research sebelum mendesain. Saya memahami bahwa UX yang baik dimulai dari memahami kebutuhan pengguna. Saya juga belajar tentang state management sederhana untuk mengelola data buku.",
            nowWhat:
                "Saya berencana memperdalam pengetahuan tentang UX/UI design dan mempelajari tools seperti Figma. Untuk pengembangan teknis, saya ingin mengintegrasikan sistem ini dengan REST API dan menggunakan database yang sebenarnya.",
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
];

export const contactInfo = {
    email: "saviouku1997@gmail.com",
    socialLinks: [
        // { platform: "LinkedIn", url: "https://linkedin.com/in/username" },
        // { platform: "GitHub", url: "https://github.com/username" },
    ],
};
