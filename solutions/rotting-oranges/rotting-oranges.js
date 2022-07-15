/**
 * @param {number[][]} grid
 * @return {number}
 */

// Goal: Given an m x n matrix, return the minimum number of turns needed to turn all oranges rotten or -1 if not possible.
// 1. Traverse matrix and look for rotten oranges.
// 2. Add rotten orange coordinates to queue.
// 3. Use bfs and loop thru queue items while adding fresh oranges to queue.
// 4. Update min. turns.
// 5. Traverse matrix again and check if there are still fresh oranges.

var orangesRotting = function(grid) {
    let queue = [];
    let result = 0;
    
    // look for rotten oranges
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j, 0]);
            }
        }
    }
    
    // bfs to find fresh oranges and number of turns
    while (queue.length) {
        let [x, y, turn] = queue.shift();
        
        // check out of bounds
        if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length) {
            continue;
        }
        
        // check if empty or visited
        if (grid[x][y] === 0 || grid[x][y] === 9) {
            continue;
        }
        
        // mark visited
        grid[x][y] = 9;
        
        queue.push([x + 1, y, turn + 1]);
        queue.push([x, y + 1, turn + 1]);
        queue.push([x - 1, y, turn + 1]);
        queue.push([x, y - 1, turn + 1]);
        
        result = turn;
    }
    
    // check for any unconnected fresh oranges
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                return -1;
            }
        }
    }
    
    return result;
}

// Time complexity = O(mn)
// Space complexity = O(n)
