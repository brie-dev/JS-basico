// ARRAY É UMA ESTRUTURA DE DADOS QUE USAMOS PARA REPRESENTAR UMA LISTA DE ITENS

let coresSelecionadas = ['vermelho', 'azul'];
console.log(coresSelecionadas)

// PARA SELECIONAR UMA DAS CORES
console.log(coresSelecionadas[0])

// PARA ADICIONAR MAIS UMA COR
coresSelecionadas[2] = 'verde'
// ou
coresSelecionadas.push('amarelo')
console.log(coresSelecionadas)

// PARA REMOVER O ULTIMO ELEMENTO DO ARRAY E RETORNAR ESSE ELEMENTO
let ultimoElemento = coresSelecionadas.pop()
console.log(ultimoElemento)

// CRIAR UM NOVO ARRAY COM OS RESULTADOS DE UMA FUNÇÃO PARA CADA ELEMENTO DO ARRAY ORIGINAL
let numeros = [1, 2, 3];
let duplicados = numeros.map(num => num * 2);
console.log(duplicados)

// VER ELEMENTOS
console.log(coresSelecionadas.length)

