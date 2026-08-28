import React from "react";

function AccordionIcon({ size = 22, color = "#090d16", style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "inline-block", verticalAlign: "middle", ...style }}
      aria-label="Ícone de Sanfona"
    >
      {/* Corpo Esquerdo (Baixaria) */}
      <rect
        x="3"
        y="6"
        width="6"
        height="20"
        rx="2"
        fill={color}
      />
      {/* Botões dos Baixos */}
      <circle cx="5" cy="9.5" r="0.75" fill="#38bdf8" />
      <circle cx="7" cy="9.5" r="0.75" fill="#38bdf8" />
      <circle cx="5" cy="12.5" r="0.75" fill="#38bdf8" />
      <circle cx="7" cy="12.5" r="0.75" fill="#38bdf8" />
      <circle cx="5" cy="15.5" r="0.75" fill="#38bdf8" />
      <circle cx="7" cy="15.5" r="0.75" fill="#38bdf8" />
      <circle cx="5" cy="18.5" r="0.75" fill="#38bdf8" />
      <circle cx="7" cy="18.5" r="0.75" fill="#38bdf8" />
      <circle cx="5" cy="21.5" r="0.75" fill="#38bdf8" />
      <circle cx="7" cy="21.5" r="0.75" fill="#38bdf8" />

      {/* Fole da Sanfona (Bellows - Dobras) */}
      <path
        d="M9 7.5 L12 5.5 L15 7.5 L18 5.5 L21 7.5 L23 6 L23 26 L21 24.5 L18 26.5 L15 24.5 L12 26.5 L9 24.5 Z"
        fill={color}
      />
      {/* Linhas de dobra do fole */}
      <path
        d="M12 5.5 L12 26.5 M15 7.5 L15 24.5 M18 5.5 L18 26.5 M21 7.5 L21 24.5"
        stroke="#38bdf8"
        strokeWidth="1.1"
        strokeLinecap="round"
      />

      {/* Corpo Direito (Teclado) */}
      <rect
        x="23"
        y="5"
        width="6.5"
        height="22"
        rx="2"
        fill={color}
      />
      {/* Teclas Brancas */}
      <rect
        x="24"
        y="6.5"
        width="4.5"
        height="19"
        rx="1"
        fill="#ffffff"
      />
      {/* Linhas divisórias das teclas brancas */}
      <line x1="24" y1="10.2" x2="28.5" y2="10.2" stroke="#090d16" strokeWidth="0.7" />
      <line x1="24" y1="13.8" x2="28.5" y2="13.8" stroke="#090d16" strokeWidth="0.7" />
      <line x1="24" y1="17.5" x2="28.5" y2="17.5" stroke="#090d16" strokeWidth="0.7" />
      <line x1="24" y1="21.2" x2="28.5" y2="21.2" stroke="#090d16" strokeWidth="0.7" />

      {/* Teclas Pretas do Piano */}
      <rect x="24" y="8.2" width="2.4" height="1.4" rx="0.3" fill="#090d16" />
      <rect x="24" y="11.8" width="2.4" height="1.4" rx="0.3" fill="#090d16" />
      <rect x="24" y="15.5" width="2.4" height="1.4" rx="0.3" fill="#090d16" />
      <rect x="24" y="19.2" width="2.4" height="1.4" rx="0.3" fill="#090d16" />
      <rect x="24" y="22.8" width="2.4" height="1.4" rx="0.3" fill="#090d16" />
    </svg>
  );
}

export default AccordionIcon;
