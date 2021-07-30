# check if n is equal to k
#     if it is, n is already base k so return 1

# track quotient
# track remainder

# loop while n is greater than 0
#     divide n by k
#     get remainder of n / k
#     update remainder by combining current remainder with what is stored in remainder so far
#     update n with current quotient

# add up all nums in remainder to get sum
# return sum

import math, functools

class Solution:
    def sumBase(self, n: int, k: int) -> int:
        if n == k:
            return 1
        
        remainder = ''
        
        while n > 0:
            remainder = str(n % k) + remainder
            n = math.floor(n / k)
            
        return functools.reduce(lambda a, b: int(a) + int(b), list(remainder))
            
