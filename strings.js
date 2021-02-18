function ucFirst(name) {
  if (name[0] != undefined) return name[0].toUpperCase() + name.slice(1);
  return name;
}

function checkSpam(str) {
  if (str.toUpperCase().includes("VIAGRA") || str.toUpperCase().includes("XXX"))
    return true;
  return false;
}

function truncate(str, maxlength) {
  if (str.length > maxlength) return str.slice(0, maxlength - 1) + "…";
  return str;
}

function extractCurrencyValue(str) {
  return +str.slice(1);
}
