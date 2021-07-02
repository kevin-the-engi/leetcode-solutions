/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */

  // Input = nums array of numbers, num k for target index, num t for target value
  // Output = bool
  
  // track start and end of window
  // start at 0, end at 1
  
  // loop while start is less than length of nums - 1
    // check if start - end is less than or equal to k
      // if yes then check if total of nums[start] and nums[end] is less than or equal to t
        // if yes then return true
        // if no then increment end to expand window
      // if no
        // increment start to move window
        // reset end
  // return false by default

var containsNearbyAlmostDuplicate = function(nums, k, t) {
  let start = 0;
  let end = start + 1;

  while (start < nums.length - 1) {
    if (end - start <= k) {
        let total = Math.abs(nums[start] - nums[end]);

        if (total <= t) {
          return true;
        } else {
          end++;
        }
    } else {
      start++;
      end = start + 1;
    }
  }
  
  return false;
};
