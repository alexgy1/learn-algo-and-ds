const palindrome = (s, l, r) => {
  //从中心往两边找
  while (l >= 0 && r < s.length && s[l] == s[r]) {
    l--;
    r++;
  }
  return s.substring(l + 1, r);
};

function longestPalindrome(s) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    let s1 = palindrome(s, i, i); //奇数
    let s2 = palindrome(s, i, i + 1); //偶数

    res = res.length > s1.length ? res : s1;
    res = res.length > s2.length ? res : s2;
  }

  return res;
}

let s = "babad";

console.log(palindrome(s));
