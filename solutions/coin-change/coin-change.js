/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// Goal: Given an array of coin values and a number amount, determine the min. number of coins needed to reach amount, if possible.
// Dynamic programming, find how many coins are needed for each amount

// create new array that is size amount + 1
// fill values with infinity
// set arr[0] to 0
// iterate from 1 to amount
    // iterate thru coins array
        // check if i - curr coin value is >= 0
            // update dp[i] with min of arr[i - coins[j]] + 1 or dp[i]
// return dp[amount] 

var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1);
    dp.fill(Number.MAX_VALUE);
    dp[0] = 0;
    
    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (i - coins[j] >= 0) {
                dp[i] = Math.min(dp[i - coins[j]] + 1, dp[i]);
            }
        }
    }

    return dp[amount] === Number.MAX_VALUE ? -1 : dp[amount];
};

// Time complexity = O(amount a * coins c) = O(ac)
// Space complexity = O(n)
