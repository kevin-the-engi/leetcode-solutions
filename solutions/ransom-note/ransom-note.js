# Goal = Given two strings, return true if string in ransomNote can be constructed from magazine.

# track number of occurrences in magazine
# iterate thru magazine
#     update tracker with chars in magazine
# iterate thru ransomNote
#     check if char exists in tracker
#         if so the decrement
#         otherwise return false
# return true if false is not triggered

class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        tracker = {}
        
        for char in magazine:
            if char in tracker:
                tracker[char] += 1
            else:
                tracker[char] = 1
                
        for char in ransomNote:
            if char in tracker and tracker[char] is not 0:
                tracker[char] -= 1
            else:
                return False
            
        return True

# Time complexity = O(N)
# Space complexity = O(N)
