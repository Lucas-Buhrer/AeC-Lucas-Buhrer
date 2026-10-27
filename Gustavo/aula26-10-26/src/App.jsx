import { useState } from "react";
import Catalogo from "./Catalogo";
import Carrinho from "./Carrinho";

function App() {
  // O estado mora aqui: App é o ancestral comum de Catalogo e Carrinho
  const [compras, setCompras] = useState([]);

  const adicionar = (produto) => {
    setCompras([...compras, produto]);
  };

  return (
    <>
      <Catalogo aoAdicionar={adicionar} />
      <Carrinho compras={compras} />
    </>
  );
}

export default App;