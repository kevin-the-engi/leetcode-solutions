/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */

// instead of finding the min len to reach x, find the max len to reach sum of array - x

// get sum of all nums
// check if sum - x is less than 0 then there is no solution
    // if yes then return -1
// create start pointer
// track curr sum
// track max len
// iterate thru arr
    // add curr value to curr sum
    // loop while curr sum is greater than target
        // subtract start value from total
        // increment start
    // check if curr sum is target
        // if yes then update max len with window length 

var minOperations = function(nums, x) {
    const sum = nums.reduce((a, b) => a + b);
    const target = sum - x;
    
    if (target < 0) {
        return -1;
    }
    
    let start = 0;
    let maxLen = -Infinity;
    let currSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        currSum += nums[i];
        
        while (currSum > target) {
            currSum -= nums[start];
            start++;
        }
        
        if (currSum === target) {
            maxLen = Math.max(maxLen, i - start + 1);
        }
    }
    
    return maxLen === -Infinity ? -1 : nums.length - maxLen;
};

// Time complexity is O(N).
// Space complexity is O(1) since only primitives were used.
