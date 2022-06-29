//初始化
let map = new Map();
//获取值
console.log(map.get(1));

//设置值 并且给默认值
map.set(1, (map.get(1) || 0) + 1);

console.log(map.has(1));
console.log(map.get(1));

map.delete(1);
console.log(map.size); //0

map.set(1, 1);
map.set(2, 2);
for (let [key, val] of map) {
  //[1,1]

  if (key === 1) {
    console.log(key, val);
    break;
  }
}

//map里面不能return

console.log(map.keys(), [...map.keys()]);
console.log(map.values());
