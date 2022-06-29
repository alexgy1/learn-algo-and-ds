//初始化
let map = new Map();
//获取值
console.log(map.get(1));

//设置值 并且给默认值
map.set(1, (map.get(1) || 0) + 1);

console.log(map.has(1));
console.log(map.get(1));
