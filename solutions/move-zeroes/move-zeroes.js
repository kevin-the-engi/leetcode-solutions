/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Goal = Given an array of values, move all zeroes to the end while keeping the order of values the same.

// check edge case for an array of length 1 and return nums if true
// create start pointer at 0 and end pointer at 1
// loop until end pointer reaches end of array
    // if start value is not 0 then increment start
    // else if start value is 0 and end value is not 0 then swap both values
        // increment start
    // increment end 
// return nums

var moveZeroes = function(nums) {
    if (nums.length === 1) {
        return nums
    }
    
    for (let start = 0, end = 1; end < nums.length; end++) {    
        if (nums[start] !== 0) {
            start++
        } else if (nums[start] === 0 && nums[end] !== 0) {
            [nums[start], nums[end]] = [nums[end], nums[start]]
            start++
        }
    }
    
    return nums
};

// Time complexity = O(n)
// Space complexity = O(1)
