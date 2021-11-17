/**
 * @param {number[]} arr
 * @return {boolean}
 */

// Goal: Check if all values in input arr has unique number of occurrences and return true if so.

// track the number of occurrences
// iterate thru arr input
    // check if value exists in tracker
        // if no, set to 1
        // otherwise increment
// track number of times each occurrence appear for each value
// iterate thru tracked occurrences
    // check if it exists in occurrences tracker
        // if it exists, it means it's not unique so return false
        // otherwise set that occurrence in tracker
// return true if nothing triggers false

var uniqueOccurrences = function(arr) {
    let tracker = {};
    
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        tracker[val] ? tracker[val] += 1 : tracker[val] = 1;
    }
    
    let occurrences = {};
    
    for (let val in tracker) {
        let number = tracker[val];
        
        if (occurrences[number]) {
            return false;
        } else {
            occurrences[number] = true;
        }
    }
    
    return true;
};

// Time complexity = O(N). Iterate thru n items in arr. Iterate thru m items for number of occurrences. O(N + M), drop less significant terms.
// Space complexity = O(N). Same reason as above.
