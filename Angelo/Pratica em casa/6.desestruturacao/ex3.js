import express from 'express'

const app = express();
app.use(express.json());

app.post("/alunos", (req, res) => {
    const { nome, idade, curso} = req.body;
    res.status(201).send(`Aluno ${nome}, idade ${idade}, matriculado em ${curso}`);
});

app.listen(3000, () =>{
    console.log("API rodando na porta 3000");
});

