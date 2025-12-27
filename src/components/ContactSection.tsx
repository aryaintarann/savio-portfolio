import { contactInfo, personalInfo } from "@/data/portfolio";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
    return (
        <section id="contact" className={`section ${styles.contact}`}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <h2 className="section-title">Hubungi Saya</h2>
                        <p className={styles.description}>
                            Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya melalui email di bawah ini.
                        </p>

                        <div className={styles.emailCard}>
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
