/**
 * @param {number[][]} grid
 * @return {number}
 */

// Goal: Given a grid where 1 represents islands, return the total perimeter of the whole island.

// track visited
// track island squares
// track perimeter

// iterate thru rows
    // iterate thru cols
        // check if curr location is a 1
            // if yes then start dfs with row, col, grid
// create dfs to search island squares and track visited by changing value in grid
    // base case: if row or col is out of grid bounds, then return 1
    // base case: if curr location is a 0, then return 1
    // base case: if curr location is a -1, then return 0
    // track perimeter
    // mark current location as -1 for visited
    // update perimeter with dfs search to right
    // update perimeter with dfs search to left
    // update perimeter with dfs search to down
    // update perimeter with dfs search to up
    // return perimeter

var islandPerimeter = function(grid) {
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {            
            if (grid[row][col]) {
                return dfs(row, col, grid);
            }
        }
    }
};

function dfs (row, col, grid) {
    if ((row < 0 || row >= grid.length) || (col < 0 || col >= grid[0].length)) {
        return 1;
    }
    
    if (!grid[row][col]) {
        return 1;
    }
    
    if (grid[row][col] === -1) {
        return 0;
    }
    
    let perimeter = 0;
    grid[row][col] = -1;
    
    perimeter += dfs(row + 1, col, grid);
    perimeter += dfs(row - 1, col, grid);
    perimeter += dfs(row, col + 1, grid);
    perimeter += dfs(row, col - 1, grid);
    
    return perimeter;
};

// Time complexity = O(n²)
// Space complexity = O(1)
