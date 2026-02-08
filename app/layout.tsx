import "./globals.css";

export const metadata = {
  title: "Projeto Oásis | Igreja Batista Atitude",
  description: "Transformando comunidades através do amor, cuidado e oportunidades."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
