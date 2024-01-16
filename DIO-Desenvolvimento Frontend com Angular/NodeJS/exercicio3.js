const PreçoNormal = 100;

function desconto (valor,txt=true) {
    if (txt) {
        return PreçoNormal - (PreçoNormal * (valor / 100));
    } else {
        return PreçoNormal + (PreçoNormal * (valor / 100));
    }
}

function aplicarDesconto (modalidade) {
    if (modalidade === 1) {
        return desconto(10);
    } else if (modalidade === 2) {
        return desconto(15);
    } else if (modalidade === 3) {
        return PreçoNormal;
    } else {
        return desconto(10,false);
    }
}

console.log('R$ ' + aplicarDesconto(2));