const instagramUrl =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/igrejaatitude";

export default function Footer() {
  return (
    <footer style={{ padding: "30px 0 44px", color: "var(--muted)" }}>
      <div className="container">
        <div
          className="card"
          style={{
            padding: 18,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <div>
            <strong style={{ color: "var(--text)" }}>
              Igreja Batista Atitude • Projeto Oásis
            </strong>
            <div>Rocinha - RJ • Unidade Piloto</div>
          </div>

          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <a className="btnSecondary" href={instagramUrl} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
