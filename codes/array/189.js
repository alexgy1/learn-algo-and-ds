var rotate = function (nums, k) {
  let len = nums.length,
    temp = [];
  for (let i = 0; i < len; i++) {
    let newIndex = (i + k) % len;
    temp[newIndex] = nums[i];
  }
  nums = temp;
  console.log(nums, 'nums');
};

let nums = [1, 2, 3, 4, 5, 6, 7],
  k = 3;

console.log(rotate(nums, k));
