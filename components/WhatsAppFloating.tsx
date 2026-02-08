const waNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "").replace(/\D/g, "");

export default function WhatsAppFloating() {
  if (!waNumber) return null;

  const text = encodeURIComponent(
    "Olá! Quero participar do Projeto Oásis. Pode me orientar como voluntariar? 🙏"
  );

  const href = `https://wa.me/${waNumber}?text=${text}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        position: "fixed",
        right: 18,
        bottom: 18,
        background: "linear-gradient(135deg, #25D366, #00bcd4)",
        color: "#07121f",
        fontWeight: 900,
        padding: "14px 16px",
        borderRadius: 999,
        boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
      }}
    >
      WhatsApp • Falar agora
    </a>
  );
}
