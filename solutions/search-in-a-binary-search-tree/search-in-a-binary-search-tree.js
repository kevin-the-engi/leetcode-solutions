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
 * @param {number} val
 * @return {TreeNode}
 */

// Goal = Given a root of a tree, find out if tree has a node equal to val and return the node.

// recursion
// base: check if root doesn't exist
    // if yes then return null
// base: check if root value is same as value
    // if yes then return root node for result
// check if root value is greater than target value
    // if yes then recurse using left child of root, and val
    // if no then recurse using right child of root, and val

var searchBST = function(root, val) {
    if (!root) {
        return null
    }
    
    if (root.val === val) {
        return root
    }
    
    if (root.val > val) {
        return searchBST(root.left, val)
    } else {
        return searchBST(root.right, val)
    }
};

// Time complexity = O(LogN)
// Space complexity = O(1)
