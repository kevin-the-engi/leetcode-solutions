# check if the arr size is less than 2
#     if yes then return null
# sort the arr by ascending order
# check if the 1st item is 1
#     if not, then change to 1
# iterate thru the arr from 1 onwards
#     check if difference between prev value and curr is less than or equal to 1
#         if not, change value of curr to prev + 1
# get max value from arr last item

class Solution:
    def maximumElementAfterDecrementingAndRearranging(self, arr: List[int]) -> int:
        if len(arr) < 2:
            return 1
        
        arr.sort()
        
        if arr[0] != 1:
            arr[0] = 1
            
        for i in range(len(arr[1:])):
            prev = arr[i]
            curr = arr[i + 1]
            
            if  curr - prev > 1:
                arr[i + 1] = prev + 1
                
        end = len(arr) - 1
                
        return arr[end]
        
        
# Time complexity: Sort is worst case (n log n) and interate through n items.
#     Evaluates to O(N log N) worst case. Best case is O(N).
# Space complexity: O(1)
