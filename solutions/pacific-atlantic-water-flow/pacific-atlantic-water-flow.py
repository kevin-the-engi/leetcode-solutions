# Goal: Given a 2D array with borders representing the Pacific and Atlantic oceans, return a 2D array of coordinates where water can flow from the Pacific and Atlantic oceans. Water can only flow from higher or equal elevation to lower.
# Unlike other dfs problems where you start with inner squares and move outward with dfs, this one you start at the other edge and move inward. Use two different matrices to track separately where Pacific and Atlantic water flows.

# create result container
# create pacific and atlantic matrices
# loop through top row with pacific matrix and bottom row with atlantic matrix
# loop through left col with pacific matrix and right col with atlantic matrix
# iterate thru matrix and check if both pacific matrix and atlantic matrix marked same square
#     push coordinates into result container

class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        rows = len(heights)
        cols = len(heights[0])
        
        results = []
        pacific = []
        atlantic = []
        
        for i in range(rows):
            pacific.append([0] * cols)
            atlantic.append([0] * cols)

        # check left and right cols
        for i in range(rows):
            self.dfs(i, 0, heights, -1, pacific)
            self.dfs(i, cols - 1, heights, -1, atlantic)
        
        # check top and bottom rows
        for i in range(cols):
            self.dfs(0, i, heights, -1, pacific)
            self.dfs(rows - 1, i, heights, -1, atlantic)

        # check for match in both matrices
        for x in range(rows):
            for y in range(cols):
                if pacific[x][y] == 1 and atlantic[x][y] == 1:
                    results.append([x, y])

        return results;

    def dfs(self, x: int, y: int, heights: List[List[int]], prev: int, ocean: List[List[int]]) -> None:
        if x < 0 or x >= len(heights) or y < 0 or y >= len(heights[0]):     
            return

        # reverse checking elevation by moving upward so if current elevation is lower than previous, it would not flow up
        if heights[x][y] < prev:
            return

        # return at squares where water can already reach
        if ocean[x][y] == 1:
            return

        ocean[x][y] = 1

        # check surrounding squares
        self.dfs(x + 1, y, heights, heights[x][y], ocean)
        self.dfs(x, y + 1, heights, heights[x][y], ocean)
        self.dfs(x - 1, y, heights, heights[x][y], ocean)
        self.dfs(x, y - 1, heights, heights[x][y], ocean)

        return

# Time complexity = O(mn)
# Space complexity = O(mn)
