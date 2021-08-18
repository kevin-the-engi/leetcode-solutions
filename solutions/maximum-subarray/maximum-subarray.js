/**
 * @param {number[]} nums
 * @return {number}
 */

// check if nums array is valid
    // return nums
// track sum
// track max
// iterate thru nums arr
    // add current value to sum
    // update max if current sum is greater
    // check if sum is less than 0
        // if so then reset sum to 0 to restart subarray sum from current
// return max

var maxSubArray = function(nums) {
    if (nums.length === 1) {
        return nums[0];    
    }
    
    let max = Number.NEGATIVE_INFINITY;
    let sum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        max = Math.max(max, sum);
        
        if (sum < 0) {
            sum = 0;
        }
    }
    
    return max;
};

// Time complexity is O(N) as it only goes thru num arr n times.
// Space complexity is O(1) as only primitives were used.
