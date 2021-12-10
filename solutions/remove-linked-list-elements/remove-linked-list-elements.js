/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

// Goal = Given the head of a linked list, removed all nodes that equal to val.

// create head ref
// create new list
// traverse thru list until it reaches end
    // if current node is not equal to val then add node to new list
        // update new list with next node
    // update head ref with next node
// return new list

var removeElements = function(head, val) {
    let list = new ListNode();
    let listNode = list;
    let node = head;
    
    while (node) {
        if (node.val !== val) {
            listNode.next = new ListNode(node.val)
            listNode = listNode.next; 
        }
            
        node = node.next;
    }
        
    return list.next;
};

// Time complexity = O(N)
// Space complexity = O(N)
