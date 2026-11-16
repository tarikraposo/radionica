import { Resend } from "resend";

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: "RESEND_API_KEY is not configured" },
      { status: 500 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { nome, email, whatsapp, mensagem } = await req.json();

    const data = await resend.emails.send({
      from: "Agendamento <onboarding@resend.dev>",
      to: ["tarik.wakalyapi@gmail.com"],
      subject: "Novo agendamento",
      html: `
        <h2>Novo contato</h2>

        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        <p><strong>Mensagem:</strong> ${mensagem}</p>
      `,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
