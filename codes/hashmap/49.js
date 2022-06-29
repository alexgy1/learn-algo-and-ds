/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = {};

  for (let str of strs) {
    let key = genKey(str);

    if (!map[key]) {
      map[key] = [str];
    } else {
      map[key].push(str);
    }
  }

  return Object.values(map);
};

var genKey = (str) => {
  let count = new Array(26).fill(0); //a-z

  for (let c of str) {
    count[c.charCodeAt() - "a".charCodeAt()] += 1;
  }

  let key = count.join("");
  return key;
};

let arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(arr));
