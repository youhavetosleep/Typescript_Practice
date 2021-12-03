interface Employee  {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log(`full time!!`);
  }
  workFullTime() {}
}

class PartTimeEpmloyee implements Employee {
  pay() {
    console.log("par time!!");
  }
  workPartTime() {}
}
// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 좋지 않다. 
function payBad(empolyee: Employee): Employee {
  empolyee.pay();
  return empolyee;
}
// generic
// generic에 extends를 활용하여 조건 걸기! 
function pay<E extends Employee>(empolyee: E): E{
  empolyee.pay()
  return empolyee
}

const js = new FullTimeEmployee();
const jobs = new PartTimeEpmloyee();

// generic 실습
const obj = {
  name :'js',
  age : 27
}
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

console.log(getValue(obj, 'age'))
console.log(getValue(obj, 'name'))