/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Goal: Find two items in nums arr that add up to the target num

// check if nums is size 2, meaning the 2 items are the result
    // return both indexes 
// track all items in nums arr with their respective indices
// so iterate thru nums arr
    // assign each item in arr with their indices
// iterate thru nums arr again
    // get the difference between target number and item in nums
    // check if difference is found in hash, meaning it's the cooresponding number in the pair
        // return the cooresponding index from the hash and the current index

var twoSum = function(nums, target) {
    if (nums.length === 2) {
        return [0, 1];
    }
    
    let hash = {};
    
    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] = i;
    }
    
    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];
        if (hash[difference] && hash[difference] !== i) {            
            return [hash[difference], i];
        }
    }
        
};                                                     
