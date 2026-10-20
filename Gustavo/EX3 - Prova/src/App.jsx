/*
import { useState } from "react";

function App() {
  const [total, setTotal] = useState(0);

  return (
    <button onClick={() => setTotal(total + 1)}>
      Cliques: {total}
    </button>
  );
}

export default App;
*/

// BOTAO PARA CLICAR E AUMENTAR O NUMERO
//    Parte	                     Significado

//    useState(0)	            Cria um valor vigiado pelo React. O 0 é o valor inicial.
//    total	                  O valor atual. É isso que você mostra na tela.
//    setTotal	              A função para trocar o valor.

// As 3 regras que mais caem
// Nunca escreva total = 5. Sempre setTotal(5). Só pelo set o React fica sabendo.
// O nome da função segue o padrão: se o valor é total, a função é setTotal.
// O useState vai sempre no topo da função, e precisa do import { useState } from "react";.

//---------------------------------------------------------------------------------------------------------------------//

import { useState } from "react";

function App() {
  const [total, setTotal] = useState(0);

  return (
    <div>
      <p>{total}</p>
      <button onClick={() => setTotal(total + 1)}>+1</button>
      <button onClick={() => setTotal(total - 1)}>-1</button>
      <button onClick={() => setTotal(0)}>Zerar</button>
    </div>
  );
}

export default App;

//-------------------------------------------------------------
// ERRADO: executa na hora de desenhar a tela
// <button onClick={setTotal(total + 1)}>+1</button>

// CERTO: só executa quando clicarem
// <button onClick={() => setTotal(total + 1)}>+1</button>
