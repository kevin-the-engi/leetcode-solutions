# 74. Search a 2D Matrix

Write an efficient algorithm that searches for a value in an `m x n` matrix. This matrix has the following properties:

* Integers in each row are sorted from left to right.
* The first integer of each row is greater than the last integer of the previous row.

 
---
**Example 1:**

![image](https://github.com/kevin-the-engi/leetcode-solutions/blob/master/solutions/search-a-2d-matrix/examples/mat.jpeg)
```
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
```

**Example 2:**

![image](https://github.com/kevin-the-engi/leetcode-solutions/blob/master/solutions/search-a-2d-matrix/examples/mat2.jpeg)
```
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
```

**Constraints:**
* `m == matrix.length`
* `n == matrix[i].length`
* `1 <= m, n <= 100`
* `-10⁴ <= matrix[i][j], target <= 10⁴`
