import React from "react";
import { FaBriefcase, FaGraduationCap, FaTools, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";

function Resume({ data }) {
  if (!data) return null;

  const { skillCategories, work, education } = data;

  return (
    <section id="resume" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <i className="fas fa-layer-group"></i> Competências & Carreira
          </span>
          <h2 className="section-title">
            Habilidades Técnicas e <span className="gradient-text">Trajetória Profissional</span>
          </h2>
          <p className="section-subtitle">
            Estrutura completa das minhas competências tecnológicas, experiências corporativas e formação acadêmica.
          </p>
        </div>

        {/* 1. Habilidades Técnicas Categorizadas */}
        <div style={{ marginBottom: "70px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}>
            <FaTools style={{ color: "var(--text-highlight)", fontSize: "1.3rem" }} />
            <h3 style={{ fontSize: "1.6rem", fontWeight: "700" }}>Habilidades Técnicas</h3>
          </div>

          <div className="skills-container">
            {skillCategories &&
              skillCategories.map((cat, idx) => (
                <div key={idx} className="skill-category-card">
                  <div className="skill-category-header">
                    <div className="skill-category-icon">
                      <i className={cat.icon}></i>
                    </div>
                    <div className="skill-category-title">{cat.category}</div>
                  </div>

                  <div className="skill-badges-wrapper">
                    {cat.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="skill-pill">
                        <i className={skill.icon}></i>
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* 2. Experiência Profissional (Timeline Vertical) */}
        <div style={{ marginBottom: "70px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "36px" }}>
            <FaBriefcase style={{ color: "var(--text-highlight)", fontSize: "1.3rem" }} />
            <h3 style={{ fontSize: "1.6rem", fontWeight: "700" }}>Experiência Profissional</h3>
          </div>

          <div className="timeline-wrapper">
            {work &&
              work.map((job, index) => (
                <div key={index} className="timeline-item">
                  <div className={`timeline-dot ${job.isCurrent ? "current" : ""}`}></div>

                  <div className="timeline-card">
                    <div className="timeline-card-header">
                      <div>
                        <h4 className="timeline-role">{job.title}</h4>
                        <div className="timeline-company">{job.company}</div>
                      </div>

                      <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
                        <span className={`timeline-badge ${job.isCurrent ? "current" : ""}`}>
                          <FaCalendarAlt />
                          {job.years}
                        </span>
                        {job.location && (
                          <span className="timeline-badge">
                            <FaMapMarkerAlt />
                            {job.location}
                          </span>
                        )}
                      </div>
                    </div>

                    {job.summary && (
                      <p className="timeline-summary">{job.summary}</p>
                    )}

                    {/* Lista de Atividades e Conquistas */}
                    {job.highlights && (
                      <ul className="timeline-bullets">
                        {job.highlights.map((bullet, bIdx) => (
                          <li key={bIdx} className="timeline-bullet-item">
                            <FaCheckCircle />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tags de Tecnologias */}
                    {job.techs && (
                      <div className="timeline-techs">
                        {job.techs.map((tech, tIdx) => (
                          <span key={tIdx} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Links Externos dos Projetos */}
                    {job.links && job.links.length > 0 && (
                      <div className="timeline-links">
                        {job.links.map((link, lIdx) => (
                          <a
                            key={lIdx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline btn-sm"
                          >
                            <FaExternalLinkAlt /> {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* 3. Formação Acadêmica */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}>
            <FaGraduationCap style={{ color: "var(--text-highlight)", fontSize: "1.4rem" }} />
            <h3 style={{ fontSize: "1.6rem", fontWeight: "700" }}>Formação Acadêmica</h3>
          </div>

          <div className="education-grid">
            {education &&
              education.map((edu, index) => (
                <div key={index} className="education-card">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                    <h4 className="education-school">{edu.school}</h4>
                    {edu.badge && (
                      <span className="timeline-badge" style={{ background: "rgba(56, 189, 248, 0.1)", color: "var(--text-highlight)" }}>
                        {edu.badge}
                      </span>
                    )}
                  </div>

                  <div className="education-degree">{edu.degree}</div>

                  <div className="education-date">
                    <FaCalendarAlt /> Conclusão em {edu.graduated}
                  </div>

                  <p className="education-desc">{edu.description}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;

