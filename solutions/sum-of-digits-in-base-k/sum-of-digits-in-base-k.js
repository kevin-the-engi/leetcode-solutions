/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

// check if n is equal to k
    // if it is, n is already base k so return 1

// track quotient
// track remainder

// loop while n is greater than 0
    // divide n by k
    // get remainder of n / k
    // update remainder by combining current remainder with what is stored in remainder so far
    // update n with current quotient

// add up all nums in remainder to get sum
// return sum

var sumBase = function(n, k) {
    if (n === k) {
        return 1;
    }
    
    let quotient = 0;
    let remainder = '';
    
    while (n > 0) {
        remainder = (n % k).toString() + remainder;
        n = Math.floor(n / k);
    }
    
    return remainder.split('').reduce((acc, curr) => Number(acc) + Number(curr));
};
