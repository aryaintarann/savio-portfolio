"use client";

import { contactInfo } from "@/data/portfolio";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
    const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ once: false });
    const [contentRef, contentVisible] = useScrollAnimation<HTMLDivElement>({ once: false, rootMargin: "0px 0px -50px 0px" });

    return (
        <section id="contact" className={`section ${styles.contact}`} ref={sectionRef}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.content} ref={contentRef}>
                        <h2 className={`section-title scroll-reveal ${isVisible ? 'visible' : ''}`}>
                            Hubungi Saya
                        </h2>
                        <p className={`${styles.description} scroll-reveal ${contentVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
                            Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya melalui email di bawah ini.
                        </p>

                        <div className={`${styles.emailCard} scroll-reveal-scale ${contentVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
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
                            className={`btn btn-primary ${styles.ctaBtn} scroll-reveal ${contentVisible ? 'visible' : ''}`}
                            style={{ transitionDelay: '0.3s' }}
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
