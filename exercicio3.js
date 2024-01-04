const PreçoNormal = 100;
const EscolhaPagamento = 4

if (EscolhaPagamento === 'Débito') {
    const PrecoDesconto = PreçoNormal - (PreçoNormal * .1)
    console.log('R$' + PrecoDesconto)
} else if (EscolhaPagamento === 'Dinheiro' || EscolhaPagamento === 'Pix') {
    const PrecoDesconto = PreçoNormal - (PreçoNormal * .15)
    console.log('R$' + PrecoDesconto)
} else if (EscolhaPagamento === 2 || EscolhaPagamento === 1) {
    console.log('R$' + PreçoNormal)
} else {
    const PrecoDesconto = PreçoNormal + (PreçoNormal * .1)
    console.log('R$' + PrecoDesconto)
}
