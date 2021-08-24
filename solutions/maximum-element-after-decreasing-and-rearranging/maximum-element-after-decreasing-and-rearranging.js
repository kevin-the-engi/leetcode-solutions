/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function(arr) {
    // check if the arr size is less than 2
        // if yes then return null
    // sort the arr by ascending order
    // check if the 1st item is 1
        // if not, then change to 1
    // iterate thru the arr from 1 onwards
        // check if difference between prev value and curr is less than or equal to 1
            // if not, change value of curr to prev + 1
    // get max value from arr last item
    
    if (arr.length < 2) {
        return 1;
    }
    
    arr.sort((a, b) => a - b);
    
    if (arr[0] !== 1) {
        arr[0] = 1;
    }
    
    for (let i = 1; i < arr.length; i++) {
        let prev = arr[i - 1];
        let curr = arr[i];
        
        if (Math.abs(curr - prev) > 1) {
            arr[i] = prev + 1;
        }
    }
    
    return arr[arr.length - 1];
};

// Time complexity: Sort is worst case (n log n) and interate through n items.
    // Evaluates to O(N log N) worst case. Best case is O(N).
// Space complexity: O(1)
