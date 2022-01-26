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


# Goal = Given a string, find the length of the longest substring.
# Track each char with a sliding window that extends right window for nonrepeating chars and shrinks left window whenever a repeating char is encountered so only nonrepeating chars exist in window and tracker.

# track chars in string
# track current length
# track max length
# create two pointers at 0
# loop until end pointer reaches end
#     if char doesn't exist in tracker then add char to tracker since it's not a repeating char
#         increment end pointer
#         increment current length
#     else it's a repeating char so delete start char from tracker
#         decrement current length
#         increment start pointer
#     update max length if current length is greater
# return max length

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if len(s) == 1:
            return 1
        
        tracker = set()
        length = 0
        maxLen = 0
        left = 0
        right = 0
        
        while right < len(s):
            if s[right] not in tracker:
                tracker.add(s[right])
                length += 1
                right += 1
            else:
                tracker.remove(s[left])
                length -= 1
                left += 1
            maxLen = max(length, maxLen)
        
        return maxLen
        
# Time complexity = O(n)
# Space complexity = O(n)
