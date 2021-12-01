{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  // 정보를 은닉할 수 있는 방법
  // 1. public - 따로 작성하지 않으면 모두 pulic
  // 2. private - 외부에서 내부의 상태를 나타내고 싶지 않을 때
  // 3. protected - 상속받은 클래스 내에서는 접근이 가능하고, 상속 받지 않는 외부에선 접근 불가하다.

  // interface
  // 외부적으로 사용하는 이름
  // 추상화를 극대화 하기 위해 사용
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }
  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  // CoffeeMachine implements CoffeeMaker의 의미는 CoffeeMaker안에 명시된 것 그대로 실행시켜야함.
  // 두가지(CoffeeMaker, CommercialCoffeeMaker)의 인터페이스 규약을 따라가는 클래스
  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }
    clean() {
      console.log("cleaning the machine");
    }
    // 외부에서 접근하지 못하도록 은닉화 시켜주는 방법 private
    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }
    private preheat(): void {
      console.log("heating up...🔥");
    }
    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...☕️`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  // coffeeBeans가 private로 설정되어 있기 때문에 변경할 수 없다.
  // maker.coffeeBeans = 3;
  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      // 해당하는 인터페이스에 따라 다른 api를 사용할 수 있다!
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }
  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      // 해당하는 인터페이스에 따라 다른 api를 사용할 수 있다!
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }
  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  const amateur = new AmateurUser(maker);
  const pro = new ProBarista(maker);
  pro.makeCoffee();
}
