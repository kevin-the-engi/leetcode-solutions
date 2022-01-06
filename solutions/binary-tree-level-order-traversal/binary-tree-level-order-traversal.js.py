# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# Goal = Return the values of nodes in a tree organized in a level order.

# if a node is null then return empty array
# use bfs traversal with a queue to hold current nodes
# track results
# loop while queue has nodes
#     track values for current level
#     iterate thru nodes in queue
#         remove from queue and add to current set of values
#         if node has left child then add to queue
#         do same if node has right child
#     add current set to result
# return final result

class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if root is None:
            return []
        
        results = []
        queue = [root]
        
        while len(queue):
            values = []
            size = len(queue)
            
            for i in range(size):
                node = queue.pop(0)
                values.append(node.val)
                
                if node.left is not None:
                    queue.append(node.left)
                if node.right is not None:
                    queue.append(node.right)
            
            results.append(values)
            
        return results
