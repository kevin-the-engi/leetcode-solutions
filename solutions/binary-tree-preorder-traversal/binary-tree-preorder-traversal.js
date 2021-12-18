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
 * @return {number[]}
 */

// Goal = Return a list of values using pre-order traversal of a tree.

// store values in list
// create function for tree traversal
    // base case: if node doesn't exist, then return
    // push curr node value to list
    // traverse left child if it exists
    // traverse right child if it exists
// return list

var preorderTraversal = function(root) {
    let preorder = [];
    
    (function traversal(node = root) {
        if (!node) {
            return;
        }       
        
        preorder.push(node.val);
        
        if (node.left) {
            traversal(node.left);
        }
        
        if (node.right) {
            traversal(node.right);
        }
        
        return;
    })();
    
    return preorder;
};

// Time complexity = O(N)
// Space complexity = O(N)
