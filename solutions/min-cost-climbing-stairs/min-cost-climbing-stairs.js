/**
 * @param {number[]} cost
 * @return {number}
 */

// Tabulation
// Create var for the initial 0/1-step cost
// iterate thru the array from 2 step onwards
//     take the min from step 0/1 and add current cost
//     update 0-step with old 1-step, which should be the max value
//     update 1-step with current cost + min
// return the min from 0/1-step

var minCostClimbingStairs = function(cost) {
    let a = cost[0];
    let b = cost[1];
    
    for (let i = 2; i < cost.length; i++) {
        let temp = Math.min(a, b) + cost[i];
        
        a = b;
        b = temp;
    }
    
    return Math.min(a, b);
};

// Time complexity = O(N)
// Space complexity = O(1)
