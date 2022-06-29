//图的最短路径问题 一般用bfs 找到了就可以
const edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  const visited = new Set([nodeA]);
  const queue = [[nodeA, 0]];

  while (queue.length > 0) {
    const [node, dst] = queue.shift();

    visited.add(node);
    if (node == nodeB) return dst;

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, dst + 1]);
      }
    }
  }

  return -1;
};
const buildGraph = (edges) => {
  const graph = {};

  for (let edge of edges) {
    let [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(a in graph)) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};
