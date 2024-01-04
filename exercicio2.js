
const PESO = 70;
const ALTURA = 1.78;

const IMC = PESO / Math.pow(ALTURA, 2);
console.log('O IMC é: ' + IMC.toFixed(2))

if (IMC < 18.5) {
    console.log('Abaixo do peso')
} else if (IMC > 18.5 && IMC < 25) {
    console.log('Peso normal')
} else if (IMC > 25 && IMC < 30) {
    console.log('Acima do peso')
} else if (IMC > 30 && IMC > 40) {
    console.log('Obeso')
} else {
    console.log('Obesidade Grave!')
}