// https://github.com/microsoft/TypeScript/blob/master/lib/lib.es5.d.ts
// 오픈소스를 활용하여 공부해보기

type student = {
  passed: boolean;
};

const students: student[] = [
  { passed: true },
  { passed: true },
  { passed: true },
];
// every는 배열의 모든 요소들을 돌며 콜백함수에 일치하는지 아닌지를 체크하여 boolean값으로 출력
const result = students.every((student) => {
  return student.passed;
});
console.log(result);

class Animal {}
class Cat extends Animal {
  isCat: boolean = true;
}
class Dog extends Animal {
  isDog: boolean = false;
}

const animals : Animal[] = [new Cat(), new Cat(), new Dog()];
function isCat(animal: Animal): animal is Cat {
return (animal as Cat).isCat !== undefined
}
console.log(animals.every<Cat>(isCat))
