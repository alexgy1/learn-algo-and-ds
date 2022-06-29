var validTree = function (n, edges) {
  if (!n) return true;

  let adj = {};
  for (let i = 0; i < n; i++) {
    adj[i] = [];
  }

  for (let [n1, n2] of edges) {
    adj[n1].push(n2);
    adj[n2].push(n);
  }

  let visit = new Set();
  let dfs = (i, prev) => {
    if (!visit.has(i)) return false;

    visit.add(i);

    for (let j of adj[i]) {
      if (j == prev) continue;
      if (!dfs(j, i)) {
        return false;
      }
    }
    return true;
  };
  return dfs(0, -1) && n == visit.size;
};
