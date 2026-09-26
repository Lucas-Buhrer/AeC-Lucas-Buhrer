import express from 'express'

const app = express();

app.get("/produtos/:id", (req, res) => {
    const idProduto = req.params.id;
    res.status(200).send(`Produto ${idProduto} encontrado.`);
    console.log("Método: " + req.method);
    console.log("ID: " + req.params.id);
});
app.delete("/produtos/:id", (req, res) => {
    const idProduto = req.params.id;
    res.status(200).send(`Produto ${idProduto} excluído.`)
    console.log("Método: " + req.method);
    console.log("ID: " + req.params.id);    
});
app.listen(3000);