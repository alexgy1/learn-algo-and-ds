/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  if (p.length > s.length) return [];

  let l = (r = 0),
    valid = 0,
    needMap = {},
    window = {};
  let res = [];
  for (let i = 0; i < p.length; i++) {
    needMap[p[i]] = needMap[p[i]] == undefined ? 1 : needMap[p[i]] + 1;
  }

  while (r < s.length) {
    let c = s[r];
    r++;

    //窗口更新
    if (needMap[c]) {
      window[c] = window[c] == undefined ? 1 : window[c] + 1;

      if (window[c] == needMap[c]) {
        valid++;
      }
    }
    //判断左侧
    while (r - l >= p.length) {
      //符合条件 加入res
      if (valid == Object.keys(needMap).length) {
        res.push(l);
      }
      let d = s[l];
      l++;
      //窗口内数据的更新
      if (needMap[d]) {
        console.log(needMap, window, d, valid);

        if (window[d] == needMap[d]) {
          valid--;
        }
        window[d]--;

        console.log("after", needMap, window, d, valid);
      }
    }
  }

  return res;
};

let s = "cbaebabacd",
  p = "abc";

console.log(findAnagrams(s, p));
