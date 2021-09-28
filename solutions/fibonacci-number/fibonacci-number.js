/**
 * @param {number} n
 * @return {number}
 */
// F(n) = F(n - 1) + F(n - 2)

// USING TABULATION
// Create an array dynamically using iteration and pre-constructed array with initial values
// iterate from length of initial array onwards to num n
    // access values from array using fib sequence and assign to new location in array
// return array[n]

var fib2 = function(n) {
    let fibNums = [0, 1, 1];
    
    for (let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }
    
    return fibNums[n]
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

var fib = function(n, memo = {}) {
    if (memo[n]) {
        return memo[n];
    }
    
    if (n === 0) {
        return 0;
    }
    
    if (n <= 2) {
        return 1;
    }

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    
    return memo[n]
};

// Time complexity = O(N)
// Space complexity = O(N)
