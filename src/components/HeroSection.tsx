import { personalInfo } from "@/data/portfolio";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
    return (
        <section id="home" className={styles.hero}>
            <div className={styles.background}>
                <div className={styles.gradientOrb1}></div>
                <div className={styles.gradientOrb2}></div>
                <div className={styles.grid}></div>
            </div>

            <div className={`container ${styles.content}`}>
                {/* Profile Photo - Simpan foto ke folder public dengan nama profile.jpg */}
                <div className={styles.photoWrapper}>
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

                <h1 className={styles.name}>{personalInfo.name}</h1>

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

                <div className={styles.scrollIndicator}>
                    <div className={styles.mouse}>
                        <div className={styles.wheel}></div>
                    </div>
                    <span>Scroll ke bawah</span>
                </div>
            </div>
        </section>
    );
}
