import Item from "./Item";

function Lista({ itens, onAlternar, onRemover }) {
  // lista vazia: mostra mensagem
  if (itens.length === 0) {
    return <p>Nenhum item ainda.</p>;
  }

  return (
    <ul>
      {itens.map((item) => (
        // o key fica AQUI, no elemento que o map devolve
        <Item
          key={item.id}
          item={item}
          onAlternar={onAlternar}
          onRemover={onRemover}
        />
      ))}
    </ul>
  );
}

export default Lista;