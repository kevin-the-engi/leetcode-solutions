/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

// check if intervals size is 1
    // if yes then return intervals since no merging necessary
// sort intervals by each interval's first value
// use first interval as base comparison
// create container for result
// iterate thru intervals
    // check if current interval is within range of base interval
        // if yes then update base interval
        // if no then push base interval to container
            // update base interval with current interval to use as comparison
// push last base to result
// return container

var merge = function(intervals) {
    if (intervals.length === 1) {
        return intervals;
    }
    
    intervals.sort((a, b) => a[0] - b[0]);
        
    let interval = intervals[0],
        start = interval[0],
        end = interval[1];
    let merged = [];
    
    for (let i = 1; i < intervals.length; i++) {
        let currInterval = intervals[i],
            currStart = currInterval[0],
            currEnd = currInterval[1];

        if (currStart > start && currStart <= end ||    // if start of b is within range of a
            currEnd > start && currEnd <= end ||        // if end of b is within range of a
            currStart === start && currEnd > end ||     // if start of a and b are the same but end of b is outside of a
            currStart === start && currStart < end) {   // if start of a and b are the same but end of b is inside of a
                start = Math.min(currStart, start);
                end = Math.max(currEnd, end);
        } else if (currStart === start && currEnd === end) {    // if a and b are the same
            continue;
        } else {    // if a and b do not overlap 
            merged.push([start, end]);
            start = currStart;
            end = currEnd;
        }
    }
    
    merged.push([start, end])
    
    return merged;
};

// Time complexity for sort is O(N) for average case and O(n log n) for worst case. There's another O(N) for n intervals.
    // It becomes O(N + (N log N)) so worst case time complexity is O(N log N).
// Space complexity for sort is O(N) + O(N) for merged.
    // It becomes O(N).
