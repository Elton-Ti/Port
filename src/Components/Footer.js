import React, { useState, useEffect } from "react";
import { FaArrowUp, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import AccordionIcon from "./AccordionIcon";

function Footer({ data }) {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (!data) return null;

  const { name, linkedin, github, phoneRaw, whatsappMessage, social } = data;
  const whatsappUrl = `https://wa.me/${phoneRaw}?text=${encodeURIComponent(whatsappMessage || "Olá Elton!")}`;

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <span className="logo-badge" style={{ display: "inline-flex", marginRight: "8px", verticalAlign: "middle" }} title="Sanfona / Acordeom">
            <AccordionIcon size={20} color="#090d16" />
          </span>
          <span>{name}</span>
        </div>

        <div className="footer-social">
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
          {phoneRaw && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              title="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          )}
          {social &&
            social
              .filter((s) => s.name !== "LinkedIn" && s.name !== "GitHub" && s.name !== "WhatsApp")
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

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} {name}. Desenvolvido com React.js e estilização moderna.
        </p>
      </div>

      {/* Floating Back to Top Button */}
      <button
        className={`back-to-top-btn ${showTopBtn ? "visible" : ""}`}
        onClick={scrollToTop}
        title="Voltar ao Topo"
        aria-label="Voltar ao Topo"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}

export default Footer;

