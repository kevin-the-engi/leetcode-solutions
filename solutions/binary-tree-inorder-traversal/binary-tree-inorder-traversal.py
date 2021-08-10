# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# check if input is empty
#     if so then return empty array
# create arr to store values
# check if root has left child
#     if so then recurse with left child and get array value
# push current value of root into array
# check if root has right child
#     if so then recurse with right child and get array value
# return array

class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        if root == None:
            return []
        
        values = []
        
        if root.left is not None:
            values = values + self.inorderTraversal(root.left)
        
        values.append(root.val)
        
        if root.right is not None:
            values = values + self.inorderTraversal(root.right)
        
        return values
