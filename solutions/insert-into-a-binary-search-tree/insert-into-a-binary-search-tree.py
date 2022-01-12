# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# Goal = Given the root of a binary search tree and a value, insert value into the correct spot in the tree.

# traverse tree with recursion
# base = return null if current root is null
# check if val is less than root.val
#     if so then check if left child exists
#         if left child exists, traverse left child
#         otherwise connect left side with new node 
#     otherwise check if right child exists
#         repeat as above except switch with right child/side

class Solution:
    def insertIntoBST(self, root: Optional[TreeNode], val: int) -> Optional[TreeNode]:
        if not root:
            return TreeNode(val)
        
        if val < root.val:
            if root.left:
                self.insertIntoBST(root.left, val)
            else:
                root.left = TreeNode(val)
        else:
            if root.right:
                self.insertIntoBST(root.right, val)
            else:
                root.right = TreeNode(val)
                
        return root
        
# Time complexity = O(LogN)
# Space complexity = O(1)
