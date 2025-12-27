"use client";

import { education, skills, experiences } from "@/data/portfolio";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import styles from "./ResumeSection.module.css";

export default function ResumeSection() {
    const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ once: false });
    const [skillsRef, skillsVisible] = useScrollAnimation<HTMLDivElement>({ once: false, rootMargin: "0px 0px -50px 0px" });

    return (
        <section id="resume" className={`section ${styles.resume}`} ref={sectionRef}>
            <div className="container">
                <h2 className={`section-title scroll-reveal ${isVisible ? 'visible' : ''}`}>Resume</h2>
                <p className={`section-subtitle scroll-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
                    Riwayat pendidikan, keterampilan, dan pengalaman saya
                </p>

                <div className={styles.grid}>
                    {/* Education Timeline */}
                    <div className={`${styles.column} scroll-reveal-left ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
                        <h3 className={styles.columnTitle}>
                            <span className={styles.icon}>01</span>
                            Pendidikan
                        </h3>
                        <div className={styles.timeline}>
                            {education.map((edu, index) => (
                                <div key={index} className={styles.timelineItem}>
                                    <div className={styles.timelineDot}></div>
                                    <div className={styles.timelineContent}>
                                        <span className={styles.period}>{edu.period}</span>
                                        <h4 className={styles.itemTitle}>{edu.degree}</h4>
                                        <p className={styles.itemSubtitle}>{edu.institution}</p>
                                        <p className={styles.itemDescription}>{edu.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Experience Timeline */}
                    <div className={`${styles.column} scroll-reveal-right ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
                        <h3 className={styles.columnTitle}>
                            <span className={styles.icon}>02</span>
                            Pengalaman
                        </h3>
                        <div className={styles.timeline}>
                            {experiences.map((exp, index) => (
                                <div key={index} className={styles.timelineItem}>
                                    <div className={styles.timelineDot}></div>
                                    <div className={styles.timelineContent}>
                                        <span className={styles.period}>{exp.period}</span>
                                        <h4 className={styles.itemTitle}>{exp.title}</h4>
                                        <p className={styles.itemSubtitle}>{exp.organization}</p>
                                        <p className={styles.itemDescription}>{exp.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className={styles.skillsSection} ref={skillsRef}>
                    <div className={styles.skillsGrid}>
                        {/* Technical Skills */}
                        <div className={`card ${styles.skillCard} scroll-reveal-scale ${skillsVisible ? 'visible' : ''}`}>
                            <h3 className={styles.columnTitle}>
                                <span className={styles.icon}>01</span>
                                Keterampilan Teknis
                            </h3>
                            <div className={styles.skillsList}>
                                {skills.technical.map((skill, index) => (
                                    <div key={index} className={styles.skillItem}>
                                        <div className={styles.skillHeader}>
                                            <span className={styles.skillName}>{skill.name}</span>
                                            <span className={styles.skillLevel}>{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div
                                                className="skill-bar-fill"
                                                style={{
                                                    width: skillsVisible ? `${skill.level}%` : '0%',
                                                    transitionDelay: `${index * 0.1}s`
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Soft Skills */}
                        <div className={`card ${styles.skillCard} scroll-reveal-scale ${skillsVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
                            <h3 className={styles.columnTitle}>
                                <span className={styles.icon}>02</span>
                                Keterampilan Non-Teknis
                            </h3>
                            <div className={styles.softSkillsList}>
                                {skills.softSkills.map((skill, index) => (
                                    <div key={index} className={styles.softSkillItem}>
                                        <h4 className={styles.softSkillName}>{skill.name}</h4>
                                        <p className={styles.softSkillDesc}>{skill.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
