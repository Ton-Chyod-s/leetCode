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
    .reverse()

    let valor = 0;
    for (let i in chaves) {
        key = chaves[i];
        for (let i in list_s) {
        const value_problem = num_ro[list_s[i]]
        const value_problem_anterior = num_ro[list_s[i-1]]
        if (value_problem > value_problem_anterior) {
            const res = value_problem - value_problem_anterior
            valor += res
        } else if (key === list_s[i]) {
            valor += num_ro[key]
        }
        }
    }
    console.log(valor)
};

romanToInt("MCMXCIV")