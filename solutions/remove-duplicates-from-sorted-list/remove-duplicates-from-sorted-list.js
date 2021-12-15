/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Goal = Given a sorted link list, return link list without duplicate values.

// check if list is size 1 and return list if true
// create head ref
// loop thru list until end
    // if curr val is the same as next value then update next node with next next node
    // else update node with next node
// return result list

var deleteDuplicates = function(head) {
    if (!head || !head.next) {
        return head;
    }
    
    let pointer = head;
    
    while (pointer.next) {
        if (pointer.val === pointer.next.val) {
            pointer.next = pointer.next.next;
        } else {
            pointer = pointer.next;        
        }
    }
    
    return head;
};

// Time complexity = O(N)
// Space complexity = O(1)
