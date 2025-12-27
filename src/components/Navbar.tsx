"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "Tentang Saya" },
    { href: "#resume", label: "Resume" },
    { href: "#projects", label: "Karya" },
    { href: "#contact", label: "Kontak" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = navLinks.map((link) => link.href.slice(1));
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.getElementById(href.slice(1));
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
            <div className={styles.container}>
                <a href="#home" className={styles.logo} onClick={(e) => handleNavClick(e, "#home")}>
                    <img src="/logo.png" alt="Savio Logo" className={styles.logoImage} />
                </a>

                <button
                    className={`${styles.mobileToggle} ${isMobileMenuOpen ? styles.active : ""}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.open : ""}`}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className={`${styles.navLink} ${activeSection === link.href.slice(1) ? styles.active : ""}`}
                                onClick={(e) => handleNavClick(e, link.href)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
