/**
 * Let's make a calculator 🧮
 */

// My Case
function calculate(cal: string, num1: number, num2: number) {
  if (cal === "add") {
    return num1 + num2;
  }
  if (cal === "substract") {
    return num1 - num2;
  }
  if (cal === "multiply") {
    return num1 * num2;
  }
  if (cal === "divide") {
    return num1 / num2;
  }
  if (cal === "remainder") {
    return num1 % num2;
  }
}
console.log(calculate("add", 1, 3)); // 4
console.log(calculate("substract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1

// Reference Case

// 유니언 타입으로 정의
type Command = "add" | "substract" | "multiply" | "divide" | "remainder";
function RefCalculate(command: Command, a: number, b: number): number {
  switch (command) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    case "remainder":
      return a % b;
      default :
      throw new Error('unknown error')
  }
}
