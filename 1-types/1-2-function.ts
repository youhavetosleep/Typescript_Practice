{
  // // JavaScript
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }
  // // TypeScript
  // // add는 num1, num2 라는 숫자를 받아 number를 리턴하는 함수이다.
  // function add(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  // // JavaScript
  // function jsFetchNum(id) {
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }
  //   // TypeScript
  //   // 타입스크립트의 장점!
  //   // 1. 함수의 리턴값으로 가서 확인하지 않아도
  //   // 함수만 보고도 어떤 타입인지 어떤 값을 리턴하는지 확인할 수 있다.
  //   // 2. 문서화를 깔끔하게 할 수 있다.
  //   // 3. 직관적인 코드 작성
  //   function FetchNum(id: string): Promise<number> {
  //         // code ...
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }

  // JavaScript => TypeScript
  // 1. Optional parameter
  // '?'를 붙히게 되면 전달해도 되고 전달하지 않아도 된다는 표시
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("steve", "Jobs");
  printName("js"); // '?'가 없다면 오류로 표시된다.
  printName("js", undefined);

  // 2. Default parameter
  // 아무것도 전달하지 않아도 기본값이 리턴
  function printMessage(message: string = "default message") {
    console.log(message);
  }
  printMessage();

  // 3. Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
}
