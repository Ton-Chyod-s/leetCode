/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
   const sList = new Array();
   const map = {
    '(': ')',
    '[': ']',
    '{': '}'
   }
   for (let i = 0; i < s.length; i++) {
        const caracter = s[i]
        if (caracter in map) {
            sList.push(caracter)
        } else {
            const retirarSLista = sList.pop();
            if (caracter !== map[retirarSLista]) {
                return false;
            }
        }
   }
 
   return !(s.length === 1 || (s.length === 2 && s[0] === s[1]));
};

console.log(isValid("((("))