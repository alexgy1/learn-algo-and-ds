//union find
var countComponent = function (n, list) {
  let parent = Array(n)
    .fill()
    .map((_, i) => i);
  let rank = Array(n).fill(1);

  let find = (node) => {
    let res = node;

    while (res !== parent[res]) {
      parent[res] = parent[parent[res]]; //short the height
      res = parent[res];
    }

    return res;
  };

  let union = (n1, n2) => {
    let p1 = find(n1),
      p2 = find(n2);

    if (p1 === p2) return 0;

    if (rank[p2] > rank[p1]) {
      parent[p1] = p2;
      rank[p2] += rank[p1];
    } else {
      parent[p2] = p1;
      rank[p2] += rank[p1];
    }
    return 1;
  };

  let res = n;
  for (let [n1, n2] of edges) {
    res -= union(n1, n2);
  }
  return res;

  console.log(parent, "parent");
};
countComponent(3, [1, 2, 3, 4]);
