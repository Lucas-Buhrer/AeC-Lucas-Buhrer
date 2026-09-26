import express from 'express'

const app = express();

app.get("/alunos", (req, res) => {
    res.send("Lista de alunos")
});
app.get("/alunos/:id", (req, res) => {
    const idAluno = req.params.id;
    res.send(`Aluno solicitado: ${idAluno}`)
});
app.listen(3000);