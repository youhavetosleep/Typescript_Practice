{
  // TypeScript의 사용 이유!
  // Type Aliases
  // 타입을 정할 수 있다는 것
  type Text = string;
  const name: Text = "js";

  // object 타입도 원하는대로 정할 수 있다. 
  type Student = {
    name: string;
    age: number;
  };
  const Student: Student = {
    name: "js",
    age: 12,
  };

  // String Literal Types
  //  Name은 'name'이 아닌 것은 할당할 수 없다.
  type Name = "name";
  let jsName: Name;
  jsName = "name";
  type JSON = "json";
  const json: JSON = "json";
  
}
