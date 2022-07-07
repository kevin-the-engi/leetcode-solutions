/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// Goal: Given an array of strings, group strings that are anagrams of each other and return an array of those groups.

// create result container
// track container index
// track word with index
// iterate thru array
    // sort curr word
    // check if sorted word exists in tracker
        // if not then add to tracker with curr index++
        // if yes then push to container array using index

var groupAnagrams = function(strs) {
    let results = [];
    let index = 0;
    let words = {};
    
    for (let i = 0; i < strs.length; i++) {
        const curr = strs[i].split('').sort().join('');
        
        if (words[curr] === undefined) {
            words[curr] = index++;
            results.push([strs[i]])
        } else {
            results[words[curr]].push(strs[i]);
        }
    }
    return results;
};

// Time complexity = O(n) * ( O(k) + O(klogk) + O(k)) = O(n) * O(klogk)
// Space complexity = O(n)
