/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

    // get window range
    // track result 

    // loop while end of window is less than nums length
        // slice window from array from start to end
        // get max from slice and push into result arr
        // increment start and end of window

var maxSlidingWindow = function(nums, k) {
    let start = 0;
    let end = start + k;
    let results = [];
        
    while (end <= nums.length) {
        let window = nums.slice(start, end);
        results.push(Math.max(...window));
        start++;
        end++;
    }
    
    return results;
};
