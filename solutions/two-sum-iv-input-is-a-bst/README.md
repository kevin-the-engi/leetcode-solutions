# 653. Two Sum IV - Input is a BST

Given the `root` of a Binary Search Tree and a target number `k`, 
return *`true` if there exist two elements in the BST such that their sum is equal to the given target.*

 
---
**Example 1:**

![image](https://github.com/kevin-the-engi/leetcode-solutions/blob/master/solutions/two-sum-iv-input-is-a-bst/examples/sum_tree_1.jpeg)
```
Input: root = [5,3,6,2,4,null,7], k = 9
Output: true
```

**Example 2:**

![image](https://github.com/kevin-the-engi/leetcode-solutions/blob/master/solutions/two-sum-iv-input-is-a-bst/examples/sum_tree_2.jpeg)
```
Input: root = [5,3,6,2,4,null,7], k = 28
Output: false
```

**Constraints:**

* The number of nodes in the tree is in the range `[1, 10⁴]`.
* `-10⁴ <= Node.val <= 10⁴`
* `root` is guaranteed to be a **valid** binary search tree.
* `-10⁵ <= k <= 10⁵`
