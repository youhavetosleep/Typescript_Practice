{
  // Omit은 Pick과 반대로 해당 속성을 빼고 사용하는 것이 가능하다.
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetadata = Omit<Video, "url" | "data">;

  function getVideo1(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://..",
      data: "byte-data..",
    };
  }

  function getVideoMetadata1(id: string): VideoMetadata {
    return {
      id: id,
      title: "title",
    };
  }
}
