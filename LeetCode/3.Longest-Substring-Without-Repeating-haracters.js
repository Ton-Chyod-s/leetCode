/**
 * @param {string} s
 * @return {number}
 */


var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let substring = '';
    for (let i = 0; i < s.length; i++) {
        const index = substring.indexOf(s[i]);
        if (index !== -1) {
            substring = substring.slice(index + 1);
        }
        substring += s[i];
        maxLength = Math.max(maxLength, substring.length);
    }
    return maxLength;
};


console.log(lengthOfLongestSubstring("pwwkew"))