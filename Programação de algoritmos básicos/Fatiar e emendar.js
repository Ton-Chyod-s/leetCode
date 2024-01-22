function frankenSplice(arr1, arr2, n) {
    const novoArr2 = [...arr2]
      for (let i = 0; i < arr1.length; i++) {
         novoArr2.splice(n+i,0,arr1[i])
      }
      return novoArr2;
    }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);