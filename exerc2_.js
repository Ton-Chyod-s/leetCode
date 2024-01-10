class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcImc () {
        const imc = this.peso / (this.altura * this.altura)
        return imc.toFixed(2)
    }

    classificarIMC () {
        const txt = this.calcImc ();
        if (txt < 18.5) {
            return 'Abaixo do peso'
        } else if (txt > 18.5 && txt < 25) {
            return 'Peso normal'
        } else if (txt > 25 && txt < 30) {
            return 'Acima do peso'
        } else if (txt > 30 && txt > 40) {
            return 'Obeso'
        } else {
            return 'Obesidade Grave!'
        }
    }
} 

const jose = new Pessoa('José', 70, 1.75)
console.log('Oi sou o ' + jose.nome)
console.log('Tenho ' + jose.calcImc() + ' de Imc')
console.log(jose.classificarIMC())