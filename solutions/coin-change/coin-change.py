# Goal: Given an array of coin values and a number amount, determine the min. number of coins needed to reach amount, if possible.
# Dynamic programming, find how many coins are needed for each amount

# create new array that is size amount + 1
# fill values with infinity
# set arr[0] to 0
# iterate from 1 to amount
#     iterate thru coins array
#         check if i - curr coin value is >= 0
#             update dp[i] with min of arr[i - coins[j]] + 1 or dp[i]
# return dp[amount] 

class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        dp = [float('inf')] * (amount + 1)
        dp[0] = 0
        
        for i in range(1, amount + 1):
            for value in coins:
                if i - value >= 0:
                    dp[i] = min(dp[i - value] + 1, dp[i])
                    
        return -1 if dp[amount] == float('inf') else dp[amount]
        
# Time complexity = O(amount a * coins c) = O(ac)
# Space complexity = O(n)
