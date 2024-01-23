function mutation(arr) {
    const primeiraPalavraArr = arr[0].toLowerCase()
    const segundaPlavraArr = arr [1].toLowerCase()
    const res = primeiraPalavraArr.indexOf(segundaPlavraArr)

    if (res === -1 ) {
        return false
    } else {
        return true
    }        
}

  console.log(mutation(["hello","Hello"]));