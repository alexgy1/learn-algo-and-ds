// n& (n-1)

var hammingWeight = function (n) {
  let res = 0;
  while (n) {
    n &= n - 1;
    res++;
  }
  return res;
};
