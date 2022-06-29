//要先将 0 加入到path
var allPathsSourceTarget = function (graph) {
  let r = [];
  let dfs = (i, path) => {
    if (i == graph.length - 1) {
      return r.push(path);
    }

    for (let node of graph[i]) {
      dfs(node, [...path, node]);
    }
  };
  dfs(0, [0]);
  return r;
};
