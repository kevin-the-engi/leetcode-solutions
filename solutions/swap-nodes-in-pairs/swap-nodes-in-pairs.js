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

// check if current of next node is null
    // if so then return node
// create two pointers to head node for swapping
// swap current node with next node
// recurse: pass next next node as head

var swapPairs = function(head) {
    if (!head || !head.next) {
        return head;
    }
    
    let p1 = head; 
    let p2 = head;
    
    p1 = p2.next; // [2, 3, 4]
    p2.next = p1.next // [1, 3, 4]
    p1.next = p2; // [2, 1, 3, 4]
    
    head = p1; // [2, 1, 3, 4]
    
    p2.next = swapPairs(p2.next); // [3, 4]
    
    return head;
};

// Time complexity is O(N). Recursion goes through a set of two nodes at a time, so half of n nodes. O(N/2) = O(N).
// Space complexity is O(NM) Each recursive call takes O(M) space and depth is represented by N.
