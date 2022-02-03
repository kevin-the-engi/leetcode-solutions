# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# Goal = Given two binary trees, merge both into 1 and sum up overlapping nodes.
# Use recursion to traverse and compare same node in both trees.

# if tree1 and tree2 are invalid then return
# create a new node for merged tree
# if both tree1 and tree2 exist then assign merged value with sum of both
#     call recursive function and pass in left children of both tree1 and tree2 and assign to merged left child
#     call recursive function and pass in right children of both tree1 and tree2 and assign to merged right child
# if tree1 exists but tree2 does not, then replace merged tree with tree1
# otherwise replace merged tree with tree2
# return merged tree

class Solution:
    def mergeTrees(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> Optional[TreeNode]:
        if not root1 and not root2:
            return None
                
        if root1 and root2:
            merged = TreeNode(root1.val + root2.val)           
            merged.left = self.mergeTrees(root1.left, root2.left)
            merged.right = self.mergeTrees(root1.right, root2.right)
        elif root1 and not root2:
            merged = root1
        else:
            merged = root2
            
        return merged
        
# Time complexity = O(n) or O(2ⁿ)
# Space complexity = O(n)
