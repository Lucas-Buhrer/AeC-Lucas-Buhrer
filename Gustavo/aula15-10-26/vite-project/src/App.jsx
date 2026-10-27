import { useState } from "react";
import './App.css'

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [texto, setTexto] = useState("");
  const [idEmEdicao, setIdEmEdicao] = useState(null);

  // Criar ou salvar edição
  const enviar = () => {
    if (texto.trim() === "") return;

    if (idEmEdicao === null) {
      const novaTarefa = {
        id: crypto.randomUUID(),
        texto: texto,
        feita: false,
      };
      setTarefas([...tarefas, novaTarefa]);
    } else {
      setTarefas(
        tarefas.map((tarefa) =>
          tarefa.id === idEmEdicao
            ? { ...tarefa, texto: texto }
            : tarefa
        )
      );
    }

    setTexto("");
    setIdEmEdicao(null);
  };

  // Começar a editar
  const editar = (tarefa) => {
    setIdEmEdicao(tarefa.id);
    setTexto(tarefa.texto);
  };

  // Cancelar edição
  const cancelar = () => {
    setTexto("");
    setIdEmEdicao(null);
  };

  // Marcar como feita
  const alternar = (id) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, feita: !tarefa.feita }
          : tarefa
      )
    );
  };

  // Remover
  const remover = (id) => {
    if (!confirm("Apagar esta tarefa?")) return;
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  };

  return (
    <div>
      <h1>Lista de tarefas</h1>

      <input
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button onClick={enviar}>
        {idEmEdicao === null ? "Adicionar" : "Salvar"}
      </button>
      {idEmEdicao !== null && <button onClick={cancelar}>Cancelar</button>}

      {tarefas.length === 0 && <p>Nenhuma tarefa ainda.</p>}

      <ul>
        {tarefas.map((tarefa) => (
          <li
            key={tarefa.id}
            className={tarefa.id === idEmEdicao ? "editando" : ""}
          >
            <span
              style={{
                textDecoration: tarefa.feita ? "line-through" : "none",
              }}
            >
              {tarefa.texto}
            </span>
            <button onClick={() => alternar(tarefa.id)}>
              {tarefa.feita ? "Desfazer" : "Feita"}
            </button>
            <button onClick={() => editar(tarefa)}>Editar</button>
            <button
              onClick={() => remover(tarefa.id)}
              disabled={tarefa.id === idEmEdicao}
            >
              Apagar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;