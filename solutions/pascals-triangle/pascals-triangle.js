/**
 * @param {number} numRows
 * @return {number[][]}
 */

// Goal = Generate pascal triangle rows when given number of rows as input.
// Create base pascal container with 1st row
// iterate from 1 onwards until numRows is reached
    // create a new row 
    // create start and end points
    // loop until prev row is complete
        // add starting and end numbers and push into row array
        // increment start and end
    // push last 1 into row array
    // push into pascal container
// return pascal container

var generate = function(numRows) {
    let pascal = [[1]]; 
    
    for (let i = 1; i < numRows; i++) {
        let row = [1];
        let prev = pascal[i - 1];
        let start = 0, end = 1;
        
        while (start < prev.length - 1) {
            row.push(prev[start] + prev[end])
            start++;
            end++;
        }
        
        row.push(1);
        pascal.push(row);
    }

    return pascal;
};

// Time complexity = O(NM). Iterate thru n rows and also interate thru m items in pascal container.
// Space complexity = O(N) or O(N²). It is expected to return a 2D array.
