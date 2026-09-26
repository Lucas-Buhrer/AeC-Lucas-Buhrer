import express from 'express'

const app = express();
app.use(express.json());

const aluno = {
    nome: "Lucas",
    idade: 33,
    curso: "JavaScript",
    cidade: "Dois Vizinhos"
};

const { nome, curso, cidade} = aluno;

console.log(nome);
console.log(curso);
console.log(cidade);

app.listen(3000, () =>{
    console.log("API rodando na porta 3000");
});
