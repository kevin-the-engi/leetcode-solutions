# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

# Goal = Given the head of a linked list, removed all nodes that equal to val.

# create head ref
# create new list
# traverse thru list until it reaches end
#     if current node is not equal to val then add node to new list
#         update new list with next node
#     update head ref with next node
# return new list

class Solution:
    def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
        node = head
        newList = ListNode()
        newListHead = newList
        
        while node is not None:
            if node.val is not val:
                newListHead.next = ListNode(node.val)
                newListHead = newListHead.next
            
            node = node.next
                
        return newList.next
        
# Time complexity = O(N)
# Space complexity = O(N)
