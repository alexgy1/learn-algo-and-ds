/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
  //特点就是求穿过的最少 就是 穿过和相同的缝隙最多， 和统计到map里面即可
  //再用总的高度减去 和里面最大的就是结果

  let sumMap = new Map();

  for (let w of wall) {
    let sum = 0;
    //w.length-1 遍历到倒数第一列 不需要遍历到最后 因为是缝隙
    for (let i = 0; i < w.length - 1; i++) {
      sum += w[i];
      //update map
      sumMap.set(sum, (sumMap.get(sum) || 0) + 1);
    }
  }
  if (sumMap.size === 0) return wall.length;
  let maxValueInMap = Math.max(...sumMap.values());
  return wall.length - maxValueInMap;
};

// let wall = [
//   [1, 2, 2, 1],
//   [3, 1, 2],
//   [1, 3, 2],
//   [2, 4],
//   [3, 1, 2],
//   [1, 3, 1, 1],
// ];

// leastBricks(wall);
let wall2 = [[1], [1], [1]];
leastBricks(wall2);
