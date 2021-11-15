# track number of occurrences
# iterate thru nums
#     check if number exists in tracker
#         if yes then return true
#     otherwise set val in tracker
# return false if no duplicates found

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        tracker = {}
        
        for val in nums:
            if val in tracker:
                return True
            else:
                tracker[val] = 1
                
        return False

# Time complexity = O(N). Iterate thru n items in nums.
# Space complexity = O(N). Array created to track n items in nums.
