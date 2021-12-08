/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

// Goal = Given two strings, return true if string in ransomNote can be constructed from magazine.

// track number of occurrences in magazine
// iterate thru magazine
    // update tracker with chars in magazine
// iterate thru ransomNote
    // check if char exists in tracker
        // if so the decrement
        // otherwise return false
// return true if false is not triggered

var canConstruct = function(ransomNote, magazine) {
    let tracker = {};
    
    for (let i = 0; i < magazine.length; i++) {
        let char = magazine[i];
        tracker[char] ? tracker[char] += 1 : tracker[char] = 1;
    }
    
    for (let i = 0; i < ransomNote.length; i++) {
        let char = ransomNote[i];
        
        if (tracker[char]) {
            tracker[char] -= 1
        } else {
            return false;
        }
    }
    
    return true;
};

// Time complexity = O(N)
// Space complexity = O(N)
