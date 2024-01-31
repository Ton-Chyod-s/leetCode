Array.prototype.myMap = function(callback) {
    const newArray = [];
    // Altere apenas o código abaixo desta linha
    for (let i = 0; i < this.length; i++) {
        console.log(callback(this[i], i, this));   
    }
    // Altere apenas o código acima desta linha
    return newArray;
  };

console.log([23, 65, 98, 5, 13].myMap(item => item * 2))
//[1, 1, 2, 5, 2].myMap((element, index, array) => array[index + 1] || array[0])
//["naomi", "quincy", "camperbot"].myMap(element => element.toUpperCase())
  