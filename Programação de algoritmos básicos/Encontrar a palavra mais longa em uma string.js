function findLongestWordLength(str) {
  const strLista = str.split(" ")
  count = 0
  for (let i = 0; i < strLista.length; i++) {
    if (strLista[i].length > count) {
      count = strLista[i].length
    }
  }
  return count;
}

console.log(findLongestWordLength("Google do a barrel roll"))

