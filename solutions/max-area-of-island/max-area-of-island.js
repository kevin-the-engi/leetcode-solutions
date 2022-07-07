      /**
 * @param {number[][]} grid
 * @return {number}
 */

// Goal: Given an m x n grid, return the max area of the largest island represented by 1.
// Have one function traverse grid, check for island, call getArea function to get area, and update maxArea if greater. getArea function will current area as visited, and use dfs to check nearbly nodes as part of island and return total area.

// track max area
// iterate thru matrix
    // check if current cell is an island
        // if yes then use getArea function
        // update max area if new area is greater
// return max area

// base case: if current cell is out of bounds, then return
// base case: if current cell is not an island, then return
// mark current cell as visited
// set curr area at 1
// add to curr area the resulting areas of nearby cells by using dfs in 4 directions
// return curr area

var maxAreaOfIsland = function(grid) {
    let maxArea = 0;
    
    if (grid.length === 1 && grid[0].length === 1) {
        return grid[0][0];
    }
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            // check for island
            if (grid[i][j] === 1) {
                maxArea = Math.max(maxArea, getArea(i, j, grid));   
            }
        }
    }
    
    return maxArea;
};

function getArea(x, y, grid) {
    // check out of bounds
    if (x < 0 || x >= grid.length || y < 0 || y >= grid[x].length) {
        return 0;
    }
    
    // check if current cell is not an island
    if (grid[x][y] === 0) {
        return 0;
    }
    
    // mark area as visited
    grid[x][y] = 0;
    let area = 1;
    
    // dfs to check all adjacent cells for islands
    area += getArea(x, y + 1, grid);
    area += getArea(x + 1, y, grid);
    area += getArea(x, y - 1, grid);
    area += getArea(x - 1, y, grid);
    
    // should return default min area
    return area;
}

// Time complexity = O(mn)
// Space complexity = O(1)
