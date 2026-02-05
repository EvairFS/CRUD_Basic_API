import { useState } from "react";
import UsuarioForm from "./components/UsuarioForm";
import UsuarioList from "./components/UsuarioList";

function App() {
  const [reload, setReload] = useState(false);
// aqui que mexe a interface.
  return (
    <div>
      <h1>CRUD Usuários</h1>

      <UsuarioForm onCreated={() => setReload(!reload)} />

      <UsuarioList reload={reload} /> 
    </div> //UsuarioForm é do arquivos do components, mesma forma o UsuarioList. 
  );
}

export default App;
