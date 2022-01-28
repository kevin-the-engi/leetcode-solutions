/**
 * @param {string} s
 * @return {string}
 */
// Goal = Given a string, reverse each word in the string.

// split the string into an array
// split each word in the array into an array of chars
    // reverse the array of chars
    // rejoin chars into words
// rejoin the words into the full string

var reverseWords = function(s) {
    return s.split(' ')
            .map(word => word.split('').reverse().join(''))
            .join(' ')
};

// Time complexity = .split O(n) + .map O(n) * .split/reverse/join O(n) + .join O(n) = O(n²)
// Space complexity = O(1)
