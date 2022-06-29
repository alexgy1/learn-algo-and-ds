/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0]);

  let res = [intervals[0]];

  for (let [start, end] of intervals.slice(1)) {
    let prevEnd = res[res.length - 1][1];
    //[ 2,4] [3,5] => [2,5]
    if (start <= prevEnd) {
      //update previous[1] value
      res[res.length - 1][1] = Math.max(end, prevEnd);
    } else {
      res.push([start, end]);
    }
  }

  return res;
};
console.log(
  merge([
    [1, 4],
    [0, 4],
  ])
);
