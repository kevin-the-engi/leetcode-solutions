/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// create a temp array
// iterate from first col to last
    // iterate from last row to first
        // collect numbers and push into temp
        // [1,2,3][4,5,6][7,8,9] => 7,4,1,8,5,2,9,6,3
// iterate from first row to last
    // iterate from first col to last
        // update matrix with values from temp array

var rotate = function(matrix) {
    let temp = [];
    let size = matrix.length;
    
    for (let col = 0; col < size; col++) {
        for (let row = size - 1; row >= 0; row--) {
            temp.push(matrix[row][col])
        }
    }
    
    let i = 0;
    
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            matrix[row][col] = temp[i];
            i++;
        }
    }
};
