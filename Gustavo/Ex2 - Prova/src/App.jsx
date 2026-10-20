import "./App.css";

function App() {
  const frutas = [
    { id: 1, nome: "Banana", preco: 5, disponivel: true },
    { id: 2, nome: "Maçã", preco: 7, disponivel: true },
    { id: 3, nome: "Uva", preco: 12, disponivel: false },
  ];

  return (
    <ul>
      {frutas.length === 0
        ? <p>Nenhuma fruta no catálogo.</p>
        : frutas.map((fruta) => (
            <li key={fruta.id} className={fruta.disponivel ? "" : "esgotado"}>
              {fruta.nome} - R$ {fruta.preco}
            </li>
          ))}
    </ul>
  );
}

export default App;

// Fruta fica riscada caso esteja indisponivel (tem css para riscar a fruta)