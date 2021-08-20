# check if intervals size is 1
#     if yes then return intervals since no merging necessary
# sort intervals by each interval's first value
# use first interval as base comparison
# create container for result
# iterate thru intervals
#     check if current interval is within range of base interval
#         if yes then update base interval
#         if no then push base interval to container
#             update base interval with current interval to use as comparison
# push last base to result
# return container

class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        if len(intervals) == 1:
            return intervals
        
        intervals.sort()
        
        start = intervals[0][0]
        end = intervals[0][1]
        merged = []
        
        for interval in intervals:
            currStart = interval[0]
            currEnd = interval[1]
            
            if currStart == start and currEnd == end:           # if both a and b are the same
                continue
            elif ((currStart > start and currStart <= end) or   # if start of b is within range of a
                  (currEnd > start and currEnd <= end) or       # if end of b is within range of a
                  (currStart == start and currEnd > end) or     # if start of a and b are the same but end of b is outside of a
                  (currStart == start and currEnd < end)):      # if start of a and b are the same but end of b is inside of a
                start = min(currStart, start)
                end = max(currEnd, end)
            else:                                               # if no overlap
                merged.append([start, end])
                start = currStart
                end = currEnd
                
        merged.append([start, end])
        
        return merged
        
# Time complexity for sort is O(n log n). There's another O(N) for n intervals.
#     It becomes O(N + (N log N)) = O(N log N).
# Space complexity for sort is O(N) + O(N) for merged.
#     It becomes O(N).
        
