/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let res = 0;

  for (let i = 1; i < prices.length; i++) {
    res += Math.max(0, prices[i] - prices[i - 1]); //负数的情况默认加0 正数的情况就是累加
  }

  return res;
};
