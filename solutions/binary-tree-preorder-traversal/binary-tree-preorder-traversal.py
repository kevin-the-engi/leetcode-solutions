# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# Goal = Return a list of values using pre-order traversal of a tree.

# store values in list
# create function for tree traversal
#     base case: if node doesn't exist, then return
#     push curr node value to list
#     traverse left child if it exists
#     traverse right child if it exists
# return list

class Solution:
    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        preorder = []
        
        def traversal(self, node: Optional[TreeNode]) -> None:
            if node is None:
                return
            
            preorder.append(node.val)
            
            if node.left is not None:
                traversal(self, node.left)
                
            if node.right is not None:
                traversal(self, node.right)
                
            return
        
        traversal(self, root)
        
        return preorder
        
# Time complexity = O(N)
# Space complexity = O(N)
