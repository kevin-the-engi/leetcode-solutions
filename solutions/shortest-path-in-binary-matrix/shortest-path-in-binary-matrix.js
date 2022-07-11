/**
 * @param {number[][]} grid
 * @return {number}
 */

// Goal: Given an nxn grid, return the length of the shortest path to bottom-right of matrix if possible. If not, then return -1.
// Use BFS to find the shortest path. Carry over the current count in the queue.

// check for edge cases of size 1 and 1 at starting cell
// create queue with of 0, 0 start and 1 count
// track shortest path
// loop while items are in queue
    // shift first item in queue
    // check if out of bounds or if current cell is a 1
        // skip current iteration
    // otherwise set current cell as 1 for visited
        // if current cell is end cell 
            // then update min result with current cell count
        // otherwise push all 8 directions into queue with + 1 to count
// return result count

var shortestPathBinaryMatrix = function(grid) {
    if ((grid.length === 1 && grid[0].length === 1) || grid[0][0] === 1) {
        return grid[0][0] ? -1 : 1;
    }
    
    let queue = [[0,0,1]];
    let result = Infinity;
    
    while (queue.length) {
        let [x, y, cells] = queue.shift();
        
        // check out of bounds or 1 at cell
        if (x < 0 || x >= grid.length || y < 0 || y >= grid.length || grid[x][y] === 1) {
            continue;
        } else {
            // mark visited
            grid[x][y] = 1;
            
            // check if at end cell
            if (x === grid.length - 1 && y === grid.length - 1) {
                // update min path
                result = Math.min(result, cells);   
            } else {
                // push all 8 directions into queue with + 1 to current path total
                queue.push([x + 1, y + 1, cells + 1]);
                queue.push([x + 1, y - 1, cells + 1]);
                queue.push([x - 1, y + 1, cells + 1]);
                queue.push([x - 1, y - 1, cells + 1]);
                queue.push([x + 1, y, cells + 1]);
                queue.push([x - 1, y, cells + 1]);
                queue.push([x, y + 1, cells + 1]);
                queue.push([x, y - 1, cells + 1]);
            }
        }
    }
    
    return result === Infinity ? -1 : result;
};

// Time complexity = O(n²)
// Space complexity = O(n)
