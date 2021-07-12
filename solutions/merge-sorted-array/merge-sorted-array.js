/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// check if num2 is empty or n = 0
//     return num1
// slice num1 array from start to m to get all relevant values
// concat num2 array to num1 array
// sort array
// iterate thru num1 array
//     modify all values in num1 with sorted values in result array


var merge1 = function(nums1, m, nums2, n) {
    if (n === 0) {
        return;
    }
    
    let result = nums1.slice(0, m).concat(nums2).sort((a, b) => a - b)
    
    for (let i = 0; i < nums1.length; i++) {
        nums1[i] = result[i]
    }
    
};

// check if n is 0 or m is 0
  // if so return nums1 array
// create pointer for nums1
// create pointer for nums2
// track merged
// loop while m and n are greater than 0
  // check if nums1 value is less than nums2 value
    // if so push value into merged
    // increment nums1 pointer
    // decrement m
  // if nums2 < nums1
    // then push nums2 value into merged
    // increment nums2 pointer
    // decrement n
// iterate through nums1 
  // update all values in nums1 with merged values

var merge = function(nums1, m, nums2, n) {
    if (n === 0) {
        return;
    }
    
    if (m === 0) {
        nums1 = nums1.concat(nums2).shift();
    }
    
    let p1 = 0;
    let p2 = 0;
    let merged = [];
    let nCopy = n;
    
    while (m > 0 || nCopy > 0) {
        if (nums1[p1] <= nums2[p2]) {
            merged.push(nums1[p1])
            p1++;
            m--;
            
            if (m === 0 && nCopy > 0) {
                merged = merged.concat(nums2.slice(n - nCopy)).sort((a, b) => a - b)
            }
            // if all relevant values in nums1 are collected but num2 still has values
              // then concat the remainder of nums2 into nums1 and sort
            
        } else {
            merged.push(nums2[p2])
            p2++;
            nCopy--;
        }
    }
    
    for (let i = 0; i < nums1.length; i++) {
        nums1[i] = merged[i]
    }
};
