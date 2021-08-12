/**
 * @param {string} s
 * @return {number[]}
 */

// Partition s into parts. Track chars and once a char stops appearing during interation, that becomes a partition.

// track chars
// track num of chars
// create array to hold result

// iterate thru s
    // check if current index for current char is not the same as it's last index meaning there's more in the str
        // if so then add char to stack
        // otherwise remove char from stack if it's the last one in str
    // increment num of chars
    // check if stack size is 0 meaning all chars of current partition set is complete
        // if so then push num of chars to result array
        // reset num of chars to 0
// return array

var partitionLabels = function(s) {
    let stack = new Set()
    let numChars = 0;
    let parts = [];
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
        if (i !== s.lastIndexOf(char)) {
            stack.add(char)
        } else {
            stack.delete(char)
        }
        
        numChars++;
        
        if (stack.size === 0) {
            parts.push(numChars);
            numChars = 0;
        }
    }
    
    return parts;
};

// Time complexity is O(N^2). Loops for n chars in s, and for every loop it also runs lastIndexOf method which is also O(N).
// Space complexity is O(N). Set and array are O(N) each so O(2N) becomes N.
