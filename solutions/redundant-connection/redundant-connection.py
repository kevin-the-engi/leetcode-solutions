# Goal: Given a 2D array representing edges of an undirected graph, return the edge that can be removed to turn graph into a tree of n nodes.
# 1. Build connection map
# 2. Iterate backwards in edges array and remove current edge from map copy.
# 3. DFS thru connections to get visited list.
# 4. If visited list is equal to number of nodes, then return current edge since all nodes are still accounted for after removal.

class Solution:
    def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:
        n = len(edges)
        # build map of edges
        connections = self.buildConnections(edges)

        while len(edges) > 0:
            # start with last item in array
            a, b = edges.pop();
            # create copy of map
            graph = dict(connections)

            # remove connections of edges            
            graph[a] = list(filter(lambda edge: (edge != b), graph[a]))
            graph[b] = list(filter(lambda edge: (edge != a), graph[b]))

            # dfs thru connections to get list of visited nodes
            visited = self.dfs(a, graph, set())

            if n == len(visited):
                return [a, b]

    def dfs(self, a: int, graph: Dict[str, List[int]], visited: Set[int]) -> Set[int]:
        visited.add(a);

        for edge in graph[a]:
            if edge not in visited:
                self.dfs(edge, graph, visited)

        return visited

    def buildConnections(self, edges: List[List[int]]) -> Dict[str, List[int]]:
        connections = {};

        for edge in edges: 
            ai, bi = edge

            if ai not in connections:
                connections[ai] = [];

            if bi not in connections:
                connections[bi] = []

            connections[ai].append(bi);
            connections[bi].append(ai);

        return connections

# Time complexity = O(n nodes * m edges) = O(mn)
# Space complexity = O(mn)
