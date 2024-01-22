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
            false;
        }
    } else {
        const ehN = ultimoElementoLista[ultimoElemento.length - 1]
        if (ehN === 'n') {
            return true;
        } else {
            false;
        }
    }

  }
  
  confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");