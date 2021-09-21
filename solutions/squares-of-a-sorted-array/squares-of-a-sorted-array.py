# Using two pointer approach, compare the start and end values of the given array and form a sorted array from the end first with largest numbers descending.

# create pointers for start and end
# create result array
# iterate input array from end to 0 to form result array with largest numbers first
#     check if start value is less than end value
#         if so assign square end value to result [i]
#         decrement end
#     if not then assign square start value to result [i]
#         increment start
# return sorted results

class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        start = 0
        end = len(nums) - 1
        results = [None] * len(nums)
        
        for i in range(len(nums) - 1, -1, -1):
            if abs(nums[start]) < abs(nums[end]):
                results[i] = nums[end] ** 2
                end -= 1
            else:
                results[i] = nums[start] ** 2
                start += 1
        
        return results
    
# Time Complexity = O(N)
# Space Complexity = O(N)
