let nums = [2, 3, 4, 5, 5, 5, 5, 5, 6, 7];

function main(nums, target) {
  let res = [-1, -1];
  let start = -1;
  let end = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      start = i;

      //   while (i + 1 < nums.length && nums[i + 1] == target) {
      //     i++;
      //   }
      //   return [start, i];

      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] == target) {
          end = j;
        }
      }
      return [start, end];
    }
  }
  console.log(res);
  return res;
}

console.log(main(nums, 5));
