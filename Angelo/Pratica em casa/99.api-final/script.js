import express from 'express'

const app = express();
app.use(express.json());

const reservas = [];

app.get("/reservas", (req, res) => {
    res.send(reservas);
});
app.post("/reservas", (req, res) => {
    const id = reservas.length + 1;
    const { nome, descricao } = req.body;
    const novaReserva = {
        id, nome, descricao
    }
    reservas.push(novaReserva);
    res.status(201).send(`Reserva no nome de ${nome} criada com sucesso!`)
});
app.delete("/reservas/:id", (req, res) => {
    const id = Number(req.params.id);
    const buscaReservaId = reservas.findIndex(reserva => (reserva.id === id))
    if (buscaReservaId === -1) {
        return res.status(404).send("Reserva não encontrada!")
    }
    reservas.splice(buscaReservaId, 1);
    res.status(200).send("Reserva Cancelada!")
});

app.listen(3000);



// JSON
// {
//     "nome": "João",
//     "descricao": "Mesa para 4 pessoas"
// }