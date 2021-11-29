{
  // Array
  const fruits: string[] = ["apple", "banana"];
  // 배열은 아래 1, 2와 같은 방식으로 데이터타입을 정해줄 수 있다.
  const scroes1: number[] = [1, 2, 3, 4];
  const scroes2: Array<number> = [1, 2, 3, 4];

  // readonly를 붙히게 되면 fruits를 절대 변경할 수 없게 된다.
  // readonly를 적용할 때엔 string[]의 방식을 사용해야한다.
  // Array<string>의 방식은 사용할 수 없다.
  // 코드의 일관성을 위해 보통 string[]의 형식으로 작성하는 것이 좋다.
  function printArray(fruits: readonly string[]) {}

  // Tuple -> interface, type alias, class의 형식을 사용하는 것이 좋다.
  // 배열은 배열인데 서로 다른 타입을 함께 가질 수 있는 배열이다.
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
  // tuple 사용은 권장 하지 않음
  // 데이터에 접근할 때 인덱스로 접근 하는 것은 가독성이 떨어진다.
  // 데이터를 직접 확인하지 않는 이상 확인하기가 번거롭다.
}
