/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */

// BFS approach
// check is node is not valid
    // if so then return null
// create map to track visited and hold nodes
// add current node and create new node as key:value; { node : new Node }
// create queue and add node to queue

// loop while queue has items
    // remove item from queue and set as current node
    // iterate thru current node's neighbors
        // check if map has neighbor as key
            // if no then create new node with neighbor value
                // set neighbor as key with new node as value to map
                // add neighbor to the queue
    // get current node from map and push new node into its neighbors list
// return current node from map

var cloneGraph = function(node) {
    if (!node) {
        return null;
    } 
    
    let queue = [node];
    let visited = new Map();
    visited.set(node, new Node(node.val))

    while (queue.length) {
        let currNode = queue.shift();
        
        currNode.neighbors.forEach((neighbor) => {
            if (!visited.has(neighbor)) {
                visited.set(neighbor, new Node(neighbor.val))
                queue.push(neighbor);
            }
            
            visited.get(currNode).neighbors.push(visited.get(neighbor))
        })        
    }
    
    return visited.get(node)
}

/*

Time complexity = O(n) for n nodes in graph. O(k) for k items in each nodes neighbor list.
    Final complexity = O(n*k)
Space complexity = O(n) for queue. O(k) for k neighbors in map
    Final complexity = O(n*k)
        
*/
