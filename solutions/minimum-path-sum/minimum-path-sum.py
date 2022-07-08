# Goal: Given an mxn grid of numbers, return the lowest sum of the path of numbers from top left to bottom right.
# BFS while carrying over the previous sums would work but inefficient. Use dynamic programming to calculate rows and cols sums from left and right while taking the min. of both the calculate cells in between.

# iterate thru grid rows
#     iterate thru grid cols
#         if both row and col is > 0, then add grid[row][col] to min of left and top cell 
#         otherwise if either row or col is > 0
#             then if col > 0, add grid[row][col] to left cell
#             else add grid[row][col] to top cell
# return bottom right cell in grid

class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        x = len(grid) - 1
        y = len(grid[x]) - 1
        
        for row in range(x + 1):
            for col in range(y + 1):
                # skip 0, 0
                if row > 0 and col > 0:
                    # find min between top and left cells
                    grid[row][col] += min(grid[row][col - 1], grid[row - 1][col]);
                elif row > 0 or col > 0:
                    if row > 0:
                        grid[row][col] += grid[row - 1][col]
                    else:
                        grid[row][col] += grid[row][col - 1]
                        
        return grid[x][y]
                    
        
# Time complexity = O(mn)
# Space complexity = O(1)
