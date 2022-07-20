/**
 * @param {number[][]} edges
 * @return {number[]}
 */

// Goal: Given a 2D array representing edges of an undirected graph, return the edge that can be removed to turn graph into a tree of n nodes.
// 1. Build connection map
// 2. Iterate backwards in edges array and remove current edge from map copy.
// 3. DFS thru connections to get visited list.
// 4. If visited list is equal to number of nodes, then return current edge since all nodes are still accounted for after removal.

var findRedundantConnection = function(edges) {
    let n = edges.length;
    // build map of edges
    let connections = buildConnections(edges);
    
    while (edges.length) {
        // start with last item in array
        let [a, b] = edges.pop();
        // create copy of map
        let graph = Object.assign({}, connections);
        
        // remove connections of edges
        graph[a] = graph[a].filter(edge => edge !== b);
        graph[b] = graph[b].filter(edge => edge !== a);

        // dfs thru connections to get list of visited nodes
        let visited = dfs(a, graph);
        
        if (n === visited.size) {
            return [a, b];
        }
    }
};

function dfs(a, graph, visited = new Set()) {
    visited.add(a);
    
    for (const edge of graph[a]) {
        if (!visited.has(edge)) {
            dfs(edge, graph, visited);
        }
    }
    
    return visited;
}

function buildConnections(edges) {
    let connections = {};
    
    for (let i = 0; i < edges.length; i++) {
        let [ai, bi] = edges[i];
        
        if (!connections[ai]) {
            connections[ai] = [];
        }
        
        if (!connections[bi]) {
            connections[bi] = [];
        }
        
        connections[ai].push(bi);
        connections[bi].push(ai);
    }
    
    return connections;
}

// Time complexity = O(n nodes * m edges) = O(mn)
// Space complexity = O(mn)
