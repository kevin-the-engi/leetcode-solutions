/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    // create container
    // add empty arr to container

    // iterate thru nums
        // get length of container
        // iterate thru container
          // create new set with copy of current item from subset container
          // add current value to new set
          // add set to container

    // return container
    
    let subsets = [[]];
    
    for (let i = 0; i < nums.length; i++) {
        let length = subsets.length;
        
        for (let j = 0; j < length; j++) {
            let set = subsets[j].slice();
            set.push(nums[i]);
            subsets.push(set);
        }
    }
    
    return subsets;
};
