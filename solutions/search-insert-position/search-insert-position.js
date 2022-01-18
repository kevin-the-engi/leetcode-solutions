/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Goal = Given a sorted array, find index of value that matches target. If value doesn't exist, return index where it should be inserted.
// Use binary search to search through array

// check edge cases for out of bound targets
// start at 0 and end at array length - 1
// loop while start is less than end
    // get mid index using start and end
    // if mid value matches target then return mid index
    // otherwise check if mid value is greater than target and mid - 1 value is less than target
        // return mid index as that is the index for insertion
    // if mid value is greater than target then update end with mid to search left side
    // otherwise update start with mid to search right side

var searchInsert = function(nums, target) {
    if (nums[nums.length - 1] < target) {
        return nums.length
    }
    
    if (nums[0] > target) {
        return 0
    }
    
    let start = 0
    let end = nums.length - 1
    
    while (start <= end) {
        let mid = Math.floor((end - start) / 2) + start
        
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] > target && nums[mid - 1] < target) {
            return mid
        }
        
        if (nums[mid] < target) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
};

// Time complexity = O(log n)
// Space complexity = O(1)
