export interface Component {
  attachTo(parent: HTMLElement, position?: InsertPosition): void;
  removeFrom(parent: HTMLElement): void;
  attach(component: Component, position?: InsertPosition): void;
}

// html element 를 만드는 캡슐화
export class BaseComponent<T extends HTMLElement> implements Component {
  // 제네릭 사용, 하위 컴포넌트에서만 볼 수 있도록 protected
  protected readonly element: T;
  constructor(htmlString: string) {
    const template = document.createElement("template");
    template.innerHTML = htmlString;
    this.element = template.content.firstElementChild! as T;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }

  removeFrom(parent: HTMLElement) {
    if (parent !== this.element.parentElement) {
      throw new Error("Parent mismatch!");
    }
    parent.removeChild(this.element);
  }
  attach(component: Component, position?: InsertPosition) {
    component.attachTo(this.element, position);
  }
}


