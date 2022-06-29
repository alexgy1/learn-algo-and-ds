## what is graph

- graph = nodes + edges

## 种类

- directed graph
- undirected graph

a->b
a->c

b c 是 a 的 neighbor

## 图的存储方式

- 临接表
- adjacent list (object and array in js )

## 遍历方式

- 1 dfs(use stack)

```js
function dfs(graph, source) {
  let stack = [source];

  while (stack.length > 0) {
    let current = stack.pop();
    console.log(current);

    let nodes = graph[current];
    nodes.forEach((n) => stack.push(n));
  }
}

function dfsRecursive(graph, source) {
  console.log(source);
  //这里不需要 递归终止条件 因为数组为空的情况根本进入不了这里
  for (let neighbor of graph[source]) {
    dfsRecursive(graph, neighbor);
  }
}
```

- 2 bfs(use queue)

```js
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
```

- 3 Union-Find
- 4 Topological Sort
- 5 Dijkstra's Shortest Path Algo(use Heap and HashSet)
- 6 Prim's or Kruskal's(Minimun Spanning Tree)
- 7 Floyd Warshall's Algorithms

## 如何防止重复遍历？

visited 数组 记录节点访问过记录为 true
