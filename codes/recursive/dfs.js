function dfs(node, visited, goal) {
  if (node == null) return false;
  if (node == goal) return true;

  for (let neighbor of node.getNeighbors()) {
    if (visited.has(neighbor)) continue;

    visited.add(neighbor);

    let isFound = dfs(neighbor, visited, goal);
    if (isFound) return true;
  }
  return false;
}
