/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// Goal: Given an m-size array and an n-size array, return a pair of values that shows intersected numbers, as in numbers that exist in both arrays.
// track number of occurrences in nums1 arr
// track results
// iterate thru nums1 array
//     add curr val to tracker if it doesn't exist
//     if it does exists, increment occurrence
// iterate thru num2 array
//     if curr val exists in tracker, add to intersection and decrement occurrence
// return intersection

var intersect = function(nums1, nums2) {
    let tracker = {};
    let intersection = [];
    
    for (let i = 0; i < nums1.length; i++) {
        let val = nums1[i];
        !tracker[val] ? tracker[val] = 1 : tracker[val] += 1
    }
    
    for (let i = 0; i < nums2.length; i++) {
        let val = nums2[i];
        
        if (tracker[val]) {
            intersection.push(val);
            tracker[val] -= 1;
        }
    }

    return intersection;
};

// Time complexity = O(N). Iterating thru n items in nums1 and nums2.
// Space complexity = O(N). Create n size object to track n items from nums1.
