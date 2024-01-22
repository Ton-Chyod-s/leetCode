function largestOfFour(arr) {
    const novoArray = [];
    for (let i = 0; i < arr.length; i++) {
        const lista = arr[i]
        let maiorNum = 0;
        for (let j = 0; j < arr[i].length; j++) {
            numLista = lista[j]
            if (numLista > maiorNum) {
                maiorNum = numLista
            }
        }
        novoArray.push(maiorNum)
    }
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);