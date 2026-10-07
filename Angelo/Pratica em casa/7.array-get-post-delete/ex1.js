import express from 'express'

const app = express();
app.use(express.json());

const alunos = [];

app.get("/alunos", (req, res) => {
    res.status(200).send(alunos);
});

app.post("/alunos", (req, res) => {
    const id = alunos.length + 1;
    const { nome, idade } = req.body;
    const novoAluno = {
        id,
        nome,
        idade
    }

    alunos.push(novoAluno);
    res.status(201).send(`Aluno ${nome} criado com sucesso!`)

});

app.listen(3000);