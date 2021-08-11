# track number of islands
# iterate thru matrix rows
#     iterate thru matrix cols
#         check if current location is a 1
#             if so then increment islands
#             call function to submerge current location and connecting locations
#         if not then continue
# create function to submerge island block
#     check if row or col has reached the start of row or col
#     check if row or col has reached the end of row or col
#         if so then return
#     check if current location is 0
#         if so then return
#     change current location to 0
#     call function to check and submerge right
#     call function to check and submerge down
#     call function to check and submerge left
#     call function to check and submerge up
# return islands

class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        islands = 0
        x = len(grid)
        y = len(grid[0])
        
        for row in range(x):
            for col in range(y):
                if grid[row][col] == '1':
                    islands += 1
                    self.submerge(grid, row, col)
                else:
                    continue
        
        return islands
     
    def submerge(self, grid: List[List[str]], row: int, col: int) -> None:
        if row < 0 or col < 0:
            return
        if row == len(grid) or col == len(grid[0]):
            return
        if grid[row][col] == '0':
            return

        grid[row][col] = '0'

        self.submerge(grid, row + 1, col)
        self.submerge(grid, row - 1, col)
        self.submerge(grid, row, col + 1)
        self.submerge(grid, row, col - 1)

        return

# Double nested loops to interate thru matrix so O(N^2) time complexity.
# For space complexity, only primitives are used while recursion uses same matrix so O(1) space complexity.
