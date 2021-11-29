{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  // MyCase
  function printLoginState(state: ResourceLoadState) {
    if (state.state === "loading") {
      console.log(`👀 ${state.state}...`);
      return;
    }
    if (state.state === "success") {
      console.log(`😃 ${state.response.body}`);
      return;
    }
    if (state.state === "fail") {
      console.log(`😱 ${state.reason}`);
      return;
    }
  }

  printLoginState({ state: "loading" }); // 👀 loading...
  printLoginState({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginState({ state: "fail", reason: "no network" }); // 😱 no network

  // 유니온 타입경우 여러 케이스별로 다른 로직을 적용할때는 switch문법을 사용하는 것이 좋다.
  // 다른 타입(retrying 재시도중)을 추가 한다면 추가된 케이스는 전부다 else에 들어가서 예상하지 못한 오류가 발생하기 때문 
  // Reference Case
  function RefprintLoginState(state: ResourceLoadState) {
    switch (state.state) {
      case "loading":
        return console.log(`👀 ${state.state}...`);
      case "success":
        return console.log(`😃 ${state.response.body}`);
      case "fail":
        return console.log(`😱 ${state.reason}`);
    }
  }
}
