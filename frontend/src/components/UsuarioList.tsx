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

  function carregarUsuarios() {
    api.get("/usuarios")
      .then((response) => {
        setUsuarios(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar usuários:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  async function excluirUsuario(id: number) {
    const confirmar = window.confirm("Deseja realmente excluir este usuário?");
    if (!confirmar) return;

    try {
      await api.delete(`/usuarios/${id}`);
      carregarUsuarios(); // 🔄 atualiza lista
    } catch (error) {
      console.error(error);
      alert("Erro ao excluir usuário");
    }
  }

  useEffect(() => {
    carregarUsuarios();
  }, [reload]);

  if (loading) return <p>Carregando...</p>;

  return (
    <div>
      <h2>Usuários</h2>

      {usuarios.length === 0 ? (
        <p>Nenhum usuário encontrado.</p>
      ) : (
        <ul>
          {usuarios.map((u) => (
            <li key={u.id}>
              {u.nome} - {u.email}{" "}
              <button onClick={() => excluirUsuario(u.id)}>
                Excluir
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
