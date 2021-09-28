# F(n) = F(n - 1) + F(n - 2)

class Solution:
    
    # USING TABULATION
    # Create an array dynamically using iteration and pre-constructed array with initial values
    # iterate from length of initial array onwards to num n
    #     access values from array using fib sequence and assign to new location in array
    # return array[n]

    def fib2(self, n: int) -> int:
        fibNums = [1] * (n + 1)
        fibNums[0] = 0
        
        for i in range(3, n + 1):
            fibNums[i] = fibNums[i - 1] + fibNums[i - 2]
            
        return fibNums[n]
    
    # Time complexity = O(N)
    # Space complexity = O(N)
    
    # USING MEMOIZATION
    # Use recursion and pass in list of collected values from previous recursion calls
    # base case: if item exists in list, then return fib value of that item
    # base case: if n is 0, then return 0
    # base case: if n is 1 or 2, then return 1 according to fib sequence
    # if item doesn't exist in memo then assign item in memo with recursive call of fib sequence with current memo pass as well
    # return n item in memo
    
    def __init__(self):
        self.memo = {}
    
    def fib(self, n: int) -> int:
        if n in self.memo:
            return self.memo[n]
        if n == 0:
            return 0
        if n <= 2:
            return 1
        
        self.memo[n] = self.fib(n - 1) + self.fib(n - 2)
            
        return self.memo[n]
    
    # Time complexity = O(N)
    # Space complexity = O(N)
