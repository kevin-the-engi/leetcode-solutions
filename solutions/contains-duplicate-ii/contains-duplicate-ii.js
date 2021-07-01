/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

  // loop while start is less than nums length
  // in other words, loop while start of window hasn't reached the end
    // check if  end - start is less than or equal to k
      // if yes
        // check if start and end values are the same
          // if yes then return true
          // if no then increment end to expand window
      // if no 
        // increment start to move window
        // reset end to next
  // return false if nothing meets checks

var containsNearbyDuplicate = function(nums, k) {
  let start = 0;
  let end = start + 1;

  while (start < nums.length) {
    if ((end - start) <= k) {
      if (nums[start] === nums[end]) {
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
