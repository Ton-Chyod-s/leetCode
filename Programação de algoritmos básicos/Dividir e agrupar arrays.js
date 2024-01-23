function chunkArrayInGroups(arr, size) {
    const arrayBidimensional = []
    const novoArray = []
    for (let i = 0; i < arr.length; i++) {
        novoArray.push(arr[i])
        if (novoArray.length === size) {
            arrayBidimensional.push(novoArray)
            novoArray.splice(0,2)
        }
    }
    return arrayBidimensional
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);