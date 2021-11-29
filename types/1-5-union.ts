{
  // Union Types: OR
  // 타입스크립트에서 가장 활용도가 높은 타입!
  // 발생할 수 있는 모든 케이스 중 하나만 할당할 수 있을 때 사용한다.

  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("up");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login(): LoginState {
    return {
      response: {
        body: "Logged in!",
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> body
  // fail -> reason

  function printLoginState(state: LoginState) {
    // 조건문을 사용하여 데이터를 구분하는 경우도 있지만 Discriminated 를 사용하는 것이 효과적
    // 다음 파일에서!
    if('response' in state) {
      console.log(state.response.body)
    }else {
      console.log(state.reason)
    }
  }
}
