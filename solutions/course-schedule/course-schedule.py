# Goal: Given a 2D array of prerequisites[i] = [a,b], where b is required to take a, and number numCourses, return whether or not all courses can be finished.
# Directed graph set up. If a cycle is found, then it's not possible to finish all courses.

# create a map of connections for courses
# create a set to track visited
# iterate thru all courses
#     check if course is possible by going through connections
#         if no then return false
# return true

# dfs function (course number)
#     base: if course has been visited, then return false
#     base: if course has no connections, then return true
#     add course to visited
#     iterate thru course connections
#         use recursion to check connections and return false if trigger base
#     return true

class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        prereqMap = dict()
        visited = set()
        
        for num in range(numCourses):
            prereqMap[num] = list()
        
        for course, prereq in prerequisites:
            prereqMap[course].append(prereq)
            
        for course in range(numCourses):
            if not self.dfs(course, prereqMap, visited):
                return False
            
        return True
    
    def dfs(self, course: int, prereqMap: Dict, visited: Set) -> bool:
        if course in visited:
            return False
        if len(prereqMap[course]) == 0:
            return True
        
        visited.add(course)
        
        for prereq in prereqMap[course]:
            if not self.dfs(prereq, prereqMap, visited):
                return False
            
        visited.remove(course)
        prereqMap[course] = list()
        
        return True

# Time complexity = O(nk)
# Space complexity = O(n²)
