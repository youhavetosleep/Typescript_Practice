{
  type CoffeeCup = {
    shots: number;
    // '?'의 의미는 있어도 없어도 된다는 의미
    hasMilk?: boolean;
    hasSugar?: boolean;
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

  // CoffeeMachine implements CoffeeMaker의 의미는 CoffeeMaker안에 명시된 것 그대로 실행시켜야함.
  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    public constructor(coffeeBeans: number) {
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

  // CoffeeMachine에서 상속을 받겠다는 의미
  class CaffeLatteMachine extends CoffeeMachine {
    // 자식에서 constructor를 구현하는 경우엔
    // 부모의 constructor도 가져와야 한다.
    constructor(beans: number, public readonly serialNumber: string) {
      // constructor는 함수가 아니기에 super로 바로 받아온다.
      super(beans);
    }
    private steamMilk(): void {
      console.log("steaming some milk...");
    }

    makeCoffee(shots: number): CoffeeCup {
      // super를 이용하여 부모 클래스에 있는 함수를 상속받는다.
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }
  // 다형성의 장점
  // 동일한 함수를 어떤 클래스인지 구분하지 않고 호출가능하다.
  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CaffeLatteMachine(23, "WASD"),
    new SweetCoffeeMaker(15),
  ];
  machines.forEach((machine) => {
    // 동일한 부모의 클래스를 상속했을 때 어떤 클래스인지 구분하지 않고 공통된 api를 호출할 수 있다.
    console.log("-------------");
    machine.makeCoffee(2);
    machine.makeCoffee
  });
}
