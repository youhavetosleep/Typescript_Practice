import { BaseComponent } from '../component.js';

export class PageComponent extends BaseComponent <HTMLUListElement> {
  constructor() {
    // super를 이용하여 부모의 constructor를 가져온다. 
    super('<ul class="page">This is PageComponent!</ul>')
  }
  // attachTo안에 있는 insertAdjacentElement의 사용하여
  // 페이지를 자동으로 추가시킬 수 있다.(?)
  // attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
  //   parent.insertAdjacentElement(position, this.element);
  // }
}
