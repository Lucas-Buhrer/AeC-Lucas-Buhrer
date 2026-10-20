function App() {
  const frutas = [
    { id: 1, nome: "Banana", preco: 5, disponivel: true, promocao: false },
    { id: 2, nome: "Maçã", preco: 7, disponivel: true, promocao: true },
    { id: 3, nome: "Uva", preco: 12, disponivel: false, promocao: false },
  ];

  return (
    <ul>
      {frutas.map((fruta) => (
        <li key={fruta.id}>
          {fruta.nome} - R$ {fruta.preco} - {fruta.disponivel ? "Em estoque" : "Esgotado"}  {fruta.promocao && <span>- (Promoção!)</span>}
        </li>
      ))}
    </ul>
  );
}

export default App;

// Uso do MAP / KEY / Ternario de disponibilidade / &&
