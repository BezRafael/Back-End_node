const express = require('express'); //importando o módulo express
const app = express(); //atribuindo a função express a uma constante

//importando o arquivo "rota_filmes" que contém as rotas
const rota_filmes = require('./rotas/rota_filmes');


//middleware que permite o uso do JSON  
app.use(express.json());

app.use('/', rota_filmes)
app.use('/filme', rota_filmes)
app.use('/filmes', rota_filmes)


//configurando o servidor
app.listen(3000, () => {
    console.log('Iniciando Processos... Servidor Rodando! http://localhost:3000');
});