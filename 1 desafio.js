const CombustivelGasolina = 5.08;
const CombustivelAlcool = 3.08;
let TipoCombustivel = 'Gasolina';
let distancia =  174;
let gasto_medio = 11;

if (TipoCombustivel === 'Gasolina') {
    const ValorGasto = distancia / gasto_medio * CombustivelGasolina;
    console.log(ValorGasto);
} else {
    const ValorGasto = distancia / gasto_medio * CombustivelAlcool;
    console.log(ValorGasto)
}
