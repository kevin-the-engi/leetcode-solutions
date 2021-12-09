# Goal = Given two strings, check if they are anagrams of each other.

# check if length of string s and t are different
#     return false since not same number of chars
# track chars in string s
# iterate thru string s
#     track occurrence of each char
# iterate thru string t
#     check if char exists in char
#         if yes then decrement char count
#         if no then return false
# return true if false is not triggered

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        tracker = {}
        
        for char in s:
            if char in tracker:
                tracker[char] += 1
            else:
                tracker[char] = 1
                
        for char in t:
            if char in tracker and tracker[char] is not 0:
                tracker[char] -= 1
            else:
                return False
            
        return True
        
# Time complexity = O(N)
# Space complexity = O(N)
