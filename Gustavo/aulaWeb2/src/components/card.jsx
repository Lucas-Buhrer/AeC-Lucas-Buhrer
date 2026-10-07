function Card({ prato }) {
  return (
    <div className="card">
      <h2>Prato: {prato.nome}</h2>
      <p>Preço: R$ {prato.preco}</p>
      <p>Status: {prato.disponivel ? "Disponível" : "Esgotado"}</p>
    </div>
  );
}

export default Card;
