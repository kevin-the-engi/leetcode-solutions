# Goal = Given an array of strings, reverse the array by modifying the strings in place.

# create start pointer at 0 and end pointer at s length - 1
# loop while start is less than end
#     swap start and end values
#     increment start
#     decrement end

class Solution:
    def reverseString(self, s: List[str]) -> None:
        start = 0
        end = len(s) - 1
        
        while start < end:
            s[start], s[end] = s[end], s[start]
            start += 1
            end -= 1
        
# Time complexity = O(n/2) = O(n)
# Space complexity = O(1)
