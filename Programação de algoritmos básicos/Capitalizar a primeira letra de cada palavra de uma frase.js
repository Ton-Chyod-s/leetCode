function titleCase(str) {
    let strLista = str.split(" ")
    const listaAtualizada = [];
    for (let i = 0; i < strLista.length; i++) {
        for (let j = 0; j < (strLista[i]).length; j++) {
            const novaLista = strLista[i].split("")
            novaLista[0] = novaLista[0].toUpperCase()
            for (let i = 1; i < novaLista.length; i++) {
                novaLista[i] = novaLista[i].toLowerCase()
            }
            listaAtualizada.push(novaLista.join(""))
            break
            
        } 
    }
    return listaAtualizada.join(" ")
  }
  
  console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));