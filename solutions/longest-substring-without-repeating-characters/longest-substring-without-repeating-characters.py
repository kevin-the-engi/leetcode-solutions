# Given a string s, find the length of the longest substring without repeating characters.
# Example 1:

# Input: s = "abcabcbb"
# Output: 3
# Explanation: The answer is "abc", with the length of 3.

# Example 2:

# Input: s = "bbbbb"
# Output: 1
# Explanation: The answer is "b", with the length of 1.
# Example 3:

# Input: s = "pwwkew"
# Output: 3
# Explanation: The answer is "wke", with the length of 3.
# Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
# Example 4:

# Input: s = ""
# Output: 0

# Constraints:

# 0 <= s.length <= 5 * 104
# s consists of English letters, digits, symbols and spaces.


class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
#       iterate thru string s
#         check if substring contains current char in s
#           if no then add char to substring
#             if yes then
#               slice substring from next index onward and add current char to substring
#               Ex: substring = abc, current = a => bc + a

#         update longest value

      if s == " ":
        return 1  
    
      substr = ""
      longest = 0
      
      for char in s:
        if char not in substr:
          substr += char
        else:
          index = slice(substr.index(char) + 1, len(substr))
          substr = substr[index] + char
          
        longest = max(longest, len(substr))
      
      return longest
