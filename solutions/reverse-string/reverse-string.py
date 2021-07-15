#     create a pointer for start
#     create a pointer for end
    
#     loop while start is less than end
#         swap start item with end item
#         increment start
#         increment end

class Solution:
    def reverseString(self, s: List[str]) -> None:
        start = 0
        end = len(s) - 1
        
        while start < end:
            self.swap(s, start, end)
            start += 1
            end -= 1
            
    def swap(self, s: List[str], start, end) -> None:
        temp = s[start]
        s[start] = s[end]
        s[end] = temp
