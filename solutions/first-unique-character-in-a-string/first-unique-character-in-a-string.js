/**
 * @param {string} s
 * @return {number}
 */

// Goal = Given a string, find the first unique char and return its index, otherwise return -1.

// track number of occurrences in s
// iterate thru s
    // update number of occurrences in tracker
// iterate thru s again
    // if the current char has an occurrence of 1, return the index
// return -1 if nothing is unique

var firstUniqChar = function(s) {
    let tracker = {};
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];     
        tracker[char] ? tracker[char] += 1 : tracker[char] = 1;
    }
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
        if (tracker[char] === 1) {
            return i;
        }
    }
    
    return -1;
};

// Time complexity = O(N).
// Space complexity = O(N).
