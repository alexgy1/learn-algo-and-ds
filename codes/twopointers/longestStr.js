var longestSubStting = function (str) {
  if (str.length < 3) return str;
  //怎么判断三个相同数字
  let counter = 1; //记录有多少个相同的数字的 从1开始遍历 第0位就是1 满足3个的情况 就减少为2两个否则 就重置为1个
  let left = 0;
  let res = 0;
  for (let i = 1; i < str.length; i++) {
    if (str[i] == str[i - 1]) {
      //当前项和前一项相等
      counter++;
    } else {
      //不等
      counter = 1;
    }

    //判断
    if (counter == 3) {
      console.log("nums[i]", str[i], i);
      //要移动指针了
      left = i - 1;
      counter = 2; //为啥是2 因为i减少了一个
    }

    //更新最大值
    res = Math.max(res, i - left + 1);
  }
  console.log("res", res);
};
var str1 = "baaabbabbb";
longestSubStting(str1); //7
var str2 = "babba";
longestSubStting(str2); //5
