var insert = function (intervals, newInterval) {
  let res = [];

  for (let i = 0; i < intervals.length; i++) {
    if (newInterval[1] < intervals[i][0]) {
      res.push(newInterval);
      console.log("1");
      return res.concat(intervals.slice(i));
    } else if (newInterval[0] > intervals[i][1]) {
      console.log("2");
      res.push(intervals[i]);
    } else {
      console.log("3");
      //has overlaping
      newInterval = [
        Math.min(newInterval[0], intervals[i][0]),
        Math.max(newInterval[1], intervals[i][1]),
      ];
      console.log("new Interval", newInterval);
    }
  }
  console.log("res before", res);
  res.push(newInterval);
  console.log("res after", res);
  return res;
};

// let intervals = [
//     [1, 3],
//     [6, 9],
//   ],
//   newInterval = [2, 5];
let intervals = [
    [1, 2],
    [3, 5],
    [6, 7],
    [8, 10],
    [12, 16],
  ],
  newInterval = [4, 18];
console.log(insert(intervals, newInterval));
