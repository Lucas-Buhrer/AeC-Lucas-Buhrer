function Carrinho({ compras }) {
const total = compras.reduce((soma, produto) => soma + produto.preco, 0);

  return (
    <section>
      <h2>Carrinho</h2>
      {compras.length === 0 ? (
        <p>Nenhum item no carrinho.</p>
      ) : (
        <ul>
          {compras.map((produto, indice) => (
            <li key={`${produto.id}-${indice}`}>
              {produto.nome} — R$ {produto.preco.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
      <strong>Total: R$ {total.toFixed(2)}</strong>
    </section>
  );
}

export default Carrinho;