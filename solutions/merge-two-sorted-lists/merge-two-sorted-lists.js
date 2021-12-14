/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// Goal = Merge two sorted linked lists into one sorted list

// if l1 is empty then return l2
// if l2 is empty then return l1
// create new list for result
// create pointer for new list
// loop thru l1 and l2 while there are still nodes
    // check if l1 value is less than l2 value
        // if yes create new node with l1 value
        // update l1 with l1 next
    // else create new node with l2 value
        // update l2 with l2 next
    // assign pointer.next with new node
    // update pointer with next
// if p1 has not reached end of list, then assign remainder of l1 list to pointer list
// if p2 has not reached end of list, then assign remainder of l2 list to pointer list
// return result list

var mergeTwoLists = function(list1, list2) {
    if (!list1) {
        return list2;
    }
    
    if (!list2) {
        return list1;
    }
    
    let merged = new ListNode();
    let pointer = merged;
    
    while (list1 && list2) {
        let node = {};
        
        if (list1.val <= list2.val) {
            node = new ListNode(list1.val);
            list1 = list1.next;
        } else {
            node = new ListNode(list2.val);
            list2 = list2.next;
        }
        
        pointer.next = node;
        pointer = pointer.next;
    }
    
    if (list1) {
        pointer.next = list1;
    }
    
    if (list2) {
        pointer.next = list2;
    }
    
    merged = merged.next;
    
    return merged;
};

// Time complexity = O(N). Iterate thru n nodes of list1 and m nodes of list2, so O(N+M). Then drop constants.
// Space complexity = O(N). Same idea as above.
