// App.jsx
import { useState } from 'react'
import Card from './components/card'
import './App.css'

function App() {
  const pratos = [
    { id: 1, nome: "Risoto de camarão", preco: 48, disponivel: true },
    { id: 2, nome: "Batata frita", preco: 35, disponivel: true },
    { id: 3, nome: "Arroz Carreteiro", preco: 40, disponivel: false },
  ];

  return (
    <div>
      <h1>Cardápio</h1>
      <div className="sessaoCards">
        {pratos.map((prato) => (
          <Card key={prato.id} prato={prato} />
        ))}
      </div>
    </div>
  )
}

export default App
