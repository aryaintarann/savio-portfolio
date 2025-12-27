"use client";

import { useState, useEffect, useRef } from "react";
import { contactInfo } from "@/data/portfolio";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement | null>(null);

    // Track scroll position and element visibility using getBoundingClientRect
    useEffect(() => {
        const checkVisibility = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Element is visible when it's in the viewport
            const visible = rect.top < windowHeight * 0.85 && rect.bottom > windowHeight * 0.15;

            setIsVisible(visible);
        };

        checkVisibility();
        window.addEventListener("scroll", checkVisibility, { passive: true });
        window.addEventListener("resize", checkVisibility, { passive: true });

        return () => {
            window.removeEventListener("scroll", checkVisibility);
            window.removeEventListener("resize", checkVisibility);
        };
    }, []);

    return (
        <section id="contact" className={`section ${styles.contact}`} ref={sectionRef}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <h2
                            className="section-title"
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                                transition: 'all 0.5s ease-out'
                            }}
                        >
                            Hubungi Saya
                        </h2>
                        <p
                            className={styles.description}
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                                transition: 'all 0.5s ease-out 0.1s'
                            }}
                        >
                            Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya melalui email di bawah ini.
                        </p>

                        <div
                            className={styles.emailCard}
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
                                transition: 'all 0.5s ease-out 0.2s'
                            }}
                        >
                            <div className={styles.emailIcon}>@</div>
                            <div className={styles.emailInfo}>
                                <span className={styles.emailLabel}>Email</span>
                                <a
                                    href={`mailto:${contactInfo.email}`}
                                    className={styles.emailLink}
                                >
                                    {contactInfo.email}
                                </a>
                            </div>
                        </div>

                        <a
                            href={`mailto:${contactInfo.email}`}
                            className={`btn btn-primary ${styles.ctaBtn}`}
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                                transition: 'all 0.5s ease-out 0.3s'
                            }}
                        >
                            <span>Kirim Email</span>
                            <span className={styles.arrow}>&rarr;</span>
                        </a>
                    </div>

                    <div className={styles.decoration}>
                        <div className={styles.decorCircle1}></div>
                        <div className={styles.decorCircle2}></div>
                        <div className={styles.decorGrid}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
