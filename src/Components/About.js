import React from "react";
import { FaGraduationCap, FaCode, FaCheckCircle, FaBriefcase, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

function About({ data }) {
  if (!data) return null;

  const { name, bio, subBio, image, address, email, phoneRaw, whatsappMessage, highlights } = data;
  const profilepic = "images/" + (image || "profilepic.jpg");
  const whatsappUrl = `https://wa.me/${phoneRaw}?text=${encodeURIComponent(whatsappMessage || "Olá Elton!")}`;

  const highlightIcons = [
    <FaGraduationCap />,
    <FaCode />,
    <FaCheckCircle />,
    <FaBriefcase />
  ];

  return (
    <section id="about" className="section" style={{ backgroundColor: "#0c111d" }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <i className="fas fa-user"></i> Sobre Mim
          </span>
          <h2 className="section-title">
            Conheça minha trajetória e <span className="gradient-text">propósito profissional</span>
          </h2>
          <p className="section-subtitle">
            Combinação de base sólida em sistemas de telecomunicações pela UTFPR com paixão por desenvolvimento de software moderno.
          </p>
        </div>

        <div className="about-grid">
          {/* Coluna 1: Foto e Card de Status */}
          <div className="about-photo-wrapper">
            <div className="about-photo-card">
              <img
                className="about-photo"
                src={profilepic}
                alt={`Foto de ${name}`}
              />
              <div className="about-card-badge">
                <i className="fas fa-check-circle" style={{ color: "#10b981", marginRight: "6px" }}></i>
                UTFPR &bull; Desenvolvedor
              </div>
            </div>

            <div style={{
              marginTop: "32px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              alignItems: "center",
              fontSize: "0.9rem",
              color: "var(--text-secondary)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <FaMapMarkerAlt style={{ color: "var(--text-highlight)" }} />
                <span>{address?.city}, {address?.state}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <FaEnvelope style={{ color: "var(--text-highlight)" }} />
                <span>{email}</span>
              </div>
            </div>
          </div>

          {/* Coluna 2: Bio e Destaques */}
          <div className="about-text">
            <p className="about-lead">
              {bio}
            </p>

            {subBio && (
              <p className="about-body">
                {subBio}
              </p>
            )}

            {/* Grid de 4 Cards de Destaque */}
            <div className="about-highlights-grid">
              {highlights &&
                highlights.map((item, index) => (
                  <div key={index} className="highlight-card">
                    <div className="highlight-title">
                      <span style={{ color: "var(--text-highlight)", fontSize: "1.1rem" }}>
                        {highlightIcons[index % highlightIcons.length]}
                      </span>
                      {item.title}
                    </div>
                    <div className="highlight-desc">
                      {item.description}
                    </div>
                  </div>
                ))}
            </div>

            <div style={{ marginTop: "16px", display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <FaWhatsapp /> Vamos Conversar
              </a>
              <a
                href="#resume"
                className="btn btn-outline"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Ver Habilidades & Experiência &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;