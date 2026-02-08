export function validateVolunteer(input: any) {
  const required = ["nome", "email", "telefone", "profissao", "disponibilidade", "area"];
  for (const k of required) {
    if (!input?.[k] || String(input[k]).trim().length < 2) {
      throw new Error(`Campo obrigatório inválido: ${k}`);
    }
  }

  const email = String(input.email).trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("E-mail inválido.");
  }

  return {
    nome: String(input.nome).trim(),
    email,
    telefone: String(input.telefone).trim(),
    profissao: String(input.profissao).trim(),
    disponibilidade: String(input.disponibilidade).trim(),
    area: String(input.area).trim(),
    mensagem: input.mensagem ? String(input.mensagem).trim() : ""
  };
}
