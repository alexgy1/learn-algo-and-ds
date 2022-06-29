const phoneNumber = (digits) => {
  let map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  let res = [];
  let path = [];
  let backtrack = (start) => {
    if (path.length == digits.length) {
      return res.push(path.join(""));
    }
    for (let c of map[digits[start]]) {
      path.push(c);
      backtrack(start + 1);
      path.pop();
    }
  };
  digits && backtrack(0);

  return res;
};

console.log(phoneNumber("23"));
