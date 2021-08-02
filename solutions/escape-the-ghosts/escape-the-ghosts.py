import math

# check if target is [0, 0]
#     if yes then return true because already at goal
# get total moves needed for player by getting sum of x + y in target
# track min moves for ghosts
# iterate thru ghosts matrix
#     find moves for current ghost
# if min moves for ghost is less than or equal to player
#     return false
# otherwise return true

class Solution:
    def escapeGhosts(self, ghosts: List[List[int]], target: List[int]) -> bool:
        pacMoves = abs(target[0]) + abs(target[1])
        
        if pacMoves == 0:
            return True
        
        ghostMoves = math.inf
        
        for ghost in ghosts:
            x = ghost[0]
            y = ghost[1]
            moves = 0
            
            moves += self.getGhostMoves(x, target[0])
            moves += self.getGhostMoves(y, target[1])
                
            ghostMoves = min(moves, ghostMoves)
            
        if ghostMoves <= pacMoves:
            return False
        
        return True
    
    def getGhostMoves(self, ghostLoc: int, pacLoc: int) -> int:
        moves = 0
        
        if (ghostLoc < 0 or pacLoc < 0) and not (ghostLoc < 0 and pacLoc < 0):
            moves += abs(ghostLoc) + abs(pacLoc)
        else:
            moves += abs(pacLoc - ghostLoc)
            
        return moves
