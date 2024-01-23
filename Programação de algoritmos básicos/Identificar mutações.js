function mutation(arr) {
    const primeiraPalavraArr = arr[0].toLowerCase()
    const segundaPlavraArr = arr [1].toLowerCase()

    if (primeiraPalavraArr.length > segundaPlavraArr.length) {
        for (let i = 0; i < primeiraPalavraArr.length; i++) {
            const res = segundaPlavraArr.indexOf(primeiraPalavraArr[i])
            if (res === -1) {
                return false
            }        
        }
    } else {
        for (let i = 0; i < segundaPlavraArr.length; i++) {
         
        }
        return res
    }
  }
  
  console.log(mutation(["hello", "hey"]));