/**
 * @param {number[][]} people
 * @return {number[][]}
 */

// Goal: Given a 2D array of tuples, reorganize the array so that each person has person[i] has k people in front that are greater or equal to h of person[i].
// Sort people by height and k, then insert into new container by each person's k value as the index.

// create container for results
// sort array by ascending height then decending k value
// loop while people array has items
    // pop item from end
    // insert into result container by item's k value
// return results

var reconstructQueue = function(people) {
    const results = [];
    people.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

    while (people.length) {
        let person = people.pop();
        let index = person[1];
        
        results.splice(index, 0, person)
        
    }
    
    return results;
};

// Time complexity = O(nlogn)
// Space complexity = O(n)
