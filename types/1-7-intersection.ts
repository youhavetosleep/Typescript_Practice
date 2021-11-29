{
  // intersection Type : &

  // union은 한가지만 선택이 가능했다면 (or 개념)
  // intersection은 모든 것을 다 합한 것을 말한다. (and 개념)
  // intersection을 이용하면 다양한 타입들을 하나로 묶어서 사용할 수 있다. 

  type Student = {
    name : string;
    score : number;
  }

  type Worker = {
    empolyeeId: number;
    work: () => void;
  }

  function internWork(person: Student & Worker) {
    console.log(person.name, person.empolyeeId, person.work())
  }
  // internWork라는 함수를 통해 Student, Worker 타입의 모든 요소에 접근할 수 있다.
  // 하지만 인자값으로 모든 요소를 넣어줘야한다. 
  // 하나라도 빠지면 에러 발생! 
  internWork({
    name: 'js',
    score : 5,
    empolyeeId: 123,
    work: () => {}
  })
}