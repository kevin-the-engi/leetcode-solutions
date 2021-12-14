# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

# Goal = Merge two sorted linked lists into one sorted list

# if l1 is empty then return l2
# if l2 is empty then return l1
# create new list for result
# create pointer for new list
# loop thru l1 and l2 while there are still nodes
#     check if l1 value is less than l2 value
#         if yes create new node with l1 value
#         update l1 with l1 next
#     else create new node with l2 value
#         update l2 with l2 next
#     assign pointer.next with new node
#     update pointer with next
# if p1 has not reached end of list, then assign remainder of l1 list to pointer list
# if p2 has not reached end of list, then assign remainder of l2 list to pointer list
# return result list

class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        if list1 is None:
            return list2
        if list2 is None:
            return list1
        
        merged = ListNode()
        pointer = merged
        
        while list1 is not None and list2 is not None:
            if list1.val <= list2.val:
                pointer.next = ListNode(list1.val)
                list1 = list1.next
            else:
                pointer.next = ListNode(list2.val)
                list2 = list2.next
            pointer = pointer.next
            
        if list1 is not None:
            pointer.next = list1
        if list2 is not None:
            pointer.next = list2
            
        merged = merged.next
        
        return merged
        
# Time complexity = O(N). Iterate thru n nodes of list1 and m nodes of list2, so O(N+M). Then drop constants.
# Space complexity = O(N). Same idea as above.
