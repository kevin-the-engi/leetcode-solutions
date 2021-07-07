/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head, pos) {
  if (!head) {
    return false;
  }
  // loop thru list
    // if index property exists, cycle exists
      // return true
    // else assign index
  let node = head;
  let index = 0;
  
  while (node.next) {
    if (node.index) {
      return true;
    } else {
      node.index = index;
      index++;
    }
    
    node = node.next;
  }
  
  return false;
};
