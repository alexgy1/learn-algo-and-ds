const removeDuplicates = (nums) => {
  let l = 1;

  for (let r = 1; r < nums.length; r++) {
    if (nums[r] !== nums[r - 1]) {
      //first time to see a new one add to l
      nums[l] = nums[r];
      l++;
    }
  }
  //   console.log("nums", nums);
  return l;
};

console.log(removeDuplicates([0, 0, 1, 1, 2, 2, 3, 3, 3, 4]));
console.log(removeDuplicates([0]));
console.log(removeDuplicates([0, 1]));
console.log(removeDuplicates([0, 1, 1]));
console.log(removeDuplicates([0, 0, 1]));
console.log(removeDuplicates([0, 0, 1, 2, 2, 3]));
