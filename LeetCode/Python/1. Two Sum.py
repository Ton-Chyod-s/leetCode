class Solution(object):
    def twoSum(self, nums, target):
        for keyI, i in enumerate(nums):
            start = 1
            end = len(nums)
            for keyJ, j in enumerate(nums[start:end], start):
                if nums[keyI] + nums[keyJ] == target:
                    if keyI == keyJ:
                        continue
                    return [keyI,keyJ]
                    
                
if __name__ == '__main__':
    nums = Solution()
    print(nums.twoSum([2,7,11,15],9))
    print(nums.twoSum([3,2,4],6))
    print(nums.twoSum([2,5,5,11],10))