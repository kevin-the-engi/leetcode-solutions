/**
 * @param {number} n
 * @return {number}
 */

// Rather than tracking each sequence of steps per num n, identify the pattern for the number of results per num n.
// If i represents n, the number of results becomes [0, 1, 2, 3, 5, 8] which is similar to the fibonacci sequence.
// F(n) = F(n - 1) + F(n - 2)

// USING TABULATION
// Create an array dynamically using iteration and a pre-constructed array with initial values
// iterate from length of initial array onwards to num n
    // access values from array using fib sequence and assign to new location in array
// return array[n]

var climbStairs1 = function(n) {
    let totalSteps = [0, 1, 2];
    
    for (let i = 3; i <= n; i++) {
        totalSteps[i] = totalSteps[i - 1] + totalSteps[i - 2];
    }
    
    return totalSteps[n];
};

// Time complexity = O(N)
// Space complexity = O(N)

// USING MEMOIZATION
// Use recursion and pass in list of collected values from previous recursion calls
// base case: if item exists in list, then return fib value of that item
// base case: if n is 0, then return 0
// base case: if n is 1 or 2, then return 1 according to fib sequence
// if item doesn't exist in memo then assign item in memo with recursive call of fib sequence with current memo pass as well
// return n item in memo

var climbStairs = function(n, memo = []) {
    if (memo[n]) {
        return memo[n];
    }
    
    if (n === 2) {
        return 2;
    }
    
    if (n === 1) {
        return 1;
    }
    
    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
    
    return memo[n];
};

// Time complexity = O(N)
// Space complexity = O(N)
