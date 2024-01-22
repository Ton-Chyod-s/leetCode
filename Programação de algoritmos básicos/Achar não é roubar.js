function findElement(arr, func) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        if (func === true) {
            num = arr[i]
        } 
    }
    return num;
  }
  
  console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));