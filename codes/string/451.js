var frequencySort = function (s) {
  const map = new Map();

  for (let c of s) {
    map.set(c, map.get(c) + 1 || 1);
  }
  let sorted = [...map.entries()].sort((a, b) => b[1] - a[1]);

  let res = '';
  for(let [key, value] of sorted) {
    res += key.repeat(value);
  }
  return res;
};

let s = 'tree';
console.log(frequencySort(s));
