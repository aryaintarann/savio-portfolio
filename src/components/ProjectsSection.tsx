"use client";

import { useState } from "react";
import { projects, Project } from "@/data/portfolio";
import styles from "./ProjectsSection.module.css";

export default function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const openModal = (project: Project) => {
        setSelectedProject(project);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = "unset";
    };

    return (
        <section id="projects" className={`section ${styles.projects}`}>
            <div className="container">
                <h2 className="section-title">Karya</h2>
                <p className="section-subtitle">
                    Koleksi proyek dan studi kasus yang telah saya kerjakan beserta refleksi pembelajaran
                </p>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`card ${styles.projectCard}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
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
