/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// Goal = Search a 2D matrix for the target value and return true if it exists.

// iterate thru matrix
    // check first and last elements of matrix[i] to see if target is within range
        // if so, call binary search function

// binary search function takes in arr and target and recursively search
    // divide array length into 2 to get midpoint
    // base: check if midpoint value is target and return true if so
    // base: if array size is 1 and not target value then return false
    // recursion: if target is less than mid value, recursively call left half of array, otherwise call right half

var searchMatrix = function(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        let arr = matrix[i];
        let start = arr[0];
        let end = arr[arr.length - 1];
        
        if (target >= start && target <= end) {
            return searchArray(arr, target);
        }
    }
    
    return false;
};

function searchArray(arr, target) {
    let mid = Math.floor(arr.length / 2);
    
    if (arr[mid] === target) {
        return true;
    }
    
    if (arr.length === 1 && arr[mid] !== target) {
        return false;
    }
    
    if (target < arr[mid]) {
        return searchArray(arr.slice(0, mid), target);
    } else {
        return searchArray(arr.slice(mid), target);
    }
}
