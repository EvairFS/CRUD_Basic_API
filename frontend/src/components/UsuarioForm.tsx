import { useState } from "react";
import { api } from "../services/api";

export default function UsuarioForm({ onUsuarioCriado }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post("/usuarios", {
        nome,
        email,
        senha,
      });

      setNome("");
      setEmail("");
      setSenha("");

      alert("Usuário cadastrado com sucesso!");

      if (onUsuarioCriado) {
        onUsuarioCriado();
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar usuário");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastrar Usuário</h2>

      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        required
      />

      <button type="submit">Cadastrar</button>
    </form>
  );
}
