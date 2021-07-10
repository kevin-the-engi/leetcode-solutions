/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Create a reference to l1 and another to l2
// Use bool to track carryover
// create result list

// loop while head1 or head2 is not null
    // check if head1 is not null
        // if yes then get head1 value
    // check if head2 is not null
        // if yes then get head2 value
    // get sum of head1 and head2 values
    // check if carryover is true
        // add 1 to sum
    // check if sum is 10 or more
        // if yes then update carryover to true
            // also subtract 10 from sum
        // if no then update carryover to false
    // create new node with sum as value
    // update result list with new node
    // set result list to next

var addTwoNumbers = function(l1, l2) {
    if (!l1 || !l2) {
        return null;
    }
    
    let head1 = l1;
    let head2 = l2;
    let carryOver = false;
    let results = new ListNode();
    let resultHead = results;
    
    while (head1 || head2) {
        let value1 = 0;
        let value2 = 0;
        
        if (head1) {
            value1 = head1.val;
            head1 = head1.next;
        }
        
        if (head2) {
            value2 = head2.val;
            head2 = head2.next
        }
        
        let sum = value1 + value2;
        
        if (carryOver) {
            sum += 1;
        }
        
        if (sum >= 10) {
            carryOver = true;
            sum -= 10;
        } else {
            carryOver = false;
        }
        
        let node = new ListNode(sum);
        resultHead.next = node;
        resultHead = resultHead.next
    }
    
    results = results.next
    
    if (carryOver) {
        let node = new ListNode(1);
        resultHead.next = node;
    }
    
    return results;
};
