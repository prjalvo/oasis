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
    <section className="hero full">
      <div className="wrap">
        <div className="card heroCard">
          <div className="grid2" style={{ alignItems: "center" }}>
            <div>
              <div className="badge">
                <span>📍</span>
                <span>Unidade piloto: Rocinha • RJ</span>
              </div>

              <h1 className="h1" style={{ marginTop: 14 }}>
                Um <span style={{ color: "var(--brand)" }}>Oásis</span> de esperança
                <br /> para crianças, jovens e famílias.
              </h1>

              <p className="p" style={{ fontSize: 18 }}>
                Conectamos voluntários qualificados a quem mais precisa — com saúde, educação musical,
                capacitação e acolhimento contínuo.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
                <a className="btn" href="#voluntario">Quero ser voluntário</a>
                <a className="btnSecondary" href={waLink()} target="_blank" rel="noreferrer">WhatsApp</a>
                <a className="btnSecondary" href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
              </div>

              <div className="kpi">
                <div className="kpiItem">
                  <div className="kpiValue">500+</div>
                  <div className="kpiLabel">Famílias (meta 1º ano)</div>
                </div>
                <div className="kpiItem">
                  <div className="kpiValue">100+</div>
                  <div className="kpiLabel">Voluntários</div>
                </div>
                <div className="kpiItem">
                  <div className="kpiValue">90+</div>
                  <div className="kpiLabel">Jovens na Orquestra</div>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: 18 }}>
              <h3 style={{ marginTop: 0, letterSpacing: "-.4px" }}>Como você pode participar</h3>
              <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.95, fontWeight: 700 }}>
                <li>Doar tempo semanal ou quinzenal</li>
                <li>Atender presencialmente ou virtualmente</li>
                <li>Apoiar com equipamentos e materiais</li>
                <li>Ajudar na secretaria, acolhimento e operação</li>
              </ul>

              <div style={{ marginTop: 14, borderTop: "1px solid var(--border)", paddingTop: 14 }}>
                <div className="badge" style={{ justifyContent: "center" }}>
                  “Cada vida transformada é uma vitória do amor sobre a adversidade.”
                </div>
              </div>
            </div>
          </div>
        </div>

        {!waNumber && (
          <p className="p" style={{ marginTop: 12, color: "rgba(210,40,40,.85)", fontWeight: 800 }}>
            ⚠️ Configure NEXT_PUBLIC_WHATSAPP_NUMBER para habilitar o WhatsApp.
          </p>
        )}
      </div>
    </section>
  );
}
