var findAllNumbersDisappeared = (arr) => {
  let set = new Set(),
    one2NArr = new Array(arr.length).fill().map((_, i) => i + 1);

  one2NArr.forEach((item) => {
    set.add(item);
  });

  arr.forEach((a) => {
    if (set.has(a)) {
      set.delete(a);
    }
  });

  return [...set];
};
findAllNumbersDisappeared([4, 2, 3, 7, 8, 2, 3, 1]);
