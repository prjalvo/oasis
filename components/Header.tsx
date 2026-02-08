"use client";

import { useState } from "react";

const instagramUrl =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/igrejaatitude";
const waNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "").replace(/\D/g, "");

const waHref = waNumber
  ? `https://wa.me/${waNumber}?text=${encodeURIComponent(
      "Olá! Quero saber mais sobre o Projeto Oásis e como posso servir como voluntário. 🙏"
    )}`
  : "#";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="header">
      <div className="wrap">
        <div className="nav">
          <div className="brand">
            <span style={{ fontSize: 20 }}>🌿</span>
            <span>Projeto Oásis</span>
          </div>

          <nav className="navLinks">
            <a href="#oprojeto">O Projeto</a>
            <a href="#programas">Programas</a>
            <a href="#impacto">Impacto</a>
            <a href="#depoimentos">Depoimentos</a>
            <a href="#voluntario">Voluntário</a>
            <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
            <a href={waHref} target="_blank" rel="noreferrer">WhatsApp</a>
          </nav>

          <button className="mobileToggle" onClick={() => setOpen(v => !v)}>
            {open ? "Fechar" : "Menu"}
          </button>
        </div>

        {open && (
          <div className="mobileMenu">
            <a onClick={() => setOpen(false)} href="#oprojeto">O Projeto</a>
            <a onClick={() => setOpen(false)} href="#programas">Programas</a>
            <a onClick={() => setOpen(false)} href="#impacto">Impacto</a>
            <a onClick={() => setOpen(false)} href="#depoimentos">Depoimentos</a>
            <a onClick={() => setOpen(false)} href="#voluntario">Voluntário</a>
            <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
            <a href={waHref} target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        )}
      </div>
    </div>
  );
}
