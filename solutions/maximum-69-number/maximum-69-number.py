# track result
# convert to str
# track if changed with bool
# start at 0

# loop while bool is false
#     check if start char is not a 9
#         if so then change bool to true
#     check if start has reached the end and bool hasn't been flagged
#         return num since no changes are needed
#     store 9
#     increment start

# combine with remainder of num str
# return str as number

class Solution:
    def maximum69Number (self, num: int) -> int:
        num = str(num)
        hasChanged = False
        start = 0
        result = ''
        
        while hasChanged is False:
            if num[start] is not '9':
                hasChanged = True
        
            if start is (len(num) - 1) and hasChanged is False:
                return int(num)
            
            result += '9'
            start += 1
            
        result += num[start:]
        
        return int(result)
