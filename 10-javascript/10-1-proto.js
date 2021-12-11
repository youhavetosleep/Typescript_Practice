const x = {};
const y = {};
console.log(x);
console.log(y);
// x와 y는 동일한 object의 proto를 상속하고 있기 때문에
// true 값이 나온다.
console.log(x.__proto__ === y.__proto__);

const array = [];
console.log(array);
// array.pop, array.every, array.push 등등 쓸 수 있게 된다.
// array -> array -> object 순으로 상속
// 그래서 자바스크립트에 있는 모든 object들은 object라는 __proto__를 가지고 있게 된다.

console.clear();

function CoffeeMachine(beans) {
  this.beans = beans;
  // Instance member level
  // Instance가 생성될 때마다 만들어지는 함수
  // this.makeCoffee = (shots) => {
  //   console.log("making...!");
  // };
}
// prototype member level
// __proto__안에 makeCoffee라는 함수를 가지고 있다.
CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log("making...!");
};
const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}
// LatteMachine은 CoffeeMachine를 상속받는다.
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachine(123);
console.log(latteMachine);
