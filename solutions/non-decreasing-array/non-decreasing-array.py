# Goal: Given an array, check if it could become a non-decreasing array by modifying at most one element.
# Iterate thru array forwards and backwards, then compare bool results of both.

# check edge case for nums array size 1
#     return true
# set flag bool to false
# set a and b bools to true
# create a copy of nums array
# iterate backwards thru nums array
#     check if nums[i - 1] > nums[i]
#         if true then check if flag is true
#             if true then update a to false and break loop
#             update flag to true
#             update nums[i - 1] with nums[i]
# reset flag to false
# reset nums with copy
# iterate forwards thru nums array
#     check if nums[i] > nums[i + 1]
#         if true then check if flag is true
#             if true then update b to false and break loop
#             update flag to true
#             update nums[i + 1] with nums[i]
# return comparison of a or b

class Solution:
    def checkPossibility(self, nums: List[int]) -> bool:
        if len(nums) == 1:
            return True
        flag = False
        a, b = True, True
        copy = list(nums)
        
        for i in range(len(nums) - 1, 0, -1):
            if nums[i - 1] > nums[i]:
                if flag is True:
                    a = False
                    break
                flag = True
                nums[i - 1] = nums[i]
        
        flag = False
        nums = copy
        
        for i in range(0, len(nums) - 1, 1):
            if nums[i] > nums[i + 1]:
                if flag is True:
                    b = False
                    break
                flag = True
                nums[i + 1] = nums[i]
        
        return a or b
    
# Time complexity = O(n)
# Space complexity = O(n)
        
