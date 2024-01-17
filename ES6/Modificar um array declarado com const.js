const s = [5, 7, 2];
function editInPlace() {
  // Altere apenas o código abaixo desta linha
    for (let i = 0; i < s.length; i++) {
        switch (i) {
            case 0:
                s[i] = 2;
                break;
            case 1:
                s[i] = 5;
                break;
            case 2:
                s[i] = 7;
                break;
        }
        
    }
  // Altere apenas o código acima desta linha
}
editInPlace()
console.log(s);
