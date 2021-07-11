# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

# Create pointer for head list
# Create pointer for head.next
# The idea is that one pointer will be traversing thru the list at twice the pace so if there is a cycle, it will eventually loop around and end up at the slow pointer

# loop while both pointers are not None, if loop ends then it does not have a cycle
#   check if both pointers are the same
#       if so then return true
#   update slow pointer with next node
#   update faster pointer with next next node
# return false


class Solution:
    def hasCycle(self, head: ListNode) -> bool:
        if head is None:
            return []
        
        slow = head;
        fast = head;
        
        while fast is not None and fast.next is not None:
            slow = slow.next
            fast  = fast.next.next
            
            if slow == fast:
                return True
            
        return False
