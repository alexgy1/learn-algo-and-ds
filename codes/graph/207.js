/**
 * https://leetcode.com/problems/course-schedule/
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  //什么情况下完不成课程？ 出现循环引用的情况下 怎么防止？ set 去重
  //图的存储形式： 临接表 或者临接矩阵

  let inDegree = Array(numCourses).fill(0);
  let graph = new Map(); //临接表
  let queue = [];

  for (let [cur, pre] of prerequisites) {
    //build graph key : pre  value : []
    if (!graph.has(pre)) {
      graph[pre] = [cur];
    } else {
      graph.get(pre).push(cur);
    }

    //build indegree
    inDegree[cur]++;
  }

  //将入度为0 的入队
  for (let i = 0; i < inDegree; i++) {
    if (inDegree[i] == 0) queue.add(i);
  }

  //每次都是处理入度为零的元素
  while (queue.length > 0) {
    let cur = queue.shift();
    let toTakeArr = graph.get(cur);

    for (let i = 0; i < toTakeArr.length; i++) {
      let indexInInDegree = toTakeArr[i];
      inDegree[indexInInDegree]--;
      if (inDegree[indexInInDegree] == 0) {
        queue.push(inDegree[indexInInDegree]);
      }
    }
  }

  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] !== 0) return false;
  }
  return true;
};
