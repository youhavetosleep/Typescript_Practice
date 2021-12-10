// 기존의 상속받은 타입이 string이라면 boolean으로 return 아니라면 number
type Check<T> = T extends string ? boolean : number;

type Type = Check<string>; // boolean

type TypeName<T> = T extends string
  ? // number를 상속한다면 number 아니라면 boolean
    "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : T extends undefined
  ? "undefined"
  : T extends Function
  ? "function"
  : "object";

type T0 = TypeName<string>;
("string");
type T1 = TypeName<"a">;
("string");
type T2 = TypeName<() => void>;
("function");
