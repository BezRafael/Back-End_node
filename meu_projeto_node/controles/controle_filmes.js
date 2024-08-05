//array filmes
let filmes = [];

//objeto filme
let filme = {
    id,
    titulo,
    titulo_br,
    diretor,
    ano
};

//função cadastrar filme
exports.cadastrar_filme = (req, res) => {
    const {id, titulo, titulo_br, diretor, ano} = req.body; //Armazenando os dados preenchidos pelo usuário

    //Realizando a verificação se os dados estão preenchidos
    if(!id || !titulo || !titulo_br || !diretor || !ano) {
     return res.status(400).send('Preencha Todos os Campos!');
    }

    filmes.push(filme);

    res.status(201).send('Filmes Cadastrado!');
};

//função mostrar filmes cadastrados
exports.mostrar_filmes = (req, res) => {
    res.send(filmes);
};

