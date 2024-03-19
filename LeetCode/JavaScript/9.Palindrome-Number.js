/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    num_str = parseFloat(x
            .toString()
            .split('')
            .reverse()
            .join(''))
            
    if (x === num_str) {
        return true
    } else {
        return false
    }
};

console.log(isPalindrome(121))