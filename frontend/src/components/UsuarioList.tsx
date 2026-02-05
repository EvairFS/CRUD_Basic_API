import { useEffect, useState } from "react";
import { api } from "../services/api";

interface Usuario {
  id: number;
  nome: string;
  email: string;
}

const UsuarioList = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsuarios();
  }, []);

  async function fetchUsuarios() {
    try {
      const response = await api.get<Usuario[]>("/usuarios");
      setUsuarios(response.data);
    } catch (error) {
      console.error("Erro:", error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <p>Carregando usuários...</p>;

  return (
    <div>
      <h2>Lista de Usuários</h2>

      {usuarios.length === 0 ? (
        <p>Nenhum usuário encontrado.</p>
      ) : (
        <table border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.nome}</td>
                <td>{u.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UsuarioList;
