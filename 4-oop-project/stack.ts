{
  // interface를 사용하게 된다면 다른 종류의 스택을 도입하거나 변경이 필요할 경우
  // class의 변경 없이 interface만 변경하면 된다.
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): void;
  }

  type StackNode = {
    readonly value: string;
    readonly next?: StackNode;
  };

  class StackImpl implements Stack {
    // 외부에서 읽기만 할 수 있고
    // 내부에서만 변경가능하도록
    private _size: number = 0;
    private head?: StackNode;
    get size() {
      return this._size;
    }
    push(value: string) {
      const node: StackNode = {value, next: this.head}
      this.head = node;
      this._size++;
    }
    pop(): string {
      // null == undefined, null !== undefined
      if(this.head == null) {
        throw new Error("stack is empty!")
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }
  const stack = new StackImpl();
  stack.push('js')
  stack.push('jy')
  stack.push('love')
  while(stack.size !==0) {
    console.log(stack.pop())
  }
  stack.pop()
}
