/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// check if either list is valid
    // if not then return null since there's no intersection
// create refs to both lists
// loop thru listA as long as nodes exists
    // assign an attr to track visited
    // update list head
// loop thru listB as long as nodes exists
    // check if visited attr exists to indicate it has been visited by listA and thus intersects with B
        // if so then return current node
    // update list head
// return null if no intersection has been found

var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) {
        return null;
    };
    
    let pointerA = headA;
    let pointerB = headB;
    
    while (pointerA) {
        pointerA.visited = true;
        pointerA = pointerA.next;
    }
    
    while (pointerB) {
        if (pointerB.visited === true) {
            return pointerB;
        }
        
        pointerB = pointerB.next;
    }
    
    return null;
};

// O(N) time complexity
    // iterate thru headA of n nodes
    // iterate thru headB of n nodes
    // O(n + n) which becomes O(N) when constants are removed
// O(N) space complexity
    // For each list, a reference is made. Space complexity for a list is linear so O(N) for each
    // O(n + n) = O(N) 

// SOLUTION 2

// check if either list is valid
    // if not then return null since there's no intersection
// create inner function with current head as parameter
    // check if head is valid
        // return null if not
    // check if head has visited attr
        // return head if yes
    // assign visited attr
    // recurse with head.next
// call inner function with headA
// call inner functiom with headB

var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) {
        return null;
    };
    
    var innerFunction = function(head) {
        if (!head) {
            return null;
        }
        
        if (head.visited) {
            return head;
        }

        head.visited = true;
        
        return innerFunction(head.next)
    }
    
    innerFunction(headA);
    
    return innerFunction(headB)
};

// O(N) time complexity
    // iterate thru headA of depth n nodes
    // iterate thru headB of depth n nodes
    // O(n + n) which becomes O(N) when constants are removed
// O(N) space complexity
    // Only an extra attr is made which is a bool primitive for each node
    // O(1)
