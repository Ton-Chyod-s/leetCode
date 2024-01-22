function repeatStringNumTimes(str, num) {
  const novoStr = []
  for (let i = 0; i < num; i++) {
    novoStr.push(str)
  }
  return novoStr.join("");
}

console.log(repeatStringNumTimes("abc", 3));