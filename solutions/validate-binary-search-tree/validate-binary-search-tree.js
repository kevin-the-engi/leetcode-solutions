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

// A valid BST means left child is less than parent and parent is less than right child. 
// So with DFS in-order traversal, it would create a list of ascending order if valid.

// Collect all the values in the tree
    // track values
    // set up traversal function that takes in a node
        // check if left child exists
            // if yes then recurse with left child
        // check if curr node value is greater than last item in arr
            // if yes then push value to the arr
            // if not then trigger false condition
        // check if right child exists
            // if yes then recurse with right child
        // return 
    // return true if false condition not triggered

var isValidBST = function(root) {
    let values = [];
    let isValid = true;
    
    const traverse = (parent) => {
        if (!isValid) {
            return false;
        }
        
        if (parent.left) {
            traverse(parent.left);
        }
        
        if (parent.val > values[values.length - 1] || values.length === 0) { 
            // Second condition for the left most child since it will have no value in arr to compare to
            values.push(parent.val);        
        } else {
            isValid = false;
            return false;
        }
        
        if (parent.right) {
            traverse(parent.right);
        }
        
        return;
    }
    
    traverse(root);
    
    return isValid ? true : false;
};

// Time complexity = O(n) because traversal visits every node.
// Space complexity = O(n) because values will contain n values from n nodes.
