import { useState } from "react";
import "./App.css";
import FormularioLivro from "./components/FormularioLivro";
import ListaLivros from "./components/ListaLivros";

function App() {
  // Estado da lista inteira. Fica aqui no pai porque
  // o formulário E a lista precisam dele.
  const [livros, setLivros] = useState([]);

  // CREATE: recebe titulo e autor do formulário
  const adicionar = (titulo, autor) => {
    const novo = {
      id: crypto.randomUUID(),
      titulo: titulo,
      autor: autor,
      lido: false,
    };
    setLivros([...livros, novo]); // array novo com o livro no final
  };

  // DELETE: filter mantém quem tem id DIFERENTE do clicado
  const remover = (id) => {
    if (!confirm("Remover este livro?")) return;
    setLivros(livros.filter((livro) => livro.id !== id));
  };

  // UPDATE: map troca só o livro clicado, os outros ficam intactos
  const alternarLido = (id) => {
    setLivros(
      livros.map((livro) =>
        livro.id === id ? { ...livro, lido: !livro.lido } : livro
      )
    );
  };

  // Valor calculado (não precisa de useState)
  const lidos = livros.filter((livro) => livro.lido).length;

  return (
    <div className="container">
      <h1>Minha Biblioteca</h1>

      {/* Manda a função "adicionar" como prop */}
      <FormularioLivro onAdicionar={adicionar} />

      {/* > 0 para evitar imprimir o número 0 */}
      {livros.length > 0 && (
        <p className="resumo">
          {livros.length} livro(s) cadastrado(s) · {lidos} lido(s)
        </p>
      )}

      <ListaLivros
        livros={livros}
        onAlternar={alternarLido}
        onRemover={remover}
      />
    </div>
  );
}

export default App;