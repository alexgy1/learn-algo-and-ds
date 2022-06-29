/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = [];
  let path = [];
  let gen = (openN, closeN) => {
    if (openN == n && closeN == n) {
      res.push(path.join(""));
      return;
    }

    if (openN < n) {
      path.push("(");
      gen(openN + 1, closeN);
      path.pop();
    }

    //openN > closeN
    if (closeN < openN) {
      path.push(")");
      gen(openN, closeN + 1);
      path.pop();
    }
  };
  gen(0, 0);
  return res;
};

console.log(generateParenthesis(3));
