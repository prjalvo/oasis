export default function Sections() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <h2 className="h2">O que é o Projeto Oásis?</h2>
          <p className="p">
            Uma iniciativa que nasce para ser um refúgio de paz e transformação na
            comunidade, começando pela Rocinha: saúde, apoio jurídico, educação musical e
            capacitação — com atuação presencial e também virtual.
          </p>

          <div style={{ height: 18 }} />

          <div className="grid3">
            <div className="card" style={{ padding: 18 }}>
              <h3 style={{ marginTop: 0 }}>🩺 Saúde & Bem-estar</h3>
              <p className="p">
                Atendimento com médicos, dentistas, psicólogos e terapeutas (presencial e
                teleatendimento).
              </p>
            </div>

            <div className="card" style={{ padding: 18 }}>
              <h3 style={{ marginTop: 0 }}>🎼 Educação Musical</h3>
              <p className="p">
                Aulas de instrumentos (cordas, sopros, teclas e percussão) com objetivo de
                formar uma orquestra comunitária.
              </p>
            </div>

            <div className="card" style={{ padding: 18 }}>
              <h3 style={{ marginTop: 0 }}>💼 Capacitação</h3>
              <p className="p">
                Reforço escolar, informática básica e preparação para o primeiro emprego.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card" style={{ padding: 22 }}>
            <h2 className="h2">Impacto esperado</h2>
            <div className="grid3">
              <Stat value="500+" label="Famílias atendidas (meta do primeiro ano)" />
              <Stat value="100+" label="Voluntários mobilizados" />
              <Stat value="90+" label="Jovens formados na orquestra" />
            </div>
            <p className="p" style={{ marginTop: 12 }}>
              “Cada vida transformada é uma vitória do amor sobre a adversidade.”
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="card" style={{ padding: 16 }}>
      <div
        style={{
          fontSize: 40,
          fontWeight: 900,
          background: "linear-gradient(135deg, var(--brand), var(--brand2))",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        {value}
      </div>
      <p className="p">{label}</p>
    </div>
  );
}
