# Goal: Given an mxn matrix, return a matrix with any O's surrounded by X's changed to X's.
# Use dfs to mark any O's connected to the outer edges. Then go through matrix and change any O's not marked.

class Solution:
    def solve(self, board: List[List[str]]) -> None:
        rows = len(board)
        cols = len(board[0])
        visited = []

        # create tracking matrix
        for i in range(rows):
            visited.append([0] * cols)

        # iterate thru cols and use dfs on top and bottom rows
        for j in range(cols):
            self.dfs(0, j, board, visited)
            self.dfs(rows - 1, j, board, visited)
            
        # iterate thru rows and use dfs on left and right cols
        for i in range(rows):
            self.dfs(i, 0, board, visited)
            self.dfs(i, cols - 1, board, visited)
            
        # iterate thru matrix and change any O's not visited into X's
        for i in range(rows):
            for j in range(cols):
                if visited[i][j] == 0:
                    board[i][j] = 'X'
                    
        return board

    # mark any O's connected to outer edge as visited
    def dfs(self, x: int, y: int, board: List[List[str]], visited: List[List[int]]) -> None:
        if x < 0 or x >= len(board) or y < 0 or y >= len(board[0]):
            return

        if visited[x][y] == 1:
            return

        if board[x][y] == 'X':
            visited[x][y] = 1
            return

        visited[x][y] = 1
        
        self.dfs(x + 1, y, board, visited)
        self.dfs(x, y + 1, board, visited)
        self.dfs(x - 1, y, board, visited)
        self.dfs(x, y - 1, board, visited)
        
        return

# Time complexity = O(mn)
# Space complexity = O(mn)
