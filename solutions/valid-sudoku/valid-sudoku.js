/**
 * @param {character[][]} board
 * @return {boolean}
 */

// Goal = Given a board, check if the rows, cols, and boxes do not repeat 1-9 for valid Sudoku.
// iterate thru the rows of the board
    // track numbers in each row
    // iterate thru cols
        // add number to tracker if not present
        // otherwise return false since not valid sudoku
// repeat above for cols
// track box numbers
// iterate thru 9 boxes
    // if numbers exist in box tracker then return false
    // otherwise add it to the tracker

var isValidSudoku = function(board) {
    let result = true;
    
    for (let row = 0; row < board.length; row++) {   
        let tracker = {};
        
        for (let col = 0; col < board[row].length; col++) {
            let val = board[row][col]
            
            if (!tracker[val] && val !== '.') {
                tracker[val] = 1;
            } else if (tracker[val]) {
                return false;
            }
        }
    }
        
    for (let col = 0; col < board.length; col++) {
        let tracker = {};
        
        for (let row = 0; row < board[col].length; row++) {
            let val = board[row][col]
            
            if (!tracker[val] && val !== '.') {
                tracker[val] = 1;
            } else if (tracker[val]) {
                return false;
            }
        }
    }
    
    let k = 0;
    let row = 0;
    let x = 0;
    let y = 0;
    
    while (k < 9 && result) {
        result = checkBox(board, x, y);
        x += 3;
        k++;
        
        if (k % 3 === 0) {
            x = 0;
            y += 3;
        }
    }
    
    return result;
};

function checkBox (board, x, y) {
    let tracker = {};
    
    for (let row = x; row < x + 3; row++) {        
        for (let col = y; col < y + 3; col++) {
            let val = board[row][col]
            
            if (!tracker[val] && val !== '.') {
                tracker[val] = 1;
            } else if (tracker[val]) {
                return false;
            }
        }
    }
    
    return true;
}

// Time complexity = O(N²). Have to interate thru 2D array 3 times.
// Space complexity = O(N).
