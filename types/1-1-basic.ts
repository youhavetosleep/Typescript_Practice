{
  /**
   * JavaScript 타입엔 2가지가 있다.
   * 1. Primitive(원시 타입) : number, string, boolean, bigint, symbol, null, undefined
   * 2. Object : function, array.....
   */

  // typescript
  // 기본 타입의 종류
  // 1. number
  const num: number = 1;

  // 2. string
  const str: string = "hello";

  // 3. boolean
  const boal: boolean = true;

  // 4. undefined ( 비어있는지 비어있지 않은지 결정되어 있지않다. )
  let name: undefined; // 이렇게 쓰는 경우는 거의 없다. 단독적으로 사용하지 않는다.
  let age: number | undefined; // 보통 타입과 함께 undefined도 쓴다.
  age: undefined;
  age: 1;

  // 5. null (비어있다.)
  let person: null; // 이렇게 쓰면 쓸모가 없기 때문에 or과 함께 쓴다.
  let person2: string | null;

  // 4, 5번은 보통 헷갈리는 경우가 많은데
  // 대부분의 경우 좀 더 범용적인 4번으로 쓰는 경우가 많고
  // 문맥을 고려했을 때 5번이 적합한 경우도 있다.

  // 6. unknown (다양한 어떤 데이터도 담을 수 있다.) 그럼 쓰지 않아도 되는 것 아닌가?
  let notSure: unknown = 0;
  notSure: "he";
  notSure: true;
  // unknown은 가능하면 사용하지 않는 편이 좋다.

  // 7. any
  let anything: any = 0;
  anything: "hello";
  // any 또한 가능하다면 사용하지 않는 편이 좋다.

  // 8. vold
  // 함수에서 아무것도 리턴하지 않으면 vold!
  function print(): void {
    console.log("hello");
    return;
  }
  // 변수에서 쓰이는 경우는 드물다.
  let unusable: void = undefined;

  // 9. never
  // 함수에서 절대 리턴되지 않는 경우에 그것을 명시하기 위해서 쓰인다. 
  // 에러를 던지는 경우, 반복문이 계속 실행되는 경우 
  function throwError(message: string): never { 
    //message -> server (log) 서버에 로그를 남길 때 
    throw new Error(message);
    while(true) {}
  }
  let neverEnding: never; 
  // 위와 같이 변수에 쓰이는 경우도 없다. 

  // 10. object
  // 원시타입을 제외한 모든 것을 담을 수 있다! 
  // 오브젝트 타입도 잘 사용하지 않는 편이 좋다.
  // 타입 스크립트를 사용하는 이유는 타입을 명확하게 정하기 위함이기 때문이다. 
  let obj : Object
  function acceptSomeObject(obj : object) {}
  acceptSomeObject({name : 'js'})
  acceptSomeObject({animal : 'dog'})
}
