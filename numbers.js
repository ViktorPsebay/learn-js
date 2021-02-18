function readNumber() {
  let num;
  while (isNaN(num)) {
    num = prompt("enter number: ");
    if (num === null || num === "") return null;
  }
  return +num;
}

function random(min, max) {
  return min + Math.random() * (max - min);
}

function randomInteger(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}
