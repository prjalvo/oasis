const instagramUrl =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/igrejaatitude";

export default function Footer() {
  return (
    <footer className="footer full">
      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", gap: 18, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontWeight: 1000, fontSize: 18 }}>Projeto Oásis • Igreja Batista Atitude</div>
            <p className="p" style={{ marginTop: 8 }}>
              Rocinha - RJ • Unidade Piloto • Amor, cuidado e oportunidades.
            </p>
          </div>

          <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
            <a className="btnSecondary" href="#voluntario" style={{ background: "transparent", color: "#fff", borderColor: "rgba(255,255,255,.18)" }}>
              Seja voluntário
            </a>
            <a className="btnSecondary" href={instagramUrl} target="_blank" rel="noreferrer"
               style={{ background: "transparent", color: "#fff", borderColor: "rgba(255,255,255,.18)" }}>
              Instagram
            </a>
          </div>
        </div>

        <div style={{ marginTop: 18, borderTop: "1px solid rgba(255,255,255,.14)", paddingTop: 14 }}>
          <p className="p">© {new Date().getFullYear()} Projeto Oásis. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
