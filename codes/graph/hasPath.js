const hasPath = (graph, source, dst) => {
  const queue = [source];

  while (queue.length > 0) {
    let current = queue.shift();
    if (current == dst) {
      return true;
    }
    for (let neighbor of graph[source]) {
      queue.push(neighbor);
    }
  }
  return false;
};

// const hasPath = (graph, source, dst) => {
//   if (source == dst) return true;

//   for (let neighbor of graph[source]) {
//     if (hasPath(graph, neighbor, dst)) {
//       return true;
//     }
//   }

//   return false;
// };
