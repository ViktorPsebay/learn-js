function inBetween(a, b) {
  return function (item) {
    return item >= a && item <= b;
  };
}

function inArray(arr) {
  return function (item) {
    return arr.indexOf(item) != -1;
  };
}

function byField(parametr) {
  return function (a, b) {
    return a[parametr] > b[parametr] ? 1 : -1;
  };
}
