function unique(arr) {
  return Array.from(new Set(arr));
}

function aclean(arr) {
  let clue;
  let map = new Map();
  for (let item of arr) {
    clue = item.toUpperCase().split("").sort().join("");
    map.set(clue, item);
  }
  let res = Array.from(map.values());
  return res;
}
