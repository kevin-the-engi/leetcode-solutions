/**
 * @param {number} n
 * @return {number}
 */

// convert n into a string and split into an arr
// get the product of all numbers in arr
// get the sum of all numbers in arr
// product - sum

var subtractProductAndSum = function(n) {
    let values = n.toString().split('');
    let product = values.reduce((a, b) => a * b);
    let sum = values.reduce((a, b) => Number(a) + Number(b));
    
    return product - sum;
};

// Time complexity is O(N) for toString method, O(N) for split method, O(N) for each reduce method.
    // Final complexity is O(N).
// Space complexity is O(N) to convert n to a string, O(N) to convert the string to an array.
    // Final complexity is O(N)
