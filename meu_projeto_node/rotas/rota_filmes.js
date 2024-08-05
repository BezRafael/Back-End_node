const express = require('express');
const rota = express.Router();

const controle_filmes = require('../controles/controle_filmes');

rota.post('/filme', controle_filmes.cadastrar_filme);
rota.get('/filmes', controle_filmes.mostrar_filmes);