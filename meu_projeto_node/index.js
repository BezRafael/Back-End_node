const express = require('express'); //importando o express
const app = express(); //atribuindo o express a uma contante

//importando o arquivo "rota_filmes" que contém as rotas
const rota_filmes = require('./rotas/rota_filmes');

app.use(express.json());

app.use('/', rota_filmes)
app.use('/filme', rota_filmes)
app.use('/filmes', rota_filmes)


app.listen(3000, () => {
    console.log('Iniciando Processos... Servidor Rodando! http://localhost:3000');
});