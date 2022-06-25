/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

// Goal: Given the head of a linked list and two numbers, left and right, return a linked list with the nodes between the left and right numbers reversed.

// create result list with ref to head
// create pointer to result
// loop while left is greater than 0 to get unchanged nodes
    // update pointer with next
    // decrement right
// track curr node to be changed
// loop while right is greater than 0 to reverse relevant nodes
    // set next node with curr next
    // attach curr node with next next node
    // attach next node with curr node pointer
    // attach pointer node with next node
// return result list

var reverseBetween = function(head, left, right) {
    let result = new ListNode(0, head);
    let pointer = result;
    
    while (--left) {
        pointer = pointer.next;
        right--;
    }
    
    let curr = pointer.next;
    
    while (--right) {
        let next = curr.next;
        curr.next = next.next;
        next.next = pointer.next;
        pointer.next = next;
    }
    
    return result.next;
};

// Time complexity = O(n)
// Space complexity = O(n)
