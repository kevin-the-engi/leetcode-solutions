# Goal: Given a grid where 1 represents islands, return the total perimeter of the whole island.

# track visited
# track island squares
# track perimeter

# iterate thru rows
#     iterate thru cols
#         check if curr location is a 1
#             if yes then start dfs with row, col, grid
# create dfs to search island squares and track visited by changing value in grid
#     base case: if row or col is out of grid bounds, then return 1
#     base case: if curr location is a 0, then return 1
#     base case: if curr location is a -1, then return 0
#     track perimeter
#     mark current location as -1 for visited
#     update perimeter with dfs search to right
#     update perimeter with dfs search to left
#     update perimeter with dfs search to down
#     update perimeter with dfs search to up
#     return perimeter

class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        for row in range(len(grid)):
            for col in range(len(grid[row])):
                if grid[row][col]:
                    return self.dfs(row, col, grid)
    
    def dfs(self, row: int, col: int, grid: List[List[int]]) -> int:
        if row < 0 or row >= len(grid) or col < 0 or col >= len(grid[0]):
            return 1
        if not grid[row][col]:
            return 1
        if grid[row][col] == -1:
            return 0
        
        perimeter = 0
        grid[row][col] = -1
        
        perimeter += self.dfs(row + 1, col, grid)
        perimeter += self.dfs(row - 1, col, grid)
        perimeter += self.dfs(row, col + 1, grid)
        perimeter += self.dfs(row, col - 1, grid)
        
        return perimeter
    
# Time complexity = O(n²)
# Space complexity = O(1)
        
