"use client";

import { useState, useEffect, useRef } from "react";
import { projects, Project } from "@/data/portfolio";
import styles from "./ProjectsSection.module.css";

export default function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const sectionRef = useRef<HTMLElement | null>(null);

    // Track scroll position and element visibility
    useEffect(() => {
        const checkVisibility = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Element is visible if it's in the viewport
            // Trigger when top of element is within 80% of viewport from bottom
            // And hide when bottom of element is above 20% of viewport from top
            const visible = rect.top < windowHeight * 0.85 && rect.bottom > windowHeight * 0.15;

            setIsVisible(visible);
            setScrollY(window.scrollY);
        };

        checkVisibility();
        window.addEventListener("scroll", checkVisibility, { passive: true });
        window.addEventListener("resize", checkVisibility, { passive: true });

        return () => {
            window.removeEventListener("scroll", checkVisibility);
            window.removeEventListener("resize", checkVisibility);
        };
    }, []);

    const openModal = (project: Project) => {
        setSelectedProject(project);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = "unset";
    };

    // Wave-like parallax for each card
    const getCardParallax = (index: number) => {
        if (!isVisible) return 0;
        return Math.sin(scrollY * 0.003 + index * 0.8) * 8;
    };

    return (
        <section
            id="projects"
            className={`section ${styles.projects}`}
            ref={sectionRef}
        >
            <div className="container">
                <h2
                    className="section-title"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'all 0.5s ease-out'
                    }}
                >
                    Karya
                </h2>
                <p
                    className="section-subtitle"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'all 0.5s ease-out 0.1s'
                    }}
                >
                    Proyek yang telah saya kerjakan
                </p>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`card ${styles.projectCard}`}
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible
                                    ? `translateY(${getCardParallax(index)}px) scale(1)`
                                    : 'translateY(50px) scale(0.95)',
                                transition: `all 0.5s ease-out ${0.15 + index * 0.08}s`
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
