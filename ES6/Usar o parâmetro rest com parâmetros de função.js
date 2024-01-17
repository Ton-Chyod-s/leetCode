const sum = (...arg) => {
    const args = [...arg];
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total;
  }

console.log(sum(0,1,2)) //3