function check(s) {
  let a = new Set();

  // Check for repetition in
  // characters
  for (let i = 0; i < s.length; i++) {
    if (a.has(s[i])) {
      return false;
    }
    a.add(s[i]);
  }
  return true;
}

// Function to generate all possible
//  strings from the given array
function helper(arr, ind) {
  let fin = [];
  fin.push("");

  // Base case
  if (ind == arr.length) return fin;

  // Consider every string as
  // a starting substring and
  // store the generated string
  let tmp = helper(arr, ind + 1);

  let ret = tmp;

  // Add current string to result of
  // other strings and check if
  // characters are unique or not
  for (let i = 0; i < tmp.length; i++) {
    let test = tmp[i] + arr[ind];

    if (check(test)) ret.push(test);
  }
  return ret;
}

// Function to find the maximum
// possible length of a string
function maxLength(arr) {
  let tmp = helper(arr, 0);

  let len = 0;

  // Return max length possible
  for (let i = 0; i < tmp.length; i++) {
    len = len > tmp[i].length ? len : tmp[i].length;
  }

  // Return the answer
  return len;
}
