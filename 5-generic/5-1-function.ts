{
  // 받은 인자가 빈값인지 아닌지 체크하는 함수
  // 숫자가 아닌 경우에 타입별로 만들 필요없이 아무 타입이 가능하도록 만드는 것이 generic
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  // any를 쓰는 경우엔 타입을 보장 받을 수 없기 떄문에 쓰지 않는 편이 좋다.
  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }
  // generic
  //generic을 이용하면 사용하는 사람이 어떤 타입인지 결정할 수 있다. 
  // 또한 any와는 다르게 타입을 보장 받을 수 있다. 
  // 'T'를 보고 아 제네릭 함수구나! 를 판단. 
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }
  const number = checkNotNull(123);
  const boad: boolean = checkNotNull(true)
}
