/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  const res = [];

  let path = [];

  const backtrack = (start) => {
    if (path.length === digits.length) {
      //满足收割结果
      res.push(path.join("")); //收集结果
      return;
    }

    let cc = map[digits[start]];
    console.log(cc);
    for (let c of cc) // 当前层 取abc 中的一个
      path.push(c);
    backtrack(start + 1); //下一层 取def中的一个
    path.pop();
  };

  digits && backtrack(0);

  return res;
};
