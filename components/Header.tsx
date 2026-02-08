"use client";

import { useState } from "react";
import Image from "next/image";

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
            {/* LOGO */}
            <div
              style={{
                width: 100,
                height: 100,
                borderRadius: 12,
                overflow: "hidden",
                border: "1px solid var(--border)",
                background: "#fff",
                display: "grid",
                placeItems: "center",
              }}
            >
              <Image
                src="/Logo.png"
                alt="Projeto Oásis"
                width={100}
                height={100}
                priority
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
              <span style={{ fontWeight: 1000 }}>Projeto Oásis</span>
              <span style={{ fontSize: 12, color: "var(--muted)", fontWeight: 800 }}>
                Unidade Piloto • Rocinha
              </span>
            </div>
          </div>

          <nav className="navLinks">
            <a href="#oprojeto">O Projeto</a>
            <a href="#programas">Programas</a>
            <a href="#impacto">Impacto</a>
            <a href="#depoimentos">Depoimentos</a>
            <a href="#voluntario">Voluntário</a>
            <a href={instagramUrl} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={waHref} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </nav>

          <button className="mobileToggle" onClick={() => setOpen((v) => !v)}>
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
