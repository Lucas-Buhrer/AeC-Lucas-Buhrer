import express from 'express'

const app = express();

app.get("/alunos/:alunoId/cursos/:cursoId", (req, res) => {
    const alunoId = req.params.alunoId;
    const cursoId = req.params.cursoId;
    console.log(`Método: ${req.method}`);
    console.log(`Aluno: ${alunoId}`);
    console.log(`Curso: ${cursoId}`);

    res.send(`Aluno ${alunoId} solicitou o curso ${cursoId}`);
});

app.listen(3000);