import { Resend } from "resend";
import { validateVolunteer } from "@/lib/validate";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = validateVolunteer(body);

    const resend = new Resend(process.env.RESEND_API_KEY);

    const to = process.env.VOLUNTEER_TO_EMAIL || "633technology@gmail.com";
    const from =
      process.env.VOLUNTEER_FROM_EMAIL || "Projeto Oasis <onboarding@resend.dev>";

    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.6">
        <h2>Novo cadastro de voluntário - Projeto Oásis</h2>
        <p><b>Nome:</b> ${escapeHtml(parsed.nome)}</p>
        <p><b>Email:</b> ${escapeHtml(parsed.email)}</p>
        <p><b>Telefone:</b> ${escapeHtml(parsed.telefone)}</p>
        <p><b>Profissão:</b> ${escapeHtml(parsed.profissao)}</p>
        <p><b>Disponibilidade:</b> ${escapeHtml(parsed.disponibilidade)}</p>
        <p><b>Área:</b> ${escapeHtml(parsed.area)}</p>
        <p><b>Mensagem:</b><br/>${escapeHtml(parsed.mensagem || "-")}</p>
        <hr/>
        <p style="color:#666">Enviado pela fanpage do Projeto Oásis.</p>
      </div>
    `;

    await resend.emails.send({
      from,
      to,
      subject: `Projeto Oásis - Voluntário: ${parsed.nome}`,
      html,
    });

    return Response.json({ ok: true });
  } catch (err: any) {
    return Response.json(
      { error: err?.message || "Erro ao enviar." },
      { status: 400 }
    );
  }
}

function escapeHtml(str: string) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
