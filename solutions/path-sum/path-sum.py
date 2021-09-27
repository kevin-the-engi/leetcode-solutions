# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# set two bools for final comparison
# subtract current node val from targetSum
# base case: check if targetSum is 0 and current node has no more children
#     if so then return true
# check if left child exists
#     recurse with left child and current total and assign to one bool var
# check if right child exists
#     recurse with right child and current total and assign to other bool var
# return true if one var is true

class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        if not root:
            return False
        
        a = False
        b = False
        
        targetSum -= root.val
        
        if targetSum == 0 and not root.left and not root.right:
            return True
        
        if root.left:
            a = self.hasPathSum(root.left, targetSum)
        if root.right:
            b = self.hasPathSum(root.right, targetSum)
            
        return a or b
    
# Time complexity = O(N)
# Space complexity = O(1)
