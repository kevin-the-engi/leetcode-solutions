# Rather than tracking each sequence of steps per num n, identify the pattern for the number of results per num n.
# If i represents n, the number of results becomes [0, 1, 2, 3, 5, 8] which is similar to the fibonacci sequence.
# F(n) = F(n - 1) + F(n - 2)

class Solution:
    # USING TABULATION
    # Create an array dynamically using iteration and a pre-constructed array with initial values
    # iterate from length of initial array onwards to num n
    #     access values from array using fib sequence and assign to new location in array
    # return array[n]
    
    def climbStairs1(self, n: int) -> int:
        totalSteps = [1] * (n + 1)
        # 1 is used since n will never be 0 and according to sequence n = 2 results in 2 because [1, 1]
                
        for i in range(2, n + 1):
            totalSteps[i] = totalSteps[i - 1] + totalSteps[i - 2]
            
        return totalSteps[n]

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
    
    def climbStairs(self, n: int) -> int:
        if n in self.memo:
            return self.memo[n]
        if n == 2:
            return 2
        if n == 1:
            return 1
        
        self.memo[n] = self.climbStairs(n - 1) + self.climbStairs(n - 2)
            
        return self.memo[n]
    
    # Time complexity = O(N)
    # Space complexity = O(N)
