/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

// Goal = Given an array of strings, reverse the array by modifying the strings in place.

// create start pointer at 0 and end pointer at s length - 1
// loop while start is less than end
    // swap start and end values
    // increment start
    // decrement end

var reverseString = function(s) {
    let start = 0
    let end = s.length - 1
    
    while (start < end) {
        [s[start], s[end]] = [s[end], s[start]]
        start++
        end--
    }
};

// Time complexity = O(n/2) = O(n)
// Space complexity = O(1)
