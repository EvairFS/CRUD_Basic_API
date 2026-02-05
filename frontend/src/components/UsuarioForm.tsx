import { useState } from "react";
import { api } from "../services/api";

type Props = {
  onCreated: () => void;
};

export default function UsuarioForm({ onCreated }: Props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleSubmit(e: React.FormEvent) {
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

      alert("Usuário cadastrado!");
      onCreated();
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastrar Usuário</h2>

      <input
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

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

      <button type="submit">Cadastrar</button>
    </form>
  );
}
