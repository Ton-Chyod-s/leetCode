function filteredArray(arr, elem) {
    let newArr = [...arr];
    // Altere apenas o código abaixo desta linha
    for (let i = 0; i < arr.length; i++) {
        const listaPrincipal = arr[i]
        for (let j = 0; j < arr[i].length; j++) {
        const numListaPrincipal = listaPrincipal[j]
        if (numListaPrincipal === elem) {
            newArr.splice(i,1)
            i--
            if (newArr.length === 0) {
                i = arr.length 
            }
            break
        }
    }
    }
    // Altere apenas o código acima desta linha
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)); // deve retornar []

  console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)); // deve retornar [[10, 8, 3], [14, 6, 23]

  console.log(filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2)); // deve retornar [["flutes", 4]]

  // console.log(filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter")); // deve retornar [["amy", "beth", "sam"]]

