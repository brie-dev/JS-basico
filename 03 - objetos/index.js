// AO INVES DE TER UMA VARIAVEL PARA NOME, IDADE, ETC. PQ NAO COLOCAMOS TUDO EM UMA VARIAVEL SÓ? ATRAVES DE UM OBJETO

let pessoa = {
    nome: 'Gabrielle',
    idade: 18
};

// ACESSAR PROPRIEDADES
console.log(pessoa.nome);

// ADICIONAR PROPRIEDADES
pessoa.profissao = 'Estágiaria do cargo de Desenvolvedor Front-end'

// FORMAS DE MUDAR ALGUMA INFORMAÇÃO DO OBJETO - DOT NOTATION 
pessoa.nome = 'Janaina';

// FORMAS DE MUDAR ALGUMA INFORMAÇÃO DO OBJETO - BRACKET NOTATION 
pessoa['nome'] = 'Graziele';
console.log(pessoa)