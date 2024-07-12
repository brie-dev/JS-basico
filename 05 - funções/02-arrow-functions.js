//  As arrow functions são uma forma alternativa e mais concisa de escrever funções. Elas são especialmente úteis para funções simples

// FUNÇÃO TRADICIONAL
function saudacao(nome) {
    console.log(`Olá, ${nome}`);
}
saudacao('Gabrielle')

// ARROW FUNCTION
const ultimoNome = (sobrenome) => `Seu sobrenome é ${sobrenome}`;  
console.log(ultimoNome('Rodrigues'));