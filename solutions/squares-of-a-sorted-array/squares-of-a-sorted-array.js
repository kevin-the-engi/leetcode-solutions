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


// Goal = Given a sorted list of values, return a sorted list with those values squared.
// Use two-pointers to sort thru list of values

// create an array of nums length
// create start and end pointers for start and end of list
// loop while end - start > 0 so it goes thru entire list
    // if start value squared is less than end value squared then assign nums[end-start] with end value squared
        // decrement end
    // otherwise assign nums[end-start] with start value squared
        // increment start
// return sorted list

var sortedSquares = function(nums) {
    let sorted = new Array(nums.length)
    let start = 0
    let end = nums.length - 1
    
    while (end - start >= 0) {
        let a = nums[start] ** 2
        let b = nums[end] ** 2
        
        if (a < b) {
            sorted[end - start] = b
            end--
        } else {
            sorted[end - start] = a
            start++
        }
    }
    
    return sorted
};

// Time complexity = O(n)
// Space complexity = O(n)
