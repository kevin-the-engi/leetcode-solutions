# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# Goal = Find the max depth of a tree.

# base = if the current node is null, then return null
# compare max number while using recursion on left child and right child
# increment depth and return

class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if root is None:
            return 0
        
        return max(self.maxDepth(root.left), self.maxDepth(root.right)) + 1
    
# Time complexity = O(N). Traverse thru n nodes in the tree.
# Space complexity = O(1)
