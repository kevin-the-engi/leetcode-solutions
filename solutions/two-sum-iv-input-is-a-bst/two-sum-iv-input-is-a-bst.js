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
 * @param {number} k
 * @return {boolean}
 */

// Goal = Return whether or not two nodes in a given root tree adds up to value k.

// track values with set
// create list to track visited nodes
// traverse tree with dfs so loop while nodes exist in stack
    // pop node from stack
    // if k - node value exists in stack, then return true
    // otherwise add current node value to set
    // if node has left child, then add left child to stack
    // if node has right child, then add right child to stack
// return false if no matches found

var findTarget = function(root, k) {
    if (!root) {
        return false
    }
    
    let values = new Set()
    let stack = [root]
    
    while (stack.length) {
        let node = stack.pop()
        
        if (values.has(k - node.val)) {
            return true
        } else {
            values.add(node.val)
        }
        
        if (node.left) {
            stack.push(node.left)        
        }
        
        if (node.right) {
            stack.push(node.right)    
        }
    }
    
    return false
}

// Time complexity = O(N)
// Space complexity = O(N)
