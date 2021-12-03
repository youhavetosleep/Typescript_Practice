{
  // stack을 generic 타입으로 변경하기
  // interface를 사용하게 된다면 다른 종류의 스택을 도입하거나 변경이 필요할 경우
  // class의 변경 없이 interface만 변경하면 된다.
  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>;
  };

  class StackImpl<T> implements Stack<T> {
    // 외부에서 읽기만 할 수 있고
    // 내부에서만 변경가능하도록
    private _size: number = 0;
    private head?: StackNode<T>;
    constructor(private capacity: number) {}
    get size() {
      return this._size;
    }
    push(value: T) {
      if (this.size === this.capacity) {
        throw new Error("Stack is full!");
      }
      const node: StackNode<T> = { value, next: this.head };
      this.head = node;
      this._size++;
    }
    pop(): T {
      // null == undefined, null !== undefined
      if (this.head == null) {
        throw new Error("stack is empty!");
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }
  const stack = new StackImpl<string>(10);
  stack.push("js");
  stack.push("jy");
  stack.push("love");
  while (stack.size !== 0) {
    console.log(stack.pop());
  }

  const stack2 = new StackImpl<number>(10);
  stack2.push(1);
  stack2.push(2);
  stack2.push(3);
  while (stack2.size !== 0) {
    console.log(stack2.pop());
  }
}
