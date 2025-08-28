# Arrowverse

Arrowverse é uma aplicação web fullstack para acompanhamento de progresso em séries do universo Arrowverse, utilizando Supabase como backend e React no frontend.

## Tecnologias Utilizadas

- **Frontend:** React, TypeScript, Vite, TailwindCSS, Radix UI
- **Backend:** Node.js, Express, Drizzle ORM, Supabase
- **Banco de Dados:** PostgreSQL (via Supabase)
- **Outros:** React Query, Zod, Passport, ws (WebSocket)

## Estrutura do Projeto

```
Arrowverse/
├── client/           # Frontend React
│   └── src/
│       ├── components/
│       ├── hooks/
│       ├── lib/
│       └── pages/
├── server/           # Backend Express
│   ├── db.ts         # Conexão Supabase
│   ├── routes.ts     # Rotas da API
│   ├── storage.ts    # Storage customizado
│   └── vite.ts       # Integração com Vite
├── shared/           # Schemas e tipos compartilhados
│   └── schema.ts
├── drizzle.config.ts # Configuração Drizzle ORM
├── tailwind.config.ts
├── package.json
└── ...
```

## Como rodar o projeto

1. Instale as dependências:
   ```sh
   npm install
   ```
2. Configure as variáveis de ambiente (Supabase):
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
3. Rode o backend em modo dev:
   ```sh
   npm run dev
   ```
4. O frontend será servido via Vite.

## Scripts principais
- `npm run dev` — Inicia o servidor Express em modo desenvolvimento
- `npm run build` — Build do frontend e backend
- `npm run start` — Inicia o servidor em produção
- `npm run db:push` — Sincroniza o schema do banco via Drizzle

## Observações
- O projeto utiliza autenticação e persistência de progresso do usuário.
- O banco de dados é gerenciado pelo Supabase.
- O frontend é responsivo e utiliza componentes modernos.

---

Desenvolvido por GabSouzaDev
