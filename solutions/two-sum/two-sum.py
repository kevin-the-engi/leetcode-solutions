# check if list is size 2 
#   if so then return both indices since there is only one valid solution

# track items in nums with their index with dict
# iterate thru nums list
#   assign each item with their index
# iterate thru nums list again
#   get difference between target and nums[i]
#   check to see if difference exists in dict
#       if yes then return index and dict value

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        if len(nums) == 2:
            return [0, 1]
        
        dict = {}
        
        for index, value in enumerate(nums):
            dict[value] = index
            
        for index, value in enumerate(nums):
            difference = target - value
            
            if difference in dict and dict[difference] != index:
                return [dict[difference], index]
