  /**
   * @param {number[]} nums
   * @return {number}
   */
  var findShortestSubArray = function (nums) {
    /*
        1. find the degree
        2. extend the r pointer until we reach the degree 
          shrink the l pointer as much as we can 
    */

    let len = nums.length,
      degree = 0;

    // 1. find the degree
    let map = new Map();
    for (let n of nums) {
      map.set(n, (map.get(n) || 0) + 1);
      degree = Math.max(degree, map.get(n));
    }

    console.log('map', map);

    // 2. extend the r pointer until we reach the degree
    //shrink the l pointer as much as we can
    let countMap = new Map(),
      l = 0,
      r = 0,
      res = len;

    while (r < len) {
      while (r < len) {
        //extend r
        countMap.set(nums[r], (countMap.get(nums[r]) || 0) + 1);
        r++;

        if (countMap.get(nums[r - 1]) === degree) {
          break;
        }
      }

      // [1, 2, 2, 3 ,1 ]
      //  l        r  r-1 = right boundary

      while (l < r) {
        countMap.set(nums[l], countMap.get(nums[l]) - 1);
        l++;

        // [1, 2, 2, 3 ,1 ]
        //        l   r  l-1 = left boundary

        if (countMap.get(nums[l - 1]) === degree - 1) {
          res = Math.min(res, r - l + 1);
          break;
        }
      }
    }

    return res;
  };

  // let nums = [1, 2, 2, 3, 1];
  // console.log(findShortestSubArray(nums));

  let nums1 = [2, 1, 1, 2, 1, 3, 3, 3, 1, 3, 1, 3, 2];

  console.log(findShortestSubArray(nums1));
