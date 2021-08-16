# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

# check if current of next node is null
#     if so then return node
# create two pointers to head node for swapping
# swap current node with next node
# recurse: pass next next node as head

class Solution:
    def swapPairs(self, head: ListNode) -> ListNode:
        if not head or not head.next:
            return head
        
        temp1 = head
        temp2 = head
        
        temp1 = temp2.next 
        # [2, 3, 4]
        temp2.next = temp1.next
        # [1, 3, 4]
        temp1.next = temp2
        # [2, 1, 3, 4]
        
        head = temp1
        # [2, 1, 3, 4]
        
        temp2.next = self.swapPairs(temp2.next)
        # [3, 4]
        
        return head
    
# Time complexity is O(N). Recursion goes through a set of two nodes at a time, so half of n nodes. O(N/2) = O(N).
# Space complexity is O(NM) Each recursive call takes O(M) space and depth is represented by N.
