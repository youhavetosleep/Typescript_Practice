{
  //Discriminated Union Type

  // function: login -> success, fail
  // result를 추가하여 구분하기 쉽게 만들어 준다
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login(): LoginState {
    return {
      result : 'success',
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
    if (state.result === 'success') {
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }
  }
}
