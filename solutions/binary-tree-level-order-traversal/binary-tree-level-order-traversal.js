/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

// Goal = Return the values of nodes in a tree organized in a level order.

// if a node is null then return empty array
// use bfs traversal with a queue to hold current nodes
// track results
// loop while queue has nodes
    // track values for current level
    // iterate thru nodes in queue
        // remove from queue and add to current set of values
        // if node has left child then add to queue
        // do same if node has right child
    // add current set to result
// return final result

var levelOrder = function(root) {
    if (!root) {
        return [];
    }
    
    let queue = [root];
    let result = [];
    
    while (queue.length) {
        let values = [];
        let size = queue.length;
        
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            values.push(node.val);
            
            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }           
        }
        
        result.push(values);    
    }
    
    return result;
};
