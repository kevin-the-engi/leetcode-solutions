/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

    // create a pointer for start
    // create a pointer for end
    
    // loop while start is less than end
        // swap start item with end item
        // increment start
        // increment end

var reverseString = function(s) {
    let start = 0;
    let end = s.length - 1;
    
    while (start < end) {
        swap(s, start, end);
        start++;
        end--;
    }
};

var swap = function(s, start, end) {
    let temp = s[start];
    s[start] = s[end];
    s[end] = temp;
}
