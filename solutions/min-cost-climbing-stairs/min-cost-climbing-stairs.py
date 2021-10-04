# Tabulation
# Create var for the initial 0/1-step cost
# iterate thru the array from 2 step onwards
#     take the min from step 0/1 and add current cost
#     update 0-step with old 1-step, which should be the max value
#     update 1-step with current cost + min
# return the min from 0/1-step

class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        a = cost[0]
        b = cost[1]
        
        for i in range(2, len(cost)):
            temp = min(a, b) + cost[i]
            a = b
            b = temp;
            
        return min(a, b)
            
# Time complexity = O(N)
# Space complexity = O(1)
        
