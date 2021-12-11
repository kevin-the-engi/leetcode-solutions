# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

# Goal = Given the head of a linked list, return a new list of the original list in reverse.

# create new list for reversed
# iterate thru list
#     create a new node with current node val
#     attach reversed list to node.next
#     update reversed list with curr node that has reversed nodes thus far
#     update head ref to next node
# return reversed list

class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        reversed = ListNode()
        reversed = reversed.next
        
        while(head is not None):
            node = ListNode(head.val)
            node.next = reversed
            reversed = node
            head = head.next
            
        return reversed
        
# Time complexity = O(N)
# Space complexity = O(N)
