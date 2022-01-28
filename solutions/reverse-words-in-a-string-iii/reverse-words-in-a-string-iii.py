# Goal = Given a string, reverse each word in the string.

# split the string into an array
# split each word in the array into an array of chars
#     reverse the array of chars
#     rejoin chars into words
# rejoin the words into the full string

class Solution:
    def reverseWords(self, s: str) -> str:
        s = s.split()
        s = list(map(self.splitStrings, s))
        
        return ' '.join(s)
        
    def splitStrings(self, word: str) -> str:
        chars = list(word)
        chars.reverse()
        
        return ''.join(chars)
        
# Time complexity = .split O(n) + .map O(n) * .split/reverse/join O(n) + .join O(n) = O(n²)
# Space complexity = O(1)
