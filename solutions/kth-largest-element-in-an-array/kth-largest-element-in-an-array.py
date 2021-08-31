# check if k is greater than nums.length
#     if so then it is not valid so return null
# check if nums length is 1
#     if so then return single value from nums
# sort nums in ascending order
# subtract k from length of nums to get index of kth element
# return value

class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        if k > len(nums):
            return None
        if len(nums) is 1:
            return nums[0]
        
        nums.sort()
        
        return nums[-k]
    
# Time complexity = O(N log N) for the sort.
# Space complexity = No additional memory used.
