/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const listaL1 = [];
const listaL2 = [];

var addTwoNumbers = function(l1, l2) {
    const ehNumeroL1 = !isNaN(parseInt(l1.toString().replace(/,/g,'')));
    const ehNumeroL2 = !isNaN(parseInt(l2.toString().replace(/,/g,'')));

    if (ehNumeroL1 && ehNumeroL2) {
        for (let i = 0; i < l1.length; i++) {
            listaL1.unshift(l1[i])
        }

        for (let i = 0; i < l2.length; i++) {
            listaL2.unshift(l2[i])
        }

        const valorL1 = parseInt(listaL1.toString().replace(/,/g,''))
        const valorL2 = parseInt(listaL2.toString().replace(/,/g,''))
        const total = (valorL1 + valorL2).toString().split('').reverse()
        const totalInt = total.map(str => {
            return parseInt(str,10)
        })

        return totalInt
    }  else {
        return [];
}
};


console.log(addTwoNumbers([2,4,3],[5,6,4]))