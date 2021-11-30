# Goal = Generate pascal triangle rows when given number of rows as input.
# Create base pascal container with 1st row
# iterate from 1 onwards until numRows is reached
#     create a new row 
#     create start and end points
#     loop until prev row is complete
#         add starting and end numbers and push into row array
#         increment start and end
#     push last 1 into row array
#     push into pascal container
# return pascal container

class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        pascal = [[1]]
        
        for i in range(1, numRows):
            row = [1]
            start = 0
            end = 1
            prev = pascal[i - 1]
            
            while start < len(prev) - 1:
                row.append(prev[start] + prev[end])
                start += 1
                end += 1
                
            row.append(1)
            pascal.append(row)
            
        return pascal            
        

# Time complexity = O(NM). Iterate thru n rows and also interate thru m items in pascal container.
# Space complexity = O(N) or O(N²). It is expected to return a 2D array.
