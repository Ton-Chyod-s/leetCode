function mixedNumbers(arr) {
    // Altere apenas o código abaixo desta linha
    const arr1 = ["three",2,"I"]
    for (let i = 0; i < arr1.length; i++) {
        arr.unshift(arr1[i])
    }
    
    const arr2 = [7,"VIII",9]
    for (let i = 0; i < arr2.length; i++) {
       arr.push(arr2[i])
    }
    // Altere apenas o código acima desta linha
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));