/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  //排除第一个小写 其他是大写的情况
  if (word.length >= 2 && isLower(word[0]) && isUpper(word[1])) return false;

  // 不管第一个是否是大小写 从第二个开始 后面的必须一致 要么都大写 要么都小写
  for (let i = 2; i < word.length; i++) {
    if (isLower(word[i]) !== isLower(word[i - 1])) return false;
  }
  return true;
};

var isUpper = (w) => w.charCodeAt() >= 65 && w.charCodeAt() <= 90;
var isLower = (w) => w.charCodeAt() >= 97 && w.charCodeAt() <= 122;

let word = 'USA';
console.log(detectCapitalUse(word)); //false
