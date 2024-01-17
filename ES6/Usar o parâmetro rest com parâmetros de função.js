const sum = (...args) => {
    const arg = [...args];
    let total = 0;
    for (let i = 0; i < arg.length; i++) {
      total += arg[i];
    }
    return total;
  }

console.log(sum(0,1,2)) //3