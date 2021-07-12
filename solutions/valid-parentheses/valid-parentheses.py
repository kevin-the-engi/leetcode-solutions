# check if s is at least size 2
#     if not then return null
# track parens
# iterate thru s
#     check if item is open paren
#         if yes then push to stack
#     if not then check if tracked has items
#         check if last item in stack is corresponding paren
#             if yes then pop from stack
#             if no then return false
#     else return false
# return true if stack is empty
    
class Solution:
    def isValid(self, s: str) -> bool:
        if len(s) < 2:
            return False
        
        parens = {
            '[':']',
            '{':'}',
            '(':')'
        }
        
        tracked = []
        
        for item in s:
            if item in parens:
                tracked.append(item)
            elif len(tracked) > 0:
                lastItem = tracked[-1]
                
                if item == parens[lastItem]:
                    tracked.pop()
                else:
                    return False
            else:
                return False
                
        return True if len(tracked) == 0 else False
