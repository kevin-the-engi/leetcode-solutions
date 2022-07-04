# Goal: Given a 2D array which represents a graph, return whether or not the graph is bipartite. Bipartite means that SetA nodes cannot connect to SetB nodes.
# Create sets to track connections and if two sets have the same node, it cannot be bipartite.

# create setA and setB
# track visited

# iterate thru n nodes
#     if visited does not have node
#         then run dfs with current node, setA, setB
# recursion function to add nodes to respective sets
#     add current node to visited
#     iterate thru current nodes' list of edges
#         if visited does not have node
#             then add edge to other set
#             recursion with current edge and swap sets
# iterate thru n nodes
#     check if setA and setB have node i
#         if yes then return false
# return true

class Solution:
    def isBipartite(self, graph: List[List[int]]) -> bool:
        setA = set()
        setB = set()
        visited = set()
        n = len(graph)
        
        for i in range(n):
            if i not in visited:
                setA.add(i)
                self.dfs(i, graph, setA, setB, visited)
                
        for i in range(n):
            if i in setA and i in setB:
                return False
            
        return True
    
    def dfs(self, i: int, graph: List[List[int]], setA: Set, setB: Set, visited: Set) -> None:
        visited.add(i)
        
        for edge in graph[i]:
            setB.add(edge)
            
            if edge not in visited:
                self.dfs(edge, graph, setB, setA, visited)
                
        return
        
# Time complexity = O(n)
# Space complexity = O(n)
