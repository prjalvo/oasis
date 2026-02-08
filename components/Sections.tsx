export default function Sections() {
  return (
    <>
      <section className="section full" id="oprojeto">
        <div className="wrap">
          <div className="grid2" style={{ alignItems: "stretch" }}>
            <div className="card" style={{ padding: 22 }}>
              <h2 className="h2">O Projeto</h2>
              <p className="p">
                O Projeto Oásis nasce com a missão de ser um refúgio de paz, transformando a comunidade
                através do amor, cuidado e oportunidades. Começamos pela Rocinha como unidade piloto.
              </p>
              <div style={{ height: 14 }} />
              <div className="badge">Atuação presencial e também virtual (teleatendimento)</div>
            </div>

            <div className="card" style={{ padding: 22 }}>
              <h3 style={{ marginTop: 0, letterSpacing: "-.4px" }}>Dia D (Lançamento)</h3>
              <p className="p">
                Um grande evento de acolhimento com amostras dos serviços e inscrições para atendimentos contínuos
                e para a Escola de Música (Orquestra Oásis).
              </p>
              <div style={{ height: 10 }} />
              <div className="badge">Triagem • Orientação • Apresentação musical • Inscrições</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt full" id="programas">
        <div className="wrap">
          <h2 className="h2">Programas</h2>
          <p className="p">Seções claras, objetivas e com foco em impacto — como uma landing institucional moderna.</p>

          <div style={{ height: 14 }} />
          <div className="grid3">
            <Feature
              title="🩺 Saúde & Bem-estar"
              text="Atendimentos agendados com médicos, dentistas, psicólogos e terapeutas — presencial e virtual."
            />
            <Feature
              title="🎼 Educação Musical"
              text="Aulas por instrumentos e formação de uma orquestra comunitária com excelência."
            />
            <Feature
              title="💼 Capacitação"
              text="Reforço escolar, informática básica e preparação para o primeiro emprego."
            />
          </div>
        </div>
      </section>

      <section className="section full" id="impacto">
        <div className="wrap">
          <div className="card" style={{ padding: 22 }}>
            <h2 className="h2">Impacto esperado</h2>
            <div style={{ height: 10 }} />

            <div className="grid3">
              <Stat value="500+" label="Famílias atendidas (meta do primeiro ano)" />
              <Stat value="100+" label="Voluntários mobilizados" />
              <Stat value="90+" label="Jovens formados na orquestra" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt full" id="depoimentos">
        <div className="wrap">
          <h2 className="h2">Depoimentos</h2>
          <p className="p">Uma prova social simples e forte, funcionando muito bem no mobile.</p>

          <div style={{ height: 14 }} />
          <div className="grid3">
            <Testimonial
              text="Eu fiquei muito feliz por meu filho fazer parte do projeto. É uma oportunidade única."
              name="Mãe / Responsável"
            />
            <Testimonial
              text="Estamos muito felizes com a existência deste projeto que vai ajudar muitas crianças na região."
              name="Família da comunidade"
            />
            <Testimonial
              text="O esporte e a educação fazem com que as crianças tenham um futuro bem melhor."
              name="Mãe / Responsável"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div className="card" style={{ padding: 18 }}>
      <h3 style={{ marginTop: 0, letterSpacing: "-.4px" }}>{title}</h3>
      <p className="p">{text}</p>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="card" style={{ padding: 16 }}>
      <div style={{ fontSize: 44, fontWeight: 1000, color: "var(--brand)", letterSpacing: "-.6px" }}>
        {value}
      </div>
      <p className="p" style={{ fontWeight: 800 }}>{label}</p>
    </div>
  );
}

function Testimonial({ text, name }: { text: string; name: string }) {
  return (
    <div className="card" style={{ padding: 18 }}>
      <p className="p" style={{ fontStyle: "italic" }}>"{text}"</p>
      <div style={{ marginTop: 12, fontWeight: 1000 }}>{name}</div>
    </div>
  );
}
