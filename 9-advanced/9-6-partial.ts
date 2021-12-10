{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: "high" | "low";
  };
  // Partial은 부분적인 것만 바꾸고 싶을 때 사용 가능 
  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...fieldsToUpdate };
  }
  const todo: ToDo = {
    title: "learn TypeScript",
    description: "study hard",
    label: 'study',
    priority: 'high'
  };
    // Partial은 부분적인 것만 바꾸고 싶을 때 사용 가능 
  const updated = updateTodo(todo, {priority: 'low'});
  console.log(updated)
}
