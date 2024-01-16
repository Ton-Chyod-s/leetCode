function rangeOfNumbers(startNum, endNum) {
    if (endNum <= 0) {
      return [];
    } else if (startNum === endNum) {
      return [endNum];
    } else {
      const countArray = rangeOfNumbers(startNum, endNum - 1)
      countArray.push(endNum);
      return countArray;
    }
  };

  console.log(rangeOfNumbers(5, 5)) //[1, 2, 3, 4, 5]