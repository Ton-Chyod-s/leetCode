function mutation(arr) {
    const primeiraPalavraArr = arr[0].toLowerCase()
    const segundaPlavraArr = arr [1].toLowerCase()

    for (let i = 0; i < primeiraPalavraArr.length; i++) {
        const res = primeiraPalavraArr.indexOf(segundaPlavraArr[i])
        if (res === -1 ) {
            const tamanho = segundaPlavraArr.length
            if (i >= tamanho) {
                return true
            } else {
                return false
            }
        }  
    }
    return true  
}

console.log(mutation(["floor", "for"]));