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
