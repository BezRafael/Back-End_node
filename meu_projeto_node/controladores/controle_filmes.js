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
    if(!id || !titulo_original ||!titulo_br || !diretor || !ano){
        res.status(400).send('Preencha Todos os Campos!')
        return;
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