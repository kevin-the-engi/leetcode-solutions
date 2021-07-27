import random

class Solution:

    def __init__(self, nums: List[int]):
        self.nums = nums

    def reset(self) -> List[int]:
        return self.nums
        

    def shuffle(self) -> List[int]:
        if len(self.nums) < 2:
            return self.nums
        
        copy = self.nums[0:]
        # python passes lists by reference so create copy with slice
        result = []
        
        while len(copy) > 0:
            length = len(copy) - 1
            index = random.randint(0, length)
            result.append(copy[index])
            copy.remove(copy[index])
        
        return result


# Your Solution object will be instantiated and called as such:
# obj = Solution(nums)
# param_1 = obj.reset()
# param_2 = obj.shuffle()
