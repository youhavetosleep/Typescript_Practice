// record는 map과 비슷하게
// 하나와 하나를 연결하고 싶을 때
// 하나는 키로 쓰고 나머지를 다른 타입으로 묶고 싶을 때 유용하게 쓰인다.
type PageInfo = {
  title: string;
};
type Page = "home" | "about" | "contact";

const nav: Record<Page, PageInfo> = {
  home: { title: "Home" },
  about: { title: "About" },
  contact: { title: "Contact"}
};
