# Goal: Given an nxn grid, return the length of the shortest path to bottom-right of matrix if possible. If not, then return -1.
# Use BFS to find the shortest path. Carry over the current count in the queue.

# check for edge cases of size 1 and 1 at starting cell
# create queue with of 0, 0 start and 1 count
# track shortest path
# loop while items are in queue
#     shift first item in queue
#     check if out of bounds or if current cell is a 1
#         skip current iteration
#     otherwise set current cell as 1 for visited
#         if current cell is end cell 
#             then update min result with current cell count
#         otherwise push all 8 directions into queue with + 1 to count
# return result count

class Solution:
    def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:
        if (len(grid) == 1 and len(grid[0]) == 1) or grid[0][0] == 1:
            return -1 if grid[0][0] == 1 else 1
            
        queue = [[0,0,1]]
        result = float('inf')

        while len(queue) > 0:
            x, y, cells = queue.pop(0)
            
            # check out of bounds or 1 at cell
            if x < 0 or x >= len(grid) or y < 0 or y >= len(grid) or grid[x][y] == 1:
                continue
            else:
                # mark visited
                grid[x][y] = 1

                # check if at end cell
                if x == len(grid) - 1 and y == len(grid) - 1:
                    # update min path
                    result = min(result, cells)   
                else:
                    # push all 8 directions into queue with + 1 to current path total
                    queue.append([x + 1, y + 1, cells + 1])
                    queue.append([x + 1, y - 1, cells + 1])
                    queue.append([x - 1, y + 1, cells + 1])
                    queue.append([x - 1, y - 1, cells + 1])
                    queue.append([x + 1, y, cells + 1])
                    queue.append([x - 1, y, cells + 1])
                    queue.append([x, y + 1, cells + 1])
                    queue.append([x, y - 1, cells + 1])

        return -1 if result == float('inf') else result

# Time complexity = O(n²)
# Space complexity = O(n)
