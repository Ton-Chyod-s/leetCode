const PreçoNormal = 100;

function aplicarDesconto (desconto) {
    if (desconto === 1) {
        return PreçoNormal - (PreçoNormal * .1)
    } else if (desconto === 2) {
        return PreçoNormal - (PreçoNormal * .15)
    } else if (desconto === 3) {
        return PreçoNormal
    } else {
        return PreçoNormal + (PreçoNormal * .1)
    }
}

console.log('R$ ' + aplicarDesconto())