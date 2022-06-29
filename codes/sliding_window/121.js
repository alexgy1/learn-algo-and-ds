var prices = [7, 1, 5, 3, 6, 4];
var maxProfit = function (prices) {
  let l = 0, //l buy
    r = 1; //r sell //r从1开始
  let res = 0;
  while (r < prices.length) {
    if (prices[l] > prices[r]) {
      l = r;
    } else {
      let profit = prices[r] - prices[l];
      res = Math.max(res, profit);
    }

    r++;
  }
  return res;
};

console.log(maxProfit(prices));
