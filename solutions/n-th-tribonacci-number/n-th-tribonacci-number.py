# T(n) = T(n - 1) + T(n - 2) + T(n - 3)

class Solution:
    
    # USING TABULATION
    # Create an array dynamically using iteration and pre-constructed array with initial values
    # iterate from length of initial array onwards to num n
    #     access values from array using trib sequence and assign to new location in array
    # return array[n]

    def tribonacci1(self, n: int) -> int:
        tribNums = [1] * (n + 1)
        tribNums[0] = 0
        
        for i in range(3, n + 1):
            tribNums[i] = tribNums[i - 1] + tribNums[i - 2] + tribNums[i - 3]
            
        return tribNums[n]
    
    # Time complexity = O(N)
    # Space complexity = O(N)
    
    # USING MEMOIZATION
    # Use recursion and pass in list of collected values from previous recursion calls
    # base case: if item exists in list, then return trib value of that item
    # base case: if n is 0, then return 0
    # base case: if n is 1 or 2, then return 1 according to trib sequence
    # if item doesn't exist in memo then assign item in memo with recursive call of trib sequence with current memo pass as well
    # return n item in memo
    
    def __init__(self):
        self.memo = {}
    
    def tribonacci(self, n: int) -> int:
        if n in self.memo:
            return self.memo[n]
        if n == 0:
            return 0
        if n <= 2:
            return 1
        
        self.memo[n] = self.tribonacci(n - 1) + self.tribonacci(n - 2) + self.tribonacci(n - 3)
            
        return self.memo[n]
    
    # Time complexity = O(N)
    # Space complexity = O(N)
