/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  // check if s is not size 10
      // if yes then return null
  
  // track each sequence  
  // track start and end
  
  // loop while end has not reached end of s
    // check if current sequence is logged
      // if yes then add to result array
      // if no then track
    // replace s with start + 1 and end + 1
  
  if (s.length <= 10) {
    return [];
  }
  
  let sequences = {};
  let results = [];
  let end = 10;
  
  while (end <= s.length) {
    let sequence = s.slice(0, end);
    if (!sequences[sequence]) {
      sequences[sequence] = 1;
    } else if (sequences[sequence] === 1) {
      results.push(sequence);
      sequences[sequence] += 1;
    }
    
    s = s.slice(1);
  }
  
  return results;
};
