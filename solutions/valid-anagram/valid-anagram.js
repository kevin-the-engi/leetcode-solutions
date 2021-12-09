/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Goal = Given two strings, check if they are anagrams of each other.

// check if length of string s and t are different
    // return false since not same number of chars
// track chars in string s
// iterate thru string s
    // track occurrence of each char
// iterate thru string t
    // check if char exists in char
        // if yes then decrement char count
        // if no then return false
// return true if false is not triggered

var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    tracker = {};
    
    for (let i = 0 ; i < s.length; i++) {
        let char = s[i];
        tracker[char] ? tracker[char] += 1 : tracker[char] = 1;
    }
    
    for (let i = 0; i < t.length; i++) {
        let char = t[i];
        
        if (tracker[char]) {
            tracker[char] -= 1;
        } else {
            return false;
        }
    }
    
    return true;
};

// Time complexity = O(N)
// Space complexity = O(N)
