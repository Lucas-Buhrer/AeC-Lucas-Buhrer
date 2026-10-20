import express from 'express'

const app = express();

app.use(express.json());

const produtos = [];

app.get("/produtos", (req, res) => {
    res.status(200).send(produtos);
});

app.get("/produtos/:id", (req, res) => {

    const buscaProduto = produtos.find(
        produto => produto.id === Number(req.params.id)
    );

    if (!buscaProduto) {
        return res.status(404).send("Produto não encontrado");
    }

    res.status(200).send(buscaProduto);
});

app.post("/produtos", (req, res) => {

    const { nome, preco } = req.body;

    if (!nome || !nome.trim()) {
        return res.status(400).send("Nome é obrigatório");
    }

    if (preco === undefined) {
        return res.status(400).send("Preço é obrigatório");
    }

    if (preco <= 0) {
        return res.status(400).send("Preço deve ser maior que zero");
    }

    const id = produtos.length + 1;

    const novoProduto = {
        id,
        nome,
        preco
    };

    produtos.push(novoProduto);

    res.status(201).send("Produto cadastrado");
});

app.delete("/produtos/:id", (req, res) => {

    const indice = produtos.findIndex(
        produto => produto.id === Number(req.params.id)
    );

    if (indice === -1) {
        return res.status(404).send("Produto não encontrado");
    }

    produtos.splice(indice, 1);

    res.status(200).send("Produto excluído");
});

app.listen(3000);