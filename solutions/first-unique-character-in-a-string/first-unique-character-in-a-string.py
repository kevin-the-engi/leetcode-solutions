# Goal = Given a string, find the first unique char and return its index, otherwise return -1.

# track number of occurrences in s
# iterate thru s
#     update number of occurrences in tracker
# iterate thru s again
#     if the current char has an occurrence of 1, return the index
# return -1 if nothing is unique

class Solution:
    def firstUniqChar(self, s: str) -> int:
        tracker = {}
        
        for char in s:
            if char in tracker:
                tracker[char] += 1
            else:
                tracker[char] = 1
        
        for index, char in enumerate(s):
            if tracker[char] == 1:
                return index
            
        return -1
        
# Time complexity = O(N).
# Space complexity = O(N).
