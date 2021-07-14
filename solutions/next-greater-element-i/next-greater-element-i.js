/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// create pointer for nums2
// iterate thru nums1 array
    // assign p2 with index of nums1 value in nums2
    // get max of values from nums2 slice from p2 onwards
    // check if max is greater than nums1 value
        // if yes then push to results arr
        // if no then push -1
// return results


var nextGreaterElement = function(nums1, nums2) {  
    let greaters = [];
    let p1 = 0;
    
    for (let i = 0; i < nums1.length; i++) {
        let value = nums1[i];
        let p2 = nums2.indexOf(value) + 1;

        while (p2 < nums2.length) {
            let next = nums2[p2];
            
            if (next > value) {
                greaters.push(next);
                break;
            } else {
                p2++;
            }
        }
        
        if (p2 === nums2.length) {
            greaters.push(-1);
        }
    }
    
    return greaters;
};
