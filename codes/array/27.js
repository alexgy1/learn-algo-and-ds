var removeElement = function (nums, val) {
  let slow = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[slow] = nums[i];
      slow++;
    }
  }
  console.log(nums, "nums", slow);
  return slow;
};
let nums = [3, 2, 2, 3],
  val = 3;

removeElement(nums, val);
