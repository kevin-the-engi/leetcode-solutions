# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# Goal = Return whether or not two nodes in a given root tree adds up to value k.

# track values with set
# create list to track visited nodes
# traverse tree with dfs so loop while nodes exist in stack
#     pop node from stack
#     if k - node value exists in stack, then return true
#     otherwise add current node value to set
#     if node has left child, then add left child to stack
#     if node has right child, then add right child to stack
# return false if no matches found

class Solution:
    def findTarget(self, root: Optional[TreeNode], k: int) -> bool:
        if not root:
            return False
        
        values = set()
        stack = [root]
    
        while len(stack):
            node = stack.pop()
            
            if (k - node.val) in values:
                return True
            else:
                values.add(node.val)
                
            if node.left:
                stack.append(node.left)
            if node.right:
                stack.append(node.right)
                
        return False

# Time complexity = O(N)
# Space complexity = O(N)
