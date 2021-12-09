// Java: Exception
// JavaScript : Error

// Error(Exception) Handing: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === "not exist!") {
    throw new Error(`file not exist! ${fileName}`);
  }
  return "file contents";
}

function closeFile(fileName: string) {
  //
}

const fileName = "not exist!";
// try, catch 를 사용하면 멈추지 않고 끝까지 코드를 읽는다.
try {
  console.log(readFile(fileName));
} catch (err) {
  console.log("catched!!");
} finally {
  // 오류와 상관없이 실행되야되는 코드는
  // finally안에 작성한다.
  closeFile(fileName);
  console.log("finally!!");
}
console.log("!!!");
