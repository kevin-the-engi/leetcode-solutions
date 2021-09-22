# create a rotated version of the nums array by working by using i + k % length to get index to store first value and continue iterating
# replace every element in nums array with rotated version

class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        rotated = [None] * len(nums)
        
        for i in range(len(nums)):
            rotated[(i + k) % len(nums)] = nums[i]
        
        for i in range(len(nums)):
            nums[i] = rotated[i]
            
        return nums
    
# Time complexity = O(N)
# Space complexity = O(N)
