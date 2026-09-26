import express from 'express'

const app = express();
app.use(express.json());

    app.post("/categorias/:categoriaId/produtos", (req, res) => {
        const categoria = req.params.categoriaId;
        const nome = req.body.nome;
        const preco = req.body.preco;

        console.log(`Categoria: ${categoria}`);
        console.log(`Produto: ${nome}`);
        console.log(`Preço: ${preco}`);

        res.status(201).send(`Produto ${nome}, preço ${preco}, cadastrado na categoria ${categoria}`);
    });

app.listen(3000)
