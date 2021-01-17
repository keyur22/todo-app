export const addTodo = (todoList, { name, selectedBucketId }) => {
  return [
    ...todoList,
    {
      id: todoList.length ? todoList[todoList.length - 1].id + 1 : 1,
      name: name,
      bucketId: selectedBucketId,
      isCompleted: false
    }
  ];
};

export const editTodo = (todoList, { id, name, selectedBucketId }) => {
  return todoList.map((todo) => {
    if (todo.id === id) {
      return { ...todo, name, bucketId: selectedBucketId };
    }
    return todo;
  });
};

export const deleteTodoWithBucketId = (todoList, { id }) => {
  return todoList.filter((todo) => todo.bucketId !== id);
};

export const deleteTodo = (todoList, { id }) => {
  return todoList.filter((todo) => todo.id !== id);
};

export const changeCompletedStatus = (todoList, { id }) => {
  return todoList.map((todo) => {
    if (todo.id === id) {
      return { ...todo, isCompleted: !todo.isCompleted };
    }
    return todo;
  });
};
