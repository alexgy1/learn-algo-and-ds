var lengthOfLongestSubstring = function (str) {
  let maxLen = 0;
  let left = 0;
  let set = new Set();

  for (let right = 0; right < str.length; right++) {
    //有重复 从左边开始去重  为什么要用while pww  发现第二个w 会先移除p 发现有两个w 要移除一个
    while (set.has(str[right])) {
      set.delete(str[left]); //这里必须从左边开始移除
      left++;
    }
    set.add(str[right]);
    //没有重复了 统计结果
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
};

console.log(lengthOfLongestSubstring("pwwkew"));
