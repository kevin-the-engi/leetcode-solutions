/**
 * @param {number} num
 * @return {number}
 */

// track result
// convert to str
// track if changed with bool
// start at 0

// loop while bool is false
    // check if start char is not a 9
        // if so then change bool to true
    // check if start has reached the end and bool hasn't been flagged
        // return num since no changes are needed
    // store 9
    // increment start

// combine with remainder of num str
// return str as number

var maximum69Number  = function(num) {
    num = num.toString();
    let hasChanged = false;
    let str = '';
    let start = 0;
    
    while (!hasChanged) {
        if (num[start] != '9') {
            hasChanged = true;            
        }
        
        if (start === num.length - 1 && !hasChanged) {
            return Number(num);
        }
        
        str += 9;
        start++;
    }
    
    str += num.slice(start);        
    
    return Number(str);
};
