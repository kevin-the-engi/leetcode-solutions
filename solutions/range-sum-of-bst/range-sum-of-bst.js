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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

// check if root node is valid
    // if not then return sum
// check if root value is greater than low value
    // if yes recurse with left child
// check if root value is less than high value
    // if yes recurse with right child
// check if root value is within range of high low
    // if yes, add to sum
// return sum


var rangeSumBST = function(root, low, high) {
    let sum = 0;
    
    if (!root) {
        return sum;
    }
    
    if (root.val > low) {
        sum += rangeSumBST(root.left, low, high)
    } 
    
    if (low <= root.val && root.val <= high) {
        sum += root.val;
    } 
    
    if (root.val < high) {
        sum += rangeSumBST(root.right, low, high);
    }

    return sum;
};
