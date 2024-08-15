const express = require('express'); //importando o módulo express
const rota = express(); //atribuindo a função express a uma constante

//importando o arquivo "controle_filmes" que contém funções
const controle_filme = require('../controladores/controle_filmes'); 


//Rota GET (Tela inicial)
rota.get('/', controle_filme.tela_Inicial);

//Rota POST (Cadastrar Filme)
rota.post('/filme', controle_filme.cadastrar_filme);

//Rota GET (Exibir Filmes)
rota.get('/filmes', controle_filme.exibir_filmes);

//Rota GET (Procurar Filme)
rota.get('/filme/:id', controle_filme.procurar_filme);

//Rota DELETE (Deletar Filme)
rota.delete('/filme/:id', controle_filme.remover_filme);


//Exportando a constante
module.exports = rota;