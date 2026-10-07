import express from 'express'

const app = express();
app.use(express.json());

app.post("/produtos", (req, res) => {
    const nome = req.body.nome;
    const preco = req.body.preco;
    const estoque = req.body.estoque;

    console.log(`Produto: ${nome}`);
    console.log(`Preço: ${preco}`);
    console.log(`Estoque: ${estoque}`);
    res.status(201).send(`Produto ${nome} cadastrado com sucesso!`);
});

app.listen(3000)