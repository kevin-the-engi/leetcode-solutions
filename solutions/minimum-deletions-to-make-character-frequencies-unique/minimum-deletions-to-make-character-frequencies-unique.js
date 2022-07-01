/**
 * @param {string} s
 * @return {number}
 */

// Goal: Given a string, return the number of deletes needed so that the frequency count for each letter is unique.
// First get frequency count for each char, then convert to array. Loop through array of frequencies and track unique counts while updating duplicates.

// track frequency count with object
// iterate thru string
    // if tracker[s[i]] does not exist, then add to tracker
    // otherwise increment count for char
// convert tracker object to array
// track unique count values with set
// track min deletions
// track index
// loop while index < count array length
    // if count[i] is 0, then increment index
    // else if count[i] exists in tracker
        // then increment min
        // update count[i] with count[i] - 1
    // else 
        // add unique count[i] to tracker
        // increment index
// return min

var minDeletions = function(s) {
    let counts = {}

    for (let i = 0; i < s.length; i++) {
        if (!counts[s[i]]) {
            counts[s[i]] = 0;
        }
        
        counts[s[i]] += 1;
    }
    
    counts = Object.values(counts)
    
    const tracker = new Set();
    let min = 0;
    let i = 0;
    
    while (i < counts.length) {
        if (!counts[i]) {
            i++;
        } else if (tracker.has(counts[i])) {
            min++;
            counts[i] = --counts[i];
        } else {
            tracker.add(counts[i]);
            i++;
        }
    }

    return min;
};

// Time complexity = O(n)
// Space complexity = O(n)
