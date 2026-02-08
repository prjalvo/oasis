# Projeto Oásis - Fanpage (Next.js)

Fanpage em React (Next.js) para apresentação do Projeto Oásis, captação de voluntários, botões para WhatsApp e Instagram, e envio de cadastro por e-mail via API Route.

## Requisitos
- Node 18+ recomendado

## Rodar local
```bash
npm install
npm run dev
```

Abra: http://localhost:3000

## Variáveis de ambiente
Crie um arquivo `.env.local` na raiz com:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=55219602214552
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/SEU_INSTAGRAM_AQUI

RESEND_API_KEY=SUA_RESEND_KEY
VOLUNTEER_TO_EMAIL=633technology@gmail.com
VOLUNTEER_FROM_EMAIL=Projeto Oasis <onboarding@resend.dev>
```

## Deploy na Vercel
1. Suba este projeto para o GitHub
2. Importe na Vercel (detecta Next.js automaticamente)
3. Configure as env vars no painel da Vercel em **Project Settings → Environment Variables**
4. Deploy ✅

> Dica: Para produção, valide um domínio no Resend e use um remetente do seu domínio no `VOLUNTEER_FROM_EMAIL`.
