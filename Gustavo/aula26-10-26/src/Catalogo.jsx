const produtos = [
  { id: 1, nome: "Camiseta", preco: 49.9 },
  { id: 2, nome: "Caneca", preco: 29.9 },
  { id: 3, nome: "Boné", preco: 39.9 },
  { id: 4, nome: "Mochila", preco: 129.9 },
];

function Catalogo({ aoAdicionar }) {
  return (
    <section>
      <h2>Catálogo</h2>
      {produtos.map((produto) => (
        <div key={produto.id}>
          <span>
            {produto.nome} — R$ {produto.preco.toFixed(2)}
          </span>{" "}
          {/* O filho só avisa: aconteceu algo aqui, com este dado */}
          <button onClick={() => aoAdicionar(produto)}>Adicionar</button>
        </div>
      ))}
    </section>
  );
}

export default Catalogo;