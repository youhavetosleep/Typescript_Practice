{
  // Type Assertions
  // 별로 좋은 방법은 아니다!
  // 피할 수 있는 방법을 고민해볼 필요가 있다. 
  // 불가피하게 사용되는 경우도 존재
  function jsStrFunc(): any {
    return 'Hello'
  }
  const result = jsStrFunc()
  // Assertion을 아래 2가지 형식으로 사용할 수 있다. 
  // Assertion은 확실한 경우가 아니라면 사용하지 않는 것이 좋다.
  console.log((result as string).length)
  console.log((<string>result).length)

  function findNumbers(): number[] | undefined {
    return undefined
  }
  // '!'는 확신하는 순간만 사용하기
  const numbers = findNumbers()!;
  numbers.push(2)
}