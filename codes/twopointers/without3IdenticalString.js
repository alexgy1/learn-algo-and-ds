var main = function (str) {
  let prevCount = 1;
  let res = [];
  let maxCount = 3;
  for (let i = 1; i < str.length; i++) {
    if (str[i] == str[i - 1]) {
      prevCount++;
    } else {
      prevCount = 1;
    }
    console.log("str[i] prevCount", str[i], prevCount);

    if (prevCount < maxCount) {
      res.push(str[i]);
    }
  }
  console.log(res);
};

var main2 = function (str) {
  let res = [];

  for (let i = 2; i < str.length; i++) {
    if (str[i] !== str[i - 1] || str[i] !== str[i - 2]) {
      res.push(str[i]);
    }
  }
  console.log(res, "res ");
};
main("ssupppss");
main2("ssupppss");
