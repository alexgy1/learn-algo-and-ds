function soultion(A) {
  let res = 0;
  let str = genString(A, 0);

  for (let i = 0; i < str.length; i++) {
    res = res > str[i].length ? res : str[i].length;
  }
  return res;
}

function genString(arr, ind) {
  let fin = [];
  fin.push("");

  // Base case
  if (ind == arr.length) return fin;

  let tmp = genString(arr, ind + 1);
  let ret = tmp;

  for (let i = 0; i < tmp.length; i++) {
    let test = tmp[i] + arr[ind];

    if (check(test)) ret.push(test);
  }
  return ret;
}
function check(s) {
  let a = new Set(); //use a set
  for (let i = 0; i < s.length; i++) {
    if (a.has(s[i])) {
      return false;
    }
    a.add(s[i]);
  }
  return true;
}

let A = ["co", "dil", "ity"];

codilty;
