/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let num_ro = {};
    num_ro.I = 1;
    num_ro.V = 5;
    num_ro.X = 10;
    num_ro.L = 50;
    num_ro.C = 100;
    num_ro.D = 500;
    num_ro.M = 1000;

    let chaves = Object.keys(num_ro);
    
    list_s = s
    .toString()
    .split('')

    let valor = 0
    for (let i in chaves) {
        key = chaves[i];
        for (let i in list_s) {
        value_problem = list_s[i]
        if (key === value_problem) {
            valor += i
            break
        } else {
            break
        }
        }
    }
    console.log(valor)
};

romanToInt("III")