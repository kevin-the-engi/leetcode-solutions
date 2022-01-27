# Goal = Given an array of numbers, find two values that sum up to the target and return the indices + 1 of both.

# create start pointer at 0 and end pointer at array length - 1
# loop while start is less than end
#     get the sum of start and end values
#     if the sum is equal to target, return start + 1 and end + 1
#     else if the sum is greater than target, then decrement end
#     otherwise increment start

class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        start = 0
        end = len(numbers) - 1
        
        while start < end:
            sum = numbers[start] + numbers[end]
            
            if sum == target:
                return [start + 1, end + 1]
            elif sum > target:
                end -= 1
            else:
                start += 1
        
# Time complexity = O(n) worst case. O(log n) best case.
# Space complexity = O(1)
