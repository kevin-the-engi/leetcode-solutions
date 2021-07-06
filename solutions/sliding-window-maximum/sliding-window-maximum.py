#     get window range
#     track result 

#     loop while end of window is less than nums length
#         slice window from array from start to end
#         get max from slice and push into result arr
#         increment start and end of window

class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        start = 0
        end = start + k
        results = []
        
        while end <= len(nums):
            results.append(max(nums[start:end]))
            start += 1
            end += 1
        
        return results
