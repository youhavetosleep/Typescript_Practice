// window를 호출한다. 1
console.log(this);

// window를 호출한다. 2
function simpleFunc() {
  console.log(this);
}
simpleFunc();
console.clear();
class Counter {
  conunt = 0;
  // bind를 사용하지 않아도 화살표 함수를 사용하면
  // binding을 할 수 있다.
  increase = function () {
    console.log(this);
  };
}
const counter = new Counter();
counter.increase();
// const로 선언하는 순간 정보을 잃어버린다.
// const caller = counter.increase;
// 정보를 잃어버리지 않으려면
// bind를 사용하여 묶어줄 수 있다.
const caller = counter.increase.bind(counter);
caller(); // --> undefined

class Jobs {}
const jobs = new Jobs();
jobs.run = counter.increase;
jobs.run();
