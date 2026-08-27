import React, { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaCopy, FaCheck } from "react-icons/fa";

function Contact({ data }) {
  const [copied, setCopied] = useState(false);

  if (!data) return null;

  const { email, phone, phoneRaw, whatsappMessage, linkedin, github, address } = data;
  const whatsappUrl = `https://wa.me/${phoneRaw}?text=${encodeURIComponent(whatsappMessage || "Olá Elton!")}`;

  const copyEmailToClipboard = () => {
    if (navigator && navigator.clipboard) {
      navigator.clipboard.writeText(email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <i className="fas fa-paper-plane"></i> Canais de Contato
          </span>
          <h2 className="section-title">
            Vamos construir algo <span className="gradient-text">incrível juntos?</span>
          </h2>
          <p className="section-subtitle">
            Estou disponível para novas oportunidades, desafios e projetos. Escolha o canal mais conveniente para você:
          </p>
        </div>

        {/* 3 Action Cards */}
        <div className="contact-hub-grid">
          {/* Card 1: WhatsApp */}
          <div className="contact-card whatsapp">
            <div className="contact-icon-box">
              <FaWhatsapp />
            </div>
            <h3 className="contact-card-title">WhatsApp</h3>
            <p className="contact-card-desc">
              Resposta rápida para conversas diretas, dúvidas e propostas.
            </p>
            <div className="contact-info-text">{phone}</div>
            <div className="contact-card-actions">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: "100%" }}
              >
                <FaWhatsapp /> Iniciar Conversa
              </a>
            </div>
          </div>

          {/* Card 2: E-mail */}
          <div className="contact-card email">
            <div className="contact-icon-box">
              <FaEnvelope />
            </div>
            <h3 className="contact-card-title">E-mail</h3>
            <p className="contact-card-desc">
              Ideal para propostas formais, documentações e mensagens detalhadas.
            </p>
            <div className="contact-info-text">{email}</div>
            <div className="contact-card-actions">
              <a
                href={`mailto:${email}`}
                className="btn btn-primary btn-sm"
                style={{ flexGrow: 1 }}
              >
                <FaEnvelope /> Escrever
              </a>
              <button
                onClick={copyEmailToClipboard}
                className="btn btn-outline btn-sm"
                title="Copiar endereço de e-mail"
              >
                {copied ? <><FaCheck style={{ color: "#10b981" }} /> Copiado!</> : <><FaCopy /> Copiar</>}
              </button>
            </div>
          </div>

          {/* Card 3: LinkedIn */}
          <div className="contact-card linkedin">
            <div className="contact-icon-box">
              <FaLinkedin />
            </div>
            <h3 className="contact-card-title">LinkedIn</h3>
            <p className="contact-card-desc">
              Conexões profissionais, histórico completo de carreira e networking.
            </p>
            <div className="contact-info-text">linkedin.com/in/elton-lopes-pereira</div>
            <div className="contact-card-actions">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ width: "100%", borderColor: "rgba(10, 102, 194, 0.4)", color: "#ffffff" }}
              >
                <FaLinkedin style={{ color: "#0a66c2" }} /> Conectar no LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Location & Summary Banner */}
        <div className="location-banner">
          <div className="location-info">
            <FaMapMarkerAlt />
            <div>
              <div className="location-label">Localização & Modalidade</div>
              <div className="location-value">
                {address?.city}, {address?.state} &bull; Remoto / Híbrido / Presencial
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
            >
              <FaGithub /> Perfil no GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

