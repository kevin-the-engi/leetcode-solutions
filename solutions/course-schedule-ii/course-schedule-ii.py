# Goal: Given a 2D array of prerequisites[i] = [a,b], where b is required to take a, and number numCourses, return the order of classes needed to finish all or [] if it is impossible to finish.
# Directed graph set up. If a cycle is found, then it's not possible to finish all courses.

# 1. Create a map of connections
# 2. Iterate thru numCourses
# 3. Use dfs to check if courses are completable. If not, then return []
# 4. Return results if completable.

class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        # create map of connections
        graph = self.createGraph(prerequisites)
        visited = set()
        results = list()
        
        def dfs(course: int) -> bool:
            # check if node has been visited, indicating a cycle
            if course in visited:
                return False
            
            visited.add(course)
            
            if course in graph:
                for edge in graph[course]:
                    if dfs(edge) == False:
                        return False

            # delete from visited for shared prereqs
            visited.remove(course)

            # empty course prereqs if visited with no issues
            graph[course] = []
            
            if course not in results:
                results.append(course)

            return True

        for i in range(numCourses):
            # if not completable, then return empty
            if dfs(i) == False:
                return []

        return list(results)

    def createGraph(self, prereqs: List[List[int]]) -> Dict:
        graph = dict()
        
        for postreq, prereq in prereqs:            
            if postreq not in graph:
                graph[postreq] = []
            
            graph[postreq].append(prereq)
            
        return graph

# Time complexity = O(mn)
# Space complexity = O(mn)
