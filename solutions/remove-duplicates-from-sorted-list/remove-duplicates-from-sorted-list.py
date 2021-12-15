# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

# Goal = Given a sorted link list, return link list without duplicate values.

# check if list is size 1 and return list if true
# create head ref
# loop thru list until end
#     if curr val is the same as next value then update next node with next next node
#     else update node with next node
# return result list

class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head is None or head.next is None:
            return head
        
        pointer = head
        
        while (pointer.next):
            if pointer.val == pointer.next.val:
                pointer.next = pointer.next.next
            else:
                pointer = pointer.next
                
        return head
        
# Time complexity = O(N)
# Space complexity = O(1)
