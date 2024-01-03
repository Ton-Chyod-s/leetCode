
const numero = 10;

const NumeroPar = (numero % 2) === 0;


if (NumeroPar === 0) {
    console.log('O numero é invalido!!')
} else if (NumeroPar) {
    console.log('É par');
} else {
    console.log('É impar');
}
