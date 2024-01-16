const conjuntoEntrada = [ 5,50,10,98,23];
let i = 0;

function gets () {
    const valor = conjuntoEntrada[i];
    i++;
    return valor;
}

function print (num) {
    console.log(num)
}

module.exports = { gets, print };