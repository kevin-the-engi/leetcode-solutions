/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// check edge case of empty needle input
    // return 0 if empty
// return indexOf needle from haystack

var strStr = function(haystack, needle) {
    if (!needle.length) {
        return 0;
    }
    
    return haystack.indexOf(needle);
};

// Time complexity = O(N) for n items in haystack using indexOf method.
// Space complexity = O(1) 
