/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

// Goal: Given a 32 unsigned integer input, return a unsigned integer after transforming it to binary and reversing it.
// transform input to binary
// transform into array and use reverse method
// rejoin as string
// make up for missing 0s
// return as 32 bit int

var reverseBits = function(n) {
    n = n.toString(2).split('').reverse().join('');
    
    while(n.length < 32) {
        n += '0';
    }

    return parseInt(n, 2)
};

// Time complexity = O(N)
// Space complexity = O(1)
