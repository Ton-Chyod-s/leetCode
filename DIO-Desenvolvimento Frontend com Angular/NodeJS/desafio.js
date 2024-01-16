let distancia = 100;
let gasto_medio = 10;
const CombustivelGasolina = 5.08;
const CombustivelAlcool = 3.08;
let TipoCombustivel = 'Etanol';


const distanciaPercorrida = distancia / gasto_medio
if (TipoCombustivel === 'Gasolina') {
    let ValorGasto = distanciaPercorrida * CombustivelGasolina;
    console.log(ValorGasto.toFixed(2))
} else {
    let ValorGasto = distanciaPercorrida * CombustivelAlcool;
    console.log(ValorGasto.toFixed(2))
}

