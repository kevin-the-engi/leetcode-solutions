# check edge case of empty needle input
#     return 0 if empty
# return -1 if needle str is not in haystack str otherwise return its index using index method

class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if not len(needle):
            return 0
        
        return -1 if needle not in haystack else haystack.index(needle)
        
# Time complexity = O(N) for n items in haystack using index method.
# Space complexity = O(1) 
