# check if nums is size 1
#     if so return item in nums since it's the only subarray
# store first item for base comparison
# track max sum
# track current sum
# iterate thru array
#     check if current item is greater than prev
#         if yes then add current number to current sum
#             update max sum with current sum and last max sum
#         if no then reset current sum with current number
#     update prev item with current item
# return max sum

class Solution:
    def maxAscendingSum(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]
        
        prev = nums[0]
        maxSum = prev
        currSum = prev
        
        for value in nums[1:]:
            if value > prev:
                currSum += value
                maxSum = max(currSum, maxSum)
            else:
                currSum = value
                
            prev = value
            
        return maxSum
        
# Time complexity is O(N) as it only iterates through n items in nums array.
# Space complexity is O(1) as only primitives were created.
