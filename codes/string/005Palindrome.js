const palindrome = (l, r, s) => {
  while (l >= 0 && r < s.length && s[l] == s[r]) {
    l++;
    s--;
  }
  //不等了 返回 s[l] s[r]为中心的最长回文串
  return s.substring(l + 1, r);
};

const longestPalindrome = (s) => {
  let res = "";

  for (let i = 0; i < s.length; i++) {
    //奇数的情况 从同一点 往两边找
    let s1 = palindrome(i, i, s);
    //偶数的情况 从相临的两个带你 往两边找
    let s2 = palindrome(i, i + 1, s);

    res = res.length > s1 ? res : s1;
    res = res.length > s2 ? res : s2;
  }

  return res;
};
