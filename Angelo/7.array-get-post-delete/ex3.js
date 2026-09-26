import express from 'express'

const app = express();
app.use(express.json());

const produtos = [];

app.get("/categorias/:categoriasId/produtos", (req, res) => {
    console.log(produtos);
    const consultaCategoria = produtos.filter(produtos => (produtos.categoriasId === req.params.categoriasId));
    return res.send(consultaCategoria)
});

app.post("/categorias/:categoriasId/produtos", (req, res) => {
    const id = produtos.length + 1;
    const { categoriasId } = req.params;
    const { nome, preco } = req.body;
    const novoProduto = {
        id,
        categoriasId,
        nome,
        preco
    }
    produtos.push(novoProduto);
    res.status(201).send("Produto adicionado!")
});

app.delete("/categorias/:categoriasId/produtos/:id", (req, res) => {
    const { categoriasId, id } = req.params;
    const buscaIndice = produtos.findIndex(produtos => (produtos.id === Number(id) && produtos.categoriasId === categoriasId));
    if (buscaIndice === -1) {
        return res.status(404).send("Produto não encontrado");
    }
    
    produtos.splice(buscaIndice, 1);
    res.status(200).send("Produto excluido")
});

app.listen(3000);