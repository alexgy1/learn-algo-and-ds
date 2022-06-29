var meetingRoos = function (intervals) {
  let start = intervals.sort((a, b) => a.start - b.start);
  let end = intervals.sort((a, b) => a.end - b.end);

  let res = (count = 0);
  let s = (e = 0);//s startIndex e endIndex

  while (s < intervals.length) {
    if (start[s] < end[e]) {
      s++;
      count++;
    } else {
      //> or = when = increase e first
      e++;
      count--;
    }
    res = Math.max(res, count);
  }
  return res;
};
