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

// Goal = Given the root of a binary search tree and a value, insert value into the correct spot in the tree.

// traverse tree with recursion
// base = return null if current root is null
// check if val is less than root.val
    // if so then check if left child exists
        // if left child exists, traverse left child
        // otherwise connect left side with new node 
    // otherwise check if right child exists
        // repeat as above except switch with right child/side

var insertIntoBST = function(root, val) {
    if (!root) {
        return new TreeNode(val)
    }
    
    if (val < root.val) {
        if (root.left) {
            insertIntoBST(root.left, val)
        } else {
            root.left = new TreeNode(val)
        }
    } else {
        if (root.right) {
            insertIntoBST(root.right, val)
        } else {
            root.right = new TreeNode(val)
        }
    }
    
    return root
};

// Time complexity = O(LogN)
// Space complexity = O(1)
