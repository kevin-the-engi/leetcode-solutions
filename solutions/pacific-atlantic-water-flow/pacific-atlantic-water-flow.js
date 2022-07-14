/**
 * @param {number[][]} heights
 * @return {number[][]}
 */

// Goal: Given a 2D array with borders representing the Pacific and Atlantic oceans, return a 2D array of coordinates where water can flow from the Pacific and Atlantic oceans. Water can only flow from higher or equal elevation to lower.
// Unlike other dfs problems where you start with inner squares and move outward with dfs, this one you start at the other edge and move inward. Use two different matrices to track separately where Pacific and Atlantic water flows.

// create result container
// create pacific and atlantic matrices
// loop through top row with pacific matrix and bottom row with atlantic matrix
// loop through left col with pacific matrix and right col with atlantic matrix
// iterate thru matrix and check if both pacific matrix and atlantic matrix marked same square
    // push coordinates into result container

var pacificAtlantic = function(heights) {
    let results = [];
    let pacific = [];
    let atlantic = [];
    
    for (let i = 0; i < heights.length; i++) {
        pacific[i] = Array(heights[0].length).fill(0);
        atlantic[i] = Array(heights[0].length).fill(0);
    }
    
    // check left and right cols
    for (let i = 0; i < heights.length; i++) {
        dfs(i, 0, heights, -1, pacific);
        dfs(i, heights[0].length - 1, heights, -1, atlantic);
    }
    
    // check top and bottom rows
    for (let i = 0; i < heights[0].length; i++) {
        dfs(0, i, heights, -1, pacific);
        dfs(heights.length - 1, i, heights, -1, atlantic);
    }

    // check for match in both matrices
    for (let x = 0; x < heights.length; x++) {
        for (let y = 0; y < heights[x].length; y++) {
            if (pacific[x][y] === 1 && atlantic[x][y] === 1) {
                results.push([x, y])
            }
        }
    }
    
    return results;
};

function dfs(x, y, heights, prev, ocean) {
    if (x < 0 || x >= heights.length || y < 0 || y >= heights[0].length) {     
        return;
    }
    
    // reverse checking elevation by moving upward so if current elevation is lower than previous, it would not flow up
    if (heights[x][y] < prev) {
        return;
    }
    
    // return at squares where water can already reach
    if (ocean[x][y] === 1) {
        return;
    }
    
    ocean[x][y] = 1;
    
    // check surrounding squares
    dfs(x + 1, y, heights, heights[x][y], ocean);
    dfs(x, y + 1, heights, heights[x][y], ocean);
    dfs(x - 1, y, heights, heights[x][y], ocean);
    dfs(x, y - 1, heights, heights[x][y], ocean);
    
    return;
}

// Time complexity = O(mn)
// Space complexity = O(mn)
