var insert = function (intervals, newInterval) {
  let res = [];

  for (let i = 0; i < intervals.length; i++) {
    if (newInterval[1] < intervals[i][0]) {
      res.push(newInterval);
      return res.concat(intervals.slice(i));
    } else if (newInterval[0] > intervals[i][1]) {
      res.push(intervals[i]);
    } else {
      //有重叠
      newInterval = [
        Math.min(newInterval[0], intervals[i][0]),
        Math.max(newInterval[1], intervals[i][1]),
      ];
    }
  }
  res.push(newInterval);
  return res;
};
