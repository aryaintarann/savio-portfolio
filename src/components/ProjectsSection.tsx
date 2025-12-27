"use client";

import { useState, useRef, useEffect } from "react";
import { projects, Project } from "@/data/portfolio";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import styles from "./ProjectsSection.module.css";

export default function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ once: false });
    const [scrollY, setScrollY] = useState(0);
    const sectionTopRef = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const openModal = (project: Project) => {
        setSelectedProject(project);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = "unset";
    };

    // Calculate unique parallax offset for each card
    const getCardParallax = (index: number) => {
        const speed = 0.02 + (index * 0.01);
        return Math.sin(scrollY * 0.005 + index) * 5;
    };

    return (
        <section
            id="projects"
            className={`section ${styles.projects}`}
            ref={sectionRef}
        >
            <div className="container">
                <h2 className={`section-title scroll-reveal ${isVisible ? 'visible' : ''}`}>
                    Karya
                </h2>
                <p className={`section-subtitle scroll-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
                    Proyek yang telah saya kerjakan
                </p>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`card ${styles.projectCard} scroll-reveal ${isVisible ? 'visible' : ''}`}
                            style={{
                                transitionDelay: `${0.2 + index * 0.15}s`,
                                transform: isVisible ? `translateY(${getCardParallax(index)}px)` : 'translateY(40px)'
                            }}
                        >
                            <div className={styles.cardHeader}>
                                <span className={`tag ${styles.projectType}`}>{project.type}</span>
                            </div>

                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <p className={styles.projectDesc}>{project.description}</p>

                            <div className={styles.tools}>
                                <span className={styles.toolsLabel}>Tools:</span>
                                <div className={styles.toolsList}>
                                    {project.tools.map((tool, idx) => (
                                        <span key={idx} className={styles.toolTag}>
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.role}>
                                <span className={styles.roleLabel}>Peran:</span>
                                <p className={styles.roleText}>{project.role}</p>
                            </div>

                            <button
                                className={`btn btn-primary ${styles.reflectionBtn}`}
                                onClick={() => openModal(project)}
                            >
                                Lihat
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Reflection Modal */}
            {selectedProject && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div
                        className={styles.modal}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className={styles.closeBtn} onClick={closeModal}>
                            X
                        </button>

                        <div className={styles.modalHeader}>
                            <span className={`tag ${styles.projectType}`}>
                                {selectedProject.type}
                            </span>
                            <h3 className={styles.modalTitle}>{selectedProject.title}</h3>
                        </div>

                        <div className={styles.reflectionContent}>
                            <h4 className={styles.reflectionTitle}>
                                Tentang Project :
                            </h4>

                            {/* What */}
                            <div className={styles.reflectionItem}>
                                <div className={styles.reflectionHeader}>
                                    <span className={styles.reflectionIcon}>1</span>
                                    <span className={styles.reflectionSubtitle}>
                                        Apa yang dikerjakan?
                                    </span>
                                </div>
                                <p className={styles.reflectionText}>
                                    {selectedProject.reflection.what}
                                </p>
                            </div>

                            {/* So What */}
                            <div className={styles.reflectionItem}>
                                <div className={styles.reflectionHeader}>
                                    <span className={styles.reflectionIcon}>2</span>
                                    <span className={styles.reflectionSubtitle}>
                                        Apa yang dipelajari?
                                    </span>
                                </div>
                                <p className={styles.reflectionText}>
                                    {selectedProject.reflection.soWhat}
                                </p>
                            </div>

                            {/* Now What */}
                            <div className={styles.reflectionItem}>
                                <div className={styles.reflectionHeader}>
                                    <span className={styles.reflectionIcon}>3</span>
                                    <span className={styles.reflectionSubtitle}>
                                        Rencana selanjutnya?
                                    </span>
                                </div>
                                <p className={styles.reflectionText}>
                                    {selectedProject.reflection.nowWhat}
                                </p>
                            </div>
                        </div>

                        <button
                            className={`btn btn-secondary ${styles.closeModalBtn}`}
                            onClick={closeModal}
                        >
                            Tutup
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
