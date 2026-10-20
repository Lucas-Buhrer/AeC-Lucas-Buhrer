import { useState } from "react";
import "./App.css";

function App() {
  // ESTADOS
  const [texto, setTexto] = useState("");   // o que está digitado
  const [itens, setItens] = useState([]);   // a lista

  // CRIAR
  const adicionar = (e) => {
    e.preventDefault();                     // não recarrega a página
    if (texto === "") return;               // não adiciona vazio

    const novo = { id: crypto.randomUUID(), texto: texto, comprado: false };
    setItens([...itens, novo]);             // array novo
    setTexto("");                           // limpa a caixa
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

      <form onSubmit={adicionar}>
        <input
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Digite um item"
        />
        <button type="submit">Adicionar</button>
      </form>

      {itens.length === 0 && <p>Nenhum item ainda.</p>}

      <ul>
        {itens.map((item) => (
          <li key={item.id} className={item.comprado ? "comprado" : ""}>
            <span>{item.texto}</span>
            <button onClick={() => alternar(item.id)}>
              {item.comprado ? "Desfazer" : "Comprado"}
            </button>
            <button onClick={() => remover(item.id)}>Apagar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;