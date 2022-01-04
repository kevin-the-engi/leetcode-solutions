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
 * @return {number}
 */

// Goal = Find the max depth of a tree.

// base = if the current node is null, then return null
// compare max number while using recursion on left child and right child
// increment depth and return

var maxDepth = function(root) {
    if (!root) {
        return null;
    }
    
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// Time complexity = O(N). Traverse thru n nodes in the tree.
// Space complexity = O(1)
