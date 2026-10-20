import { useState } from "react";

function App() {
  const [texto, setTexto] = useState(""); 
  const [tarefas, setTarefas] = useState([]); 

  const adicionar = (e) => {
    e.preventDefault(); 
    
    if (texto === "") { 
      return;
    }
   
    const nova = { id: crypto.randomUUID(), texto: texto, feita: false }; 
    setTarefas([...tarefas, nova]); 
    setTexto(""); 
  };

  const remover = (id) => { // Leia: “a nova lista é todas as tarefas cujo id é diferente do id que eu recebi”.
    if (!confirm("Apagar esta tarefa?")) return; // Ele abre uma caixinha de confirmação, e se o usuário cancelar, nada é apagado.
    setTarefas(tarefas.filter((t) => t.id !== id));
  };

  return (
    <div>
      <form onSubmit={adicionar}>  
        <input value={texto} onChange={(e) => setTexto(e.target.value)} />
        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {tarefas.map((t) => (
          <li key={t.id}>
            {t.texto}
            <button onClick={() => remover(t.id)}>Apagar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

// Lembra da regra da setinha? O remover recebe um argumento (t.id), então precisa de () =>. 
// Sem ela, o remover roda ao desenhar a tela e a lista some sozinha.

// Como cada clique funciona:
// Se a lista tem as tarefas com id a, b, c e você clica em Apagar na b:

// Tarefa	      t.id !== "b"?     	Fica?
// a	            sim	              fica
// b	            não	              sai
// c	            sim	              fica

// Resultado: [a, c].