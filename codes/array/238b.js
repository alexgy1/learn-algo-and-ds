var productExceptSelf = function (nums) {
  let res = new Array(nums.length).fill(1);

  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix;
    prefix *= nums[i];
  }

  let postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= postfix;
    postfix *= nums[i];
  }
  console.log(res);
  return res;
};

// let nums = [1, 2, 3, 4];

// productExceptSelf(nums); //[ 24, 12, 8, 6 ]

let nums = [-1, 1, 0, -3, 3];

productExceptSelf(nums);
