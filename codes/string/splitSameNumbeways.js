function main(str) {
  if (str == null || str.length == 0) return str;

  let xAll = 0,
    yAll = 0;
  for (let c of str) {
    xAll += c == "x" ? 1 : 0;
    yAll += c == "y" ? 1 : 0;
  }

  let leftX = str[0] == "x" ? 1 : 0;
  let leftY = str[0] == "y" ? 1 : 0;
  let ans = 0;

  for (let i = 1; i < str.length; i++) {
    if (leftX == leftY || xAll - leftX == yAll - leftY) {
      ans++;
    }
    leftX += str[i] == "x" ? 1 : 0;
    leftY += str[i] == "y" ? 1 : 0;
  }

  return ans;
}
console.log(main("ayxbx")); //3

//a | yxbx left x = 0 left y = 0  true
