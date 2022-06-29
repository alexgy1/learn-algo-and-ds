var arr = [
  { id: 1, parentid: 0 },
  { id: 4, parentid: 2 },
  { id: 3, parentid: 1 },
  { id: 5, parentid: 0 },
  { id: 6, parentid: 0 },
  { id: 2, parentid: 1 },
  { id: 7, parentid: 4 },
  { id: 8, parentid: 1 },
];

function unflatten(arr) {
  let tree = [],
    hash = [],
    mappedElm;

  for (let item of arr) {
    hash[item.id] = item;
    hash[item.id]["children"] = [];
  }
  for (let id in hash) {
    if (hash.hasOwnProperty(id)) {
      mappedElm = hash[id];
      console.log("id", id);
      if (mappedElm.parentid) {
        hash[mappedElm["parentid"]]["children"].push(mappedElm);
      } else {
        tree.push(mappedElm);
      }
    }
  }
  return tree;
}

console.log(JSON.stringify(unflatten(arr), null, " "));
