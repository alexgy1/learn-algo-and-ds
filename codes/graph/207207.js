var canFinish = function (numCourses, prerequisites) {
  //根据给的prerequisites 里面 构造indegree 和graph
  // 图的表示方式可以是 临接矩阵就是二维数组 或者是 临接表 就是一个map value是数组 我们选后面这种方式
  //图的入度就是当前节点有多少点指向自己 出度就是它指向多少节点
  // make indegree
  let indegree = Array(numCourses).fill(0); //初始化 并且入度都是零
  let graph = new Map();
  //     let graph = {
  //        0: [1] ,

  //     }

  // 因为numCourses = 2, 所以indegree长度也为2
  //let indegree = [0，0] 根据cur变化
  let queue = []; //bfs queue里面存的都是index
  for (let [cur, pre] of prerequisites) {
    if (graph.has(pre)) {
      graph.get(pre).push(cur);
    } else {
      graph.set(pre, [cur]);
    }

    indegree[cur]++;
  }

  indegree.forEach((item, i) => {
    //这里要push i！！！
    if (item == 0) queue.push(i);
  });

  while (queue.length > 0) {
    let cur = queue.shift();

    if (graph.has(cur)) {
      for (let pre of graph.get(cur)) {
        indegree[pre]--;
        if (indegree[pre] == 0) queue.push(pre);
      }
    }
  }

  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] !== 0) return false;
  }

  return true;
};
// let numCourses = 2,
//   prerequisites = [[1, 0]];
// canFinish(numCourses, prerequisites);
// let numCourses = 2,
//   prerequisites = [
//     [1, 0],
//     [0, 1],
//   ];
// canFinish(numCourses, prerequisites);

let numCourses = 2,
  prerequisites = [[0, 1]];
canFinish(numCourses, prerequisites);
