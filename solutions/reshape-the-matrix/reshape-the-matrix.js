/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */

// Goal = Given an m x n matrix, reshape it with the given rows and cols.

// Check to see if size of matrix matches given number of rows and cols
    // return matrix if it doesn't
// flatten matrix into a single array
// iterate thru number of rows
    // create array with values up to length c
    // push into output array
// return output array

var matrixReshape = function(mat, r, c) {
    let size = mat.length * mat[0].length;
    let results = [];
    
    if (size !== r * c) {
        return mat;
    }
    
    mat = mat.flat();
    
    for (let i = 0; i < r; i++) {
        results.push(mat.splice(0, c))
    }
    
    return results;
};

// Time complexity = O(NM). Flatten is O(NM) where n is the number of items in mat and m is number of items in mat[i]. Splice is O(N) and O(R).
// Space complexity = O(N²)
