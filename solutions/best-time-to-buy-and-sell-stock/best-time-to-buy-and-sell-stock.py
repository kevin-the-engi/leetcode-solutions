# Goal = Given an array of values, purchase at the lowest value and sell at the highest value to maximize profit.
# Find the max value in prices
# track profit
# iterate thru prices
#     check if curr value is less than max
#         if so then replace max value with curr value
#     else get difference between prices and min 
#         update profit with difference

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        min = max(prices)
        profit = 0
        
        for price in prices:
            if price < min:
                min = price
            else:
                diff = price - min
                profit = max(profit, diff)
        
        return profit

# Time complexity = O(N)
# Space complexity = O(1)
