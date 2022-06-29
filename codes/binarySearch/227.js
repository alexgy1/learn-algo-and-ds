/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const isDigit = (a) => !isNaN(Number(a));
  const o = '+-*/';
  let opera = '+';
  let st = [];
  let sum = 0,
    i = 0;

  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (c === ' ') continue;
    if (isDigit(c)) {
      //'123'  1  1* 10 + 2   12* 10 + 3
      sum = sum * 10 + parseInt(c);
    }

    if (o.includes(c) || i == s.length - 1) {
      if (opera === '+') st.push(sum);
      if (opera === '-') st.push(-sum);
      if (opera === '*') st.push(st.pop() * sum);
      if (opera === '/') st.push(parseInt(st.pop() / sum));

      opera = c;
      sum = 0;
    }
  }

  console.log(st);
  let res = 0;
  while (st.length) {
    let val = st.pop();
    console.log('val', val);
    res += val;
  }
  return res;
};

let s = ' 3/2 ';
console.log(calculate(s));
