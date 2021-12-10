// map
// 기존에 있는 타입들을 이용하며 다른 타입으로도 변경할 수 있다.
// 재사용성을 높힐 수 있는 방법

type Video = {
  title: string;
  author: string;
};

// map
// <T> === 어떤 종류의 다른 타입도 받아올 수 있다.
type Optional<T> = {
  // P = T타입의 모든 키들 중 하나
  [P in keyof T]?: T[P]; //  [] === for ... in와 동일한 기능
};

type VideoOptional = Optional<Video>;
const videoOp: VideoOptional = {
  title: "str",
};

type Animal = {
  name: string;
  age: number;
};

const animal: Optional<Animal> = {
  name: "dog",
};

type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};
animal.name = "js";
const video: ReadOnly<Video> = {
  title: "hi",
  author: "js",
};
// video.author = 'asd'

// map 타입을 사용하지 않았을 때 type에 수정사항이나 추가 타입이 생기면
// 전부 바꿔줘야하기 때문에 사용이 불편하다.
// type VideoOptional = {
//   title?: string,
//   author?: string
// }
// type VideoReadOnly = {
//   readonly title?: string,
//   readonly author?: string
// }
