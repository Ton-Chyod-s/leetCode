function confirmEnding(str, target) {
    const verificarEspaçoVazio  = str.indexOf(' ') >= 0;
    if (verificarEspaçoVazio) { 
        strLista = str.split(" ")
    } else {
        strLista = str.split("")
    }
    const ultimoElemento = strLista[strLista.length - 1]
    if (ultimoElemento.length > 1) {
        const ultimoElementoLista = ultimoElemento.split("");
        const ehN = ultimoElementoLista[ultimoElemento.length - 1]
        if (ehN === 'n') {
            return true;
        } else {
            return false;
        }
    } else {
        if (ultimoElemento === 'n') {
            return true;
        } else {
            return false;
        }
    }
  }
  
  console.log(confirmEnding("Bastian", "n"));