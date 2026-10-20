import { useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario";
import Lista from "./components/Lista";

function App() {
  // O estado da lista fica no PAI, porque Formulario e Lista dependem dele
  const [itens, setItens] = useState([]);

  // CRIAR: recebe o texto que o Formulario mandou
  const adicionar = (texto) => {
    const novo = { id: crypto.randomUUID(), texto: texto, comprado: false };
    setItens([...itens, novo]);
  };

  // REMOVER
  const remover = (id) => {
    setItens(itens.filter((item) => item.id !== id));
  };

  // EDITAR (marcar/desmarcar)
  const alternar = (id) => {
    setItens(
      itens.map((item) =>
        item.id === id ? { ...item, comprado: !item.comprado } : item
      )
    );
  };

  return (
    <div className="container">
      <h1>Lista de Compras</h1>

      {/* manda a função adicionar como prop */}
      <Formulario onAdicionar={adicionar} />

      {/* manda a lista e as funções como props */}
      <Lista itens={itens} onAlternar={alternar} onRemover={remover} />
    </div>
  );
}

export default App;