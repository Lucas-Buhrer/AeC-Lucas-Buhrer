// ============================================================
// 1. IMPORTAÇÃO: traz o useState do React. Sem isso, dá erro.
// ============================================================
import { useState } from "react";

function App() {
  // ==========================================================
  // 2. ESTADOS (sempre no topo da função, nunca dentro de if ou laço)
  // ==========================================================

  // texto = o que está digitado na caixa. Começa vazio ("").
  const [texto, setTexto] = useState("");

  // tarefas = a lista inteira. Começa como array vazio ([]).
  const [tarefas, setTarefas] = useState([]);

  // ==========================================================
  // 3. CREATE (criar): adiciona uma tarefa na lista
  // ==========================================================
  const adicionar = (e) => {
    e.preventDefault(); // impede o formulário de recarregar a página

    if (texto === "") {
      return; // validação: texto vazio, para aqui e não adiciona nada
    }

    // cria a "ficha" da tarefa: id único, o texto digitado e feita começa false
    const nova = { id: crypto.randomUUID(), texto: texto, feita: false };

    // array NOVO: tudo que já tinha (...tarefas) + a nova no final
    setTarefas([...tarefas, nova]);

    setTexto(""); // limpa a caixa de texto
  };

  // ==========================================================
  // 4. DELETE (remover): tira uma tarefa pelo id
  // ==========================================================
  const remover = (id) => {
    // confirm abre a caixinha "OK / Cancelar". Se cancelar, o return para tudo.
    if (!confirm("Apagar esta tarefa?")) return;

    // filter mantém só quem tem id DIFERENTE do clicado (escreve-se quem FICA)
    setTarefas(tarefas.filter((t) => t.id !== id));
  };

  // ==========================================================
  // 5. UPDATE (editar): marca/desmarca como feita
  // ==========================================================
  const alternar = (id) => {
    setTarefas(
      // map percorre TODAS as tarefas e devolve uma lista nova
      tarefas.map((t) =>
        // se for a tarefa clicada: devolve uma CÓPIA com feita invertido
        // (...t copia id e texto; feita: !t.feita sobrescreve só o feita)
        // se não for: devolve a tarefa do jeito que está
        t.id === id ? { ...t, feita: !t.feita } : t
      )
    );
  };

  // ==========================================================
  // 6. VALOR CALCULADO: conta quantas tarefas têm feita === true.
  // Fica fora do return e recalcula sozinho a cada redesenho.
  // ==========================================================
  const concluidas = tarefas.filter((t) => t.feita).length;

  // ==========================================================
  // 7. O QUE APARECE NA TELA (JSX)
  // ==========================================================
  return (
    <div>
      {/* FORMULÁRIO: onSubmit no form, assim o Enter também envia */}
      <form onSubmit={adicionar}>
        {/* input controlado: value mostra o estado, onChange grava o que digita */}
        <input value={texto} onChange={(e) => setTexto(e.target.value)} />
        {/* type="submit" faz o botão disparar o onSubmit do form */}
        <button type="submit">Adicionar</button>
      </form>

      {/* RENDERIZAÇÃO CONDICIONAL com &&: aparece só se a condição for true */}
      {/* Compara com === 0 para evitar a armadilha de imprimir o número 0 */}
      {tarefas.length === 0 && <p>Nenhuma tarefa ainda.</p>}

      {/* Só mostra o contador se tiver pelo menos 1 tarefa (> 0, não só length) */}
      {tarefas.length > 0 && (
        <p>{concluidas} de {tarefas.length} concluídas</p>
      )}

      {/* READ (listar): map transforma cada tarefa em um <li> */}
      <ul>
        {tarefas.map((t) => (
          // key = crachá do item, usando o id (único e estável)
          <li key={t.id}>
            {/* ternário no estilo: feita? riscado : normal */}
            <span style={{ textDecoration: t.feita ? "line-through" : "none" }}>
              {t.texto}
            </span>

            {/* tem argumento (t.id), então precisa da setinha () => */}
            {/* ternário no texto do botão: feita? "Desfazer" : "Concluir" */}
            <button onClick={() => alternar(t.id)}>
              {t.feita ? "Desfazer" : "Concluir"}
            </button>

            {/* mesma regra: setinha por causa do argumento */}
            <button onClick={() => remover(t.id)}>Apagar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 8. EXPORTAÇÃO: sem isso, o main.jsx não consegue usar o App (tela em branco)
export default App;


// ############################################################
// ##          COLA DE ÚLTIMA HORA (DECORE ISTO)             ##
// ############################################################

// ------------------------------------------------------------
// A) AS 3 OPERAÇÕES DO CRUD (nenhuma altera o array existente,
//    todas montam um array NOVO e entregam para o set)
// ------------------------------------------------------------

// CRIAR   -> spread: tudo que já tinha + o novo
//   setTarefas([...tarefas, nova]);

// REMOVER -> filter: escreve quem FICA (id diferente do clicado)
//   setTarefas(tarefas.filter((t) => t.id !== id));

// EDITAR  -> map + ternário: troca só o escolhido, os outros intactos
//   setTarefas(tarefas.map((t) => t.id === id ? { ...t, campo: novo } : t));

// ------------------------------------------------------------
// B) TABELA "ERRADO -> CERTO"
// ------------------------------------------------------------
//   tarefas.push(nova)             ->  setTarefas([...tarefas, nova])
//   splice / delete                ->  filter
//   tarefas[i].campo = x           ->  map + ternário
//   objeto.campo = x               ->  { ...objeto, campo: x }
//   total = total + 1              ->  setTotal(total + 1)
//   depende do valor anterior      ->  setTotal((anterior) => anterior + 1)

// ------------------------------------------------------------
// C) A REGRA DA SETINHA (onClick)
// ------------------------------------------------------------
//   onClick={somar()}        ERRADO: executa ao desenhar a tela
//   onClick={somar}          CERTO: sem argumento, passa a função direto
//   onClick={somar(5)}       ERRADO: executa ao desenhar a tela
//   onClick={() => somar(5)} CERTO: com argumento, usa a setinha
//   Sintoma do erro: a ação acontece sozinha ao abrir a página.

// ------------------------------------------------------------
// D) INPUT CONTROLADO
// ------------------------------------------------------------
//   <input value={texto} onChange={(e) => setTexto(e.target.value)} />
//   value e onChange SEMPRE juntos. Sem onChange, a caixa trava.
//   e.target.value = o que está escrito na caixa agora.
//   Limpar a caixa = setTexto("")
//   Checkbox usa: checked={x} e e.target.checked (não value)

// ------------------------------------------------------------
// E) FORMULÁRIO
// ------------------------------------------------------------
//   <form onSubmit={funcao}>   (no form, não no botão: o Enter também envia)
//   <button type="submit">
//   e.preventDefault() na primeira linha da função (evita recarregar)

// ------------------------------------------------------------
// F) KEY E CONDICIONAIS
// ------------------------------------------------------------
//   key={item.id} no elemento de FORA do map (no App, não dentro do Card)
//   key: único e estável. Nunca índice, nunca Math.random()
//   dois lados (um OU outro):  {cond ? "A" : "B"}
//   só aparece ou some:        {cond && <p>texto</p>}
//   condição que é número:     {lista.length > 0 && ...}  (NUNCA só length)
//   lista vazia com aviso:     {lista.length === 0 ? <p>Vazio</p> : lista.map(...)}
//   classe condicional:        className={cond ? "card" : "card esgotado"}

// ------------------------------------------------------------
// G) useState
// ------------------------------------------------------------
//   import { useState } from "react";
//   const [valor, setValor] = useState(valorInicial);
//   NUNCA: valor = 5.  SEMPRE: setValor(5)
//   Sempre no TOPO da função, nunca dentro de if ou laço
//   O valor novo