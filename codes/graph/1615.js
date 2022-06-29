/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function (n, roads) {
  let graph = {};

  for (let [start, end] of roads) {
    if (!(start in graph)) graph[start] = [];
    if (!(end in graph)) graph[end] = [];

    graph[start].push(end);
    graph[end].push(start);
  }
  console.log(graph);
  let res = Object.values(graph);
  console.log(res, "res ");
};

let roads = [
  [0, 1],
  [0, 3],
  [1, 2],
  [1, 3],
];

maximalNetworkRank(3, roads);
