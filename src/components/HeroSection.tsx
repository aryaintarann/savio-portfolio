"use client";

import { personalInfo } from "@/data/portfolio";
import { useParallax, getParallaxOffset } from "@/hooks/useParallax";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
    const { scrollY } = useParallax();

    return (
        <section id="home" className={styles.hero}>
            <div className={styles.background}>
                <div
                    className={styles.gradientOrb1}
                    style={{ transform: `translateY(${getParallaxOffset(scrollY, 0.3)}px)` }}
                ></div>
                <div
                    className={styles.gradientOrb2}
                    style={{ transform: `translateY(${getParallaxOffset(scrollY, 0.2)}px)` }}
                ></div>
                <div className={styles.grid}></div>
            </div>

            <div className={`container ${styles.content}`}>
                {/* Profile Photo */}
                <div
                    className={styles.photoWrapper}
                    style={{ transform: `translateY(${getParallaxOffset(scrollY, 0.1)}px)` }}
                >
                    <div className={styles.photo}>
                        <img
                            src="/profile.jpg"
                            alt="Foto Jose Inacio Savio Dias da Costa"
                        />
                    </div>
                </div>

                <div className={styles.greeting}>
                    <span>Halo, saya</span>
                </div>

                <h1
                    className={styles.name}
                    style={{ transform: `translateY(${getParallaxOffset(scrollY, 0.05)}px)` }}
                >
                    {personalInfo.name}
                </h1>

                <p className={styles.role}>{personalInfo.role}</p>

                <p className={styles.tagline}>{personalInfo.tagline}</p>

                <p className={styles.description}>{personalInfo.portfolioDescription}</p>

                <div className={styles.cta}>
                    <a href="#projects" className="btn btn-primary">
                        Lihat Karya Saya
                    </a>
                    <a href="#contact" className="btn btn-secondary">
                        Hubungi Saya
                    </a>
                </div>

                <div
                    className={styles.scrollIndicator}
                    style={{ opacity: Math.max(0, 1 - scrollY / 300) }}
                >
                    <div className={styles.mouse}>
                        <div className={styles.wheel}></div>
                    </div>
                    <span>Scroll ke bawah</span>
                </div>
            </div>
        </section>
    );
}
