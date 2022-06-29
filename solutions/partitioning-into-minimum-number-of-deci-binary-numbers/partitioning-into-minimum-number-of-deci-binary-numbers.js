/**
 * @param {string} n
 * @return {number}
 */

// Goal: Given a string n, return the minimum number of operations needed to sum up to n using only deci-binary numbers.
// The output should be equal to the max digit in the string since all other numbers will be reduced to 0 by the time the max number reaches 0.

// split the string into an array
// convert the strings into numbers
// find max using resulting array

var minPartitions = function(n) {
    return Math.max(...(n.split('').map(n => Number(n))));
};

// Time complexity = O(n)
// Space complexity = O(n)
