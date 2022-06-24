/**
 * @param {number[]} nums
 * @return {number}
 */

// Goal: Given an array of numbers, find the max profit you can sum up as long as the values aren't adjacent.

// if nums is size 1, then return nums[0]
// if nums is size 2, then return max of nums[0], nums[1]
// create new array of nums length and fill with 0
// set dp0 with nums[0]
// set dp1 with max of nums[0], nums[1]
// iterate from i + 2 onwards
    // set dp[i] with max of dp[i - 2] + nums[i], dp[i - 1]
// return last item in dp

var rob = function(nums) {
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);
    
    return Math.max(helper(0, nums.length - 2, nums), helper(1, nums.length - 1, nums));
};

const helper = (start, end, nums) => {
    let dp = new Array(nums.length).fill(0);
    dp[start] = nums[start];
    dp[start + 1] = Math.max(nums[start], nums[start + 1]);

    for (let i = start + 2; i <= end; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    }

    return dp[end];
}

// Time complexity = O(n)
// Space complexity = O(n)
