"use client";

import { aboutMe } from "@/data/portfolio";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
    const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>();

    return (
        <section
            id="about"
            className={`section ${styles.about}`}
            ref={sectionRef}
        >
            <div className="container">
                <h2 className={`section-title scroll-reveal ${isVisible ? 'visible' : ''}`}>
                    Tentang Saya
                </h2>
                <p className={`section-subtitle scroll-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
                    Kenali lebih dekat siapa saya, latar belakang, dan tujuan karier saya
                </p>

                <div className={styles.grid}>
                    {/* Background Card */}
                    <div className={`card ${styles.card} scroll-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
                        <div className={styles.cardIcon}>01</div>
                        <h3 className={styles.cardTitle}>Latar Belakang</h3>
                        <div className={styles.infoItem}>
                            <span className={styles.label}>Status</span>
                            <span className={styles.value}>{aboutMe.background.status}</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.label}>Jurusan</span>
                            <span className={styles.value}>{aboutMe.background.major}</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.label}>Universitas</span>
                            <span className={styles.value}>{aboutMe.background.university}</span>
                        </div>
                    </div>

                    {/* Interests Card */}
                    <div className={`card ${styles.card} scroll-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
                        <div className={styles.cardIcon}>02</div>
                        <h3 className={styles.cardTitle}>Minat &amp; Ketertarikan</h3>
                        <div className={styles.tagList}>
                            {aboutMe.interests.map((interest, index) => (
                                <span key={index} className="tag">
                                    {interest}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Goals Card */}
                    <div className={`card ${styles.card} scroll-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
                        <div className={styles.cardIcon}>03</div>
                        <h3 className={styles.cardTitle}>Tujuan Karier</h3>
                        <ul className={styles.goalsList}>
                            {aboutMe.goals.map((goal, index) => (
                                <li key={index} className={styles.goalItem}>
                                    <span className={styles.goalIcon}>-</span>
                                    {goal}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
