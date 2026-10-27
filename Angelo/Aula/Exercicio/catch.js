import express from 'express'

const app = express();

let carros = [
    {id: 1, modelo: "corsa"},
    {id: 1, modelo: "gol"},
    {id: 1, modelo: "ka"},
]

try {
    let carro = carros.find((c) => carros.modelo === "corsa");
}

app.listen(3000);