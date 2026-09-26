import express from 'express'

const app = express();

app.get("/livros", (req, res) => {
    res.status(200).send("Livros disponíveis");
    console.log("Nova Requisição")
    console.log(req.method);
    console.log(req.url);
});

app.post("/livros", (req, res) => {
    res.status(201).send("Livro cadastrado com sucesso");
    console.log("Nova Requisição")
    console.log(req.method);
    console.log(req.url);    
});

app.delete("/livros", (req, res) => {
    res.status(200).send("Livro removido com sucesso");
    console.log("Nova Requisição")
    console.log(req.method);
    console.log(req.url);    
});

app.listen(3000);