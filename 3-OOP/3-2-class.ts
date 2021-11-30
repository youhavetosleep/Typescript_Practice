{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  class CoffeeMaker {
    // 클래스를 만든다는 것은
    // 관련있는 함수나 데이터들을 한 곳에 묶어 놓는 기능을 하는 것
    static BEANS_GRAM_PER_SHOT: number = 7; // class level
    // 클래스 레벨은 클래스와 연결이 되어있기 때문에 오브젝트마다 만들어지거나 생성되지 않는다.

    coffeeBeans: number = 0; // instance (object) level
    // 클래스 내부에서는 let, const를 붙히지 않고 function도 붙히지 않는다.
    // 클래스 내부의 맴버 변수에 접근할 땐 this를 붙혀 접근해야한다.

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }
    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32);
  console.log(maker);
}
