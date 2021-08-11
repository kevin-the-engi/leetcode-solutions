/**
 * @param {character[][]} grid
 * @return {number}
 */

// track number of islands
// iterate thru matrix rows
    // iterate thru matrix cols
        // check if current location is a 1
            // if so then increment islands
            // call function to submerge current location and connecting locations
        // if not then continue
// create function to submerge island block
    // check if row or col has reached the start of row or col
    // check if row or col has reached the end of row or col
        // if so then return
    // check if current location is 0
        // if so then return
    // change current location to 0
    // call function to check and submerge right
    // call function to check and submerge down
    // call function to check and submerge left
    // call function to check and submerge up 
// return islands

var numIslands = function(grid) {
    let islands = 0;
    const x = grid[0].length;
    const y = grid.length;
    
    for (let row = 0; row < y; row++) {
        for (let col = 0; col < x; col++) {
            if (grid[row][col] === '1') {
                islands++;
                submerge(grid, row, col);
            } else {
                continue;
            }
        }
    }
    
    function submerge (grid, row, col) {
        if (row < 0 || col < 0) {
            return;
        }
        
        if (row === y || col === x) {
            return;
        }
        
        if (grid[row][col] === '0') {
            return;
        }
        
        grid[row][col] = '0';
        
        submerge(grid, row + 1, col);
        submerge(grid, row - 1, col);
        submerge(grid, row, col + 1);
        submerge(grid, row, col - 1);
        
        return;
    }

    return islands;
};
    
// Double nested loops to interate thru matrix so O(N^2) time complexity.
// For space complexity, only primitives are used while recursion uses same matrix so O(1) space complexity.
