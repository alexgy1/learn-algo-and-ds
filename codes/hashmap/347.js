/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 *
 *
 * method2 heap
 *
 * method3
 * use bucket sort
 * TC O(n)
 * SC O(n)
 * [1,1,1,2,2,100]
 * i(count)[0,1,2,3,4,5]
 * values   [arr item ] 1出现3次就把
 */
var topKFrequent = function (nums, k) {
  const res = [];
  let map = new Map();
  let bucket = new Array(nums.length); //use one more index

  for (let n of nums) {
    map.set(n, (map.get(n) || 0) + 1);
  }

  //set value as index in bucket  and key as value in array keep bucket length not too big
  for (let [key, value] of map.entries()) {
    if (!Array.isArray(bucket[value])) bucket[value] = [];
    bucket[value].push(key);
  }

  //reverse count top k elements
  for (let i = bucket.length - 1; i >= 0; i--) {
    let b = bucket[i];
    if (!Array.isArray(b)) continue;

    for (let n of b) {
      res.push(n);
      if (res.length === k) return res;
    }
  }

  return res;
};

// let nums = [1, 1, 1, 2, 2, 3],
//   k = 2;
// let nums = [1],
//   k = 1;

let nums = [3, 0, 1, 0],
  k = 1;
console.log(topKFrequent(nums, k));
