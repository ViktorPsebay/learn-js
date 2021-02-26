function makeCounter() {
  function counter() {
    return counter.count++;
  }
  counter.set = function (value) {
    this.count = value;
    // console.log(this);
  };

  counter.decrease = () => {
    counter.count--;
    //console.log(this);
  };
  counter.count = 0;

  return counter;
}

function sum(a) {
  let sum = a;
  function closure(b) {
    sum += b;
    return closure;
  }

  closure.toString = function () {
    return sum;
  };
  return closure;
}

console.log(sum(1)(2)(3)(4));
