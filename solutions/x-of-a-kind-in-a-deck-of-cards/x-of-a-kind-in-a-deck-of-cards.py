# map out all occurances of values in deck
# find greatest common denominator from values
#     if gcd value is less than 2
#         then return false
# otherwise return true if gcd value is 2 or more

class Solution:
    def hasGroupsSizeX(self, deck: List[int]) -> bool:
        track = {}
        
        for value in deck:
            track[value] = 1 if value not in track else track[value] + 1 
        
        values = list(track.values())
        group = values[0]
        
        for value in values[1:]:
            group = self.gcd(group, value)
            
            if group < 2:
                return False
            
        return group >= 2
        
    def gcd(self, x: int, y: int) -> int:
        if x is 0:
            return y
        
        return gcd(y % x, x)

# Time complexity = O(N)
# Space complexity = O(N)
