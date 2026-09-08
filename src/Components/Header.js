import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaDownload, FaWhatsapp, FaGithub, FaLinkedin, FaRocket } from "react-icons/fa";
import AccordionIcon from "./AccordionIcon";

function Header({ data }) {
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setNavScrolled(true);
      } else {
        setNavScrolled(false);
      }

      // Detect active section on scroll
      const sections = ["home", "about", "resume", "portfolio", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!data) return null;

  const { name, role, roleDescription, project, github, linkedin, phoneRaw, whatsappMessage, social } = data;
  const whatsappUrl = `https://wa.me/${phoneRaw}?text=${encodeURIComponent(whatsappMessage || "Olá Elton!")}`;

  const navItems = [
    { id: "home", label: "Início" },
    { id: "about", label: "Sobre Mim" },
    { id: "resume", label: "Habilidades & Experiência" },
    { id: "portfolio", label: "Projetos" },
    { id: "contact", label: "Contato" }
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header id="home">
      {/* Modern Sticky Glass Navbar */}
      <nav className={`navbar ${navScrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <a href="#home" className="nav-logo" onClick={(e) => handleNavClick(e, "home")}>
            <span className="logo-badge" title="Sanfona / Acordeom">
              <AccordionIcon size={22} color="#090d16" />
            </span>
            <span>Elton<span className="gradient-text">.dev</span></span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            {mobileMenuOpen && (
              <li style={{ marginTop: "10px" }}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-sm"
                  style={{ width: "100%" }}
                >
                  <FaWhatsapp /> Falar no WhatsApp
                </a>
              </li>
            )}
          </ul>

          <div className="nav-actions">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm"
              style={{ display: window.innerWidth < 768 ? "none" : "inline-flex" }}
            >
              <FaWhatsapp /> Falar no WhatsApp
            </a>

            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="container hero-content">
          <div className="hero-status">
            <span className="status-dot"></span>
            <span>Disponível para novas oportunidades</span>
          </div>

          <h1 className="hero-title">
            Olá, eu sou <span className="gradient-text">{name}</span>
          </h1>

          <h2 className="hero-subtitle">{role}</h2>

          <div className="hero-tech-stack">
            <span>{roleDescription}</span>
          </div>

          <p className="hero-bio-short">
            Graduado pela <strong>UTFPR</strong> com sólida atuação em desenvolvimento de software com 
            foco em <strong>Java, Spring Boot, React, SQL e Cypress</strong>. Criando soluções eficientes, 
            escaláveis e com código limpo.
          </p>

          <div className="hero-buttons">
            <a
              href={project}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <FaDownload /> Baixar Currículo (CV)
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <FaWhatsapp /> Chamar no WhatsApp
            </a>

            <a
              href="#portfolio"
              className="btn btn-outline"
              onClick={(e) => handleNavClick(e, "portfolio")}
            >
              <FaRocket /> Ver Projetos
            </a>
          </div>

          <div className="hero-social">
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                title="GitHub"
              >
                <FaGithub />
              </a>
            )}
            {social &&
              social
                .filter((s) => s.name !== "LinkedIn" && s.name !== "GitHub")
                .map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    title={item.name}
                  >
                    <i className={item.icon}></i>
                  </a>
                ))}
          </div>

          {/* Quick Tech Strip */}
          <div className="hero-strip">
            <div className="strip-item">
              <i className="fab fa-java"></i>
              <span>Java & Spring Boot</span>
            </div>
            <div className="strip-item">
              <i className="fab fa-react"></i>
              <span>React.js & Hooks</span>
            </div>
            <div className="strip-item">
              <i className="fab fa-js-square"></i>
              <span>JavaScript ES6+</span>
            </div>
            <div className="strip-item">
              <i className="fas fa-database"></i>
              <span>SQL Server & Bancos</span>
            </div>
            <div className="strip-item">
              <i className="fas fa-vial"></i>
              <span>Testes com Cypress</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

