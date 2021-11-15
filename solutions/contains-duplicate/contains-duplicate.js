/**
 * @param {number[]} nums
 * @return {boolean}
 */

// track number of occurrences
// iterate thru nums
    // check if number exists in tracker
        // if yes then return true
    // otherwise set val in tracker
// return false if no duplicates found

var containsDuplicate = function(nums) {
    let tracker = {};
    
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i];
        
        if (tracker[val]) {
            return true;
        } else {
            tracker[val] = 1;
        } 
    }
    
    return false;
};

// Time complexity = O(N). Iterate thru n items in nums.
// Space complexity = O(N). Array created to track n items in nums.
