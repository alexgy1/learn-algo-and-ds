/**
 * https://leetcode.com/problems/clone-graph/
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  let oldToNew = new Map();
  //traversal the graph
  let dfs = (node) => {
    if (oldToNew.has(node)) return oldToNew.get(node);

    let copy = new Node(node.val);
    oldToNew.add(node, copy);

    for (let neighbor of node.neighbors) {
      copy.neighbors.push(dfs(neighbor));
    }

    return copy;
  };
  //clone it
  let newNode = dfs(node)

  //reutrn the cloned graph
  if(!newNode) return null 
  return newNode
};
