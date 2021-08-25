/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */

// track results from mystery function
// pass pairs into mystery function
    // push results into arr
// track min
// iterate thru results arr
    // check difference for curr value and target
        // if less than curr min, update min
// return min

var closestToTarget = function(arr, target) {
    let funcResults = new Set(arr);     // get rid of dups
    let length = funcResults.size;
    let l = 0;
    let r = 0;

    while (l < length || r < length) { 
        if (r < length) {
            funcResults.add(func(funcResults, l, r));     
            r++;
        } else {
            l++;
            r = l + 1;
        }
    }
        
    let minDiff = Infinity;

    for (const value of funcResults) {
        let curr = Math.abs(value - target);
        
        minDiff = Math.min(curr, minDiff);
    }
    
    return minDiff;
};

var func = (arr, l, r) => {
    arr = Array.from(arr);      // convert set to arr
    let ans = arr[l];
    
    for (let i = l + 1; i <= r; i++) {
      ans = ans & arr[i];  
    }
    
    return ans;
}
