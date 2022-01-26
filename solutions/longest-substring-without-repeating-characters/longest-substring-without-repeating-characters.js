/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
  // track substring
  // track longest substring
  
  // iterate thru string s
    // check if substring contains current char in s
      // if no then add char to substring
      // if yes then find the index of char in substring
        // slice substring from next index onward and add current char to substring
          // Ex: substring = abc, current = a => bc + a

    // update longest value
  
  if (s === ' ') {
    return 1;
  }
 
  let substr = '';
  let longest = 0;

  for (let i = 0; i < s.length; i++) {
    if (!substr.includes(s[i])) {
      substr += s[i];
    } else {
      let index = substr.indexOf(s[i]);
      substr = substr.slice(index + 1) + s[i];  
    }    
    
    longest = Math.max(substr.length, longest)
  }

  return longest;
};


// Goal = Given a string, find the length of the longest substring.
// Track each char with a sliding window that extends right window for nonrepeating chars and shrinks left window whenever a repeating char is encountered so only nonrepeating chars exist in window and tracker.

// track chars in string
// track current length
// track max length
// create two pointers at 0
// loop until end pointer reaches end
    // if char doesn't exist in tracker then add char to tracker since it's not a repeating char
        // increment end pointer
        // increment current length
    // else it's a repeating char so delete start char from tracker
        // decrement current length
        // increment start pointer
    // update max length if current length is greater
// return max length

var lengthOfLongestSubstring = function(s) {
    if (s.length === 1) {
        return 1
    }
    
    let tracker = new Set()
    let len = 0
    let maxLen = 0
    let start = 0
    let end = 0
    
    while (end < s.length) {
        if (tracker.has(s[end])) {
            tracker.delete(s[start])
            len--
            start++
        } else {
            tracker.add(s[end])
            len++
            end++
        }
        
        maxLen = Math.max(len, maxLen)
    }
    
    return maxLen
};

// Time complexity = O(n)
// Space complexity = O(n)
