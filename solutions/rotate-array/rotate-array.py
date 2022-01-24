# Goal = Given an array, move/rotate values by k places/steps.

# create an array of size nums length
# loop thru nums array
#     get index for rotated array using index + k % nums length so end values loop around correctly
#     place current value into new index of rotated array
# loop thru nums array
#     replace each value with those in rotated array
# return nums

class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        rotated = [None] * len(nums)
        
        for i, value in enumerate(nums):
            index = (i + k) % len(nums)
            rotated[index] = value
            
        for i in range(len(nums)):
            nums[i] = rotated[i]
            
        return nums
        
# Time complexity = O(n)
# Space complexity = O(n) for dynamic array. However, O(1) for fixed-size array
