import express from 'express'

const app = express();
app.use(express.json());

const reservas = [];

// GET - listar todas as reservas
app.get("/reservas", (req, res) => {
    res.status(200).send(reservas);
});

// GET - buscar uma reserva pelo ID
app.get("/reservas/:id", (req, res) => {

    const { id } = req.params;

    const reserva = reservas.find(
        reserva => reserva.id === Number(id)
    );

    if (!reserva) {
        return res.status(404).send("Reserva não encontrada");
    }

    res.status(200).send(reserva);
});

// POST - cadastrar reserva
app.post("/reservas", (req, res) => {

    const { nome, descricao } = req.body;

    if (!nome || !nome.trim()) {
        return res.status(400).send("Nome é obrigatório");
    }

    if (!descricao || !descricao.trim()) {
        return res.status(400).send("Descrição é obrigatória");
    }

    const id = reservas.length + 1;

    const novaReserva = {
        id,
        nome,
        descricao
    };

    reservas.push(novaReserva);

    res.status(201).send("Reserva criada com sucesso");
});

// DELETE - cancelar reserva
app.delete("/reservas/:id", (req, res) => {

    const { id } = req.params;

    const indice = reservas.findIndex(
        reserva => reserva.id === Number(id)
    );

    if (indice === -1) {
        return res.status(404).send("Reserva não encontrada");
    }

    reservas.splice(indice, 1);

    res.status(200).send("Reserva cancelada");
});

app.listen(3000, () => {
    console.log("API rodando na porta 3000");
});