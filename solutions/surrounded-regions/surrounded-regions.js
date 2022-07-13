/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

// Goal: Given an mxn matrix, return a matrix with any O's surrounded by X's changed to X's.
// Use dfs to mark any O's connected to the outer edges. Then go through matrix and change any O's not marked.

var solve = function(board) {
    let rows = board.length;
    let cols = board[0].length;
    let visited = [];
    
    // create tracking matrix
    for (let i = 0; i < rows; i++) {
        visited[i] = Array(cols).fill(0)
    }
    
    // iterate thru rows and use dfs on left and right cols
    for (let i = 0; i < rows; i++) {
        dfs(i, 0, board, visited);
        dfs(i, cols - 1, board, visited);
    }

    // iterate thru cols and use dfs on top and bottom rows
    for (let j = 0; j < cols; j++) {
        dfs(0, j, board, visited);
        dfs(rows - 1, j, board, visited);
    }
    
    // iterate thru matrix and change any O's not visited into X's
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (visited[i][j] === 0) {
                board[i][j] = 'X';
            }
        }
    }
    
    return board;
};

// mark any O's connected to outer edge as visited
function dfs(x, y, board, visited) {
    if (x < 0 || x >= board.length || y < 0 || y >= board[0].length) {
        return;
    }
    
    if (visited[x][y] === 1) {
        return;
    }
    
    if (board[x][y] === 'X') {
        visited[x][y] = 1;
        return;
    }
    
    visited[x][y] = 1;
    
    dfs(x + 1, y, board, visited);
    dfs(x, y + 1, board, visited);
    dfs(x - 1, y, board, visited);
    dfs(x, y - 1, board, visited);

    return;
}

// Time complexity = O(mn)
// Space complexity = O(mn)
