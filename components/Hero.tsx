const instagramUrl =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/igrejaatitude";
const waNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "").replace(/\D/g, "");

function waLink() {
  const text = encodeURIComponent(
    "Olá! Quero saber mais sobre o Projeto Oásis e como posso servir como voluntário. 🙏"
  );
  if (!waNumber) return "#";
  return `https://wa.me/${waNumber}?text=${text}`;
}

export default function Hero() {
  return (
    <header id="top" style={{ padding: "70px 0 30px" }}>
      <div className="container">
        <div className="card" style={{ padding: 26, borderRadius: 22 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 0.8fr",
              gap: 18,
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  gap: 10,
                  alignItems: "center",
                  padding: "6px 12px",
                  borderRadius: 999,
                  border: "1px solid var(--border)",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                <span>🌿</span>
                <small>Unidade piloto: Rocinha • RJ</small>
              </div>

              <h1 style={{ fontSize: 54, lineHeight: 1.05, margin: "16px 0 10px" }}>
                Projeto{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, var(--brand), var(--brand2))",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Oásis
                </span>
              </h1>

              <p className="p" style={{ fontSize: 18, marginBottom: 18 }}>
                Transformando comunidades através do amor, cuidado e oportunidades —
                conectando voluntários qualificados a crianças, jovens e famílias que
                precisam de esperança.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <a className="btn" href="#voluntario">
                  Quero me cadastrar
                </a>
                <a
                  className="btnSecondary"
                  href={waLink()}
                  target="_blank"
                  rel="noreferrer"
                >
                  Falar no WhatsApp
                </a>
                <a
                  className="btnSecondary"
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </div>

              {!waNumber && (
                <p
                  className="p"
                  style={{ marginTop: 12, color: "rgba(255,180,180,0.9)" }}
                >
                  ⚠️ Configure NEXT_PUBLIC_WHATSAPP_NUMBER no .env para habilitar o
                  WhatsApp.
                </p>
              )}
            </div>

            <div className="card" style={{ padding: 18, borderRadius: 18 }}>
              <h3 style={{ marginTop: 0 }}>Como você pode participar</h3>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: 18,
                  color: "var(--muted)",
                  lineHeight: 1.8,
                }}
              >
                <li>Doar tempo semanal ou quinzenal</li>
                <li>Apoiar com equipamentos e materiais</li>
                <li>Divulgar a visão e mobilizar outros voluntários</li>
                <li>Orar e estar presente no “Dia D”</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
