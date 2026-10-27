import { useState } from "react";

export default function Carrinho() {
  const [itens, setItens] = useState([]);

  function adicionar(nome) {
    const novo = { id: itens.length + 1, nome };

    setItens([...itens, novo]);
  }

  return (
    <section>
      <h2>Carrinho</h2>

      <button onClick={() => adicionar("Café")}>Adicionar café</button>
      <button onClick={() => adicionar("Pão")}>Adicionar pão</button>
      <button onClick={() => adicionar("Leite")}>Adicionar leite</button>

      <p>Itens no carrinho: {itens.length}</p>

      <ul>
        {itens.map((item) => (
          <li key={item.id}>
            {item.id}. {item.nome}
          </li>
        ))}
      </ul>
    </section>
  );
}