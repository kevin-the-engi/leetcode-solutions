/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */

// check if target is [0, 0]
    // if yes then return true because already at goal
// get total moves needed for player by getting sum of x + y in target
// track min moves for ghosts
// iterate thru ghosts matrix
    // find moves for current ghost
// if min moves for ghost is less than or equal to player
    // return false
// otherwise return true

var escapeGhosts = function(ghosts, target) {
    let pacMoves = target.reduce((a, b) => Math.abs(a) + Math.abs(b));
    
    if (pacMoves === 0) {
        return true;
    }
    
    let ghostMoves = Infinity;
    
    for (let i = 0; i < ghosts.length; i++) {
        let ghost = ghosts[i];
        let x = ghost[0];
        let y = ghost[1];
        let moves = 0;
        
        moves += getGhostMoves(x, target[0])
        moves += getGhostMoves(y, target[1])
        
        ghostMoves = Math.min(ghostMoves, moves)
    }
        
    if (ghostMoves <= pacMoves) {
        return false;
    }
    
    return true;
};

const getGhostMoves = (ghostCoord, pacCoord) => {
    let moves = 0
    
    if ((ghostCoord < 0 || pacCoord < 0) && !(ghostCoord < 0 && pacCoord < 0)) {
        moves += Math.abs(ghostCoord) + Math.abs(pacCoord);
    } else {
        moves += Math.abs(pacCoord - ghostCoord)
    }
    
    return moves;
}
