import re

class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        match = re.match(p, s)

        if match is None:
            return False
        elif match[0] == s:
            return True
        
        return False
