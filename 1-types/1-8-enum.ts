{
  //Enum types
  // 여러가지의 관련된 상수 값들을 한 곳에 모아서 정의할 수 있도록 도와주는 타입

  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1; 
  const WEDESDAY = 2;
  const DAYS_ENUM = Object.freeze({"MONDAY" : 0, "TUESDAY" : 1, "WEDNESDAY" : 2})
  const dayOfToday  = DAYS_ENUM.MONDAY

  // TypeScript
  // enum을 사용하여 관련된 상수 값을 묶어서 관리할 수 있다.
  // 위에서 여러 변수들로 선언하지 않고 아래 enum 처럼 사용 
  // 하지만 사용을 권장하지 않는다. 
  // enum은 타입이 정확하게 보장되지 않는다. 
  enum Days {
    // 초기값은 0부터 시작하고 초기값을 바꾸고 싶다면 
    // Monday = 1
    Monday,
    Tuesday,
    wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  console.log(Days.Monday) // 0
  // 첫번째 값은 0부터 시작
  // 숫자뿐아니라 문자열도 가능하지만
  // 다음에 뭐가 올지 예측할 수 없기 때문에 각각 입력해줘야한다.
  const day = Days.Saturday
  console.log(day)
}
