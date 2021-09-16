# The isBadVersion API is already defined for you.
# @param version, an integer
# @return an integer
# def isBadVersion(version):

# Since n respresents version numbers, once n is found to be true, all values > n, will also be true. In other words, it is sorted in a way that true and false are separated. Binary search can be used to find the first instance of a true value.

# check for edge case of n = 1
#     return 1 if so
# create a function that accepts a start and end value
#     find the mid point 
#     check if the current mid value is true and the prev value is false
#         if so, the first instance of true is found so return mid
#     otherwise check if mid value call is true
#         if so then check if first instance of true is in left half
#         else check right half

import math

class Solution:
    def firstBadVersion(self, n):
        """
        :type n: int
        :rtype: int
        """
        if n == 1:
            return 1
        
        def search(start: int, end: int) -> int:
            mid = math.floor((end - start) / 2) + start
            
            if isBadVersion(mid) and not isBadVersion(mid - 1):
                return mid
            
            if isBadVersion(mid):
                return search(start, mid - 1)
            else:
                return search(mid + 1, end)
            
        return search(1, n)
        
# Time complexity = O(log n) since sample size is reduced by half each time.
# Space complexity = O(1)
        
