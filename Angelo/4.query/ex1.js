import express from 'express'

const app = express();

app.get("/produtos", (req, res) => {
    const categoria = req.query.categoria;
    res.send(`Categoria pesquisada: ${categoria}`)
});

app.listen(3000)