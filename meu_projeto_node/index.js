const express = require('express'); //Importando o express 
const app = express(); //Atribuindo a variável express na variável app
const rota_filmes = require('./rotas/rota_filmes');


//middleware
app.use(express.json());


//Rota GET
app.get('/', (req, res) => {
    res.send('Tela Inicial');
});



app.listen(3000, () =>{
    console.log('Iniciando Processos... Processo Iniciado! http://localhost:3000');
});