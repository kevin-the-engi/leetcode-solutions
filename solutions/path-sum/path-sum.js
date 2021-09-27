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
 * @param {number} targetSum
 * @return {boolean}
 */

// set two bools for final comparison
// subtract current node val from targetSum
// base case: check if targetSum is 0 and current node has no more children
    // if so then return true
// check if left child exists
    // recurse with left child and current total and assign to one bool var
// check if right child exists
    // recurse with right child and current total and assign to other bool var
// return true if one var is true

var hasPathSum = function(root, targetSum) {
    let a = false,
        b = false;
    
    if (!root) {
        return false;
    }
    
    targetSum -= root.val;
    
    if (targetSum === 0 && !root.left && !root.right) {
        return true;
    }
    
    if (root.left) {
        a = hasPathSum(root.left, targetSum);
    }
    
    if (root.right) {
        b = hasPathSum(root.right, targetSum);
    }
    
    return a || b;
};

// Time complexity = O(N)
// Space complexity = O(1)


// set result bool to false
// create innerFunction with current node and current total as args
// base case: if result is true, then break out of recursion and return true
// add current val to current total
// base case: check if current node has no children
    // then check if current total meets targetSum
        // if so then change result bool to true and return
    // check if left child exists
        // if so then recurse with left child and current total
    // check if right child exists
        // if so then recurse with right child and current total
// return result

var hasPathSum2 = function(root, targetSum) {
    if (!root) {
        return false;
    }
    
    let result = false;
    
    function traverse(node, total = 0) {
        if (result) {
            return true;
        }
        
        total += node.val;
        
        if (!node.left && !node.right) {
            if (total === targetSum) {
                result = true;
            }
            
            return;
        }
        
        if (node.left) {
            traverse(node.left, total);
        }
        
        if (node.right) {
            traverse(node.right, total);
        }

    }
    
    traverse(root);
    
    return result;
};

// Time complexity = O(N)
// Space complexity = O(1)
