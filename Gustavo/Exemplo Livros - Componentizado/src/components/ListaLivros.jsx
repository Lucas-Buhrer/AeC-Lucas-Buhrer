import LivroItem from "./LivroItem";

function ListaLivros({ livros, onAlternar, onRemover }) {
  // Lista vazia também é um caso: sempre mostre uma mensagem
  if (livros.length === 0) {
    return <p className="vazio">Nenhum livro cadastrado.</p>;
  }

  return (
    <ul className="lista">
      {livros.map((livro) => (
        // O key vai AQUI, no elemento que o map devolve,
        // e não dentro do LivroItem.
        <LivroItem
          key={livro.id}
          livro={livro}
          onAlternar={onAlternar}
          onRemover={onRemover}
        />
      ))}
    </ul>
  );
}

export default ListaLivros;