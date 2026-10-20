import { useState } from "react";

function App() {
  const [itens, setItens] = useState([]);

  const adicionar = () => {
    setItens([...itens, "teste"]);
  };

  return (
    <div>
      <button onClick={adicionar}>Adicionar</button>
      <p>Total: {itens.length}</p>
      <ul>
        {itens.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

// ADICIONA LI DE ALGUMA COISA + CONTADOR