import { BaseComponent } from "../../component.js";

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`
    <section class="video">
      <div class="video_player">
        <iframe class="video_iframe"></iframe>
      </div>
      <h3 class="video_title"></h3>
    </section>`);

    const iframe = this.element.querySelector(
      ".video_iframe"
    )! as HTMLIFrameElement;
    iframe.src = this.convertToEmeddedURL(url); // url -> videoId
    const titleElement = this.element.querySelector(
      ".video_title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }

  // 정규표현식을 활용하여 문자 추출
  private convertToEmeddedURL(url: string): string {
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
    const match = url.match(regExp);
    const videoId = match ? match[1] || match[2] : undefined;
    console.log(match)
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  }
}

// <iframe
//   width='1114'
//   height='636'
//   src='https://www.youtube.com/embed/G-i3vUtasBw'
//   title='YouTube video player'
//   frameborder='0'
//   allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
//   allowfullscreen
// ></iframe>;
