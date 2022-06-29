/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let p = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i == j) continue;
      p *= nums[j];
    }
    res.push(p);
  }
  return res;
};

console.log(productExceptSelf([1, 2, 3, 4])); //[ 24, 12, 8, 6 ]

var productExceptSelf1 = function (nums) {
  let res = Array(nums.length).fill(1);

  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix;
    prefix *= nums[i];
  }
  //res [1,1,2,6]

  let postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= postfix;
    postfix *= nums[i];
  }
  //res[3] = 6 *1 postfix = 1 * 4 = 4
  //res[2] = 2 *4  postfix =1 * 4 * 3 = 12
  //res[1] = 1 * 12 postfix = 1 * 4 * 3 * 2 = 24
  //res[0] = 1 * 24 = 24
  return res;
};
console.log(productExceptSelf1([1, 2, 3, 4])); //[ 24, 12, 8, 6 ]
