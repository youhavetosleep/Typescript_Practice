// 10-3-module1.js에서 만든 add함수를 여기서 쓸 수 있는 이유는
// 모듈화를 하지 않으면 모두 글로벌 스코프로 측정되기 때문이다.
// default import 시 원하는 이름으로 정의할 수 있다.
// default가 아닌 함수들은 중괄호 안에 넣어 가져와야한다.
import run from "./10-3-module1.js";
console.log(run(1, 2));
