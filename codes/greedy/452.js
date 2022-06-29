/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  if (points.length === 0) return 0;

  //根据end 升序排序
  points.sort((a, b) => a[1] - b[1]);

  let count = 1,
    end = points[0][1];
  for (let i = 1; i < points.length; i++) {
    let [start, newEnd] = points[i];
    if (start > end) {
      count++;
      end = newEnd;
    }
  }

  return count;
};

let points = [
  [10, 16],
  [2, 8],
  [1, 6],
  [7, 12],
];

findMinArrowShots(points);
