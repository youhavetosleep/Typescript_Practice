{
  type ToDo = {
    title: string;
    description: string;
  };
  // 불변성을 유지하기 위해서 readonly로 설정!
  function display(todo: Readonly<ToDo>) {}
}
