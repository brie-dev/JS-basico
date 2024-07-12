// BREAK ENCERRA O LOOP IMEDIATAMENTE

for (let i = 1; i <= 5; i++ ) {
    if (i == 3) {
        break;
    }
    console.log(i)
}

// CONTINUE É USADO PARA PULAR A ITERAÇÃO ATUAL DO LOOP E O FLUXO DE CONTROLE DO PROGRAMA VAI PARA A PROXIMA ITERAÇÃO

for (let g = 1; g <= 5; g++ ) {
    if (g == 3) {
        continue;
    }
    console.log(g)
}