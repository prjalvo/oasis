"use client";

import { useState } from "react";

type FormState = {
  nome: string;
  email: string;
  telefone: string;
  profissao: string;
  disponibilidade: string;
  area: string;
  mensagem: string;
};

const initial: FormState = {
  nome: "",
  email: "",
  telefone: "",
  profissao: "",
  disponibilidade: "",
  area: "",
  mensagem: "",
};

export default function VolunteerForm() {
  const [data, setData] = useState<FormState>(initial);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ ok: boolean; msg: string } | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || "Falha ao enviar cadastro.");

      setStatus({ ok: true, msg: "Cadastro enviado! Obrigado por servir. 🙏" });
      setData(initial);
    } catch (err: any) {
      setStatus({ ok: false, msg: err.message || "Erro ao enviar." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="section" id="voluntario">
      <div className="container">
        <div className="card" style={{ padding: 22 }}>
          <h2 className="h2">Cadastro de voluntários</h2>
          <p className="p">
            Preencha e nossa equipe entrará em contato para alinhar agenda e área de atuação.
          </p>

          <form onSubmit={onSubmit} style={{ maxWidth: 680, marginTop: 16 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div>
                <label>Nome completo</label>
                <input
                  required
                  value={data.nome}
                  onChange={(e) => setData({ ...data, nome: e.target.value })}
                />
              </div>
              <div>
                <label>E-mail</label>
                <input
                  required
                  type="email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div>
                <label>Telefone / WhatsApp</label>
                <input
                  required
                  value={data.telefone}
                  onChange={(e) => setData({ ...data, telefone: e.target.value })}
                  placeholder="(21) 9xxxx-xxxx"
                />
              </div>
              <div>
                <label>Profissão</label>
                <input
                  required
                  value={data.profissao}
                  onChange={(e) => setData({ ...data, profissao: e.target.value })}
                />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div>
                <label>Disponibilidade</label>
                <select
                  required
                  value={data.disponibilidade}
                  onChange={(e) => setData({ ...data, disponibilidade: e.target.value })}
                >
                  <option value="">Selecione</option>
                  <option value="Semanal">Semanal</option>
                  <option value="Quinzenal">Quinzenal</option>
                  <option value="Esporádica">Esporádica</option>
                  <option value="Virtual">Apenas virtual</option>
                </select>
              </div>
              <div>
                <label>Área que deseja servir</label>
                <select
                  required
                  value={data.area}
                  onChange={(e) => setData({ ...data, area: e.target.value })}
                >
                  <option value="">Selecione</option>
                  <option value="Saúde (Médico/Dentista/Psi/Terapias)">
                    Saúde (Médico/Dentista/Psi/Terapias)
                  </option>
                  <option value="Jurídico (Advocacia/Orientação)">
                    Jurídico (Advocacia/Orientação)
                  </option>
                  <option value="Educação Musical (Professor/Monitor)">
                    Educação Musical (Professor/Monitor)
                  </option>
                  <option value="Capacitação (Reforço/Informática/Emprego)">
                    Capacitação (Reforço/Informática/Emprego)
                  </option>
                  <option value="Acolhimento/Secretaria/Operação">
                    Acolhimento/Secretaria/Operação
                  </option>
                </select>
              </div>
            </div>

            <div>
              <label>Mensagem (opcional)</label>
              <textarea
                value={data.mensagem}
                onChange={(e) => setData({ ...data, mensagem: e.target.value })}
              />
              <small>
                Ex.: dias/horários preferidos, experiência, se atende virtualmente, etc.
              </small>
            </div>

            <div style={{ display: "flex", gap: 12, marginTop: 14, flexWrap: "wrap" }}>
              <button className="btn" disabled={loading} type="submit">
                {loading ? "Enviando..." : "Enviar cadastro"}
              </button>
              <a className="btnSecondary" href="#top">
                Voltar ao topo
              </a>
            </div>

            {status && (
              <p
                className="p"
                style={{
                  marginTop: 12,
                  color: status.ok
                    ? "rgba(120,255,180,0.95)"
                    : "rgba(255,170,170,0.95)",
                }}
              >
                {status.msg}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
