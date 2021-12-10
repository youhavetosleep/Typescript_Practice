{
  // Pick 유틸리티 타입 사용.
  // 원하는 속성과 값만 뽑아서 만들 수 있다.
  // 내가 원하는 것만 선별해서 사용가능
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };
  // Pick을 활용하여 쓰고싶은 값만 사용
  type VideoMetadata = Pick<Video, "id" | "title">;

  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://..",
      data: "byte-data..",
    };
  }

  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id: id,
      title: "title",
    };
  }
}
