# check if nums array is valid
#     return nums
# track sum
# track max
# iterate thru nums arr
#     add current value to sum
#     update max if current sum is greater
#     check if sum is less than 0
#         if so then reset sum to 0 to restart subarray sum from current
# return max

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        arrSum = 0
        maximum = float('-inf')
        
        for values in nums:
            arrSum += values
            maximum = max(arrSum, maximum)
            
            if arrSum < 0:
                arrSum = 0
            
        return maximum
        
# Time complexity is O(N) as it only goes thru num arr n times.
# Space complexity is O(1) as only primitives were used.
