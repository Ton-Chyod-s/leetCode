
class Carros {
    marca;
    cor;
    kmL;

    constructor (marca,cor,kmL) {
        this.marca = marca;
        this.cor = cor;
        this.kmL = kmL;
    }

    gastosReais (km,preco) {
        return km * this.kmL * preco;
    }
}

const uno = new Carros('Fiat', 'Preto', 1/11)
console.log(uno.gastosReais(70,5.08))

const palio = new Carros('Fiat', 'Preto', 1/10)
console.log(palio.gastosReais(70,5.08))