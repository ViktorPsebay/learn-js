"use strict";
globalThis.__codeBoxId = "bvd3ck0q7q";

let a = prompt("input any number: ");
let b = --a;
let result = a + b < 4 ? "Мало" : "Много";
console.log(result);

let login = prompt("input login: ", "");

let message =
  login == "Сотрудник"
    ? "Привет"
    : login == "Директор"
    ? "Здравствуйте"
    : login == ""
    ? "Нет логина"
    : "";
console.log(message);
