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

// Goal = Given the head of a linked list, return a new list of the original list in reverse.

// create new list for reversed
// iterate thru list
    // create a new node with current node val
    // attach reversed list to node.next
    // update reversed list with curr node that has reversed nodes thus far
    // update head ref to next node
// return reversed list

var reverseList = function(head) {
    let reversed = new ListNode();
    reversed = reversed.next;
    
    while(head) {
        let node = new ListNode(head.val);
        node.next = reversed;
        reversed = node;
        head = head.next;
    }
    
    return reversed;
};

// Time complexity = O(N)
// Space complexity = O(N)
