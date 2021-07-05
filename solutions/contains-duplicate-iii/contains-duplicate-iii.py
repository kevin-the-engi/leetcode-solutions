#   Input = nums array of numbers, num k for target index, num t for target value
#   Output = bool
  
#   track start and end of window
#   start at 0, end at 1
  
#   loop while start is less than length of nums - 1
#     check if start - end is less than or equal to k
#       if yes then check if total of nums[start] and nums[end] is less than or equal to t
#         if yes then return true
#         if no then increment end to expand window
#       if no
#         increment start to move window
#         reset end
#   return false by default

class Solution:
    def containsNearbyAlmostDuplicate(self, nums: List[int], k: int, t: int) -> bool:
        start = 0
        end = 1
        
        while (start < (len(nums) - 1)):
            if (end - start) <= k and (math.fabs(nums[start] - nums[end]) <= t):
                return True
            elif (math.fabs(nums[start] - nums[end]) > t) and end < (len(nums) - 1):
                end += 1
            else:
                start += 1
                end = start + 1
        
        return False
