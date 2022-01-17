/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// Goal = Return the node that is the lowest common ancestor between given nodes with values p or q.

// loop while root is valid
    // if root val is greater than both p and q, then traverse left child
    // else if root val is less, then traverse right child
    // else if root val in between or equal to p and q, then return that node as lca

var lowestCommonAncestor = function(root, p, q) {
    while (root) {
        if (root.val > p.val && root.val > q.val) {
            root = root.left
        } else if (root.val < p.val && root.val < q.val) {
            root = root.right
        } else {
            return root
        }
    }
};

// Time complexity = O(LogN)
// Space complexity = O(1)
