# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# Goal = Given a tree, invert each child node and return the tree.

# use recursion to travel down the tree
# base = if the node is null then return
# create a function that takes in root
#     swap left and right children
#     traverse left side
#     traverse right side
# return tree

class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        return self.traverse(root)
        
    def traverse(self, node: Optional[TreeNode]) -> Optional[TreeNode]:
        if node is None:
            return node
        
        node.left, node.right = node.right, node.left
        self.traverse(node.left)
        self.traverse(node.right)
        
        return node
        
# Time complexity = O(logN)
# Space complexity = O(1)
