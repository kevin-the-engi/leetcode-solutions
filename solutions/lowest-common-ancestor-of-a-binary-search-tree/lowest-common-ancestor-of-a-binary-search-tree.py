# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

# Goal = Return the node that is the lowest common ancestor between given nodes with values p or q.

# loop while root is valid
#     if root val is greater than both p and q, then traverse left child
#     else if root val is less, then traverse right child
#     else if root val in between or equal to p and q, then return that node as lca

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        while root:
            if root.val > p.val and root.val > q.val:
                root = root.left
            elif root.val < p.val and root.val < q.val:
                root = root.right
            else:
                return root
        
# Time complexity = O(LogN)
# Space complexity = O(1)
