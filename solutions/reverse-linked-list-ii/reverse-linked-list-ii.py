# Goal: Given the head of a linked list and two numbers, left and right, return a linked list with the nodes between the left and right numbers reversed.

# create result list with ref to head
# create pointer to result
# loop while left is greater than 0 to get unchanged nodes
#     update pointer with next
#     decrement right
# track curr node to be changed
# loop while right is greater than 0 to reverse relevant nodes
#     set next node with curr next
#     attach curr node with next next node
#     attach next node with curr node pointer
#     attach pointer node with next node
# return result list

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
        result = ListNode(0, head)
        pointer = result
        
        for i in range(left - 1, 0, -1):
            pointer = pointer.next
            right -= 1
            
        curr = pointer.next
        
        for i in range(right - 1, 0, -1):
            next = curr.next
            curr.next = next.next 
            next.next = pointer.next
            pointer.next = next;
            
        return result.next
        
# Time complexity = O(n)
# Space complexity = O(n)
