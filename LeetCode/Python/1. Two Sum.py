class Solution(object):
    def twoSum(self, nums, target):
        tamanho = len(nums)
        if tamanho > 2: 
            soma2 = nums[1] + nums[2]
        else:
            soma = nums[0] + nums[1]
            if soma == target:
                return [0,1]
            elif soma2 == target:
                return [1,2]
            else:
                return [0,1]

if __name__ == '__main__':
    nums = Solution()
    nums.twoSum([2,7,11,15],9)