# 789. Escape The Ghosts

You are playing a simplified PAC-MAN game on an infinite 2-D grid. You start at the point `[0, 0]`, 
and you are given a destination point `target = [x`<sub>target</sub>`, y`<sub>target</sub>`]`, 
which you are trying to get to. There are several ghosts on the map with their starting positions given as an array `ghosts`, 
where `ghosts[i] = [xᵢ, yᵢ]` represents the starting position of the `iᵗʰ` ghost. All inputs are **integral coordinates.**

Each turn, you and all the ghosts may independently choose to either **move 1 unit** in any of the four cardinal directions: 
north, east, south, or west or **stay still**. All actions happen **simultaneously.**

You escape if and only if you can reach the target **before** any ghost reaches you. 
If you reach any square (including the target) at the **same time** as a ghost, it **does not** count as an escape.

Return `true` *if it is possible to escape, otherwise return* `false`.

 
---
**Example 1:**

```
Input: ghosts = [[1,0],[0,3]], target = [0,1]
Output: true
Explanation: You can reach the destination (0, 1) after 1 turn, while the ghosts located at (1, 0) and (0, 3) cannot catch up with you.
```

**Example 2:**

```
Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
```

**Example 3:**

```
Input: ghosts = [[2,0]], target = [1,0]
Output: false
Explanation: The ghost can reach the target at the same time as you.
```

**Example 4:**

```
Input: ghosts = [[5,0],[-10,-2],[0,-5],[-2,-2],[-7,1]], target = [7,7]
Output: false
```

**Example 5:**

```
Input: ghosts = [[-1,0],[0,1],[-1,0],[0,1],[-1,0]], target = [0,0]
Output: true
```

**Constraints:**

* `1 <= ghosts.length <= 100`
* `ghosts[i].length == 2`
* `-10⁴ <= xᵢ, yᵢ <= 10⁴`
* There can be **multiple ghosts** in the same location.
* `target.length == 2`
* `-10⁴ <= x`<sub>target</sub>`, y`<sub>target</sub> `<= 10⁴`
