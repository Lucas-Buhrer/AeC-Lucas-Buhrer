import express from 'express'
const app = express();

// ========== TEORIA ============ //
/* Quando alguém fizer uma requisição GET para /hello, execute essa função. 
app.get("/hello", (req, res) => { 
res.send("Hello World!"); // estamos retornando a mensagem desejada 
});
 
//============================================================  
// GET = BUSCAR/CONSULTAR ///// POST = ENVIAR/CRIAR 
// A Rota é a mesma mas a REQUISIÇÃO é diferente 
app.get("/alunos", (req, res) => {
    res.send("Buscando alunos");
});

app.post("/alunos", (req, res) => {
    res.send("Cadastrando aluno");
});

// ============================================================  
// DELETE para deletar (realy???) 
app.delete("/alunos", (req, res) => {
    res.send("Aluno excluído!");
});

// REQ É a requisição recebida. 
// RES É a resposta que vamos enviar ao cliente. 

//============================================================  
// STATUS 
app.get("/alunos", (req, res) => {
    res.status(200).send("Lista de alunos"); // 200 → requisição realizada com sucesso     
}); */


app.get("/alunos", (req, res) => {
    res.status(200).send("Lista de alunos");
});

app.post("/alunos", (req, res) => {
    res.status(201).send("Aluno criado!");
});

app.delete("/alunos", (req, res) => {
    res.status(200).send("Aluno excluído!");
});


app.listen(3000);

// node ./index.js
// http://localhost:3000/hello