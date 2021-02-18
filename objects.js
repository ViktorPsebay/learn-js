let schedule = {};

alert(isEmpty(schedule));

schedule["8:30"] = "get up";

alert(isEmpty(schedule));

function isEmpty(obj) {
  for (let key in obj) return false;
  return true;
}

function sumSalaries(salaries) {
  let sum = 0;
  for (let item of Object.values(salaries)) sum += item;
  return sum;
}

function count(obj) {
  let properties = 0;
  for (let item in obj) properties++;
  return properties;
}
