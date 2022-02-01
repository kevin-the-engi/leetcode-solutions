# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

# Goal = Given a linked list, remove nth node from the end of the list.
# First determine how many nodes are in the list by iterating thru it once. Then determine which node to remove and iterate thru list a second time to remove node.

# count number of nodes
# create ref to head node
# loop thru linked list until null
#     update ref with next node each time
#     increment count
# subtract n from count
# reset ref to head
# if count is 0 then return head.next since first node is removed
# loop thru list again while node is not null and count is greater than 1
#     update ref with next node
#     decrement count until node prior to n is reached
# change next node of ref to next.next
# return head

class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        count = 0
        node = head
        
        while node:
            node = node.next
            count += 1
            
        count -= n
        node = head
        
        if count == 0:
            return head.next
        
        while node and count > 1:
            node = node.next
            count -= 1
            
        node.next = node.next and node.next.next
        
        return head
        
# Time complexity = O(n)
# Space complexity = O(n)
        
