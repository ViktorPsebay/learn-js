function sumInput() {
  let num;
  let arr = [];
  while ((num = prompt("enter number: "))) {
    arr.push(+num);
  }
  let sum = 0;
  for (let item of arr) sum += item;
  return sum;
}

function getMaxSubSum(arr) {
  let startSubArray = 0;
  let endSubArray = arr.length - 1;
  let sum = 0;
  let tempSum1 = 0;
  let tempSum2 = 0;
  for (let item of arr) sum += item;
  while (startSubArray != endSubArray) {
    for (let i = startSubArray; i <= endSubArray; ++i) tempSum1 += arr[i];
    for (let i = startSubArray; i <= endSubArray; ++i) tempSum2 += arr[i];
  }
}

function camelize(str) {
  let arr = str.split("-");
  let result = arr.map((element, key) => {
    if (element && key) return element[0].toUpperCase() + element.slice(1);
    else if (element) return element;
  });
  return result.join("");
}

function filterRange(arr, a, b) {
  return arr.filter((item) => item >= a && item <= b);
}

function copySorted(arr) {
  return arr.slice().sort();
}

function Calculator() {
  this.methods = {
    "+": (a, b) => +a + +b,
    "-": (a, b) => a - b,
  };

  this.calculate = (str) => {
    let splitStr = str.split(" ");
    if (!(splitStr[0] && splitStr[1] && splitStr[2])) return NaN;
    return this.methods[splitStr[1]](splitStr[0], splitStr[2]);
  };

  this.addMethod = (str, func) => {
    this.methods[str] = func;
  };
}

function sortByAge(users) {
  let arr = [...users];
  arr.sort((a, b) => a.age - b.age);
  return arr;
}

function shuffle(array) {
  let arr = [...array];
  arr.sort(() => Math.random() - 0.5);
  return arr;
}

function getAverageAge(users) {
  return Math.floor(
    users.reduce((sum, current) => sum + current.age, 0) / users.length
  );
}

function unique(arr) {
  let resultArr = [];
  arr.forEach((element) => {
    if (!resultArr.includes(element)) resultArr.push(element);
  });
  return resultArr;
}
