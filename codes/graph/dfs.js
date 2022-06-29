const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};
// dfs(graph, "a");
bfs(graph, "a");

// function dfs(graph, source) {
//   let stack = [source];

//   while (stack.length > 0) {
//     let current = stack.pop();
//     console.log(current);

//     let nodes = graph[current];
//     nodes.forEach((n) => stack.push(n));
//   }
// }

// function dfs(graph, source) {
//   console.log(source);
//   //这里不需要 递归终止条件 因为数组为空的情况根本进入不了这里
//   for (let neighbor of graph[source]) {
//     dfs(graph, neighbor);
//   }
// }

function bfs(graph, source) {
  let queue = [source];

  while (queue.length > 0) {
    let current = queue.shift();
    console.log(current);

    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
}
