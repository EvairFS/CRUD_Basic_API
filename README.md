# 📌 CRUD de Usuários -- Fullstack (NestJS + React + Prisma)

Projeto Fullstack para gerenciamento de usuários, desenvolvido com
**NestJS** no backend e **React + Vite** no frontend, utilizando
**Prisma ORM** e **PostgreSQL** como banco de dados.

## 🚀 Tecnologias Utilizadas

### Backend

-   Node.js
-   NestJS
-   Prisma ORM
-   PostgreSQL
-   TypeScript

### Frontend

-   React
-   Vite
-   TypeScript
-   Axios

## Estrutura do Projeto

```text
backend
├── prisma
│   └── schema.prisma
│
├── src
│   ├── app.module.ts
│   ├── main.ts
│   │
│   ├── prisma
│   │   └── prisma.service.ts
│   │
│   ├── usuario
│   │   ├── dto
│   │   │   └── create-usuario.dto.ts
│   │   │
│   │   ├── usuario.controller.ts
│   │   ├── usuario.service.ts
│   │   └── usuario.module.ts
│   │
│   └── auth
│       ├── auth.controller.ts
│       ├── auth.service.ts
│       └── auth.module.ts
│
├── package.json
└── tsconfig.json


frontend
├── public
│   └── vite.svg
│
├── src
│   ├── assets
│   │   └── react.svg
│   │
│   ├── components
│   │   ├── UsuarioForm.tsx
│   │   ├── UsuarioList.tsx
│   │   └── Login.tsx
│   │
│   ├── services
│   │   └── api.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## ⚙️ Backend

cd backend npm install npx prisma migrate dev npm run start:dev

Servidor: http://localhost:3000

## ⚙️ Frontend

cd frontend npm install npm run dev

Frontend: http://localhost:5173

## 🔌 Rotas

POST /usuarios\
GET /usuarios\
DELETE /usuarios/:id\
POST /auth/login

## 👨‍💻 Autor

Evair Siqueira