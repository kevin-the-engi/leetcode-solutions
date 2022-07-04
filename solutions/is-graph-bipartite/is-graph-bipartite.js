/**
 * @param {number[][]} graph
 * @return {boolean}
 */

// Goal: Given a 2D array which represents a graph, return whether or not the graph is bipartite. Bipartite means that SetA nodes cannot connect to SetB nodes.
// Create sets to track connections and if two sets have the same node, it cannot be bipartite.

// create setA and setB
// track visited

// iterate thru n nodes
    // if visited does not have node
        // then run dfs with current node, setA, setB
// recursion function to add nodes to respective sets
    // add current node to visited
    // iterate thru current nodes' list of edges
        // if visited does not have node
            // then add edge to other set
            // recursion with current edge and swap sets
// iterate thru n nodes
    // check if setA and setB have node i
        // if yes then return false
// return true

var isBipartite = function(graph) {
    let setA = new Set();
    let setB = new Set();
    let visited = new Set();
    let n = graph.length;
    
    for (let i = 0; i < n; i++) {
        let edges = graph[i];
        
        if (!visited.has(i)) {
            setA.add(i);
            partition(i, graph, setA, setB, visited);
        }

    }
    
    for (let i = 0; i < n; i++) {
        if (setA.has(i) && setB.has(i)) {
            return false;
        }
    }

    return true;
};

const partition = (i, graph, setA, setB, visited) => {
    visited.add(i);

    for (let edge of graph[i]) {
        setB.add(edge)
        
        if (!visited.has(edge)) {
            partition(edge, graph, setB, setA, visited);
        }
    }
    
    return;
}

// Time complexity = O(n)
// Space complexity = O(n)
