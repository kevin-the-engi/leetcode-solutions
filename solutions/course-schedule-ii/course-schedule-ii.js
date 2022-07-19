/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

// Goal: Given a 2D array of prerequisites[i] = [a,b], where b is required to take a, and number numCourses, return the order of classes needed to finish all or [] if it is impossible to finish.
// Directed graph set up. If a cycle is found, then it's not possible to finish all courses.

// 1. Create a map of connections
// 2. Iterate thru numCourses
// 3. Use dfs to check if courses are completable. If not, then return []
// 4. Return results if completable.

var findOrder = function(numCourses, prerequisites) {
    // create map of connections
    let map = createGraph(prerequisites)
    let visited = new Set();
    let result = new Set();

    for (let i = 0; i < numCourses; i++) {
        // if not completable, then return empty
        if (!dfs(i)) {
            return [];
        }
    }
    
    function dfs(course) {
        // check if node has been visited, indicating a cycle
        if (visited.has(course)) {
            return false;
        }
    
        visited.add(course);
        let edges = map.get(course);
        
        if (edges) {
            for (const e of edges) {
                if (!dfs(e)) {
                    return false;
                }
            }
        }

        // delete from visited for shared prereqs
        visited.delete(course);
        
        // empty course prereqs if visited with no issues
        map.set(course, []);
        result.add(course);
        
        return true;
    }
    
    return [...result];
};

function createGraph(prereqs) {
    let map = new Map();
    
    for (const [postreq, prereq] of prereqs) {
        if (!map.has(postreq)) {
            map.set(postreq, []);
        }
        
        map.get(postreq).push(prereq);
    }
    
    return map;
}

// Time complexity = O(mn)
// Space complexity = O(mn)
