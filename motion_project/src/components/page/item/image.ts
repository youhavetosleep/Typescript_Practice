import { BaseComponent } from "../../component.js";

export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`
    <section class="image">
      <div class="image_holder">
        <img class="image_thumbnail">
      </div>
      <h2 class="image_title"></h2>
    </section>`);
    // '! as HTMLElement'
    // null 이 아니고 HTMLElement라는 것을 표기해주기 위해 사용
    // firstElementChild는 5번째 줄을 의미

    const imageElement = this.element.querySelector(
      ".image_thumbnail"
    )! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector(
      ".image_title"
    )! as HTMLParagraphElement;
    titleElement.textContent = title;
  }
}
