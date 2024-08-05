const express = require('express'); //importando o express
const rota = express(); //atribuindo o express a uma contante

//importando o arquivo "controle_filmes" que contém funções
const controle_filme = require('../controladores/controle_filmes'); 


//Rota GET (Tela inicial)
rota.get('/', controle_filme.tela_Inicial);

//Rota POST (Cadastrar Filme)
rota.post('/filme', controle_filme.cadastrar_filme);

//Rota GET (Exibir Filmes)
rota.get('/filmes', controle_filme.exibir_filmes);


//Exportando a constante
module.exports = rota;