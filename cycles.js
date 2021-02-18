"use strict";
globalThis.__codeBoxId = "bvd3ck0q7q";

for (let i = 2; i <= 10; ++i) {
  if (i % 2 !== 0) continue;
  console.log(i);
}

let value;
do {
  value = prompt("input number bigger than 100: ");
} while (value <= 100 && value);

outer: for (let i = 2; i <= value; ++i) {
  for (let j = 2; j < i; ++j) {
    if (i % j === 0) {
      continue outer;
    }
  }
  console.log(i);
}
