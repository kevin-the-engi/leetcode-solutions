/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Goal: Given an array, check if it could become a non-decreasing array by modifying at most one element.
// Iterate thru array forwards and backwards, then compare bool results of both.

// check edge case for nums array size 1
    // return true
// set flag bool to false
// set a and b bools to true
// create a copy of nums array
// iterate backwards thru nums array
    //check if nums[i - 1] > nums[i]
        // if true then check if flag is true
            // if true then update a to false and break loop
            // update flag to true
            // update nums[i - 1] with nums[i]
// reset flag to false
// reset nums with copy
// iterate forwards thru nums array
    //check if nums[i] > nums[i + 1]
        // if true then check if flag is true
            // if true then update b to false and break loop
            // update flag to true
            // update nums[i + 1] with nums[i]
// return comparison of a or b

var checkPossibility = function(nums) {
    if (nums.length === 1) {
        return true;
    }
    
    let flag = false;
    let [a, b] = [true, true];
    let copy = nums.slice();
    
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i - 1] > nums[i]) {
            if (flag) {
                a = false;
                break;
            }
            
            flag = true;
            nums[i - 1] = nums[i];
        }
    }
    
    flag = false;
    nums = copy;
    
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            if (flag) {
                b = false;
                break;
            }
            
            flag = true;
            nums[i + 1] = nums[i];
        }
    }
    
    return a || b;
};

// Time complexity = O(n)
// Space complexity = O(n)
