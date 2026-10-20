function LivroItem({ livro, onAlternar, onRemover }) {
  return (
    // Classe condicional: livro lido ganha a classe extra "livro-lido"
    <li className={livro.lido ? "livro livro-lido" : "livro"}>
      <div className="info">
        <strong>{livro.titulo}</strong>
        <span>{livro.autor}</span>

        {/* && : o selo só aparece se lido for true */}
        {livro.lido && <span className="selo">Lido</span>}
      </div>

      <div className="acoes">
        {/* Tem argumento (livro.id), então precisa da setinha () => */}
        <button onClick={() => onAlternar(livro.id)}>
          {livro.lido ? "Desmarcar" : "Marcar como lido"}
        </button>
        <button className="perigo" onClick={() => onRemover(livro.id)}>
          Remover
        </button>
      </div>
    </li>
  );
}

export default LivroItem;