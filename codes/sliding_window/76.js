/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let need = new Map();
  let window = new Map();
  for (let i = 0; i < t.length; i++) {
    need.set(t[i], (need.get(t[i]) || 0) + 1);
  }

  let l = 0,
    r = 0,
    valid = 0;
  let start = 0,
    len = Infinity; //记录最小覆盖字串的开始位置
  //[l, r)
  while (r < s.length) {
    let c = s[r];
    r++;
    //更新数据
    if (need.has(c)) {
      window.set(c, (window.get(c) || 0) + 1);

      if (window.get(c) == need.get(c)) {
        valid++;
      }
    }

    //处理左侧
    while (valid == need.size) {
      if (r - l < len) {
        start = l;
        len = r - l;
      }
      //d是移除窗口的字符
      let d = s[l];
      l++;

      if (need.has(d)) {
        if (window.get(d) == need.get(d)) {
          valid--;
        }
        window.set(d, window.get(d) - 1);
      }
    }
  }

  return len == Infinity ? "" : s.substring(start, len);
};

let s = "ADOBECODEBANC",
  t = "ABC";
minWindow(s, t);
