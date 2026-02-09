import { useState } from "react";
import { api } from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleLogin(e: React.SyntheticEvent) {
    e.preventDefault();

    try {
      const response = await api.post("/auth/login", {
        email,
        senha
      });

      alert("Login realizado com sucesso!");
      console.log(response.data);

    } catch (error) {
      console.error("Email ou senha inválidos:",error);
      alert("Email ou senha inválidos");
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <button type="submit">Entrar</button>
    </form>
  );
}