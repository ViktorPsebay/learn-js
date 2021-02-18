let calculator = {
  read() {
    this.x = +prompt("enter first number: ");
    this.y = +prompt("enter second number: ");
  },
  sum() {
    return this.x + this.y;
  },
  mul() {
    return this.x * this.y;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

//   The same with Constructor

function Calculator() {
  this.read = function () {
    this.x = +prompt("enter first number: ");
    this.y = +prompt("enter second number: ");
  };
  this.sum = function () {
    return this.x + this.y;
  };
  this.mul = function () {
    return this.x * this.y;
  };
}

let calculatorByConstructor = new Calculator();

calculatorByConstructor.read();
alert(calculatorByConstructor.sum());
alert(calculatorByConstructor.mul());
