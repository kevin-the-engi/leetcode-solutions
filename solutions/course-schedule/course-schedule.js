/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

// Goal: Given a 2D array of prerequisites[i] = [a,b], where b is required to take a, and number numCourses, return whether or not all courses can be finished.
// Directed graph set up. If a cycle is found, then it's not possible to finish all courses.

// create a map of connections for courses
// create a set to track visited
// iterate thru all courses
    // check if course is possible by going through connections
        // if no then return false
// return true

// dfs function (course number)
    // base: if course has been visited, then return false
    // base: if course has no connections, then return true
    // add course to visited
    // iterate thru course connections
        // use recursion to check connections and return false if trigger base
    // return true
    
var canFinish = function(numCourses, prerequisites) {
    const prereqMap = new Map();
    const visited = new Set();

    for (let i = 0; i < numCourses; i++) { 
        prereqMap.set(i, []);
    }
    
    for (let [course, prerequisite] of prerequisites) {
        prereqMap.get(course).push(prerequisite);
    }
    
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i, prereqMap, visited)) {
            return false;
        }
    }
    
    return true;
};

function dfs (course, prereqMap, visited) {
    if (visited.has(course)) {
        return false;
    }
    
    if(!prereqMap.get(course).length) {
        return true;
    }
    
    visited.add(course);
    
    for (let prereq of prereqMap.get(course)) {
        if (!dfs(prereq, prereqMap, visited)) {
            return false;
        }
    }
    
    visited.delete(course);
    prereqMap.set(course, []);
    
    return true;
}

// Time complexity = O(nk)
// Space complexity = O(n²)
