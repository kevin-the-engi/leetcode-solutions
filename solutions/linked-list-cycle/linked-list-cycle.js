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

// Goal: See if given linked list is a circular linked list, meaning a last node will loop around to an earlier node

// check if list is valid
  // if not then return false

// create reference to head for traversal
// track index

// traverse thru list
  // check if index property exists on current node, will only exist if node was traversed
    // if yes then return
    // if no then assign index property
  // update current head with next node
// return false by default if cycle did not trigger

var hasCycle = function(head, pos) {
  if (!head) {
    return false;
  }

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
