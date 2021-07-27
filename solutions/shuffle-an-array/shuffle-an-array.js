/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.initial = nums;
    this.random = [];
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.initial;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
// get a copy of the initial array
// create container
// loop while copy has items
  // get a random index
  // push item with index to result
  // remove item from copy array
// return result

Solution.prototype.shuffle = function() {
    let nums = this.initial.slice();
    let result = [];
    
    while (nums.length > 0) {
        let index = Math.floor(Math.random() * nums.length);
        result.push(nums[index]);
        nums.splice(index, 1);
    }
    
    return result;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
