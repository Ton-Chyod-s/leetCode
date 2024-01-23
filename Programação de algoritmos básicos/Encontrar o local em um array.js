function getIndexToIns(arr, num) {
    let indice = 0;
    for (let i = 0; i < arr.length; i++) {
        const indice1 = arr[i]
        const indice2 = arr[i + 1]
        if (num > indice1 && num < indice2) {
            indice += i + 1
            break
        } else if (num === indice1) {
            indice += i
            break
        }
    }
    return indice
}

console.log(getIndexToIns([5, 3, 20, 3], 5));