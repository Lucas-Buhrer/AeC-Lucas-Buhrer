import express from 'express'
const app = express();
app.use(express.json());

let livros = [{
    id: 1,
    nome: "Nome do autor",
    titulo: "Titulo do livro",
    disponivel: true
}];

app.patch("/livros/:id/emprestimo", (req, res) => {
    const id = parseInt(req.params.id);
    const disponibilidade = req.body.disponivel;

    if (isNaN(id)) {
        return res.status(400).send("Livro nao encontrado");
    }

    const livroIndex = livros.findIndex((livro) => livro.id === id);

    if (livroIndex === -1) {
        return res.sendStatus(404);
    }
    
    let livro_a_ser_atualizado = livros[livroIndex];

    if (disponibilidade !== undefined) {
             
        livro_a_ser_atualizado.disponivel = disponibilidade;             
    }     
    res.status(204).json("Livro Atualizado");
    console.log(livros)
});

app.patch("/livros/:id/devolucao", (req, res) => {
    const id = parseInt(req.params.id);
    const disponibilidade = req.body.disponivel;

    if (isNaN(id)) {
        return res.status(400).send("Livro nao encontrado");
    }

    const livroIndex = livros.findIndex((livro) => livro.id === id);

    if (livroIndex === -1) {
        return res.sendStatus(404);
    }
    
    let livro_a_ser_atualizado = livros[livroIndex];

    if (disponibilidade !== undefined) {
             
        livro_a_ser_atualizado.disponivel = disponibilidade;             
    }     
    res.status(204).json("Livro Atualizado");
    console.log(livros)
});

app.listen(3000);