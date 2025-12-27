import { personalInfo } from "@/data/portfolio";
import styles from "./Footer.module.css";

// Static year to avoid hydration mismatch
const CURRENT_YEAR = 2025;

export default function Footer() {

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.brand}>
                        <img src="/logo.png" alt="Savio Logo" className={styles.logoImage} />
                        <p className={styles.tagline}>{personalInfo.tagline}</p>
                    </div>

                    <div className={styles.copyright}>
                        <p>© {CURRENT_YEAR} {personalInfo.name}.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
