/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    // create hash of letters
    // create container for result
    
    // create inner function for recursion and pass in digits and current string combo
        // if digit length is 0 then it went thru all the digits in the input str
            // push final letter combo into result container
    
        // get letters associated with first/current digit
        // iterate thru letters
            // combine current letter with letter(s) passed down
            // recurse with next digit and current letter combo
    // call inner function
    // return result
    
    let hash = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    };
    
    let combinations = [];
    
    const innerFunction = (d, letters) => {
        // letters is undefined on initial pass
        if (d.length === 0) {
            if (letters) {
                combinations.push(letters)    
            }
            
            return;
        }
        
        let sequence = hash[d[0]];
        
        for (let i = 0; i < sequence.length; i++) {
            let current = sequence[i];
            
            if (letters) {
                innerFunction(d.slice(1), letters + current);
            } else {
                innerFunction(d.slice(1), current);
            }
        }
    }
    
    innerFunction(digits);
    
    return combinations;
};
