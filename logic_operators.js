"use strict";
globalThis.__codeBoxId = "bvd3ck0q7q";

let login = prompt("input any login: ");
if (login === "Admin") {
  let password = prompt("Hello! Password?: ");
  if (password === "123qwerty") {
    alert("I'm chief");
  } else if (password === null) {
    alert("canceling");
  } else {
    alert("incorrect password");
  }
} else if (login === null) {
  alert("canceling");
} else {
  alert("I dont now you");
}
