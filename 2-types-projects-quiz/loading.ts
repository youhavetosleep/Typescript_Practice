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
      console.log(`π ${state.state}...`);
      return;
    }
    if (state.state === "success") {
      console.log(`π ${state.response.body}`);
      return;
    }
    if (state.state === "fail") {
      console.log(`π± ${state.reason}`);
      return;
    }
  }

  printLoginState({ state: "loading" }); // π loading...
  printLoginState({ state: "success", response: { body: "loaded" } }); // π loaded
  printLoginState({ state: "fail", reason: "no network" }); // π± no network

  // μ λμ¨ νμκ²½μ° μ¬λ¬ μΌμ΄μ€λ³λ‘ λ€λ₯Έ λ‘μ§μ μ μ©ν λλ switchλ¬Έλ²μ μ¬μ©νλ κ²μ΄ μ’λ€.
  // λ€λ₯Έ νμ(retrying μ¬μλμ€)μ μΆκ° νλ€λ©΄ μΆκ°λ μΌμ΄μ€λ μ λΆλ€ elseμ λ€μ΄κ°μ μμνμ§ λͺ»ν μ€λ₯κ° λ°μνκΈ° λλ¬Έ 
  // Reference Case
  function RefprintLoginState(state: ResourceLoadState) {
    switch (state.state) {
      case "loading":
        return console.log(`π ${state.state}...`);
      case "success":
        return console.log(`π ${state.response.body}`);
      case "fail":
        return console.log(`π± ${state.reason}`);
    }
  }
}
