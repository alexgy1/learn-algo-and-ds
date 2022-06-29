let s = "eedaaad";

function getString(s) {
  if (s.length < 3) return s;

  let arr = s.split("");

  for (let i = 2; i < arr.length; i++) {
    while (arr[i] == arr[i - 1] && arr[i] == arr[i - 2]) {
      //   console.log(arr[i], "arr[i]", i);

      arr.splice(i, 1);
    }
  }
  return arr.join("");
}

console.log(getString(s));

let s1 = "xxxtxxx";
console.log(getString(s1));

let s2 = "uuuuxaaaaxum";
console.log(getString(s2));

const filterString = (s1) => {
  let sb1 = "";

  // Append the first character
  sb1 += s1[0];

  // Append the second character
  sb1 += s1[1];

  // Loop for i=2 to n
  for (let i = 2; i < s1.length; ++i) {
    // If consecutive three element
    // are not equal then append
    if (s1[i] != s1[i - 1] || s1[i] != s1[i - 2]) {
      sb1 += s1[i];
    }
  }
  return sb1;
};

console.log(filterString(s));
console.log(filterString(s1));
console.log(filterString(s2));
