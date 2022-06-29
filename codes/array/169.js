// var majorityElement = function (nums) {
//   let map = {},
//     res = 0,
//     maxCount = 0;

//   for (let i = 0; i < nums.length; i++) {
//     map[nums[i]] = map[nums[i]] == undefined ? 1 : map[nums[i]] + 1;
//     res = map[nums[i]] > maxCount ? nums[i] : res;
//     maxCount = map[nums[i]] > maxCount ? map[nums[i]] : maxCount;
//   }
//   return res;
// };
var majorityElement = function (nums) {
  let res = (count = 0);

  for (let n of nums) {
    //等于零的时候  才回重置res为当前的元素
    if (count == 0) {
      res = n;
    }
    //count 每次 n和res相同的时候 加1 否则就减少1
    count += n == res ? 1 : -1;
  }
  return res;
};

console.log(majorityElement([6, 5, 5]));
