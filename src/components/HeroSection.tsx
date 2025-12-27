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
                    style={{ transform: `translateY(${getParallaxOffset(scrollY, 0.4)}px) translateX(${Math.sin(scrollY * 0.002) * 20}px)` }}
                ></div>
                <div
                    className={styles.gradientOrb2}
                    style={{ transform: `translateY(${getParallaxOffset(scrollY, 0.25)}px) translateX(${Math.cos(scrollY * 0.002) * 15}px)` }}
                ></div>
                <div className={styles.grid}></div>
            </div>

            <div className={`container ${styles.content}`}>
                {/* Profile Photo with parallax */}
                <div
                    className={styles.photoWrapper}
                    style={{
                        transform: `translateY(${getParallaxOffset(scrollY, 0.15)}px) scale(${1 - scrollY * 0.0003})`,
                        opacity: Math.max(0.3, 1 - scrollY * 0.002)
                    }}
                >
                    <div className={styles.photo}>
                        <img
                            src="/profile.jpg"
                            alt="Foto Jose Inacio Savio Dias da Costa"
                        />
                    </div>
                </div>

                {/* Greeting with parallax */}
                <div
                    className={styles.greeting}
                    style={{
                        transform: `translateY(${getParallaxOffset(scrollY, 0.12)}px)`,
                        opacity: Math.max(0.2, 1 - scrollY * 0.0025)
                    }}
                >
                    <span>Halo, saya</span>
                </div>

                {/* Name with parallax */}
                <h1
                    className={styles.name}
                    style={{
                        transform: `translateY(${getParallaxOffset(scrollY, 0.1)}px)`,
                        opacity: Math.max(0.2, 1 - scrollY * 0.002)
                    }}
                >
                    {personalInfo.name}
                </h1>

                {/* Role with parallax */}
                <p
                    className={styles.role}
                    style={{
                        transform: `translateY(${getParallaxOffset(scrollY, 0.08)}px)`,
                        opacity: Math.max(0.2, 1 - scrollY * 0.0018)
                    }}
                >
                    {personalInfo.role}
                </p>

                {/* Tagline with parallax */}
                <p
                    className={styles.tagline}
                    style={{
                        transform: `translateY(${getParallaxOffset(scrollY, 0.06)}px)`,
                        opacity: Math.max(0.2, 1 - scrollY * 0.0015)
                    }}
                >
                    {personalInfo.tagline}
                </p>

                {/* Description with parallax */}
                <p
                    className={styles.description}
                    style={{
                        transform: `translateY(${getParallaxOffset(scrollY, 0.04)}px)`,
                        opacity: Math.max(0.2, 1 - scrollY * 0.0012)
                    }}
                >
                    {personalInfo.portfolioDescription}
                </p>

                {/* CTA buttons with parallax */}
                <div
                    className={styles.cta}
                    style={{
                        transform: `translateY(${getParallaxOffset(scrollY, 0.02)}px)`,
                        opacity: Math.max(0.2, 1 - scrollY * 0.001)
                    }}
                >
                    <a href="#projects" className="btn btn-primary">
                        Lihat Karya Saya
                    </a>
                    <a href="#contact" className="btn btn-secondary">
                        Hubungi Saya
                    </a>
                </div>

                {/* Scroll indicator fades out */}
                <div
                    className={styles.scrollIndicator}
                    style={{
                        opacity: Math.max(0, 1 - scrollY / 200),
                        transform: `translateY(${getParallaxOffset(scrollY, -0.1)}px)`
                    }}
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
