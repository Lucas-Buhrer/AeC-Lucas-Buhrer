import express from 'express'

const app = express();

app.get("/categorias/:categoria/produtos", (req, res) => {
    const categoria = req.params.categoria;
    const marca = req.query.marca;
    res.status(200).send(`Categoria: ${categoria} | Marca: ${marca}`);
});

app.listen(3000)
