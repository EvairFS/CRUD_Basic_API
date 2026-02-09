import { useEffect, useState } from "react";
import { api } from "../services/api";

type Usuario = {
  id: number;
  nome: string;
  email: string;
};

type Props = {
  reload: boolean;
};

export default function UsuarioList({ reload }: Props) {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState(true);

  const [editandoId, setEditandoId] = useState<number | null>(null);
  const [nomeEditado, setNomeEditado] = useState("");
  const [emailEditado, setEmailEditado] = useState("");

  function carregarUsuarios() {
    api.get("/usuarios")
      .then((response) => setUsuarios(response.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    carregarUsuarios();
  }, [reload]);

  async function excluirUsuario(id: number) {
    if (!confirm("Deseja excluir?")) return;

    await api.delete(`/usuarios/${id}`);
    carregarUsuarios();
  }

  function iniciarEdicao(usuario: Usuario) {
    setEditandoId(usuario.id);
    setNomeEditado(usuario.nome);
    setEmailEditado(usuario.email);
  }

  async function salvarEdicao(id: number) {
    try {
      await api.put(`/usuarios/${id}`, {
        nome: nomeEditado,
        email: emailEditado
      });

      setEditandoId(null);
      carregarUsuarios();
    } catch (error) {
      console.error(error);
      alert("Erro ao editar");
    }
  }

  if (loading) return <p>Carregando...</p>;

  return (
    <div>
      <h2>Usuários</h2>

      <ul>
        {usuarios.map((u) => (
          <li key={u.id}>
            {editandoId === u.id ? (
              <>
                <input
                  value={nomeEditado}
                  onChange={(e) => setNomeEditado(e.target.value)}
                />

                <input
                  value={emailEditado}
                  onChange={(e) => setEmailEditado(e.target.value)}
                />

                <button onClick={() => salvarEdicao(u.id)}>Salvar</button>
                <button onClick={() => setEditandoId(null)}>Cancelar</button>
              </>
            ) : (
              <>
                {u.nome} - {u.email}
                <button onClick={() => iniciarEdicao(u)}>Editar</button>
                <button onClick={() => excluirUsuario(u.id)}>Excluir</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}