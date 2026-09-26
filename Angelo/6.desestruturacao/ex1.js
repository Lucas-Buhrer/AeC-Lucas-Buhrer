import express from 'express'

const app = express();
app.use(express.json());

const produto = {
    nome: "Teclado",
    preco: 89.90
};

const { nome, preco} = produto;
console.log(nome);
console.log(preco);

app.listen(3000);