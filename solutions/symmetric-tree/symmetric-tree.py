# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# Goal = Check if given tree is symmetrical and return boolean.

# using recursion, create a function that takes in both left and right children
# if both children do not exist, return true since prior nodes should be symmetrical
# if one of the children do not exist, return false since it's uneven/non-symmetrical
# check values of both children, if they are not equal then return false
# return function and send in both sides of the tree, left child of left node with right child of right node and right child of left node with left child of right node

class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        if root is None:
            return True
        
        return self.dfs(root.left, root.right)
    
    def dfs(self, left: Optional[TreeNode], right: Optional[TreeNode]) -> bool:
        if left is None and right is None:
            return True
        if left is None or right is None:
            return False
        if left.val != right.val:
            return False
        
        return self.dfs(left.left, right.right) and self.dfs(left.right, right.left)
        
# Time complexity = O(N)
# Space complexity = O(1)
