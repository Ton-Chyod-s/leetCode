function bouncer(arr) {
    const novoArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            novoArr.push(arr[i])
        } 
    }
    return novoArr;
  }

console.log(bouncer([7, "ate", "", false, 9]));