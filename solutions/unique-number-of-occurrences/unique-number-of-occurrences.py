# Goal: Check if all values in input arr has unique number of occurrences and return true if so.

# track the number of occurrences
# iterate thru arr input
#     check if value exists in tracker
#         if no, set to 1
#         otherwise increment
# track number of times each occurrence appear for each value
# iterate thru tracked occurrences
#     check if it exists in occurrences tracker
#         if it exists, it means it's not unique so return false
#         otherwise set that occurrence in tracker
# return true if nothing triggers false

class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        tracker = {}
        
        for val in arr:
            if val in tracker:
                tracker[val] += 1
            else:
                tracker[val] = 1
                
        occurrences = {}
        
        for occ in tracker:
            number = tracker[occ]
            
            if number in occurrences:
                return False
            else: 
                occurrences[number] = True
        
        return True

# Time complexity = O(N). Iterate thru n items in arr. Iterate thru m items for number of occurrences. O(N + M), drop less significant terms.
# Space complexity = O(N). Same reason as above.
