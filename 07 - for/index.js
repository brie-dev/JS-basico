//  I RECEBE 1, SE FOR MENOR QUE 5, ELE VAI RECEBER MAIS UM ATÉ FICAR IGUAL A 5 | HELLO WORLD IRÁ SE REPETIR 5 VEZES
for (let i = 1; i <= 5; i++) {
    console.log('Hello World', i);
}

// I RECEBE 1, SE FOR MENOR QUE 5, ELE VAI RECEBER MAIS UM ATÉ FICAR IGUAL A 5 | NUMEROS IMPARES
for (let i = 1; i <= 5; i++) {
    if (i % 2 !== 0) {
        console.log('Numero impar: ' + i);
    }
}
// I RECEBE 5, SE FOR MAIOR QUE O NUMERO 1, VAI DIMINUIR MAIS UM ATÉ FICAR IGUAL A 1 
for (let i = 5; i >= 1; i--) {
    console.log(i);
}