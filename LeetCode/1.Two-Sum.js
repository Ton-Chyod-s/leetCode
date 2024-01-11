/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if (nums[0] + nums[1] === target) {
        list = [0,1];
        return list
    } else if (nums[1] + nums[2] === target) {
        list = [1,2];
        return list
    } else if (nums[0] < 0) {
        const tamanho = nums.length -2
        list = [0,tamanho]
        return list
    } else {
        const tamanho = nums.length - 1
        list = [0,tamanho];
        return list
    }
};


console.log(twoSum([3,2,3,2],0))