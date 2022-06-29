var allPathsSourceTarget = function (graph) {
  let res = [];
  let end = graph.length - 1;
  let path = [0];
  let dfs = (start) => {
    if (start == end) {
      res.push(path.slice());
      return;
    }

    for (let node of graph[start]) {
      path.push(node);
      dfs(node);
      path.pop();
    }
  };
  dfs(0);
  return res;
};

let graph = [[1, 2], [3], [3], []];
console.log(allPathsSourceTarget(graph));
