function truncateString(str, num) {
    const listaPalavra = [];
    const strLista = str.split("");
    let segundoElementoLista = str.split(" ")[1]
    for (let i = 0; i < num; i++) {
        listaPalavra.push(strLista[i])
    }
    if (segundoElementoLista === undefined) {
        segundoElementoLista =  [0];
    }
    if (listaPalavra.length >= segundoElementoLista.length) {
        if (listaPalavra.join("") === str) {
            return str
        } else {
            listaPalavra.push('...')
        } 
    } else {
        listaPalavra.push('...')
    }
    return listaPalavra.join("");
  }
  
  console.log(truncateString("Absolutely Longer", 2))