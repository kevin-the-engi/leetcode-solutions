/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Goal = Given an array, move/rotate values by k places/steps.

// create an array of size nums length
// loop thru nums array
    // get index for rotated array using index + k % nums length so end values loop around correctly
    // place current value into new index of rotated array
// loop thru nums array
    // replace each value with those in rotated array
// return nums

var rotate = function(nums, k) {
    let rotated = new Array(nums.length)
    
    for (let i = 0; i < nums.length; i++) {
        let index = (i + k) % nums.length
        rotated[index] = nums[i]
    }
    
    for (let i = 0; i < nums.length; i++) {
        nums[i] = rotated[i]
    }
    
    return nums
};

// Time complexity = O(n)
// Space complexity = O(n) for dynamic array. However, O(1) for fixed-size array
