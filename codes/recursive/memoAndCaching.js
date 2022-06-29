function fib(n) {
  let map = new Map();
  map.set(0, 1);
  map.set(1, 1);

  if (map.has(n)) return map.get(n);

  let res = fib(n - 1) + fib(n - 2);
  map.set(n, res);

  return res;
}

//tail-call recursion
