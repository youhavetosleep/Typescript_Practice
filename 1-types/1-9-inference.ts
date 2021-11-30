{
  //Type Inference(추론)
  // : string을 붙히지 않아도 타입스크립트아 알아서 판독한다.
  // 때문에 뻔한 타입은 생략해도 괜찮다.
  let text: string = "hello";
  function print(message: string) {
    // message에 아무 값도 할당하지 않으면 'any'로 결정된다.
    console.log(message);
  }
  function add(x: number, y:number) {
    return x + y
    //리턴 값도 추론하여 number로 판단한다.
  }
  const result = add(1, 2)
  // 변수 값도 추론되어 number로 판단.
  // 하지만 생략하여 작성하는 방법은 좋지 못함
  // 함수에서는 꼭 명시해주는 편이 좋다.
  // 타입스크립트를 사용하는 이유가 없기 때문이다
  // 팀 프로젝트할 때 일관성을 위해 추론 형식을 맞추는 것이 좋다. 
}
