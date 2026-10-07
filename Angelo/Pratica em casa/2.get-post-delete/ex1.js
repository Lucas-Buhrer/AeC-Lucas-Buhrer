import express from 'express'

const app = express();

app.get("/produtos", (req, res) => {
    res.status(200).send("Lista de produtos")
});

app.post("/produtos", (req, res) => {
    res.status(201).send("Produto cadastrado")
});

app.delete("/produtos", (req, res) => {
    res.status(200).send("Produto excluido")
});



app.listen(3000);