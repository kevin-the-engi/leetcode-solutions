/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

// track visited positions
// track results
// create pointer for row
// create pointer for col
// get length of row
// get length of col

// loop while the number of items in results is less than matrix size
    // loop thru row/col and while position has not been visited
        // push val of position to results
        // add position to visited
        // increment/decrement corresponding row/col
    // fix position

var spiralOrder = function(matrix) {
    let visited = {},
        spiralVals = [],
        row = 0,
        col = 0;
    
    let numRows = matrix.length,
        numCols = matrix[0].length;
    let size = numRows * numCols;
    
    while (spiralVals.length !== size) {
        while (!checkVisited(visited, row, col) && col < numCols) {     // iterates from left to right of row
            spiralVals.push(matrix[row][col]);
            visited[`${row}${col}`] = true;
            col++;
        }
        
        row++;  // move position down to the next row
        col--;  // return col within bounds
        
        while (!checkVisited(visited, row, col) && row < numRows) {     // iterates from top to bottom of col
            spiralVals.push(matrix[row][col]);
            visited[`${row}${col}`] = true;
            row++;
        }        
        
        row--;  // reset row within bounds
        col--;  // move position left to the prev col
        
        while (!checkVisited(visited, row, col) && col >= 0) {          // iterates from right to left of row
            spiralVals.push(matrix[row][col]);
            visited[`${row}${col}`] = true;
            col--;
        }
        row--;  // move position up to the prev row
        col++;  // reset col within bounds
        
        while (!checkVisited(visited, row, col) && row >= 0) {          // iterates from bottom to top of col
            spiralVals.push(matrix[row][col]);
            visited[`${row}${col}`] = true;
            row--;
        }
        
        row++;  // reset row within bounds
        col++;  // move position right to the next col
    }
    
    return spiralVals;
};

var checkVisited = (visited, row, col) => {         // checks if rowcol exists within visited; visited = { 00: true }
    if (!visited[`${row}${col}`]) {
        return false;
    } else {
        return true;
    }
}

/* 

Time complexity: Outer loops runs X times, first inner loop runs n times for n items in a row, 2nd loop runs m - 1 times for number of rows, 
                    3rd loop runs n - 1 times for number of items in row, 4th loop runs m - 2 times for number of rows.
                    O( x ((n) + (m - 1) + (n - 1) + (m - 2) ));
                =   O(xn + xm - x + xn - x + xm - 2x)
                =   O(2xn + 2xm + 4x)
                =   O(xn + xm)
Space complexity: O(MN) to house same number of items as matrix.
                    
*/
