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
 * @return {TreeNode}
 */

// Goal = Given a tree, invert each child node and return the tree.

// use recursion to travel down the tree
// base = if the node is null then return
// create a function that takes in root
    // swap left and right children
    // traverse left side
    // traverse right side
// return tree

var invertTree = function(root) {
    function traverse(node) {
        if (!node) {
            return root
        }
        
        [node.right, node.left] = [node.left, node.right]
        
        traverse(node.left)
        traverse(node.right)
        
        return root
    }
    
    return traverse(root)
};

// Time complexity = O(logN)
// Space complexity = O(1)
