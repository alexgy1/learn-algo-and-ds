const connectedComponentsCount = (graph) => {
  const visited = new Set();
  let count = 0;
  for (let node in graph) {
    if (explore(graph, node, visited)) {
      count++;
    }
  }

  return count;
};

const explore = (graph, current, visited) => {
  if (visited.has(current)) return false;

  visited.add(current);

  for (let neighbor of graph[current]) {
    explore(graph, neighbor);
  }

  return true;
};
