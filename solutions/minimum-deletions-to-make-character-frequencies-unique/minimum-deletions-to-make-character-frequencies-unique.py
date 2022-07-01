# Goal: Given a string, return the number of deletes needed so that the frequency count for each letter is unique.
# First get frequency count for each char, then convert to array. Loop through array of frequencies and track unique counts while updating duplicates.

# track frequency count with object
# iterate thru string
#     if tracker[s[i]] does not exist, then add to tracker
#     otherwise increment count for char
# convert tracker object to array
# track unique count values with set
# track min deletions
# track index
# loop while index < count array length
#     if count[i] is 0, then increment index
#     else if count[i] exists in tracker
#         then increment min
#         update count[i] with count[i] - 1
#     else 
#         add unique count[i] to tracker
#         increment index
# return min

class Solution:
    def minDeletions(self, s: str) -> int:
        counts = {}
        
        for char in s:
            if char not in counts:
                counts[char] = 0
            counts[char] += 1
            
        counts = list(counts.values())
        
        minDel = 0
        uniques = set()
        i = 0
        
        while i < len(counts):
            if counts[i] is 0:
                i += 1
            elif counts[i] in uniques:
                minDel += 1
                counts[i] -= 1
            else:
                uniques.add(counts[i])
                i += 1
        
        return minDel
    
# Time complexity = O(n)
# Space complexity = O(n)
