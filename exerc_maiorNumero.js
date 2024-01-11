const { gets, print} = require('./func_maiorNumero')

const numeroSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numeroSorteados.push(numeroSorteado);
}

print(numeroSorteados)

let maiorNumero = 0

for (let i = 0; i < numeroSorteados.length; i++ ) {
    const numeroSorteado = numeroSorteados[i];
    if (numeroSorteado > maiorNumero) {
        maiorNumero = numeroSorteado
    }
}

print(maiorNumero)

