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
 * @return {boolean}
 */

// Goal = Check if given tree is symmetrical and return boolean.

// using recursion, create a function that takes in both left and right children
// if both children do not exist, return true since prior nodes should be symmetrical
// if one of the children do not exist, return false since it's uneven/non-symmetrical
// check values of both children, if they are not equal then return false
// return function and send in both sides of the tree, left child of left node with right child of right node and right child of left node with left child of right node

var isSymmetric = function(root) {
    if (!root) {
        return true
    }
    
    function dfs (left, right) {
        if (!left && !right) {
            return true
        }
        
        if (!left || !right) {
            return false
        }
        
        if (left.val !== right.val) {
            return false
        }
        
        return dfs(left.left, right.right) && dfs(left.right, right.left)
    }
    
    return dfs(root.left, root.right)
};

// Time complexity = O(N)
// Space complexity = O(1)
