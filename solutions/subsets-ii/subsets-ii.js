/**
 * @param {number[]} nums
 * @return {number[][]}
 */

    // create container
    // push empty array into container
    // create hash to track

    // iterate thru nums
        // get length of subset container
        // iterate thru subset container
            // create set from current subset item first value
            // push current value
            // check if set is in hash
                // if no then add to container
                // add to hash
    // return container

var subsetsWithDup = function(nums) {
    let subsets = [[]];
    let hash = {};
    
    for (let i = 0; i < nums.length; i++) {
        let length = subsets.length;
        
        for (let j = 0; j < length; j++) {
            let set = subsets[j].slice();
            set.push(nums[i]);
            let sortedSet = set.sort((a, b) => a - b).join(''); 
            
            if (!hash[sortedSet]) {
                subsets.push(set);
                hash[sortedSet] = 1
            }
        }
    }
    
    return subsets;    
};
