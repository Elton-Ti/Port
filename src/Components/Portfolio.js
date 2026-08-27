import React, { useState } from "react";
import Modal from "react-modal";
import { FaTimes, FaExternalLinkAlt, FaEye, FaLaptopCode } from "react-icons/fa";

Modal.setAppElement("#root");

function Portfolio({ data }) {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState(null);

  if (!data || !data.projects) return null;

  const categories = data.categories || ["Todos", "React / Front-end", "Aplicações & Outros"];
  
  const filteredProjects = activeCategory === "Todos"
    ? data.projects
    : data.projects.filter((p) => p.category === activeCategory);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="section" style={{ backgroundColor: "#0c111d" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <i className="fas fa-code-branch"></i> Portfólio & Projetos
          </span>
          <h2 className="section-title">
            Projetos em <span className="gradient-text">Destaque</span>
          </h2>
          <p className="section-subtitle">
            Aplicações práticas desenvolvidas explorando conceitos modernos de front-end, componentização e integração.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="portfolio-filter-tabs">
          {categories.map((cat, index) => (
            <button
              key={index}
              className={`filter-tab ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => {
            const projectImage = `images/portfolio/${project.image}`;

            return (
              <div key={index} className="project-card">
                <div className="project-thumb-wrapper" onClick={() => openModal(project)}>
                  <img
                    alt={project.title}
                    src={projectImage}
                    className="project-thumb"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "favicon.ico";
                    }}
                  />
                  <div className="project-overlay">
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(project);
                      }}
                    >
                      <FaEye /> Ver Detalhes
                    </button>
                  </div>
                </div>

                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>

                  <p className="project-desc">{project.description}</p>

                  {/* Project Tags */}
                  {project.tags && (
                    <div className="project-tags">
                      {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="tech-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="project-actions">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                      style={{ flexGrow: 1 }}
                    >
                      <FaExternalLinkAlt /> Acessar Projeto
                    </a>

                    <button
                      onClick={() => openModal(project)}
                      className="btn btn-outline btn-sm"
                      title="Visualizar Detalhes"
                    >
                      <FaEye />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Project Modal */}
        {selectedProject && (
          <Modal
            isOpen={!!selectedProject}
            onRequestClose={closeModal}
            contentLabel={selectedProject.title}
            className="custom-modal"
            overlayClassName="custom-overlay"
          >
            <button className="modal-close-btn" onClick={closeModal} aria-label="Fechar modal">
              <FaTimes />
            </button>

            <div className="modal-img-wrapper">
              <img
                alt={selectedProject.title}
                src={`images/portfolio/${selectedProject.image}`}
                className="modal-img"
              />
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
              <span className="timeline-badge" style={{ background: "rgba(56, 189, 248, 0.1)", color: "var(--text-highlight)" }}>
                <FaLaptopCode /> {selectedProject.category || "Projeto"}
              </span>
            </div>

            <h3 style={{ fontSize: "1.6rem", fontWeight: "700", marginBottom: "12px" }}>
              {selectedProject.title}
            </h3>

            <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: "1.7", marginBottom: "20px" }}>
              {selectedProject.description}
            </p>

            {selectedProject.tags && (
              <div className="project-tags" style={{ marginBottom: "24px" }}>
                {selectedProject.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div style={{ display: "flex", gap: "12px" }}>
              <a
                href={selectedProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ flexGrow: 1 }}
              >
                <FaExternalLinkAlt /> Abrir Projeto em Nova Aba
              </a>
              <button className="btn btn-outline" onClick={closeModal}>
                Fechar
              </button>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
}

export default Portfolio;

