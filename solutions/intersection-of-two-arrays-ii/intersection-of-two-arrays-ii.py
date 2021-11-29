# Goal: Given an m-size array and an n-size array, return a pair of values that shows intersected numbers, as in numbers that exist in both arrays.
# track number of occurrences in nums1 arr
# track results
# iterate thru nums1 array
#     add curr val to tracker if it doesn't exist
#     if it does exists, increment occurrence
# iterate thru num2 array
#     if curr val exists in tracker, add to intersection and decrement occurrence
# return intersection

class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        tracker = {}
        intersection = []
        
        for val in nums1:
            if val in tracker:
                tracker[val] += 1
            else:
                tracker[val] = 1
                
        for val in nums2:
            if val in tracker and tracker[val] != 0:
                intersection.append(val)
                tracker[val] -= 1
                
        return intersection
        
# Time complexity = O(N). Iterating thru n items in nums1 and nums2.
# Space complexity = O(N). Create n size object to track n items from nums1.
