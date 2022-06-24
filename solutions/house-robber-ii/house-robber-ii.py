# Goal: Given an array of numbers, find the max profit you can sum up as long as the values aren't adjacent.

# if nums is size 1, then return nums[0]
# if nums is size 2, then return max of nums[0], nums[1]
# create new array of nums length and fill with 0
# set dp0 with nums[0]
# set dp1 with max of nums[0], nums[1]
# iterate from i + 2 onwards
#     set dp[i] with max of dp[i - 2] + nums[i], dp[i - 1]
# return last item in dp

class Solution:
    def rob(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]
        if len(nums) == 2:
            return max(nums[0], nums[1])
        
        return max(self.helper(0, len(nums) - 2, nums), self.helper(1, len(nums) - 1, nums))
    
    def helper(self, start: int, end: int, nums: List[int]) -> int:
        dp = [0] * len(nums)
        dp[start] = nums[start]
        dp[start + 1] = max(nums[start], nums[start + 1])
        
        for i in range(start + 2, end + 1):
            dp[i] = max(dp[i - 2] + nums[i], dp[i - 1])

        return dp[end]
    
# Time complexity = O(n)
# Space complexity = O(n)
