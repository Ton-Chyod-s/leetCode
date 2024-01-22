function bouncer(arr) {
    const novoArr = [...arr];
    for (let i = 0; i < novoArr.length; i++) {
        if (novoArr[i] === false || novoArr[i] === null || novoArr[i] === 0 || novoArr[i] === "" || novoArr[i] === undefined || novoArr[i] === NaN) {
            delete novoArr[i]
        } 
    }
    return novoArr;
  }

console.log(bouncer([false, null, 0, NaN, undefined, ""]));