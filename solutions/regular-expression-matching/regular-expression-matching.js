/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    // match s with p
    // store match result as string
    // compare s with match result
        // return if match is true
        // return false
    
    let match = s.match(p)

    if (!match) {
        return false;
    } else if (match[0] === s) {
        return true;
    }
    
    return false;
};
