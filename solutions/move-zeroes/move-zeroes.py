# Goal = Given an array of values, move all zeroes to the end while keeping the order of values the same.

# check edge case for an array of length 1 and return nums if true
# create start pointer at 0 and end pointer at 1
# loop until end pointer reaches end of array
#     if start value is not 0 then increment start
#     else if start value is 0 and end value is not 0 then swap both values
#         increment start
#     increment end 
# return nums

class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        if len(nums) == 1:
            return nums
        
        start = 0

        for endIndex, endValue in enumerate(nums[1:]):
            # nums[1:] starts with first index at 0 so need to add 1 to get correct index in list
            if nums[start] != 0:
                start += 1
            elif nums[start] == 0 and endValue != 0:
                nums[start], nums[endIndex + 1] = nums[endIndex + 1], nums[start]
                start += 1
                
        return nums
        
# Time complexity = O(n)
# Space complexity = O(1)
