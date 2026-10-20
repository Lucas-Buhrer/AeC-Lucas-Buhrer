import { useState } from "react";

// Recebe a função "onAdicionar" por props (desestruturada nas chaves)
function FormularioLivro({ onAdicionar }) {
  // Um estado para cada campo (inputs controlados)
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [erro, setErro] = useState("");

  const enviar = (e) => {
    e.preventDefault(); // não deixa a página recarregar

    // Validação: se algum campo estiver vazio, mostra erro e para
    if (titulo.trim() === "" || autor.trim() === "") {
      setErro("Preencha o título e o autor.");
      return;
    }

    setErro(""); // limpa o erro anterior
    onAdicionar(titulo, autor); // chama a função do pai (App)
    setTitulo(""); // limpa os campos
    setAutor("");
  };

  return (
    <form className="formulario" onSubmit={enviar}>
      <input
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <input
        placeholder="Autor"
        value={autor}
        onChange={(e) => setAutor(e.target.value)}
      />
      <button type="submit">Adicionar</button>

      {/* Só aparece se erro não for string vazia */}
      {erro && <p className="erro">{erro}</p>}
    </form>
  );
}

export default FormularioLivro;