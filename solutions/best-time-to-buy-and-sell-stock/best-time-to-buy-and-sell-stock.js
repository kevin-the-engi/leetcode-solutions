/**
 * @param {number[]} prices
 * @return {number}
 */

// Goal = Given an array of values, purchase at the lowest value and sell at the highest value to maximize profit.
// Find the max value in prices
// track profit
// iterate thru prices
    // check if curr value is less than max
        // if so then replace max value with curr value
    // else get difference between prices and min 
        // update profit with difference

var maxProfit = function(prices) {
    let profit = 0;
    let min = Math.max(...prices);
    
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        } else {
            let difference = prices[i] - min;
            
            profit = Math.max(profit, difference);
        }
    }
    
    return profit;
};

// Time complexity = O(N)
// Space complexity = O(1)
