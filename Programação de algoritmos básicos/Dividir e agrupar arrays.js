function chunkArrayInGroups(arr, size) {
    const arrayBidimensional = []
    const novoArray = []
    for (let i = 0; i < arr.length; i++) {
        novoArray.push(arr[i])
        if (novoArray.length === size) {
            arrayBidimensional.push([...novoArray])
            novoArray.splice(0,novoArray.length)
        } 
    }
    if (novoArray.length > 0) {
        arrayBidimensional.push([...novoArray])
        novoArray.splice(0,novoArray.length)
    }
    return arrayBidimensional
  }
  
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)