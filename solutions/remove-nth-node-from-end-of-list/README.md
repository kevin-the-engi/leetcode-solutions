# 19. Remove Nth Node From End of List

Given the `head` of a linked list, remove the `nᵗʰ` node from the end of the list and return its head.

 
---
**Example 1:**

![image](https://github.com/kevin-the-engi/leetcode-solutions/blob/master/solutions/remove-nth-node-from-end-of-list/examples/remove_ex1.jpeg)
```
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
```

**Example 2:**

```
Input: head = [1], n = 1
Output: []
```

**Example 3:**

```
Input: head = [1,2], n = 1
Output: [1]
```

**Constraints:**

* The number of nodes in the list is `sz`.
* `1 <= sz <= 30`
* `0 <= Node.val <= 100`
* `1 <= n <= sz`
