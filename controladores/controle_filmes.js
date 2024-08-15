let filmes = [];


//Função exportada que exibe a tela inicial
exports.tela_Inicial = (req, res) => {
    res.send('Bem Vindo a Tela Inicial!')
}

//Função exportada que cadastra os filmes
exports.cadastrar_filme = (req, res) => {

    //input do usuário será armazenado numa constante 
    const {id, titulo_original, titulo_br, diretor, ano} = req.body

    //verificando se os campos não estão vazios
    if(!id || !titulo_original || !titulo_br || !diretor || !ano){
        res.status(400).send('Preencha Todos os Campos!');
    }

    //armazenando o input do usuário em um objeto
    let filme = {
        id,
        titulo_original,
        titulo_br,
        diretor,
        ano
    };

    //enviando o objeto para o array
    filmes.push(filme);

    //exibindo status 'sucesso'
    res.status(201).send('Filme Cadastrado!');
};

//Função exportada que exibe os filmes cadastrados
exports.exibir_filmes = (req, res) => {
    res.send(filmes);
};


//Função exportada que busca o filme por ID
exports.procurar_filme = (req, res) => {

    //armazenando o input do usuário numa variável
    var input_usuario = req.params.id;

    //varíável que vai realizar uma busca no array e comparar com o input do usuário
    var busca = filmes.find((filme) => filme.id === input_usuario);


    //realizando uma verificação se o usuário adicionou algum parâmetro
    if (!busca) {
        res.status(404).send('Filme não Encontrado!');
    }else{
        res.status(200).send(busca);
    }
};

//Função exportada que deleta o filme por ID
exports.remover_filme = (req, res) => {

    //armazenando o input do usuário em uma variável
    var input_usuario = req.params.id;


    //varíável que vai realizar uma busca no array e comparar com o input do usuário
    var busca = filmes.find((filme) => filme.id === input_usuario);


    //realizando uma verificação se o usuário adicionou algum parâmetro
    if (!busca) {
        res.status(404).send('Filme não Encontrado!');
    }else{
        filmes.splice(busca, 1);
        res.status(200).send('Filme Deletado.');
    }

};