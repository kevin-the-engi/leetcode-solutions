/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    // check if array is size 1
        // if so then return [0]
    // create pointer for start at 0
    // create pointer for next for next value
    // create answer array
    
    // loop while start is less than length of temperatures
        // check if next is greater than start value
            // if yes then push difference of next and start into answer array
                // increment start
                // reset next
            // if no then increment next
        // check if next has reached end of temperatures
            // if yes then push 0 into answer array
            // increment start
            // reset next
    // return answers
    
    if (temperatures < 2) {
        return [0];
    }
    
    let start = 0;
    let next = 1;
    let answers = [];
    
    while (start < temperatures.length) {
        if (start === temperatures.length - 1) {
            answers.push(0);
            break;
        } else if (temperatures[next] > temperatures[start]) {
            answers.push(next - start);
            start++;
            next = start + 1;
        } else {
            if (next === temperatures.length) {
                answers.push(0);
                start++;
                next = start + 1;
            } else {
                next++;
            }
        }
    }
            
    return answers;
};
