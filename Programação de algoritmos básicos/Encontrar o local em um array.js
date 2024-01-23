function getIndexToIns(arr, num) {
    let indice = 0;
    for (let i = 0; i < arr.length; i++) {
        const indice1 = arr[i]
        const indice2 = arr[i + 1]
        if (num > indice1 && num < indice2) {
            if (num === indice2 - 1){
                indice += i + 2
                break
            } else {
                indice += i + 1
                break
            }
        } else if (num === indice1) { 
            if (i === 0 && indice1 < indice2) {
                return 0
            } else if (i === 0 && indice1 > indice2) {
                return 2
            } else {
                indice += i
            }
            break
        } 
    }
    if (indice === 0) {
        if (arr.length === 0) {
            return 0
        } else {
            return 3
        }
        
    }
    return indice
}

console.log(getIndexToIns([], 1));