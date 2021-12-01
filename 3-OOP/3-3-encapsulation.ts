{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  // 정보를 은닉할 수 있는 방법
  // 1. public - 따로 작성하지 않으면 모두 pulic
  // 2. private - 외부에서 내부의 상태를 나타내고 싶지 않을 때
  // 3. protected - 상속받은 클래스 내에서는 접근이 가능하고, 상속 받지 않는 외부에선 접근 불가하다.

  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
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
  // coffeeBeans가 private로 설정되어 있기 때문에 변경할 수 없다.
  // maker.coffeeBeans = 3;

  // Getter & Setter
  class User {
    // private firstName: string;
    // private lastName: string;
    // getter에 접근 할 때마다 새로운 데이터가 만들어진다.
    // 접근할 때는 맴버변수에 접근할 때 처럼 사용해줘야 한다.
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        this.internalAge = num;
      }
    }
    // constructor의 변수 앞에 private를 붙히게 되면 47, 48번 째의 의미가 된다.
    // 코드가 조금 더 간결해진다.
    constructor(private firstName: string, private lastName: string) {}
  }
  const user = new User("steve", "jobs");
  // 새로 할당해도 정수로 바뀌지 않는다.
  // getter를 이용한다!
}
