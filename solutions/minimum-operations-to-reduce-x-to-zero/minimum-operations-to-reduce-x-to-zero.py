# instead of finding the min len to reach x, find the max len to reach sum of array - x

# get sum of all nums
# check if sum - x is less than 0 then there is no solution
#     if yes then return -1
# create start pointer
# track curr sum
# track max len
# iterate thru arr
#     add curr value to curr sum
#     loop while curr sum is greater than target
#         subtract start value from total
#         increment start
#     check if curr sum is target
#         if yes then update max len with window length 

import math

class Solution:
    def minOperations(self, nums: List[int], x: int) -> int:
        maxSum = sum(nums)
        target = maxSum - x
        
        if target < 0:
            return -1
        
        currSum = 0
        start = 0
        maxLen = -math.inf
        
        for index, value in enumerate(nums):
            currSum += value
            
            while currSum > target:
                currSum -= nums[start]
                start += 1
            
            if currSum == target:
                maxLen = max(maxLen, index - start + 1)
                
        if maxLen == -math.inf:
            return -1
        else:
            return len(nums) - maxLen
        
# Time complexity is O(N).
# Space complexity is O(1) since only primitives were used.
