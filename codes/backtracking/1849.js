function main(str) {
  for (let i = 0; i < str.length; i++) {
    let val = Number(str.substring(str.length - i));
    if (dfs(i, val, str)) return true;
  }
  return false;
}

// return boolean
function dfs(index, prev, str) {
  if (index == str.length) return true;

  for (let j = index; j < str.length; j++) {
    let val = Number(str.substring(index, j + 1));
    if (val + 1 == prev && dfs(j + 1, val, str)) return true;
  }
  return false;
}

main("0890");
