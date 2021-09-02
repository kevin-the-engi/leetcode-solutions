/**
 * @param {string} s
 * @return {number}
 */

// check if string is empty
    // if yes then return 0
// trim the string to remove leading whitespaces
// track positive or negative value with bool
// track str of numbers
// iterate thru the str
    // check if first char is - or +
        // if yes then update bool if -
    // else check if current char is not NaN
        // if yes then add to number string
    // if current char is " " or NaN
        // then break from loop
// turn number string into a number
// change to negative value if bool is not positive
// return num if it is within range of max and min constraints
    // otherwise return max/min constaint 

var myAtoi = function(s) {
    if (!s.length) {
        return 0;
    }
    
    s = s.trim();
    let numStr = '';
    let isPositive = true;
    
    for (let i = 0; i < s.length; i++) {
        let curr = s[i];
        
        if (i === 0 && (curr === '+' || curr === '-')) {
            if (curr === '-') {
                isPositive = false;            
            }
        } else if (curr === " " || isNaN(curr)) {
            break;
        } else {
            numStr += curr;
        }
    }
    
    num = isPositive ? Number(numStr) : -Number(numStr);
    
    if (num > -Math.pow(2, 31) && num < Math.pow(2, 31) - 1) {
        return num;
    } else {
        return isPositive ? Math.pow(2, 31) - 1 : -Math.pow(2, 31);
    }
};

// Time complexity = O(n) for trim and O(n) to iterate thru n items in str.
    // Final complexity = O(N)
// Space complexity = O(n) for n items in str.
    // Final complexoty = O(N)
