# Binary search involves dividing an array in two and searching the halves for the target value. 
# Repeat the process until target is found or there is no where left to search.

# create a recursive function that takes a start and end value representing the array
#     base case: Because the arr is being narrowed down each call, if the start is the same as end then array has been searched
#         then return -1
#     get the mid index by calculating (end - start) / 2 + start
#     if the arr[mid] is the target
#         then return mid index
#     otherwise check if target is less than arr[mid]
#         if so, check the first half of the partitioned arr by calling function with 0 and mid
#     or if target is greater than arr[mid]
#         then check the second half of the partitioned arr by calling function with mid and end

class Solution:
    def search(self, nums: List[int], target: int) -> int:
        return self.recursion(nums, target, 0, len(nums) - 1)

    def recursion(self, nums: List[int], target: int, start: int, end: int) -> int:
        mid = math.floor((end - start) / 2) + start
        
        if nums[mid] == target:
            return mid
        if start > end:
            return -1
        
        if nums[mid] > target:
            return self.recursion(nums, target, 0, mid - 1)
        else:
            return self.recursion(nums, target, mid + 1, end)

# Time complexity = O(log N) since process narrows down search results by half each time.
# Space complexity = O(1)
