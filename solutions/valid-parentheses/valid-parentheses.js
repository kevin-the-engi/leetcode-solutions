/**
 * @param {string} s
 * @return {boolean}
 */

/*
    check if s is at least size 2
        if not then return null
    track parens
    iterate thru s
        check if item is open paren
            if yes then push to stack
        if not then 
            check if last item in stack is corresponding paren
                if yes then pop from stack
                if no then return false
    return true if stack is empty
*/

var isValid = function(s) {
    if (s.length < 2) {
        return false;
    }
    
    let parens = {
        '{' : '}',
        '[' : ']',
        '(' : ')'
    }
    
    let tracked = [];
    
    for (let i = 0; i < s.length; i++) {
        let paren = s[i];
        
        if (parens.hasOwnProperty(paren)) {
            tracked.push(paren);
        } else {
            let lastItem = tracked[tracked.length - 1];
            
            if (s[i] === parens[lastItem]) {
                tracked.pop()
            } else {
                return false
            }
        }
    }
    
    return tracked.length === 0 ? true : false;
};
