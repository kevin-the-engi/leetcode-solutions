/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate1 = function(nums, k) {
    while (k > 0) {
        let value = nums.pop();
        nums.unshift(value);
        k--;
    }
    
    return nums;
};

// create a rotated version of the nums array by working by using i + k % length to get index to store first value and continue iterating
// replace every element in nums array with rotated version

var rotate = function(nums, k) {
    let rotated = [];
    
    for(let i = 0; i < nums.length; i++){
        rotated[(i + k) % nums.length] = nums[i];
    }
    
    for(let i = 0; i < nums.length; i++){
        nums[i] = rotated[i];
    }
    
    return nums;
};

// Time complexity = O(N)
// Space complexity = O(N)
