/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

// create reference to list
// create stack
// traverse list
    // push current head list to stack
    // update head with next
// reset reference to list
// loop while head.next isn't null
    // pop last item in stack which should be last node in list
    // set the last item in stack which is 2nd to last node to null
    // set current head next to the popped node
    // set popped node to 


var reorderList = function(list) {
    let head = list;
    let stack = [];
    
    while (head) {
        stack.push(head);
        head = head.next;
    }
    
    head = list;
    let i = 1;
    
    while (head.next && head.next !== stack[stack.length - 1]) {
        let end = stack.pop()
        stack[stack.length - 1].next = null;
        head.next = end;
        end.next = stack[i];
        
        head = head.next.next;
        i++;
    }
    
    return list;
};
