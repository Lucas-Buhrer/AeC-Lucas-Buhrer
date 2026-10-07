import express from 'express'
const app = express();
app.use(express.json());

app.post("/categorias/:categoriaId/produtos", (req, res) => {
    const { categoriaId } = req.params;
    const { destaque } = req.query;
    const { nome, preco } = req.body;

    console.log(`Categoria: ${categoriaId}`);
    console.log(`Destaque: ${destaque}`);
    console.log(`Produto: ${nome}`);
    console.log(`Preço: ${preco}`);

    res.status(201).send(`Produto ${nome} cadastrado na categoria ${categoriaId}`);
});

app.listen(3000, () => {
    console.log("API rodando na porta 3000");
});