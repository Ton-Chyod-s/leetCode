let count = 0;
function rangeOfNumbers(startNum, endNum) {
    if (endNum - count === 0) {
      return [];
    } else if (startNum === endNum) {
      return [endNum];
    } else {
      count += 1;
      return rangeOfNumbers(startNum, endNum);
    }
  };

  console.log(rangeOfNumbers(1, 1)) //[1, 2, 3, 4, 5]