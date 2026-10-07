import express from 'express'

const app = express();

app.get("/reservas", (req, res) => {
    res.send("Lista de reservas");
    console.log(req.method);
    console.log(req.url);
});

app.post("/reservas", (req, res) => {
    res.send("Reserva cadastrada");
    console.log(req.method);
    console.log(req.url);    
});

app.delete("/reservas", (req, res) => {
    res.send("Reserva cancelada");
    console.log(req.method);
    console.log(req.url);    
});


app.listen(3000);