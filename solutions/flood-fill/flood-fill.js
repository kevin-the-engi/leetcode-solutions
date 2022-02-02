/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */

// Goal = Given an image represented as a mxn matrix, and coordinates represented by sr and sc, take the value at those coordinates and all surrounding squares of the same value, and convert them to the newColor number.
// Use recursion to recursively check all surrounding numbers for the same value.

// create tracker to track visited coordinates
// base = if coordinates are out of bounds then return
// base = if value of matrix location is not equal to initial value or if coordinates exist in tracker, then return
// change current matrix location to value of newColor
// add current coordinates to tracker
// recursion = call function separately, one for each 4-directional connected coordinate

var floodFill = function(image, sr, sc, newColor) {
    let tracker = new Set()
    fill(tracker, image[sr][sc], image, sr, sc, newColor)
    
    return image
};

function fill (tracker, num, image, sr, sc, newColor) {
    const x = sr.toString()
    const y = sc.toString()
    
    if (image[sr] === undefined || image[sr][sc] === undefined) {
        return
    }
    
    if (num !== image[sr][sc] || tracker.has(x + y)) {
        return
    }
    
    image[sr][sc] = newColor
    tracker.add(x + y)
    fill(tracker, num, image, sr + 1, sc, newColor)
    fill(tracker, num, image, sr - 1, sc, newColor)
    fill(tracker, num, image, sr, sc + 1, newColor)
    fill(tracker, num, image, sr, sc - 1, newColor)
    
    return
}

// Time complexity = O(4ⁿ)
// Space complexity = O(n)
