# Partition s into parts. Track chars and once a char stops appearing during interation, that becomes a partition.

# track chars
# track num of chars
# create array to hold result

# iterate thru s
#     check if current index for current char is not the same as it's last index meaning there's more in the str
#         if so then add char to stack
#         otherwise remove char from stack if it's the last one in str
#     increment num of chars
#     check if stack size is 0 meaning all chars of current partition set is complete
#         if so then push num of chars to result array
#         reset num of chars to 0
# return array

class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        stack = set()
        numChars = 0
        parts = []
        
        for index, value in enumerate(s):
            if index != s.rindex(value):
                stack.add(value)
            elif index == s.rindex(value) and value in stack:
                stack.remove(value)
            
            numChars += 1
            
            if len(stack) == 0:
                parts.append(numChars)
                numChars = 0

        return parts
    
# Time complexity is O(N^2). Loops for n chars in s, and for every loop it also runs rindex method which is also O(N).
# Space complexity is O(N). Set and array are O(N) each so O(2N) becomes N.
