// 1 Primeiro passo
// npm init -y
// Rodar esse comando basicamente está dizendo “npm, 
// inicialize pra mim um projeto nessa pasta com os seus 
// valores pré-definidos”

// 2 package.json e import
// será criado um arquivo chamado package.json no seu projeto
// Para utilizar a maneira mais recente o import, precisamos que o valor da 
// variável “type” no package.json seja “module”.

// 3 instalar o Express
// npm install express
// um diretório e um arquivo adicional são criados no seu projeto
// node_modules e o package-lock.json

// 4
// Criar um arquivo .js (index.js / script.js)

// 5
// Adicionar no arquivo 
// import express from 'express'

// 6 Criar uma instancia
// const app = express();
// Com isso estamos dizendo “a minha constante app se trata de uma instância do express”.

// 7 Mapeando rota
// app.get("/hello", (req, res) => { //a passagem de req e res é uma particularidade do express
// res.send("Hello World!"); //estamos retornando a mensagem desejada
// });

// 8 Definindo porta a ser ouvida
// vamos usar o método listen do express.
// const PORT = 3000;
// app.listen(PORT, () => {
// console.log(`API rodando na porta ${PORT}`); //apenas uma mensagem para verificar que a API está rodando
// });
// ou
// app.listen(3000);

// 9 Executar a API no terminal
// node ./index.js

// NA WEB http://localhost:3000/hello

// EXEMPLO:

// 5
import express from 'express'

// 6
const app = express();

// 7
app.get("/hello", (req, res) => { //a passagem de req e res é uma particularidade do express
res.send("Hello World!"); //estamos retornando a mensagem desejada
});

// 8
const PORT = 3000;
app.listen(PORT, () => {
console.log(`API rodando na porta ${PORT}`); //apenas uma mensagem para verificar que a API está rodando
});
// OU
// app.listen(3000);


// Resumo:
// npm init -y
// package.json > Type > module
// npm install express
// Criar arquivo .js

// import express from 'express'
// const app = express();

// app.get("/hello", (req, res) => { //a passagem de req e res é uma particularidade do express
// res.send("Hello World!"); //estamos retornando a mensagem desejada
// });

// app.listen(3000);
// node ./index.js
// http://localhost:3000/hello