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

// check if input is empty
    // if so then return empty array
// create arr to store values
// check if root has left child
    // if so then recurse with left child and get array value
// push current value of root into array
// check if root has right child
    // if so then recurse with right child and get array value
// return array

var inorderTraversal = function(root) {
    if (!root) {
       return [];
    }
    
    let values = [];
    
    if (root.left) {
        values = values.concat(inorderTraversal(root.left));
    }
    
    values.push(root.val);
    
    if (root.right) {
        values = values.concat(inorderTraversal(root.right));
    }
        
    return values;
};
