function sumToRecursion(n) {
  return n == 1 ? n : n + sumToRecursion(n - 1);
}

function sumToIteration(n) {
  let sum = 0;
  for (let i = 1; i <= n; ++i) sum += i;
  return sum;
}

function sumToFormulaProgression(n) {
  return ((n + 1) / 2) * n;
}

function compareSumTo(n) {
  let start = Date.now();
  let sum = sumToFormulaProgression(n);
  alert(
    `Сумма последовательности: ${sum}
    Время вычисления по формуле прогресии: ${Date.now() - start}`
  );

  start = Date.now();
  sum = sumToIteration(n);
  alert(
    `Сумма последовательности: ${sum}
    Время вычисления методом итерации: ${Date.now() - start}`
  );

  start = Date.now();
  sum = sumToRecursion(n);
  alert(
    `Сумма последовательности: ${sum}
    Время вычисления с помощью рекурсии: ${Date.now() - start}`
  );
}

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printList(list) {
  let listCopy = list;
  while (listCopy.next) {
    console.log(listCopy.value);
    listCopy = listCopy.next;
  }
  if (Object.keys(list).length == 0) {
    console.log("пуст");
  } else console.log(listCopy.value);
}

function printListRecursion(list) {
  console.log(list.value);
  if (list.next) printListRecursion(list.next);
}

function printListReverse(list) {
  if (Object.keys(list).length == 0) {
    console.log("пуст");
    return;
  }
  let listCopy = list;
  let arr = [];

  while (listCopy) {
    arr.push(listCopy.value);
    listCopy = listCopy.next;
  }

  for (let i = arr.length - 1; i >= 0; --i) {
    console.log(arr[i]);
  }
}

function printListRecursionReverse(list) {
  if (list.next) printListRecursionReverse(list.next);
  console.log(list.value);
}
