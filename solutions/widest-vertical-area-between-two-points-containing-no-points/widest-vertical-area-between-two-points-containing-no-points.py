# sort nums 
# iterate thru x array
#     get difference between next and current num
#     update width if current difference is greater than previous
# return width

class Solution:
    def maxWidthOfVerticalArea(self, points: List[List[int]]) -> int:
        points.sort(key=lambda point:point[0])
        
        width = 0
        
        for i in range(len(points) - 1):
            curr = points[i]
            next = points[i + 1]
            
            width = max(next[0] - curr[0], width)
                                       
        return width
