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


# ITERATIVE SOLUTION

# Goal = Given a callback function, use function to find the first occurrence of true for n.
# Use binary search with n as the end value and start at 0

# loop while start is less than end
#     get mid value from start and end
#     if callback with mid value is false and callback with mid + 1 is true, then mid + 1 is the first bad version
#     if callback for both mid and mid + 1 is false, then bad version is on right side so update start with mid
#     else if they are both true, then bad version is on left so update n with mid

class Solution:
    def firstBadVersion(self, n: int, start = 0) -> int:
        while (start <= n):
            mid = math.floor((n - start) / 2) + start
            
            if not isBadVersion(mid) and isBadVersion(mid + 1):
                return mid + 1
            
            if not isBadVersion(mid) and not isBadVersion(mid + 1):
                start = mid
            else:
                n = mid

# Time complexity = O(log n)
# Space complexity = O(1)
