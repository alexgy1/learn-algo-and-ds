let obj = { 0: "男", 1: "女" };

let res = [];
for (let key in obj) {
  res.push({
    label: obj[Number(key)],
    value: key,
  });
}

console.log(res);

let a = [
  { label: "男", value: 0 },
  { label: "女", value: 1 },
];

let obj1 = {};
for (let item of a) {
  obj1[item.value] = item.label;
}
console.log(obj1);
