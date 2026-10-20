import express from 'express'

const app = express();
app.use(express.json());

const alunos = [];

app.post("/alunos", (req, res) => {
    const { nome, idade } = req.body;
    if (!nome || !nome.trim()) {
        return res.status(400).send("Nome é obrigatório");
    }
    if (idade === undefined) {
        return res.status(400).send("Idade é obrigatória");
    }
    const id = alunos.length + 1;
    const novoAluno = {
        id,
        nome,
        idade
    };
    alunos.push(novoAluno);
    res.status(201).send(`Aluno ${nome} cadastrado com sucesso`);
});

app.listen(3000);