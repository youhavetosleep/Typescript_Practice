{
  const obj = {
    name: "js",
  };

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  // Animal 키 값의 타입을 설정해줄 수 있다.
  type Name = Animal["name"]; // string
  const text: Name = "hello";

  type Gender = Animal["gender"]; //  'male' | 'female'

  //keyof를 사용하면 Animal에 있는 모든 타입을 Keys로 할당한다.
  type Keys = keyof Animal; // 'name' | 'age' | 'gender'

  const key: Keys = "gender";

  type Person = {
    name: string;
    gender: Animal["gender"];
  };
  const person: Person = {
    name: "js",
    gender: "male",
  };
}
