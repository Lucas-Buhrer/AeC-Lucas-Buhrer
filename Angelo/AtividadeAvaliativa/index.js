import express from 'express'

const app = express();
app.use(express.json());

let pets = [
    {
        "idPet": 1,
        "dsNome": "Rex",
        "dsEspecie": "cachorro",
        "nuIdade": 3,
        "fgAdotado": false
    },
        {
        "idPet": 2,
        "dsNome": "Bob",
        "dsEspecie": "cachorro",
        "nuIdade": 6,
        "fgAdotado": false
    },
        {
        "idPet": 3,
        "dsNome": "Mico",
        "dsEspecie": "gato",
        "nuIdade": 2,
        "fgAdotado": false
    }
]

let ultimoId = 3;

// FUNCOES ----------------------------------------
function findAll() {
  return pets;
}

function findOne(id) {
  let pet = pets.find((pet) => {
    return pet.idPet === id;
  });

  return pet;
}

function criarPet(nome, especie, idade) {
  let novoId = ultimoId + 1;
  ultimoId++;

  let novo_pet = {
    idPet: novoId,    
    dsNome: nome,
    dsEspecie: especie,
    nuIdade: idade,
    fgAdotado: false,
  };

  pets.push(novo_pet);
  return novo_pet;
}

function deletarPet(id) {
  let index_pet = pets.findIndex((pet) => {
    return pet.idPet === id;
  });

  pets.splice(index_pet, 1);
}

function editarPet(id) {
    let index_pet = pets.findIndex((pet) => {
    return pet.idPet === id;
  });
}

// FIM FUNCOES ------------------------------------

// ROTAS ------------------------------------------
// Buscar todos os pets
app.get("/pets", (req,res) => {
    const todosOsPets = findAll();
    res.json(todosOsPets);
});

// Buscar pet por ID
app.get("/pets/:id", (req,res) => {
    const idDoPet = parseInt(req.params.id);

    if (isNaN(idDoPet)) {
        return res
        .status(400)
        .json({ mensagem: "identificador deve ser um numero" });
    }

    let pet = findOne(idDoPet);

    if (!pet) {
        return res.status(404).send();
    }

    res.json(pet);
});

// Adicionar Pet
app.post("/pets", (req,res) => {
    let nome_enviado = req.body.dsNome;
    let especie_enviado = req.body.dsEspecie;
    let idade_enviada = parseInt(req.body.nuIdade);

    if (!nome_enviado || !especie_enviado) {
        return res
        .status(400)
        .json({ mensagem: "dados faltando, verifique nome, especie e idade" });
    }
    if (typeof idade_enviada !== "number" || idade_enviada <= 0) {
        return res
        .status(400)
        .json({ mensagem: "idade precisa ser numero OU um numero maior que 0" });
    }

    let pet_criado = criarPet(especie_enviado, nome_enviado, idade_enviada);
    if (!pet_criado) {
        return res.status(500).json({ mensagem: "algo deu errado" });
    }

    return res.status(201).json(pet_criado);
});

// Deletar pets
app.delete("/pets/:id", (req, res) => {
  const idDoPet = parseInt(req.params.id);

  if (isNaN(idDoPet)) {
    return res
      .status(400)
      .json({ mensagem: "identificador deve ser um numero" });
  }

  let pet = findOne(idDoPet);
  if (!pet) {
    return res.status(404).send();
  }

  deletarPet(idDoPet);
  return res.status(204).send();
});



// Editar pets
app.patch("/pets/:id", (req,res) => {
    const idDoPet = parseInt(req.params.id);
    let novo_nome = req.body.dsNome;
    let nova_especie = req.body.dsEspecie;
    let nova_idade = req.body.nuIdade;
    let nova_adocao = req.body.fgAdotado;

    if (isNaN(idDoPet)) {
        return res
        .status(400)
        .json({ mensagem: "identificador precisa ser um numero valido" });
    }

    let pet = findOne(idDoPet);
    if (!pet) {
        return res.status(404).send();
    }

    let petSemEditar = editarPet(pet);
});

app.listen(3000);