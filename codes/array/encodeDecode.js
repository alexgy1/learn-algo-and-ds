class StringMethods {
  /**
   *
   * @param {*} strs  a list of strings
   * @return: encodes a list of strings to a single string
   */
  static encode(strs) {
    let res = "";
    for (let s of strs) {
      res += `${s.length}#${s}`;
    }
    return res;
  }

  /**
   *
   */
  static decode(str) {
    let res = [],
      i = 0;

    while (i < str.length) {
      let j = i;
      while (str[j] !== "#") {
        j++;
      }
      let len = str.substring(i, j);
      res.push(str.substring(j + 1, j + 1 + len));
      i = j + 1 + len;
    }

    return res;
  }
}
