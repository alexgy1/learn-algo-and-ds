// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

let prices = [7, 1, 5, 3, 6, 4];

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let l = 0,
    r = 1; //l bug r sell
  let maxPrice = 0;

  while (r < prices.length) {
    if (prices[l] > prices[r]) {
      l = r;
    } else {
      let profit = prices[r] - prices[l];
      maxPrice = Math.max(maxPrice, profit);
    }
    r++;
  }
  return maxPrice;
};

console.log(maxProfit(prices));
