{
  type CoffeeCup = {
    shots: number;
    // '?'의 의미는 있어도 없어도 된다는 의미
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

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

    public constructor(
      coffeeBeans: number,
      private milk: MilkForher,
      private sugar: SugarProvider
    ) {
      this.coffeeBeans = coffeeBeans;
    }

    // static makeMachine(coffeeBeans: number): CoffeeMachine {
    //   return new CoffeeMachine(coffeeBeans);
    // }

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
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }

  // interface를 사용
  interface MilkForher {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }
  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  // 저렴한 거품기
  class CheapMilkSteamer implements MilkForher {
    private streamMilk(): void {
      console.log("Steaming some milk...");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.streamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class FancyMilkSteamer implements MilkForher {
    private streamMilk(): void {
      console.log("Steaming some milk...");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.streamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class ColdMilkSteamer implements MilkForher {
    private streamMilk(): void {
      console.log("Steaming some milk...");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.streamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class NoMilk implements MilkForher {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // 설탕 제조기
  class CandySugarMixer implements SugarProvider {
    private getSugar() {
      console.log("Getting some sugar from candy...");
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      this.getSugar();
      return {
        ...cup,
        hasSugar: true,
      };
    }
  }

  class SugarMixer implements SugarProvider {
    private getSugar() {
      console.log("Getting some sugar from jar!!!");
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      this.getSugar();
      return {
        ...cup,
        hasSugar: true,
      };
    }
  }

  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // ! 중복시키지 않아도 사용할 수 있다.
  // CoffeeMachine에서 상속을 받겠다는 의미
  // class CaffeLatteMachine extends CoffeeMachine {
  //   // 자식에서 constructor를 구현하는 경우엔
  //   // 부모의 constructor도 가져와야 한다.
  //   constructor(
  //     beans: number,
  //     public readonly serialNumber: string,
  //     private milkForher: MilkForher
  //   ) {
  //     // constructor는 함수가 아니기에 super로 바로 받아온다.
  //     super(beans);
  //   }
  //   // 아래 steamMilk는 위에 만들어두었기 때문에 필요가 없어짐.
  //   // milkForher을 사용하여 steamMilk를 구현
  //   // private steamMilk(): void {
  //   //   console.log("steaming some milk...");
  //   // }

  //   makeCoffee(shots: number): CoffeeCup {
  //     // super를 이용하여 부모 클래스에 있는 함수를 상속받는다.
  //     const coffee = super.makeCoffee(shots);
  //     // CheapMilkSteamer을 사용하여 라떼를 만듦
  //     return this.milkForher.makeMilk(coffee);
  //   }
  // }

  // class SweetCoffeeMaker extends CoffeeMachine {
  //   //CoffeeMachine을 상속했기 때문에 bean의 정보도 가져와야한다.
  //   constructor(beans: number, private sugar: SugarProvider) {
  //     // 상속한 자식 노드에선 super의 constructor를 호출해야한다.
  //     super(beans);
  //   }

  //   makeCoffee(shots: number): CoffeeCup {
  //     const coffee = super.makeCoffee(shots);
  //     return this.sugar.addSugar(coffee);
  //   }
  // }

  // 컴포지션은 코드의 재사용을 높혀주는 것.
  // CheapMilkSteamer, CandySugarMixer를 밭아옴
  // class SweetCaffeLatteMachine extends CoffeeMachine {
  //   constructor(
  //     private beans: number,
  //     private milk: MilkForher,
  //     private sugar: SugarProvider
  //   ) {
  //     super(beans);
  //   }
  //   makeCoffee(shots: number): CoffeeCup {
  //     const coffee = super.makeCoffee(shots);
  //     return this.milk.makeMilk(this.sugar.addSugar(coffee));
  //   }
  // }
  //!

  // ! 이렇게 작성하면 재사용성이 떨어진다.
  // CandySugarMixer, CheapMilkSteamer 클래스가 강력하게 커플링되어있기 때문에
  // 새로운 클래스를 연결할 때 연결되어있는 모든 클래스를 바꿔줘야한다.
  // const cheapMilkMaker = new CheapMilkSteamer();
  // const candySugar = new CandySugarMixer();
  // const sweetMachine = new SweetCoffeeMaker(12, candySugar);
  // const latteMachine = new CaffeLatteMachine(12, "AA", cheapMilkMaker);
  // const sweetLatteMachine = new SweetCaffeLatteMachine(
  //   12,
  //   cheapMilkMaker,
  //   candySugar
  // );
  // !

  // interface를 활용한 재사용성 극대화
  // Milk
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();
  const noMilk = new NoMilk();
  // Sugar
  const candySugar = new CandySugarMixer();
  const sugar = new SugarMixer();
  const noSugar = new NoSugar();

  // 내가 원하는 용도에 따라 SweetCoffeeMaker, CaffeLatteMachine을 다르게 사용할 수 있게 된다.
  // 또한 CaffeLatteMachine도 중복되어 사용하지 않아도 된다!
  // Milk
  const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
  const fancyLatteMachine = new CoffeeMachine(12, fancyMilkMaker, noSugar);
  const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);

  // Sugar
  const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar);
  const sweetMachine = new CoffeeMachine(12, noMilk, sugar);
  const sweetLatteMachine = new CoffeeMachine(12, cheapMilkMaker, candySugar);
}
