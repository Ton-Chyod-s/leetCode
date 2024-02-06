/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
   s = s.split("")
   for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i+1]) {
        continue;
    } 
    
   }
};

console.log(isValid("()"))