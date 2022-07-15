# Goal: Given an m x n matrix, return the minimum number of turns needed to turn all oranges rotten or -1 if not possible.
# 1. Traverse matrix and look for rotten oranges.
# 2. Add rotten orange coordinates to queue.
# 3. Use bfs and loop thru queue items while adding fresh oranges to queue.
# 4. Update min. turns.
# 5. Traverse matrix again and check if there are still fresh oranges.

class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        queue = []
        result = 0

        # look for rotten oranges
        for x in range(len(grid)):
            for y in range(len(grid[x])):
                if grid[x][y] == 2:
                    queue.append([x, y, 0])

        # bfs to find fresh oranges and number of turns
        while len(queue):
            x, y, turn = queue.pop(0)
            
            # check out of bounds
            if x < 0 or x >= len(grid) or y < 0 or y >= len(grid[0]):
                continue

            # check if empty or visited
            if grid[x][y] == 0 or grid[x][y] == 9:
                continue
                
            grid[x][y] = 9
            
            queue.append([x + 1, y, turn + 1])
            queue.append([x, y + 1, turn + 1])
            queue.append([x - 1, y, turn + 1])
            queue.append([x, y - 1, turn + 1])
            
            result = turn

        # check for any unconnected fresh oranges
        for x in range(len(grid)):
            for y in range(len(grid[0])):
                if grid[x][y] == 1:
                    return -1

        return result

# Time complexity = O(mn)
# Space complexity = O(n)
