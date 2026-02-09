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

## 📁 Estrutura do Projeto

CRUD_teste/ ├── backend/ │ ├── prisma/ │ └── src/ │ ├── auth/ │ ├──
usuario/ │ ├── prisma/ │ └── main.ts └── frontend/ └── src/ ├──
components/ ├── services/ └── App.tsx

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
