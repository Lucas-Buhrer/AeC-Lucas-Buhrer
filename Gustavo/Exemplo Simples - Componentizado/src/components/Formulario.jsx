import { useState } from "react";

function Formulario({ onAdicionar }) {
  // O texto digitado é estado LOCAL: só o formulário precisa dele
  const [texto, setTexto] = useState("");

  const enviar = (e) => {
    e.preventDefault();               // não recarrega a página
    if (texto === "") return;         // não adiciona vazio

    onAdicionar(texto);               // chama a função do pai
    setTexto("");                     // limpa a caixa
  };

  return (
    <form onSubmit={enviar}>
      <input
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite um item"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default Formulario;