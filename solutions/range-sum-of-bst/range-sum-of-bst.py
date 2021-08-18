# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# check if root node is valid
#     if not then return sum
# check if root value is greater than low value
#     if yes recurse with left child
# check if root value is less than high value
#     if yes recurse with right child
# check if root value is within range of high low
#     if yes, add to sum
# return sum

class Solution:
    def rangeSumBST(self, root: TreeNode, low: int, high: int) -> int:
        sum = 0
        
        if root is None:
            return sum
        
        if root.val > low:
            sum += self.rangeSumBST(root.left, low, high)
            
        if low <= root.val and root.val <= high:
            sum += root.val
        
        if root.val < high:
            sum += self.rangeSumBST(root.right, low, high)
            
        return sum;
        
# Time complexity is O(n log n) because it compares the current node value and moves down a branch accordingly, eliminating half the results.
# Space complexity is O(N) because O(N) per each call instance making it linear.
