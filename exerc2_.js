class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    imc () {
        const imc = this.peso / (this.altura * this.altura)
        return imc.toFixed(2)
    }
} 

const jose = new Pessoa('José', 70, 1.75)
console.log('Oi sou o ' + jose.nome)
console.log('Tenho ' + jose.imc() + ' de Imc')
