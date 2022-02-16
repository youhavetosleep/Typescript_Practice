type positionType = {
  x: number;
  y: number;
};
interface positionInterface {
  x: number;
  y: number;
}

// interface에 z를 추가할 수 있다.
// 하지만 사용시엔 x,y,x를 모두 표시해줘야한다. ex) obj2
interface positionInterface {
  z: number;
}


// object
const obj1: positionType = {
  x: 1,
  y: 1,
};
const obj2: positionInterface = {
  x: 1,
  y: 1,
  z: 1
};

// class
class pos1 implements positionType {
  x: number;
  y: number;
}
class pos2 implements positionInterface {
  x: number;
  y: number;
  z: number;
}

// extends
interface ZPositionInterface extends positionInterface {
  z: number;
}
type ZPositionType = positionType & {z: number}

// interface만 머지될 수 있다. 
interface positionInterface {
  z: number;
}

// Type aliases can use computed properties
type Person = {
  name : string,
  age: number,
}
type Name = Person['name']

// 인터페이스로는 구현할 수 없음
type NumberType = number;
type Direction = 'left' | 'right';

// type과 interface 중
// 실무에선 interface의 사용이 선호되는데 이유와 두 가지의 차이점은 무엇일까
