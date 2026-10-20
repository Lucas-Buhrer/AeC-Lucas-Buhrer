import { useState } from "react";

function App() {
  const [texto, setTexto] = useState(""); // Começa com texto vazio (string vazia).
  const [tarefas, setTarefas] = useState([]); // 

  const adicionar = (e) => {
    e.preventDefault(); // Impede que a pagina recarregue quando manda uma coisa na lista
    
    if (texto === "") { // Validação 
      return;
    }
   
    const nova = { id: crypto.randomUUID(), texto: texto, feita: false }; // Cria uma tarefa com um UUID unico / FALSE porque a tarefa nasce pendente
    setTarefas([...tarefas, nova]); // Mesmo spread de antes: array novo com as tarefas antigas mais a nova.
    setTexto(""); // Limpa o campo depois de add
  };

  return (
    <div>
      <form onSubmit={adicionar}>  
        <input value={texto} onChange={(e) => setTexto(e.target.value)} />
        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {tarefas.map((t) => (
          <li key={t.id}>{t.texto}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

// Porque no <form> o Enter também envia. No botão, não. O botão precisa ser type="submit".