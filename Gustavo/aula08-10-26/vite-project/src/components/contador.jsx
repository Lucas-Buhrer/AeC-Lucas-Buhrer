import { useState } from "react";

export default function Contador() { 
  const [total, setTotal] = useState(0);

  function somar(valor) {
    setTotal((anterior) => anterior + valor);
  }

  return (
    <section>
      <h2>Contador</h2>
      <p>Total: {total}</p>

      <button onClick={() => somar(1)}>Somar +1</button>
      <button onClick={() => setTotal(0)}>Zerar</button>
    </section>
  );
}