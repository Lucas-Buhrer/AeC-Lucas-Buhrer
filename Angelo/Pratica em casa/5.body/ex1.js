import express from 'express'

const app = express();
app.use(express.json());

app.post("/alunos", (req, res) => {
    const nome = req.body.nome;
    const idade = req.body.idade;
    res.status(201).send(`Aluno ${nome} cadastrado com idade ${idade}`);
    
});

app.listen(3000, () => {
    console.log("API rodando na porta 3000");
});