function rangeOfNumbers(startNum, endNum) {
    if (endNum < 0) {
      return [];
    } else {
      return rangeOfNumbers(startNum, endNum)
    }
  };


  console.log(rangeOfNumbers(1, 5)) //[1, 2, 3, 4, 5]