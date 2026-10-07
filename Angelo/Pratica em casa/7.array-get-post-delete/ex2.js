import express from 'express'

const app = express();
app.use(express.json());

const produtos = [];

app.get("/produtos", (req, res) => {
    console.log("Consulta de produtos cadastrados")
    res.status(200).send(produtos);
});

app.post("/produtos", (req, res) => {
    const id = produtos.length + 1;
    const { nome, preco } = req.body;
    const novoProduto = {
        id,
        nome,
        preco
    }
    produtos.push(novoProduto);
    res.status(201).send("Produto criado e adicionado a lista");
});

app.delete("/produtos/:id", (req, res) => {
    const id = Number(req.params.id);
    const buscaIndice = produtos.findIndex(produtos => (produtos.id === id));
    if (buscaIndice === -1) {
        return res.status(404).send("Produto não encontrado");
    }
    
    produtos.splice(buscaIndice, 1);
    res.status(200).send("Produto excluido")
});

app.listen(3000);