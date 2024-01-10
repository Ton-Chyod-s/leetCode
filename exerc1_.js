
class Carros {
    marca;
    cor;
    kmL;

    constructor (marca,cor,kmL) {
        this.marca = marca;
        this.cor = cor;
        this.kmL = kmL;
    }
}

function gastoReais (km, combutivel) {
    percorrido = km / Carros.kmL
    return percorrido * combutivel
}

console.log(gastoReais(200,15))