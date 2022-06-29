# Goal: Given an array of numbers and num k, return the max sum by removing k items from the left or right of array.
# Use sliding window on array to update max profit.

# check if arr size == k
#     return sum of arr values
# track max points
# set max with the sum of first k items in arr
# set curr points with max
# set start with k - 1 to get end window
# set end with arr length - 1 to get start window
# loop while k > 0
#     set curr with curr - end window value + start window value
#     update max with curr or max
#     decrement k, and shift window by decrementing end, start
# return max

class Solution:
    def maxScore(self, cardPoints: List[int], k: int) -> int:
        if len(cardPoints) == k:
            return sum(cardPoints)
        
        maxPoints = sum(cardPoints[0: k])
        currPoints = maxPoints
        start = k - 1
        end = len(cardPoints) - 1
        
        while k > 0:
            currPoints = currPoints - cardPoints[start] + cardPoints[end]
            maxPoints = max(currPoints, maxPoints)
            start -= 1
            end -= 1
            k -= 1
            
        return maxPoints
        
# Time complexity = O(k times) = O(n)
# Space complexity = O(1)
