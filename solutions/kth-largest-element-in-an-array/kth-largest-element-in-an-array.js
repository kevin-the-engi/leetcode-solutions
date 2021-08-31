// check if k is greater than nums.length
    // if so then it is not valid so return null
// check if nums length is 1
    // if so then return single value from nums
// sort nums in ascending order
// subtract k from length of nums to get index of kth element
// return value

var findKthLargest = function(nums, k) {
    if (k > nums.length) {
        return null;
    }
    
    if (nums.length === 1) {
        return nums[0];
    }
    
    nums.sort((a, b) => a - b);
    
    return nums[nums.length - k];
};

// Time complexity = O(N log N) for sort.
// Space complexity = O(1) since only 1 primite variable was created.
