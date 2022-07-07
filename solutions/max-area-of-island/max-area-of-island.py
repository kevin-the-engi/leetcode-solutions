# Goal: Given an m x n grid, return the max area of the largest island represented by 1.
# Have one function traverse grid, check for island, call getArea function to get area, and update maxArea if greater. getArea function will current area as visited, and use dfs to check nearbly nodes as part of island and return total area.

# track max area
# iterate thru matrix
#     check if current cell is an island
#         if yes then use getArea function
#         update max area if new area is greater
# return max area

# base case: if current cell is out of bounds, then return
# base case: if current cell is not an island, then return
# mark current cell as visited
# set curr area at 1
# add to curr area the resulting areas of nearby cells by using dfs in 4 directions
# return curr area

class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        maxArea = 0

        if len(grid) == 1 and len(grid[0]) == 1: 
            return grid[0][0]

        for i in range(len(grid)):
            for j in range(len(grid[i])):
                # check for island
                if grid[i][j] == 1:
                    maxArea = max(maxArea, self.getArea(i, j, grid))  

        return maxArea

    def getArea(self, x: int, y: int, grid: List[List[int]]) -> int:
        # check out of bounds
        if x < 0 or x >= len(grid) or y < 0 or y >= len(grid[x]):
            return 0

        # check if current cell is not an island
        if grid[x][y] == 0:
            return 0

        # mark area as visited
        grid[x][y] = 0
        area = 1

        # dfs to check all adjacent cells for islands
        area += self.getArea(x, y + 1, grid)
        area += self.getArea(x + 1, y, grid)
        area += self.getArea(x, y - 1, grid)
        area += self.getArea(x - 1, y, grid)

        # should return default min area
        return area

# Time complexity = O(mn)
# Space complexity = O(1)
