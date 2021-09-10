# Find out if a² + b² = c when given c. Or find out if there are any numbers when squared, will add up to c. 
# a² + b² can be same numbers

# Loop until num² reaches the value of c and end loop since numbers higher are invalid
#     get the difference from num² and c
#     check if the sqroot of the difference is an int, a float means there are no numbers that can become the difference when squared and is thus invalid
#         if yes then return true
# return false if nothing found

import math

class Solution:
    def judgeSquareSum(self, c: int) -> bool:
        i = 0
        
        while (i ** 2 <= c):
            diff = c - (i ** 2)
            
            if math.sqrt(diff).is_integer():
                return True
            
            i += 1
    
        return False
        
# Time complexity = Probably O(log N) since it will never reach c numbers.
# Space complexity = O(1)
