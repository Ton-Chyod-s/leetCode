function findLongestWordLength(str) {
  const strLista = str.split(" ")
  count = 0
  for (let i = 0; i < strLista.length; i++) {
    if (strLista.length > count) {
      count = strLista.length
    }
  }
  return count;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");