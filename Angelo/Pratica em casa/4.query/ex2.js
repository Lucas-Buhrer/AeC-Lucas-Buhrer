import express from 'express'

const app = express();

app.get("/produtos", (req, res) => {
    const categoria = req.query.categoria;
    const marca = req.query.marca;
    console.log(`Categoria: ${categoria}`);
    res.send(`Marca: ${marca}`);
});

app.listen(3000)