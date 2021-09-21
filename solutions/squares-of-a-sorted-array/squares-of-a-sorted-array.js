/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Using two pointer approach, compare the start and end values of the given array and form a sorted array from the end first with largest numbers descending.

// create pointers for start and end
// create result array
// iterate input array from end to 0 to form result array with largest numbers first
    // check if start value is less than end value
        // if so assign square end value to result [i]
        // decrement end
    // if not then assign square start value to result [i]
        // increment start
// return sorted results

var sortedSquares = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    let results = [];
    
    for (let i = nums.length - 1; i >= 0; i--) {
        if (Math.abs(nums[start]) < Math.abs(nums[end])) {
            results[i] = nums[end] ** 2;
            end--;
        } else {
            results[i] = nums[start] ** 2;
            start++;
        }
    }
    
    return results;
};

// Time Complexity = O(N)
// Space Complexity = O(N)
