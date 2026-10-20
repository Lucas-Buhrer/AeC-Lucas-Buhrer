// ============================================================
// 1. IMPORTAÇÕES
// ============================================================
import { useState } from "react";
import "./App.css"; // liga o CSS ao componente

function App() {
  // ==========================================================
  // 2. ESTADOS (sempre no topo, nunca dentro de if ou laço)
  // ==========================================================

  // Um estado para cada campo do formulário (inputs controlados)
  const [titulo, setTitulo] = useState("");
  const [genero, setGenero] = useState("acao"); // select começa em "acao"

  // Mensagem de erro da validação ("" = sem erro)
  const [erro, setErro] = useState("");

  // A lista inteira de filmes. Começa vazia.
  const [filmes, setFilmes] = useState([]);

  // ==========================================================
  // 3. CREATE: adicionar um filme
  // ==========================================================
  const adicionar = (e) => {
    e.preventDefault(); // impede a página de recarregar ao enviar o form

    // Validação: trim() tira espaços, assim "   " também conta como vazio
    if (titulo.trim() === "") {
      setErro("Digite o título do filme.");
      return; // interrompe a função: nada é adicionado
    }

    setErro(""); // deu certo, limpa o erro anterior

    // Cria a "ficha" do filme. O id nasce junto e nunca muda.
    const novo = {
      id: crypto.randomUUID(),
      titulo: titulo,
      genero: genero,
      assistido: false, // todo filme novo começa como "não assistido"
    };

    // Array NOVO: tudo que já tinha (...filmes) + o novo no final
    setFilmes([...filmes, novo]);

    setTitulo(""); // limpa a caixa de texto
    setGenero("acao"); // volta o select ao valor inicial
  };

  // ==========================================================
  // 4. DELETE: remover um filme pelo id
  // ==========================================================
  const remover = (id) => {
    // confirm abre "OK / Cancelar". Se cancelar, o return para tudo.
    if (!confirm("Remover este filme?")) return;

    // filter escreve QUEM FICA: todos com id DIFERENTE do clicado
    setFilmes(filmes.filter((filme) => filme.id !== id));
  };

  // ==========================================================
  // 5. UPDATE: marcar / desmarcar como assistido
  // ==========================================================
  const alternarAssistido = (id) => {
    setFilmes(
      // map percorre TODOS e devolve uma lista nova
      filmes.map((filme) =>
        // é o filme clicado? devolve uma CÓPIA com assistido invertido
        // ({ ...filme } copia tudo; assistido: !filme.assistido sobrescreve só ele)
        // não é? devolve o filme do jeito que está
        filme.id === id ? { ...filme, assistido: !filme.assistido } : filme
      )
    );
  };

  // ==========================================================
  // 6. VALORES CALCULADOS (não precisam de useState)
  // Recalculam sozinhos a cada redesenho.
  // ==========================================================
  const assistidos = filmes.filter((filme) => filme.assistido).length;
  const faltam = filmes.length - assistidos;

  // ==========================================================
  // 7. O QUE APARECE NA TELA (JSX)
  // ==========================================================
  return (
    <div className="container">
      <h1>🎬 Meus Filmes</h1>

      {/* FORMULÁRIO: onSubmit no <form>, assim o Enter também envia */}
      <form className="formulario" onSubmit={adicionar}>
        {/* input controlado: value mostra o estado, onChange grava o que digita */}
        <input
          placeholder="Título do filme"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        {/* select: o value vai no <select>, NÃO no <option> */}
        <select value={genero} onChange={(e) => setGenero(e.target.value)}>
          <option value="acao">Ação</option>
          <option value="comedia">Comédia</option>
          <option value="drama">Drama</option>
          <option value="terror">Terror</option>
        </select>

        <button type="submit">Adicionar</button>

        {/* && : a mensagem só aparece quando erro NÃO é string vazia */}
        {erro && <p className="erro">{erro}</p>}
      </form>

      {/* Contador: > 0 evita a armadilha de imprimir o número 0 na tela */}
      {filmes.length > 0 && (
        <p className="resumo">
          {assistidos} assistido(s) · {faltam} para assistir
        </p>
      )}

      {/* LISTA VAZIA: ternário com mensagem. Tela em branco parece defeito. */}
      {filmes.length === 0 ? (
        <p className="vazio">Nenhum filme na lista.</p>
      ) : (
        // READ (listar): map transforma cada filme em um <li>
        <ul className="lista">
          {filmes.map((filme) => (
            // key = crachá do item. Usa o id (único e estável), nunca o índice.
            // Classe condicional: assistido ganha a classe extra "filme-assistido"
            <li
              key={filme.id}
              className={filme.assistido ? "filme filme-assistido" : "filme"}
            >
              <div className="info">
                <strong>{filme.titulo}</strong>
                <span className="genero">{filme.genero}</span>

                {/* && : o selo só aparece se assistido for true */}
                {filme.assistido && <span className="selo">Assistido</span>}
              </div>

              <div className="acoes">
                {/* Tem argumento (filme.id), então precisa da setinha () => */}
                <button onClick={() => alternarAssistido(filme.id)}>
                  {/* ternário no texto do botão */}
                  {filme.assistido ? "Desmarcar" : "Já assisti"}
                </button>

                {/* mesma regra: argumento = setinha */}
                <button className="perigo" onClick={() => remover(filme.id)}>
                  Remover
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// 8. EXPORTAÇÃO: sem isso o main.jsx não acha o App (tela em branco)
export default App;