/**
 * @param {number} c
 * @return {boolean}
 */

// Find out if a² + b² = c when given c. Or find out if there are any numbers when squared, will add up to c. 
// a² + b² can be same numbers

// Loop until num² reaches the value of c and end loop since numbers higher are invalid
    // get the difference from num² and c
    // check if the sqroot of the difference is an int, a float means there are no numbers that can become the difference when squared and is thus invalid
        // if yes then return true
// return false if nothing found

var judgeSquareSum = function(c) {    
    for (let i = 0; i**2 <= c; i++) {
        let sq = i**2;
        let diff = c - sq;
        
        if (Number.isInteger(Math.sqrt(diff))) {
            return true
        } 
    }

    return false;
};

// Time complexity = Probably O(log N) since it will never reach c numbers.
// Space complexity = O(1)
