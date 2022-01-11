# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# Goal = Given a root of a tree, find if tree has a node equal to val and return the node.

# recursion
# base: check if root doesn't exist
#     if yes then return null
# base: check if root value is same as value
#     if yes then return root node for result
# check if root value is greater than target value
#     if yes then recurse using left child of root, and val
#     if no then recurse using right child of root, and val

class Solution:
    def searchBST(self, root: Optional[TreeNode], val: int) -> Optional[TreeNode]:
        if not root:
            return None
        if root.val == val:
            return root
        
        if root.val > val:
            return self.searchBST(root.left, val)
        else:
            return self.searchBST(root.right, val)
        
# Time complexity = O(LogN)
# Space complexity = O(1)
